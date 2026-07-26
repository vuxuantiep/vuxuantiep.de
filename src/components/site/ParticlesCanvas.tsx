import { useMemo } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

// Wird von ParticleBackground per dynamic import geladen (eigener Chunk),
// damit die tsparticles-Engine nicht im Initial-Bundle landet.

// Akzent-Grün der Seite (entspricht --primary: oklch(0.82 0.18 150))
const PARTICLE_COLOR = "#318267";

interface ParticlesCanvasProps {
  /** Reduzierte Partikelanzahl, z. B. auf Mobilgeräten */
  isMobile: boolean;
}

export default function ParticlesCanvas({ isMobile }: ParticlesCanvasProps) {
  const options = useMemo<ISourceOptions>(
    () => ({
      // Canvas füllt nur den Hero-Container, nicht den ganzen Screen
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 60,
      // Animation pausiert automatisch, sobald der Hero aus dem Viewport scrollt
      pauseOnOutsideViewport: true,
      background: { color: "transparent" },
      particles: {
        number: {
          value: isMobile ? 40 : 120,
          density: { enable: true },
        },
        color: { value: PARTICLE_COLOR },
        shape: { type: "circle" },
        // bewusst dezent statt opacity 1, damit der Hero-Text lesbar bleibt
        opacity: { value: { min: 0.15, max: 0.55 } },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 100,
          color: PARTICLE_COLOR,
          opacity: 0.25,
          width: 1.5,
        },
        // langsame, ruhige Bewegung
        move: { enable: true, speed: 0.7, outModes: { default: "out" } },
      },
      interactivity: {
        // "window" statt "canvas": der Canvas liegt hinter dem Content,
        // so reagieren die Partikel trotzdem auf Maus über Titel/Buttons
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 200, links: { opacity: 0.7 } },
          push: { quantity: 4 },
        },
      },
    }),
    [isMobile],
  );

  return (
    <ParticlesProvider init={loadSlim}>
      <Particles id="hero-particles" options={options} className="h-full w-full" />
    </ParticlesProvider>
  );
}
