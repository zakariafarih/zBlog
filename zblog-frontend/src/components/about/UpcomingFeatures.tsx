"use client";

import React from "react";

export default function UpcomingFeatures() {
  const features = [
    "Comments with nested replies and emoji reactions",
    "Editor preview mode integration",
    "Post scheduling and automated notifications",
    "Advanced file versioning and media explorer",
    "Full public sharing & improved collaboration features",
  ];

  return (
    <section className="grid gap-8">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
        What’s Next
      </h2>
      <div className="grid gap-4">
        {features.map((feature, index) => (
          <div
            key={feature}
            className="flex items-center gap-4 p-4 bg-slate-800/50 shadow-[0_0_8px_#0ff6] border border-slate-700 hover:border-cyan-500/50 transition-transform transform hover:scale-105"
          >
            <span className="text-cyan-500 font-mono text-sm">
              0{index + 1}
            </span>
            <p className="text-slate-200">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
