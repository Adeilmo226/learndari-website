"""
LearnDari Vocabulary Data
Single source of truth for all vocab sets
Add new words here, then run generate-audio.py
"""

colors = [
    {"id": "red", "dari": "سرخ", "english": "Red", "phonetic": "surkh"},
    {"id": "blue", "dari": "آبی", "english": "Blue", "phonetic": "ahbee"},
    {"id": "green", "dari": "سبز", "english": "Green", "phonetic": "sabz"},
    {"id": "yellow", "dari": "زرد", "english": "Yellow", "phonetic": "zard"},
    {"id": "white", "dari": "سفید", "english": "White", "phonetic": "safeyd"},
    {"id": "black", "dari": "سیاه", "english": "Black", "phonetic": "siyah"},
    {"id": "orange", "dari": "نارنجی", "english": "Orange", "phonetic": "naranji"},
    {"id": "purple", "dari": "یاسمانی", "english": "Purple", "phonetic": "yasamani"},
    {"id": "pink", "dari": "گلابی", "english": "Pink", "phonetic": "gulabi"},
    {"id": "brown", "dari": "نسواری", "english": "Brown", "phonetic": "naswari"},
    {"id": "gold", "dari": "طلایی", "english": "Gold", "phonetic": "talayi"},
    {"id": "gray", "dari": "فولادی", "english": "Gray", "phonetic": "foladi"},
]

weather = [
    {"id": "sun", "dari": "آفتاب", "english": "Sun", "phonetic": "aftaab"},
    {"id": "rain", "dari": "باران", "english": "Rain", "phonetic": "baaraan"},
    {"id": "wind", "dari": "شمال", "english": "Wind", "phonetic": "shamaal"},
    {"id": "lightning", "dari": "الماسک", "english": "Lightning", "phonetic": "almaasak"},
    {"id": "fog", "dari": "غبار", "english": "Fog", "phonetic": "ghobaar"},
    {"id": "cloud", "dari": "ابر", "english": "Cloud", "phonetic": "abr"},
    {"id": "snow", "dari": "برف", "english": "Snow", "phonetic": "bahrf"},
    {"id": "storm", "dari": "طوفان", "english": "Storm", "phonetic": "toofan"},
    {"id": "hail", "dari": "زاله", "english": "Hail", "phonetic": "zhaala"},
]

days_of_week = [
    {"id": "saturday", "dari": "شنبه", "english": "Saturday", "phonetic": "shanbeh"},
    {"id": "sunday", "dari": "یکشنبه", "english": "Sunday", "phonetic": "yakshanbe"},
    {"id": "monday", "dari": "دوشنبه", "english": "Monday", "phonetic": "doshanbe"},
    {"id": "tuesday", "dari": "سه‌شنبه", "english": "Tuesday", "phonetic": "seshanbe"},
    {"id": "wednesday", "dari": "چهارشنبه", "english": "Wednesday", "phonetic": "chaharshanbe"},
    {"id": "thursday", "dari": "پنجشنبه", "english": "Thursday", "phonetic": "panjshanbe"},
    {"id": "friday", "dari": "جمعه", "english": "Friday", "phonetic": "juma"},
]

seasons = [
    {"id": "spring", "dari": "بهار", "english": "Spring", "phonetic": "bahar"},
    {"id": "summer", "dari": "تابستان", "english": "Summer", "phonetic": "tahbistan"},
    {"id": "fall", "dari": "خزان", "english": "Fall", "phonetic": "khazaan"},
    {"id": "winter", "dari": "زمستان", "english": "Winter", "phonetic": "zimestan"},
]

animals = [
    {"id": "dog", "dari": "سگ", "english": "Dog", "phonetic": "sag"},
    {"id": "cat", "dari": "پیشک", "english": "Cat", "phonetic": "peshak"},
    {"id": "monkey", "dari": "شادی", "english": "Monkey", "phonetic": "shadi"},
    {"id": "tiger", "dari": "پلنگ", "english": "Tiger", "phonetic": "palang"},
    {"id": "lion", "dari": "شیر", "english": "Lion", "phonetic": "share"},
    {"id": "cow", "dari": "گاو", "english": "Cow", "phonetic": "gaw"},
    {"id": "fish", "dari": "ماهی", "english": "Fish", "phonetic": "mahi"},
    {"id": "giraffe", "dari": "زرافه", "english": "Giraffe", "phonetic": "zarafa"},
    {"id": "frog", "dari": "بقه", "english": "Frog", "phonetic": "baqa"},
    {"id": "elephant", "dari": "فیل", "english": "Elephant", "phonetic": "feel"},
    {"id": "rabbit", "dari": "خرگوش", "english": "Rabbit", "phonetic": "khargoosh"},
    {"id": "owl", "dari": "بوم", "english": "Owl", "phonetic": "boom"},
    {"id": "donkey", "dari": "خر", "english": "Donkey", "phonetic": "khar"},
    {"id": "pig", "dari": "خوک", "english": "Pig", "phonetic": "khook"},
]

