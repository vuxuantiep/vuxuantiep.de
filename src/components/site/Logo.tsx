/**
 * Logo „Friedenstaube im Schild" (18.11.2026):
 * - Schild = Sicherheit
 * - Taube von vorne mit ausgebreiteten Flügeln (aus der Blatt-Variante
 *   weiterentwickelt, gleiche Anordnung) = Freiheit, Unabhängigkeit, Frieden;
 *   die Flügel bilden zugleich ein „V" (Vu)
 * - goldene Sonne = Aufbruch, Zuversicht; Waldgrün = Nachhaltigkeit
 */

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="5 3 30 35" className={className} aria-hidden="true">
      <path d="M20 4 L33 8.5 V19 C33 27.5 27.5 33.5 20 36.5 C12.5 33.5 7 27.5 7 19 V8.5 Z" fill="oklch(0.36 0.06 165)" />
      <circle cx="20" cy="10.6" r="2.2" fill="oklch(0.78 0.11 78)" />
      <g fill="oklch(0.97 0.012 85)">
        <path d="M19.4 21.8 C17.2 18.6 14 15 12.2 11.6 C11.4 12.4 11.1 13.6 11.6 14.4 C10.6 15.1 10.4 16.4 11.1 17.3 C10.3 18.3 10.6 19.6 11.6 20.1 C14 22.2 16.6 23.6 19.2 24 Z" />
        <path d="M20.6 21.8 C22.8 18.6 26.0 15 27.8 11.6 C28.6 12.4 28.9 13.6 28.4 14.4 C29.4 15.1 29.6 16.4 28.9 17.3 C29.7 18.3 29.4 19.6 28.4 20.1 C26.0 22.2 23.4 23.6 20.8 24 Z" />
        <path d="M20 26.6 L17.9 30.8 L19.1 30.4 L20 31.9 L20.9 30.4 L22.1 30.8 Z" />
        <path d="M20 18.8 C21.6 19.4 22 22.6 21.4 25.4 C21.1 26.6 20.6 27.3 20 27.6 C19.4 27.3 18.9 26.6 18.6 25.4 C18 22.6 18.4 19.4 20 18.8 Z" />
        <circle cx="20.2" cy="17.3" r="1.9" />
        <path d="M21.8 16.8 L23.6 17.5 L21.8 18 Z" />
      </g>
      <circle cx="20.7" cy="16.9" r="0.42" fill="oklch(0.36 0.06 165)" />
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
