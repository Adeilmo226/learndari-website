/**
 * Greetings Vocabulary Set Data
 * Contains all vocabulary words for the Greetings set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const greetingsVocab: VocabWord[] = [
  { id: "hello", english: "Hello", dari: "سلام", phonetic: "salaam" },
  { id: "goodbye", english: "Goodbye", dari: "خداحافظ", phonetic: "khodahafez" },
  { id: "please", english: "Please", dari: "لطفاً", phonetic: "lotfan" },
  { id: "thank-you", english: "Thank you", dari: "تشکر", phonetic: "tashakor" },
  { id: "yes", english: "Yes", dari: "بله", phonetic: "baleh" },
  { id: "no", english: "No", dari: "نه", phonetic: "na" },
  { id: "good-morning", english: "Good morning", dari: "صبح بخیر", phonetic: "sobh bekheyr" },
  { id: "good-night", english: "Good night", dari: "شب بخیر", phonetic: "shab bekheyr" },
  { id: "how-are-you", english: "How are you?", dari: "چطور استین؟", phonetic: "chetour asteyn?" },
  { id: "welcome", english: "Welcome", dari: "خوش آمدید", phonetic: "khosh amadid" },
];

export const setInfo = {
  id: "greetings",
  title: "Greetings",
  description: "Learn common greetings and phrases in Dari",
  wordCount: greetingsVocab.length,
};
