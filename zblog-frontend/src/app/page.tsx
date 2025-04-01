export const dynamic = "force-dynamic";

import nextDynamic from "next/dynamic";

const HomePageClient = nextDynamic(
  () => import("./HomePage.client"),
  { ssr: false }
);

export default function HomePage() {
  return <HomePageClient />;
}
