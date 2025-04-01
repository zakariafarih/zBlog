"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutHeader from "@/components/About/AboutHeader";
import TechStackOverview from "@/components/About/TechStackOverview";
import PersonalNote from "@/components/About/PersonalNote";
import UpcomingFeatures from "@/components/About/UpcomingFeatures";
import ContactSection from "@/components/About/ContactSection";

export default function AboutPageClient() {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 grid gap-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <AboutHeader />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <TechStackOverview />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
          <PersonalNote />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
          <UpcomingFeatures />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
          <ContactSection />
        </motion.div>
      </div>
    </main>
  );
}
