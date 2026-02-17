"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, CheckCircle, BookOpen, Type, FileText, MessageSquare, Award } from "lucide-react";
import { useUser, SignInButton } from "@clerk/nextjs";
import { fetchLevelProgress, type LevelProgressData } from "@/lib/progress";

/**
 * Learn Page - Reading Dari Path
 * Structured learning path from alphabet to phrases
 */
export default function LearnPage() {
  const { isSignedIn, isLoaded, user } = useUser();
  const isAuthenticated = isLoaded && !!isSignedIn;
  const [progressMap, setProgressMap] = useState<Map<string, LevelProgressData>>(new Map());
  const [loadingProgress, setLoadingProgress] = useState(true);

  // Fetch progress from API
  useEffect(() => {
    if (user?.id) {
      fetchLevelProgress().then((data) => {
        setProgressMap(data);
        setLoadingProgress(false);
      });
    } else {
      setLoadingProgress(false);
    }
  }, [user?.id]);

  // Determine completed levels from DB
  const isLevelCompleted = (levelId: string) => {
    const progress = progressMap.get(levelId);
    return progress?.completed_at != null && (progress?.quiz_score ?? 0) >= 80;
  };

  const isLevelUnlocked = (levelId: string, previousLevelId?: string) => {
    if (!previousLevelId) return true; // Level 1 always unlocked
    return isLevelCompleted(previousLevelId);
  };

  const completedCount = ["level-1", "level-2", "level-3", "level-4", "level-5"]
    .filter(isLevelCompleted).length;

  const levels = [
    {
      id: "level-1",
      number: 1,
      title: "Alphabet Basics",
      description: "Learn all 32 Dari letters with sounds",
      icon: Type,
      href: "/learn/level-1",
      color: "from-red-500 to-red-600",
      free: true,
      previousLevel: undefined,
    },
    {
      id: "level-2",
      number: 2,
      title: "Letter Forms",
      description: "How letters change in different positions",
      icon: FileText,
      href: "/learn/level-2",
      color: "from-green-500 to-green-600",
      free: false,
      previousLevel: "level-1",
    },
    {
      id: "level-3",
      number: 3,
      title: "Simple Words",
      description: "Practice reading 2-3 letter words",
      icon: BookOpen,
      href: "/learn/level-3",
      color: "from-blue-500 to-blue-600",
      free: false,
      previousLevel: "level-2",
    },
    {
      id: "level-4",
      number: 4,
      title: "Common Words",
      description: "Build vocabulary with everyday words",
      icon: MessageSquare,
      href: "/learn/level-4",
      color: "from-purple-500 to-purple-600",
      free: false,
      previousLevel: "level-3",
    },
    {
      id: "level-5",
      number: 5,
      title: "Short Phrases",
      description: "Read and understand simple sentences",
      icon: Award,
      href: "/learn/level-5",
      color: "from-yellow-500 to-yellow-600",
      free: false,
      previousLevel: "level-4",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Learn to Read Dari
        </h1>
        <p className="text-xl text-gray-600">
          Master Dari reading step by step, from alphabet to phrases
        </p>
        <p className="text-sm text-gray-400 mt-2">
          More levels coming soon.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="max-w-2xl mx-auto mb-6 bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>
            <p className="text-gray-600">Keep going! You're doing great.</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-gray-900">
              {loadingProgress ? "..." : completedCount}/{levels.length}
            </div>
            <div className="text-sm text-gray-500">Levels Complete</div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-red-600 to-green-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${(completedCount / levels.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Learning Path */}
      <div className="max-w-4xl mx-auto space-y-6">
        {levels.map((level, index) => {
          const completed = isLevelCompleted(level.id);
          const unlocked = isLevelUnlocked(level.id, level.previousLevel);
          const requiresSignIn = !level.free && !isAuthenticated;

          return (
            <LevelCard
              key={level.id}
              level={level}
              completed={completed}
              unlocked={unlocked}
              requiresSignIn={requiresSignIn}
              isLast={index === levels.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}

function LevelCard({
  level,
  completed,
  unlocked,
  requiresSignIn,
  isLast,
}: {
  level: {
    number: number;
    title: string;
    description: string;
    icon: any;
    href: string;
    color: string;
  };
  completed: boolean;
  unlocked: boolean;
  requiresSignIn: boolean;
  isLast: boolean;
}) {
  const Icon = level.icon;

  // Requires sign in
  if (requiresSignIn) {
    return (
      <div className="relative">
        <SignInButton>
          <button className="block w-full text-left bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all group cursor-pointer">
            <div className="flex items-center gap-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-xl flex items-center justify-center relative opacity-50`}>
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm font-medium rounded-full">
                    Level {level.number}
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
          </button>
        </SignInButton>
        {!isLast && (
          <div className="flex justify-center py-4">
            <div className="w-1 h-8 bg-gray-300 rounded-full" />
          </div>
        )}
      </div>
    );
  }

  // Progress locked
  if (!unlocked) {
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
                  Level {level.number}
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

  // Unlocked / Completed
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
                Level {level.number}
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
          <div className={`w-1 h-8 rounded-full ${unlocked ? 'bg-gradient-to-b from-gray-300 to-gray-400' : 'bg-gray-200'}`} />
        </div>
      )}
    </div>
  );
}
