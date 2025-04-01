export const dynamic = "force-dynamic";

import nextDynamic from "next/dynamic";

const CreatePostPageClient = nextDynamic(
  () => import("./CreatePostPage.client"),
  { ssr: false }
);

export default function CreatePostPage() {
  return <CreatePostPageClient />;
}
