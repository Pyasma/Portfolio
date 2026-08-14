import { experience, education, achievements } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";

function Highlight({ text }) {
  const parts = text.split(/(\b\d+[+%KkxX]*\b)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\d/.test(part) ? (
          <strong key={i} className="font-semibold text-foreground">
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
    <ul className="mt-3 list-none space-y-1.5 text-sm text-muted-foreground">
      {items.map((b, i) => (
        <li key={i} className="flex gap-2 leading-relaxed">
          <span className="mt-0.5 shrink-0 select-none text-foreground">›</span>
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
    <div className="mt-3 flex flex-wrap gap-1.5">
      {tech.split(", ").map((t) => (
        <span
          key={t}
          className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Work" kanji="仕事">
      <div className="space-y-3">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 80}>
            <div className="rounded-2xl border border-border bg-card p-4 transition-colors hover:border-foreground/30">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold">{job.role}</p>
                <p className="text-xs text-muted-foreground">{job.period}</p>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="text-foreground">{job.company}</span>
                )}
                {" · "}
                {job.location}
              </p>
              <Bullets items={job.bullets} />
              <TechTags tech={job.tech} />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Education
        </h3>
        {education.map((e) => (
          <div key={e.school} className="mb-4 last:mb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-sm font-semibold">{e.degree}</p>
              <p className="text-xs text-muted-foreground">{e.period}</p>
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {e.school} · {e.location}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">{e.detail}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-8">
        <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
          Highlights
        </h3>
        <Bullets items={achievements} />
      </Reveal>
    </Section>
  );
}
