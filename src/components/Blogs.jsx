import { blogs } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Blogs() {
  return (
    <Section id="blogs" title="blogs" kanji="記事">
      {blogs.length === 0 ? (
        <Reveal>
          <p className="text-sm text-muted-foreground">
            <span className="text-prompt">$</span> ls posts/ — empty for now.
          </p>
        </Reveal>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {blogs.map((b, i) => (
            <Reveal key={b.url} delay={i * 50}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full border border-border bg-card p-3 transition-colors hover:border-prompt"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-sm font-bold lowercase">
                    {b.title}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {b.date}
                  </span>
                </div>
                {b.summary && (
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
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
