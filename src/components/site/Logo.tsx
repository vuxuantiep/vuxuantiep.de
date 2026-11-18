/**
 * Logo „Baum im Schild" (18.11.2026):
 * - Schild = Sicherheit
 * - Baum = Wachstum, Nachhaltigkeit; kräftige Wurzeln + goldene Bodenlinie
 *   = solides Fundament, Unabhängigkeit (steht auf eigenen Wurzeln)
 * - goldene Sonne = Zuversicht, Freiheit
 */

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="5 3 30 35" className={className} aria-hidden="true">
      <path d="M20 4 L33 8.5 V19 C33 27.5 27.5 33.5 20 36.5 C12.5 33.5 7 27.5 7 19 V8.5 Z" fill="oklch(0.36 0.06 165)" />
      <circle cx="20" cy="9.4" r="2.2" fill="oklch(0.78 0.11 78)" />
      <circle cx="20" cy="16.4" r="6.1" fill="oklch(0.97 0.012 85)" />
      <path d="M19.1 21.6 L20.9 21.6 L21.4 26.8 L18.6 26.8 Z" fill="oklch(0.97 0.012 85)" />
      <g fill="none" stroke="oklch(0.36 0.06 165)" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 22 L20 12.2" />
      <path d="M20 18.6 L16.4 14.4" />
      <path d="M20 16.4 L23.4 12.8" />
      <path d="M20 20.2 L24 16.8" />
      <path d="M16.4 14.4 L15.2 12.6" />
      <path d="M20 19.4 L15.6 17.6" />
      </g>
      <g fill="none" stroke="oklch(0.97 0.012 85)" strokeWidth="1.25" strokeLinecap="round">
        <path d="M20 26.4 C18.6 27.6 16 28.8 13.4 30.2" />
        <path d="M20 26.6 C19 28.2 17.6 30 16.4 31.6" />
        <path d="M20 26.8 L20 32.4" />
        <path d="M20 26.6 C21 28.2 22.4 30 23.6 31.6" />
        <path d="M20 26.4 C21.4 27.6 24 28.8 26.6 30.2" />
      </g>
      <path d="M12.6 26.8 L27.4 26.8" stroke="oklch(0.78 0.11 78)" strokeWidth="0.7" strokeLinecap="round" />
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
