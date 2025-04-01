"use client"

export const dynamic = "force-dynamic";

import nextDynamic from "next/dynamic";

const PostPageClient = nextDynamic(
  () => import("./PostPage.client"),
  { ssr: false }
);

export default function PostPage() {
  return <PostPageClient />;
}
