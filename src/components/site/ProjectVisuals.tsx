/**
 * Professionelle, ruhige Projekt-Visuals als Inline-SVG (Redesign 18.11.2026).
 * Ersetzen die bisherigen Comic-/Lego-Bilder für Broki AI und AI-OS sowie die
 * Text-Kachel von TRACE AI. Warme Palette (Sand, Creme, Waldgrün), transparenter
 * Hintergrund, damit sie sich randlos in die Karten einfügen. Kein Text in den
 * Grafiken außer kurzen Labels → sprachneutral, skaliert sauber.
 */

const GREEN = "oklch(0.4 0.065 165)";
const GREEN_SOFT = "oklch(0.4 0.065 165 / 0.14)";
const INK = "oklch(0.32 0.02 60)";
const LINE = "oklch(0.32 0.02 60 / 0.16)";
const PAPER = "oklch(0.995 0.004 85)";
const SAND = "oklch(0.93 0.03 75)";
const GOLD = "oklch(0.72 0.09 75)";

type VisualProps = { className?: string };

/** TRACE AI — private KI: Daten bleiben im geschützten Kreis, Knoten arbeiten lokal. */
export function TraceVisual({ className }: VisualProps) {
  const nodes = [
    [200, 92], [278, 128], [300, 205], [250, 268], [160, 270], [104, 205], [124, 128],
  ];
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="TRACE AI – private, lokale KI">
      <defs>
        <radialGradient id="tr-glow" cx="50%" cy="56%" r="44%">
          <stop offset="0%" stopColor={GREEN} stopOpacity="0.16" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="250" fill="url(#tr-glow)" />
      <g transform="translate(0,-40)">
        <circle cx="200" cy="180" r="128" fill="none" stroke={LINE} strokeWidth="1" />
        <circle cx="200" cy="180" r="104" fill="none" stroke={GREEN} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="2 6" />
        {nodes.map(([x, y], i) => (
          <line key={`l${i}`} x1="200" y1="180" x2={x} y2={y} stroke={GREEN} strokeOpacity="0.28" strokeWidth="1.2" />
        ))}
        {nodes.map(([x, y], i) => {
          const [nx, ny] = nodes[(i + 1) % nodes.length];
          return <line key={`r${i}`} x1={x} y1={y} x2={nx} y2={ny} stroke={LINE} strokeWidth="1" />;
        })}
        {nodes.map(([x, y], i) => (
          <g key={`n${i}`}>
            <circle cx={x} cy={y} r="11" fill={PAPER} stroke={GREEN} strokeOpacity="0.5" strokeWidth="1.2" />
            <circle cx={x} cy={y} r="3.5" fill={i % 3 === 0 ? GOLD : GREEN} />
          </g>
        ))}
        {/* Kern: Schloss */}
        <circle cx="200" cy="180" r="34" fill={PAPER} stroke={GREEN} strokeWidth="1.6" />
        <rect x="187" y="178" width="26" height="20" rx="4" fill={GREEN} />
        <path d="M192 178v-6a8 8 0 0 1 16 0v6" fill="none" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
        <circle cx="200" cy="187" r="2.6" fill={PAPER} />
      </g>
    </svg>
  );
}

/** Broki AI — Assistentin im Browser: Browserfenster mit Seitenleiste, signiert & geschützt. */
export function BrokiVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="Broki AI – KI-Assistentin im Browser">
      <defs>
        <linearGradient id="bk-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={INK} stopOpacity="0.10" />
          <stop offset="100%" stopColor={INK} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Fenster */}
      <rect x="52" y="44" width="296" height="196" rx="14" fill="url(#bk-shadow)" transform="translate(4 8)" />
      <rect x="52" y="44" width="296" height="196" rx="14" fill={PAPER} stroke={LINE} />
      <path d="M52 58a14 14 0 0 1 14-14h268a14 14 0 0 1 14 14v12H52z" fill={SAND} />
      <circle cx="70" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="82" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="94" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <rect x="112" y="51" width="150" height="12" rx="6" fill={PAPER} />
      {/* Inhaltszeilen */}
      {[90, 106, 122, 146, 162, 178].map((y, i) => (
        <rect key={y} x="72" y={y} width={i % 3 === 2 ? 96 : 150} height="7" rx="3.5" fill={INK} opacity="0.1" />
      ))}
      {/* Seitenleiste der Assistentin */}
      <rect x="244" y="70" width="104" height="170" fill={GREEN_SOFT} />
      <line x1="244" y1="70" x2="244" y2="240" stroke={GREEN} strokeOpacity="0.25" />
      <circle cx="268" cy="94" r="10" fill={GREEN} />
      <path d="M263 94l3.5 3.5 6.5-7" fill="none" stroke={PAPER} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="284" y="88" width="48" height="6" rx="3" fill={GREEN} opacity="0.5" />
      <rect x="284" y="98" width="32" height="5" rx="2.5" fill={GREEN} opacity="0.3" />
      <rect x="256" y="120" width="80" height="26" rx="8" fill={PAPER} />
      <rect x="264" y="128" width="56" height="5" rx="2.5" fill={INK} opacity="0.15" />
      <rect x="264" y="136" width="40" height="5" rx="2.5" fill={INK} opacity="0.1" />
      <rect x="268" y="154" width="68" height="22" rx="8" fill={GREEN} opacity="0.85" />
      <rect x="276" y="162" width="44" height="5" rx="2.5" fill={PAPER} opacity="0.8" />
      {/* Schild / Signatur-Siegel */}
      <g transform="translate(96 168)">
        <circle r="30" fill={PAPER} stroke={GOLD} strokeWidth="1.5" />
        <circle r="24" fill="none" stroke={GOLD} strokeOpacity="0.5" strokeDasharray="2 3" />
        <path d="M0-14l11 4v7c0 8-5 13-11 16-6-3-11-8-11-16v-7z" fill={GREEN} />
        <path d="M-5 0l3.5 3.5L6-4" fill="none" stroke={PAPER} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/** AI-OS — Multi-Agenten-Plattform: sechs Architektur-Schichten, durch Agenten verbunden. */
