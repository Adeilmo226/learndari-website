"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { dariAlphabet, letterForms, type LetterForms } from "@/lib/alphabet";
import { useUser } from "@clerk/nextjs";
import { saveLevelProgress } from "@/lib/progress";

/**
 * Level 2 Quiz: Letter Forms Recognition
 * Show a letter in one of its forms, user selects the correct letter name
 */
export default function Level2QuizPage() {
  const { user } = useUser();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [progressSaved, setProgressSaved] = useState(false);

  useEffect(() => {
    const generatedQuestions = generateQuizQuestions();
    setQuestions(generatedQuestions);
  }, []);

  // Save progress when quiz is completed and passed
  useEffect(() => {
    if (quizComplete && !progressSaved) {
      const percentage = Math.round((score / questions.length) * 100);
      const passed = percentage >= 80;
      if (passed && user?.id) {
        saveLevelProgress(user.id, "level-2", percentage, "level-3").then(() => {
          setProgressSaved(true);
        });
      }
    }
  }, [quizComplete, progressSaved, score, questions.length, user?.id]);

  if (questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
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
    const generatedQuestions = generateQuizQuestions();
    setQuestions(generatedQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setProgressSaved(false);
  };

  // Quiz complete screen
  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 80;

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
                  className={`h-full rounded-full ${
                    passed ? "bg-green-600" : "bg-yellow-500"
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            {passed && (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  🎓 Level 2 Complete!
                </h3>
                <p className="text-green-700">
                  You've unlocked Level 3: Simple Words
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {passed ? (
                <>
                  <Link
                    href="/learn/level-3"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-colors font-semibold"
                  >
                    Continue to Level 3 →
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
                    className="px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-semibold"
                  >
                    Try Again
                  </button>
                  <Link
                    href="/learn/level-2/flashcards"
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
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/learn/level-2"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Level 2
          </Link>

          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium rounded-full">
                  Level 2 Quiz
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Letter Forms Test</h1>
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
              className="bg-gradient-to-r from-green-600 to-green-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-lg mb-2">
              What letter is this?
            </p>
            <p className="text-sm text-gray-400 mb-4">
              ({currentQuestion.position} form)
            </p>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-12 mb-4">
              <div className="text-9xl font-bold text-gray-900" dir="rtl">
                {currentQuestion.letterForm}
              </div>
            </div>
          </div>

          {/* Answer Options - Letter names */}
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
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:border-green-600 hover:bg-green-50"
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
                className={`text-lg font-semibold text-center ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? "text-green-900"
                    : "text-red-900"
                }`}
              >
                {selectedAnswer === currentQuestion.correctAnswer
                  ? "✓ Correct!"
                  : `✗ Incorrect. The correct answer is ${currentQuestion.correctAnswer}`}
              </p>
              {(() => {
                const match = dariAlphabet.find((l) => l.name === currentQuestion.correctAnswer);
                return match ? (
                  <p className="text-sm text-gray-600 mt-2">
                    Phonetic: <span className="italic">{match.phonetic}</span>
                  </p>
                ) : null;
              })()}
            </div>
          )}
        </div>

        {/* Next Button */}
        {showResult && (
          <button
            onClick={handleNext}
            className="w-full px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-semibold text-lg"
          >
            {currentQuestionIndex < questions.length - 1
              ? "Next Question →"
              : "See Results →"}
          </button>
        )}
      </div>
    </div>
  );
}

interface QuizQuestion {
  letter: LetterForms;
  letterForm: string;
  position: string;
  correctAnswer: string;
  options: string[];
}

function generateQuizQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const letter = letterForms[Math.floor(Math.random() * letterForms.length)];

    // Get available forms for this letter
    const positions: Array<{ form: string; name: string }> = [
      { form: letter.isolated, name: "Isolated" },
    ];
    if (letter.initial) positions.push({ form: letter.initial, name: "Initial" });
    if (letter.medial) positions.push({ form: letter.medial, name: "Medial" });
    if (letter.final) positions.push({ form: letter.final, name: "Final" });

    const selectedPosition = positions[Math.floor(Math.random() * positions.length)];

    // Get 3 wrong letter names
    const wrongAnswers = letterForms
      .filter((l) => l.id !== letter.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((l) => l.name);

    const options = [letter.name, ...wrongAnswers].sort(() => Math.random() - 0.5);

    questions.push({
      letter,
      letterForm: selectedPosition.form,
      position: selectedPosition.name,
      correctAnswer: letter.name,
      options,
    });
  }

  return questions;
}
