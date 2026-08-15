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
      className="flex h-full flex-col justify-between gap-3 border border-border bg-card p-3 transition-colors hover:border-prompt"
    >
      <div className="flex items-baseline justify-between gap-3 text-xs">
        <span className="lowercase">
          <span className="text-prompt">$</span> wakatime --last-7-days
        </span>
        <span className="shrink-0 lowercase text-muted-foreground">
          since {wakatime.since.toLowerCase()}
        </span>
      </div>

      {stats?.total ? (
        <div className="space-y-0.5 text-xs lowercase">
          <p>
            <span className="mr-1 text-muted-foreground">{stats.range}</span>
            <span className="tabular-nums">{stats.total}</span>
          </p>
          {stats.dailyAverage && (
            <p>
              <span className="mr-1 text-muted-foreground">daily avg</span>
              <span className="tabular-nums">{stats.dailyAverage}</span>
            </p>
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
        <p className="text-xs lowercase leading-relaxed text-muted-foreground">
          editor time tracked from neovim — mostly python, typescript, and
          config files i keep rewriting.
        </p>
      )}

      {stats?.editors?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {stats.editors.map((e) => (
            <span
              key={e.name}
              className="border border-border px-1.5 py-0.5 text-xs lowercase text-secondary-foreground"
            >
              {e.name} {Math.round(e.percent)}%
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
