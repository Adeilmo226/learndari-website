"use client";

import { useState, useEffect } from "react";
import { Search, Volume2, Star, TrendingUp } from "lucide-react";
import {
  searchVocabulary,
  getWordOfTheDay,
  getPopularWords,
  type VocabWord,
} from "@/lib/vocabulary";

/**
 * Explore Page
 * Search and discover Dari vocabulary
 */
export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<VocabWord[]>([]);
  const [wordOfTheDay, setWordOfTheDay] = useState<VocabWord | null>(null);
  const [popularWords, setPopularWords] = useState<VocabWord[]>([]);

  // Initialize word of the day and popular words
  useEffect(() => {
    setWordOfTheDay(getWordOfTheDay());
    setPopularWords(getPopularWords());
  }, []);

  // Handle search input change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    const results = searchVocabulary(value);
    setSearchResults(results);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Dari Vocabulary
        </h1>
        <p className="text-xl text-gray-600">
          Search for words in English, Dari, or phonetic spelling
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search for a word... (e.g., 'hello', 'salaam', or 'سلام')"
            className="w-full pl-14 pr-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Word of the Day */}
      {!searchQuery && wordOfTheDay && (
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-red-500 to-green-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Word of the Day</h2>
            </div>
            <WordCard word={wordOfTheDay} featured />
          </div>
        </div>
      )}

      {/* Search Results */}
      {searchQuery && (
        <div className="max-w-5xl mx-auto">
          {searchResults.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Results ({searchResults.length})
              </h2>
              <div className="space-y-3">
                {searchResults.map((word) => (
                  <WordCard key={word.id} word={word} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600">
                Try searching with different spelling or in Dari script
              </p>
            </div>
          )}
        </div>
      )}

      {/* Popular Searches (shown when no search query) */}
      {!searchQuery && (
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-900">Popular Words</h2>
          </div>
          <div className="space-y-3">
            {popularWords.map((word) => (
              <WordCard key={word.id} word={word} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Word Card Component
 * Displays individual word with audio
 */
function WordCard({ word, featured = false }: { word: VocabWord; featured?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    setIsPlaying(true);
    const audioUrl = `/audio/${word.audioFolder}/${word.id}.mp3`;
    const audio = new Audio(audioUrl);

    audio.onended = () => setIsPlaying(false);
    audio.onerror = () => setIsPlaying(false);

    audio.play().catch(() => {
      console.log("Audio file not available");
      setIsPlaying(false);
    });
  };

  if (featured) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-white/80 text-sm mb-1">English</p>
              <p className="text-3xl font-bold text-white">{word.english}</p>
            </div>
            <div className="text-left">
              <p className="text-white/80 text-sm mb-1">Dari</p>
              <p className="text-4xl font-bold text-white text-left" dir="rtl">
                {word.dari}
              </p>
            </div>
            <div>
              <p className="text-white/80 text-sm mb-1">Pronunciation</p>
              <p className="text-2xl font-medium text-white italic">{word.phonetic}</p>
            </div>
          </div>
          <button
            onClick={playAudio}
            disabled={isPlaying}
            className={`ml-6 w-16 h-16 rounded-full flex items-center justify-center transition-all ${
              isPlaying ? "bg-white scale-110" : "bg-white/20 hover:bg-white hover:scale-105"
            }`}
          >
            <Volume2 className={`w-7 h-7 ${isPlaying ? "text-red-600" : "text-white"}`} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
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
          <div>
            <p className="text-sm text-gray-500 mb-1">Category</p>
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
              {word.category}
            </span>
          </div>
        </div>
        <button
          onClick={playAudio}
          disabled={isPlaying}
          className={`ml-6 w-14 h-14 rounded-full flex items-center justify-center transition-all ${
            isPlaying ? "bg-red-600 scale-110" : "bg-red-100 hover:bg-red-600 hover:scale-105"
          }`}
        >
          <Volume2 className={`w-6 h-6 ${isPlaying ? "text-white" : "text-red-600"}`} />
        </button>
      </div>
    </div>
  );
}