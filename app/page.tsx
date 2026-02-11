import Link from "next/link";
import Image from "next/image";
import { BookOpen, GraduationCap, Search, Sparkles, Volume2, Users, Heart } from "lucide-react";

/**
 * Home/Landing Page
 * Showcases the value proposition and guides users to main features
 */
export default function Home() {
  return (
    <div className="bg-white">
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/homepage_background.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.10]"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The easiest way to learn Dari online
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn words, pronunciation, and reading. Built for real learners.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/vocab"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5" />
                Start with Vocabulary
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <GraduationCap className="w-5 h-5" />
                Learn to Read Dari
              </Link>
            </div>
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/explore"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Search className="w-5 h-5" />
                Look up a word
              </Link>
			    <Link
                href="/more"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <GraduationCap className="w-5 h-5" />
                Discover More
              </Link>
			  

            </div> */}
			
          </div>

		{/* Right: Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
              <Image
                src="/education.avif"
                alt="Learn Dari - Language Learning Platform"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
		</div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to master Dari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Explore */}
            <HowItWorksCard
              icon={<Search className="w-8 h-8" />}
              title="Explore"
              description="Search for words in English or Dari from our database"
              color="bg-blue-50 text-blue-600"
            />
            {/* Card 2: Learn Vocab */}
            <HowItWorksCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Learn Vocab"
              description="Flashcards and quizzes with audio pronunciation"
              color="bg-red-50 text-red-600"
            />

            {/* Card 3: Learn to Read */}
            <HowItWorksCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Learn to Read"
              description="Alphabet, sounds, and phrases with native pronunciation"
              color="bg-green-50 text-green-600"
            />

            {/* Card 4: Discover More */}
            <HowItWorksCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Discover More"
              description="Daily words, proverbs, and cultural insights"
              color="bg-purple-50 text-purple-600"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Why LearnDari */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why LearnDari?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <WhyCard
              icon={<Heart className="w-6 h-6" />}
              title="Built specially for Dari"
              description="Designed with Dari language structure and culture in mind"
            />

            {/* Feature 2 */}
            <WhyCard
              icon={<Volume2 className="w-6 h-6" />}
              title="Audio-first pronunciation"
              description="Speaker audio for every word and phrase"
            />

            {/* Feature 3 */}
            <WhyCard
              icon={<Users className="w-6 h-6" />}
              title="For beginners & heritage learners"
              description="Whether starting fresh or reconnecting with roots"
            />
          </div>
        </div>
      </section>

      {/* Section 4: About Teaser */}
      <section className="bg-gradient-to-br from-red-600 to-green-600 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why LearnDari Exists
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We believe everyone should have access to quality Dari language education. 
            Whether you're reconnecting with your roots or learning for the first time, 
            LearnDari makes it simple, accessible, and enjoyable.
          </p>
          <Link
            href="/more/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
          >
            Read Our Mission
            <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

/**
 * How It Works Card Component
 */
function HowItWorksCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
      <div className={`w-14 h-14 ${color} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

/**
 * Why LearnDari Card Component
 */
function WhyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center space-y-3">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}