fruits = [
    {"id": "apple", "dari": "سیب", "english": "Apple", "phonetic": "sayb"},
    {"id": "cherry", "dari": "آلوبالو", "english": "Cherry", "phonetic": "aloo baloo"},
    {"id": "banana", "dari": "کیله", "english": "Banana", "phonetic": "kaylah"},
    {"id": "plum", "dari": "آلو", "english": "Plum", "phonetic": "aloo"},
    {"id": "watermelon", "dari": "تربوز", "english": "Watermelon", "phonetic": "tarbooz"},
    {"id": "orange", "dari": "مالته", "english": "Orange", "phonetic": "malta"},
    {"id": "grape", "dari": "انگور", "english": "Grape", "phonetic": "angoor"},
    {"id": "mango", "dari": "آم", "english": "Mango", "phonetic": "ahm"},
    {"id": "pear", "dari": "ناک", "english": "Pear", "phonetic": "naak"},
    {"id": "peach", "dari": "شفت آلو", "english": "Peach", "phonetic": "shaft-aloo"},
    {"id": "strawberry", "dari": "توت زمینی", "english": "Strawberry", "phonetic": "tut zameeni"},
    {"id": "coconut", "dari": "نارگیل", "english": "Coconut", "phonetic": "naryal"},
    {"id": "grapefruit", "dari": "چکوتره", "english": "Grapefruit", "phonetic": "chkotara"},
    {"id": "pineapple", "dari": "اناناس", "english": "Pineapple", "phonetic": "ananas"},
    {"id": "pomegranate", "dari": "انار", "english": "Pomegranate", "phonetic": "anar"},
]

vegetables = [
    {"id": "carrot", "dari": "زردک", "english": "Carrot", "phonetic": "zardak"},
    {"id": "pumpkin", "dari": "کدو", "english": "Pumpkin", "phonetic": "kadoo"},
    {"id": "lettuce", "dari": "کاهو", "english": "Lettuce", "phonetic": "kahoo"},
    {"id": "cauliflower", "dari": "گل پی", "english": "Cauliflower", "phonetic": "gulpi"},
    {"id": "beans", "dari": "لوبیا", "english": "Beans", "phonetic": "lubya"},
    {"id": "turnip", "dari": "شلغم", "english": "Turnip", "phonetic": "shalgham"},
    {"id": "corn", "dari": "جواری", "english": "Corn", "phonetic": "jawaree"},
    {"id": "potato", "dari": "کچالو", "english": "Potato", "phonetic": "kachaloo"},
    {"id": "eggplant", "dari": "بانجان", "english": "Eggplant", "phonetic": "banjan"},
    {"id": "onion", "dari": "پیاز", "english": "Onion", "phonetic": "pyaz"},
    {"id": "tomato", "dari": "بانجان رومی", "english": "Tomato", "phonetic": "banjaan-eh rumi"},
]

transportation = [
    {"id": "car", "dari": "موتر", "english": "Car", "phonetic": "motar"},
    {"id": "airplane", "dari": "طیاره", "english": "Airplane", "phonetic": "tayara"},
    {"id": "train", "dari": "ترین", "english": "Train", "phonetic": "tren"},
    {"id": "bus", "dari": "سرویس", "english": "Bus", "phonetic": "sarwees"},
    {"id": "bicycle", "dari": "بایسکل", "english": "Bicycle", "phonetic": "bye-si-kill"},
    {"id": "motorcycle", "dari": "موترسیکل", "english": "Motorcycle", "phonetic": "motar-si-kill"},
    {"id": "boat", "dari": "کشتی", "english": "Boat", "phonetic": "kishti"},
]

