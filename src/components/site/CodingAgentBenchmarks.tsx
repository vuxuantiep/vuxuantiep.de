import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { CODING_AGENT_BENCHMARKS, type BenchmarkChart } from "@/lib/coding-agent-benchmarks";

// Kleines, manuell gepflegtes Vergleichs-Dashboard für Coding-Agenten.
// Hintergrund und Pflegehinweise: siehe src/lib/coding-agent-benchmarks.ts

const ACCENT_CLASSES: Record<BenchmarkChart["accent"], { text: string; bar: string; track: string }> = {
  primary: { text: "text-primary", bar: "bg-primary", track: "bg-primary/10" },
  blue: { text: "text-blue-400", bar: "bg-blue-400", track: "bg-blue-400/10" },
  amber: { text: "text-amber-400", bar: "bg-amber-400", track: "bg-amber-400/10" },
};

function formatValue(value: number, unit: string) {
  const num = Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0$/, "");
  return unit === "$" ? `${num} $` : `${num}${unit}`;
}

function ChartCard({ chart }: { chart: BenchmarkChart }) {
  const { t } = useLang();
  const colors = ACCENT_CLASSES[chart.accent];
  const max = Math.max(...chart.entries.map((e) => e.value));

  return (
    <div className="rounded-xl border border-border bg-surface/50 p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className={`h-2 w-2 rounded-sm ${colors.bar}`} />
        <h3 className="text-sm font-semibold">{t(chart.title.de, chart.title.en, chart.title.vi)}</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-5">{t(chart.subtitle.de, chart.subtitle.en, chart.subtitle.vi)}</p>
      <div className="space-y-3">
        {chart.entries.map((entry, i) => (
          <div key={entry.name}>
            <div className="flex items-baseline justify-between gap-2 mb-1 text-xs">
              <span className="min-w-0 flex-1 truncate text-muted-foreground">{entry.name}</span>
              <span className={`shrink-0 font-medium ${colors.text}`}>{formatValue(entry.value, chart.unit)}</span>
            </div>
            <div className={`h-1.5 w-full rounded-full overflow-hidden ${colors.track}`}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(entry.value / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                className={`h-full rounded-full ${colors.bar}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CodingAgentBenchmarks() {
  const { t, lang } = useLang();
  const data = CODING_AGENT_BENCHMARKS;
  const locale = lang === "DE" ? "de-DE" : lang === "VI" ? "vi-VN" : "en-US";
  const updatedLabel = new Date(data.updatedAt).toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.charts.map((chart) => (
          <ChartCard key={chart.key} chart={chart} />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
        <span>{t("Manuell gepflegt", "Manually maintained", "Cập nhật thủ công")} · {t("Stand", "As of", "Cập nhật")}: {updatedLabel}</span>
        <a
          href={data.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-foreground"
        >
          {t("Quelle", "Source", "Nguồn")}: {data.sourceLabel} <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
