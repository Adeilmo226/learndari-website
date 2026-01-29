import Link from "next/link";
import { ArrowLeft, Heart, Target, Users, Sparkles } from "lucide-react";

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
        Back to More
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About LearnDari
        </h1>
        <p className="text-xl text-gray-600">
          Our mission to make Dari accessible to everyone
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-br from-red-500 to-green-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Heart className="w-12 h-12" />
          <h2 className="text-3xl font-bold">Our Mission</h2>
        </div>
        <p className="text-xl leading-relaxed">
          We believe everyone should have access to quality Dari language education. 
          Whether you're reconnecting with your heritage, learning for travel, or exploring 
          a new culture, LearnDari makes it simple, accessible, and enjoyable.
        </p>
      </div>

      {/* Why We Built This */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Target className="w-10 h-10 text-red-600" />
          <h2 className="text-3xl font-bold text-gray-900">Why LearnDari?</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Dari is one of the official languages of Afghanistan, spoken by millions worldwide. 
            Yet there's a significant gap in accessible, modern learning resources specifically 
            designed for Dari.
          </p>
          <p>
            Most language learning platforms focus on more widely-studied languages, leaving 
            Dari learners with limited options. Existing resources are often outdated, expensive, 
            or not designed with modern learning principles in mind.
          </p>
          <p>
            LearnDari was created to fill this gap - providing a free, audio-first platform 
            that makes learning Dari engaging and effective for everyone.
          </p>
        </div>
      </div>

      {/* Who It's For */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Users className="w-10 h-10 text-green-600" />
          <h2 className="text-3xl font-bold text-gray-900">Who It's For</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Heritage Learners</h3>
            <p className="text-gray-700">
              Reconnect with your roots and communicate with family members.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Beginners</h3>
            <p className="text-gray-700">
              Start from scratch with our structured, step-by-step approach.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Travelers</h3>
            <p className="text-gray-700">
              Learn practical phrases and cultural insights for your journey.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Culture Enthusiasts</h3>
            <p className="text-gray-700">
              Explore Persian literature, poetry, and Afghan culture.
            </p>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Sparkles className="w-10 h-10 text-yellow-600" />
          <h2 className="text-3xl font-bold text-gray-900">What Makes Us Different</h2>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <strong className="text-gray-900">Dari-Specific:</strong> Built exclusively for Dari, 
              not adapted from Farsi or Persian resources.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🔊</span>
            <div>
              <strong className="text-gray-900">Audio-First:</strong> Every word includes native 
              pronunciation to help you sound natural.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">📱</span>
            <div>
              <strong className="text-gray-900">Modern & Accessible:</strong> Clean interface, 
              works on any device, completely free.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <strong className="text-gray-900">Structured Learning:</strong> Clear progression 
              from alphabet to sentences, with quizzes to track your progress.
            </div>
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Join Our Learning Community
        </h3>
        <p className="text-gray-700 mb-6">
          Start your Dari learning journey today and become part of a growing community 
          of language learners connecting with Afghan culture.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/vocab"
            className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold"
          >
            Start Learning →
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