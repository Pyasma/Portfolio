import { useState } from "react";
import Typewriter from "./Typewriter";

/**
 * Shows a one-line summary with the long-form detail hidden behind a toggle.
 */
export default function Expandable({ summary, children, moreLabel = "more" }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {summary && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          <Typewriter text={summary} speed={12} chunk={2} startOnView caret={false} />
        </p>
      )}

      {children && (
        <>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-prompt">[</span>
            {open ? "less" : moreLabel}
            <span className="text-prompt">]</span>
          </button>
          {open && <div className="mt-1">{children}</div>}
        </>
      )}
    </div>
  );
}
