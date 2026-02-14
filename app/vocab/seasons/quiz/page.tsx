"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Volume2, CheckCircle, XCircle } from "lucide-react";
import { seasonsVocab, setInfo } from "../data";
import { AuthGate } from "@/components/AuthGate";

/**
 * Quiz Mode
 * Multiple choice quiz to test vocabulary knowledge
 */
export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  // Generate quiz questions on mount
  useEffect(() => {
    const generatedQuestions = generateQuizQuestions();
    setQuestions(generatedQuestions);
  }, []);

  if (questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  /**
   * Handle answer selection
   */
  const handleAnswerSelect = (answer: string) => {
    if (showResult) return; // Prevent changing answer after submission

    setSelectedAnswer(answer);
    setShowResult(true);

    // Check if correct
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  /**
   * Move to next question
   */
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  /**
   * Restart the quiz
   */
  const handleRestart = () => {
    const generatedQuestions = generateQuizQuestions();
    setQuestions(generatedQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  /**
   * Play audio for the question word
   */
  const playAudio = () => {
    const audioUrl = `/audio/seasons/${currentQuestion.word.id}.mp3`;
    const audio = new Audio(audioUrl);
    audio.play().catch(() => {
      console.log("Audio file not available yet");
    });
  };

  // Quiz complete screen
  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              {passed ? (
                <div className="text-6xl mb-4">🎉</div>
              ) : (
                <div className="text-6xl mb-4">📚</div>
              )}
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Quiz Complete!
              </h1>
              <p className="text-xl text-gray-600">
                {passed ? "Great job!" : "Keep practicing!"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <div className="text-6xl font-bold text-gray-900 mb-2">
                {score} / {questions.length}
              </div>
              <div className="text-2xl text-gray-600 mb-4">{percentage}%</div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-full rounded-full ${
                    passed ? "bg-green-600" : "bg-yellow-500"
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Try Again
              </button>
              <Link
                href="/vocab/seasons/flashcards"
                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-semibold"
              >
                Study Flashcards
              </Link>
              <Link
                href="/vocab/seasons"
                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-semibold"
              >
                Back to Vocab
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthGate backHref="/vocab" backLabel="Back to Vocabulary Sets">
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/vocab/seasons"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to {setInfo.title}
          </Link>

          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Quiz Mode</h1>
              <p className="text-gray-600 mt-1">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Score</p>
              <p className="text-2xl font-bold text-gray-900">{score}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          {/* Question */}
          <div className="text-center mb-8">
            <p className="text-gray-500 text-lg mb-4">What is this in Dari?</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {currentQuestion.word.english}
            </h2>
            <button
              onClick={playAudio}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
            >
              <Volume2 className="w-5 h-5" />
              Hear pronunciation
            </button>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showIncorrect = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showResult}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    showCorrect
                      ? "border-green-600 bg-green-50"
                      : showIncorrect
                      ? "border-red-600 bg-red-50"
                      : isSelected
                      ? "border-red-600 bg-red-50"
                      : "border-gray-200 hover:border-red-600 hover:bg-red-50"
                  } disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900 mb-2" dir="rtl">
                        {option}
                      </p>
                      <p className="text-gray-600">
                        {seasonsVocab.find((w) => w.dari === option)?.phonetic}
                      </p>
                    </div>
                    {showCorrect && (
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    )}
                    {showIncorrect && (
                      <XCircle className="w-8 h-8 text-red-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Result Message */}
          {showResult && (
            <div
              className={`mt-6 p-4 rounded-lg ${
                selectedAnswer === currentQuestion.correctAnswer
                  ? "bg-green-50 border-2 border-green-200"
                  : "bg-red-50 border-2 border-red-200"
              }`}
            >
              <p
                className={`text-lg font-semibold ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? "text-green-900"
                    : "text-red-900"
                }`}
              >
                {selectedAnswer === currentQuestion.correctAnswer
                  ? "✓ Correct!"
                  : `✗ Incorrect. The correct answer is ${currentQuestion.correctAnswer}`}
              </p>
            </div>
          )}
        </div>

        {/* Next Button */}
        {showResult && (
          <button
            onClick={handleNext}
            className="w-full px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold text-lg"
          >
            {currentQuestionIndex < questions.length - 1
              ? "Next Question →"
              : "See Results →"}
          </button>
        )}
      </div>
    </div>
    </AuthGate>
  );
}

/**
 * Quiz Question Type
 */
interface QuizQuestion {
  word: typeof seasonsVocab[0];
  options: string[];
  correctAnswer: string;
}

/**
 * Generate quiz questions with random wrong answers
 */
function generateQuizQuestions(): QuizQuestion[] {
  const shuffled = [...seasonsVocab].sort(() => Math.random() - 0.5);

  return shuffled.map((word) => {
    const wrongAnswers = seasonsVocab
      .filter((w) => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.dari);

    const options = [word.dari, ...wrongAnswers].sort(() => Math.random() - 0.5);

    return {
      word,
      options,
      correctAnswer: word.dari,
    };
  });
}
