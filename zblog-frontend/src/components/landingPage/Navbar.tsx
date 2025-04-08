'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from 'react-oidc-context';
import { Search, UserCircle, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import zLogoAnimation from '@/assets/animations/z-logo.json';
import login from '@/assets/animations/login.json';

export default function Navbar() {
  const auth = useAuth();
  const router = useRouter();

  const [location, setLocation] = useState('Fetching location...');
  const [temperature, setTemperature] = useState('Fetching temperature...');
  const [time, setTime] = useState('Fetching time...');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const navItems = auth.isAuthenticated
    ? [
        { label: 'Recent', href: '/recent' },
        { label: 'Tags', href: '/tags' },
        { label: 'Explore', href: '/posts' },
        { label: 'Express', href: '/express' },
        { label: 'Profile', href: '/profile/me' },
        { label: 'About', href: '/about' },
      ]
    : [{ label: 'About', href: '/about' }];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProfileDropdownOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.profile-dropdown')) {
          setIsProfileDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileDropdownOpen]);

  useEffect(() => {
    const getLocationData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          try {
            const weatherResponse = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6c70008d80c4e8b1f295cdf5b6a9bfde&units=metric`
            );
            const weatherData = await weatherResponse.json();
            setLocation(weatherData.name);
            setTemperature(`${weatherData.main.temp}°C`);
          } catch {
            setLocation('Unknown');
            setTemperature('N/A');
          }

          try {
            const timeResponse = await fetch('http://worldtimeapi.org/api/ip');
            const timeData = await timeResponse.json();
            const date = new Date(timeData.datetime);
            const formattedTime = date.toLocaleString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            });
            setTime(formattedTime);
          } catch {
            setTime('N/A');
          }
        });
      } else {
        console.log('Geolocation not supported');
      }
    };

    getLocationData();
  }, []);

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTerm.trim().length > 0) {
      // Navigate to /posts with "keywords" query param
      router.push(`/posts?keywords=${encodeURIComponent(searchTerm.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="grid grid-cols-[auto_1fr_auto_auto] grid-rows-[auto_auto] text-white border-b border-slate-800 bg-slate-900">
      {/* Brand */}
      <div className="row-span-2 bg-slate-800 flex items-center justify-center px-6 border-r border-slate-700">
        <Link href="/" className="text-center">
          <div className="w-12 h-12">
            <Lottie animationData={zLogoAnimation} loop autoplay />
          </div>
          <div className="text-xs text-blue-400 tracking-wide">ZBlog</div>
        </Link>
      </div>

      {/* Top CTA */}
      <div className="col-span-3 flex items-center justify-between px-6 h-10 border-b border-slate-800">
        <p className="text-sm text-slate-400 text-center flex-1">
          Welcome to ZBlog — A blog made by me for you
        </p>
        <div className="flex items-center h-full">
          <div className="px-6 h-full flex items-center border-l border-slate-800">
            <span className="text-sm text-slate-400">
              {time} — {temperature}
            </span>
          </div>
          <div className="px-6 h-full flex items-center border-l border-r border-slate-800">
            <span className="text-blue-400 font-medium cursor-pointer hover:text-white transition-colors">
              Blog like you never did before
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Row */}
      <div className="col-span-3 flex items-center justify-between px-0 h-14 border-t border-slate-800">
        {auth.isAuthenticated ? (
          <nav className="flex h-full">
            {navItems.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  flex items-center px-6 h-full 
                  text-sm uppercase tracking-wide 
                  text-slate-300 hover:text-white 
                  relative group transition-all
                  ${idx !== 0 ? 'border-l border-slate-800' : ''}
                  ${idx === navItems.length - 1 ? 'border-r border-slate-800' : ''}
                `}
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
          </nav>
        ) : (
          <motion.div
            className="flex-1 flex items-center justify-center gap-4 h-full"
            initial={{ opacity: 0.7, scale: 0.98 }}
            animate={{ opacity: [0.6, 1, 0.8], scale: [0.98, 1.01, 0.98] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12">
              <Lottie animationData={login} loop autoplay />
            </div>
            <p
              className="text-lg sm:text-xl text-cyan-300 font-semibold tracking-wide font-mono select-none"
              style={{
                textShadow: "0 0 1px #22d3ee, 0 0 2px #22d3ee, 0 0 4px #0ea5e9",
                animation: "crtFlicker 2.5s infinite",
              }}
            >
              Log in to explore the deeper layers of ZBlog
            </p>
          </motion.div>
        )}

        {/* Search + Auth */}
        <div className="flex h-full">
          {/* Search Bar */}
          <div className="relative h-full flex items-center px-6 border-l border-slate-800">
            <div className="flex items-center gap-3">
              {isSearchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "200px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  type="text"
                  placeholder="Search by title..."
                  className="bg-slate-800 text-sm text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                />
              )}
              <Search
                className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
            </div>
          </div>

          {/* Auth Area */}
          {auth.isAuthenticated ? (
            <div className="relative h-full flex items-center px-6 border-l border-r border-slate-800">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                <UserCircle className="w-5 h-5 text-slate-200" />
                <span className="text-sm hidden md:inline text-slate-300">
                  {auth.user?.profile.email}
                </span>
                <MoreHorizontal className="text-slate-400 w-4 h-4" />
              </div>

              {isProfileDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 bg-black/20 z-40"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  />
                  <div
                    className="profile-dropdown absolute right-0 top-[calc(100%+1px)] w-56 bg-slate-800 rounded-lg shadow-lg border border-slate-700 z-50 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-2">
                      <button
                        onClick={() => {
                          auth.removeUser();
                          setIsProfileDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-slate-700/50 rounded-md transition-colors text-left"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center px-6 border-l border-r border-slate-800">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    auth.signinRedirect().catch((err) => {
                      console.error("Cognito login redirect failed", err);
                      alert("Login failed. Check console for details.");
                    });
                  }}
                  className="text-sm text-slate-300 hover:text-white"
                >
                  Login
                </button>
                <div className="w-px h-4 bg-slate-800" />
                <Link href="/register" className="text-sm text-slate-300 hover:text-white">
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
