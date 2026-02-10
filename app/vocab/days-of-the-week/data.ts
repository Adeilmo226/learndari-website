/**
 * Days of the Week Vocabulary Set Data
 * Contains all vocabulary words for the Days of the Week set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const daysOfWeekVocab: VocabWord[] = [
  {
    id: "saturday",
    english: "Saturday",
    dari: "شنبه",
    phonetic: "shanbeh",
  },
  {
    id: "sunday",
    english: "Sunday",
    dari: "یکشنبه",
    phonetic: "yakshanbe",
  },
  {
    id: "monday",
    english: "Monday",
    dari: "دوشنبه",
    phonetic: "doshanbe",
  },
  {
    id: "tuesday",
    english: "Tuesday",
    dari: "سه‌شنبه",
    phonetic: "seshanbe",
  },
  {
    id: "wednesday",
    english: "Wednesday",
    dari: "چهارشنبه",
    phonetic: "chaharshanbe",
  },
  {
    id: "thursday",
    english: "Thursday",
    dari: "پنجشنبه",
    phonetic: "panjshanbe",
  },
  {
    id: "friday",
    english: "Friday",
    dari: "جمعه",
    phonetic: "juma",
  },
];

export const setInfo = {
  id: "days-of-week",
  title: "Days of the Week",
  description: "Learn the days of the week in Dari",
  wordCount: daysOfWeekVocab.length,
};