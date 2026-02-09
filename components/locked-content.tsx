'use client'

import { Lock } from 'lucide-react'
import { useUser, SignInButton } from '@clerk/nextjs'

interface LockedContentProps {
  message?: string
}

/**
 * LockedContent Component
 * Displays a lock overlay prompting users to sign in
 * Returns null if user is authenticated
 */
export function LockedContent({ message = "Sign in to unlock this content and save your progress" }: LockedContentProps) {
  const { isSignedIn, isLoaded } = useUser()

  // Don't show lock for authenticated users
  if (!isLoaded || isSignedIn) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Content Locked
        </h2>
        <p className="text-gray-600 mb-6">
          {message}
        </p>
        <SignInButton>
          <button className="w-full py-3 px-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
            Sign In
          </button>
        </SignInButton>
      </div>
    </div>
  )
}

/**
 * Hook to check if content should be locked
 */
export function useIsLocked(): boolean {
  const { isSignedIn, isLoaded } = useUser()
  return isLoaded && !isSignedIn
}
