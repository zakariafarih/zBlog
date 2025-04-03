"use client";

import { useAuth } from "react-oidc-context";
import { motion } from "framer-motion";
import HeroSection from "@/components/landingPage/HeroSection";
import FeaturesSection from "@/components/landingPage/FeaturesSection";
import PostsSection from "@/components/landingPage/PostsSection";
import ArticlesSection from "@/components/landingPage/ArticlesSection";

export default function Home() {
  const auth = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        {/* Auth Debug Section */}
        <div className="mb-10 text-sm text-cyan-300 bg-slate-800 border border-slate-700 rounded-md p-4">
          <p><strong>Auth Status:</strong> {auth.isLoading ? "Loading..." : auth.isAuthenticated ? "Authenticated" : "Not Authenticated"}</p>
          {auth.user && (
            <pre className="mt-2 text-xs text-slate-300 overflow-x-auto max-w-full">
              {JSON.stringify(auth.user.profile, null, 2)}
            </pre>
          )}
          {auth.error && (
            <p className="mt-2 text-red-400">
              Auth Error: {auth.error.message}
            </p>
          )}
        </div>

        {/* Actual Landing Sections */}
        <HeroSection />
        <FeaturesSection />
        <PostsSection />
        <ArticlesSection />
      </motion.main>
    </div>
  );
}
