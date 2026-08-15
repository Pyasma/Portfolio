import { useState } from "react";
import { projects } from "../data/resume";
import projectImages from "../data/projectImages";
import Section from "./Section";
import Reveal from "./Reveal";
import TechIcon from "./TechIcon";

function ProjectRow({ project }) {
  const href = project.live || project.github || "#";

  return (
    <div className="flex gap-3">
      {projectImages[project.title] && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden size-12 shrink-0 items-center justify-center overflow-hidden border border-border bg-card p-1 grayscale transition-all duration-300 hover:grayscale-0 sm:flex"
        >
          <img
            src={projectImages[project.title]}
            alt=""
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        </a>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold lowercase hover:text-prompt"
          >
            {project.title}
          </a>
          <span className="shrink-0 text-xs text-muted-foreground">↗</span>
        </div>

        {project.summary && (
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        )}

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {project.stack.map((s) => (
            <span key={s} className="inline-flex items-center gap-1.5 lowercase">
              <TechIcon name={s} className="size-3" />
              {s}
            </span>
          ))}
        </div>

        <div className="mt-2 flex gap-4 text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-prompt">[</span>code
              <span className="text-prompt">]</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-prompt">[</span>live
              <span className="text-prompt">]</span>
            </a>
          )}
        </div>
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
      title="projects"
      subtitle="things i built end to end, from first commit to deploy."
      action={
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="shrink-0 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-prompt">[</span>
          {showAll ? "show featured" : `ls -a (${projects.length})`}
          <span className="text-prompt">]</span>
        </button>
      }
    >
      <div className="space-y-6">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={(i % 6) * 40}>
            <ProjectRow project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
