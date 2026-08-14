import { profile } from "../data/resume";
import LocalTime from "./LocalTime";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "OSS", href: "#open-source" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Reach", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border pt-8 text-sm text-muted-foreground">
      <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="transition-colors hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <p>
          © {new Date().getFullYear()} {profile.name} · React, Vite, Tailwind.
        </p>
        <p>
          {profile.location} · <LocalTime />
        </p>
      </div>
    </footer>
  );
}
