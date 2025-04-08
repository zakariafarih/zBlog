'use client'

import React from 'react'
import Lottie from 'lottie-react'
import hacker from '@/assets/animations/hacker.json'
import { motion } from 'framer-motion'

interface ProfileHeaderProps {
  username: string
}

export default function ProfileHeader({ username }: ProfileHeaderProps) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 p-4 md:p-6 rounded-xl border border-cyan-700/40 bg-slate-900/70 backdrop-blur-md shadow-md shadow-cyan-600/10">
      {/* Lottie Icon */}
      <div className="w-24 h-24 sm:w-30 sm:h-10">
        <Lottie animationData={hacker} loop autoplay />
      </div>

      {/* Animated Text */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold font-mono text-cyan-300 tracking-wide drop-shadow-[0_0_6px_#0ff]">
          {username === 'me' ? 'Your Profile' : `${username}'s Profile`}
        </h1>
        <p className="text-sm sm:text-base mt-1 text-slate-400 font-mono italic tracking-tight">
          Welcome to the control deck. Edit, review, bookmark... it’s all you.
        </p>
      </motion.div>
    </div>
  )
}
