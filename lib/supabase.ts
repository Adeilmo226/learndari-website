import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export type Database = {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          email: string
          display_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          display_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          display_name?: string | null
          updated_at?: string
        }
      }
      level_progress: {
        Row: {
          id: string
          user_id: string
          level_id: string
          is_unlocked: boolean
          quiz_score: number | null
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          level_id: string
          is_unlocked?: boolean
          quiz_score?: number | null
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          is_unlocked?: boolean
          quiz_score?: number | null
          completed_at?: string | null
          updated_at?: string
        }
      }
      vocabulary_progress: {
        Row: {
          id: string
          user_id: string
          word_dari: string
          mastery_level: number
          times_practiced: number
          last_practiced: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          word_dari: string
          mastery_level?: number
          times_practiced?: number
          last_practiced?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          mastery_level?: number
          times_practiced?: number
          last_practiced?: string | null
          updated_at?: string
        }
      }
    }
  }
}