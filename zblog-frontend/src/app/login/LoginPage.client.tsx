"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "react-oidc-context";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import nextDynamic from "next/dynamic";

// Dynamically import AnimatedBackground
const AnimatedBackground = nextDynamic(
  () => import("@/components/landingPage/AnimatedBackground"),
  { ssr: false }
);

export default function LoginPageClient() {
  const auth = useAuth();
  const router = useRouter();

  // Redirect if already authenticated
  useEffect(() => {
    if (auth.isAuthenticated) {
      router.push("/");
    }
  }, [auth.isAuthenticated, router]);

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      const token = auth.user.access_token;
      console.log("Authorization Header:", `Bearer ${token}`);
    }
  }, [auth.isAuthenticated, auth.user]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <AnimatedBackground />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10"
      >
        {/* Left Branding Side */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 p-8 text-center text-slate-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 flex flex-col items-center"
          >
            <LogIn className="w-14 h-14 text-blue-400 mb-2" />
            <h2 className="text-3xl font-bold">Welcome Back!</h2>
            <p className="text-slate-400 mt-2 text-sm max-w-xs">
              Login to continue creating and sharing amazing content.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Cognito Trigger */}
        <div className="p-8 md:p-10 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold mb-6 text-slate-100 text-center"
          >
            Login to Your Account
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => auth.signinRedirect()}
            className="w-full max-w-xs py-3 px-6 bg-blue-600 text-white rounded-md font-semibold shadow hover:bg-blue-500 transition"
          >
            Sign in with Cognito
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
