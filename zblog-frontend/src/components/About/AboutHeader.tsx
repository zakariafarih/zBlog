"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <section className="grid gap-8">
      <motion.h1
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        About zBlog
      </motion.h1>
      <div className="grid gap-6">
        <p className="text-xl text-slate-200 leading-relaxed">
          zBlog is a sleek, developer-centric blogging platform built with modern
          microservice architecture and cutting-edge UI design. It's a technical
          playground for creative developers.
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-6 py-1">
          <p className="text-lg text-slate-300 italic">
            "zBlog is more than a portfolio piece — it's my technical playground to
            push the limits of what I can create while sharing the journey with the
            community."
          </p>
        </blockquote>
      </div>
    </section>
  );
}