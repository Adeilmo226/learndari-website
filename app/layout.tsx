import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* Adjusted padding: pt-20 for header height, pb-24 for mobile nav */}
        <main className="min-h-screen pt-20 pb-24 md:pb-8">
          {children}
        </main>
		<Footer />
      </body>
    </html>
  );
}