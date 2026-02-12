/**
 * Weather Vocabulary Set Data
 * Contains all vocabulary words for the Weather set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const weatherVocab: VocabWord[] = [
  {
    id: "sun",
    english: "Sun",
    dari: "آفتاب",
    phonetic: "aftaab",
  },
  {
    id: "rain",
    english: "Rain",
    dari: "باران",
    phonetic: "baaraan",
  },
  {
    id: "wind",
    english: "Wind",
    dari: "شمال",
    phonetic: "shamaal",
  },
  {
    id: "lightning",
    english: "Lightning",
    dari: "الماسک",
    phonetic: "almaasak",
  },
  {
    id: "fog",
    english: "Fog",
    dari: "غبار",
    phonetic: "ghobaar",
  },
  {
    id: "cloud",
    english: "Cloud",
    dari: "ابر",
    phonetic: "abr",
  },
  {
    id: "snow",
    english: "Snow",
    dari: "برف",
    phonetic: "bahrf",
  },
  {
    id: "storm",
    english: "Storm",
    dari: "طوفان",
    phonetic: "toofan",
  },
  {
    id: "hail",
    english: "Hail",
    dari: "زاله",
    phonetic: "zhaala",
  },
];

export const setInfo = {
  id: "weather",
  title: "Weather",
  description: "Learn weather-related terms in Dari",
  wordCount: weatherVocab.length,
};