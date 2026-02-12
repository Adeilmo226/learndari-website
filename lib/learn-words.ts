/**
 * Curated word lists for Learn page Levels 3 and 4
 * Sourced from existing vocab category data
 */

export interface LearnWord {
  id: string
  english: string
  dari: string
  phonetic: string
  category: string
}

/**
 * Level 3: Simple Words
 * Short, basic words that are easy to read and recognize
 */
export const simpleWords: LearnWord[] = [
  // Colors (short, common words)
  { id: "l3-red", english: "Red", dari: "سرخ", phonetic: "surkh", category: "Colors" },
  { id: "l3-green", english: "Green", dari: "سبز", phonetic: "sabz", category: "Colors" },
  { id: "l3-yellow", english: "Yellow", dari: "زرد", phonetic: "zard", category: "Colors" },
  { id: "l3-white", english: "White", dari: "سفید", phonetic: "safeyd", category: "Colors" },
  // Numbers (1-10)
  { id: "l3-one", english: "One", dari: "یک", phonetic: "yak", category: "Numbers" },
  { id: "l3-two", english: "Two", dari: "دو", phonetic: "do", category: "Numbers" },
  { id: "l3-three", english: "Three", dari: "سه", phonetic: "se", category: "Numbers" },
  { id: "l3-five", english: "Five", dari: "پنج", phonetic: "panj", category: "Numbers" },
  { id: "l3-ten", english: "Ten", dari: "ده", phonetic: "dah", category: "Numbers" },
  // Animals (short words)
  { id: "l3-dog", english: "Dog", dari: "سگ", phonetic: "sag", category: "Animals" },
  { id: "l3-cat", english: "Cat", dari: "پیشک", phonetic: "peshak", category: "Animals" },
  { id: "l3-cow", english: "Cow", dari: "گاو", phonetic: "gaw", category: "Animals" },
  { id: "l3-fish", english: "Fish", dari: "ماهی", phonetic: "mahi", category: "Animals" },
  { id: "l3-lion", english: "Lion", dari: "شیر", phonetic: "share", category: "Animals" },
  // Body parts (short words)
  { id: "l3-head", english: "Head", dari: "سر", phonetic: "sar", category: "Body" },
  { id: "l3-hand", english: "Hand", dari: "دست", phonetic: "dist", category: "Body" },
  // Fruits (short words)
  { id: "l3-apple", english: "Apple", dari: "سیب", phonetic: "sayb", category: "Fruit" },
  { id: "l3-pear", english: "Pear", dari: "ناک", phonetic: "naak", category: "Fruit" },
  // Food
  { id: "l3-egg", english: "Egg", dari: "تخم", phonetic: "tukham", category: "Food" },
  { id: "l3-rice", english: "Rice", dari: "برنج", phonetic: "berinj", category: "Food" },
  // Weather
  { id: "l3-snow", english: "Snow", dari: "برف", phonetic: "bahrf", category: "Weather" },
  { id: "l3-cloud", english: "Cloud", dari: "ابر", phonetic: "abr", category: "Weather" },
  // Seasons
  { id: "l3-spring", english: "Spring", dari: "بهار", phonetic: "bahar", category: "Seasons" },
  { id: "l3-winter", english: "Winter", dari: "زمستان", phonetic: "zimestan", category: "Seasons" },
]

/**
 * Level 4: Common Words
 * Everyday vocabulary, slightly more complex
 */
export const commonWords: LearnWord[] = [
  // Common daily words
  { id: "l4-water", english: "Water", dari: "آب", phonetic: "ab", category: "Common" },
  { id: "l4-food", english: "Food", dari: "غذا", phonetic: "ghaza", category: "Common" },
  { id: "l4-house", english: "House", dari: "خانه", phonetic: "khana", category: "Common" },
  { id: "l4-family", english: "Family", dari: "خانواده", phonetic: "khanevada", category: "Common" },
  { id: "l4-friend", english: "Friend", dari: "دوست", phonetic: "doost", category: "Common" },
  { id: "l4-book", english: "Book", dari: "کتاب", phonetic: "ketab", category: "Common" },
  { id: "l4-school", english: "School", dari: "مکتب", phonetic: "maktab", category: "Common" },
  { id: "l4-teacher", english: "Teacher", dari: "معلم", phonetic: "moalem", category: "Common" },
  { id: "l4-mother", english: "Mother", dari: "مادر", phonetic: "madar", category: "Common" },
  { id: "l4-father", english: "Father", dari: "پدر", phonetic: "pedar", category: "Common" },
  // Greetings
  { id: "l4-hello", english: "Hello", dari: "سلام", phonetic: "salaam", category: "Greetings" },
  { id: "l4-goodbye", english: "Goodbye", dari: "خداحافظ", phonetic: "khodahafez", category: "Greetings" },
  { id: "l4-please", english: "Please", dari: "لطفاً", phonetic: "lotfan", category: "Greetings" },
  { id: "l4-thank-you", english: "Thank you", dari: "تشکر", phonetic: "tashakor", category: "Greetings" },
  { id: "l4-yes", english: "Yes", dari: "بله", phonetic: "baleh", category: "Greetings" },
  { id: "l4-no", english: "No", dari: "نه", phonetic: "na", category: "Greetings" },
  // Transportation
  { id: "l4-car", english: "Car", dari: "موتر", phonetic: "motar", category: "Transportation" },
  { id: "l4-airplane", english: "Airplane", dari: "طیاره", phonetic: "tayara", category: "Transportation" },
  { id: "l4-boat", english: "Boat", dari: "کشتی", phonetic: "kishti", category: "Transportation" },
  // Weather
  { id: "l4-rain", english: "Rain", dari: "باران", phonetic: "baaraan", category: "Weather" },
  { id: "l4-sun", english: "Sun", dari: "آفتاب", phonetic: "aftaab", category: "Weather" },
  { id: "l4-wind", english: "Wind", dari: "شمال", phonetic: "shamaal", category: "Weather" },
  // Vegetables
  { id: "l4-potato", english: "Potato", dari: "کچالو", phonetic: "kachaloo", category: "Vegetables" },
  { id: "l4-onion", english: "Onion", dari: "پیاز", phonetic: "pyaz", category: "Vegetables" },
]
