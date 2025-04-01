export const dynamic = "force-dynamic";

import nextDynamic from "next/dynamic";

const AboutPageClient = nextDynamic(() => import("./AboutPage.client"), {
  ssr: false,
});

export default function AboutPage() {
  return <AboutPageClient />;
}
