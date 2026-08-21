import { profile } from "../data/resume";
import LocalTime from "./LocalTime";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-xs lowercase text-muted-foreground">
      <Reveal className="flex flex-wrap items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} {profile.name} · react, vite, tailwind
        </p>
        <p>
          {profile.location.toLowerCase()} · <LocalTime />
        </p>
      </Reveal>
    </footer>
  );
}
