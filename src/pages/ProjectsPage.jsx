import { projects } from "../data/resume";
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

export default function ProjectsPage() {
  return (
    <div className="py-14">
      <Section title="Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-5 bg-white flex flex-col gap-3 hover:border-gray-900 transition-all duration-200 animate-item"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="flex justify-between items-start gap-2">
                <span className="font-semibold text-gray-900 text-sm leading-snug">{p.title}</span>
                <div className="flex gap-2 shrink-0">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap">
                      Live →
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-gray-900 hover:underline whitespace-nowrap">
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s, j) => (
                  <span key={j} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">{s}</span>
                ))}
              </div>
              <ul className="text-sm text-gray-700 space-y-1.5 list-none">
                {p.bullets.map((b, j) => (
                  <li key={j} className="leading-relaxed flex gap-2">
                    <span className="text-gray-900 select-none mt-0.5 shrink-0">›</span>
                    <span><Highlight text={b} /></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
