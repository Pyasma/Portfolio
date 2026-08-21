import Section from "./Section";
import Reveal from "./Reveal";
import GithubCard from "./GithubCard";
import WakaTimeCard from "./WakaTimeCard";

export default function CodeActivity() {
  return (
    <Section id="activity" title="activity">
      <div className="grid gap-3 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <GithubCard />
        </Reveal>
        <Reveal delay={60}>
          <WakaTimeCard />
        </Reveal>
      </div>

    </Section>
  );
}
