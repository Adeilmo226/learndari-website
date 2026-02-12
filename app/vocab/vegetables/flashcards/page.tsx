"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Volume2, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { vegetablesVocab, setInfo } from "../data";

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set());

  const currentWord = vegetablesVocab[currentIndex];
  const progress = ((currentIndex + 1) / vegetablesVocab.length) * 100;

  const nextCard = () => {
    if (currentIndex < vegetablesVocab.length - 1) {
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

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

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
    const audioUrl = `/audio/vegetables/${currentWord.id}.mp3`;
    const audio = new Audio(audioUrl);
    audio.play().catch(() => {
      console.log("Audio file not available yet");
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/vocab/vegetables"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to {setInfo.title}
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Flashcards</h1>
              <p className="text-gray-600 mt-1">
                Card {currentIndex + 1} of {vegetablesVocab.length}
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

        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-red-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>{knownCards.size} marked as known</span>
            <span>{vegetablesVocab.length - currentIndex - 1} remaining</span>
          </div>
        </div>

        <div className="mb-8">
          <div
            onClick={flipCard}
            className="relative w-full aspect-[3/2] cursor-pointer perspective-1000"
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
                <p className="text-gray-500 text-lg mb-4">English</p>
                <h2 className="text-6xl font-bold text-gray-900 mb-6">
                  {currentWord.english}
                </h2>
                <p className="text-gray-400 text-sm">Click to flip</p>
              </div>

              <div
                className={`absolute inset-0 w-full h-full bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-2xl border-4 border-red-700 flex flex-col items-center justify-center p-8 backface-hidden rotate-y-180 ${
                  isFlipped ? "visible" : "invisible"
                }`}
              >
                <p className="text-red-100 text-lg mb-4">Dari</p>
                <h2 className="text-7xl font-bold text-white mb-4" dir="rtl">
                  {currentWord.dari}
                </h2>
                <p className="text-2xl text-red-100 italic mb-6">
                  {currentWord.phonetic}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio();
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors"
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
            <button
              onClick={nextCard}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Still Learning
            </button>
            <button
              onClick={markAsKnown}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Know It! ✓
            </button>
          </div>

          <button
            onClick={nextCard}
            disabled={currentIndex === vegetablesVocab.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {currentIndex === vegetablesVocab.length - 1 && (
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              Great job! 🎉
            </h3>
            <p className="text-green-700 mb-4">
              You've completed all {vegetablesVocab.length} cards!
              You marked {knownCards.size} as known.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={resetProgress}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Study Again
              </button>
              <Link
                href="/vocab/vegetables/quiz"
                className="px-6 py-3 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
              >
                Take Quiz
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
