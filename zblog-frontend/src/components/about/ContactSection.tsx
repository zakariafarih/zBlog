"use client";

import React from "react";
import { GithubIcon, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="grid gap-8">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
        Get in Touch
      </h2>
      <div className="grid gap-6">
        <p className="text-lg text-slate-200">
          I’m always open to collaboration, code reviews, or feedback.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/zakariafarih"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-transform transform hover:scale-105"
          >
            <GithubIcon className="w-5 h-5 text-blue-400" />
            <span className="text-slate-200">GitHub</span>
          </a>
          <a
            href="mailto:zakariafarih142@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700 hover:border-teal-500/50 transition-transform transform hover:scale-105"
          >
            <Mail className="w-5 h-5 text-teal-400" />
            <span className="text-slate-200">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
