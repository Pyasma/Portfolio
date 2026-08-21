import { useEffect, useState } from "react";
import { profile } from "../data/resume";

const API = "https://api.github.com";
const CACHE_KEY = "oss-repos-v1";
const CACHE_TTL = 6 * 60 * 60 * 1000;

// Tutorial and sandbox repos: real contributions, but not worth a card.
const IGNORED = new Set(["firstcontributions/first-contributions"]);
const MIN_PRS = 2;
const LIMIT = 6;

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, repos } = JSON.parse(raw);
    return Date.now() - at < CACHE_TTL ? repos : null;
  } catch {
    return null;
  }
}

function writeCache(repos) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos }));
  } catch {
    // Private mode: skip caching, the fetch still worked.
  }
}

/**
 * Every repo the account has merged PRs into, straight from the GitHub search
 * API, with the repo's own description and star count filled in after. Own
 * repos are dropped so the list is only work done in other people's codebases.
 */
function useOssRepos(handle) {
  const [repos, setRepos] = useState(readCache);

  useEffect(() => {
    if (repos) return;
    let cancelled = false;

    async function load() {
      try {
        const query = `author:${handle}+type:pr+is:merged`;
        const res = await fetch(
          `${API}/search/issues?q=${query}&per_page=100`
        );
        if (!res.ok) return;
        const json = await res.json();

        const counts = new Map();
        for (const item of json.items ?? []) {
          const name = item.repository_url.split("/repos/")[1];
          if (!name || name.startsWith(`${handle}/`) || IGNORED.has(name)) continue;
          counts.set(name, (counts.get(name) ?? 0) + 1);
        }

        const top = [...counts.entries()]
          .filter(([, count]) => count >= MIN_PRS)
          .sort((a, b) => b[1] - a[1])
          .slice(0, LIMIT);

        const detailed = await Promise.all(
          top.map(async ([name, merged]) => {
            try {
              const r = await fetch(`${API}/repos/${name}`);
              if (!r.ok) return { name, merged };
              const repo = await r.json();
              return {
                name,
                merged,
                description: repo.description,
                stars: repo.stargazers_count,
                language: repo.language,
              };
            } catch {
              return { name, merged };
            }
          })
        );

        if (cancelled) return;
        setRepos(detailed);
        writeCache(detailed);
      } catch {
        // Offline or rate limited: the section renders nothing.
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [handle, repos]);

  return repos;
}

function formatStars(n) {
  if (!n) return null;
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : `${n}`;
}

function RepoCard({ repo }) {
  const stars = formatStars(repo.stars);
  const meta = [stars && `${stars} stars`, repo.language].filter(Boolean);

  return (
    <a
      href={`https://github.com/${repo.name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col border border-border bg-card p-4 transition-colors hover:border-prompt"
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-display font-bold lowercase">{repo.name}</span>
        <span className="shrink-0 text-xs text-muted-foreground">↗</span>
      </div>
      <p className="mt-0.5 text-xs lowercase text-muted-foreground">
        {meta.join(" · ")}
      </p>
      {repo.description && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {repo.description}
        </p>
      )}
    </a>
  );
}

export default function OssRepos() {
  const repos = useOssRepos(profile.handle);
  if (!repos?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {repos.map((r) => (
        <RepoCard key={r.name} repo={r} />
      ))}
    </div>
  );
}
