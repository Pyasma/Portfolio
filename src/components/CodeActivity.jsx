import { profile } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import GithubCard from "./GithubCard";
import WakaTimeCard from "./WakaTimeCard";

export default function CodeActivity() {
  return (
    <Section
      id="activity"
      title="activity"
      subtitle="commits and editor time, straight from the source. both public."
    >
      <div className="grid gap-3 md:grid-cols-2">
        <Reveal>
          <GithubCard />
        </Reveal>
        <Reveal delay={60}>
          <WakaTimeCard />
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="lowercase">
          <span className="text-prompt">$</span> status — {profile.status}
        </p>
        <a
          href={profile.cal}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-prompt">[</span>book a call
          <span className="text-prompt">]</span>
        </a>
      </Reveal>
    </Section>
  );
}
