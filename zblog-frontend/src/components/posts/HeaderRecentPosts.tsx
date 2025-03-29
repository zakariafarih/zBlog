"use client"

import React from "react"
import Lottie from "lottie-react"
import newspaperAnimation from "@/assets/animations/recent-newspaper.json"
import { motion } from "framer-motion"

export default function HeaderRecentPosts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-14 h-14 md:w-16 md:h-16"
        >
          <Lottie animationData={newspaperAnimation} loop autoplay />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-bold">Recent Posts</h1>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm md:text-base md:text-right max-w-xl">
        Catch up on what the community is talking about!
      </p>
    </motion.div>
  )
}
