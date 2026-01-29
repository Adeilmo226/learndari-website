import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram, Twitter, Facebook } from "lucide-react";

/**
 * Footer Component
 * Displays site navigation, social links, and copyright info
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-start gap-4 w-fit">
              <div className="relative w-30 h-30 shrink-0">
                <Image
                  src="/Logo.png"
                  alt="Learn Dari Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Column 2: Learn */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vocab" className="text-gray-400 hover:text-white transition-colors">
                  Vocabulary
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-gray-400 hover:text-white transition-colors">
                  Reading
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-gray-400 hover:text-white transition-colors">
                  Explore Words
                </Link>
              </li>
              <li>
                <Link href="/more" className="text-gray-400 hover:text-white transition-colors">
                  More Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/more/about" className="text-gray-400 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/more/feedback" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} LearnDari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}