"""
Audio Generation Script for LearnDari using ElevenLabs
High-quality Persian text-to-speech
"""

import os
from elevenlabs.client import ElevenLabs
from dotenv import load_dotenv
import time

# Load environment variables
load_dotenv('.env.local')

# Get API key from environment
API_KEY = os.getenv('ELEVENLABS_API_KEY')

if not API_KEY:
    print("Error: ELEVENLABS_API_KEY not found in .env.local")
    print("Please add your API key to .env.local")
    exit(1)

# Initialize ElevenLabs client
client = ElevenLabs(api_key=API_KEY)

# Vocabulary data
colors = [
    {"id": "red", "dari": "سرخ"},
    {"id": "blue", "dari": "آبی"},
    {"id": "green", "dari": "سبز"},
    {"id": "yellow", "dari": "زرد"},
    {"id": "white", "dari": "سفید"},
    {"id": "black", "dari": "سیاه"},
    {"id": "orange", "dari": "نارنجی"},
    {"id": "purple", "dari": "بنفش"},
    {"id": "pink", "dari": "صورتی"},
    {"id": "brown", "dari": "قهوه‌ای"},
]

numbers = [
    {"id": "one", "dari": "یک"},
    {"id": "two", "dari": "دو"},
    {"id": "three", "dari": "سه"},
    {"id": "four", "dari": "چهار"},
    {"id": "five", "dari": "پنج"},
    {"id": "six", "dari": "شش"},
    {"id": "seven", "dari": "هفت"},
    {"id": "eight", "dari": "هشت"},
    {"id": "nine", "dari": "نه"},
    {"id": "ten", "dari": "ده"},
]

greetings = [
    {"id": "hello", "dari": "سلام"},
    {"id": "goodbye", "dari": "خداحافظ"},
    {"id": "please", "dari": "لطفا"},
    {"id": "thank-you", "dari": "تشکر"},
    {"id": "yes", "dari": "بله"},
    {"id": "no", "dari": "نه"},
    {"id": "good-morning", "dari": "صبح بخیر"},
    {"id": "good-night", "dari": "شب بخیر"},
    {"id": "how-are-you", "dari": "حالت چطور است؟"},
    {"id": "welcome", "dari": "خوش آمدید"},
]

common_words = [
    {"id": "water", "dari": "آب"},
    {"id": "food", "dari": "غذا"},
    {"id": "house", "dari": "خانه"},
    {"id": "family", "dari": "خانواده"},
    {"id": "friend", "dari": "دوست"},
    {"id": "book", "dari": "کتاب"},
    {"id": "school", "dari": "مکتب"},
    {"id": "teacher", "dari": "معلم"},
    {"id": "student", "dari": "شاگرد"},
    {"id": "day", "dari": "روز"},
    {"id": "night", "dari": "شب"},
    {"id": "sun", "dari": "آفتاب"},
    {"id": "moon", "dari": "ماه"},
    {"id": "mother", "dari": "مادر"},
    {"id": "father", "dari": "پدر"},
    {"id": "brother", "dari": "برادر"},
    {"id": "sister", "dari": "خواهر"},
    {"id": "love", "dari": "عشق"},
    {"id": "peace", "dari": "صلح"},
    {"id": "time", "dari": "وقت"},
]

