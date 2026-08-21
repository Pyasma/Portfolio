import Section from "./Section";
import Reveal from "./Reveal";
import OssRepos from "./OssRepos";

export default function OpenSource() {
  return (
    <Section id="open-source" title="oss">
      <Reveal>
        <OssRepos />
      </Reveal>
    </Section>
  );
}
