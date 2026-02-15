"use client";

import Link from "next/link";
import {
  Calendar,
  MessageCircle,
  Landmark,
  MessageSquare,
  Info,
  ArrowRight,
} from "lucide-react";
import { getDailyProverb } from "@/lib/proverbs";

/**
 * Discover Page
 * Cultural resources and support links
 */
export default function MorePage() {
  const dailyProverb = getDailyProverb();

  const cultureItems = [
    {
      id: "proverbs",
      title: "Dari Proverbs",
      description: "Explore traditional Afghan wisdom and sayings",
      icon: MessageCircle,
      href: "/more/proverbs",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      id: "culture",
      title: "Culture & Traditions",
      description: "Afghan food culture, holidays, and customs",
      icon: Landmark,
      href: "/more/culture",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      id: "word-of-the-day",
      title: "Word of the Day",
      description: "Learn a new Dari word every day",
      icon: Calendar,
      href: "/more/word-of-the-day",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  const supportItems = [
    {
      id: "about",
      title: "About LearnDari",
      description: "Our mission and story",
      icon: Info,
      href: "/more/about",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      id: "feedback",
      title: "Feedback & Contact",
      description: "Share suggestions or report issues",
      icon: MessageSquare,
      href: "/more/feedback",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover
        </h1>
        <p className="text-xl text-gray-600">
          Explore Afghan culture, wisdom, and traditions
        </p>
      </div>

      {/* Proverb of the Day Banner */}
      <div className="bg-gradient-to-br from-red-500 to-green-600 rounded-2xl shadow-xl overflow-hidden mb-12">
        <div className="p-6 sm:p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-6">
            Proverb of the Day
          </p>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Right side: Dari + Phonetic */}
            <div className="md:w-1/2 md:order-2">
              <p className="text-2xl sm:text-3xl font-bold mb-2 text-right" dir="rtl">
                {dailyProverb.dari}
              </p>
              <p className="text-lg text-white/60 italic text-right">
                {dailyProverb.phonetic}
              </p>
            </div>

            {/* Left side: English + Meaning */}
            <div className="md:w-1/2 md:order-1">
              <p className="text-xl font-semibold mb-3">
                &ldquo;{dailyProverb.english}&rdquo;
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <p className="text-white/90">
                  <span className="font-semibold text-white">Meaning:</span>{" "}
                  {dailyProverb.meaning}
                </p>
              </div>
              <span className="inline-block px-3 py-1 bg-white/15 text-white/90 text-sm font-medium rounded-full">
                {dailyProverb.category}
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/20">
            <Link
              href="/more/proverbs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              Browse all proverbs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Culture & Language Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Culture & Language
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureItems.map((item) => (
            <SectionCard
              key={item.id}
              section={item}
            />
          ))}
        </div>
      </div>

      {/* About & Support Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          About & Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportItems.map((item) => (
            <SectionCard
              key={item.id}
              section={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Section Card Component
 */
function SectionCard({
  section,
}: {
  section: {
    id: string;
    title: string;
    description: string;
    icon: any;
    href: string;
    bgColor: string;
    textColor: string;
  };
}) {
  const Icon = section.icon;

  return (
    <Link
      href={section.href}
      className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all group h-full flex flex-col"
    >
      <div
        className={`w-14 h-14 ${section.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
      >
        <Icon className={`w-7 h-7 ${section.textColor}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
        {section.title}
      </h3>
      <p className="text-gray-600 mb-4">{section.description}</p>
      <div className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-2 transition-all text-2xl mt-auto">
        →
      </div>
    </Link>
  );
}
