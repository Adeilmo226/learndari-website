"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle, Clock } from "lucide-react";
import { dariPhrases } from "@/lib/phrases";
import { useUser } from "@clerk/nextjs";
import { saveLevelProgress } from "@/lib/progress";
import { AuthGate } from "@/components/AuthGate";

/**
 * Level 5 Quiz: Short Phrases
 * Show Dari phrase, user selects correct English meaning
 */
export default function Level5QuizPage() {
  const { user } = useUser();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [progressSaved, setProgressSaved] = useState(false);

  useEffect(() => {
    if (dariPhrases.length >= 4) {
      setQuestions(generateQuizQuestions());
    }
  }, []);

  useEffect(() => {
    if (quizComplete && !progressSaved) {
      const percentage = Math.round((score / questions.length) * 100);
      if (percentage >= 80 && user?.id) {
        saveLevelProgress("level-5", percentage).then(() => {
          setProgressSaved(true);
        });
      }
    }
  }, [quizComplete, progressSaved, score, questions.length, user?.id]);

  if (dariPhrases.length < 4) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-yellow-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Content Coming Soon</h1>
          <p className="text-gray-600 mb-8">The phrase quiz is being prepared.</p>
          <Link href="/learn/level-5" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            ← Back to Level 5
          </Link>
        </div>
      </div>
    );
  }

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
                <h3 className="text-xl font-bold text-green-900 mb-2">🎓 Level 5 Complete!</h3>
                <p className="text-green-700">You've completed the entire learning path!</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {passed ? (
                <Link
                  href="/learn"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-colors font-semibold"
                >
                  Back to Learning Path
                </Link>
              ) : (
                <>
                  <button
                    onClick={handleRestart}
                    className="px-8 py-4 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors font-semibold"
                  >
                    Try Again
                  </button>
                  <Link
                    href="/learn/level-5/flashcards"
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
    <AuthGate backHref="/learn/level-5" backLabel="Back to Level 5">
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/learn/level-5"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Level 5
          </Link>

          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-medium rounded-full">
                  Level 5 Quiz
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Short Phrases Test</h1>
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
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-lg mb-4">What does this phrase mean?</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" dir="rtl">
              {currentQuestion.phrase.dari}
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
                      ? "border-yellow-600 bg-yellow-50"
                      : "border-gray-200 hover:border-yellow-600 hover:bg-yellow-50"
                  } disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-gray-900">{option}</p>
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
                Phonetic: <span className="italic">{currentQuestion.phrase.phonetic}</span>
              </p>
            </div>
          )}
        </div>

        {showResult && (
          <button
            onClick={handleNext}
            className="w-full px-8 py-4 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors font-semibold text-lg"
          >
            {currentQuestionIndex < questions.length - 1 ? "Next Question →" : "See Results →"}
          </button>
        )}
      </div>
    </div>
    </AuthGate>
  );
}

interface QuizQuestion {
  phrase: typeof dariPhrases[0];
  options: string[];
  correctAnswer: string;
}

function generateQuizQuestions(): QuizQuestion[] {
  const shuffled = [...dariPhrases].sort(() => Math.random() - 0.5);

  return shuffled.map((phrase) => {
    const wrongAnswers = dariPhrases
      .filter((p) => p.id !== phrase.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((p) => p.english);

    const options = [phrase.english, ...wrongAnswers].sort(() => Math.random() - 0.5);
    return { phrase, options, correctAnswer: phrase.english };
  });
}
