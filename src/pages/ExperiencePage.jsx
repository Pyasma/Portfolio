import { experience, achievements } from "../data/resume";
import Section from "../components/Section";

export default function ExperiencePage() {
  return (
    <div className="py-14">
      <Section title="Experience">
        {experience.map((job, i) => (
          <div key={i} className="mb-8">
            <p className="font-semibold text-gray-900">{job.role}</p>
            <p className="text-xs text-gray-400 mt-0.5">{job.period}</p>
            <p className="text-sm text-gray-400 mt-0.5">
              {job.companyUrl
                ? <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{job.company}</a>
                : job.company}
              {" · "}{job.location}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-600 list-none">
              {job.bullets.map((b, j) => <li key={j} className="leading-relaxed">— {b}</li>)}
            </ul>
            {job.tech && <p className="mt-2 text-xs text-gray-400 italic">{job.tech}</p>}
          </div>
        ))}
      </Section>

      <Section title="Achievements">
        <ul className="space-y-2 text-sm text-gray-600 list-none">
          {achievements.map((a, i) => <li key={i} className="leading-relaxed">— {a}</li>)}
        </ul>
      </Section>
    </div>
  );
}
