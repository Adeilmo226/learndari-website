import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
        <span className="text-5xl">404</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold text-lg"
        >
          Go Home
        </Link>
        <Link
          href="/explore"
          className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors font-semibold text-lg"
        >
          Explore Words
        </Link>
      </div>
    </div>
  );
}
