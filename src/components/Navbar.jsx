import { useEffect, useState } from "react";
import { profile } from "../data/resume";
import ThemeToggle from "./ThemeToggle";

const links = [
  { key: "h", label: "home", id: "hero" },
  { key: "a", label: "about", id: "about" },
  { key: "c", label: "activity", id: "activity" },
  { key: "w", label: "work", id: "experience" },
  { key: "o", label: "oss", id: "open-source" },
  { key: "p", label: "projects", id: "projects" },
  { key: "b", label: "blogs", id: "blogs" },
  { key: "r", label: "reach", id: "contact" },
];

function useActiveSection() {
  const [active, setActive] = useState(links[0].id);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

/** Single-key jumps, the way the bracket hints advertise. */
function useShortcuts() {
  useEffect(() => {
    function onKey(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;

      const link = links.find((l) => l.key === e.key.toLowerCase());
      if (!link) return;

      const target = document.getElementById(link.id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
}

export default function Navbar() {
  const active = useActiveSection();
  useShortcuts();

  return (
    <nav className="sticky top-0 z-50 -mx-6 flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-border bg-background/95 px-6 py-3 text-sm backdrop-blur">
      {links.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          className={`transition-colors hover:text-foreground ${
            active === l.id ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          <span className="text-prompt">[{l.key}]</span> {l.label}
        </a>
      ))}

      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="text-prompt">[↗]</span> resume
      </a>

      <ThemeToggle className="ml-auto" />
    </nav>
  );
}
