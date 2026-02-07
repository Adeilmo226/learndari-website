'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()

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
    console.log('Starting sign out...')
    const { error } = await supabase.auth.signOut()
    console.log('Sign out result:', error)
    if (error) throw error
    console.log('Redirecting to login...')
    window.location.href = '/login'
  } catch (error) {
    console.error('Error signing out:', error)
  }
}

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}