import "./globals.css";
import CognitoProvider from "@/providers/CognitoProvider";
import Navbar from "@/components/landingPage/Navbar";
import { PostDraftProvider } from "@/context/PostDraftContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CognitoProvider>
          <PostDraftProvider>
            <Navbar />
            {children}
          </PostDraftProvider>
        </CognitoProvider>
      </body>
    </html>
  );
}
