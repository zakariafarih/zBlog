"use client"

import { motion } from "framer-motion"
import HeroSection from "@/components/landingPage/HeroSection"
import FeaturesSection from "@/components/landingPage/FeaturesSection"
import PostsSection from "@/components/landingPage/PostsSection"
import ArticlesSection from "@/components/landingPage/ArticlesSection"

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