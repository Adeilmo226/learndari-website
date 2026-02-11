import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { light } from "@clerk/themes";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dari Language Learning",
  description: "Learn Dari with interactive lessons and vocabulary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
        variables: {
          colorPrimary: "#dc2626",
          colorTextOnPrimaryBackground: "#ffffff",
          colorBackground: "#ffffff",
          colorText: "#111827",
          colorTextSecondary: "#4b5563",
          colorInputBackground: "#ffffff",
          colorInputText: "#111827",
          borderRadius: "0.5rem",
          fontFamily: "Inter, sans-serif",
        },
        elements: {
          formButtonPrimary:
            "bg-red-600 hover:bg-red-700 text-white shadow-md",
          card: "shadow-lg border border-gray-200",
          headerTitle: "text-gray-900 font-bold",
          headerSubtitle: "text-gray-600",
          socialButtonsBlockButton:
            "border border-gray-300 hover:bg-gray-50 text-gray-700",
          formFieldInput:
            "border border-gray-300 focus:border-red-500 focus:ring-red-500",
          footerActionLink: "text-red-600 hover:text-red-700",
          userButtonAvatarBox: "w-9 h-9",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen pt-20 pb-24 md:pb-8">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}