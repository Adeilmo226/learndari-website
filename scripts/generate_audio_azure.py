#!/usr/bin/env python3
"""
Batch Audio Generation Script for LearnDari using Azure TTS
Replaces all ElevenLabs audio with Azure fa-IR-FaridNeural voice.

Usage:
  python3 generate_audio_azure.py
"""

import os
import time
import requests
from dotenv import load_dotenv
from vocab_data import ALL_CATEGORIES

load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env.local'))

AZURE_KEY = os.getenv("AZURE_SPEECH_KEY")
AZURE_REGION = "centralus"
TTS_URL = f"https://{AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1"
VOICE = "fa-IR-FaridNeural"

BASE_PATH = os.path.join(os.path.dirname(__file__), '..', 'public', 'audio')


def generate_audio(dari_text, output_path):
    """Generate a single mp3 file via Azure TTS."""
    ssml = f"""<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="fa-IR">
  <voice name="{VOICE}">{dari_text}</voice>
</speak>"""

    headers = {
        "Ocp-Apim-Subscription-Key": AZURE_KEY,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-48khz-192kbitrate-mono-mp3",
    }

    response = requests.post(TTS_URL, headers=headers, data=ssml.encode("utf-8"))

    if response.status_code == 200 and len(response.content) > 1000:
        with open(output_path, "wb") as f:
            f.write(response.content)
        return True, len(response.content)
    else:
        return False, response.status_code


def main():
    if not AZURE_KEY:
        print("Error: AZURE_SPEECH_KEY not found in .env.local")
        exit(1)

    print("=" * 60)
    print("LearnDari - Azure TTS Batch Audio Generation")
    print(f"Voice: {VOICE}")
    print("=" * 60)

    replaced_files = []
    failed_files = []
    total = sum(len(cat["data"]) for cat in ALL_CATEGORIES)
    count = 0

    for category in ALL_CATEGORIES:
        cat_name = category["name"]
        cat_path = os.path.join(BASE_PATH, cat_name)
        os.makedirs(cat_path, exist_ok=True)

        print(f"\n--- {cat_name} ({len(category['data'])} words) ---")

        for word in category["data"]:
            count += 1
            output_file = os.path.join(cat_path, f"{word['id']}.mp3")
            rel_path = f"public/audio/{cat_name}/{word['id']}.mp3"

            success, info = generate_audio(word["dari"], output_file)

            if success:
                print(f"  [{count}/{total}] {word['dari']} ({word['english']}) -> {rel_path} ({info:,} bytes)")
                replaced_files.append(rel_path)
            else:
                print(f"  [{count}/{total}] FAILED: {word['dari']} ({word['english']}) - HTTP {info}")
                failed_files.append(rel_path)

            # Rate limit: ~10 requests/sec is safe for Azure TTS
            time.sleep(0.15)

    print("\n" + "=" * 60)
    print(f"DONE: {len(replaced_files)} files generated, {len(failed_files)} failed")
    print("=" * 60)

    if replaced_files:
        print(f"\nReplaced files ({len(replaced_files)}):")
        for f in replaced_files:
            print(f"  {f}")

    if failed_files:
        print(f"\nFailed files ({len(failed_files)}):")
        for f in failed_files:
            print(f"  {f}")


if __name__ == "__main__":
    main()
