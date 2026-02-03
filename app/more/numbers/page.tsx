"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Volume2 } from "lucide-react";

/**
 * Numbers Guide Page
 * Learn counting in Dari from 1 to 100
 */
export default function NumbersPage() {
  const [selectedNumber, setSelectedNumber] = useState<NumberData | null>(null);

  const numbers1to20: NumberData[] = [
    { number: 1, dari: "یک", phonetic: "yak", english: "one" },
    { number: 2, dari: "دو", phonetic: "do", english: "two" },
    { number: 3, dari: "سه", phonetic: "se", english: "three" },
    { number: 4, dari: "چهار", phonetic: "chahar", english: "four" },
    { number: 5, dari: "پنج", phonetic: "panj", english: "five" },
    { number: 6, dari: "شش", phonetic: "shash", english: "six" },
    { number: 7, dari: "هفت", phonetic: "haft", english: "seven" },
    { number: 8, dari: "هشت", phonetic: "hasht", english: "eight" },
    { number: 9, dari: "نه", phonetic: "noh", english: "nine" },
    { number: 10, dari: "ده", phonetic: "dah", english: "ten" },
    { number: 11, dari: "یازده", phonetic: "yazdah", english: "eleven" },
    { number: 12, dari: "دوازده", phonetic: "davazdah", english: "twelve" },
    { number: 13, dari: "سیزده", phonetic: "sizdah", english: "thirteen" },
    { number: 14, dari: "چهارده", phonetic: "chahardah", english: "fourteen" },
    { number: 15, dari: "پانزده", phonetic: "panzdah", english: "fifteen" },
    { number: 16, dari: "شانزده", phonetic: "shanzdah", english: "sixteen" },
    { number: 17, dari: "هفده", phonetic: "hafdah", english: "seventeen" },
    { number: 18, dari: "هجده", phonetic: "hajdah", english: "eighteen" },
    { number: 19, dari: "نوزده", phonetic: "nuzdah", english: "nineteen" },
    { number: 20, dari: "بیست", phonetic: "bist", english: "twenty" },
  ];

  const tens: NumberData[] = [
    { number: 30, dari: "سی", phonetic: "si", english: "thirty" },
    { number: 40, dari: "چهل", phonetic: "chehel", english: "forty" },
    { number: 50, dari: "پنجاه", phonetic: "panjah", english: "fifty" },
    { number: 60, dari: "شصت", phonetic: "shast", english: "sixty" },
    { number: 70, dari: "هفتاد", phonetic: "haftad", english: "seventy" },
    { number: 80, dari: "هشتاد", phonetic: "hashtad", english: "eighty" },
    { number: 90, dari: "نود", phonetic: "navad", english: "ninety" },
    { number: 100, dari: "صد", phonetic: "sad", english: "one hundred" },
  ];

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
          Numbers in Dari
        </h1>
        <p className="text-xl text-gray-600">
          Learn to count from 1 to 100
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Numbers Grid */}
        <div className="lg:col-span-2 space-y-8">
          {/* 1-20 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Numbers 1-20
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {numbers1to20.map((num) => (
                <NumberButton
                  key={num.number}
                  number={num}
                  isSelected={selectedNumber?.number === num.number}
                  onClick={() => setSelectedNumber(num)}
                />
              ))}
            </div>
          </div>

          {/* Tens */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tens (30-100)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tens.map((num) => (
                <NumberButton
                  key={num.number}
                  number={num}
                  isSelected={selectedNumber?.number === num.number}
                  onClick={() => setSelectedNumber(num)}
                />
              ))}
            </div>
          </div>

          {/* Pattern Explanation */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              💡 Pattern for Numbers 21-99
            </h3>
            <p className="text-blue-800 mb-3">
              To form numbers between 21-99, combine the tens with the ones:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li><strong>21</strong> = بیست و یک (bist-o-yak) = "twenty and one"</li>
              <li><strong>35</strong> = سی و پنج (si-o-panj) = "thirty and five"</li>
              <li><strong>47</strong> = چهل و هفت (chehel-o-haft) = "forty and seven"</li>
              <li><strong>99</strong> = نود و نه (navad-o-noh) = "ninety and nine"</li>
            </ul>
          </div>
        </div>

        {/* Number Detail Panel */}
        <div className="lg:col-span-1">
          {selectedNumber ? (
            <NumberDetailPanel number={selectedNumber} />
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center sticky top-8">
              <div className="text-6xl mb-4">🔢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Select a Number
              </h3>
              <p className="text-gray-600">
                Click on any number to see its details and hear pronunciation
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface NumberData {
  number: number;
  dari: string;
  phonetic: string;
  english: string;
}

/**
 * Number Button Component
 */
function NumberButton({
  number,
  isSelected,
  onClick,
}: {
  number: NumberData;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl transition-all ${
        isSelected
          ? "bg-green-600 text-white scale-105 shadow-lg"
          : "bg-gray-100 hover:bg-green-100 hover:scale-105"
      }`}
    >
      <div className="text-2xl font-bold mb-1">{number.number}</div>
      <div className={`text-xl font-bold ${isSelected ? "text-white" : "text-gray-900"}`} dir="rtl">
        {number.dari}
      </div>
    </button>
  );
}

/**
 * Number Detail Panel Component
 */
function NumberDetailPanel({ number }: { number: NumberData }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    setIsPlaying(true);
    
    // Map number to audio file ID
    const audioMap: { [key: number]: string } = {
      1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
      6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten"
    };
    
    const audioId = audioMap[number.number];
    
    if (audioId) {
      const audioPath = `/audio/numbers/${audioId}.mp3`;
      const audio = new Audio(audioPath);

      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => {
        console.error('Audio playback failed');
        setIsPlaying(false);
      };

      audio.play().catch((error) => {
        console.error('Error playing audio:', error);
        setIsPlaying(false);
      });
    } else {
      // For numbers without audio files (11-100)
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
      <div className="text-center mb-8">
        <div className="text-7xl font-bold text-green-600 mb-4">
          {number.number}
        </div>
        <div className="text-6xl font-bold text-gray-900 mb-6" dir="rtl">
          {number.dari}
        </div>
        <button
          onClick={playAudio}
          disabled={isPlaying}
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all ${
            isPlaying
              ? "bg-green-600 scale-110"
              : "bg-green-100 hover:bg-green-600 hover:scale-105"
          }`}
        >
          <Volume2 className={`w-8 h-8 ${isPlaying ? "text-white" : "text-green-600"}`} />
        </button>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">English</p>
          <p className="text-2xl font-bold text-gray-900 capitalize">{number.english}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Pronunciation</p>
          <p className="text-2xl font-bold text-gray-900 italic">{number.phonetic}</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-xl">
        <p className="text-sm text-green-900">
          <strong>Practice:</strong> Try counting from 1 to {number.number} out loud!
        </p>
      </div>
    </div>
  );
}