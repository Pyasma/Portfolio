import { useEffect, useState } from "react";
import { profile } from "../data/resume";
import ThemeToggle from "./ThemeToggle";

const icons = {
  home: (
    <>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </>
  ),
  about: (
    <>
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </>
  ),
  work: (
    <>
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  oss: (
    <>
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </>
  ),
  projects: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="m3 21 8.02-14.26" />
      <path d="m12.99 6.74 1.93 3.44" />
      <path d="M19 12c-3.87 4-10.13 4-14 0" />
      <path d="m21 21-2.16-3.84" />
    </>
  ),
  blogs: (
    <>
      <path d="M2 6h4M2 10h4M2 14h4M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M16 2v20" />
    </>
  ),
  reach: (
    <>
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
    </>
  ),
};

const links = [
  { label: "Home", id: "hero", icon: "home" },
  { label: "About", id: "about", icon: "about" },
  { label: "Work", id: "experience", icon: "work" },
  { label: "OSS", id: "open-source", icon: "oss" },
  { label: "Projects", id: "projects", icon: "projects" },
  { label: "Blogs", id: "blogs", icon: "blogs" },
  { label: "Reach", id: "contact", icon: "reach" },
];

function Icon({ name }) {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

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

export default function Navbar() {
  const active = useActiveSection();

  return (
    <nav className="fixed inset-x-0 top-5 z-50 mx-auto flex max-w-fit items-center gap-1 rounded-full border border-border bg-background/80 px-3 py-2 shadow-sm backdrop-blur-lg sm:gap-3 sm:px-5">
      {links.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          title={l.label}
          className={`flex items-center gap-1.5 rounded-full px-1.5 py-1 text-sm transition-colors sm:px-0 ${
            active === l.id
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span className="sm:hidden">
            <Icon name={l.icon} />
          </span>
          <span className="hidden sm:block">{l.label}</span>
        </a>
      ))}

      <span className="mx-1 h-5 w-px shrink-0 bg-border" />

      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Resume"
        className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
      >
        Resume
      </a>

      <ThemeToggle />
    </nav>
  );
}
