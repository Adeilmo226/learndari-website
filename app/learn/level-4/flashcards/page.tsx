"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Volume2, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { commonWords } from "@/lib/learn-words";
import { AuthGate } from "@/components/AuthGate";

/**
 * Level 4 Flashcards: Common Words
 * Dari word on front, flip to reveal English + phonetic
 */
export default function Level4FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set());

  const currentWord = commonWords[currentIndex];
  const progress = ((currentIndex + 1) / commonWords.length) * 100;

  const nextCard = () => {
    if (currentIndex < commonWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const flipCard = () => setIsFlipped(!isFlipped);

  const markAsKnown = () => {
    setKnownCards(new Set([...knownCards, currentIndex]));
    nextCard();
  };

  const resetProgress = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
  };

  const playAudio = () => {
    const audioUrl = `/audio/${currentWord.category.toLowerCase()}/${currentWord.id.replace('l4-', '')}.mp3`;
    const audio = new Audio(audioUrl);
    audio.play().catch(() => console.log("Audio file not available yet"));
  };

  return (
    <AuthGate backHref="/learn/level-4" backLabel="Back to Level 4">
    <div className="bg-gray-50 py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-3">
          <Link
            href="/learn/level-4"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Level 4
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium rounded-full">
                  Level 4
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Common Words Flashcards</h1>
              <p className="text-gray-600 mt-1">
                Card {currentIndex + 1} of {commonWords.length}
              </p>
            </div>
            <button
              onClick={resetProgress}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Reset
            </button>
          </div>
        </div>

        <div className="mb-3">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-purple-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>{knownCards.size} marked as known</span>
            <span>{commonWords.length - currentIndex - 1} remaining</span>
          </div>
        </div>

        <div className="mb-3">
          <div
            onClick={flipCard}
            className="relative w-full aspect-[5/3] cursor-pointer perspective-1000"
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              <div
                className={`absolute inset-0 w-full h-full bg-white rounded-2xl shadow-2xl border-4 border-gray-200 flex flex-col items-center justify-center p-8 backface-hidden ${
                  isFlipped ? "invisible" : "visible"
                }`}
              >
                <p className="text-gray-500 text-sm mb-2">Dari</p>
                <h2 className="text-5xl font-bold text-gray-900 mb-6" dir="rtl">
                  {currentWord.dari}
                </h2>
                <p className="text-gray-400 text-sm">Click to flip</p>
              </div>

              <div
                className={`absolute inset-0 w-full h-full bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-2xl border-4 border-purple-700 flex flex-col items-center justify-center p-8 backface-hidden rotate-y-180 ${
                  isFlipped ? "visible" : "invisible"
                }`}
              >
                <p className="text-purple-100 text-sm mb-2">English</p>
                <h2 className="text-4xl font-bold text-white mb-4">{currentWord.english}</h2>
                <p className="text-purple-100 text-sm mb-1">Pronunciation</p>
                <p className="text-xl text-white italic mb-3">{currentWord.phonetic}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio();
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                  Play Audio
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={previousCard}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <div className="flex gap-3">
            <button onClick={nextCard} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              Still Learning
            </button>
            <button onClick={markAsKnown} className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Know It! ✓
            </button>
          </div>
          <button
            onClick={nextCard}
            disabled={currentIndex === commonWords.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {currentIndex === commonWords.length - 1 && (
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-green-900 mb-2">Great job! 🎉</h3>
            <p className="text-green-700 mb-4">
              You've completed all {commonWords.length} cards! You marked {knownCards.size} as known.
            </p>
            <div className="flex gap-3 justify-center">
              <button onClick={resetProgress} className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Study Again
              </button>
              <Link href="/learn/level-4/quiz" className="px-6 py-3 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                Take Quiz
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
    </AuthGate>
  );
}
