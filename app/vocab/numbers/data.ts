/**
 * Numbers Vocabulary Set Data
 * Contains all vocabulary words for the Numbers set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const numbersVocab: VocabWord[] = [
  { id: "1", english: "One (1)", dari: "یک", phonetic: "yak" },
  { id: "2", english: "Two (2)", dari: "دو", phonetic: "do" },
  { id: "3", english: "Three (3)", dari: "سه", phonetic: "se" },
  { id: "4", english: "Four (4)", dari: "چهار", phonetic: "chahar" },
  { id: "5", english: "Five (5)", dari: "پنج", phonetic: "panj" },
  { id: "6", english: "Six (6)", dari: "شش", phonetic: "shash" },
  { id: "7", english: "Seven (7)", dari: "هفت", phonetic: "haft" },
  { id: "8", english: "Eight (8)", dari: "هشت", phonetic: "hasht" },
  { id: "9", english: "Nine (9)", dari: "نه", phonetic: "noh" },
  { id: "10", english: "Ten (10)", dari: "ده", phonetic: "dah" },
  { id: "11", english: "Eleven (11)", dari: "یازده", phonetic: "yazdah" },
  { id: "12", english: "Twelve (12)", dari: "دوازده", phonetic: "davazdah" },
  { id: "13", english: "Thirteen (13)", dari: "سیزده", phonetic: "sizdah" },
  { id: "14", english: "Fourteen (14)", dari: "چهارده", phonetic: "chahardah" },
  { id: "15", english: "Fifteen (15)", dari: "پانزده", phonetic: "panzdah" },
  { id: "16", english: "Sixteen (16)", dari: "شانزده", phonetic: "shanzdah" },
  { id: "17", english: "Seventeen (17)", dari: "هفده", phonetic: "hafdah" },
  { id: "18", english: "Eighteen (18)", dari: "هجده", phonetic: "hajdah" },
  { id: "19", english: "Nineteen (19)", dari: "نوزده", phonetic: "nuzdah" },
  { id: "20", english: "Twenty (20)", dari: "بیست", phonetic: "bist" },
  { id: "21", english: "Twenty-One (21)", dari: "بیست و یک", phonetic: "bist-o-yak" },
  { id: "22", english: "Twenty-Two (22)", dari: "بیست و دو", phonetic: "bist-o-do" },
  { id: "23", english: "Twenty-Three (23)", dari: "بیست و سه", phonetic: "bist-o-se" },
  { id: "24", english: "Twenty-Four (24)", dari: "بیست و چهار", phonetic: "bist-o-chahar" },
  { id: "25", english: "Twenty-Five (25)", dari: "بیست و پنج", phonetic: "bist-o-panj" },
  { id: "26", english: "Twenty-Six (26)", dari: "بیست و شش", phonetic: "bist-o-shash" },
  { id: "27", english: "Twenty-Seven (27)", dari: "بیست و هفت", phonetic: "bist-o-haft" },
  { id: "28", english: "Twenty-Eight (28)", dari: "بیست و هشت", phonetic: "bist-o-hasht" },
  { id: "29", english: "Twenty-Nine (29)", dari: "بیست و نه", phonetic: "bist-o-noh" },
  { id: "30", english: "Thirty (30)", dari: "سی", phonetic: "si" },
  { id: "40", english: "Forty (40)", dari: "چهل", phonetic: "chehel" },
  { id: "50", english: "Fifty (50)", dari: "پنجاه", phonetic: "panjah" },
  { id: "60", english: "Sixty (60)", dari: "شصت", phonetic: "shast" },
  { id: "70", english: "Seventy (70)", dari: "هفتاد", phonetic: "haftad" },
  { id: "80", english: "Eighty (80)", dari: "هشتاد", phonetic: "hashtad" },
  { id: "90", english: "Ninety (90)", dari: "نود", phonetic: "navad" },
  { id: "100", english: "One Hundred (100)", dari: "صد", phonetic: "sad" },
  { id: "1000", english: "One Thousand (1000)", dari: "هزار", phonetic: "hazaar" },
];

export const setInfo = {
  id: "numbers",
  title: "Numbers",
  description: "Learn to count in Dari from 1 to 1000",
  wordCount: numbersVocab.length,
};
