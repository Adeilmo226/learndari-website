'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

type AuthContextType = {
  user: User | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active session
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user ?? null)
      } catch (error) {
        console.error('Error checking auth session:', error)
      } finally {
        setLoading(false)
      }
    }

    checkUser()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)

        // Create user profile on sign up
        if (event === 'SIGNED_IN' && session?.user) {
          const { error } = await supabase
            .from('user_profiles')
            .upsert({
              id: session.user.id,
              email: session.user.email!,
              updated_at: new Date().toISOString(),
            }, {
              onConflict: 'id'
            })

          if (error && error.code !== '23505') { // Ignore duplicate key errors
            console.error('Error creating user profile:', error)
          }
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    try {
      // Clear local user state first
      setUser(null)

      // Sign out from Supabase - this clears the session cookie
      const { error } = await supabase.auth.signOut()

      if (error) {
        console.error('Supabase signOut error:', error)
      }

      // Small delay to ensure cookies are cleared before navigation
      await new Promise(resolve => setTimeout(resolve, 100))

      // Force a hard navigation to login page
      window.location.href = '/login'
    } catch (error) {
      console.error('Error signing out:', error)
      // Clear state and redirect anyway
      setUser(null)
      window.location.href = '/login'
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}