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

function Stat({ label, value }) {
  return (
    <div className="text-xs lowercase">
      <span className="mr-1 text-muted-foreground">{label}</span>
      <span className="tabular-nums">{value ?? "—"}</span>
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
      className="flex h-full flex-col justify-between gap-3 border border-border bg-card p-3 transition-colors hover:border-prompt"
    >
      <div className="flex items-baseline justify-between gap-3 text-xs">
        <span className="lowercase">
          <span className="text-prompt">$</span> gh stats --user {profile.handle}
        </span>
        <span className="shrink-0 text-muted-foreground">
          {contributions ? `${contributions.total} commits/yr` : "↗"}
        </span>
      </div>

      {contributions?.days?.length > 0 && (
        <Heatmap days={contributions.days} dark={dark} />
      )}

      <div className="flex flex-row flex-wrap gap-x-4 gap-y-1">
        <Stat label="stars" value={stats?.stars} />
        <Stat label="followers" value={stats?.followers} />
        <Stat label="prs" value={stats?.prs} />
        <Stat label="repos" value={stats?.publicRepos} />
      </div>
    </a>
  );
}
