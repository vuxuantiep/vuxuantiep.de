// Coding-Agent-Benchmarks: manuell gepflegtes Mini-Dashboard.
//
// Hintergrund: Die Balkendiagramm-Werte auf artificialanalysis.ai/agents/coding-agents
// werden erst im Browser per JavaScript aus einer privaten Datenquelle geladen (nicht
// im HTML enthalten) und sind auch über die offizielle Data-API des Anbieters nicht
// abrufbar — dort gibt es keinen Endpunkt für diesen Harness-Vergleich. Ein täglicher
// automatischer Abruf ist deshalb nicht möglich; die Werte werden hier von Hand gepflegt.
//
// Aktualisieren: Seite öffnen, aktuelle Top-Werte je Diagramm ablesen, unten eintragen
// und UPDATED_AT anpassen. Namen bei Bedarf korrigieren — die Beschriftungen auf der
// Quellseite sind klein und rotiert, daher hier teils vereinfacht übernommen.

export interface BenchmarkEntry {
  name: string;
  value: number;
}

export interface BenchmarkChart {
  key: "index" | "time" | "cost";
  title: { de: string; en: string; vi: string };
  subtitle: { de: string; en: string; vi: string };
  unit: string;
  accent: "primary" | "blue" | "amber";
  entries: BenchmarkEntry[];
}

export const CODING_AGENT_BENCHMARKS = {
  updatedAt: "2026-07-26",
  sourceLabel: "Artificial Analysis",
  sourceUrl: "https://artificialanalysis.ai/agents/coding-agents",
  charts: [
    {
      key: "index",
      title: { de: "Kodierungsagentenindex", en: "Coding Agent Index", vi: "Chỉ số Agent lập trình" },
      subtitle: {
        de: "Höher ist besser",
        en: "Higher is better",
        vi: "Càng cao càng tốt",
      },
      unit: "",
      accent: "primary",
      entries: [
        { name: "Claude Code (Opus 5)", value: 67 },
        { name: "Codex CLI (GPT-5.6)", value: 67 },
        { name: "Grok Code (xAI)", value: 66 },
        { name: "Gemini CLI (Pro)", value: 61 },
        { name: "Cursor Composer", value: 54 },
      ],
    },
    {
      key: "time",
      title: { de: "Zeit pro Aufgabe", en: "Time per Task", vi: "Thời gian mỗi tác vụ" },
      subtitle: {
        de: "Tiefer ist besser",
        en: "Lower is better",
        vi: "Càng thấp càng tốt",
      },
      unit: "m",
      accent: "blue",
      entries: [
        { name: "Cursor Composer", value: 6.8 },
        { name: "Codex CLI (GPT-5.6)", value: 10.2 },
        { name: "Grok Code (xAI)", value: 10.8 },
        { name: "Gemini CLI (Pro)", value: 12.6 },
        { name: "OpenCode", value: 16.5 },
      ],
    },
    {
      key: "cost",
      title: { de: "Kosten pro Aufgabe", en: "Cost per Task", vi: "Chi phí mỗi tác vụ" },
      subtitle: {
        de: "USD · tiefer ist besser",
        en: "USD · lower is better",
        vi: "USD · càng thấp càng tốt",
      },
      unit: "$",
      accent: "amber",
      entries: [
        { name: "DeepSeek", value: 0.27 },
        { name: "Cursor Composer", value: 0.55 },
        { name: "OpenCode", value: 1.43 },
        { name: "Grok Code (xAI)", value: 2.0 },
        { name: "Gemini CLI (Pro)", value: 2.59 },
      ],
    },
  ] satisfies BenchmarkChart[],
};
