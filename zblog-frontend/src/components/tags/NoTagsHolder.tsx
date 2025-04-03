'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import emptyBoxAnimation from '@/assets/animations/empty-state.json'

export default function NoTagsHolder() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 px-6 py-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl p-8 text-center neon-glow-box"
      >
        <div className="w-40 h-40 mx-auto mb-6 opacity-90">
          <Lottie animationData={emptyBoxAnimation} loop autoplay />
        </div>

        <h2 className="text-cyan-400 text-2xl font-bold uppercase tracking-wider mb-2">
          No Tags Found
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Looks like there are no topics available yet. Once posts are tagged,
          they’ll appear here automatically.
        </p>
      </motion.div>
    </main>
  )
}
