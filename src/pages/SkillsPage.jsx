import { skills, education } from "../data/resume";
import Section from "../components/Section";

export default function SkillsPage() {
  return (
    <div className="py-14">
      <Section title="Skills">
        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {skills.map((s, i) => (
            <div key={i} className="py-3 text-sm">
              <p className="font-semibold text-gray-900 text-xs mb-1">{s.label}</p>
              <p className="text-gray-600 leading-relaxed">{s.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        {education.map((e, i) => (
          <div key={i} className="mb-4">
            <p className="font-semibold text-gray-900 text-sm">{e.degree}</p>
            <p className="text-xs text-gray-500 mt-0.5">{e.period}</p>
            <p className="text-sm text-gray-600 mt-0.5">{e.school} · {e.location}</p>
            <p className="text-xs text-gray-500 mt-0.5">{e.detail}</p>
          </div>
        ))}
      </Section>
    </div>
  );
}
