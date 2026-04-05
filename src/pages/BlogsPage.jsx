import { blogs } from "../data/resume";
import Section from "../components/Section";

export default function BlogsPage() {
  return (
    <div className="py-14">
      <Section title="Blogs">
        {blogs.length === 0 ? (
          <div className="py-10 animate-item">
            <p className="font-semibold text-gray-900 mb-2">Nothing here yet.</p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              I plan to write about my open source contributions to Apache Airflow,
              distributed systems, ML systems, and robotics. Writing takes time — code ships faster.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100 border-t border-gray-100">
            {blogs.map((b, i) => (
              <a
                key={i}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 group no-underline animate-item"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <p className="font-medium text-gray-900 text-sm group-hover:text-black transition-colors duration-200">
                  {b.title}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{b.date}</p>
                {b.summary && (
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{b.summary}</p>
                )}
              </a>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
