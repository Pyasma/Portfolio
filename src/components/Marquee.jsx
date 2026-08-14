/**
 * Infinite horizontal scroller. Children are duplicated so the loop is seamless.
 */
export default function Marquee({ items, reverse = false, duration = "40s" }) {
  return (
    <div
      className="group flex overflow-hidden p-1.5 [--gap:0.75rem] [gap:var(--gap)]"
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
          {items.map((item) => (
            <span
              key={item}
              className="whitespace-nowrap rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