body_parts = [
    {"id": "head", "dari": "سر", "english": "Head", "phonetic": "sar"},
    {"id": "neck", "dari": "گردن", "english": "Neck", "phonetic": "gardan"},
    {"id": "throat", "dari": "گلو", "english": "Throat", "phonetic": "guloon"},
    {"id": "chest", "dari": "سینه", "english": "Chest", "phonetic": "seyna"},
    {"id": "shoulder", "dari": "شانه", "english": "Shoulder", "phonetic": "shaana"},
    {"id": "elbow", "dari": "آرنج", "english": "Elbow", "phonetic": "arinj"},
    {"id": "hip", "dari": "سرین", "english": "Hip", "phonetic": "sureyn"},
    {"id": "hand", "dari": "دست", "english": "Hand", "phonetic": "dist"},
    {"id": "thigh", "dari": "ران", "english": "Thigh", "phonetic": "ron"},
    {"id": "knee", "dari": "زانو", "english": "Knee", "phonetic": "zanoo"},
    {"id": "leg-foot", "dari": "پای", "english": "Leg/Foot", "phonetic": "paai"},
    {"id": "ankle", "dari": "بوجلک پای", "english": "Ankle", "phonetic": "boojulak paai"},
]

food = [
    {"id": "salad", "dari": "سالاد", "english": "Salad", "phonetic": "salata"},
    {"id": "egg", "dari": "تخم", "english": "Egg", "phonetic": "tukham"},
    {"id": "alcohol", "dari": "شراب", "english": "Alcohol", "phonetic": "sharaab"},
    {"id": "soup", "dari": "آش", "english": "Soup", "phonetic": "aush"},
    {"id": "rice", "dari": "برنج", "english": "Rice", "phonetic": "berinj"},
    {"id": "bread", "dari": "نان خشک", "english": "Bread", "phonetic": "naan khuskh"},
    {"id": "cheese", "dari": "پنیر", "english": "Cheese", "phonetic": "paneer"},
    {"id": "oil", "dari": "روغن", "english": "Oil", "phonetic": "roghan"},
]

numbers = [
    {"id": "1", "dari": "یک", "english": "One (1)", "phonetic": "yak"},
    {"id": "2", "dari": "دو", "english": "Two (2)", "phonetic": "do"},
    {"id": "3", "dari": "سه", "english": "Three (3)", "phonetic": "se"},
    {"id": "4", "dari": "چهار", "english": "Four (4)", "phonetic": "chahar"},
    {"id": "5", "dari": "پنج", "english": "Five (5)", "phonetic": "panj"},
    {"id": "6", "dari": "شش", "english": "Six (6)", "phonetic": "shash"},
    {"id": "7", "dari": "هفت", "english": "Seven (7)", "phonetic": "haft"},
    {"id": "8", "dari": "هشت", "english": "Eight (8)", "phonetic": "hasht"},
    {"id": "9", "dari": "نه", "english": "Nine (9)", "phonetic": "noh"},
    {"id": "10", "dari": "ده", "english": "Ten (10)", "phonetic": "dah"},
    {"id": "11", "dari": "یازده", "english": "Eleven (11)", "phonetic": "yazdah"},
    {"id": "12", "dari": "دوازده", "english": "Twelve (12)", "phonetic": "davazdah"},
    {"id": "13", "dari": "سیزده", "english": "Thirteen (13)", "phonetic": "sizdah"},
    {"id": "14", "dari": "چهارده", "english": "Fourteen (14)", "phonetic": "chahardah"},
    {"id": "15", "dari": "پانزده", "english": "Fifteen (15)", "phonetic": "panzdah"},
    {"id": "16", "dari": "شانزده", "english": "Sixteen (16)", "phonetic": "shanzdah"},
    {"id": "17", "dari": "هفده", "english": "Seventeen (17)", "phonetic": "hafdah"},
    {"id": "18", "dari": "هجده", "english": "Eighteen (18)", "phonetic": "hajdah"},
    {"id": "19", "dari": "نوزده", "english": "Nineteen (19)", "phonetic": "nuzdah"},
    {"id": "20", "dari": "بیست", "english": "Twenty (20)", "phonetic": "bist"},
    {"id": "21", "dari": "بیست و یک", "english": "Twenty-One (21)", "phonetic": "bist-o-yak"},
    {"id": "22", "dari": "بیست و دو", "english": "Twenty-Two (22)", "phonetic": "bist-o-do"},
    {"id": "23", "dari": "بیست و سه", "english": "Twenty-Three (23)", "phonetic": "bist-o-se"},
    {"id": "24", "dari": "بیست و چهار", "english": "Twenty-Four (24)", "phonetic": "bist-o-chahar"},
    {"id": "25", "dari": "بیست و پنج", "english": "Twenty-Five (25)", "phonetic": "bist-o-panj"},
    {"id": "26", "dari": "بیست و شش", "english": "Twenty-Six (26)", "phonetic": "bist-o-shash"},
    {"id": "27", "dari": "بیست و هفت", "english": "Twenty-Seven (27)", "phonetic": "bist-o-haft"},
    {"id": "28", "dari": "بیست و هشت", "english": "Twenty-Eight (28)", "phonetic": "bist-o-hasht"},
    {"id": "29", "dari": "بیست و نه", "english": "Twenty-Nine (29)", "phonetic": "bist-o-noh"},
    {"id": "30", "dari": "سی", "english": "Thirty (30)", "phonetic": "si"},
    {"id": "40", "dari": "چهل", "english": "Forty (40)", "phonetic": "chehel"},
    {"id": "50", "dari": "پنجاه", "english": "Fifty (50)", "phonetic": "panjah"},
    {"id": "60", "dari": "شصت", "english": "Sixty (60)", "phonetic": "shast"},
    {"id": "70", "dari": "هفتاد", "english": "Seventy (70)", "phonetic": "haftad"},
    {"id": "80", "dari": "هشتاد", "english": "Eighty (80)", "phonetic": "hashtad"},
    {"id": "90", "dari": "نود", "english": "Ninety (90)", "phonetic": "navad"},
    {"id": "100", "dari": "صد", "english": "One Hundred (100)", "phonetic": "sad"},
    {"id": "1000", "dari": "هزار", "english": "One Thousand (1000)", "phonetic": "hazaar"},
]

