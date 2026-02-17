"use client";

import Link from "next/link";
import { ArrowLeft, Volume2, BookOpen, Brain} from "lucide-react";
import { commonWords } from "@/lib/learn-words";
import { useAudio } from "@/lib/useAudio";
import { AuthGate } from "@/components/AuthGate";

/**
 * Level 4: Common Words
 * Browse common Dari vocabulary words
 */
export default function Level4Page() {

  return (
    <AuthGate backHref="/learn" backLabel="Back to Learning Path">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <Link
        href="/learn"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-3 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Learning Path
      </Link>

      <div className="mb-3">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium rounded-full">
            Level 4
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Common Words</h1>
        <p className="text-gray-600 mt-2">Build vocabulary with everyday Dari words</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        <Link
          href="/learn/level-4/flashcards"
          className="flex items-center gap-4 p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:shadow-lg transition-all group"
        >
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors">
            <BookOpen className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Flashcards</h3>
            <p className="text-gray-600">Review words with interactive cards</p>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        <Link
          href="/learn/level-4/quiz"
          className="flex items-center gap-4 p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-green-600 hover:shadow-lg transition-all group"
        >
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
            <Brain className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Quiz Mode</h3>
            <p className="text-gray-600">Test your knowledge (80% to pass)</p>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          All Words ({commonWords.length})
        </h2>
      </div>

      <div className="space-y-3">
        {commonWords.map((word) => (
          <WordCard key={word.id} word={word} />
        ))}
      </div>
    </div>
    </AuthGate>
  );
}

function WordCard({ word }: { word: typeof commonWords[0] }) {
  const { isPlaying, playAudio } = useAudio();

  return (
    <div className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">English</p>
            <p className="text-xl font-semibold text-gray-900">{word.english}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Dari</p>
            <p className="text-2xl font-semibold text-gray-900 text-left" dir="rtl">
              {word.dari}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Pronunciation</p>
            <p className="text-xl font-medium text-gray-700 italic">{word.phonetic}</p>
          </div>
        </div>

        <button
          onClick={() => playAudio(`/audio/${word.audioFolder}/${word.id.replace('l4-', '')}.mp3`)}
          disabled={isPlaying}
          className={`ml-6 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isPlaying
              ? "bg-purple-600 scale-110"
              : "bg-purple-100 hover:bg-purple-600 hover:scale-105"
          } disabled:opacity-50`}
          aria-label={`Play pronunciation for ${word.english}`}
        >
          <Volume2 className={`w-6 h-6 ${isPlaying ? "text-white" : "text-purple-600"}`} />
        </button>
      </div>
    </div>
  );
}
