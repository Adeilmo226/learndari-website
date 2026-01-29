import { useState } from 'react';

/**
 * Custom hook for playing Dari audio from local files
 */
export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = async (audioPath: string) => {
    if (!audioPath || isPlaying) return;

    setIsPlaying(true);

    try {
      const audio = new Audio(audioPath);

      audio.onended = () => {
        setIsPlaying(false);
      };

      audio.onerror = (error) => {
        console.error('Audio playback error:', error);
        setIsPlaying(false);
      };

      await audio.play();
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
    }
  };

  return { isPlaying, playAudio };
}