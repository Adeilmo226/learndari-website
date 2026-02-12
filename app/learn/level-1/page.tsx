"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Volume2, CheckCircle, BookOpen, Brain } from "lucide-react";
import { dariAlphabet, type DariLetter } from "@/lib/alphabet";

/**
 * Level 1: Alphabet Basics
 * Learn all 32 Dari letters with sounds
 */
export default function Level1Page() {
  const [selectedLetter, setSelectedLetter] = useState<DariLetter | null>(null);
  const [reviewedLetters, setReviewedLetters] = useState<Set<string>>(new Set());

  const handleLetterClick = (letter: DariLetter) => {
    setSelectedLetter(letter);
    setReviewedLetters(new Set([...reviewedLetters, letter.id]));
  };

  const progress = (reviewedLetters.size / dariAlphabet.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Learning Path
          </Link>

          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-full">
                  Level 1
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Alphabet Basics</h1>
              <p className="text-gray-600 mt-2">
                Click on each letter to hear its sound and learn its name
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">
                {reviewedLetters.size}/{dariAlphabet.length}
              </div>
              <div className="text-sm text-gray-500">Letters Reviewed</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-red-600 to-red-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Study Mode Buttons */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/learn/level-1/flashcards"
            className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-red-600 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
              <BookOpen className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">Flashcards</h3>
              <p className="text-gray-600">Review letters with interactive cards</p>
            </div>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            href="/learn/level-1/quiz"
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Alphabet Grid */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                The Dari Alphabet (32 Letters)
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {dariAlphabet.map((letter) => (
                  <LetterButton
                    key={letter.id}
                    letter={letter}
                    isSelected={selectedLetter?.id === letter.id}
                    isReviewed={reviewedLetters.has(letter.id)}
                    onClick={() => handleLetterClick(letter)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Letter Detail Panel */}
          <div className="lg:col-span-1">
            {selectedLetter ? (
              <LetterDetailCard letter={selectedLetter} />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center sticky top-8">
                <div className="text-6xl mb-4">👆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Select a Letter
                </h3>
                <p className="text-gray-600">
                  Click on any letter to see its details and hear its pronunciation
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Letter Button Component
 */
function LetterButton({
  letter,
  isSelected,
  isReviewed,
  onClick,
}: {
  letter: DariLetter;
  isSelected: boolean;
  isReviewed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`aspect-square rounded-xl text-4xl font-bold transition-all relative ${
        isSelected
          ? "bg-red-600 text-white scale-110 shadow-lg"
          : isReviewed
          ? "bg-green-50 text-gray-900 border-2 border-green-200 hover:scale-105"
          : "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:scale-105"
      }`}
    >
      {letter.letter}
      {isReviewed && !isSelected && (
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
          <CheckCircle className="w-3 h-3 text-white" />
        </div>
      )}
    </button>
  );
}

/**
 * Letter Detail Card Component
 */
function LetterDetailCard({ letter }: { letter: DariLetter }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    setIsPlaying(true);
    const audioUrl = `/audio/alphabet/${letter.id}.mp3`;
    const audio = new Audio(audioUrl);

    audio.onended = () => setIsPlaying(false);
    audio.onerror = () => setIsPlaying(false);

    audio.play().catch(() => {
      console.log("Audio file not available");
      setIsPlaying(false);
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
      <div className="text-center mb-8">
        <div className="text-9xl font-bold text-gray-900 mb-4" dir="rtl">
          {letter.letter}
        </div>
        <button
          onClick={playAudio}
          disabled={isPlaying}
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all ${
            isPlaying
              ? "bg-red-600 scale-110"
              : "bg-red-100 hover:bg-red-600 hover:scale-105"
          }`}
        >
          <Volume2 className={`w-8 h-8 ${isPlaying ? "text-white" : "text-red-600"}`} />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Letter Name</p>
          <p className="text-2xl font-bold text-gray-900">{letter.name}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Pronunciation</p>
          <p className="text-2xl font-bold text-gray-900 italic">{letter.phonetic}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Sound</p>
          <p className="text-2xl font-bold text-gray-900">"{letter.sound}"</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-xl">
        <p className="text-sm text-gray-600">
          <strong>Tip:</strong> Listen to the pronunciation and practice saying it out loud.
        </p>
      </div>
    </div>
  );
}
