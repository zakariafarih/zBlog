"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export interface TagCardProps {
  title: string
  image: string
  description?: string
  onClick?: () => void
}

export default function TagCard({ title, image, description, onClick }: TagCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative h-64 w-full rounded-xl shadow-md cursor-pointer overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center brightness-75"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h3 className="text-white text-2xl font-bold mb-2">#{title}</h3>
        {description && (
          <p className="text-gray-200 text-sm max-w-xs">{description}</p>
        )}
      </div>
    </motion.div>
  )
}
