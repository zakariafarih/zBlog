"use client"

import Lottie from "lottie-react"
import explorerAnimation from "@/assets/animations/explorer-walking.json"
import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function AnimatedHeaderPost() {
  const [showText, setShowText] = useState(false)
  const controls = useAnimationControls()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const detectiveWidth = 96
    const travelDistance = containerWidth - detectiveWidth - 80

    // Step 1: Walk to the right (scaleX: 1)
    controls.start({
      x: travelDistance,
      scaleX: 1,
      transition: { duration: 3.2, ease: [0.33, 1, 0.68, 1] },
    }).then(() => {
      // Step 2: Flip in place
      return controls.start({
        scaleX: -1,
        transition: { duration: 0.4 },
      })
    }).then(() => {
      // Step 3: Walk back left (still flipped)
      return controls.start({
        x: 0,
        transition: { duration: 2.8, ease: [0.33, 1, 0.68, 1] },
      })
    }).then(() => {
      // Step 4: Flip back to face title
      return controls.start({
        scaleX: 1,
        transition: { duration: 0.4 },
      })
    }).then(() => {
      // Step 5: Show text
      setShowText(true)
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full mb-6 h-24 flex items-center overflow-hidden"
    >
      {/* Detective Animation */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-24 h-24 z-10"
        initial={{ x: 0, scaleX: 1 }}
        animate={controls}
      >
        <Lottie animationData={explorerAnimation} loop />
      </motion.div>

      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showText ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-0 flex flex-col md:flex-row md:items-end md:justify-between w-full pl-28"
      >
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
          Explore Posts
        </h1>
        <p className="text-slate-400 text-sm md:text-base md:text-right max-w-xl mt-2 md:mt-0">
          Search and filter through various posts.
        </p>
      </motion.div>
    </div>
  )
}
