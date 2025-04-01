"use client"

export const dynamic = "force-dynamic";

import nextDynamic from "next/dynamic";

const TagsPageClient = nextDynamic(
  () => import("./TagsPage.client"),
  { ssr: false }
);

export default function TagsPage() {
  return <TagsPageClient />;
}
