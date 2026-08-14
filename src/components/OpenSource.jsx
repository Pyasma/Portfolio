import { openSource, community } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import { Bullets, TechTags } from "./Experience";

export default function OpenSource() {
  return (
    <Section
      id="open-source"
      title="Open Source"
      kanji="貢献"
      subtitle="Contributions to projects other people actually run in production."
    >
      <div className="space-y-3">
        {openSource.map((p, i) => (
          <Reveal key={p.project} delay={i * 80}>
            <div className="rounded-2xl border border-border bg-card p-4 transition-colors hover:border-foreground/30">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  {p.project} ↗
                </a>
                <p className="text-xs text-muted-foreground">{p.period}</p>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{p.role}</p>
              <p className="mt-1 text-xs italic text-muted-foreground">{p.blurb}</p>
              <Bullets items={p.bullets} />
              <TechTags tech={p.tech} />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Community &amp; Leadership
        </h3>
        <div className="space-y-3">
          {community.map((c) => (
            <div key={c.org} className="rounded-xl border border-border p-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-sm font-semibold">
                  {c.org}{" "}
                  <span className="font-normal text-muted-foreground">
                    · {c.role}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">{c.period}</p>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {c.detail}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
