import { blogs } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Blogs() {
  return (
    <Section
      id="blogs"
      title="blogs"
      subtitle="notes on open source, distributed systems, and things i broke first."
    >
      {blogs.length === 0 ? (
        <Reveal>
          <p className="text-sm text-muted-foreground">
            <span className="text-prompt">$</span> ls posts/ — empty for now. code
            ships faster than prose.
          </p>
        </Reveal>
      ) : (
        <div className="space-y-3">
          {blogs.map((b, i) => (
            <Reveal key={b.url} delay={i * 50}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <span className="shrink-0 text-xs lowercase text-muted-foreground sm:w-24">
                  {b.date}
                </span>
                <span className="min-w-0">
                  <span className="text-sm lowercase group-hover:text-prompt">
                    {b.title}
                  </span>
                  {b.summary && (
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {b.summary}
                    </span>
                  )}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
