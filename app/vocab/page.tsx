"use client";

import Link from "next/link";
import { BookOpen, Headphones, Lock } from "lucide-react";
import { useUser, SignInButton } from "@clerk/nextjs";

/**
 * Vocab Page - Main vocabulary sets selection
 * Users can browse and select different vocabulary sets to study
 */
export default function VocabPage() {
  const { isSignedIn, isLoaded } = useUser();

  // Vocabulary sets available
  const vocabSets = [
    {
      id: "colors",
      title: "Colors",
      description: "Learn basic color names in Dari",
      wordCount: 12,
      emoji: "🎨",
      free: true,
    },
    {
      id: "animals",
      title: "Animals",
      description: "Learn animal names in Dari",
      wordCount: 14,
      emoji: "🐾",
      free: false,
    },
    {
      id: "food",
      title: "Food",
      description: "Learn common food items in Dari",
      wordCount: 8,
      emoji: "🍽️",
      free: false,
    },
    {
      id: "fruit",
      title: "Fruits",
      description: "Learn fruit names in Dari",
      wordCount: 15,
      emoji: "🍎",
      free: false,
    },
    {
      id: "vegetables",
      title: "Vegetables",
      description: "Learn vegetable names in Dari",
      wordCount: 11,
      emoji: "🥕",
      free: false,
    },
    {
      id: "body",
      title: "Body Parts",
      description: "Learn body part names in Dari",
      wordCount: 12,
      emoji: "🦴",
      free: false,
    },
    {
      id: "days-of-the-week",
      title: "Days of the Week",
      description: "Learn the days of the week in Dari",
      wordCount: 7,
      emoji: "📅",
      free: false,
    },
    {
      id: "seasons",
      title: "Seasons",
      description: "Learn the four seasons in Dari",
      wordCount: 4,
      emoji: "🌸",
      free: false,
    },
    {
      id: "weather",
      title: "Weather",
      description: "Learn weather-related terms in Dari",
      wordCount: 9,
      emoji: "⛅",
      free: false,
    },
    {
      id: "transportation",
      title: "Transportation",
      description: "Learn transportation terms in Dari",
      wordCount: 7,
      emoji: "🚗",
      free: false,
    },
    {
      id: "numbers",
      title: "Numbers",
      description: "Learn to count in Dari from 1 to 1000",
      wordCount: 38,
      emoji: "🔢",
      free: false,
    },
    {
      id: "greetings",
      title: "Greetings",
      description: "Learn common greetings and phrases in Dari",
      wordCount: 10,
      emoji: "👋🏽",
      free: false,
    },
  ];

  const isAuthenticated = isLoaded && !!isSignedIn;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Vocabulary Sets
        </h1>
        <p className="text-xl text-gray-600">
          Choose a vocabulary set to start learning
        </p>
        <p className="text-sm text-gray-400 mt-2">
          More vocab sets coming soon.
        </p>
      </div>

      {/* Vocabulary Sets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vocabSets.map((set) => (
          <VocabSetCard key={set.id} set={set} isAuthenticated={isAuthenticated} />
        ))}
      </div>
    </div>
  );
}

/**
 * Vocab Set Card Component
 * Displays individual vocabulary set with metadata
 */
function VocabSetCard({
  set,
  isAuthenticated,
}: {
  set: {
    id: string;
    title: string;
    description: string;
    wordCount: number;
    emoji: string;
    disabled?: boolean;
    free?: boolean;
  };
  isAuthenticated: boolean;
}) {
  // Locked if: not free, not disabled (coming soon), and user not authenticated
  const isLocked = !set.free && !set.disabled && !isAuthenticated;

  // Coming soon state
  if (set.disabled) {
    return (
      <div className="bg-white p-6 rounded-xl border-2 border-gray-200 opacity-60 cursor-not-allowed">
        <div className="flex items-start justify-between mb-4">
          <div className="text-5xl">{set.emoji}</div>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
            Coming Soon
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{set.title}</h3>
        <p className="text-gray-600 mb-4">{set.description}</p>
        <div className="flex items-center gap-2 text-gray-500">
          <BookOpen className="w-4 h-4" />
          <span className="text-sm">{set.wordCount} words</span>
        </div>
      </div>
    );
  }

  // Locked state - requires sign in
  if (isLocked) {
    return (
      <SignInButton>
        <button className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-red-600 transition-all hover:shadow-lg group text-left w-full cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div className="text-5xl opacity-50">{set.emoji}</div>
            <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full flex items-center gap-1">
              <Lock className="w-3 h-3" />
              Sign in to unlock
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{set.title}</h3>
          <p className="text-gray-600 mb-4">{set.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">{set.wordCount} words</span>
            </div>
            <span className="text-red-600 font-medium group-hover:translate-x-1 transition-transform">
              Sign in →
            </span>
          </div>
        </button>
      </SignInButton>
    );
  }

  // Accessible state
  return (
    <Link
      href={`/vocab/${set.id}`}
      className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-red-600 transition-all hover:shadow-lg group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl group-hover:scale-110 transition-transform">
          {set.emoji}
        </div>
        <div className="flex items-center gap-1 text-green-600">
          <Headphones className="w-4 h-4" />
          <span className="text-sm font-medium">Audio</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{set.title}</h3>
      <p className="text-gray-600 mb-4">{set.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500">
          <BookOpen className="w-4 h-4" />
          <span className="text-sm">{set.wordCount} words</span>
        </div>
        <span className="text-red-600 font-medium group-hover:translate-x-1 transition-transform">
          Start →
        </span>
      </div>
    </Link>
  );
}