'use client'

import React, { useEffect, useRef, useState } from 'react'
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

  useEffect(() => {
    if (!containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const iconWidth = 96
    const maxX = containerWidth - iconWidth - 24

    const sequence = async () => {
      await controls.start({
        x: maxX,
        transition: { duration: 2, ease: 'easeInOut' },
      })

      await controls.start({
        x: 0,
        transition: { duration: 2, ease: 'easeInOut' },
      })

      setShowText(true)
    }

    sequence()
  }, [])

  return (
    <main className="bg-slate-900 text-white min-h-screen pt-8 pb-16 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div
          ref={containerRef}
          className="relative mb-10 min-h-[6rem] flex items-center overflow-visible"
        >
          {/* Animated Tag Icon */}
          <motion.div
            className="absolute left-0 top-3/4 -translate-y-1/2 translate-x-[65px] w-20 h-20"
            initial={{ x: 0 }}
            animate={controls}
          >
            <Lottie
              animationData={tagAnimation}
              loop
              autoplay
              style={{ width: 20, height: 20, transform: 'scale(3)' }}
            />
          </motion.div>

          {/* Text with adjusted margin */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showText ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pl-28 flex flex-col md:flex-row md:items-end md:justify-between w-full"
          >
            <h1 className="text-3xl md:text-4xl font-bold">Explore by Topics</h1>
            <p className="text-slate-400 text-sm md:text-base md:text-right max-w-xl mt-2 md:mt-0">
              Click on a topic to discover relevant posts.
            </p>
          </motion.div>
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
