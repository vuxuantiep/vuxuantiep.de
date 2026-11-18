/**
 * Logo „Taubenflügel" (18.11.2026):
 * - Schild = Sicherheit
 * - zwei Taubenflügel aus je drei Federn = Freiheit, Unabhängigkeit, Frieden;
 *   zusammen bilden sie ein „V" (Vu)
 * - goldene Sonne = Aufbruch, Zuversicht; Waldgrün = Nachhaltigkeit
 */

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="5 3 30 35" className={className} aria-hidden="true">
      <path d="M20 4 L33 8.5 V19 C33 27.5 27.5 33.5 20 36.5 C12.5 33.5 7 27.5 7 19 V8.5 Z" fill="oklch(0.36 0.06 165)" />
      <g fill="oklch(0.97 0.012 85)">
        <path opacity="0.72" d="M20.0 28.0 Q16.0 22.7 10.9 20.9 Q9.5 20.8 10.1 22.1 Q13.6 26.2 20.0 28.0Z" />
        <path opacity="0.72" d="M20.0 28.0 Q26.4 26.2 29.9 22.1 Q30.5 20.8 29.1 20.9 Q24.0 22.7 20.0 28.0Z" />
        <path opacity="0.86" d="M20.0 28.0 Q15.7 20.5 10.0 16.5 Q8.7 16.1 9.0 17.5 Q12.7 23.4 20.0 28.0Z" />
        <path opacity="0.86" d="M20.0 28.0 Q27.3 23.4 31.0 17.5 Q31.3 16.1 30.0 16.5 Q24.3 20.5 20.0 28.0Z" />
        <path opacity="1" d="M20.0 28.0 Q17.2 18.5 12.1 12.1 Q10.9 11.4 10.9 12.9 Q13.5 20.5 20.0 28.0Z" />
        <path opacity="1" d="M20.0 28.0 Q26.5 20.5 29.1 12.9 Q29.1 11.4 27.9 12.1 Q22.8 18.5 20.0 28.0Z" />
      </g>
      <circle cx="20" cy="12.5" r="2.6" fill="oklch(0.78 0.11 78)" />
    </svg>
  );
}

export function Logo({ tagline = true, light = false }: { tagline?: boolean; light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-semibold tracking-tight ${light ? "text-[oklch(0.97_0.012_85)]" : "text-foreground"}`}>
          Vu Xuan Tiep
        </span>
        {tagline && (
          <span className={`mt-1 text-[10px] font-medium uppercase tracking-[0.18em] ${light ? "text-[oklch(0.97_0.012_85/0.7)]" : "text-primary"}`}>
            IT · KI · Souverän
          </span>
        )}
      </span>
    </span>
  );
}
