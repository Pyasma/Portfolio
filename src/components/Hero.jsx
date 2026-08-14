import { profile } from "../data/resume";
import LocalTime from "./LocalTime";
import Reveal from "./Reveal";
import profileImg from "../assets/rmsubar-small.jpeg";

function Chip({ href, children }) {
  const className =
    "inline-flex items-center gap-1 rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-accent";

  if (!href) return <span className={className}>{children}</span>;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

const socials = [
  {
    label: "GitHub",
    href: profile.github,
    path: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4 M9 18c-4.51 2-5-2-7-2",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
  },
  {
    label: "X",
    href: profile.twitter,
    path: "M4 4l16 16 M20 4L4 20",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    path: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-28">
      {/* Spotlight wash, dark mode only. */}
      <div
        aria-hidden="true"
        className="animate-spotlight pointer-events-none fixed left-1/4 top-0 -z-10 hidden h-[60vh] w-[120vw] max-w-[1400px] rounded-full opacity-0 blur-[120px] dark:block"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.14), transparent)",
        }}
      />

      <div className="flex justify-between gap-4">
        <div className="flex flex-1 flex-col space-y-1.5">
          <Reveal>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Hi, I&apos;m {profile.name.split(" ")[0]}
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-3 max-w-[600px] text-muted-foreground md:text-xl">
              {profile.headline}
            </p>
          </Reveal>

          <Reveal delay={150} className="pt-3">
            <div className="flex flex-wrap gap-1.5">
              <Chip>
                <span className="mr-0.5">📍</span>
                {profile.location}
              </Chip>
              <Chip>
                <svg
                  className="mr-0.5 h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="13" r="8" />
                  <path d="M12 9v4l2 2" />
                  <path d="M5 3 2 6" />
                  <path d="m22 6-3-3" />
                </svg>
                <LocalTime />
              </Chip>
              <Chip href={profile.resumeUrl}>
                <span className="mr-0.5">✨</span>Resume
              </Chip>
              {profile.openToWork && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Open to work
                </span>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="shrink-0">
          <img
            src={profileImg}
            alt={profile.name}
            className="size-24 rounded-lg border border-border object-cover sm:size-28"
          />
        </Reveal>
      </div>

      <Reveal delay={220} className="mt-6">
        <p className="text-sm text-muted-foreground">{profile.tagline}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              title={s.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={s.path} />
              </svg>
              <span className="sr-only">{s.label}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
