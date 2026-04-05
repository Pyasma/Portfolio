import { experience, achievements, skills, education } from "../data/resume";
import Section from "../components/Section";

function Highlight({ text }) {
  const parts = text.split(/(\b\d+[+%KkxX]*\b)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\d/.test(part)
          ? <strong key={i} className="font-semibold text-gray-900">{part}</strong>
          : part
      )}
    </>
  );
}

export default function ExperiencePage() {
  return (
    <div className="py-14">
      <Section title="Experience">
        {experience.map((job, i) => (
          <div
            key={i}
            className="mb-8 animate-item"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <p className="font-semibold text-gray-900">{job.role}</p>
            <p className="text-sm text-gray-700 mt-0.5">
              {job.companyUrl
                ? <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">{job.company}</a>
                : job.company}
              {" · "}{job.location}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{job.period}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-none">
              {job.bullets.map((b, j) => (
                <li key={j} className="leading-relaxed flex gap-2">
                  <span className="text-gray-900 select-none mt-0.5 shrink-0">›</span>
                  <span><Highlight text={b} /></span>
                </li>
              ))}
            </ul>
            {job.tech && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.tech.split(", ").map((t, j) => (
                  <span key={j} className="bg-gray-900 text-gray-900 text-xs px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </Section>

      <Section title="Achievements">
        <ul className="space-y-3 text-sm text-gray-700 list-none">
          {achievements.map((a, i) => (
            <li
              key={i}
              className="leading-relaxed flex gap-2 animate-item"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-gray-900 select-none mt-0.5 shrink-0">›</span>
              <span><Highlight text={a} /></span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Skills">
        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {skills.map((s, i) => (
            <div
              key={i}
              className="py-3 text-sm animate-item"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <p className="font-semibold text-gray-900 text-xs mb-1.5">{s.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.value.split(", ").map((skill, j) => (
                  <span key={j} className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded hover:bg-gray-900 hover:text-gray-900 transition-all duration-200 cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        {education.map((e, i) => (
          <div key={i} className="mb-4 animate-item" style={{ animationDelay: `${i * 60}ms` }}>
            <p className="font-semibold text-gray-900 text-sm">{e.degree}</p>
            <p className="text-sm text-gray-600 mt-0.5">{e.school} · {e.location}</p>
            <p className="text-xs text-gray-500 mt-0.5">{e.period}</p>
            <p className="text-xs text-gray-500 mt-0.5">{e.detail}</p>
          </div>
        ))}
      </Section>
    </div>
  );
}
