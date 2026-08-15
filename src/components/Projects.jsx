import { useState } from "react";
import { projects } from "../data/resume";
import projectImages from "../data/projectImages";
import Section from "./Section";
import Reveal from "./Reveal";
import TechIcon from "./TechIcon";

function ProjectCard({ project }) {
  const href = project.live || project.github || "#";

  return (
    <div className="flex h-full flex-col border border-border bg-card transition-colors hover:border-prompt">
      {projectImages[project.title] && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-28 items-center justify-center overflow-hidden border-b border-border bg-muted p-2 grayscale transition-all duration-500 hover:grayscale-0"
        >
          <img
            src={projectImages[project.title]}
            alt=""
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        </a>
      )}

      <div className="flex flex-1 flex-col p-3">
        <div className="flex items-baseline justify-between gap-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm font-bold lowercase hover:text-prompt"
          >
            {project.title}
          </a>
          <span className="shrink-0 text-xs text-muted-foreground">↗</span>
        </div>

        {project.summary && (
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        )}

        <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="inline-flex items-center gap-1 lowercase">
              <TechIcon name={s} className="size-3" />
              {s}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-muted-foreground">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="mt-auto flex gap-3 pt-3 text-xs">
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
      kanji="作品"
      action={
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-prompt">[</span>
          {showAll ? "show featured" : `ls -a (${projects.length})`}
          <span className="text-prompt">]</span>
        </button>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={(i % 6) * 40} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
