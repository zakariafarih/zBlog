"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const HeroSection = dynamic(() => import("@/components/landingPage/HeroSection"), { ssr: false })
const FeaturesSection = dynamic(() => import("@/components/landingPage/FeaturesSection"), { ssr: false })
const PostsSection = dynamic(() => import("@/components/landingPage/PostsSection"), { ssr: false })
const ArticlesSection = dynamic(() => import("@/components/landingPage/ArticlesSection"), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <HeroSection />
        <FeaturesSection />
        <PostsSection />
        <ArticlesSection />
      </motion.main>
    </div>
  )
}