alphabet = [
    {"id": "alef", "dari": "ا"},
    {"id": "be", "dari": "ب"},
    {"id": "pe", "dari": "پ"},
    {"id": "te", "dari": "ت"},
    {"id": "se", "dari": "ث"},
    {"id": "jeem", "dari": "ج"},
    {"id": "che", "dari": "چ"},
    {"id": "he", "dari": "ح"},
    {"id": "khe", "dari": "خ"},
    {"id": "dal", "dari": "د"},
    {"id": "zal", "dari": "ذ"},
    {"id": "re", "dari": "ر"},
    {"id": "ze", "dari": "ز"},
    {"id": "zhe", "dari": "ژ"},
    {"id": "seen", "dari": "س"},
    {"id": "sheen", "dari": "ش"},
    {"id": "sad", "dari": "ص"},
    {"id": "zad", "dari": "ض"},
    {"id": "taa", "dari": "ط"},
    {"id": "zaa", "dari": "ظ"},
    {"id": "ayn", "dari": "ع"},
    {"id": "ghayn", "dari": "غ"},
    {"id": "fe", "dari": "ف"},
    {"id": "qaf", "dari": "ق"},
    {"id": "kaf", "dari": "ک"},
    {"id": "gaf", "dari": "گ"},
    {"id": "lam", "dari": "ل"},
    {"id": "meem", "dari": "م"},
    {"id": "noon", "dari": "ن"},
    {"id": "waw", "dari": "و"},
    {"id": "he2", "dari": "ه"},
    {"id": "ye", "dari": "ی"},
]


def generate_audio(text, output_path):
    """
    Generate audio file using ElevenLabs TTS
    
    Args:
        text: Dari text to convert to speech
        output_path: Path where MP3 file will be saved
    """
    try:
        # Generate audio using ElevenLabs
        # Using Adam - a multilingual voice that supports Persian/Dari
        audio = client.text_to_speech.convert(
            voice_id="pNInz6obpgDQGcFmaJgB",  # Adam voice ID
            text=text,
            model_id="eleven_multilingual_v2"
        )
        
        # Save the audio file
        with open(output_path, 'wb') as f:
            for chunk in audio:
                f.write(chunk)
        
        print(f"✓ Generated: {output_path}")
        return True
        
    except Exception as e:
        print(f"✗ Failed: {output_path} - {str(e)}")
        return False


def create_directory_if_not_exists(path):
    """Create directory if it doesn't exist"""
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Created directory: {path}")


def generate_category_audio(words, category_name, base_path):
    """
    Generate audio files for a category of words
    
    Args:
        words: List of word dictionaries with 'id' and 'dari' keys
        category_name: Name of the category (e.g., 'colors', 'numbers')
        base_path: Base path for audio files (e.g., 'public/audio')
    """
    category_path = os.path.join(base_path, category_name)
    create_directory_if_not_exists(category_path)
    
    success_count = 0
    total_chars = 0
    
    for i, word in enumerate(words):
        output_file = os.path.join(category_path, f"{word['id']}.mp3")
        
        if generate_audio(word['dari'], output_file):
            success_count += 1
            total_chars += len(word['dari'])
        
        # Small delay to avoid rate limiting
        if i < len(words) - 1:
            time.sleep(0.3)
    
    print(f"\n{category_name.capitalize()}: {success_count}/{len(words)} files generated")
    print(f"Characters used: {total_chars}\n")
    
    return total_chars


def main():
    """Main function to generate all audio files"""
    print("=" * 60)
    print("LearnDari Audio Generation Script")
    print("Using ElevenLabs TTS")
    print("=" * 60)
    print()
    
    # Determine the base path
    base_path = "public/audio"
    
    # Create base audio directory
    create_directory_if_not_exists(base_path)
    
    total_characters = 0
    
    # Generate audio for each category
    print("Generating Colors audio files...")
    total_characters += generate_category_audio(colors, "colors", base_path)
    
    print("Generating Numbers audio files...")
    total_characters += generate_category_audio(numbers, "numbers", base_path)
    
    print("Generating Greetings audio files...")
    total_characters += generate_category_audio(greetings, "greetings", base_path)
    
    print("Generating Common Words audio files...")
    total_characters += generate_category_audio(common_words, "common", base_path)
    
    print("Generating Alphabet audio files...")
    total_characters += generate_category_audio(alphabet, "alphabet", base_path)
    
    print("=" * 60)
    print("Audio generation complete!")
    print(f"All files saved to: {base_path}")
    print(f"Total characters used: {total_characters}")
    print(f"Remaining in free tier: {10000 - total_characters} characters")
    print("=" * 60)


if __name__ == "__main__":
    main()