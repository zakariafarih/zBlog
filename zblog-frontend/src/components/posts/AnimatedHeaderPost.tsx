"use client"

import Lottie from "lottie-react"
import explorerAnimation from "@/assets/animations/explorer-walking.json"
import { motion, useAnimationControls } from "framer-motion"
import { useLayoutEffect, useRef, useState } from "react"

export default function AnimatedHeaderPost() {
  const [showText, setShowText] = useState(false)
  const controls = useAnimationControls()
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let isMounted = true
    if (!containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const detectiveWidth = 64 
    const travelDistance = (containerWidth - detectiveWidth - 30) + containerWidth * 0.25;

    const runAnimation = async () => {
      if (!isMounted) return
      await controls.start({ x: travelDistance, scaleX: 1, transition: { duration: 3.2 } })
      await controls.start({ scaleX: -1, transition: { duration: 0.4 } })
      await controls.start({ x: 0, transition: { duration: 2.8 } })
      await controls.start({ scaleX: 1, transition: { duration: 0.4 } })

      if (!isMounted) return
      setShowText(true)
    }

    runAnimation()
    return () => { isMounted = false }
  }, [controls])

  return (
    <div
      ref={containerRef}
      className="relative bg-slate-900 border border-slate-700 mb-4 px-6 py-2 shadow-inner neon-glow-box"
    >
      {/* Detective Animation */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-16 h-16 z-10 scale-[0.8]" // ⬅️ Smaller and tighter
        initial={{ x: 0, scaleX: 1 }}
        animate={controls}
      >
        <Lottie animationData={explorerAnimation} loop />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showText ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-0 flex flex-col md:flex-row md:items-end md:justify-between w-full pl-20"
      >
        <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-cyan-300">
          Explore Posts
        </h1>
        <p className="text-slate-400 text-xs md:text-sm md:text-right max-w-md mt-1 md:mt-0">
          Use filters and keywords to find the freshest, most relevant content.
        </p>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-slate-700" />
    </div>
  )
}
