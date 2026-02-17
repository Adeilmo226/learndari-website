/**
 * Complete Vocabulary Database
 * Built from actual vocab data files (single source of truth)
 */

import { colorsVocab } from "@/app/vocab/colors/data";
import { weatherVocab } from "@/app/vocab/weather/data";
import { daysOfWeekVocab } from "@/app/vocab/days-of-the-week/data";
import { seasonsVocab } from "@/app/vocab/seasons/data";
import { animalsVocab } from "@/app/vocab/animals/data";
import { fruitsVocab } from "@/app/vocab/fruit/data";
import { vegetablesVocab } from "@/app/vocab/vegetables/data";
import { transportationVocab } from "@/app/vocab/transportation/data";
import { bodyPartsVocab } from "@/app/vocab/body/data";
import { foodVocab } from "@/app/vocab/food/data";
import { greetingsVocab } from "@/app/vocab/greetings/data";
import { numbersVocab } from "@/app/vocab/numbers/data";
import { dariAlphabet } from "@/lib/alphabet";

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  category: string;
  audioFolder: string;
  audioUrl?: string;
}

/**
 * Maps each category's vocab data to the correct display name and audio folder
 */
const categories: { data: { id: string; english: string; dari: string; phonetic: string }[]; category: string; audioFolder: string }[] = [
  { data: colorsVocab, category: "Colors", audioFolder: "colors" },
  { data: weatherVocab, category: "Weather", audioFolder: "weather" },
  { data: daysOfWeekVocab, category: "Days of the Week", audioFolder: "days-of-week" },
  { data: seasonsVocab, category: "Seasons", audioFolder: "seasons" },
  { data: animalsVocab, category: "Animals", audioFolder: "animals" },
  { data: fruitsVocab, category: "Fruits", audioFolder: "fruits" },
  { data: vegetablesVocab, category: "Vegetables", audioFolder: "vegetables" },
  { data: transportationVocab, category: "Transportation", audioFolder: "transportation" },
  { data: bodyPartsVocab, category: "Body Parts", audioFolder: "body-parts" },
  { data: foodVocab, category: "Food", audioFolder: "food" },
  { data: greetingsVocab, category: "Greetings", audioFolder: "phrases" },
  { data: numbersVocab, category: "Numbers", audioFolder: "numbers" },
];

const alphabetWords: VocabWord[] = dariAlphabet.map((letter) => ({
  id: letter.id,
  english: letter.name,
  dari: letter.letter,
  phonetic: letter.phonetic,
  category: "Alphabet",
  audioFolder: "alphabet",
}));

export const vocabularyDatabase: VocabWord[] = [
  ...categories.flatMap(({ data, category, audioFolder }) =>
    data.map((word) => ({
      ...word,
      category,
      audioFolder,
    }))
  ),
  ...alphabetWords,
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
    vocabularyDatabase.find((w) => w.id === "red")!,
    vocabularyDatabase.find((w) => w.id === "sun")!,
    vocabularyDatabase.find((w) => w.id === "dog")!,
    vocabularyDatabase.find((w) => w.id === "apple")!,
    vocabularyDatabase.find((w) => w.id === "car")!,
  ];
}
