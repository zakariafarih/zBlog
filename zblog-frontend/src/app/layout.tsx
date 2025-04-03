import "./globals.css";
import CognitoProvider from "@/providers/CognitoProvider";
import Navbar from "@/components/landingPage/Navbar";
import { PostDraftProvider } from "@/context/PostDraftContext";
import QueryProvider from "@/providers/QueryProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CognitoProvider>
          <QueryProvider>
          <PostDraftProvider>
            <Navbar />
            {children}
          </PostDraftProvider>
          </QueryProvider>
        </CognitoProvider>
      </body>
    </html>
  );
}
