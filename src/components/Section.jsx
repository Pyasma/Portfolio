import Reveal from "./Reveal";

export default function Section({ id, title, subtitle, action, children }) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-border py-10">
      <Reveal className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div>
          <h2 className="text-lg font-bold lowercase tracking-tight">
            <span className="text-prompt">*</span> {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        {action}
      </Reveal>
      {children}
    </section>
  );
}
