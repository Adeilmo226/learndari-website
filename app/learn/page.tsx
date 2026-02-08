"use client";

import Link from "next/link";
import { Lock, CheckCircle, BookOpen, Type, FileText, MessageSquare, Award } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Learn Page - Reading Dari Path
 * Structured learning path from alphabet to phrases
 */
export default function LearnPage() {
  const { user, loading } = useAuth();
  const isAuthenticated = !loading && !!user;

  // Track completed levels (will be stored in localStorage later)
  const completedLevels = new Set([1]); // Level 1 is unlocked by default

  const levels = [
    {
      id: 1,
      title: "Alphabet Basics",
      description: "Learn all 32 Dari letters with sounds",
      icon: Type,
      href: "/learn/level-1",
      color: "from-red-500 to-red-600",
      unlocked: true,
      free: true, // Free tier - accessible without login
    },
    {
      id: 2,
      title: "Letter Forms",
      description: "How letters change in different positions",
      icon: FileText,
      href: "/learn/level-2",
      color: "from-green-500 to-green-600",
      unlocked: completedLevels.has(1),
      free: false,
    },
    {
      id: 3,
      title: "Simple Words",
      description: "Practice reading 2-3 letter words",
      icon: BookOpen,
      href: "/learn/level-3",
      color: "from-blue-500 to-blue-600",
      unlocked: completedLevels.has(2),
      free: false,
    },
    {
      id: 4,
      title: "Common Words",
      description: "Build vocabulary with everyday words",
      icon: MessageSquare,
      href: "/learn/level-4",
      color: "from-purple-500 to-purple-600",
      unlocked: completedLevels.has(3),
      free: false,
    },
    {
      id: 5,
      title: "Short Phrases",
      description: "Read and understand simple sentences",
      icon: Award,
      href: "/learn/level-5",
      color: "from-yellow-500 to-yellow-600",
      unlocked: completedLevels.has(4),
      free: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Learn to Read Dari
        </h1>
        <p className="text-xl text-gray-600">
          Master Dari reading step by step, from alphabet to phrases
        </p>
      </div>

      {/* Progress Overview */}
      <div className="max-w-2xl mx-auto mb-12 bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>
            <p className="text-gray-600">Keep going! You're doing great.</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-gray-900">
              {completedLevels.size}/{levels.length}
            </div>
            <div className="text-sm text-gray-500">Levels Complete</div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-red-600 to-green-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${(completedLevels.size / levels.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Learning Path */}
      <div className="max-w-4xl mx-auto space-y-6">
        {levels.map((level, index) => (
          <LevelCard
            key={level.id}
            level={level}
            completed={completedLevels.has(level.id)}
            isLast={index === levels.length - 1}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Level Card Component
 * Displays individual level with lock/unlock state
 */
function LevelCard({
  level,
  completed,
  isLast,
  isAuthenticated,
}: {
  level: {
    id: number;
    title: string;
    description: string;
    icon: any;
    href: string;
    color: string;
    unlocked: boolean;
    free: boolean;
  };
  completed: boolean;
  isLast: boolean;
  isAuthenticated: boolean;
}) {
  const Icon = level.icon;

  // Check if level requires sign in (not free and user not authenticated)
  const requiresSignIn = !level.free && !isAuthenticated;

  // Locked state - requires sign in
  if (requiresSignIn) {
    return (
      <div className="relative">
        <Link
          href="/login"
          className="block bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all group"
        >
          <div className="flex items-center gap-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-xl flex items-center justify-center relative opacity-50`}>
              <Lock className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm font-medium rounded-full">
                  Level {level.id}
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  Sign in to unlock
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                {level.title}
              </h3>
              <p className="text-gray-600">{level.description}</p>
            </div>
            <div className="text-gray-400 group-hover:text-red-600 group-hover:translate-x-2 transition-all text-3xl">
              →
            </div>
          </div>
        </Link>
        {!isLast && (
          <div className="flex justify-center py-4">
            <div className="w-1 h-8 bg-gray-300 rounded-full" />
          </div>
        )}
      </div>
    );
  }

  // Progress locked state - previous level not completed
  if (!level.unlocked) {
    return (
      <div className="relative">
        <div className="bg-gray-100 p-6 rounded-2xl border-2 border-gray-200 opacity-60">
          <div className="flex items-center gap-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-xl flex items-center justify-center relative`}>
              <Lock className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm font-medium rounded-full">
                  Level {level.id}
                </span>
                <span className="text-gray-500 text-sm">Complete previous level first</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-500 mb-1">{level.title}</h3>
              <p className="text-gray-500">{level.description}</p>
            </div>
          </div>
        </div>
        {!isLast && (
          <div className="flex justify-center py-4">
            <div className="w-1 h-8 bg-gray-300 rounded-full" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <Link
        href={level.href}
        className="block bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all group"
      >
        <div className="flex items-center gap-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-xl flex items-center justify-center relative group-hover:scale-110 transition-transform`}>
            {completed ? (
              <CheckCircle className="w-8 h-8 text-white" />
            ) : (
              <Icon className="w-8 h-8 text-white" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 bg-gradient-to-r ${level.color} text-white text-sm font-medium rounded-full`}>
                Level {level.id}
              </span>
              {completed && (
                <span className="text-green-600 text-sm font-medium">✓ Completed</span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
              {level.title}
            </h3>
            <p className="text-gray-600">{level.description}</p>
          </div>
          <div className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-2 transition-all text-3xl">
            →
          </div>
        </div>
      </Link>
      {!isLast && (
        <div className="flex justify-center py-4">
          <div className={`w-1 h-8 rounded-full ${level.unlocked ? 'bg-gradient-to-b from-gray-300 to-gray-400' : 'bg-gray-200'}`} />
        </div>
      )}
    </div>
  );
}