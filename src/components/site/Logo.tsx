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
      <path d="M20 28 C14.5 26.5 11 21 11 15 C16 16.5 19 21 20 28 Z" fill="oklch(0.97 0.012 85)" />
      <path d="M20 28 C21.5 20.5 25 15 30 12.5 C30.5 19.5 26.5 25.5 20 28 Z" fill="oklch(0.97 0.012 85)" />
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
