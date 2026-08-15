import { profile } from "../data/resume";
import LocalTime from "./LocalTime";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-xs lowercase text-muted-foreground">
      <p>
        <span className="text-prompt">~/portfolio</span> $ exit
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} {profile.name} · react, vite, tailwind
        </p>
        <p>
          {profile.location.toLowerCase()} · <LocalTime />
        </p>
      </div>
    </footer>
  );
}
