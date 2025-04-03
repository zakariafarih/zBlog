'use client'

import React, { useLayoutEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useAnimationControls } from 'framer-motion'
import Lottie from 'lottie-react'
import tagAnimation from '@/assets/animations/tag-jiggle.json'
import TagCard from '@/components/tags/TagCard'
import { tagData } from './tagData'

export default function TagsPage() {
  const router = useRouter()
  const [showText, setShowText] = useState(false)
  const controls = useAnimationControls()
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let isMounted = true

    if (!containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const iconWidth = 96
    const maxX = containerWidth - iconWidth - 24

    const runAnimation = async () => {
      if (!isMounted) return

      await controls.start({
        x: maxX,
        transition: { duration: 2, ease: 'easeInOut' },
      })

      if (!isMounted) return

      await controls.start({
        x: 0,
        transition: { duration: 2, ease: 'easeInOut' },
      })

      if (!isMounted) return

      setShowText(true)
    }

    runAnimation()

    return () => {
      isMounted = false
    }
  }, [controls])

  return (
    <main className="bg-slate-900 text-white min-h-screen pt-8 pb-16 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
<div
  ref={containerRef}
  className="relative bg-slate-900 border border-slate-700 px-4 py-2 md:px-6 md:py-2.5 shadow-inner neon-glow-box mb-6"
>
  {/* Animated Tag Icon */}
  <motion.div
    className="absolute top-1/2 -translate-y-1/2 w-14 h-14 z-10"
    initial={{ x: 0 }}
    animate={controls}
  >
    <Lottie
      animationData={tagAnimation}
      loop
      autoplay
      className="scale-[0.8]"
    />
  </motion.div>

  {/* Text */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: showText ? 1 : 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="pl-20 flex flex-col md:flex-row md:items-end md:justify-between w-full"
  >
    <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-cyan-300">
      Explore by Topics
    </h1>
    <p className="text-slate-400 text-xs md:text-sm md:text-right max-w-md mt-1 md:mt-0">
      Click on a topic to discover relevant posts.
    </p>
  </motion.div>

  <div className="absolute bottom-0 left-0 w-full h-px bg-slate-700" />
</div>

        {/* Tag Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {tagData.map((tag) => (
            <motion.div
              key={tag.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <TagCard
                title={tag.title}
                image={tag.image}
                description={tag.description}
                onClick={() => {
                  const query = new URLSearchParams({ tag: tag.title }).toString()
                  router.push(`/posts?${query}`)
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
