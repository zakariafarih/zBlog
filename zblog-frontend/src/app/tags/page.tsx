'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import TagCard from '@/components/tags/TagCard'
import { getAllTags } from '@/services/postService'
import { getSmartTagCategory, TagCategory } from '@/lib/getSmartTagCategory'
import { tagCategoryToBackgroundMap } from '@/lib/tagCategoryToBackgroundMap'
import Fallback from '@/components/Fallback/Fallback'
import NoTagsHolder from '@/components/tags/NoTagsHolder'
import { useAuth } from 'react-oidc-context'

interface TagData {
  title: string
  image?: string
  description?: string
}

export default function TagsPage() {
  const router = useRouter()
  const auth = useAuth()
  const [tags, setTags] = useState<TagData[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const token = auth.user?.access_token
    if (!token) return
  
    async function fetchTags() {
      try {
        const tagNames = await getAllTags(token)
        const tagData: TagData[] = await Promise.all(
          tagNames.map(async (tagName) => {
            const category: TagCategory = await getSmartTagCategory(tagName)
            const image = tagCategoryToBackgroundMap[category]
            return { title: tagName, image, description: '' }
          })
        )
        setTags(tagData)
      } catch (error) {
        console.error('Error fetching tags:', error)
      } finally {
        setLoading(false)
      }
    }
  
    fetchTags()
  }, [auth.user])  

  if (loading) return <Fallback message="Loading Tags" />
  if (!tags.length) return <NoTagsHolder />

  return (
    <main className="bg-slate-900 text-white min-h-screen pt-8 pb-16">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-8 uppercase tracking-wide text-cyan-300">
          Explore by Topics
        </h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {tags.map((tag) => (
            <motion.div
              key={tag.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <TagCard
                title={tag.title}
                image={tag.image!}
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
