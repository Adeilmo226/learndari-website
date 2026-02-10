/**
 * Food Vocabulary Set Data
 * Contains all vocabulary words for the Food set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const foodVocab: VocabWord[] = [
  {
    id: "salad",
    english: "Salad",
    dari: "سالاد",
    phonetic: "salata",
  },
  {
    id: "egg",
    english: "Egg",
    dari: "تخم",
    phonetic: "tukham",
  },
  {
    id: "alcohol",
    english: "Alcohol",
    dari: "شراب",
    phonetic: "sharaab",
  },
  {
    id: "soup",
    english: "Soup",
    dari: "آش",
    phonetic: "aush",
  },
  {
    id: "rice",
    english: "Rice",
    dari: "برنج",
    phonetic: "berinj",
  },
  {
    id: "bread",
    english: "Bread",
    dari: "نان خشک",
    phonetic: "naan khuskh",
  },
  {
    id: "cheese",
    english: "Cheese",
    dari: "پنیر",
    phonetic: "paneer",
  },
  {
    id: "oil",
    english: "Oil",
    dari: "روغن",
    phonetic: "roghan",
  },
];

export const setInfo = {
  id: "food",
  title: "Food",
  description: "Learn common food items in Dari",
  wordCount: foodVocab.length,
};