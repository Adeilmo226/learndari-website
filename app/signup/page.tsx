'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

const handleSignUp = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  setError(null)

  if (password !== confirmPassword) {
    setError('Passwords do not match')
    setLoading(false)
    return
  }

  if (password.length < 6) {
    setError('Password must be at least 6 characters')
    setLoading(false)
    return
  }

  try {
    console.log('Starting signup...')
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    console.log('Signup response:', { data, error })

    if (error) throw error

    if (data.user) {
      console.log('User created:', data.user.id)
      console.log('Session exists?', !!data.session)
      
      // Check if email confirmation is required
      if (data.user.identities && data.user.identities.length === 0) {
        setError('An account with this email already exists')
      } else {
        setSuccess(true)
        console.log('About to redirect...')
        // Auto sign in and redirect after a brief moment
        setTimeout(() => {
          console.log('Redirecting now!')
          window.location.href = '/'
        }, 1500)
      }
    }
  } catch (error: any) {
    console.error('Signup error:', error)
    setError(error.message || 'Failed to create account')
  } finally {
    setLoading(false)
  }
}
}