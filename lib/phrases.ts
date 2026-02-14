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
  { id: "how-are-you", dari: "چطور استید؟", english: "How are you?", phonetic: "chitor asteyn" },
  { id: "where-are-you-from", dari: "از کجا استید؟", english: "Where are you from?", phonetic: "az kuja asteyn" },
  { id: "i-dont-understand", dari: "نمیفهمم", english: "I don't understand", phonetic: "nami-fahmam" },
  { id: "where-is-bathroom", dari: "تشناب کجاست؟", english: "Where is the bathroom?", phonetic: "tashnaab kujast" },
  { id: "i-am-hungry", dari: "گرسنه هستم", english: "I am hungry", phonetic: "gursana hastam" },
  { id: "i-am-tired", dari: "خسته استم", english: "I am tired", phonetic: "khasta astum" },
  { id: "i-love-you", dari: "دوستت دارم", english: "I love you", phonetic: "dostat daaram" },
  { id: "i-miss-you", dari: "دلم برایت تنگ شده", english: "I miss you", phonetic: "dilam baraat tang shuda" },
  { id: "lets-eat", dari: "بیا بخوریم", english: "Let's eat", phonetic: "biya bekhorim" },
  { id: "need-bathroom", dari: "تشناب کار دارم", english: "I need to use the bathroom", phonetic: "tashnab kar darum" },
  { id: "god-willing", dari: "انشاالله", english: "God willing", phonetic: "inshallah" },
  { id: "welcome", dari: "خوش آمدید", english: "Welcome", phonetic: "khosh aamadeed" },
  { id: "congratulations", dari: "مبارک", english: "Congratulations", phonetic: "mubaarak" },
  { id: "im-sorry", dari: "معذرت میخواهم", english: "I'm sorry", phonetic: "mazarat mekhwaam" },
  { id: "i-am-happy", dari: "خوشحال هستم", english: "I am happy", phonetic: "khushhaal hastam" },
]
