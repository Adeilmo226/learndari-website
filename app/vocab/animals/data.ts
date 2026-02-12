/**
 * Animals Vocabulary Set Data
 * Contains all vocabulary words for the Animals set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const animalsVocab: VocabWord[] = [
  {
    id: "dog",
    english: "Dog",
    dari: "سگ",
    phonetic: "sag",
  },
  {
    id: "cat",
    english: "Cat",
    dari: "پیشک",
    phonetic: "peshak",
  },
  {
    id: "monkey",
    english: "Monkey",
    dari: "شادی",
    phonetic: "shadi",
  },
  {
    id: "tiger",
    english: "Tiger",
    dari: "پلنگ",
    phonetic: "palang",
  },
  {
    id: "lion",
    english: "Lion",
    dari: "شیر",
    phonetic: "share",
  },
  {
    id: "cow",
    english: "Cow",
    dari: "گاو",
    phonetic: "gaw",
  },
  {
    id: "fish",
    english: "Fish",
    dari: "ماهی",
    phonetic: "mahi",
  },
  {
    id: "giraffe",
    english: "Giraffe",
    dari: "زرافه",
    phonetic: "zarafa",
  },
  {
    id: "frog",
    english: "Frog",
    dari: "بقه",
    phonetic: "baqa",
  },
  {
    id: "elephant",
    english: "Elephant",
    dari: "فیل",
    phonetic: "feel",
  },
  {
    id: "rabbit",
    english: "Rabbit",
    dari: "خرگوش",
    phonetic: "khargoosh",
  },
  {
    id: "owl",
    english: "Owl",
    dari: "بوم",
    phonetic: "boom",
  },
  {
    id: "donkey",
    english: "Donkey",
    dari: "خر",
    phonetic: "khar",
  },
  {
    id: "pig",
    english: "Pig",
    dari: "خوک",
    phonetic: "khook",
  },
];

export const setInfo = {
  id: "animals",
  title: "Animals",
  description: "Learn animal names in Dari",
  wordCount: animalsVocab.length,
};