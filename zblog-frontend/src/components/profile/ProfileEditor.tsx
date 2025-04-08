'use client'

import React, { useState, useEffect } from 'react'
import type { UserProfileDTO } from '@/services/userService'
import { updateMyProfile } from '@/services/userService'
import { useUploadFile } from '@/hooks/s3/useUploadFile'
import Image from 'next/image'
import { Loader2, UploadCloud, Save } from 'lucide-react'

interface ProfileEditorProps {
  profile: UserProfileDTO
  token?: string
}

export default function ProfileEditor({ profile, token }: ProfileEditorProps) {
  const [username, setUsername] = useState(profile.username || '')
  const [bio, setBio] = useState(profile.bio || '')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [avatarFileKey, setAvatarFileKey] = useState(profile.profileImageFileId || '')

  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)
  const { upload, loading: uploading } = useUploadFile()

  // Load avatar from localStorage or fallback to profile prop
  useEffect(() => {
    const cached = localStorage.getItem('profile-avatar-url')
    if (cached) {
      setAvatarUrl(cached)
    } else if (profile.profileImageUrl) {
      setAvatarUrl(profile.profileImageUrl)
      localStorage.setItem('profile-avatar-url', profile.profileImageUrl)
    }
  }, [profile.profileImageUrl])

  const handleFileUpload = async (file: File) => {
    if (!token) return
    const result = await upload(file, 'avatars', token)
    if (result) {
      setAvatarUrl(result.previewUrl)
      setAvatarFileKey(result.fileKey)
      localStorage.setItem('profile-avatar-url', result.previewUrl)
    }
  }

  const handleSave = async () => {
    if (!token) return
    setSaving(true)
    try {
      await updateMyProfile(
        {
          username,
          bio,
          profileImageFileId: avatarFileKey,
        },
        token
      )
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to save profile:', err)
      alert('Something went wrong saving your profile.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-4 font-mono text-slate-300">
      {/* Avatar Section */}
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-cyan-600 shadow shadow-cyan-700/20">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt="Avatar"
              fill
              className="object-cover"
              loading="eager"
              priority
              placeholder="blur"
              blurDataURL="avatars/default-avatar-blur.png"
              onError={() => {
                setAvatarUrl('avatars/default-avatar.png')
                localStorage.removeItem('profile-avatar-url')
              }}
            />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
              No Avatar
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="avatarUpload"
            className="flex items-center gap-2 text-sm text-cyan-400 cursor-pointer hover:text-cyan-300 transition"
          >
            <UploadCloud className="w-4 h-4" />
            Upload New Avatar
          </label>
          <input
            id="avatarUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleFileUpload(e.target.files[0])
              }
            }}
          />
          {uploading && <p className="text-xs text-cyan-300 animate-pulse">Uploading...</p>}
        </div>
      </div>

      {/* Username */}
      <div className="space-y-1">
        <label className="text-sm text-slate-400">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-slate-800 text-slate-100 border border-slate-700 px-3 py-2 rounded-md focus:outline-none focus:border-cyan-500"
        />
      </div>

      {/* Bio */}
      <div className="space-y-1">
        <label className="text-sm text-slate-400">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={3}
          className="w-full bg-slate-800 text-slate-100 border border-slate-700 px-3 py-2 rounded-md focus:outline-none focus:border-cyan-500 resize-none"
        />
      </div>

      {/* Save Button */}
      <div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm px-4 py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
        {success && (
          <span className="ml-4 text-green-400 text-sm animate-pulse">✓ Saved successfully</span>
        )}
      </div>
    </div>
  )
}
