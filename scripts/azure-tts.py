#!/usr/bin/env python3
"""
Azure Text-to-Speech script for Dari vocabulary.
Uses fa-IR-FaridNeural (Persian/Iran) voice — the closest available to Dari.

Usage:
  python3 azure-tts.py "سلام" "Hello"
  python3 azure-tts.py "تشکر" "Thank you" --voice fa-IR-DilaraNeural
"""

import sys
import os
import argparse
import requests
import re
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env.local'))

AZURE_KEY = os.getenv("AZURE_SPEECH_KEY")
AZURE_REGION = "centralus"
TTS_URL = f"https://{AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1"

DEFAULT_VOICE = "fa-IR-FaridNeural"


def synthesize(word: str, translation: str, voice: str = DEFAULT_VOICE, output: str | None = None):
    """Call Azure TTS and save the result as an mp3 file."""

    if not AZURE_KEY:
        print("Error: AZURE_SPEECH_KEY not found in .env.local")
        return False

    # Build a safe filename from the translation
    if output is None:
        safe_name = re.sub(r'[^a-zA-Z0-9]+', '_', translation.lower()).strip('_')
        output = f"{safe_name}.mp3"

    ssml = f"""<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="fa-IR">
  <voice name="{voice}">{word}</voice>
</speak>"""

    headers = {
        "Ocp-Apim-Subscription-Key": AZURE_KEY,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-48khz-192kbitrate-mono-mp3",
    }

    print(f"Requesting TTS: '{word}' ({translation}) with voice {voice}...")
    response = requests.post(TTS_URL, headers=headers, data=ssml.encode("utf-8"))

    if response.status_code == 200 and len(response.content) > 1000:
        with open(output, "wb") as f:
            f.write(response.content)
        print(f"Saved: {output} ({len(response.content):,} bytes)")
        return True
    else:
        print(f"Error {response.status_code}: {response.text or response.reason}")
        print(f"Response size: {len(response.content)} bytes")
        return False


def main():
    parser = argparse.ArgumentParser(description="Generate Dari TTS audio via Azure")
    parser.add_argument("word", help="The Dari word to speak")
    parser.add_argument("translation", help="English translation (used for filename)")
    parser.add_argument("--voice", default=DEFAULT_VOICE, help=f"Voice name (default: {DEFAULT_VOICE})")
    parser.add_argument("--output", "-o", help="Output filename (default: <translation>.mp3)")
    args = parser.parse_args()

    success = synthesize(args.word, args.translation, args.voice, args.output)
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
