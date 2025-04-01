"use client";
export const dynamic = "force-dynamic";

import React from "react";
import { motion } from "framer-motion";

import nextDynamic from "next/dynamic"

const AboutHeader = nextDynamic(() => import("@/components/About/AboutHeader"), {
  ssr: false,
});
const TechStackOverview = nextDynamic(() => import("@/components/About/TechStackOverview"), {
  ssr: false,
});
const PersonalNote = nextDynamic(() => import("@/components/About/PersonalNote"), {
  ssr: false,
});
const UpcomingFeatures = nextDynamic(() => import("@/components/About/UpcomingFeatures"), {
  ssr: false,
});
const ContactSection = nextDynamic(() => import("@/components/About/ContactSection"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 grid gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AboutHeader />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <TechStackOverview />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <PersonalNote />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <UpcomingFeatures />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <ContactSection />
        </motion.div>
      </div>
    </main>
  );
}