"use client"

export const dynamic = "force-dynamic";

import nextDynamic from "next/dynamic";

const RegisterPageClient = nextDynamic(
  () => import("./RegisterPage.client"),
  { ssr: false }
);

export default function RegisterPage() {
  return <RegisterPageClient />;
}
