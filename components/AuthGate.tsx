"use client";

import { useUser, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { Lock } from "lucide-react";

interface AuthGateProps {
  children: React.ReactNode;
  backHref: string;
  backLabel: string;
}

export function AuthGate({ children, backHref, backLabel }: AuthGateProps) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <>{children}</>;
  }

  if (isSignedIn) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen">
      <div className="blur-sm opacity-50 pointer-events-none select-none">
        {children}
      </div>

      <div className="absolute inset-0 flex items-start justify-center pt-24 z-10">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-10 text-center max-w-md mx-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <Lock className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Account Required
          </h2>
          <p className="text-gray-600 mb-8">
            Create a free account to access all vocab sets and track your
            progress
          </p>
          <div className="flex gap-3 justify-center">
            <SignUpButton mode="modal">
              <button className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold">
                Sign Up
              </button>
            </SignUpButton>
            <SignInButton mode="modal">
              <button className="px-6 py-3 bg-white text-red-600 border-2 border-red-600 rounded-xl hover:bg-red-50 transition-colors font-semibold">
                Sign In
              </button>
            </SignInButton>
          </div>
          <div className="mt-6">
            <Link
              href={backHref}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              ← {backLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
