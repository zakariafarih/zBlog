import "./globals.css"
import type { Metadata } from "next"
import AuthProvider from "@/components/AuthProvider"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Prafrifwer",
  description: "Write posts on multiple topics",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
        <AuthProvider>
          {/* Always show Navbar */}
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
