'use client'

import { GripVertical } from 'lucide-react'

interface ProfileWindowProps {
  title: string
  content: React.ReactNode
  onMove: () => void
  isDraggable?: boolean
  expanded?: boolean
}

export default function ProfileWindow({
  title,
  content,
  onMove,
  isDraggable = false,
  expanded = false,
}: ProfileWindowProps) {
  return (
    <div
      draggable={isDraggable}
      onDragStart={(e) => {
        if (!isDraggable) {
          e.preventDefault()
          return
        }
        e.dataTransfer.setData('text/plain', title)
      }}
      className={`relative rounded-md bg-slate-950/90 border border-cyan-600/30 shadow-md transition-all duration-300 ${
        isDraggable ? 'cursor-grab' : 'cursor-default'
      } ${expanded ? 'min-h-[350px]' : 'min-h-[200px]'}
        ${expanded ? 'p-4' : 'p-2'}
      `}
    >
      <div className="flex justify-between items-center px-3 py-2 bg-slate-900 border-b border-cyan-800/30">
        <h3 className="text-cyan-300 text-sm font-mono uppercase tracking-wide">{title}</h3>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onMove()
          }}
          className="text-cyan-500 hover:text-cyan-300 transition p-1"
          title="Initiate Move"
        >
          <GripVertical className="w-4 h-4" />
        </button>
      </div>

      <div className="pt-3">{content}</div>
    </div>
  )
}
