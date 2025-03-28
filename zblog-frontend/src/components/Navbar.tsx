"use client"

import Link from "next/link"
import { Search, UserCircle } from "lucide-react"
import { useState } from "react"
import { signOut, useSession } from "next-auth/react"
import { motion } from "framer-motion"

export default function Navbar() {
  const { data: session } = useSession()
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <nav className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800 shadow-md">
      {/* Left side: Brand + Links */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="font-bold text-xl text-slate-200 hover:text-white">
          ZBlog
        </Link>
        <Link href="/posts" className="text-slate-300 hover:text-white">
          Explore Posts
        </Link>
        <Link href="/topics" className="text-slate-300 hover:text-white">
          Topics
        </Link>
        <Link href="/about" className="text-slate-300 hover:text-white">
          About
        </Link>
      </div>

      {/* Right side: Search + User Profile */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute w-4 h-4 text-slate-400 left-2 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-slate-600 rounded pl-8 pr-4 py-1 text-sm bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {session?.user ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <UserCircle className="w-8 h-8 text-slate-200" />
            <span className="text-slate-200">
              {session.user.name || session.user.email}
            </span>
            <button
              onClick={() => signOut()}
              className="text-sm text-blue-400 hover:underline"
            >
              Logout
            </button>
          </motion.div>
        ) : (
          <div className="flex space-x-4">
            <Link href="/login" className="text-slate-300 hover:text-white">
              Login
            </Link>
            <Link href="/register" className="text-slate-300 hover:text-white">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
