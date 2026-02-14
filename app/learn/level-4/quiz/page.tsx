"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { commonWords } from "@/lib/learn-words";
import { useUser } from "@clerk/nextjs";
import { saveLevelProgress } from "@/lib/progress";

/**
 * Level 4 Quiz: Common Words
 * Show Dari word, user selects correct English translation
 */
export default function Level4QuizPage() {
  const { user } = useUser();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [progressSaved, setProgressSaved] = useState(false);

  useEffect(() => {
    setQuestions(generateQuizQuestions());
  }, []);

  useEffect(() => {
    if (quizComplete && !progressSaved) {
      const percentage = Math.round((score / questions.length) * 100);
      if (percentage >= 80 && user?.id) {
        saveLevelProgress("level-4", percentage, "level-5").then(() => {
          setProgressSaved(true);
        });
      }
    }
  }, [quizComplete, progressSaved, score, questions.length, user?.id]);

  if (questions.length === 0) return <div>Loading quiz...</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === currentQuestion.correctAnswer) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setQuestions(generateQuizQuestions());
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setProgressSaved(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 80;

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">{passed ? "🎉" : "📚"}</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Quiz Complete!</h1>
              <p className="text-xl text-gray-600">
                {passed ? "Congratulations! You passed!" : "Keep practicing!"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <div className="text-6xl font-bold text-gray-900 mb-2">
                {score} / {questions.length}
              </div>
              <div className="text-2xl text-gray-600 mb-4">{percentage}%</div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-full rounded-full ${passed ? "bg-green-600" : "bg-yellow-500"}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            {passed && (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">🎓 Level 4 Complete!</h3>
                <p className="text-green-700">You've unlocked Level 5: Short Phrases</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {passed ? (
                <>
                  <Link
                    href="/learn/level-5"
                    className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-colors font-semibold"
                  >
                    Continue to Level 5 →
                  </Link>
                  <Link
                    href="/learn"
                    className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors font-semibold"
                  >
                    Back to Learning Path
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={handleRestart}
                    className="px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-semibold"
                  >
                    Try Again
                  </button>
                  <Link
                    href="/learn/level-4/flashcards"
                    className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors font-semibold"
                  >
                    Study Flashcards
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/learn/level-4"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Level 4
          </Link>

          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium rounded-full">
                  Level 4 Quiz
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Common Words Test</h1>
              <p className="text-gray-600 mt-1">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Score</p>
              <p className="text-2xl font-bold text-gray-900">{score}</p>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-600 to-purple-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-lg mb-4">What does this word mean?</p>
            <h2 className="text-7xl font-bold text-gray-900 mb-6" dir="rtl">
              {currentQuestion.word.dari}
            </h2>
          </div>

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
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-purple-600 hover:bg-purple-50"
                  } disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">{option}</p>
                    {showCorrect && <CheckCircle className="w-8 h-8 text-green-600" />}
                    {showIncorrect && <XCircle className="w-8 h-8 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </div>

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
                  selectedAnswer === currentQuestion.correctAnswer ? "text-green-900" : "text-red-900"
                }`}
              >
                {selectedAnswer === currentQuestion.correctAnswer
                  ? "✓ Correct!"
                  : `✗ Incorrect. The correct answer is ${currentQuestion.correctAnswer}`}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Phonetic: <span className="italic">{currentQuestion.word.phonetic}</span>
              </p>
            </div>
          )}
        </div>

        {showResult && (
          <button
            onClick={handleNext}
            className="w-full px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-semibold text-lg"
          >
            {currentQuestionIndex < questions.length - 1 ? "Next Question →" : "See Results →"}
          </button>
        )}
      </div>
    </div>
  );
}

interface QuizQuestion {
  word: typeof commonWords[0];
  options: string[];
  correctAnswer: string;
}

function generateQuizQuestions(): QuizQuestion[] {
  const shuffled = [...commonWords].sort(() => Math.random() - 0.5);

  return shuffled.map((word) => {
    const wrongAnswers = commonWords
      .filter((w) => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.english);

    const options = [word.english, ...wrongAnswers].sort(() => Math.random() - 0.5);
    return { word, options, correctAnswer: word.english };
  });
}
