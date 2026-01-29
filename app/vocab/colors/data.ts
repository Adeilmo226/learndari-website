/**
 * Colors Vocabulary Set Data
 * Contains all vocabulary words for the Colors set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string; // Optional: will add audio support later
}

export const colorsVocab: VocabWord[] = [
  {
    id: "red",
    english: "Red",
    dari: "سرخ",
    phonetic: "surkh",
  },
  {
    id: "blue",
    english: "Blue",
    dari: "آبی",
    phonetic: "abi",
  },
  {
    id: "green",
    english: "Green",
    dari: "سبز",
    phonetic: "sabz",
  },
  {
    id: "yellow",
    english: "Yellow",
    dari: "زرد",
    phonetic: "zard",
  },
  {
    id: "white",
    english: "White",
    dari: "سفید",
    phonetic: "safed",
  },
  {
    id: "black",
    english: "Black",
    dari: "سیاه",
    phonetic: "siyah",
  },
  {
    id: "orange",
    english: "Orange",
    dari: "نارنجی",
    phonetic: "naranji",
  },
  {
    id: "purple",
    english: "Purple",
    dari: "بنفش",
    phonetic: "banafsh",
  },
  {
    id: "pink",
    english: "Pink",
    dari: "صورتی",
    phonetic: "surati",
  },
  {
    id: "brown",
    english: "Brown",
    dari: "قهوه‌ای",
    phonetic: "qahwa'i",
  },
];

export const setInfo = {
  id: "colors",
  title: "Colors",
  description: "Learn basic color names in Dari",
  wordCount: colorsVocab.length,
};