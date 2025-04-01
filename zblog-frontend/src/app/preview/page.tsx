export const dynamic = "force-dynamic";

import nextDynamic from "next/dynamic";

const PreviewPageClient = nextDynamic(
  () => import("./PreviewPage.client"),
  { ssr: false }
);

export default function PreviewPage() {
  return <PreviewPageClient />;
}
