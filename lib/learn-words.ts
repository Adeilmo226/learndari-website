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
  audioFolder: string
}

/**
 * Level 3: Simple Words
 * Short, basic words that are easy to read and recognize
 */
export const simpleWords: LearnWord[] = [
  // Colors (short, common words)
  { id: "l3-red", english: "Red", dari: "سرخ", phonetic: "surkh", category: "Colors", audioFolder: "colors" },
  { id: "l3-green", english: "Green", dari: "سبز", phonetic: "sabz", category: "Colors", audioFolder: "colors" },
  { id: "l3-yellow", english: "Yellow", dari: "زرد", phonetic: "zard", category: "Colors", audioFolder: "colors" },
  { id: "l3-white", english: "White", dari: "سفید", phonetic: "safeyd", category: "Colors", audioFolder: "colors" },
  // Numbers (1-10) — IDs match audio file names (1.mp3, 2.mp3, etc.)
  { id: "l3-1", english: "One", dari: "یک", phonetic: "yak", category: "Numbers", audioFolder: "numbers" },
  { id: "l3-2", english: "Two", dari: "دو", phonetic: "do", category: "Numbers", audioFolder: "numbers" },
  { id: "l3-3", english: "Three", dari: "سه", phonetic: "se", category: "Numbers", audioFolder: "numbers" },
  { id: "l3-5", english: "Five", dari: "پنج", phonetic: "panj", category: "Numbers", audioFolder: "numbers" },
  { id: "l3-10", english: "Ten", dari: "ده", phonetic: "dah", category: "Numbers", audioFolder: "numbers" },
  // Animals (short words)
  { id: "l3-dog", english: "Dog", dari: "سگ", phonetic: "sag", category: "Animals", audioFolder: "animals" },
  { id: "l3-cat", english: "Cat", dari: "پیشک", phonetic: "peshak", category: "Animals", audioFolder: "animals" },
  { id: "l3-cow", english: "Cow", dari: "گاو", phonetic: "gaw", category: "Animals", audioFolder: "animals" },
  { id: "l3-fish", english: "Fish", dari: "ماهی", phonetic: "mahi", category: "Animals", audioFolder: "animals" },
  { id: "l3-lion", english: "Lion", dari: "شیر", phonetic: "share", category: "Animals", audioFolder: "animals" },
  // Body parts (short words)
  { id: "l3-head", english: "Head", dari: "سر", phonetic: "sar", category: "Body Parts", audioFolder: "body-parts" },
  { id: "l3-hand", english: "Hand", dari: "دست", phonetic: "dist", category: "Body Parts", audioFolder: "body-parts" },
  // Fruits (short words)
  { id: "l3-apple", english: "Apple", dari: "سیب", phonetic: "sayb", category: "Fruits", audioFolder: "fruits" },
  { id: "l3-pear", english: "Pear", dari: "ناک", phonetic: "naak", category: "Fruits", audioFolder: "fruits" },
  // Food
  { id: "l3-egg", english: "Egg", dari: "تخم", phonetic: "tukham", category: "Food", audioFolder: "food" },
  { id: "l3-rice", english: "Rice", dari: "برنج", phonetic: "berinj", category: "Food", audioFolder: "food" },
  // Weather
  { id: "l3-snow", english: "Snow", dari: "برف", phonetic: "bahrf", category: "Weather", audioFolder: "weather" },
  { id: "l3-cloud", english: "Cloud", dari: "ابر", phonetic: "abr", category: "Weather", audioFolder: "weather" },
  // Seasons
  { id: "l3-spring", english: "Spring", dari: "بهار", phonetic: "bahar", category: "Seasons", audioFolder: "seasons" },
  { id: "l3-winter", english: "Winter", dari: "زمستان", phonetic: "zimestan", category: "Seasons", audioFolder: "seasons" },
]

/**
 * Level 4: Common Words
 * Everyday vocabulary, slightly more complex
 */
export const commonWords: LearnWord[] = [
  // Phrases (IDs match audio files in phrases folder)
  { id: "l4-how-are-you", english: "How are you?", dari: "چطور استید؟", phonetic: "chitor asteyn", category: "Phrases", audioFolder: "phrases" },
  { id: "l4-welcome", english: "Welcome", dari: "خوش آمدید", phonetic: "khosh aamadeed", category: "Phrases", audioFolder: "phrases" },
  { id: "l4-i-love-you", english: "I love you", dari: "دوستت دارم", phonetic: "dostat daaram", category: "Phrases", audioFolder: "phrases" },
  { id: "l4-god-willing", english: "God willing", dari: "انشاالله", phonetic: "inshallah", category: "Phrases", audioFolder: "phrases" },
  { id: "l4-im-sorry", english: "I'm sorry", dari: "معذرت میخواهم", phonetic: "mazarat mekhwaam", category: "Phrases", audioFolder: "phrases" },
  { id: "l4-congratulations", english: "Congratulations", dari: "مبارک", phonetic: "mubaarak", category: "Phrases", audioFolder: "phrases" },
  // Transportation
  { id: "l4-car", english: "Car", dari: "موتر", phonetic: "motar", category: "Transportation", audioFolder: "transportation" },
  { id: "l4-airplane", english: "Airplane", dari: "طیاره", phonetic: "tayara", category: "Transportation", audioFolder: "transportation" },
  { id: "l4-boat", english: "Boat", dari: "کشتی", phonetic: "kishti", category: "Transportation", audioFolder: "transportation" },
  // Weather
  { id: "l4-rain", english: "Rain", dari: "باران", phonetic: "baaraan", category: "Weather", audioFolder: "weather" },
  { id: "l4-sun", english: "Sun", dari: "آفتاب", phonetic: "aftaab", category: "Weather", audioFolder: "weather" },
  { id: "l4-wind", english: "Wind", dari: "شمال", phonetic: "shamaal", category: "Weather", audioFolder: "weather" },
  // Vegetables
  { id: "l4-potato", english: "Potato", dari: "کچالو", phonetic: "kachaloo", category: "Vegetables", audioFolder: "vegetables" },
  { id: "l4-onion", english: "Onion", dari: "پیاز", phonetic: "pyaz", category: "Vegetables", audioFolder: "vegetables" },
  // Animals
  { id: "l4-elephant", english: "Elephant", dari: "فیل", phonetic: "feel", category: "Animals", audioFolder: "animals" },
  { id: "l4-rabbit", english: "Rabbit", dari: "خرگوش", phonetic: "khargoosh", category: "Animals", audioFolder: "animals" },
  // Fruits
  { id: "l4-watermelon", english: "Watermelon", dari: "تربوز", phonetic: "tarbooz", category: "Fruits", audioFolder: "fruits" },
  { id: "l4-grape", english: "Grape", dari: "انگور", phonetic: "angoor", category: "Fruits", audioFolder: "fruits" },
  // Food
  { id: "l4-bread", english: "Bread", dari: "نان خشک", phonetic: "naan khuskh", category: "Food", audioFolder: "food" },
  { id: "l4-soup", english: "Soup", dari: "آش", phonetic: "aush", category: "Food", audioFolder: "food" },
  { id: "l4-cheese", english: "Cheese", dari: "پنیر", phonetic: "paneer", category: "Food", audioFolder: "food" },
]

