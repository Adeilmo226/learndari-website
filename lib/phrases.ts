/**
 * Dari Phrases Data for Level 5
 * Short phrases for reading practice
 */

export interface DariPhrase {
  id: string
  dari: string
  english: string
  phonetic: string
}

/**
 * Level 5: Short Phrases
 * Add your phrases here. Each phrase needs an id, Dari text, English meaning, and phonetic pronunciation.
 */
export const dariPhrases: DariPhrase[] = [
  { id: "phrase-1", dari: "چطور استید؟", english: "How are you?", phonetic: "chitor asteyn" },
  { id: "phrase-2", dari: "از کجا استید؟", english: "Where are you from?", phonetic: "az kuja asteyn" },
  { id: "phrase-3", dari: "نمیفهمم", english: "I don't understand", phonetic: "nami-fahmam" },
  { id: "phrase-4", dari: "تشناب کجاست؟", english: "Where is the bathroom?", phonetic: "tashnaab kujast" },
  { id: "phrase-5", dari: "گرسنه هستم", english: "I am hungry", phonetic: "gursana hastam" },
  { id: "phrase-6", dari: "خسته استم", english: "I am tired", phonetic: "khasta astum" },
  { id: "phrase-7", dari: "دوستت دارم", english: "I love you", phonetic: "dostat daaram" },
  { id: "phrase-8", dari: "دلم برایت تنگ شده", english: "I miss you", phonetic: "dilam baraat tang shuda" },
  { id: "phrase-9", dari: "بیا بخوریم", english: "Let's eat", phonetic: "biya bekhorim" },
  { id: "phrase-10", dari: "تشناب کار دارم", english: "I need to use the bathroom", phonetic: "tashnab kar darum" },
  { id: "phrase-11", dari: "انشاالله", english: "God willing", phonetic: "inshallah" },
  { id: "phrase-12", dari: "خوش آمدید", english: "Welcome", phonetic: "khosh aamadeed" },
  { id: "phrase-13", dari: "مبارک باشد", english: "Congratulations", phonetic: "mubaarak baashad" },
  { id: "phrase-14", dari: "معذرت میخواهم", english: "I'm sorry", phonetic: "mazarat mekhwaam" },
  { id: "phrase-15", dari: "خوشحال هستم", english: "I am happy", phonetic: "khushhaal hastam" },
]
