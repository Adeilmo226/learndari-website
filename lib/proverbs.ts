/**
 * Dari Proverbs Collection
 * Traditional Afghan wisdom and sayings
 */

export interface Proverb {
  id: string;
  dari: string;
  phonetic: string;
  english: string;
  meaning: string;
  category: string;
}

export const dariProverbs: Proverb[] = [
  {
    id: "drop-by-drop",
    dari: "قطره قطره جمع گردد، وانگهی دریا شود",
    phonetic: "Qatra qatra jam' gardad, wangahi darya shawad",
    english: "Drop by drop it gathers, until it becomes a sea",
    meaning: "Small, consistent efforts lead to great achievements. Similar to 'Rome wasn't built in a day.'",
    category: "Perseverance",
  },
  {
    id: "tree-fruit",
    dari: "از درخت که می‌خوری، سنگ مینداز",
    phonetic: "Az derakht ke mikhori, sang meandaz",
    english: "Don't throw stones at the tree you eat from",
    meaning: "Don't harm those who help or support you. Similar to 'Don't bite the hand that feeds you.'",
    category: "Gratitude",
  },
  {
    id: "morning-gold",
    dari: "سحرخیز باش تا کامروا شوی",
    phonetic: "Sahar-khez bash ta kam-rawa shawi",
    english: "Rise early to achieve your goals",
    meaning: "Success comes to those who start their day early and work hard.",
    category: "Success",
  },
  {
    id: "friend-need",
    dari: "دوست آن باشد که گیرد دست دوست، در پریشان حالی و درماندگی",
    phonetic: "Dost an bashad ke girad dast-e dost, dar pareshan-hali wa dar-mandagi",
    english: "A true friend is one who holds your hand in times of trouble",
    meaning: "Real friendship is proven during difficult times.",
    category: "Friendship",
  },
  {
    id: "patience-key",
    dari: "صبر تلخ است، اما میوه‌اش شیرین است",
    phonetic: "Sabr talkh ast, amma mewa-ash shirin ast",
    english: "Patience is bitter, but its fruit is sweet",
    meaning: "Enduring difficulties with patience leads to rewarding outcomes.",
    category: "Patience",
  },
  {
    id: "knowledge-light",
    dari: "علم نوری است که راه را روشن می‌سازد",
    phonetic: "Elm nuri ast ke rah ra roshan me-sazad",
    english: "Knowledge is a light that illuminates the path",
    meaning: "Education and learning guide us through life.",
    category: "Knowledge",
  },
  {
    id: "empty-drum",
    dari: "طبل تهی، آواز بلند",
    phonetic: "Tabl-e tehi, awaz-e boland",
    english: "An empty drum makes the loudest noise",
    meaning: "Those with little knowledge or substance often speak the most. Similar to 'Empty vessels make the most noise.'",
    category: "Wisdom",
  },
  {
    id: "kind-word",
    dari: "سخن نرم، سنگ را آب می‌کند",
    phonetic: "Sokhan-e narm, sang ra ab me-konad",
    english: "A soft word melts stone into water",
    meaning: "Gentle speech can overcome the hardest obstacles.",
    category: "Communication",
  },
  {
    id: "good-deed",
    dari: "نیکی کن و در دریا انداز",
    phonetic: "Niki kon wa dar darya andaz",
    english: "Do good and throw it into the river",
    meaning: "Do good deeds without expecting anything in return.",
    category: "Kindness",
  },
  {
    id: "unity-strength",
    dari: "اتحاد قوت است",
    phonetic: "Ettehad qowat ast",
    english: "Unity is strength",
    meaning: "Working together makes us stronger.",
    category: "Unity",
  },
];

/**
 * Get proverbs by category
 */
export function getProverbsByCategory(category: string): Proverb[] {
  return dariProverbs.filter((proverb) => proverb.category === category);
}

/**
 * Get all unique categories
 */
export function getProverbCategories(): string[] {
  const categories = new Set(dariProverbs.map((p) => p.category));
  return Array.from(categories).sort();
}

/**
 * Get a random proverb
 */
export function getRandomProverb(): Proverb {
  return dariProverbs[Math.floor(Math.random() * dariProverbs.length)];
}

/**
 * Get the proverb of the day (consistent for the entire day)
 */
export function getDailyProverb(): Proverb {
  const now = new Date();
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dariProverbs[dayOfYear % dariProverbs.length];
}