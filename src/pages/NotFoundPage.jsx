import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center text-center">
      <p className="text-7xl font-bold tracking-tighter">404</p>
      <p className="mt-3 text-lg font-semibold">Page not found</p>
      <p className="mt-2 max-w-xs text-sm text-muted-foreground">
        This page doesn&apos;t exist or was moved somewhere else.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        Back home
      </Link>
    </div>
  );
}
