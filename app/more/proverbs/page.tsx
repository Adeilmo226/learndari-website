"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Heart } from "lucide-react";
import { dariProverbs, getProverbCategories, type Proverb } from "@/lib/proverbs";

/**
 * Proverbs Page
 * Browse traditional Dari proverbs and wisdom
 */
export default function ProverbsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...getProverbCategories()];

  // Filter proverbs based on search and category
  const filteredProverbs = dariProverbs.filter((proverb) => {
    const matchesSearch =
      proverb.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proverb.dari.includes(searchQuery) ||
      proverb.meaning.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || proverb.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Header */}
      <Link
        href="/more"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Discover More
      </Link>

      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Dari Proverbs
        </h1>
        <p className="text-xl text-gray-600">
          Explore traditional Afghan wisdom and sayings
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-4 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search proverbs..."
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-600 focus:outline-none transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-600 mb-6">
        Showing {filteredProverbs.length} of {dariProverbs.length} proverbs
      </p>

      {/* Proverbs List */}
      {filteredProverbs.length > 0 ? (
        <div className="space-y-6">
          {filteredProverbs.map((proverb) => (
            <ProverbCard key={proverb.id} proverb={proverb} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            No proverbs found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filter
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Proverb Card Component
 */
function ProverbCard({ proverb }: { proverb: Proverb }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border-2 border-gray-200 hover:border-pink-600 hover:shadow-xl transition-all p-6">
      {/* Category Badge */}
      <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-4">
        {proverb.category}
      </span>

      {/* Dari Text */}
      <div className="mb-4">
        <p className="text-3xl font-bold text-gray-900 text-right mb-2" dir="rtl">
          {proverb.dari}
        </p>
        <p className="text-lg text-gray-600 italic text-right">
          {proverb.phonetic}
        </p>
      </div>

      {/* English Translation */}
      <div className="mb-4">
        <p className="text-xl font-semibold text-gray-900 mb-2">
          "{proverb.english}"
        </p>
      </div>

      {/* Meaning */}
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-gray-700">
          <strong className="text-gray-900">Meaning:</strong> {proverb.meaning}
        </p>
      </div>
    </div>
  );
}