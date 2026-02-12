/**
 * Transportation Vocabulary Set Data
 * Contains all vocabulary words for the Transportation set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const transportationVocab: VocabWord[] = [
  {
    id: "car",
    english: "Car",
    dari: "موتر",
    phonetic: "motar",
  },
  {
    id: "airplane",
    english: "Airplane",
    dari: "طیاره",
    phonetic: "tayara",
  },
  {
    id: "train",
    english: "Train",
    dari: "ترین",
    phonetic: "tren",
  },
  {
    id: "bus",
    english: "Bus",
    dari: "سرویس",
    phonetic: "sarwees",
  },
  {
    id: "bicycle",
    english: "Bicycle",
    dari: "بایسکل",
    phonetic: "bye-si-kill",
  },
  {
    id: "motorcycle",
    english: "Motorcycle",
    dari: "موترسیکل",
    phonetic: "motar-si-kill",
  },
  {
    id: "boat",
    english: "Boat",
    dari: "کشتی",
    phonetic: "kishti",
  },
];

export const setInfo = {
  id: "transportation",
  title: "Transportation",
  description: "Learn transportation terms in Dari",
  wordCount: transportationVocab.length,
};