import { lazy, Suspense, useEffect, useRef, useState } from "react";

// Engine + Canvas erst laden, wenn sie wirklich gebraucht werden (eigener Chunk)
const ParticlesCanvas = lazy(() => import("./ParticlesCanvas"));

/**
 * Interaktiver Partikel-Netzwerk-Hintergrund für den Hero-Bereich.
 *
 * - lädt die tsparticles-Engine erst, wenn der Hero im Viewport ist (IntersectionObserver)
 * - respektiert prefers-reduced-motion: dann bleibt nur der statische Hintergrund
 * - reduziert die Partikelanzahl auf Mobilgeräten (< 768px)
 * - pointer-events-none: Buttons und Links darüber bleiben voll klickbar
 */
export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Barrierefreiheit: bei reduzierter Bewegung keine Animation starten —
    // das bestehende statische Punktraster des Heros bleibt als Hintergrund
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setIsMobile(window.matchMedia("(max-width: 767px)").matches);

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Maske blendet die Partikel im Content-Bereich (Mitte) aus —
  // sichtbar bleiben sie nur im Außenbereich (Ränder und unterhalb des Contents)
  const edgeMask =
    "radial-gradient(ellipse 62% 75% at 50% 42%, transparent 48%, rgba(0,0,0,0.6) 75%, black 95%)";

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0"
      style={{ maskImage: edgeMask, WebkitMaskImage: edgeMask }}
      aria-hidden="true"
    >
      {active && (
        <Suspense fallback={null}>
          <ParticlesCanvas isMobile={isMobile} />
        </Suspense>
      )}
    </div>
  );
}
