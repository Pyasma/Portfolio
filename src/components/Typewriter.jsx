import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

/**
 * Types text out one character at a time, the way the name in the header does.
 * Body copy types in chunks so a long paragraph still lands quickly, and the
 * block caret only shows while there is more left to type.
 */
export default function Typewriter({
  text,
  speed = 90,
  chunk = 1,
  startOnView = false,
  caret = true,
  className = "",
}) {
  const full = String(text ?? "");
  const instant = typeof window !== "undefined" && prefersReducedMotion();

  const ref = useRef(null);
  const [started, setStarted] = useState(!startOnView || instant);
  const [count, setCount] = useState(instant ? full.length : 0);

  useEffect(() => {
    if (started) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || count >= full.length) return;
    const id = setTimeout(
      () => setCount((c) => Math.min(c + chunk, full.length)),
      speed
    );
    return () => clearTimeout(id);
  }, [started, count, full.length, speed, chunk]);

  const typing = count < full.length;

  return (
    <span ref={ref} className={className}>
      {full.slice(0, count)}
      {caret && (typing || !startOnView) && (
        <span
          className={`${
            typing ? "" : "caret"
          } ml-1 inline-block h-[0.7em] w-[0.45em] translate-y-[0.05em] bg-prompt`}
        />
      )}
    </span>
  );
}
