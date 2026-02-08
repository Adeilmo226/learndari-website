'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, User, Mail, Trash2, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'

export default function AccountPage() {
  const { user, loading: authLoading, signOut } = useAuth()
  const router = useRouter()

  const [displayName, setDisplayName] = useState('')
  const [originalDisplayName, setOriginalDisplayName] = useState('')
  const [saving, setSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteConfirmText, setDeleteConfirmText] = useState('')
  const [deleting, setDeleting] = useState(false)

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login')
    }
  }, [user, authLoading, router])

  // Fetch user profile
  useEffect(() => {
    async function fetchProfile() {
      if (!user) return

      const { data, error } = await supabase
        .from('user_profiles')
        .select('display_name')
        .eq('id', user.id)
        .single()

      if (!error && data) {
        setDisplayName(data.display_name || '')
        setOriginalDisplayName(data.display_name || '')
      }
    }

    fetchProfile()
  }, [user])

  const handleSaveProfile = async () => {
    if (!user) return

    setSaving(true)
    setSaveMessage(null)

    const { error } = await supabase
      .from('user_profiles')
      .update({
        display_name: displayName.trim() || null,
        updated_at: new Date().toISOString()
      })
      .eq('id', user.id)

    setSaving(false)

    if (error) {
      setSaveMessage({ type: 'error', text: 'Failed to save changes. Please try again.' })
    } else {
      setOriginalDisplayName(displayName.trim())
      setSaveMessage({ type: 'success', text: 'Profile updated successfully!' })
      setTimeout(() => setSaveMessage(null), 3000)
    }
  }

  const handleDeleteAccount = async () => {
    if (!user || deleteConfirmText !== 'DELETE') return

    setDeleting(true)

    try {
      // Delete user data from our tables first
      await supabase.from('vocabulary_progress').delete().eq('user_id', user.id)
      await supabase.from('level_progress').delete().eq('user_id', user.id)
      await supabase.from('user_profiles').delete().eq('id', user.id)

      // Sign out (Note: full account deletion requires admin API or edge function)
      await signOut()
    } catch (error) {
      console.error('Error deleting account:', error)
      setDeleting(false)
      setSaveMessage({ type: 'error', text: 'Failed to delete account. Please try again.' })
    }
  }

  const hasChanges = displayName.trim() !== originalDisplayName

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-red-600" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-600 mt-1">Manage your profile and account</p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <User className="w-5 h-5" />
            Profile
          </h2>

          <div className="space-y-4">
            {/* Email (read-only) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-600">
                <Mail className="w-4 h-4" />
                {user.email}
              </div>
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
            </div>

            {/* Display Name */}
            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
                Display Name
              </label>
              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              />
              <p className="text-xs text-gray-500 mt-1">This is how you'll appear in the app</p>
            </div>

            {/* Save Button */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={handleSaveProfile}
                disabled={!hasChanges || saving}
                className="px-6 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
              >
                {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                Save Changes
              </button>
              {saveMessage && (
                <p className={`text-sm ${saveMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {saveMessage.text}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6">
          <h2 className="text-xl font-semibold text-red-600 mb-2 flex items-center gap-2">
            <Trash2 className="w-5 h-5" />
            Danger Zone
          </h2>
          <p className="text-gray-600 mb-4">
            Once you delete your account, there is no going back. All your progress will be permanently deleted.
          </p>

          {!showDeleteConfirm ? (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-4 py-2 border-2 border-red-600 text-red-600 font-medium rounded-lg hover:bg-red-50 transition"
            >
              Delete Account
            </button>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800 mb-3">
                Type <strong>DELETE</strong> to confirm account deletion:
              </p>
              <input
                type="text"
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                placeholder="Type DELETE"
                className="w-full px-4 py-2 border border-red-300 rounded-lg mb-3 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
              <div className="flex gap-3">
                <button
                  onClick={handleDeleteAccount}
                  disabled={deleteConfirmText !== 'DELETE' || deleting}
                  className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
                >
                  {deleting && <Loader2 className="w-4 h-4 animate-spin" />}
                  Permanently Delete
                </button>
                <button
                  onClick={() => {
                    setShowDeleteConfirm(false)
                    setDeleteConfirmText('')
                  }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
