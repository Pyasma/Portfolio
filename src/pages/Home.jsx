import { profile } from "../data/resume";
import profileImg from "../assets/rmsubar-small.jpeg";

export default function Home() {
  return (
    <div className="min-h-[calc(100svh-80px)] flex items-center py-16">
      <div className="flex flex-col items-start max-w-2xl w-full">
        {profile.openToWork && (
          <span
            className="inline-block bg-green-50 text-green-700 text-xs font-semibold tracking-wide px-3 py-1 rounded-full border border-green-200 mb-5"
            style={{ animationDelay: "0ms" }}
          >
            Open to Work
          </span>
        )}

        <div
          className="flex items-center gap-4 mb-2 animate-item"
          style={{ animationDelay: "60ms" }}
        >
          <img
            src={profileImg}
            alt={profile.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-400 shrink-0"
          />
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {profile.name}
          </h1>
        </div>

        <p
          className="text-sm text-gray-400 mb-7 animate-item"
          style={{ animationDelay: "100ms" }}
        >
          {profile.tagline}
        </p>

        <p
          className="text-base text-gray-700 leading-relaxed mb-7 animate-item"
          style={{ animationDelay: "140ms" }}
        >
          {profile.heroDescription}
        </p>

        <div
          className="flex flex-wrap gap-2 animate-item"
          style={{ animationDelay: "220ms" }}
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-gray-200 text-gray-700 text-sm rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-gray-200 text-gray-700 text-sm rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-2 border border-gray-200 text-gray-700 text-sm rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
          >
            Email
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-gray-200 text-gray-700 text-sm rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
