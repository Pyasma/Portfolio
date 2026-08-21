import { coreStack } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

export default function About() {
  return (
    <Section
      id="about"
      title="stack"
    >
      <Reveal className="relative overflow-hidden border-y border-border py-3">
        <Marquee items={coreStack} duration="180s" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
      </Reveal>
    </Section>
  );
}
