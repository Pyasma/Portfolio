import { useState } from "react";
import { profile } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "X", href: profile.twitter },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Hello from your portfolio");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section
      id="contact"
      title="Reach"
      kanji="連絡"
      subtitle="Open to backend, ML, and open source roles. Fastest reply is email."
    >
      <Reveal>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Say hi, pitch a project, or send an issue link…"
            className="w-full resize-y rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          />
          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={message.trim().length === 0}
              className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-40"
            >
              Send via email
            </button>
            <a
              href={profile.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              Book a call
            </a>
          </div>
        </form>
      </Reveal>

      <Reveal delay={80} className="mt-6 flex flex-wrap gap-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            {s.label}
          </a>
        ))}
      </Reveal>
    </Section>
  );
}
