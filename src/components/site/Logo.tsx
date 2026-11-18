/**
 * Logo „Taube im Schild" (18.11.2026):
 * - Schild = Sicherheit
 * - aufsteigende Taube = Freiheit, Unabhängigkeit, Frieden
 * - goldene Sonne = Aufbruch, Zuversicht; Waldgrün = Nachhaltigkeit
 */

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="5 3 30 35" className={className} aria-hidden="true">
      <path d="M20 4 L33 8.5 V19 C33 27.5 27.5 33.5 20 36.5 C12.5 33.5 7 27.5 7 19 V8.5 Z" fill="oklch(0.36 0.06 165)" />
      <circle cx="28.5" cy="9.6" r="2.3" fill="oklch(0.78 0.11 78)" />
      <g fill="oklch(0.97 0.012 85)">
        <path opacity="0.78" d="M21 21 C20.6 16.8 21.2 12.8 23 10 C24.2 13.2 25.2 16.4 25.2 19.6 Z" />
        <path d="M11 28.3 L14.6 26.6 C17 24.2 20.5 22 23.4 20.4 C24.6 19.6 25.3 18.2 25.7 16.8 C26.2 14.6 28.4 13.6 29.6 14.8 L31.4 15.6 L29.8 16.4 C30 18.8 28.6 21.6 26 23.4 C23 25.6 19.4 27.2 16 28 L13.6 31.4 L12.6 29.9 L11.3 30.6 L12.2 28.9 Z" />
        <path d="M18.8 22.6 C15.6 19.6 13.6 15.2 14.2 10.2 C15.8 11.4 17.4 12.4 18.6 13.4 C19 12.4 19.4 11.6 20 11 C21 14.4 22.8 17.6 23.6 20 Z" />
      </g>
      <circle cx="28.4" cy="15.9" r="0.55" fill="oklch(0.36 0.06 165)" />
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
