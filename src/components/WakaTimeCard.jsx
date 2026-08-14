import { useEffect, useState } from "react";
import { wakatime } from "../data/resume";

const BAR_COLORS = [
  "#8b5cf6",
  "#22d3ee",
  "#f59e0b",
  "#ec4899",
  "#10b981",
  "#f43f5e",
];

/**
 * Pulls the public WakaTime stats for the profile. Only the ranges the user has
 * made public come back with numbers, so every field is treated as optional.
 */
function useWakatimeStats(userId) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          `https://wakatime.com/api/v1/users/${userId}/stats/last_7_days`
        );
        if (!res.ok) return;
        const { data } = await res.json();
        if (cancelled || !data) return;

        setStats({
          total: data.human_readable_total ?? null,
          dailyAverage: data.human_readable_daily_average ?? null,
          range: data.human_readable_range ?? "last week",
          languages: (data.languages ?? []).slice(0, 5),
          editors: (data.editors ?? []).slice(0, 3),
        });
      } catch {
        // Rate limited or offline: the badge below still renders.
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  return stats;
}

function LanguageBar({ languages }) {
  return (
    <div>
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted">
        {languages.map((l, i) => (
          <span
            key={l.name}
            title={`${l.name} · ${l.text}`}
            style={{
              width: `${l.percent}%`,
              background: BAR_COLORS[i % BAR_COLORS.length],
            }}
          />
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
        {languages.map((l, i) => (
          <span key={l.name} className="inline-flex items-center gap-1.5">
            <span
              className="inline-block size-2 rounded-full"
              style={{ background: BAR_COLORS[i % BAR_COLORS.length] }}
            />
            {l.name} {Math.round(l.percent)}%
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WakaTimeCard() {
  const stats = useWakatimeStats(wakatime.userId);
  const [badgeFailed, setBadgeFailed] = useState(false);

  return (
    <a
      href={wakatime.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col justify-between gap-3 rounded-2xl border border-border bg-card p-4 transition-transform duration-500 hover:scale-[0.98]"
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
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          <span className="text-sm font-semibold">WakaTime 時</span>
        </div>
        <span className="text-xs text-muted-foreground">
          since {wakatime.since}
        </span>
      </div>

      {stats?.total ? (
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <div>
            <p className="text-lg font-semibold tabular-nums">{stats.total}</p>
            <p className="text-xs text-muted-foreground">{stats.range}</p>
          </div>
          {stats.dailyAverage && (
            <div>
              <p className="text-lg font-semibold tabular-nums">
                {stats.dailyAverage}
              </p>
              <p className="text-xs text-muted-foreground">daily average</p>
            </div>
          )}
        </div>
      ) : (
        !badgeFailed && (
          <img
            src={wakatime.badgeUrl}
            alt="Total time coded, tracked by WakaTime"
            className="h-5 self-start"
            loading="lazy"
            onError={() => setBadgeFailed(true)}
          />
        )
      )}

      {stats?.languages?.length > 0 ? (
        <LanguageBar languages={stats.languages} />
      ) : (
        <p className="text-xs leading-relaxed text-muted-foreground">
          Editor time tracked from Neovim and VS Code — mostly Python,
          TypeScript, and config files I keep rewriting.
        </p>
      )}

      {stats?.editors?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {stats.editors.map((e) => (
            <span
              key={e.name}
              className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {e.name} {Math.round(e.percent)}%
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
