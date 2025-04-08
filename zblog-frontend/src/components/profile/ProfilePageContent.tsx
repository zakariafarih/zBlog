'use client'

import React from 'react'
import type { UserProfileDTO } from '@/services/userService'
import ProfileHeader from './ProfileHeader'
import ProfileZones from './ProfileZones'

interface ProfilePageContentProps {
  profile: UserProfileDTO
  isMe: boolean
  token?: string
}

export default function ProfilePageContent({
  profile,
  isMe,
  token,
}: ProfilePageContentProps) {
  return (
    <div className="w-full min-h-screen bg-slate-950 px-4 md:px-10 py-6 space-y-6">
      {/* Cyberpunk Header with Lottie */}
      <ProfileHeader username={profile.username} />

      {/* ⚡ Zone-based interactive layout */}
      <ProfileZones profile={profile} token={token} />
    </div>
  )
}
