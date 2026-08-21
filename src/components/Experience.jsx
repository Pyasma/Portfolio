import { experience, education, achievements } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import TechIcon from "./TechIcon";
import Expandable from "./Expandable";
import Typewriter from "./Typewriter";

function Highlight({ text }) {
  const parts = text.split(/(\b\d+[+%KkxX]*\b)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\d/.test(part) ? (
          <strong key={i} className="font-bold text-foreground">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

export function Bullets({ items }) {
  return (
    <ul className="list-none space-y-1 text-sm text-muted-foreground">
      {items.map((b, i) => (
        <li key={i} className="flex gap-2 leading-relaxed">
          <span className="shrink-0 select-none text-prompt">-</span>
          <span>
            <Highlight text={b} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TechTags({ tech }) {
  if (!tech) return null;
  return (
    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
      {tech.split(", ").map((t) => (
        <span key={t} className="inline-flex items-center gap-1.5 lowercase">
          <TechIcon name={t} className="size-3" />
          {t}
        </span>
      ))}
    </div>
  );
}

export function EntryHeader({ title, href, meta }) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-3">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold lowercase hover:text-prompt"
          >
            {title}
          </a>
        ) : (
          <p className="font-display font-bold lowercase">{title}</p>
        )}
        {href && <span className="shrink-0 text-xs text-muted-foreground">↗</span>}
      </div>
      <p className="mt-0.5 text-xs lowercase text-muted-foreground">
        <Typewriter text={meta} speed={12} chunk={2} startOnView caret={false} />
      </p>
    </>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="work">
      <div className="grid gap-4 sm:grid-cols-2">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 60}>
            <div className="h-full border border-border bg-card p-4 transition-colors hover:border-prompt">
              <EntryHeader
                title={job.company}
                href={job.companyUrl}
                meta={[job.role, job.type, job.location, job.period]
                  .filter(Boolean)
                  .join(" · ")}
              />
              <div className="mt-2">
                <Expandable summary={job.summary}>
                  <Bullets items={job.bullets} />
                </Expandable>
              </div>
              <TechTags tech={job.tech} />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="text-xs lowercase text-muted-foreground">
            <span className="text-prompt">$</span> education
          </h3>
          {education.map((e) => (
            <div key={e.school} className="mt-2">
              <p className="font-display text-sm font-bold lowercase">{e.school}</p>
              <p className="mt-0.5 text-xs lowercase text-muted-foreground">
                {e.degree} · {e.period} · {e.detail}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xs lowercase text-muted-foreground">
            <span className="text-prompt">$</span> highlights
          </h3>
          <div className="mt-2">
            <Bullets items={achievements} />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
