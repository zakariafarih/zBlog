"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export interface HeroSectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
}

export default function HeroSection({
  title = "Write posts on multiple topics",
  subtitle = "Create and organize posts with images, videos, code snippets, and more. Execute live code, share your thoughts, and explore new ideas.",
  buttonText = "Join Now",
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-0 left-0 w-72 h-72 bg-slate-500/10 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 right-0 w-72 h-72 bg-slate-600/10 rounded-full filter blur-3xl"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">
            {title}
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl">{subtitle}</p>
          {/* Button Animation: transform origin set to center */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ originX: 0.5, originY: 0.5 }}
            className="inline-block ml-6" // <-- SHIFT BUTTON RIGHT
          >
            <Link href="/register" className="inline-block">
              <button className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-200 rounded-lg font-medium shadow-xl transition-all hover:shadow-slate-500/20">
                {buttonText}
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.4 }}
          className="md:w-1/2"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl transform rotate-6 opacity-40 blur-xl"
            />
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl shadow-2xl">
              <div className="h-64 flex items-center justify-center">
                <span className="text-slate-400">Premium Content Preview</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
