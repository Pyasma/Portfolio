import { useState } from "react";
import { profile } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";

const socials = [
  { label: "github", href: profile.github },
  { label: "linkedin", href: profile.linkedin },
  { label: "x", href: profile.twitter },
  { label: "email", href: `mailto:${profile.email}` },
  { label: "cal", href: profile.cal },
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
      title="reach"
      subtitle="open to backend, ml, and open source roles. fastest reply is email."
    >
      <Reveal>
        <form onSubmit={handleSubmit} className="max-w-[62ch]">
          <label
            htmlFor="message"
            className="text-sm text-muted-foreground"
          >
            <span className="text-prompt">$</span> mail {profile.email}
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="say hi, pitch a project, or send an issue link…"
            className="mt-2 w-full resize-y border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-prompt focus:outline-none"
          />
          <button
            type="submit"
            disabled={message.trim().length === 0}
            className="mt-2 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40 disabled:hover:text-muted-foreground"
          >
            <span className="text-prompt">[</span>send
            <span className="text-prompt">]</span>
          </button>
        </form>
      </Reveal>

      <Reveal delay={80} className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-prompt">[</span>
            {s.label}
            <span className="text-prompt">]</span>
          </a>
        ))}
      </Reveal>
    </Section>
  );
}
