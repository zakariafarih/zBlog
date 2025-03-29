"use client"

import Link from "next/link";
import { Search, UserCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { motion } from "framer-motion";

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const auth = useAuth();
  return auth.isAuthenticated ? (
    <Link href={href} className="text-slate-300 hover:text-white">
      {children}
    </Link>
  ) : (
    <button onClick={() => auth.signinRedirect()} className="text-slate-300 hover:text-white">
      {children}
    </button>
  );
}

export default function Navbar() {
  const auth = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("Auth:", auth);
  }, [auth]);

  return (
    <nav className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800 shadow-md">
      {/* Left side: Brand + Navigation links */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="font-bold text-xl text-slate-200 hover:text-white">
          ZBlog
        </Link>
        <NavItem href="/recent">Recent Posts</NavItem>
        <NavItem href="/tags">Tags</NavItem>
        <NavItem href="/posts">Explore Posts</NavItem>
        <NavItem href="/about">About</NavItem>
      </div>

      {/* Right side: Search input and authentication actions */}
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

        {auth.isAuthenticated ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <UserCircle className="w-8 h-8 text-slate-200" />
            <span className="text-slate-200">{auth.user?.profile.email}</span>
            <button
              onClick={() => auth.removeUser()}
              className="text-sm text-blue-400 hover:underline"
            >
              Logout
            </button>
          </motion.div>
        ) : (
          <div className="flex space-x-4">
            <button onClick={() => auth.signinRedirect()} className="text-slate-300 hover:text-white">
              Login
            </button>
            <Link href="/register" className="text-slate-300 hover:text-white">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
