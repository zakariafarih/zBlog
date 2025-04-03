"use client"

import React from "react"
import Lottie from "lottie-react"
import newspaperAnimation from "@/assets/animations/recent-newspaper.json"
import { motion } from "framer-motion"

export default function HeaderRecentPosts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-4 border border-slate-700 bg-slate-900 px-4 py-2 md:px-6 md:py-2.5 shadow-inner neon-glow-box"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        {/* Icon + Title */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 md:w-12 md:h-12"
          >
            <Lottie animationData={newspaperAnimation} loop autoplay />
          </motion.div>
          <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-cyan-300">
            Recent Posts
          </h1>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-xs md:text-sm md:text-right max-w-md leading-snug mt-1 md:mt-0">
          Catch up on what the community is talking about!
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-slate-700" />
    </motion.div>
  )
}
