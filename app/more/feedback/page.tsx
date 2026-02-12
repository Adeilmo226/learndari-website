"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";

/**
 * Feedback & Contact Page
 * Allow users to submit feedback and suggestions
 */
export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "suggestion",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Feedback submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        category: "suggestion",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <Link
        href="/more"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Discover More
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Feedback & Contact
        </h1>
        <p className="text-xl text-gray-600">
          Help us improve LearnDari with your suggestions
        </p>
      </div>

      {isSubmitted ? (
        // Success Message
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-green-900 mb-2">
            Thank You!
          </h2>
          <p className="text-green-700 text-lg">
            Your feedback has been submitted successfully. We appreciate your input!
          </p>
        </div>
      ) : (
        // Feedback Form
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name (Optional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
              />
              <p className="text-sm text-gray-500 mt-1">
                Only needed if you'd like us to respond
              </p>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
              >
                <option value="suggestion">Suggestion</option>
                <option value="bug">Bug Report</option>
                <option value="content">Content Request</option>
                <option value="question">Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Share your thoughts, report an issue, or suggest a feature..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-semibold text-lg"
            >
              <Send className="w-5 h-5" />
              Submit Feedback
            </button>
          </form>
        </div>
      )}

    </div>
  );
}