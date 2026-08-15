import Reveal from "./Reveal";

export default function Section({ id, title, kanji, subtitle, action, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-20 grid gap-6 border-t border-border py-12 lg:grid-cols-[220px_1fr] lg:gap-10"
    >
      <Reveal className="lg:sticky lg:top-20 lg:self-start">
        <h2 className="font-display text-xl font-bold lowercase tracking-tight">
          <span className="text-prompt">*</span> {title}
          {kanji && (
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              {kanji}
            </span>
          )}
        </h2>
        {subtitle && (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}
        {action && <div className="mt-3">{action}</div>}
      </Reveal>

      <div className="min-w-0">{children}</div>
    </section>
  );
}
