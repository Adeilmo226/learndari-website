"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, BookOpen, Brain, Clock, Volume2 } from "lucide-react";
import { dariPhrases, type DariPhrase } from "@/lib/phrases";
import { AuthGate } from "@/components/AuthGate";

/**
 * Level 5: Short Phrases
 * Browse and learn short Dari phrases
 */
export default function Level5Page() {
  // Show "coming soon" if no phrases are available
  if (dariPhrases.length === 0) {
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

          <div className="text-center py-16">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-yellow-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Coming Soon</h1>
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
      </AuthGate>
    );
  }

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
          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-medium rounded-full">
            Level 5
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Short Phrases</h1>
        <p className="text-gray-600 mt-2">Read and understand simple Dari sentences</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        <Link
          href="/learn/level-5/flashcards"
          className="flex items-center gap-4 p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-yellow-600 hover:shadow-lg transition-all group"
        >
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-600 transition-colors">
            <BookOpen className="w-5 h-5 text-yellow-600 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Flashcards</h3>
            <p className="text-gray-600">Review phrases with interactive cards</p>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        <Link
          href="/learn/level-5/quiz"
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
          All Phrases ({dariPhrases.length})
        </h2>
      </div>

      <div className="space-y-3">
        {dariPhrases.map((phrase) => (
          <PhraseCard key={phrase.id} phrase={phrase} />
        ))}
      </div>
    </div>
    </AuthGate>
  );
}

function PhraseCard({ phrase }: { phrase: DariPhrase }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    setIsPlaying(true);
    const audio = new Audio(`/audio/phrases/${phrase.id}.mp3`);
    audio.onended = () => setIsPlaying(false);
    audio.onerror = () => setIsPlaying(false);
    audio.play().catch(() => {
      console.log("Audio file not available");
      setIsPlaying(false);
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
      <div className="flex items-center">
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
        <button
          onClick={playAudio}
          disabled={isPlaying}
          className={`ml-6 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isPlaying
              ? "bg-yellow-600 scale-110"
              : "bg-yellow-100 hover:bg-yellow-600 hover:scale-105"
          }`}
        >
          <Volume2 className={`w-6 h-6 ${isPlaying ? "text-white" : "text-yellow-600 hover:text-white"}`} />
        </button>
      </div>
    </div>
  );
}