export function AiOsVisual({ className }: VisualProps) {
  const layers = ["Interface", "Workflow", "Agents", "RAG", "Monitoring", "Infrastructure"];
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="AI-OS – Multi-Agenten-Architektur in sechs Schichten">
      {layers.map((label, i) => {
        const y = 34 + i * 33;
        const inset = i * 6;
        const isAgents = i === 2;
        return (
          <g key={label}>
            <rect
              x={70 + inset}
              y={y}
              width={260 - inset * 2}
              height="25"
              rx="8"
              fill={isAgents ? GREEN : i % 2 ? SAND : PAPER}
              stroke={isAgents ? "none" : LINE}
            />
            <text
              x={86 + inset}
              y={y + 16.5}
              fontSize="10.5"
              fontFamily="Inter, system-ui, sans-serif"
              fontWeight="600"
              letterSpacing="0.06em"
              fill={isAgents ? PAPER : INK}
              opacity={isAgents ? 1 : 0.7}
            >
              {label.toUpperCase()}
            </text>
            {isAgents &&
              [0, 1, 2, 3, 4].map((k) => (
                <circle key={k} cx={236 + k * 16 - inset} cy={y + 12.5} r="4.5" fill={PAPER} opacity={0.55 + k * 0.09} />
              ))}
          </g>
        );
      })}
      {/* Verbindungslinie durch alle Schichten */}
      <line x1="352" y1="46" x2="352" y2="211" stroke={GREEN} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 5" />
      {[46, 112, 211].map((y) => (
        <circle key={y} cx="352" cy={y} r="4" fill={y === 112 ? GOLD : GREEN} />
      ))}
    </svg>
  );
}

/** BDS Navigator – Immobilien-Verwaltung: Objektliste + Haus-Siegel */
export function BdsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="BDS Navigator – Immobilien-Verwaltung">
      <defs>
        <linearGradient id="bd-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={INK} stopOpacity="0.10" />
          <stop offset="100%" stopColor={INK} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Verwaltungs-Fenster */}
      <rect x="132" y="44" width="216" height="186" rx="14" fill="url(#bd-shadow)" transform="translate(4 8)" />
      <rect x="132" y="44" width="216" height="186" rx="14" fill={PAPER} stroke={LINE} />
      <path d="M132 58a14 14 0 0 1 14-14h188a14 14 0 0 1 14 14v12H132z" fill={SAND} />
      <circle cx="150" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="162" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="174" cy="57" r="3.5" fill={INK} opacity="0.25" />
      {/* Objekte */}
      {[86, 126, 166].map((y, i) => (
        <g key={y}>
          <rect x="148" y={y} width="184" height="30" rx="8" fill={i === 0 ? GREEN_SOFT : PAPER} stroke={LINE} />
          <path d={`M160 ${y + 20}v-7l7-6 7 6v7z`} fill={i === 0 ? GREEN : INK} opacity={i === 0 ? 1 : 0.3} />
          <rect x="184" y={y + 8} width={i === 1 ? 70 : 90} height="6" rx="3" fill={INK} opacity="0.18" />
          <rect x="184" y={y + 18} width="52" height="5" rx="2.5" fill={INK} opacity="0.1" />
          <rect x="294" y={y + 10} width="28" height="10" rx="5" fill={i === 2 ? GOLD : GREEN} opacity={i === 2 ? 0.6 : 0.55} />
        </g>
      ))}
      {/* Haus-Siegel */}
      <g transform="translate(92 140)">
        <circle r="34" fill={PAPER} stroke={GOLD} strokeWidth="1.5" />
        <circle r="27" fill="none" stroke={GOLD} strokeOpacity="0.5" strokeDasharray="2 3" />
        <path d="M-15 2l15-14 15 14v14h-30z" fill={GREEN} />
        <rect x="-4" y="6" width="8" height="10" rx="1.5" fill={PAPER} />
      </g>
    </svg>
  );
}
