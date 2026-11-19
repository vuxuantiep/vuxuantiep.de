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

/** Justiz-IT – E-Akte für 13 Fachgerichte: Aktenfenster + Gerichts-Siegel (Säulen). */
export function JustizVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="E-Akte und IT-Betrieb in der Justiz">
      <defs>
        <linearGradient id="ju-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={INK} stopOpacity="0.10" />
          <stop offset="100%" stopColor={INK} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* E-Akten-Fenster */}
      <rect x="132" y="44" width="216" height="186" rx="14" fill="url(#ju-shadow)" transform="translate(4 8)" />
      <rect x="132" y="44" width="216" height="186" rx="14" fill={PAPER} stroke={LINE} />
      <path d="M132 58a14 14 0 0 1 14-14h188a14 14 0 0 1 14 14v12H132z" fill={SAND} />
      <circle cx="150" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="162" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="174" cy="57" r="3.5" fill={INK} opacity="0.25" />
      {/* Akten mit Status */}
      {[84, 120, 156, 192].map((y, i) => (
        <g key={y}>
          <path d={`M150 ${y}h14l4 4h16v18h-34z`} fill={i === 1 ? GREEN : INK} opacity={i === 1 ? 0.9 : 0.22} />
          <rect x="196" y={y + 4} width={i % 2 ? 76 : 96} height="6" rx="3" fill={INK} opacity="0.18" />
          <rect x="196" y={y + 14} width="48" height="5" rx="2.5" fill={INK} opacity="0.1" />
          <circle cx="320" cy={y + 11} r="8" fill={i === 3 ? GOLD : GREEN} opacity={i === 3 ? 0.55 : 0.85} />
          {i !== 3 && <path d={`M316 ${y + 11}l3 3 5-6`} fill="none" stroke={PAPER} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />}
        </g>
      ))}
      {/* Gerichts-Siegel */}
      <g transform="translate(92 140)">
        <circle r="34" fill={PAPER} stroke={GOLD} strokeWidth="1.5" />
        <circle r="27" fill="none" stroke={GOLD} strokeOpacity="0.5" strokeDasharray="2 3" />
        <path d="M-16-6L0-16l16 10z" fill={GREEN} />
        {[-11, -3.5, 4].map((x) => (
          <rect key={x} x={x} y="-4" width="7" height="15" rx="1" fill={GREEN} />
        ))}
        <rect x="-16" y="12" width="32" height="4" rx="1" fill={GREEN} />
      </g>
    </svg>
  );
}

/** Klinik – Go-Live-Support im laufenden Betrieb: Stationsplan mit Fortschritt + Kreuz-Siegel. */
export function KlinikVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="Go-Live-Support im Klinikbetrieb">
      <defs>
        <linearGradient id="kl-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={INK} stopOpacity="0.10" />
          <stop offset="100%" stopColor={INK} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="132" y="44" width="216" height="186" rx="14" fill="url(#kl-shadow)" transform="translate(4 8)" />
      <rect x="132" y="44" width="216" height="186" rx="14" fill={PAPER} stroke={LINE} />
      <path d="M132 58a14 14 0 0 1 14-14h188a14 14 0 0 1 14 14v12H132z" fill={SAND} />
      <circle cx="150" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="162" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="174" cy="57" r="3.5" fill={INK} opacity="0.25" />
      {/* Stationen mit Go-Live-Fortschritt */}
      {[
        [86, 1],
        [120, 1],
        [154, 0.75],
        [188, 0.4],
      ].map(([y, p]) => (
        <g key={y}>
          <rect x="150" y={y} width="44" height="7" rx="3.5" fill={INK} opacity="0.2" />
          <rect x="150" y={y + 12} width="28" height="5" rx="2.5" fill={INK} opacity="0.1" />
          <rect x="210" y={y + 4} width="118" height="10" rx="5" fill={GREEN_SOFT} />
          <rect x="210" y={y + 4} width={118 * p} height="10" rx="5" fill={p === 1 ? GREEN : GOLD} opacity={p === 1 ? 0.85 : 0.6} />
        </g>
      ))}
      {/* Kreuz-Siegel */}
      <g transform="translate(92 140)">
        <circle r="34" fill={PAPER} stroke={GOLD} strokeWidth="1.5" />
        <circle r="27" fill="none" stroke={GOLD} strokeOpacity="0.5" strokeDasharray="2 3" />
        <path d="M-5-16h10v11h11v10H5v11H-5V5h-11V-5h11z" fill={GREEN} />
      </g>
    </svg>
  );
}

/** Energieversorger – Rollout von rund 800 Arbeitsplätzen: Geräte-Raster mit Status + Blitz-Siegel. */
export function RolloutVisual({ className }: VisualProps) {
  const cells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="Rollout von Arbeitsplätzen beim Energieversorger">
      <defs>
        <linearGradient id="ro-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={INK} stopOpacity="0.10" />
          <stop offset="100%" stopColor={INK} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="132" y="44" width="216" height="186" rx="14" fill="url(#ro-shadow)" transform="translate(4 8)" />
      <rect x="132" y="44" width="216" height="186" rx="14" fill={PAPER} stroke={LINE} />
      <path d="M132 58a14 14 0 0 1 14-14h188a14 14 0 0 1 14 14v12H132z" fill={SAND} />
      <circle cx="150" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="162" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="174" cy="57" r="3.5" fill={INK} opacity="0.25" />
      {/* Arbeitsplätze: Monitor-Symbole, die meisten fertig */}
      {cells.map((i) => {
        const x = 152 + (i % 3) * 62;
        const y = 84 + Math.floor(i / 3) * 46;
        const done = i < 7;
        return (
          <g key={i}>
            <rect x={x} y={y} width="50" height="30" rx="5" fill={done ? GREEN_SOFT : PAPER} stroke={LINE} />
            <rect x={x + 19} y={y + 30} width="12" height="6" fill={INK} opacity="0.18" />
            <rect x={x + 13} y={y + 36} width="24" height="3" rx="1.5" fill={INK} opacity="0.18" />
            {done ? (
              <path d={`M${x + 18} ${y + 15}l5 5 9-10`} fill="none" stroke={GREEN} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <circle cx={x + 25} cy={y + 15} r="5" fill={GOLD} opacity="0.6" />
            )}
          </g>
        );
      })}
      {/* Energie-Siegel */}
      <g transform="translate(92 140)">
        <circle r="34" fill={PAPER} stroke={GOLD} strokeWidth="1.5" />
        <circle r="27" fill="none" stroke={GOLD} strokeOpacity="0.5" strokeDasharray="2 3" />
        <path d="M3-17L-10 3h9l-3 14L10-3H1z" fill={GREEN} />
      </g>
    </svg>
  );
}

