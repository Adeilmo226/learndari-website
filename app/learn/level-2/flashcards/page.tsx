"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw, Volume2 } from "lucide-react";
import { letterForms } from "@/lib/alphabet";
import { AuthGate } from "@/components/AuthGate";

/**
 * Level 2 Flashcards: Letter Forms
 * Show a random letter form, flip to reveal letter name and position
 */
export default function Level2FlashcardsPage() {
  const [cards] = useState(() => generateFlashcards());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set());

  const currentCard = cards[currentIndex];
  const progress = ((currentIndex + 1) / cards.length) * 100;

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
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

  return (
    <AuthGate backHref="/learn/level-2" backLabel="Back to Level 2">
    <div className="bg-gray-50 py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-3">
          <Link
            href="/learn/level-2"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Level 2
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium rounded-full">
                  Level 2
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Letter Forms Flashcards</h1>
              <p className="text-gray-600 mt-1">
                Card {currentIndex + 1} of {cards.length}
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

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-green-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>{knownCards.size} marked as known</span>
            <span>{cards.length - currentIndex - 1} remaining</span>
          </div>
        </div>

        {/* Flashcard */}
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
              {/* Front of card (Letter form) */}
              <div
                className={`absolute inset-0 w-full h-full bg-white rounded-2xl shadow-2xl border-4 border-gray-200 flex flex-col items-center justify-center p-8 backface-hidden ${
                  isFlipped ? "invisible" : "visible"
                }`}
              >
                <p className="text-gray-500 text-sm mb-2">What letter is this form?</p>
                <div className="text-9xl font-bold text-gray-900 mb-4" dir="rtl">
                  {currentCard.form}
                </div>
                <p className="text-gray-400 text-sm">Click to flip</p>
              </div>

              {/* Back of card (Letter name + position) */}
              <div
                className={`absolute inset-0 w-full h-full bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl border-4 border-green-700 flex flex-col items-center justify-center p-8 backface-hidden rotate-y-180 ${
                  isFlipped ? "visible" : "invisible"
                }`}
              >
                <p className="text-green-100 text-sm mb-2">Letter</p>
                <h2 className="text-4xl font-bold text-white mb-4">
                  {currentCard.letterName}
                </h2>
                <p className="text-green-100 text-sm mb-1">Position</p>
                <p className="text-3xl text-white font-semibold mb-2">
                  {currentCard.position}
                </p>
                <p className="text-green-200 text-sm italic mb-4">
                  {currentCard.positionDescription}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const audio = new Audio(`/audio/alphabet/${currentCard.letterId}.mp3`);
                    audio.play().catch(() => console.log("Audio file not available"));
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                  Play Audio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
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
            disabled={currentIndex === cards.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Completion Message */}
        {currentIndex === cards.length - 1 && (
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              Great job! 🎉
            </h3>
            <p className="text-green-700 mb-4">
              You've completed all {cards.length} cards!
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
                href="/learn/level-2/quiz"
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
    </AuthGate>
  );
}

interface FlashCard {
  form: string;
  letterId: string;
  letterName: string;
  position: string;
  positionDescription: string;
}

const positionDescriptions: Record<string, string> = {
  Isolated: "Standing alone",
  Initial: "Beginning of word",
  Medial: "Middle of word",
  Final: "End of word",
};

function generateFlashcards(): FlashCard[] {
  const cards: FlashCard[] = [];

  for (const letter of letterForms) {
    cards.push({
      form: letter.isolated,
      letterId: letter.id,
      letterName: letter.name,
      position: "Isolated",
      positionDescription: positionDescriptions["Isolated"],
    });
    if (letter.initial) {
      cards.push({
        form: letter.initial,
        letterId: letter.id,
        letterName: letter.name,
        position: "Initial",
        positionDescription: positionDescriptions["Initial"],
      });
    }
    if (letter.medial) {
      cards.push({
        form: letter.medial,
        letterId: letter.id,
        letterName: letter.name,
        position: "Medial",
        positionDescription: positionDescriptions["Medial"],
      });
    }
    if (letter.final) {
      cards.push({
        form: letter.final,
        letterId: letter.id,
        letterName: letter.name,
        position: "Final",
        positionDescription: positionDescriptions["Final"],
      });
    }
  }

  // Shuffle the cards
  return cards.sort(() => Math.random() - 0.5);
}
