"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Info, CheckCircle, BookOpen, Brain, Volume2 } from "lucide-react";
import { letterForms, type LetterForms } from "@/lib/alphabet";
import { AuthGate } from "@/components/AuthGate";

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

  const progress = (reviewedLetters.size / letterForms.length) * 100;

  return (
    <AuthGate backHref="/learn" backLabel="Back to Learning Path">
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

        {/* Study Mode Buttons */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/learn/level-2/flashcards"
            className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-green-600 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
              <BookOpen className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">Flashcards</h3>
              <p className="text-gray-600">Review letter forms with interactive cards</p>
            </div>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            href="/learn/level-2/quiz"
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
      </div>
    </div>
    </AuthGate>
  );
}

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

function LetterFormsCard({ letter }: { letter: LetterForms }) {
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
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{letter.name}</h3>
        <p className="text-gray-500">({letter.letter})</p>
        <button
          onClick={playAudio}
          disabled={isPlaying}
          className={`mt-3 w-14 h-14 rounded-full flex items-center justify-center mx-auto transition-all ${
            isPlaying
              ? "bg-green-600 scale-110"
              : "bg-green-100 hover:bg-green-600 hover:scale-105"
          }`}
        >
          <Volume2 className={`w-7 h-7 ${isPlaying ? "text-white" : "text-green-600 hover:text-white"}`} />
        </button>
      </div>

      <div className="space-y-4">
        <FormDisplay label="Isolated" description="Standing alone" form={letter.isolated} />
        {letter.initial ? (
          <FormDisplay label="Initial" description="Beginning of word" form={letter.initial} />
        ) : (
          <FormDisplay label="Initial" description="Does not connect forward" form="—" disabled />
        )}
        {letter.medial ? (
          <FormDisplay label="Medial" description="Middle of word" form={letter.medial} />
        ) : (
          <FormDisplay label="Medial" description="Does not connect forward" form="—" disabled />
        )}
        <FormDisplay label="Final" description="End of word" form={letter.final || letter.isolated} />
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
