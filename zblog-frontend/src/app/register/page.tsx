"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { UserPlus } from "lucide-react"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
    if (res.ok) {
      router.push("/login")
    } else {
      setError("Registration failed")
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10"
      >
        {/* Left panel with welcome message */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 p-8 text-center text-slate-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 flex flex-col items-center"
          >
            <UserPlus className="w-14 h-14 text-blue-400 mb-2" />
            <h2 className="text-3xl font-bold">Join Our Community</h2>
            <p className="text-slate-400 mt-2 text-sm max-w-xs">
              Register now to start creating, sharing, and discovering awesome content.
            </p>
          </motion.div>
        </div>

        {/* Right panel with form */}
        <div className="p-8 md:p-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold mb-6 text-slate-100 text-center"
          >
            Create a New Account
          </motion.h1>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 mb-4 text-center"
            >
              {error}
            </motion.p>
          )}

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {/* Name */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded bg-slate-700 border border-slate-600 p-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded bg-slate-700 border border-slate-600 p-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </motion.div>

            {/* Password */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded bg-slate-700 border border-slate-600 p-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-md font-semibold shadow hover:bg-blue-500 transition"
              >
                Register
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  )
}
