export const dynamic = "force-dynamic";

import nextDynamic from "next/dynamic";

const LoginPageClient = nextDynamic(
  () => import("./LoginPage.client"),
  { ssr: false }
);

export default function LoginPage() {
  return <LoginPageClient />;
}
