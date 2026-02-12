import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { getSupabaseAdmin } from '@/lib/supabase-server'

/**
 * GET /api/progress - Fetch level progress for the authenticated user
 */
export async function GET() {
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
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { levelId, score, nextLevelId } = body

  if (!levelId || score == null) {
    return NextResponse.json({ error: 'Missing levelId or score' }, { status: 400 })
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
