export interface LevelProgressData {
  level_id: string
  is_unlocked: boolean
  quiz_score: number | null
  completed_at: string | null
}

/**
 * Fetch all level progress for the authenticated user (via API route)
 */
export async function fetchLevelProgress(): Promise<Map<string, LevelProgressData>> {
  const progressMap = new Map<string, LevelProgressData>()

  try {
    const res = await fetch('/api/progress')
    if (!res.ok) return progressMap

    const { data } = await res.json()
    for (const row of data) {
      progressMap.set(row.level_id, {
        level_id: row.level_id,
        is_unlocked: row.is_unlocked,
        quiz_score: row.quiz_score,
        completed_at: row.completed_at,
      })
    }
  } catch (err) {
    console.error('Error fetching progress:', err)
  }

  return progressMap
}

/**
 * Save quiz completion and unlock the next level (via API route)
 */
export async function saveLevelProgress(
  levelId: string,
  score: number,
  nextLevelId?: string
): Promise<boolean> {
  try {
    const res = await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ levelId, score, nextLevelId }),
    })
    return res.ok
  } catch (err) {
    console.error('Error saving progress:', err)
    return false
  }
}
