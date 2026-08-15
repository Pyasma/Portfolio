import { profile, skills } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

const stack = skills.flatMap((s) => s.value.split(", "));
const rowSize = Math.ceil(stack.length / 3);
const rows = [
  stack.slice(0, rowSize),
  stack.slice(rowSize, rowSize * 2),
  stack.slice(rowSize * 2),
];

export default function About() {
  return (
    <Section id="about" title="stack" subtitle={profile.ossStatus.toLowerCase()}>
      <Reveal className="relative overflow-hidden border-y border-border py-2">
        {rows.map((row, i) => (
          <Marquee
            key={i}
            items={row}
            reverse={i % 2 === 1}
            duration={`${38 + i * 6}s`}
          />
        ))}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
      </Reveal>
    </Section>
  );
}
