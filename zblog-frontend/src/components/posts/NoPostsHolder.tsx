"use client"

import React from "react"
import Lottie from "lottie-react"
import emptyStateAnimation from "@/assets/animations/empty-state.json"

export default function NoPostsHolder() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-64 h-64">
        <Lottie animationData={emptyStateAnimation} loop={true} />
      </div>
      <p className="mt-4 text-gray-400 text-center">
        Oops! We couldn&apos;t find any posts matching your filters.
      </p>
    </div>
  )
}
