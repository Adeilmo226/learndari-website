export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin mx-auto mb-8" />
      <p className="text-xl text-gray-500">Loading...</p>
    </div>
  );
}
