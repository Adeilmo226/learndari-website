"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Info, CheckCircle } from "lucide-react";
import { letterForms, type LetterForms } from "@/lib/alphabet";

/**
 * Level 2: Letter Forms
 * Learn how letters change in different positions
 */
export default function Level2Page() {
  const [selectedLetter, setSelectedLetter] = useState<LetterForms | null>(null);
  const [reviewedLetters, setReviewedLetters] = useState<Set<string>>(new Set());

  const handleLetterClick = (letter: LetterForms) => {
    setSelectedLetter(letter);
    setReviewedLetters(new Set([...reviewedLetters, letter.id]));
  };

  const allReviewed = reviewedLetters.size === letterForms.length;
  const progress = (reviewedLetters.size / letterForms.length) * 100;

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
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium rounded-full">
                  Level 2
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Letter Forms</h1>
              <p className="text-gray-600 mt-2">
                Learn how letters change shape in different positions
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">
                {reviewedLetters.size}/{letterForms.length}
              </div>
              <div className="text-sm text-gray-500">Letters Reviewed</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-green-600 to-green-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex gap-4">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Understanding Letter Forms
              </h3>
              <p className="text-blue-800 mb-3">
                In Dari (Persian) script, letters change shape depending on where they appear in a word:
              </p>
              <ul className="space-y-1 text-blue-800">
                <li><strong>Isolated:</strong> Letter standing alone</li>
                <li><strong>Initial:</strong> At the beginning of a word</li>
                <li><strong>Medial:</strong> In the middle of a word</li>
                <li><strong>Final:</strong> At the end of a word</li>
              </ul>
              <p className="text-blue-800 mt-3">
                Note: Some letters (د، ذ، ر، ز، ژ، و، ا) don't connect to the letter after them, so they only have 2 forms.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Letters Grid */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                All Letters and Their Forms
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {letterForms.map((letter) => (
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

          {/* Letter Forms Detail Panel */}
          <div className="lg:col-span-1">
            {selectedLetter ? (
              <LetterFormsCard letter={selectedLetter} />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center sticky top-8">
                <div className="text-6xl mb-4">👆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Select a Letter
                </h3>
                <p className="text-gray-600">
                  Click on any letter to see how it changes in different positions
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Practice and Quiz Buttons */}
        {allReviewed && (
          <div className="mt-12 space-y-4">
            {/* Practice Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Interactive Practice
                  </h3>
                  <p className="text-gray-600">
                    Test your knowledge by identifying letter forms in different positions
                  </p>
                </div>
                <Link
                  href="/learn/level-2/practice"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap"
                >
                  Start Practice →
                </Link>
              </div>
            </div>

            {/* Quiz Section */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Ready for the Quiz?
              </h3>
              <p className="text-green-700 mb-6">
                You've reviewed all {letterForms.length} letters. Test your knowledge!
              </p>
              <Link
                href="/learn/level-2/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-semibold text-lg"
              >
                Take the Quiz
                <CheckCircle className="w-6 h-6" />
              </Link>
            </div>
          </div>
        )}
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
  letter: LetterForms;
  isSelected: boolean;
  isReviewed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`aspect-square rounded-xl flex items-center justify-center text-4xl font-bold transition-all relative ${
        isSelected
          ? "bg-green-600 text-white scale-110 shadow-lg"
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
 * Letter Forms Detail Card Component
 */
function LetterFormsCard({ letter }: { letter: LetterForms }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{letter.name}</h3>
        <p className="text-gray-500">({letter.letter})</p>
      </div>

      <div className="space-y-4">
        {/* Isolated Form */}
        <FormDisplay
          label="Isolated"
          description="Standing alone"
          form={letter.isolated}
        />

        {/* Initial Form */}
        {letter.initial ? (
          <FormDisplay
            label="Initial"
            description="Beginning of word"
            form={letter.initial}
          />
        ) : (
          <FormDisplay
            label="Initial"
            description="Does not connect forward"
            form="—"
            disabled
          />
        )}

        {/* Medial Form */}
        {letter.medial ? (
          <FormDisplay
            label="Medial"
            description="Middle of word"
            form={letter.medial}
          />
        ) : (
          <FormDisplay
            label="Medial"
            description="Does not connect forward"
            form="—"
            disabled
          />
        )}

        {/* Final Form */}
        <FormDisplay
          label="Final"
          description="End of word"
          form={letter.final || letter.isolated}
        />
      </div>

      {!letter.connectsBothSides && (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> This letter doesn't connect to the letter after it, so it only has Isolated and Final forms.
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Form Display Component
 */
function FormDisplay({
  label,
  description,
  form,
  disabled = false,
}: {
  label: string;
  description: string;
  form: string;
  disabled?: boolean;
}) {
  return (
    <div className={`p-4 rounded-xl border-2 ${disabled ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200"}`}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-sm font-semibold text-gray-700">{label}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
        <div className={`text-5xl font-bold ${disabled ? "text-gray-400" : "text-gray-900"}`} dir="rtl">
          {form}
        </div>
      </div>
    </div>
  );
}