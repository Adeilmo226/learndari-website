import Link from "next/link";
import { ArrowLeft, ExternalLink, BookOpen, Headphones, Video, Globe, FileText } from "lucide-react";

/**
 * Resources Page
 * External learning materials and resources
 */
export default function ResourcesPage() {
  const resourceCategories = [
    {
      id: "books",
      title: "Books & Textbooks",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      resources: [
        {
          name: "Elementary Persian Grammar",
          description: "Comprehensive grammar book for beginners",
          type: "Textbook",
        },
        {
          name: "Persian-English Dictionary",
          description: "Essential for vocabulary building",
          type: "Reference",
        },
        {
          name: "Reading Persian",
          description: "Practice reading with graded texts",
          type: "Reading Practice",
        },
      ],
    },
    {
      id: "online",
      title: "Online Courses & Websites",
      icon: Globe,
      color: "from-green-500 to-green-600",
      resources: [
        {
          name: "Forvo (Dari Pronunciation)",
          description: "Native speaker pronunciation recordings",
          type: "Audio Resource",
          url: "https://forvo.com/languages/fa/",
        },
        {
          name: "Easy Persian",
          description: "YouTube channel with Dari lessons",
          type: "Video Lessons",
        },
        {
          name: "Goethe Verlag - Dari",
          description: "Free audio lessons for beginners",
          type: "Audio Course",
        },
      ],
    },
    {
      id: "media",
      title: "Podcasts & Media",
      icon: Headphones,
      color: "from-purple-500 to-purple-600",
      resources: [
        {
          name: "BBC Dari Service",
          description: "News and content in Dari",
          type: "News",
          url: "https://www.bbc.com/persian",
        },
        {
          name: "VOA Dari",
          description: "Voice of America Dari programming",
          type: "News & Media",
        },
        {
          name: "Afghan Music",
          description: "Listen to songs to improve comprehension",
          type: "Music",
        },
      ],
    },
    {
      id: "video",
      title: "Video Content",
      icon: Video,
      color: "from-red-500 to-red-600",
      resources: [
        {
          name: "Dari Language YouTube Channels",
          description: "Search for 'Learn Dari' on YouTube",
          type: "Educational",
        },
        {
          name: "Afghan TV Shows",
          description: "Watch with subtitles for practice",
          type: "Entertainment",
        },
        {
          name: "Documentary Films",
          description: "Learn about Afghan culture and history",
          type: "Cultural",
        },
      ],
    },
    {
      id: "practice",
      title: "Practice & Community",
      icon: FileText,
      color: "from-yellow-500 to-yellow-600",
      resources: [
        {
          name: "Language Exchange Apps",
          description: "Connect with native Dari speakers",
          type: "Speaking Practice",
        },
        {
          name: "Online Forums",
          description: "Join Dari learning communities",
          type: "Community",
        },
        {
          name: "Writing Practice",
          description: "Practice writing in Dari script",
          type: "Writing",
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          Learning Resources
        </h1>
        <p className="text-xl text-gray-600">
          Additional materials to supplement your Dari learning
        </p>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
        <h3 className="text-xl font-bold text-blue-900 mb-2">
          📚 Expand Your Learning
        </h3>
        <p className="text-blue-800">
          While LearnDari provides a solid foundation, these external resources can help you practice 
          and immerse yourself further in the language. Remember: consistent practice with a variety of 
          materials is key to language mastery!
        </p>
      </div>

      {/* Resource Categories */}
      <div className="space-y-8">
        {resourceCategories.map((category) => (
          <ResourceCategory key={category.id} category={category} />
        ))}
      </div>

      {/* Tips Section */}
      <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          💡 Study Tips
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <span><strong>Practice daily:</strong> Even 15-20 minutes a day is more effective than occasional long sessions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <span><strong>Use multiple resources:</strong> Combine LearnDari with podcasts, videos, and books for well-rounded learning</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <span><strong>Immerse yourself:</strong> Listen to Dari music, watch shows, and try to think in Dari throughout your day</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <span><strong>Find a language partner:</strong> Speaking with natives accelerates learning significantly</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

/**
 * Resource Category Component
 */
function ResourceCategory({
  category,
}: {
  category: {
    id: string;
    title: string;
    icon: any;
    color: string;
    resources: Array<{
      name: string;
      description: string;
      type: string;
      url?: string;
    }>;
  };
}) {
  const Icon = category.icon;

  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-r ${category.color} p-6`}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">{category.title}</h2>
        </div>
      </div>

      {/* Resources List */}
      <div className="p-6">
        <div className="space-y-4">
          {category.resources.map((resource, index) => (
            <div
              key={index}
              className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {resource.name}
                  </h3>
                  {resource.url && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 mb-2">{resource.description}</p>
                <span className="inline-block px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                  {resource.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}