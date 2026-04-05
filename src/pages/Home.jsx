import { profile } from "../data/resume";
import profileImg from "../assets/rmsubar-small.jpeg";

export default function Home() {
  return (
    <div className="min-h-[calc(100svh-52px)] flex items-center py-16">
      <div className="flex flex-col items-start max-w-2xl">
        {profile.openToWork && (
          <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold tracking-wide px-3 py-1 rounded-full border border-green-200 mb-5">
            Open to Work
          </span>
        )}

        <div className="flex items-center gap-4 mb-2">
          <img
            src={profileImg}
            alt={profile.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-200 shrink-0"
          />
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {profile.name}
          </h1>
        </div>

        <p className="text-sm text-gray-400 mb-7">{profile.tagline}</p>

        <p className="text-base text-gray-700 leading-relaxed mb-7">
          {profile.heroDescription}
        </p>

        <div className="flex gap-3 items-baseline border-l-2 border-gray-900 pl-4 bg-gray-50 py-3 pr-4 rounded-r mb-9 w-full">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-900 whitespace-nowrap">Currently</span>
          <span className="text-sm text-gray-600 leading-relaxed">{profile.ossStatus}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 border border-gray-200 text-black-700 text-sm rounded hover:border-gray-400 hover:bg-black hover:text-white transition-colors">    
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 border border-gray-200 text-black-700 text-sm rounded hover:border-gray-400 hover:bg-black hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}
            className="px-5 py-2 border border-gray-200 text-black-700 text-sm rounded hover:border-gray-400 hover:bg-black hover:text-white transition-colors">
            Email
          </a>
          <a href={`tel:${profile.phone}`}
            className="px-5 py-2 border border-gray-200 text-black-700 text-sm rounded hover:border-gray-400 hover:bg-black hover:text-white transition-colors">   
            Phone
          </a>
        </div>
      </div>
    </div>
  );
}
