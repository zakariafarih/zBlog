"use client";

import React from "react";

export default function TechStackOverview() {
  return (
    <section className="grid gap-8">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
        Tech Stack & Architecture
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Backend */}
        <div className="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-blue-500/50 transition-colors">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend</h3>
          <ul className="space-y-3 text-slate-300">
            {[
              "Spring Boot 3+ microservices",
              "AWS Cognito + OIDC authentication",
              "MySQL on AWS RDS",
              "HTTP/Kafka/event-driven comms",
              "Dockerized, AWS deployment-ready",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Frontend */}
        <div className="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-teal-500/50 transition-colors">
          <h3 className="text-xl font-semibold mb-4 text-teal-400">Frontend</h3>
          <ul className="space-y-3 text-slate-300">
            {[
              "Next.js (App Router)",
              "Shadcn/ui & Tailwind CSS",
              "Framer Motion for animations",
              "Rich TinyMCE editor (dark mode)",
              "Modular, component‑based architecture",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* DevOps */}
        <div className="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-purple-500/50 transition-colors">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">DevOps</h3>
          <ul className="space-y-3 text-slate-300">
            {[
              "Dockerized services",
              "AWS ECS, API Gateway",
              "CI/CD pipelines",
              "Monitoring & logging",
              "AWS Secrets Manager",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}