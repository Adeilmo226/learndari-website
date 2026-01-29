import Link from "next/link";
import { ArrowLeft, Calendar, Coffee, Music, Users, Home, Heart } from "lucide-react";

/**
 * Cultural Notes Page
 * Insights into Afghan culture and traditions
 */
export default function CulturePage() {
  const culturalTopics = [
    {
      id: "greetings",
      title: "Greetings & Etiquette",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      content: [
        {
          subtitle: "Common Greetings",
          text: "Afghans greet each other with 'Salaam' (سلام) or 'Salaam Alaikum' (سلام علیکم). It's customary to ask about someone's health and family when greeting.",
        },
        {
          subtitle: "Handshakes",
          text: "Men typically shake hands with other men. Between genders, it's respectful to wait and see if a handshake is offered, as some may prefer not to shake hands.",
        },
        {
          subtitle: "Respect for Elders",
          text: "Showing respect to elders is fundamental in Afghan culture. Always greet elders first and address them with honorific titles.",
        },
      ],
    },
    {
      id: "hospitality",
      title: "Hospitality & Food",
      icon: Coffee,
      color: "from-green-500 to-green-600",
      content: [
        {
          subtitle: "Afghan Hospitality",
          text: "Hospitality (مهمان‌نوازی - mehmaan-nawaazi) is deeply valued. Guests are treated with the utmost respect and offered the best food and accommodations.",
        },
        {
          subtitle: "Tea Culture",
          text: "Tea (چای - chai) is central to Afghan culture. Green tea is often served with meals and throughout the day. Refusing tea can be seen as impolite.",
        },
        {
          subtitle: "Traditional Foods",
          text: "Popular dishes include Kabuli Pulao (rice with raisins and carrots), Mantu (dumplings), and various kebabs. Meals are often shared communally.",
        },
      ],
    },
    {
      id: "holidays",
      title: "Holidays & Celebrations",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      content: [
        {
          subtitle: "Nowruz (نوروز)",
          text: "The Persian New Year, celebrated on the spring equinox (March 20-21). It marks the beginning of spring and is celebrated with family gatherings, special foods, and the Haft-Seen table.",
        },
        {
          subtitle: "Eid al-Fitr & Eid al-Adha",
          text: "Major Islamic holidays celebrated with prayers, family gatherings, new clothes, and special foods. These are times of charity and community.",
        },
        {
          subtitle: "Independence Day",
          text: "Celebrated on August 19, commemorating Afghanistan's independence from British influence in 1919.",
        },
      ],
    },
    {
      id: "family",
      title: "Family & Social Structure",
      icon: Home,
      color: "from-red-500 to-red-600",
      content: [
        {
          subtitle: "Extended Family",
          text: "Family is the cornerstone of Afghan society. Extended families often live together or in close proximity, with strong bonds across generations.",
        },
        {
          subtitle: "Family Gatherings",
          text: "Regular family gatherings are common, especially on Fridays and during holidays. These gatherings strengthen family bonds and maintain traditions.",
        },
        {
          subtitle: "Respect and Hierarchy",
          text: "There's a clear hierarchy based on age and position within the family. Younger members show respect to elders through language and behavior.",
        },
      ],
    },
    {
      id: "arts",
      title: "Arts & Literature",
      icon: Music,
      color: "from-yellow-500 to-yellow-600",
      content: [
        {
          subtitle: "Poetry",
          text: "Poetry holds a special place in Afghan culture. Rumi, Hafez, and other Persian poets are widely read and quoted. Poetry gatherings (mushaira) are popular social events.",
        },
        {
          subtitle: "Music",
          text: "Traditional Afghan music features instruments like the rubab, tabla, and harmonium. Music is an important part of celebrations and gatherings.",
        },
        {
          subtitle: "Calligraphy & Art",
          text: "Persian calligraphy is highly valued as an art form. Geometric patterns and floral designs are common in Afghan arts and crafts.",
        },
      ],
    },
    {
      id: "values",
      title: "Core Values",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
      content: [
        {
          subtitle: "Honor & Dignity (ناموس - namus)",
          text: "Personal and family honor are highly valued. Maintaining dignity and reputation in the community is important.",
        },
        {
          subtitle: "Hospitality (مهمان‌نوازی)",
          text: "Guests are considered a blessing. The saying 'Mehman habib-ullah ast' (A guest is beloved of God) reflects this value.",
        },
        {
          subtitle: "Community & Solidarity",
          text: "Strong sense of community and mutual support. Neighbors and community members help each other in times of need.",
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
          Afghan Culture & Traditions
        </h1>
        <p className="text-xl text-gray-600">
          Understanding the rich cultural heritage of Afghanistan
        </p>
      </div>

      {/* Cultural Topics */}
      <div className="space-y-8">
        {culturalTopics.map((topic) => (
          <CulturalTopicCard key={topic.id} topic={topic} />
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Learning Language Through Culture
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Understanding Afghan culture enriches your language learning experience. Language and culture are deeply interconnected - 
          knowing cultural context helps you use the language more naturally and communicate more effectively. As you learn Dari, 
          you're also gaining insight into a rich cultural heritage spanning thousands of years.
        </p>
      </div>
    </div>
  );
}

/**
 * Cultural Topic Card Component
 */
function CulturalTopicCard({
  topic,
}: {
  topic: {
    id: string;
    title: string;
    icon: any;
    color: string;
    content: Array<{ subtitle: string; text: string }>;
  };
}) {
  const Icon = topic.icon;

  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-r ${topic.color} p-6`}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">{topic.title}</h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {topic.content.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {section.subtitle}
            </h3>
            <p className="text-gray-700 leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}