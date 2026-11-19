/**
 * Logo „Freiheitsvogel" (Variante B, vom CEO gewählt 18.11.2026):
 * - Schild = Sicherheit
 * - zwei Blätter = Nachhaltigkeit; zusammen bilden sie Flügel (Freiheit,
 *   Unabhängigkeit) und ein „V" (Vu)
 * - goldene Sonne = Aufbruch, Zuversicht
 */

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="5 3 30 35" className={className} aria-hidden="true">
      <path d="M20 4 L33 8.5 V19 C33 27.5 27.5 33.5 20 36.5 C12.5 33.5 7 27.5 7 19 V8.5 Z" fill="oklch(0.36 0.06 165)" />
      <path d="M20 29 C13.5 27.5 10 21.5 10 14.5 C16 16 19.5 21 20 29 Z" fill="oklch(0.97 0.012 85)" />
      <path d="M20 29 C21 20.5 25 14.5 30.5 12 C31.2 19.5 27 26.5 20 29 Z" fill="oklch(0.97 0.012 85)" />
      {/* Sonne ruhig in Gold – passend zum goldenen i-Punkt im Namen (18.11.2026); Sonne + Blätter am 19.11. kräftiger, damit das Zeichen neben der ExtraBold-Schrift trägt */}
      <circle cx="20" cy="12" r="3.2" fill="oklch(0.8 0.13 80)" />
    </svg>
  );
}

// Wortmarke (19.11.2026, vom CEO gewählt: Variante D): Be Vietnam Pro ExtraBold,
// kleingeschrieben und eng gesetzt wie eine Marke. Das „t" ist eine eigene
// Form nach CEO-Vorlage (Kopf und Querstrich in einer durchgehenden Schräge,
// Fuß als waagerechter Schwung nach rechts), auf Höhe und Grundlinie der
// Schrift abgestimmt. Dunkelgrün wie das Schild, i-Punkt = goldene Sonne.
function LogoT() {
  return (
    <svg className="logo-t" viewBox="1 15 74 119" aria-hidden="true" focusable="false">
      <path d="M1 59 L42 15 H50 V38 H73 V59 H50 V98 C50 104 53 108 60 108 H75 V134 H48 C27 134 18 124 18 104 V59 Z" />
    </svg>
  );
}

export function Logo({ light = false }: { tagline?: boolean; light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-11 w-11 shrink-0" />
      <span
        className={`logo-wordmark whitespace-nowrap text-[27px] leading-none ${light ? "text-[oklch(0.97_0.012_85)]" : "text-[oklch(0.36_0.06_165)]"}`}
        aria-label="Vu Xuan Tiep"
      >
        <span aria-hidden="true">
          vu xuan <LogoT />
          <span className="relative inline-block">
            ı<span className="logo-sun-dot" />
          </span>
          ep
        </span>
      </span>
    </span>
  );
}
