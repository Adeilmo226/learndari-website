/**
 * Body Parts Vocabulary Set Data
 * Contains all vocabulary words for the Body Parts set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const bodyPartsVocab: VocabWord[] = [
  {
    id: "head",
    english: "Head",
    dari: "سر",
    phonetic: "sar",
  },
  {
    id: "neck",
    english: "Neck",
    dari: "گردن",
    phonetic: "gardan",
  },
  {
    id: "throat",
    english: "Throat",
    dari: "گلو",
    phonetic: "guloon",
  },
  {
    id: "chest",
    english: "Chest",
    dari: "سینه",
    phonetic: "seyna",
  },
  {
    id: "shoulder",
    english: "Shoulder",
    dari: "شانه",
    phonetic: "shaana",
  },
  {
    id: "elbow",
    english: "Elbow",
    dari: "آرنج",
    phonetic: "arinj",
  },
  {
    id: "hip",
    english: "Hip",
    dari: "سرین",
    phonetic: "sureyn",
  },
  {
    id: "hand",
    english: "Hand",
    dari: "دست",
    phonetic: "dist",
  },
  {
    id: "thigh",
    english: "Thigh",
    dari: "ران",
    phonetic: "ron",
  },
  {
    id: "knee",
    english: "Knee",
    dari: "زانو",
    phonetic: "zanoo",
  },
  {
    id: "leg-foot",
    english: "Leg/Foot",
    dari: "پای",
    phonetic: "paai",
  },
  {
    id: "ankle",
    english: "Ankle",
    dari: "بوجلک پای",
    phonetic: "boojulak paai",
  },
];

export const setInfo = {
  id: "body-parts",
  title: "Body Parts",
  description: "Learn body part names in Dari",
  wordCount: bodyPartsVocab.length,
};