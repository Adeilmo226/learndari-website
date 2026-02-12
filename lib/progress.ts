import { supabase } from './supabase'

export interface LevelProgressData {
  level_id: string
  is_unlocked: boolean
  quiz_score: number | null
  completed_at: string | null
}

/**
 * Fetch all level progress for a user
 */
export async function fetchLevelProgress(userId: string): Promise<Map<string, LevelProgressData>> {
  const { data, error } = await supabase
    .from('level_progress')
    .select('level_id, is_unlocked, quiz_score, completed_at')
    .eq('user_id', userId)

  const progressMap = new Map<string, LevelProgressData>()

  if (error || !data) {
    return progressMap
  }

  for (const row of data) {
    progressMap.set(row.level_id, {
      level_id: row.level_id,
      is_unlocked: row.is_unlocked,
      quiz_score: row.quiz_score,
      completed_at: row.completed_at,
    })
  }

  return progressMap
}

/**
 * Save quiz completion and unlock the next level
 */
export async function saveLevelProgress(
  userId: string,
  levelId: string,
  score: number,
  nextLevelId?: string
): Promise<boolean> {
  const now = new Date().toISOString()

  // Upsert current level as completed
  const { error: upsertError } = await supabase
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
    return false
  }

  // Unlock the next level if provided
  if (nextLevelId) {
    const { error: unlockError } = await supabase
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
      return false
    }
  }

  return true
}
