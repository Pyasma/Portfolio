import { openSource, community } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import Expandable from "./Expandable";
import { Bullets, TechTags, EntryHeader } from "./Experience";

export default function OpenSource() {
  return (
    <Section id="open-source" title="oss" kanji="貢献">
      <div className="grid gap-4 sm:grid-cols-2">
        {openSource.map((p, i) => (
          <Reveal key={p.project} delay={i * 60}>
            <div className="h-full border border-border bg-card p-4 transition-colors hover:border-prompt">
              <EntryHeader
                title={p.project}
                href={p.url}
                meta={`${p.role} · ${p.period}`}
              />
              <p className="mt-1 text-xs lowercase text-muted-foreground">{p.blurb}</p>
              <div className="mt-2">
                <Expandable summary={p.summary}>
                  <Bullets items={p.bullets} />
                </Expandable>
              </div>
              <TechTags tech={p.tech} />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <h3 className="text-xs lowercase text-muted-foreground">
          <span className="text-prompt">$</span> community
        </h3>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {community.map((c) => (
            <div key={c.org}>
              <p className="font-display text-sm font-bold lowercase">{c.org}</p>
              <p className="mt-0.5 text-xs lowercase text-muted-foreground">
                {c.role} · {c.period}
              </p>
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
