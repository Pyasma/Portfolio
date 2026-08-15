import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70svh] flex-col justify-center">
      <p className="text-sm text-muted-foreground">
        <span className="text-prompt">~/portfolio</span> $ cd {location.pathname}
      </p>
      <p className="mt-2 text-2xl font-bold lowercase">404: no such file or directory</p>
      <p className="mt-2 text-sm text-muted-foreground">
        this page doesn&apos;t exist or was moved somewhere else.
      </p>
      <Link
        to="/"
        className="mt-6 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="text-prompt">[</span>cd ~<span className="text-prompt">]</span>
      </Link>
    </div>
  );
}
