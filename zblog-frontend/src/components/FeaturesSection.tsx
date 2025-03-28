"use client"

import FeatureCard from "./FeatureCard"
import { FileText, TerminalSquare, Server } from "lucide-react"

export interface Feature {
  id: number
  title: string
  description: string
  icon?: React.ReactNode
}

const defaultFeatures: Feature[] = [
  {
    id: 1,
    title: "Create rich posts",
    description: "Write and organize content with images, videos, and more.",
    icon: <FileText className="w-12 h-12 text-slate-300" />,
  },
  {
    id: 2,
    title: "Run live code",
    description: "Test and showcase your code snippets directly in your posts.",
    icon: <TerminalSquare className="w-12 h-12 text-slate-300" />,
  },
  {
    id: 3,
    title: "Share your thoughts",
    description: "Engage with an audience and share your expertise.",
    icon: <Server className="w-12 h-12 text-slate-300" />,
  },
]

export default function FeaturesSection({
  features = defaultFeatures,
}: {
  features?: Feature[]
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </section>
  )
}
