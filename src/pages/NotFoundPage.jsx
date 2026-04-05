import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-[calc(100svh-80px)] flex flex-col items-center justify-center text-center animate-page">
      <p className="text-7xl font-bold text-gray-900 mb-3">404</p>
      <p className="text-lg font-semibold text-gray-900 mb-2">Page not found</p>
      <p className="text-sm text-gray-500 mb-8 max-w-xs">
        This page doesn't exist or was moved somewhere else.
      </p>
      <Link
        to="/"
        className="px-5 py-2 bg-gray-200 text-gray-900 text-sm rounded-full border border-gray-900 hover:bg-gray-500 hover:text-white hover:border-black transition-all duration-200"
      >
        Back home
      </Link>
    </div>
  );
}
