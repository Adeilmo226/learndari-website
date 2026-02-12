"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Brain, Lock, Clock } from "lucide-react";
import { useUser, SignInButton } from "@clerk/nextjs";
import { dariPhrases } from "@/lib/phrases";

/**
 * Level 5: Short Phrases
 * Browse and learn short Dari phrases
 */
export default function Level5Page() {
  const { isSignedIn, isLoaded } = useUser();

  if (isLoaded && !isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Sign in Required</h1>
            <p className="text-gray-600 mb-8">
              Sign in to access Level 5 and continue your learning journey.
            </p>
            <SignInButton>
              <button className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold text-lg">
                Sign In to Continue
              </button>
            </SignInButton>
            <div className="mt-6">
              <Link href="/learn" className="text-gray-500 hover:text-gray-700 transition-colors">
                ← Back to Learning Path
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show "coming soon" if no phrases are available
  if (dariPhrases.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Learning Path
        </Link>

        <div className="text-center py-16">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Content Coming Soon</h1>
          <p className="text-xl text-gray-600 mb-2">
            Level 5: Short Phrases is being prepared.
          </p>
          <p className="text-gray-500">
            Check back soon for Dari phrases and sentences to practice reading.
          </p>
          <Link
            href="/learn"
            className="inline-block mt-8 px-8 py-4 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors font-semibold"
          >
            Back to Learning Path
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/learn"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Learning Path
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-medium rounded-full">
            Level 5
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Short Phrases</h1>
        <p className="text-gray-600 mt-2">Read and understand simple Dari sentences</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        <Link
          href="/learn/level-5/flashcards"
          className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-yellow-600 hover:shadow-lg transition-all group"
        >
          <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-600 transition-colors">
            <BookOpen className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Flashcards</h3>
            <p className="text-gray-600">Review phrases with interactive cards</p>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        <Link
          href="/learn/level-5/quiz"
          className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-green-600 hover:shadow-lg transition-all group"
        >
          <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
            <Brain className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Quiz Mode</h3>
            <p className="text-gray-600">Test your knowledge (80% to pass)</p>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          All Phrases ({dariPhrases.length})
        </h2>
      </div>

      <div className="space-y-3">
        {dariPhrases.map((phrase) => (
          <div key={phrase.id} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">English</p>
                <p className="text-xl font-semibold text-gray-900">{phrase.english}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Dari</p>
                <p className="text-2xl font-semibold text-gray-900 text-left" dir="rtl">
                  {phrase.dari}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Pronunciation</p>
                <p className="text-xl font-medium text-gray-700 italic">{phrase.phonetic}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
