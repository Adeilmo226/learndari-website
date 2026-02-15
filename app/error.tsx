"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
        <span className="text-4xl">!</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Something Went Wrong
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold text-lg"
      >
        Try Again
      </button>
    </div>
  );
}
