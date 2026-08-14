import { blogs } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Blogs() {
  return (
    <Section
      id="blogs"
      title="Blogs"
      kanji="記事"
      subtitle="Notes on open source, distributed systems, and things I broke first."
    >
      {blogs.length === 0 ? (
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="font-semibold">Nothing here yet.</p>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">
              Writing on Apache Airflow contributions, distributed systems, and ML
              systems is queued up. Writing takes time — code ships faster.
            </p>
          </div>
        </Reveal>
      ) : (
        <div className="space-y-3">
          {blogs.map((b, i) => (
            <Reveal key={b.url} delay={i * 60}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-border bg-card p-4 transition-transform duration-500 hover:scale-[0.98]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold">{b.title} ↗</p>
                  <p className="text-xs text-muted-foreground">{b.date}</p>
                </div>
                {b.summary && (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {b.summary}
                  </p>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
