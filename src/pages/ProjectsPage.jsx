import { projects } from "../data/resume";
import Section from "../components/Section";

export default function ProjectsPage() {
  return (
    <div className="py-14">
      <Section title="Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5 bg-white flex flex-col gap-3">
              <div className="flex justify-between items-start gap-2">
                <span className="font-semibold text-gray-900 text-sm leading-snug">{p.title}</span>
                <div className="flex gap-2 shrink-0">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-gray-500 hover:underline whitespace-nowrap">
                      Live →
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline whitespace-nowrap">
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
              <ul className="text-sm text-gray-600 space-y-1 list-none">
                {p.bullets.map((b, j) => <li key={j} className="leading-relaxed">— {b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
