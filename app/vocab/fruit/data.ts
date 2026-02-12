/**
 * Fruits Vocabulary Set Data
 * Contains all vocabulary words for the Fruits set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const fruitsVocab: VocabWord[] = [
  {
    id: "apple",
    english: "Apple",
    dari: "سیب",
    phonetic: "sayb",
  },
  {
    id: "cherry",
    english: "Cherry",
    dari: "آلوبالو",
    phonetic: "aloo baloo",
  },
  {
    id: "banana",
    english: "Banana",
    dari: "کیله",
    phonetic: "kaylah",
  },
  {
    id: "plum",
    english: "Plum",
    dari: "آلو",
    phonetic: "aloo",
  },
  {
    id: "watermelon",
    english: "Watermelon",
    dari: "تربوز",
    phonetic: "tarbooz",
  },
  {
    id: "orange",
    english: "Orange",
    dari: "مالته",
    phonetic: "malta",
  },
  {
    id: "grape",
    english: "Grape",
    dari: "انگور",
    phonetic: "angoor",
  },
  {
    id: "mango",
    english: "Mango",
    dari: "آم",
    phonetic: "ahm",
  },
  {
    id: "pear",
    english: "Pear",
    dari: "ناک",
    phonetic: "naak",
  },
  {
    id: "peach",
    english: "Peach",
    dari: "شفت آلو",
    phonetic: "shaft-aloo",
  },
  {
    id: "strawberry",
    english: "Strawberry",
    dari: "توت زمینی",
    phonetic: "tut zameeni",
  },
  {
    id: "coconut",
    english: "Coconut",
    dari: "نارگیل",
    phonetic: "naryal",
  },
  {
    id: "grapefruit",
    english: "Grapefruit",
    dari: "چکوتره",
    phonetic: "chkotara",
  },
  {
    id: "pineapple",
    english: "Pineapple",
    dari: "اناناس",
    phonetic: "ananas",
  },
  {
    id: "pomegranate",
    english: "Pomegranate",
    dari: "انار",
    phonetic: "anar",
  },
];

export const setInfo = {
  id: "fruits",
  title: "Fruits",
  description: "Learn fruit names in Dari",
  wordCount: fruitsVocab.length,
};