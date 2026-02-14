"""
Audio Generation Script for LearnDari using ElevenLabs
Run this script to generate audio for new or all vocab sets
"""

import os
from elevenlabs.client import ElevenLabs
from dotenv import load_dotenv
import time
from vocab_data import ALL_CATEGORIES, colors

load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env.local'))

API_KEY = os.getenv('ELEVENLABS_API_KEY')

if not API_KEY:
    print("Error: ELEVENLABS_API_KEY not found in .env.local")
    exit(1)

client = ElevenLabs(api_key=API_KEY)


def generate_audio(text, output_path):
    try:
        audio = client.text_to_speech.convert(
            voice_id="Xb7hH8MSUJpSbSDYk0k2", #Alice
            text=text,
            model_id="eleven_multilingual_v2"
        )
        with open(output_path, 'wb') as f:
            for chunk in audio:
                f.write(chunk)
        print(f"✓ Generated: {output_path}")
        return True
    except Exception as e:
        print(f"✗ Failed: {output_path} - {str(e)}")
        return False


def create_directory_if_not_exists(path):
    if not os.path.exists(path):
        os.makedirs(path)


def generate_category_audio(words, category_name, base_path, skip_existing=True):
    category_path = os.path.join(base_path, category_name)
    create_directory_if_not_exists(category_path)

    success_count = 0
    skipped_count = 0

    for i, word in enumerate(words):
        output_file = os.path.join(category_path, f"{word['id']}.mp3")

        # Skip if file already exists (avoids regenerating everything)
        if skip_existing and os.path.exists(output_file):
            print(f"⏭ Skipped (exists): {output_file}")
            skipped_count += 1
            continue

        if generate_audio(word['dari'], output_file):
            success_count += 1

        if i < len(words) - 1:
            time.sleep(0.3)

    print(f"\n{category_name}: {success_count} generated, {skipped_count} skipped\n")


def main():
    print("=" * 60)
    print("LearnDari Audio Generation Script")
    print("=" * 60)

    base_path = "../public/audio"
    create_directory_if_not_exists(base_path)

    for category in ALL_CATEGORIES:
        print(f"Processing {category['name']}...")
        generate_category_audio(category['data'], category['name'], base_path)

    print("=" * 60)
    print("Done!")
    print("=" * 60)


if __name__ == "__main__":
    main()