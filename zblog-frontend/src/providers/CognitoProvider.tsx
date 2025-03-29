"use client"

import { AuthProvider } from "react-oidc-context";
import { cognitoConfig } from "@/lib/cognitoConfig";

export default function CognitoProvider({ children }: { children: React.ReactNode }) {
  return <AuthProvider {...cognitoConfig}>{children}</AuthProvider>;
}
