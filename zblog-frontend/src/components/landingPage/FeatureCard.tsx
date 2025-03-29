"use client"

import React from "react"
import { FileText, TerminalSquare, Server } from "lucide-react"
import { motion } from "framer-motion"

export interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center text-center p-6 border border-slate-700 rounded-lg shadow-md bg-slate-800"
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="mb-4">
        {icon ? (
          icon
        ) : (
          <FileText className="w-12 h-12 text-slate-300" />
        )}
      </div>
      <h3 className="font-semibold text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </motion.div>
  )
}
