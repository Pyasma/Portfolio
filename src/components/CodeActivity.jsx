import { profile } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import GithubCard from "./GithubCard";
import WakaTimeCard from "./WakaTimeCard";

export default function CodeActivity() {
  return (
    <Section
      id="activity"
      title="Activity"
      kanji="活動"
      subtitle="Commits and editor time, straight from the source. Both public."
    >
      <div className="grid gap-3 md:grid-cols-2">
        <Reveal>
          <GithubCard />
        </Reveal>
        <Reveal delay={80}>
          <WakaTimeCard />
        </Reveal>
      </div>

      <Reveal delay={140} className="mt-3">
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-border bg-card px-4 py-3">
          <p className="text-sm">
            <span className="mr-2 inline-flex items-center gap-1.5 text-muted-foreground">
              <span className="inline-block size-1.5 animate-pulse rounded-full bg-emerald-500" />
              Now
            </span>
            {profile.status}
          </p>
          <a
            href={profile.cal}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Book a call ↗
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