phrases = [
    {"id": "how-are-you", "dari": "چطور استید؟", "english": "How are you?", "phonetic": "chitor asteyn"},
    {"id": "where-are-you-from", "dari": "از کجا استید؟", "english": "Where are you from?", "phonetic": "az kuja asteyn"},
    {"id": "i-dont-understand", "dari": "نمیفهمم", "english": "I don't understand", "phonetic": "nami-fahmam"},
    {"id": "where-is-bathroom", "dari": "تشناب کجاست؟", "english": "Where is the bathroom?", "phonetic": "tashnaab kujast"},
    {"id": "i-am-hungry", "dari": "گرسنه هستم", "english": "I am hungry", "phonetic": "gursana hastam"},
    {"id": "i-am-tired", "dari": "خسته استم", "english": "I am tired", "phonetic": "khasta astum"},
    {"id": "i-love-you", "dari": "دوستت دارم", "english": "I love you", "phonetic": "dostat daaram"},
    {"id": "i-miss-you", "dari": "دلم برایت تنگ شده", "english": "I miss you", "phonetic": "dilam baraat tang shuda"},
    {"id": "lets-eat", "dari": "بیا بخوریم", "english": "Let's eat", "phonetic": "biya bekhorim"},
    {"id": "need-bathroom", "dari": "تشناب کار دارم", "english": "I need to use the bathroom", "phonetic": "tashnab kar darum"},
    {"id": "god-willing", "dari": "انشاالله", "english": "God willing", "phonetic": "inshallah"},
    {"id": "welcome", "dari": "خوش آمدید", "english": "Welcome", "phonetic": "khosh aamadeed"},
    {"id": "congratulations", "dari": "مبارک", "english": "Congratulations", "phonetic": "mubaarak"},
    {"id": "im-sorry", "dari": "معذرت میخواهم", "english": "I'm sorry", "phonetic": "mazarat mekhwaam"},
    {"id": "i-am-happy", "dari": "خوشحال هستم", "english": "I am happy", "phonetic": "khushhaal hastam"},
]

# Master list of all categories
# To add a new category: add data above, then add entry here
ALL_CATEGORIES = [
    {"name": "colors", "data": colors},
    {"name": "weather", "data": weather},
    {"name": "days-of-week", "data": days_of_week},
    {"name": "seasons", "data": seasons},
    {"name": "animals", "data": animals},
    {"name": "fruits", "data": fruits},
    {"name": "vegetables", "data": vegetables},
    {"name": "transportation", "data": transportation},
    {"name": "body-parts", "data": body_parts},
    {"name": "food", "data": food},
    {"name": "phrases", "data": phrases},
	{"name": "numbers", "data": numbers},
]