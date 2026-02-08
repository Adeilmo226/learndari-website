'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

type AuthContextType = {
  user: User | null
  session: Session | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signOut: async () => {},
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const initializeAuth = async () => {
      try {
        const { data: { session: currentSession }, error } = await supabase.auth.getSession()

        if (error) {
          console.error('Error getting session:', error)
        }

        setSession(currentSession)
        setUser(currentSession?.user ?? null)
      } catch (error) {
        console.error('Error initializing auth:', error)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        setSession(newSession)
        setUser(newSession?.user ?? null)
        setLoading(false)

        // Create user profile on initial sign up
        if (event === 'SIGNED_IN' && newSession?.user) {
          // Use setTimeout to avoid blocking the auth flow
          setTimeout(async () => {
            try {
              await supabase
                .from('user_profiles')
                .upsert({
                  id: newSession.user.id,
                  email: newSession.user.email!,
                  updated_at: new Date().toISOString(),
                }, {
                  onConflict: 'id'
                })
            } catch (error) {
              // Silently fail - profile creation is not critical
              console.error('Error creating user profile:', error)
            }
          }, 0)
        }

        // Handle sign out event
        if (event === 'SIGNED_OUT') {
          setUser(null)
          setSession(null)
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const signOut = useCallback(async () => {
    try {
      setLoading(true)

      // Sign out from Supabase
      const { error } = await supabase.auth.signOut()

      if (error) {
        console.error('Error signing out:', error)
        throw error
      }

      // Clear local state
      setUser(null)
      setSession(null)

      // Navigate to login page with a full page reload to clear any cached state
      window.location.href = '/login'
    } catch (error) {
      console.error('Sign out error:', error)
      // Force clear state and redirect even on error
      setUser(null)
      setSession(null)
      window.location.href = '/login'
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
