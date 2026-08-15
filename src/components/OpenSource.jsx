import { openSource, community } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import { Bullets, TechTags, EntryHeader } from "./Experience";

export default function OpenSource() {
  return (
    <Section
      id="open-source"
      title="oss"
      subtitle="contributions to projects other people actually run in production."
    >
      <div className="space-y-6">
        {openSource.map((p, i) => (
          <Reveal key={p.project} delay={i * 60}>
            <EntryHeader
              title={p.project}
              href={p.url}
              meta={`${p.role} · ${p.period}`}
            />
            <p className="mt-1 text-xs lowercase text-muted-foreground">{p.blurb}</p>
            <Bullets items={p.bullets} />
            <TechTags tech={p.tech} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <h3 className="text-sm lowercase text-muted-foreground">
          <span className="text-prompt">$</span> community
        </h3>
        <div className="mt-2 space-y-3">
          {community.map((c) => (
            <div key={c.org}>
              <p className="text-sm font-bold lowercase">{c.org}</p>
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
