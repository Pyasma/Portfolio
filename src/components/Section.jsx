import Reveal from "./Reveal";

export default function Section({ id, title, kanji, subtitle, action, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <Reveal className="flex items-end justify-between gap-4 mb-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">
            {title}
            {kanji && <span className="text-muted-foreground"> • {kanji}</span>}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
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
