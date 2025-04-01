export const dynamic = "force-dynamic";

import nextDynamic from "next/dynamic";

const ExplorePostsPageClient = nextDynamic(
  () => import("./ExplorePostsPage.client"),
  { ssr: false }
);

export default function ExplorePostsPage() {
  return <ExplorePostsPageClient />;
}
