import { profile } from "../data/resume";
import LocalTime from "./LocalTime";
import Reveal from "./Reveal";
import profileImg from "../assets/rmsubar-small.jpeg";

const socials = [
  { label: "github", href: profile.github },
  { label: "linkedin", href: profile.linkedin },
  { label: "x", href: profile.twitter },
  { label: "email", href: `mailto:${profile.email}` },
  { label: "cal", href: profile.cal },
];

export default function Hero() {
  return (
    <header id="hero" className="scroll-mt-16 py-10">
      <Reveal>
        <p className="text-sm text-muted-foreground">
          <span className="text-prompt">~/portfolio</span> $ whoami
        </p>
      </Reveal>

      <div className="mt-3 flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <Reveal delay={60}>
            <h1 className="text-4xl font-bold lowercase tracking-tight sm:text-5xl">
              {profile.handle.toLowerCase()}
              <span className="caret ml-1 inline-block h-[0.8em] w-[0.5em] translate-y-[0.05em] bg-prompt align-baseline" />
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-2 text-sm lowercase text-muted-foreground">
              {profile.name} · {profile.tagline.toLowerCase()}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-1 text-sm lowercase text-muted-foreground">
              {profile.location.toLowerCase()} · <LocalTime /> ·{" "}
              {profile.openToWork && (
                <span className="text-prompt">open to work</span>
              )}
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="shrink-0">
          <img
            src={profileImg}
            alt={profile.name}
            className="size-20 border border-border object-cover grayscale transition-all duration-500 hover:grayscale-0 sm:size-24"
          />
        </Reveal>
      </div>

      <Reveal delay={180} className="mt-6">
        <p className="max-w-[62ch] text-sm leading-relaxed">
          {profile.heroDescription}
        </p>
      </Reveal>

      <Reveal delay={220} className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
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
    </header>
  );
}
