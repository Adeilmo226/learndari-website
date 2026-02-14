import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <Header />
          <main className="flex-1 pt-20 pb-24 md:pb-0">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}