/**
 * Logo (18.11.2026): Bildmarke + Wortmarke statt reinem Text "VUXUANTIEP".
 *
 * Bildmarke = Netzwerk-Monogramm: drei Knoten bilden ein „V", ein senkrechter
 * Strang zur Mitte deutet das „T" an (Vu … Tiep). Der goldene Mittelknoten
 * steht für die KI, die mit der IT verbunden ist. Waldgrün auf Creme.
 */

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="oklch(0.36 0.06 165)" />
      <g stroke="oklch(0.97 0.012 85)" strokeWidth="2.4" strokeLinecap="round">
        <line x1="11" y1="12.5" x2="20" y2="28.5" />
        <line x1="29" y1="12.5" x2="20" y2="28.5" />
        <line x1="20" y1="13.5" x2="20" y2="28.5" strokeOpacity="0.55" />
      </g>
      <circle cx="11" cy="12.5" r="3" fill="oklch(0.97 0.012 85)" />
      <circle cx="29" cy="12.5" r="3" fill="oklch(0.97 0.012 85)" />
      <circle cx="20" cy="28.5" r="3.2" fill="oklch(0.97 0.012 85)" />
      <circle cx="20" cy="13.5" r="3.4" fill="oklch(0.78 0.11 78)" />
    </svg>
  );
}

export function Logo({ tagline = true, light = false }: { tagline?: boolean; light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-9 w-9 shrink-0" />
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
