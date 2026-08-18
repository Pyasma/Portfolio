import TechIcon from "./TechIcon";

/**
 * Infinite horizontal scroller. Children are duplicated so the loop is
 * seamless, and short lists are repeated first so a single copy stays wider
 * than the viewport on large screens.
 */
export default function Marquee({ items, reverse = false, duration = "40s" }) {
  const repeats = Math.max(1, Math.ceil(14 / items.length));
  const filled = Array.from({ length: repeats }, () => items).flat();

  return (
    <div
      className="group flex overflow-hidden p-1.5 [--gap:1.5rem] [gap:var(--gap)]"
      style={{ "--duration": duration }}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={`flex shrink-0 justify-around [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused] ${
            reverse ? "[animation-direction:reverse]" : ""
          }`}
        >
          {filled.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-2 whitespace-nowrap border border-border bg-card px-3 py-1.5 text-sm lowercase text-secondary-foreground"
            >
              <TechIcon name={item} className="size-5" />
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
