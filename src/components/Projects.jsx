import { useState } from "react";
import { projects } from "../data/resume";
import projectImages from "../data/projectImages";
import Section from "./Section";
import Reveal from "./Reveal";

function ProjectCard({ project }) {
  const href = project.live || project.github || "#";

  return (
    <div className="group flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card p-4 transition-transform duration-500 hover:scale-[0.98]">
      {projectImages[project.title] && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-28 w-full items-center justify-center overflow-hidden rounded-lg bg-muted"
        >
          <img
            src={projectImages[project.title]}
            alt={project.title}
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </a>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold leading-snug hover:underline"
      >
        {project.title}
      </a>

      {project.summary && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-2 pt-1">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-85"
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            Live ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const visible = showAll ? projects : featured;

  return (
    <Section
      id="projects"
      title="Projects"
      kanji="作品"
      subtitle="Things I built end to end, from first commit to deploy."
      action={
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        >
          {showAll ? "Show featured" : `Show all (${projects.length})`}
        </button>
      }
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={(i % 4) * 60} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
