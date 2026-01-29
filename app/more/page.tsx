import Link from "next/link";
import { 
  Calendar, 
  MessageCircle, 
  Type, 
  Hash, 
  Landmark, 
  BookOpen, 
  MessageSquare,
  Info
} from "lucide-react";

/**
 * More/Discover Page
 * Additional resources and learning tools
 */
export default function MorePage() {
  const sections = [
    {
      id: "word-of-the-day",
      title: "Word of the Day",
      description: "Learn a new Dari word every day",
      icon: Calendar,
      href: "/more/word-of-the-day",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      id: "proverbs",
      title: "Dari Proverbs",
      description: "Explore traditional Afghan wisdom and sayings",
      icon: MessageCircle,
      href: "/more/proverbs",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      id: "alphabet",
      title: "Alphabet Reference",
      description: "Quick guide to all 32 Dari letters",
      icon: Type,
      href: "/more/alphabet",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      id: "numbers",
      title: "Numbers Guide",
      description: "Learn to count from 1 to 100 in Dari",
      icon: Hash,
      href: "/more/numbers",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      id: "culture",
      title: "Cultural Notes",
      description: "Insights into Afghan culture and traditions",
      icon: Landmark,
      href: "/more/culture",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      id: "resources",
      title: "Learning Resources",
      description: "External materials, books, and podcasts",
      icon: BookOpen,
      href: "/more/resources",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      id: "feedback",
      title: "Feedback & Contact",
      description: "Share suggestions or report issues",
      icon: MessageSquare,
      href: "/more/feedback",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
    },
    {
      id: "about",
      title: "About LearnDari",
      description: "Our mission and story",
      icon: Info,
      href: "/more/about",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover More
        </h1>
        <p className="text-xl text-gray-600">
          Additional resources and tools to enhance your Dari learning journey
        </p>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}

/**
 * Section Card Component
 */
function SectionCard({
  section,
}: {
  section: {
    id: string;
    title: string;
    description: string;
    icon: any;
    href: string;
    color: string;
    bgColor: string;
    textColor: string;
  };
}) {
  const Icon = section.icon;

  return (
    <Link
      href={section.href}
      className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all group"
    >
      <div className={`w-14 h-14 ${section.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-7 h-7 ${section.textColor}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
        {section.title}
      </h3>
      <p className="text-gray-600 mb-4">{section.description}</p>
      <div className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-2 transition-all text-2xl">
        →
      </div>
    </Link>
  );
}