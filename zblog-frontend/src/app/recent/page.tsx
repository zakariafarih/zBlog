"use client"

export const dynamic = "force-dynamic";

import nextDynamic from "next/dynamic";

const RecentPostsPageClient = nextDynamic(
  () => import("./RecentPostsPage.client"),
  { ssr: false }
);

export default function RecentPostsPage() {
  return <RecentPostsPageClient />;
}
