"use client";

import Link from "next/link";
import { ArrowLeft, Volume2, BookOpen, Brain } from "lucide-react";
import { daysOfWeekVocab, setInfo } from "./data";
import { useAudio } from "@/lib/useAudio";

export default function DaysOfTheWeekPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/vocab"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Vocabulary Sets
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-6xl">📅</span>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{setInfo.title}</h1>
            <p className="text-gray-600 mt-1">{setInfo.description}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        <Link
          href="/vocab/days-of-the-week/flashcards"
          className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-red-600 hover:shadow-lg transition-all group"
        >
          <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
            <BookOpen className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Flashcards</h3>
            <p className="text-gray-600">Review vocabulary with interactive cards</p>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        <Link
          href="/vocab/days-of-the-week/quiz"
          className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-green-600 hover:shadow-lg transition-all group"
        >
          <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
            <Brain className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Quiz Mode</h3>
            <p className="text-gray-600">Test your knowledge with multiple choice</p>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          All Words ({daysOfWeekVocab.length})
        </h2>
      </div>

      <div className="space-y-3">
        {daysOfWeekVocab.map((word) => (
          <VocabWordCard key={word.id} word={word} />
        ))}
      </div>
    </div>
  );
}

function VocabWordCard({ word }: { word: typeof daysOfWeekVocab[0] }) {
  const { isPlaying, playAudio } = useAudio();

  return (
    <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
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
          onClick={() => playAudio(`/audio/days-of-the-week/${word.id}.mp3`)}
          disabled={isPlaying}
          className={`ml-6 w-14 h-14 rounded-full flex items-center justify-center transition-all ${
            isPlaying
              ? "bg-red-600 scale-110"
              : "bg-red-100 hover:bg-red-600 hover:scale-105"
          } disabled:opacity-50`}
          aria-label={`Play pronunciation for ${word.english}`}
        >
          <Volume2
            className={`w-6 h-6 ${
              isPlaying ? "text-white" : "text-red-600"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
