import Link from "next/link";
import { ArrowLeft, Target, Volume2, Monitor, GraduationCap } from "lucide-react";

/**
 * About Page
 * LearnDari's mission and story
 */
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <Link
        href="/more"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Discover More
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About LearnDari
        </h1>
        <p className="text-xl text-gray-600">
          Keeping our language alive for the next generation
        </p>
      </div>


      {/* Why We Built This */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our mission</h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            LearnDari started because we were tired of watching our language slip away.
            Too many of us grew up understanding Dari but never learning to read or write it.
            Too many of us wished we had better tools when we were younger.
          </p>
          <p>
            We're building what we wish existed: a modern platform tailored specifically
            for Afghan Dari. Not adapted from Farsi. Not a generic translation app. Something
            made with our language, our pronunciation, and our culture in mind.
          </p>
          <p>
            Dari is spoken by millions of people around the world, but it doesn't get the same
            attention as other languages on major learning platforms. We're here to change that.
            We're committed to making sure Dari doesn't become a dying language and that we
            continue to keep our heritage alive.
          </p>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What makes us different</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-3">
              <Target className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Dari-Specific</h3>
            <p className="text-gray-600">
              Built exclusively for Dari, not adapted from Farsi or Persian resources.
            </p>
          </div>
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
              <Volume2 className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Audio-First</h3>
            <p className="text-gray-600">
              Every word includes pronunciation to help you sound natural.
            </p>
          </div>
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
              <Monitor className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Modern & Accessible</h3>
            <p className="text-gray-600">
              Clean interface, and works on any device.
            </p>
          </div>
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Structured Learning</h3>
            <p className="text-gray-600">
              Clear progression from alphabet to sentences, with quizzes to track your progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
