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
        Back to Cultural Corner
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About LearnDari
        </h1>
        <p className="text-xl text-gray-600">
          Keeping our language alive for the next generation
        </p>
      </div>

      {/* The Problem */}
      <div className="bg-gradient-to-br from-red-500 to-green-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
        <h2 className="text-3xl font-bold mb-6">We saw a problem.</h2>
        <div className="space-y-4 text-xl leading-relaxed text-white/90">
          <p>
            If you've ever tried to learn Dari online, you already know — there's almost
            nothing out there. The resources that do exist are often outdated, expensive,
            or built for Farsi (Iranian Persian) and just close enough to be confusing.
          </p>
          <p>
            Dari and Farsi are similar languages, but they're not the same. The pronunciation
            is different. The vocabulary has its own flavor. The culture behind the words is
            distinctly Afghan. We deserved something built specifically for us.
          </p>
        </div>
      </div>

      {/* Why We Built This */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why we built this</h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            LearnDari started because we were tired of watching our language slip away.
            Too many of us grew up understanding Dari but never learning to read or write it.
            Too many of us wished we had better tools when we were younger.
          </p>
          <p>
            We're building what we wish existed — a free, modern platform tailored specifically
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

      {/* Who It's For */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Who it's for</h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            Whether you're a heritage speaker trying to reconnect with your roots, a complete
            beginner curious about the language, or someone who grew up hearing Dari at home
            but never got the chance to formally learn it — this is for you.
          </p>
          <p>
            We built LearnDari for the kid who wished they could read their grandparents' letters,
            for the adult reconnecting with family, and for anyone who believes this language is
            worth preserving.
          </p>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What makes us different</h2>
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
              Every word includes native pronunciation to help you sound natural.
            </p>
          </div>
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
              <Monitor className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Modern & Accessible</h3>
            <p className="text-gray-600">
              Clean interface, works on any device, completely free.
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

      {/* Call to Action */}
      <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Start your journey
        </h3>
        <p className="text-gray-700 text-lg mb-6">
          Every word you learn is a step toward keeping Dari alive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/vocab"
            className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold"
          >
            Start Learning
          </Link>
          <Link
            href="/more/feedback"
            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors font-semibold"
          >
            Share Feedback
          </Link>
        </div>
      </div>
    </div>
  );
}
