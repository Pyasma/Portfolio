import { useEffect, useState } from "react";
import { profile } from "../data/resume";

const API = "https://api.github.com";
const CONTRIBUTIONS_API = "https://github-contributions-api.jogruber.de/v4";

const LEVELS_DARK = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
const LEVELS_LIGHT = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

function useGithubStats(handle) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, repoRes, prRes, issueRes] = await Promise.all([
          fetch(`${API}/users/${handle}`),
          fetch(`${API}/users/${handle}/repos?per_page=100&sort=updated`),
          fetch(`${API}/search/issues?q=author:${handle}+type:pr&per_page=1`),
          fetch(`${API}/search/issues?q=author:${handle}+type:issue&per_page=1`),
        ]);
        if (!userRes.ok || !repoRes.ok) return;

        const user = await userRes.json();
        const repos = await repoRes.json();
        const prs = prRes.ok ? await prRes.json() : null;
        const issues = issueRes.ok ? await issueRes.json() : null;
        if (cancelled) return;

        setStats({
          avatar: user.avatar_url,
          name: user.name || handle,
          followers: user.followers,
          publicRepos: user.public_repos,
          stars: Array.isArray(repos)
            ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
            : 0,
          prs: prs?.total_count ?? null,
          issues: issues?.total_count ?? null,
        });
      } catch {
        // Offline or rate limited: card falls back to placeholder values.
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [handle]);

  return stats;
}

function useContributions(handle) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`${CONTRIBUTIONS_API}/${handle}?y=last`);
        if (!res.ok) return;
        const json = await res.json();
        if (cancelled) return;
        setData({
          total: json.total?.lastYear ?? 0,
          days: json.contributions ?? [],
        });
      } catch {
        // Graph is optional: the card still renders its stats.
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [handle]);

  return data;
}

function useIsDark() {
  const [dark, setDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() =>
      setDark(root.classList.contains("dark"))
    );
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return dark;
}

// Roughly the last five months, which is what fits the card without scrolling.
const VISIBLE_DAYS = 154;

function Heatmap({ days, dark }) {
  const palette = dark ? LEVELS_DARK : LEVELS_LIGHT;
  const recent = days.slice(-VISIBLE_DAYS);
  // Align the first column to a Sunday so weeks read as columns.
  const start = recent.findIndex((d) => new Date(d.date).getDay() === 0);
  const aligned = start > 0 ? recent.slice(start) : recent;

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
        {aligned.map((d) => (
          <span
            key={d.date}
            title={`${d.count} contributions on ${d.date}`}
            className="size-[9px] rounded-[2px]"
            style={{ background: palette[d.level] ?? palette[0] }}
          />
        ))}
      </div>
    </div>
  );
}

function Stat({ dot, label, value }) {
  return (
    <div className="text-sm">
      <span className="mr-1 text-muted-foreground">
        {dot} {label}:
      </span>
      <span className="font-medium tabular-nums">{value ?? "—"}</span>
    </div>
  );
}

export default function GithubCard() {
  const stats = useGithubStats(profile.handle);
  const contributions = useContributions(profile.handle);
  const dark = useIsDark();

  return (
    <a
      href={profile.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col justify-between gap-3 rounded-2xl border border-border bg-[#f7f2f2] p-4 transition-transform duration-500 hover:scale-[0.98] dark:bg-[#0d1117]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <span className="text-sm font-semibold">GitHub 実</span>
        </div>
        <span className="text-xs text-muted-foreground">
          {contributions ? `${contributions.total} contributions` : `@${profile.handle}`}
        </span>
      </div>

      {contributions?.days?.length > 0 && (
        <Heatmap days={contributions.days} dark={dark} />
      )}

      <div className="flex flex-row flex-wrap gap-x-5 gap-y-1">
        <Stat dot="🔴" label="Stars" value={stats?.stars} />
        <Stat dot="⚫" label="Squad" value={stats?.followers} />
        <Stat dot="🔵" label="PRs" value={stats?.prs} />
        <Stat dot="⚪" label="Repos" value={stats?.publicRepos} />
      </div>
    </a>
  );
}
