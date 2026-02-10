/**
 * Vegetables Vocabulary Set Data
 * Contains all vocabulary words for the Vegetables set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const vegetablesVocab: VocabWord[] = [
  {
    id: "carrot",
    english: "Carrot",
    dari: "زردک",
    phonetic: "zardak",
  },
  {
    id: "pumpkin",
    english: "Pumpkin",
    dari: "کدو",
    phonetic: "kadoo",
  },
  {
    id: "lettuce",
    english: "Lettuce",
    dari: "کاهو",
    phonetic: "kahoo",
  },
  {
    id: "cauliflower",
    english: "Cauliflower",
    dari: "گل پی",
    phonetic: "gulpi",
  },
  {
    id: "beans",
    english: "Beans",
    dari: "لوبیا",
    phonetic: "lubya",
  },
  {
    id: "turnip",
    english: "Turnip",
    dari: "شلغم",
    phonetic: "shalgham",
  },
  {
    id: "corn",
    english: "Corn",
    dari: "جواری",
    phonetic: "jawaree",
  },
  {
    id: "potato",
    english: "Potato",
    dari: "کچالو",
    phonetic: "kachaloo",
  },
  {
    id: "eggplant",
    english: "Eggplant",
    dari: "بانجان",
    phonetic: "banjan",
  },
  {
    id: "onion",
    english: "Onion",
    dari: "پیاز",
    phonetic: "pyaz",
  },
  {
    id: "tomato",
    english: "Tomato",
    dari: "بانجان رومی",
    phonetic: "banjaan-eh rumi",
  },
];

export const setInfo = {
  id: "vegetables",
  title: "Vegetables",
  description: "Learn vegetable names in Dari",
  wordCount: vegetablesVocab.length,
};