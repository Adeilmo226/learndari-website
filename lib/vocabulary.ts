/**
 * Complete Vocabulary Database
 * Searchable vocabulary for the Explore feature
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  category: string;
  audioUrl?: string;
}

export const vocabularyDatabase: VocabWord[] = [
  // Colors (10 words)
  { id: "red", english: "Red", dari: "سرخ", phonetic: "surkh", category: "Colors" },
  { id: "blue", english: "Blue", dari: "آبی", phonetic: "abi", category: "Colors" },
  { id: "green", english: "Green", dari: "سبز", phonetic: "sabz", category: "Colors" },
  { id: "yellow", english: "Yellow", dari: "زرد", phonetic: "zard", category: "Colors" },
  { id: "white", english: "White", dari: "سفید", phonetic: "safed", category: "Colors" },
  { id: "black", english: "Black", dari: "سیاه", phonetic: "siyah", category: "Colors" },
  { id: "orange", english: "Orange", dari: "نارنجی", phonetic: "naranji", category: "Colors" },
  { id: "purple", english: "Purple", dari: "بنفش", phonetic: "banafsh", category: "Colors" },
  { id: "pink", english: "Pink", dari: "صورتی", phonetic: "surati", category: "Colors" },
  { id: "brown", english: "Brown", dari: "قهوه‌ای", phonetic: "qahwa'i", category: "Colors" },

  // Numbers (10 words)
  { id: "one", english: "One", dari: "یک", phonetic: "yak", category: "Numbers" },
  { id: "two", english: "Two", dari: "دو", phonetic: "do", category: "Numbers" },
  { id: "three", english: "Three", dari: "سه", phonetic: "se", category: "Numbers" },
  { id: "four", english: "Four", dari: "چهار", phonetic: "chahar", category: "Numbers" },
  { id: "five", english: "Five", dari: "پنج", phonetic: "panj", category: "Numbers" },
  { id: "six", english: "Six", dari: "شش", phonetic: "shash", category: "Numbers" },
  { id: "seven", english: "Seven", dari: "هفت", phonetic: "haft", category: "Numbers" },
  { id: "eight", english: "Eight", dari: "هشت", phonetic: "hasht", category: "Numbers" },
  { id: "nine", english: "Nine", dari: "نه", phonetic: "noh", category: "Numbers" },
  { id: "ten", english: "Ten", dari: "ده", phonetic: "dah", category: "Numbers" },

  // Greetings (10 words)
  { id: "hello", english: "Hello", dari: "سلام", phonetic: "salaam", category: "Greetings" },
  { id: "goodbye", english: "Goodbye", dari: "خداحافظ", phonetic: "khodahafez", category: "Greetings" },
  { id: "please", english: "Please", dari: "لطفا", phonetic: "lotfan", category: "Greetings" },
  { id: "thank-you", english: "Thank you", dari: "تشکر", phonetic: "tashakor", category: "Greetings" },
  { id: "yes", english: "Yes", dari: "بله", phonetic: "baleh", category: "Greetings" },
  { id: "no", english: "No", dari: "نه", phonetic: "na", category: "Greetings" },
  { id: "good-morning", english: "Good morning", dari: "صبح بخیر", phonetic: "sobh bekheyr", category: "Greetings" },
  { id: "good-night", english: "Good night", dari: "شب بخیر", phonetic: "shab bekheyr", category: "Greetings" },
  { id: "how-are-you", english: "How are you?", dari: "حالت چطور است؟", phonetic: "halet chetour ast?", category: "Greetings" },
  { id: "welcome", english: "Welcome", dari: "خوش آمدید", phonetic: "khosh amadid", category: "Greetings" },

  // Common Words (20 words)
  { id: "water", english: "Water", dari: "آب", phonetic: "ab", category: "Common" },
  { id: "food", english: "Food", dari: "غذا", phonetic: "ghaza", category: "Common" },
  { id: "house", english: "House", dari: "خانه", phonetic: "khana", category: "Common" },
  { id: "family", english: "Family", dari: "خانواده", phonetic: "khanevada", category: "Common" },
  { id: "friend", english: "Friend", dari: "دوست", phonetic: "doost", category: "Common" },
  { id: "book", english: "Book", dari: "کتاب", phonetic: "ketab", category: "Common" },
  { id: "school", english: "School", dari: "مکتب", phonetic: "maktab", category: "Common" },
  { id: "teacher", english: "Teacher", dari: "معلم", phonetic: "moalem", category: "Common" },
  { id: "student", english: "Student", dari: "شاگرد", phonetic: "shagerd", category: "Common" },
  { id: "day", english: "Day", dari: "روز", phonetic: "roz", category: "Common" },
  { id: "night", english: "Night", dari: "شب", phonetic: "shab", category: "Common" },
  { id: "sun", english: "Sun", dari: "آفتاب", phonetic: "aftab", category: "Common" },
  { id: "moon", english: "Moon", dari: "ماه", phonetic: "mah", category: "Common" },
  { id: "mother", english: "Mother", dari: "مادر", phonetic: "madar", category: "Common" },
  { id: "father", english: "Father", dari: "پدر", phonetic: "pedar", category: "Common" },
  { id: "brother", english: "Brother", dari: "برادر", phonetic: "baradar", category: "Common" },
  { id: "sister", english: "Sister", dari: "خواهر", phonetic: "khahar", category: "Common" },
  { id: "love", english: "Love", dari: "عشق", phonetic: "eshq", category: "Common" },
  { id: "peace", english: "Peace", dari: "صلح", phonetic: "solh", category: "Common" },
  { id: "time", english: "Time", dari: "وقت", phonetic: "waqt", category: "Common" },
];

/**
 * Search vocabulary database
 * Searches in English, Dari, and phonetic fields
 */
export function searchVocabulary(query: string): VocabWord[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase().trim();

  return vocabularyDatabase.filter((word) => {
    return (
      word.english.toLowerCase().includes(lowerQuery) ||
      word.dari.includes(query) ||
      word.phonetic.toLowerCase().includes(lowerQuery)
    );
  });
}

/**
 * Get a random word for "Word of the Day"
 */
export function getWordOfTheDay(): VocabWord {
  // Use date as seed for consistent word per day
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const index = dayOfYear % vocabularyDatabase.length;
  return vocabularyDatabase[index];
}

/**
 * Get popular/featured words
 */
export function getPopularWords(): VocabWord[] {
  return [
    vocabularyDatabase.find((w) => w.id === "hello")!,
    vocabularyDatabase.find((w) => w.id === "thank-you")!,
    vocabularyDatabase.find((w) => w.id === "water")!,
    vocabularyDatabase.find((w) => w.id === "love")!,
    vocabularyDatabase.find((w) => w.id === "peace")!,
  ];
}