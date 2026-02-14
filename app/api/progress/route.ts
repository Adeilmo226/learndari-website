import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { auth } from '@clerk/nextjs/server'
import { getSupabaseAdmin } from '@/lib/supabase-server'
import { rateLimit } from '@/lib/rate-limit'

/**
 * GET /api/progress - Fetch level progress for the authenticated user
 */
export async function GET() {
  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const rateLimitResponse = rateLimit(ip)
  if (rateLimitResponse) return rateLimitResponse

  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabaseAdmin = getSupabaseAdmin()
  const { data, error } = await supabaseAdmin
    .from('level_progress')
    .select('level_id, is_unlocked, quiz_score, completed_at')
    .eq('user_id', userId)

  if (error) {
    console.error('Error fetching progress:', error)
    return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 })
  }

  return NextResponse.json({ data: data ?? [] })
}

/**
 * POST /api/progress - Save quiz completion and unlock next level
 */
export async function POST(request: NextRequest) {
  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const rateLimitResponse = rateLimit(ip)
  if (rateLimitResponse) return rateLimitResponse

  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { levelId, score, nextLevelId } = body

  const validLevels = ['level-1', 'level-2', 'level-3', 'level-4', 'level-5']

  if (!levelId || typeof levelId !== 'string' || !validLevels.includes(levelId)) {
    return NextResponse.json({ error: 'Invalid levelId' }, { status: 400 })
  }

  if (typeof score !== 'number' || score < 0 || score > 100) {
    return NextResponse.json({ error: 'Invalid score' }, { status: 400 })
  }

  if (nextLevelId !== undefined && (typeof nextLevelId !== 'string' || !validLevels.includes(nextLevelId))) {
    return NextResponse.json({ error: 'Invalid nextLevelId' }, { status: 400 })
  }

  const supabaseAdmin = getSupabaseAdmin()
  const now = new Date().toISOString()

  // Upsert current level as completed
  const { error: upsertError } = await supabaseAdmin
    .from('level_progress')
    .upsert(
      {
        user_id: userId,
        level_id: levelId,
        is_unlocked: true,
        quiz_score: score,
        completed_at: now,
        updated_at: now,
      },
      { onConflict: 'user_id,level_id' }
    )

  if (upsertError) {
    console.error('Error saving level progress:', upsertError)
    return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 })
  }

  // Unlock the next level if provided
  if (nextLevelId) {
    const { error: unlockError } = await supabaseAdmin
      .from('level_progress')
      .upsert(
        {
          user_id: userId,
          level_id: nextLevelId,
          is_unlocked: true,
          updated_at: now,
        },
        { onConflict: 'user_id,level_id' }
      )

    if (unlockError) {
      console.error('Error unlocking next level:', unlockError)
      return NextResponse.json({ error: 'Failed to unlock next level' }, { status: 500 })
    }
  }

  return NextResponse.json({ success: true })
}
