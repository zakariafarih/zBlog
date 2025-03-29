"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useAuth } from "react-oidc-context"
import { Search, UserCircle, MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import zLogoAnimation from "@/assets/animations/z-logo.json"

export default function Navbar() {
  const auth = useAuth()

  const [location, setLocation] = useState<string>("Fetching location...")
  const [temperature, setTemperature] = useState<string>("Fetching temperature...")
  const [time, setTime] = useState<string>("Fetching time...")
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState<boolean>(false)
  const [isAvatarHovered, setIsAvatarHovered] = useState<boolean>(false)  // Track hover state for disabling animation

  const navItems = [
    { label: "Recent", href: "/recent" },
    { label: "Tags", href: "/tags" },
    { label: "Explore", href: "/posts" },
    { label: "About", href: "/about" },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProfileDropdownOpen) {
        const target = event.target as HTMLElement
        if (!target.closest('.profile-dropdown')) {
          setIsProfileDropdownOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isProfileDropdownOpen])

  // Get user's current location, time, and temperature
  useEffect(() => {
    const getLocationData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude

          // Fetching weather data
          const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6c70008d80c4e8b1f295cdf5b6a9bfde&units=metric`
          )
          const weatherData = await weatherResponse.json()
          setLocation(weatherData.name)
          setTemperature(`${weatherData.main.temp}°C`)

          // Fetching time data based on public IP
          const timeResponse = await fetch("http://worldtimeapi.org/api/ip")
          const timeData = await timeResponse.json()

          // Format the time into a readable format (e.g. "8:23 AM, March 29, 2025")
          const date = new Date(timeData.datetime)
          const formattedTime = date.toLocaleString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
          setTime(formattedTime) // Setting formatted time
        })
      } else {
        console.log("Geolocation not supported")
      }
    }

    getLocationData()
  }, [])

  return (
    <header className="grid grid-cols-[auto_1fr_auto_auto] grid-rows-[auto_auto] text-white border-b border-slate-800 bg-slate-900">
      {/* Brand - spans both rows */}
      <div className="row-span-2 bg-slate-800 flex items-center justify-center px-6 border-r border-slate-700">
        <Link href="/" className="text-center">
          {/* Replace Z letter with Lottie animation */}
          <div className="w-12 h-12">
            <Lottie animationData={zLogoAnimation} loop autoplay />
          </div>
          <div className="text-xs text-blue-400 tracking-wide">ZBlog</div>
        </Link>
      </div>

      {/* Welcome + Time/CTA Top Bar */}
      <div className="col-span-3 flex items-center justify-between px-6 h-10 border-b border-slate-800">
        {/* Centered Welcome Text */}
        <p className="text-sm text-slate-400 text-center flex-1">
          Welcome to ZBlog — A place for devs who build cool stuff.
        </p>
        <div className="flex items-center gap-6 text-sm text-slate-400 whitespace-nowrap">
          <span>{time} — {temperature}</span>
          <span className="text-blue-400 font-medium hover:underline cursor-pointer">
            Let’s Build Together
          </span>
        </div>
      </div>

      {/* Navigation Row */}
      <div className="col-span-3 flex items-center justify-between px-0 h-14 border-t border-slate-800">
        {/* Navigation Items */}
        <nav className="flex h-full">
          {navItems.map((item, idx) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center px-6 h-full text-sm uppercase tracking-wide text-slate-300 hover:text-white transition
                ${idx !== 0 ? 'border-l border-slate-800' : ''}
                ${idx === navItems.length - 1 ? 'border-r border-slate-800' : ''}
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search + Auth */}
        <div className="flex items-center gap-4 px-6">
          <motion.div
            className="relative"
            onClick={() => setIsSearchOpen((prev) => !prev)}
          >
            <Search className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-10 left-0 w-48 p-2 bg-slate-700 border border-slate-600 rounded text-white"
              />
            )}
          </motion.div>

          {auth.isAuthenticated ? (
            <motion.div
              className="relative profile-dropdown"
            >
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                <UserCircle
                  className={`w-6 h-6 text-slate-200 ${isProfileDropdownOpen ? 'transform-none' : 'transform scale-105'}`}
                />
                <span className="text-sm hidden md:inline">{auth.user?.profile.email}</span>
                <MoreHorizontal className="text-slate-200 ml-2 w-5 h-5" />
              </div>
              {isProfileDropdownOpen && (
                <div
                  className="absolute right-1 top-[2rem] w-48 bg-slate-800 text-white text-sm rounded-lg p-2 shadow-lg z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    href="/profile"
                    className="block px-2 py-1.5 text-slate-200 hover:bg-slate-700 rounded transition-colors"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={() => {
                      auth.removeUser();
                      setIsProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-2 py-1.5 text-blue-400 hover:bg-slate-700 rounded transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => auth.signinRedirect()}
                className="text-sm text-slate-300 hover:text-white"
              >
                Login
              </button>
              <Link
                href="/register"
                className="text-sm text-slate-300 hover:text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
