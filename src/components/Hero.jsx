import { profile, socials } from "../data/resume";
import Typewriter from "./Typewriter";
import Reveal from "./Reveal";
import profileImg from "../assets/rmsubar-small.jpeg";

function Tile({ label, value, href }) {
  const inner = (
    <>
      <p className="text-xs lowercase text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm leading-snug lowercase break-words">{value}</p>
    </>
  );

  const className =
    "block border border-border bg-card p-3 transition-colors hover:border-prompt";

  if (!href) return <div className={className}>{inner}</div>;

  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={className}
    >
      {inner}
    </a>
  );
}

export default function Hero() {
  return (
    <header
      id="hero"
      className="scroll-mt-20 grid gap-8 py-12 lg:grid-cols-[1fr_320px] lg:gap-10"
    >
      <div className="min-w-0">
        <Reveal>
          <p className="text-sm text-muted-foreground">
            <span className="text-prompt">~/portfolio</span> $ whoami
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="font-display mt-3 text-5xl font-bold lowercase tracking-tight sm:text-7xl">
            <Typewriter text={profile.handle.toLowerCase()} />
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-3 text-sm lowercase text-muted-foreground">
            <Typewriter
              text={`${profile.name} · ${profile.tagline}`.toLowerCase()}
              speed={16}
              caret={false}
            />
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-5 max-w-[70ch]">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <Typewriter text={profile.intro} speed={12} chunk={2} caret={false} />
          </p>
        </Reveal>

        <Reveal className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
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
      </div>

      <Reveal className="grid grid-cols-2 gap-3 lg:grid-cols-2">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-1 row-span-2 border border-border bg-card p-1 transition-colors hover:border-prompt"
        >
          <img
            src={profileImg}
            alt={profile.name}
            className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
        </a>
        <Tile
          label="status"
          value={profile.openToWork ? "open to work" : "heads down"}
        />
        <Tile label="resume" value="pdf ↗" href={profile.resumeUrl} />
      </Reveal>
    </header>
  );
}
