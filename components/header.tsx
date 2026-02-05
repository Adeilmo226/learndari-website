"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  BookOpen, 
  GraduationCap, 
  Search, 
  MoreHorizontal,
  User,
  Earth
} from "lucide-react";
import UserMenu from "./usermenu";

/**
 * Header Component
 * - Desktop: Shows navigation at the top with logo and user account
 * - Mobile: Shows logo/account at top, navigation at bottom
 */
export default function Header() {
  const pathname = usePathname();

  // Navigation items for our 4 main sections
  const navItems = [
	{ name: "Explore", href: "/explore", icon: Search },
    { name: "Vocab", href: "/vocab", icon: BookOpen },
    { name: "Learn", href: "/learn", icon: GraduationCap },
    { name: "Discover", href: "/more", icon: Earth },
  ];

  /**
   * Checks if the current path matches the nav item
   * Used to highlight active navigation
   */
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop & Mobile Top Bar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="relative w-30 h-30 shrink-0">
                <Image
                  src="/Logo.png"
                  alt="Learn Dari Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* <div className="hidden sm:block">
                <span className="font-bold text-2xl text-gray-900 block leading-none">
                  Dari Learning
                </span>
                <span className="text-xs text-gray-500 mt-0.5 block">
                  Master the language
                </span>
              </div> */}
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                      active
                        ? "bg-red-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* User Menu Component */}
            <UserMenu />
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50 shadow-lg">
        <div className="grid grid-cols-4 h-20">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 transition-all ${
                  active
                    ? "text-red-600 bg-red-50"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className={`w-6 h-6 ${active ? 'scale-110' : ''} transition-transform`} />
                <span className={`text-xs font-medium ${active ? 'font-semibold' : ''}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}