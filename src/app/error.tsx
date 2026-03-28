"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Something went wrong!</h2>
      <p className="mt-2 text-gray-600">We encountered an unexpected error.</p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded-full bg-indigo-600 px-6 py-2 font-semibold text-white shadow-lg transition-all hover:bg-indigo-700"
      >
        Try again
      </button>
    </div>
  );
}
