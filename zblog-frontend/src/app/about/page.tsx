"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutHeader from "@/components/About/AboutHeader";
import TechStackOverview from "@/components/About/TechStackOverview";
import PersonalNote from "@/components/About/PersonalNote";
import UpcomingFeatures from "@/components/About/UpcomingFeatures";
import ContactSection from "@/components/About/ContactSection";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8 grid gap-12">
        {/* Page Header */}
        <CyberBox delay={0}>
          <AboutHeader />
        </CyberBox>

        {/* Tech Stack */}
        <CyberBox delay={0.15}>
          <TechStackOverview />
        </CyberBox>

        {/* Personal Note */}
        <CyberBox delay={0.3}>
          <PersonalNote />
        </CyberBox>

        {/* Upcoming Features */}
        <CyberBox delay={0.45}>
          <UpcomingFeatures />
        </CyberBox>

        {/* Contact */}
        <CyberBox delay={0.6}>
          <ContactSection />
        </CyberBox>
      </div>
    </main>
  );
}

function CyberBox({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="relative border border-slate-700 bg-slate-900/80 px-6 py-6 md:px-8 md:py-8 shadow-[0_0_12px_#0ff6] neon-glow-box backdrop-blur-sm rounded-none transition-all"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-cyan-500/20" />
      {children}
      <div className="absolute bottom-0 left-0 w-full h-px bg-cyan-500/20" />
    </motion.div>
  );
}
