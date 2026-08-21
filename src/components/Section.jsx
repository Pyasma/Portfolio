import Reveal from "./Reveal";
import Typewriter from "./Typewriter";

export default function Section({ id, title, subtitle, action, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-20 grid gap-6 border-t border-border py-12 lg:grid-cols-[220px_1fr] lg:gap-10"
    >
      <Reveal className="lg:sticky lg:top-20 lg:self-start">
        <h2 className="font-display text-xl font-bold lowercase tracking-tight">
          <span className="text-prompt">*</span>{" "}
          <Typewriter text={title} speed={60} startOnView caret={false} />
        </h2>
        {subtitle && (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            <Typewriter text={subtitle} speed={14} chunk={2} startOnView caret={false} />
          </p>
        )}
        {action && <div className="mt-3">{action}</div>}
      </Reveal>

      <div className="min-w-0">{children}</div>
    </section>
  );
}
