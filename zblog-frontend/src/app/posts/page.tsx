"use client";

import React, { Suspense } from "react";
import ExplorePostsContent from "@/components/posts/ExplorePostsContent";
import Fallback from "@/components/Fallback/Fallback";
import ErrorBoundary from "@/components/Fallback/ErrorBoundary";

export default function ExplorePostsPage() {
  return (
    <main className="bg-slate-900 text-white min-h-screen pt-4 pb-16 overflow-hidden">
      <ErrorBoundary fallback={<Fallback message="Something went wrong loading posts." />}>
        <Suspense fallback={<Fallback message="Loading Explore Feed..." />}>
          <ExplorePostsContent />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
