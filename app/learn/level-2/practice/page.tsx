"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { letterForms, type LetterForms } from "@/lib/alphabet";

/**
 * Level 2 Practice: Identify Letter Forms
 * Interactive practice for recognizing letter positions
 */
export default function Level2PracticePage() {
  const [currentQuestion, setCurrentQuestion] = useState<PracticeQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);

  // Generate new question on mount and after each answer
  useEffect(() => {
    generateNewQuestion();
  }, []);

  const generateNewQuestion = () => {
    const question = createPracticeQuestion();
    setCurrentQuestion(question);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswerSelect = (answer: string) => {
    if (showResult || !currentQuestion) return;

    setSelectedAnswer(answer);
    setShowResult(true);
    setTotalAttempts(totalAttempts + 1);

    if (answer === currentQuestion.correctAnswer) {
      setCorrectCount(correctCount + 1);
    }
  };

  const handleNext = () => {
    generateNewQuestion();
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  const accuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/learn/level-2"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Level 2
          </Link>

          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                  Practice Mode
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Letter Form Practice</h1>
              <p className="text-gray-600 mt-2">
                Identify which position this letter form represents
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">
                {correctCount}/{totalAttempts}
              </div>
              <div className="text-sm text-gray-500">{accuracy}% Accuracy</div>
            </div>
          </div>
        </div>

        {/* Practice Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          {/* Question */}
          <div className="text-center mb-8">
            <p className="text-gray-500 text-lg mb-4">
              What position is this letter form in?
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 mb-4">
              <div className="text-9xl font-bold text-gray-900" dir="rtl">
                {currentQuestion.letterForm}
              </div>
            </div>
            <p className="text-xl text-gray-700">
              Letter: <span className="font-bold">{currentQuestion.letter.name}</span> ({currentQuestion.letter.letter})
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showIncorrect = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showResult}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    showCorrect
                      ? "border-green-600 bg-green-50"
                      : showIncorrect
                      ? "border-red-600 bg-red-50"
                      : isSelected
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-blue-600 hover:bg-blue-50"
                  } disabled:cursor-not-allowed`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xl font-bold text-gray-900">{option}</p>
                    {showCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                    {showIncorrect && <XCircle className="w-6 h-6 text-red-600" />}
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
                  ? "✓ Correct! This is the " + currentQuestion.correctAnswer + " form."
                  : `✗ Incorrect. This is the ${currentQuestion.correctAnswer} form, not ${selectedAnswer}.`}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {showResult && (
            <button
              onClick={handleNext}
              className="flex-1 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Next Question →
            </button>
          )}
          <Link
            href="/learn/level-2/quiz"
            className="flex-1 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors font-semibold text-lg text-center"
          >
            Ready for Quiz →
          </Link>
        </div>

        {/* Stats Card */}
        {totalAttempts >= 10 && (
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Great practice session!
                </h3>
                <p className="text-gray-600">
                  You've completed {totalAttempts} practice questions with {accuracy}% accuracy
                </p>
              </div>
              {accuracy >= 80 && (
                <div className="text-5xl">🎉</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Practice Question Type
 */
interface PracticeQuestion {
  letter: LetterForms;
  letterForm: string;
  position: string;
  correctAnswer: string;
  options: string[];
}

/**
 * Create a practice question
 */
function createPracticeQuestion(): PracticeQuestion {
  // Get a random letter
  const letter = letterForms[Math.floor(Math.random() * letterForms.length)];

  // Determine available positions for this letter
  const positions: Array<{ form: string; name: string }> = [
    { form: letter.isolated, name: "Isolated" },
  ];

  if (letter.initial) {
    positions.push({ form: letter.initial, name: "Initial" });
  }
  if (letter.medial) {
    positions.push({ form: letter.medial, name: "Medial" });
  }
  if (letter.final) {
    positions.push({ form: letter.final, name: "Final" });
  }

  // Pick a random position from available ones
  const selectedPosition = positions[Math.floor(Math.random() * positions.length)];

  // Create options (all 4 positions, even if some don't apply)
  const allOptions = ["Isolated", "Initial", "Medial", "Final"];
  const options = allOptions.sort(() => Math.random() - 0.5);

  return {
    letter,
    letterForm: selectedPosition.form,
    position: selectedPosition.name,
    correctAnswer: selectedPosition.name,
    options,
  };
}