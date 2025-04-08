'use client'

import React, { useState, useEffect } from 'react'
import ProfileWindow from './ProfileWindow'
import ProfileEditor from './ProfileEditor'
import type { UserProfileDTO } from '@/services/userService'

type ZoneId = 'leftTop' | 'leftBottom' | 'main'

interface WindowDefinition {
  id: string
  title: string
  content: React.ReactNode
}

interface ProfileZonesProps {
  profile: UserProfileDTO
  token?: string
}

export default function ProfileZones({ profile, token }: ProfileZonesProps) {
  const [zones, setZones] = useState<Record<ZoneId, WindowDefinition>>({
    leftTop: {
      id: 'myposts',
      title: 'My Posts',
      content: <p className="text-slate-400 text-sm">Your posts will show here.</p>,
    },
    leftBottom: {
      id: 'bookmarks',
      title: 'Bookmarked Posts',
      content: <p className="text-slate-400 text-sm">Your bookmarks will show here.</p>,
    },
    main: {
      id: 'profile',
      title: 'Edit Profile',
      content: <ProfileEditor profile={profile} token={token} />,
    },
  })

  const [draggingId, setDraggingId] = useState<string | null>(null)
  const [hoverZone, setHoverZone] = useState<ZoneId | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDraggingId(null)
        setHoverZone(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [draggingId])

  const handleDrop = (targetZone: ZoneId) => {
    if (!draggingId) return
    const fromZone = (Object.keys(zones) as ZoneId[]).find(
      (z) => zones[z].id === draggingId
    )
    if (!fromZone || fromZone === targetZone) return

    const newZones = { ...zones }
    const temp = newZones[fromZone]
    newZones[fromZone] = newZones[targetZone]
    newZones[targetZone] = temp
    setZones(newZones)
    setDraggingId(null)
    setHoverZone(null)
  }

  const zoneStyle =
    'relative border-2 border-slate-700 rounded-md bg-slate-900/80 shadow-md min-h-[150px]'

  return (
    <div className="flex gap-6 mt-6">
      {/* Sidebar */}
      <div className="w-[300px] flex flex-col gap-4">
        {(['leftTop', 'leftBottom'] as ZoneId[]).map((zoneKey) => (
          <DropZone
            key={zoneKey}
            zoneId={zoneKey}
            onDrop={handleDrop}
            draggingId={draggingId}
            setHoverZone={setHoverZone}
            isHovered={hoverZone === zoneKey}
            className={zoneStyle}
          >
            <ProfileWindow
              title={zones[zoneKey].title}
              content={zones[zoneKey].content}
              onMove={() => setDraggingId(zones[zoneKey].id)}
              isDraggable={draggingId === zones[zoneKey].id}
              expanded={false}
            />
          </DropZone>
        ))}
      </div>

      {/* Main Zone */}
      <div className="flex-1">
        <DropZone
          zoneId="main"
          onDrop={handleDrop}
          draggingId={draggingId}
          setHoverZone={setHoverZone}
          isHovered={hoverZone === 'main'}
          className={`${zoneStyle} h-full`}
        >
          <ProfileWindow
            title={zones.main.title}
            content={zones.main.content}
            onMove={() => setDraggingId(zones.main.id)}
            isDraggable={draggingId === zones.main.id}
            expanded
          />
        </DropZone>
      </div>
    </div>
  )
}

interface DropZoneProps {
  zoneId: ZoneId
  children: React.ReactNode
  onDrop: (zone: ZoneId) => void
  draggingId: string | null
  setHoverZone: (zone: ZoneId | null) => void
  isHovered: boolean
  className?: string
}

function DropZone({
  zoneId,
  children,
  onDrop,
  draggingId,
  setHoverZone,
  isHovered,
  className = '',
}: DropZoneProps) {
  return (
    <div
      className={`${className} transition-all duration-200 ${
        isHovered ? 'ring-2 ring-cyan-400 border-dashed' : ''
      }`}
      onDragOver={(e) => {
        if (!draggingId) return
        e.preventDefault()
        setHoverZone(zoneId)
      }}
      onDragLeave={() => setHoverZone(null)}
      onDrop={(e) => {
        if (!draggingId) return
        e.preventDefault()
        onDrop(zoneId)
      }}
    >
      {children}

      {isHovered && (
        <div className="absolute inset-0 bg-cyan-400/10 flex items-center justify-center pointer-events-none z-10">
          <span className="text-cyan-300 font-bold text-sm uppercase animate-pulse">
            Drop Here
          </span>
        </div>
      )}
    </div>
  )
}