/** Steuerkanzlei – komplette IT aus einer Hand: Arbeitsplätze am Server, Paragraf-Siegel. */
export function KanzleiVisual({ className }: VisualProps) {
  const pcs = [
    [170, 92], [250, 92], [170, 176], [250, 176],
  ];
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="Komplette IT für eine Steuerkanzlei">
      <defs>
        <linearGradient id="ka-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={INK} stopOpacity="0.10" />
          <stop offset="100%" stopColor={INK} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="132" y="44" width="216" height="186" rx="14" fill="url(#ka-shadow)" transform="translate(4 8)" />
      <rect x="132" y="44" width="216" height="186" rx="14" fill={PAPER} stroke={LINE} />
      <path d="M132 58a14 14 0 0 1 14-14h188a14 14 0 0 1 14 14v12H132z" fill={SAND} />
      <circle cx="150" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="162" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="174" cy="57" r="3.5" fill={INK} opacity="0.25" />
      {pcs.map(([x, y]) => (
        <line key={`l${x}-${y}`} x1={x + 20} y1={y + 12} x2="240" y2="140" stroke={GREEN} strokeOpacity="0.35" strokeWidth="1.4" strokeDasharray="3 4" />
      ))}
      {pcs.map(([x, y]) => (
        <g key={`p${x}-${y}`}>
          <rect x={x} y={y} width="40" height="24" rx="4" fill={GREEN_SOFT} stroke={LINE} />
          <rect x={x + 15} y={y + 24} width="10" height="5" fill={INK} opacity="0.18" />
        </g>
      ))}
      <rect x="222" y="122" width="36" height="38" rx="5" fill={GREEN} opacity="0.9" />
      {[130, 139, 148].map((y) => (
        <g key={y}>
          <rect x="228" y={y} width="16" height="4" rx="2" fill={PAPER} opacity="0.7" />
          <circle cx="251" cy={y + 2} r="2" fill={GOLD} />
        </g>
      ))}
      <g transform="translate(92 140)">
        <circle r="34" fill={PAPER} stroke={GOLD} strokeWidth="1.5" />
        <circle r="27" fill="none" stroke={GOLD} strokeOpacity="0.5" strokeDasharray="2 3" />
        <text x="0" y="11" textAnchor="middle" fontSize="32" fontWeight="700" fill={GREEN} fontFamily="Georgia, serif">§</text>
      </g>
    </svg>
  );
}

/** IT-Outsourcing – Team über Grenzen: Code-Fenster, zwei verbundene Standorte, Globus-Siegel. */
export function OutsourcingVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="IT-Outsourcing mit einem Team über Ländergrenzen">
      <defs>
        <linearGradient id="ou-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={INK} stopOpacity="0.10" />
          <stop offset="100%" stopColor={INK} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="132" y="44" width="216" height="186" rx="14" fill="url(#ou-shadow)" transform="translate(4 8)" />
      <rect x="132" y="44" width="216" height="186" rx="14" fill={PAPER} stroke={LINE} />
      <path d="M132 58a14 14 0 0 1 14-14h188a14 14 0 0 1 14 14v12H132z" fill={SAND} />
      <circle cx="150" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="162" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <circle cx="174" cy="57" r="3.5" fill={INK} opacity="0.25" />
      <path d="M156 92l-8 8 8 8M176 92l8 8-8 8" fill="none" stroke={GREEN} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={196 + (i % 2) * 14} y={90 + i * 8} width={i === 2 ? 70 : 110 - i * 12} height="5" rx="2.5" fill={INK} opacity={0.1 + (i % 2) * 0.06} />
      ))}
      <path d="M182 180 C 220 150, 262 150, 300 180" fill="none" stroke={GREEN} strokeOpacity="0.45" strokeWidth="1.6" strokeDasharray="4 4" />
      {[[182, 180], [300, 180]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="17" fill={PAPER} stroke={GREEN} strokeOpacity="0.5" strokeWidth="1.3" />
          <circle cx={x} cy={y - 4} r="5" fill={i ? GOLD : GREEN} />
          <path d={`M${x - 8} ${y + 9}a8 7 0 0 1 16 0`} fill={i ? GOLD : GREEN} />
        </g>
      ))}
      <g transform="translate(92 140)">
        <circle r="34" fill={PAPER} stroke={GOLD} strokeWidth="1.5" />
        <circle r="27" fill="none" stroke={GOLD} strokeOpacity="0.5" strokeDasharray="2 3" />
        <circle r="15" fill="none" stroke={GREEN} strokeWidth="2.4" />
        <ellipse rx="6.5" ry="15" fill="none" stroke={GREEN} strokeWidth="2" />
        <line x1="-15" y1="0" x2="15" y2="0" stroke={GREEN} strokeWidth="2" />
      </g>
    </svg>
  );
}
