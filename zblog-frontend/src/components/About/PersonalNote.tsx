"use client";

import React from "react";

export default function PersonalNote() {
  return (
    <section className="grid gap-8">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
        My Journey
      </h2>
      <div className="grid gap-6 text-lg leading-relaxed">
        <p className="text-slate-200">
          zBlog is my full‑stack learning project — built from scratch with no
          generators, no shortcuts. I'm continuously evolving my skills from
          GraphQL schemas to OAuth security, all while refining a creative and
          seamless developer experience.
        </p>
        <p className="text-slate-300">
          Every new feature is a step toward mastering modern software
          engineering, and zBlog is the living document of that journey.
        </p>
      </div>
    </section>
  );
}