import "./globals.css";
import CognitoProvider from "@/providers/CognitoProvider";
import Navbar from "@/components/landingPage/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CognitoProvider>
          <Navbar />
          {children}
        </CognitoProvider>
      </body>
    </html>
  );
}
