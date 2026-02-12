/**
 * Seasons Vocabulary Set Data
 * Contains all vocabulary words for the Seasons set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const seasonsVocab: VocabWord[] = [
  {
    id: "spring",
    english: "Spring",
    dari: "بهار",
    phonetic: "bahar",
  },
  {
    id: "summer",
    english: "Summer",
    dari: "تابستان",
    phonetic: "tahbistan",
  },
  {
    id: "fall",
    english: "Fall",
    dari: "خزان",
    phonetic: "khazaan",
  },
  {
    id: "winter",
    english: "Winter",
    dari: "زمستان",
    phonetic: "zimestan",
  },
];

export const setInfo = {
  id: "seasons",
  title: "Seasons",
  description: "Learn the four seasons in Dari",
  wordCount: seasonsVocab.length,
};