import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Page Not Found</h2>
      <p className="mt-2 text-gray-600">Could not find the requested resource.</p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-indigo-600 px-6 py-2 font-semibold text-white shadow-lg transition-all hover:bg-indigo-700"
      >
        Return Home
      </Link>
    </div>
  );
}
