/**
 * Greetings Vocabulary Set Data
 * Contains all vocabulary words for the Greetings set
 */

export interface VocabWord {
  id: string;
  english: string;
  dari: string;
  phonetic: string;
  audioUrl?: string;
}

export const greetingsVocab: VocabWord[] = [
  { id: "how-are-you", english: "How are you?", dari: "چطور استید؟", phonetic: "chitor asteyn" },
  { id: "where-are-you-from", english: "Where are you from?", dari: "از کجا استید؟", phonetic: "az kuja asteyn" },
  { id: "i-dont-understand", english: "I don't understand", dari: "نمیفهمم", phonetic: "nami-fahmam" },
  { id: "where-is-bathroom", english: "Where is the bathroom?", dari: "تشناب کجاست؟", phonetic: "tashnaab kujast" },
  { id: "i-am-hungry", english: "I am hungry", dari: "گرسنه هستم", phonetic: "gursana hastam" },
  { id: "i-am-tired", english: "I am tired", dari: "خسته استم", phonetic: "khasta astum" },
  { id: "i-love-you", english: "I love you", dari: "دوستت دارم", phonetic: "dostat daaram" },
  { id: "i-miss-you", english: "I miss you", dari: "دلم برایت تنگ شده", phonetic: "dilam baraat tang shuda" },
  { id: "lets-eat", english: "Let's eat", dari: "بیا بخوریم", phonetic: "biya bekhorim" },
  { id: "need-bathroom", english: "I need to use the bathroom", dari: "تشناب کار دارم", phonetic: "tashnab kar darum" },
  { id: "god-willing", english: "God willing", dari: "انشاالله", phonetic: "inshallah" },
  { id: "welcome", english: "Welcome", dari: "خوش آمدید", phonetic: "khosh aamadeed" },
  { id: "congratulations", english: "Congratulations", dari: "مبارک", phonetic: "mubaarak" },
  { id: "im-sorry", english: "I'm sorry", dari: "معذرت میخواهم", phonetic: "mazarat mekhwaam" },
  { id: "i-am-happy", english: "I am happy", dari: "خوشحال هستم", phonetic: "khushhaal hastam" },
];

export const setInfo = {
  id: "greetings",
  title: "Greetings",
  description: "Learn common greetings and phrases in Dari",
  wordCount: greetingsVocab.length,
};
