"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Volume2 } from "lucide-react";
import { dariAlphabet, type DariLetter } from "@/lib/alphabet";

/**
 * Alphabet Reference Page
 * Quick reference guide for all Dari letters
 */
export default function AlphabetReferencePage() {
  const [selectedLetter, setSelectedLetter] = useState<DariLetter | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <Link
        href="/more"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to More
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Dari Alphabet Reference
        </h1>
        <p className="text-xl text-gray-600">
          Quick guide to all 32 letters with pronunciation
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Alphabet Grid */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              All 32 Letters
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {dariAlphabet.map((letter) => (
                <button
                  key={letter.id}
                  onClick={() => setSelectedLetter(letter)}
                  className={`aspect-square rounded-xl text-4xl font-bold transition-all ${
                    selectedLetter?.id === letter.id
                      ? "bg-blue-600 text-white scale-110 shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-blue-100 hover:scale-105"
                  }`}
                >
                  {letter.letter}
                </button>
              ))}
            </div>
          </div>

          {/* Table View */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Complete Reference Table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Letter</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Sound</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Pronunciation</th>
                  </tr>
                </thead>
                <tbody>
                  {dariAlphabet.map((letter, index) => (
                    <tr
                      key={letter.id}
                      className={`border-b border-gray-100 hover:bg-blue-50 cursor-pointer ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                      onClick={() => setSelectedLetter(letter)}
                    >
                      <td className="py-3 px-4 text-3xl font-bold" dir="rtl">
                        {letter.letter}
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-900">
                        {letter.name}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {letter.sound}
                      </td>
                      <td className="py-3 px-4 text-gray-600 italic">
                        {letter.phonetic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Letter Detail Panel */}
        <div className="lg:col-span-1">
          {selectedLetter ? (
            <LetterDetailPanel letter={selectedLetter} />
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center sticky top-8">
              <div className="text-6xl mb-4">👆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Select a Letter
              </h3>
              <p className="text-gray-600">
                Click on any letter to see its details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Letter Detail Panel Component
 */
function LetterDetailPanel({ letter }: { letter: DariLetter }) {
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
              ? "bg-blue-600 scale-110"
              : "bg-blue-100 hover:bg-blue-600 hover:scale-105"
          }`}
        >
          <Volume2 className={`w-8 h-8 ${isPlaying ? "text-white" : "text-blue-600"}`} />
        </button>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Letter Name</p>
          <p className="text-2xl font-bold text-gray-900">{letter.name}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Pronunciation</p>
          <p className="text-2xl font-bold text-gray-900 italic">{letter.phonetic}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Sound</p>
          <p className="text-2xl font-bold text-gray-900">"{letter.sound}"</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-xl">
        <p className="text-sm text-blue-900">
          <strong>Tip:</strong> Practice writing this letter while saying its sound out loud.
        </p>
      </div>
    </div>
  );
}