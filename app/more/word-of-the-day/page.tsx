"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Volume2, Calendar, RefreshCw } from "lucide-react";
import { getWordOfTheDay, type VocabWord } from "@/lib/vocabulary";

/**
 * Word of the Day Page
 * Daily featured vocabulary word
 */
export default function WordOfDayPage() {
  const [word, setWord] = useState<VocabWord | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const todayWord = getWordOfTheDay();
    setWord(todayWord);
  }, []);

  const playAudio = () => {
    if (!word) return;
    setIsPlaying(true);
    const audioUrl = `/audio/${word.category.toLowerCase()}/${word.id}.mp3`;
    const audio = new Audio(audioUrl);

    audio.onended = () => setIsPlaying(false);
    audio.onerror = () => setIsPlaying(false);

    audio.play().catch(() => {
      console.log("Audio file not available");
      setIsPlaying(false);
    });
  };

  if (!word) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <Link
        href="/more"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to More
      </Link>

      {/* Title */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full mb-4">
          <Calendar className="w-5 h-5" />
          <span className="font-semibold">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Word of the Day</h1>
        <p className="text-gray-600">Learn a new Dari word every day</p>
      </div>

      {/* Word Card */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl shadow-2xl p-12 text-white mb-8">
        <div className="text-center">
          {/* Category Badge */}
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
            {word.category}
          </span>

          {/* English Word */}
          <h2 className="text-5xl font-bold mb-8">{word.english}</h2>

          {/* Dari Word */}
          <div className="mb-6">
            <p className="text-purple-100 text-sm mb-2">دری (Dari)</p>
            <p className="text-7xl font-bold mb-4" dir="rtl">
              {word.dari}
            </p>
          </div>

          {/* Phonetic */}
          <div className="mb-8">
            <p className="text-purple-100 text-sm mb-2">Pronunciation</p>
            <p className="text-3xl font-medium italic">{word.phonetic}</p>
          </div>

          {/* Audio Button */}
          <button
            onClick={playAudio}
            disabled={isPlaying}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
              isPlaying
                ? "bg-white text-purple-600 scale-110"
                : "bg-white/20 hover:bg-white hover:text-purple-600 hover:scale-105"
            }`}
          >
            <Volume2 className="w-6 h-6" />
            {isPlaying ? "Playing..." : "Hear Pronunciation"}
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Learning Tip</h3>
          <p className="text-gray-600">
            Try using this word in a sentence today to help remember it. Practice makes perfect!
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-3">📅 Daily Practice</h3>
          <p className="text-gray-600">
            Come back tomorrow for a new word. Consistent daily practice is the key to language learning success.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/vocab"
          className="flex-1 px-6 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold text-center"
        >
          Practice More Vocabulary →
        </Link>
        <Link
          href="/more"
          className="flex-1 px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors font-semibold text-center"
        >
          Explore More Resources
        </Link>
      </div>
    </div>
  );
}