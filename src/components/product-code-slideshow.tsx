'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, RotateCcw } from 'lucide-react';
import { useLang } from '@/contexts/LangContext';
import { useState, useEffect } from 'react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
}

interface StoryPhase {
  title: string;
  description: string;
  codeLines: string[];
}

const FILE_PATH = 'packages/factory/src/evolution.ts';
const LANGUAGE = 'TypeScript';

// Reihenfolge entspricht der Nummerierung der Dateien in src/animation (0–6).
const MEDIA: MediaItem[] = [
  { type: 'image', src: '/animation/0.png' },
  { type: 'image', src: '/animation/1.png' },
  { type: 'video', src: '/animation/2.mp4' },
  { type: 'video', src: '/animation/3.mp4' },
  { type: 'video', src: '/animation/4.mp4' },
  { type: 'image', src: '/animation/5.png' },
  { type: 'image', src: '/animation/6.png' },
];

const PHASES: StoryPhase[] = [
  {
    title: 'Idee',
    description: 'Wie bauen wir eine Fabrik aus wiederverwendbaren KI-Agenten?',
    codeLines: ['// Phase 1 — Idee', '// Ziel: Agenten wie LEGO kombinieren', '', 'interface AgentSpec {', '  role: string;', '  skills: string[];', '  memory?: Memory;', '}'],
  },
  {
    title: 'Architektur',
    description: 'Modulare Registry mit Intent-Routing und Memory-Layer.',
    codeLines: ['// Phase 2 — Architektur', 'import { Registry } from "@lego/core";', 'import { Memory } from "@lego/memory";', '', 'const registry = new Registry({', '  routing: "intent-aware",', '  memory: new Memory({ model: "nomic-768" })', '});'],
  },
  {
    title: 'Implementierung',
    description: 'Stack aus Planner, Retriever und Writer wird zusammengebaut.',
    codeLines: ['// Phase 3 — Implementierung', 'const stack = ["planner", "retriever", "writer"];', '', 'export const agents = AgentRegistry.build({', '  stack,', '  routing: "intent-aware",', '  autonomy: "high"', '});'],
  },
  {
    title: 'Betrieb',
    description: 'Die Fabrik läuft autonom und skaliert in Produktion.',
    codeLines: ['// Phase 4 — Produktiv', 'agents.deploy("prod-eu-central-1");', '', '// 12 Agents deployed in 8s', '// Autonomy loop: OK', '// Observability: ENABLED'],
  },
];

const CHAR_DELAY_MS = 38;
const PHASE_HOLD_MS = 3200;
const MEDIA_HOLD_MS = 6500;

function getDisplayedText(lines: string[], typedChars: number) {
  const totalChars = lines.reduce((sum, line) => sum + line.length, 0);
  const target = Math.max(0, Math.min(typedChars, totalChars));
  let remaining = target;
  return lines
    .map((line) => {
      if (remaining <= 0) return '';
      const take = Math.min(line.length, remaining);
      remaining -= take;
      return line.slice(0, take);
    })
    .join('\n');
}

export function ProductCodeSlideshow() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const replay = () => {
    setCurrentPhaseIndex(0);
    setTypedChars(0);
    setMediaIndex(0);
    setRunId((r) => r + 1);
  };

  // Medien laufen die Nummerierung genau einmal durch und bleiben beim letzten stehen.
  useEffect(() => {
    if (!mounted || mediaIndex + 1 >= MEDIA.length) return;
    const timer = setTimeout(() => setMediaIndex(mediaIndex + 1), MEDIA_HOLD_MS);
    return () => clearTimeout(timer);
  }, [mounted, mediaIndex, runId]);

  useEffect(() => {
    if (!mounted) return;

    const isLastPhase = currentPhaseIndex + 1 >= PHASES.length;
    const totalCharsInPhase = PHASES[currentPhaseIndex].codeLines.reduce(
      (sum, line) => sum + line.length,
      0
    );

    let chars = 0;
    let timer: ReturnType<typeof setTimeout>;
    setTypedChars(0);

    const typeNext = () => {
      chars += 1;
      setTypedChars(chars);
      if (chars >= totalCharsInPhase) {
        // Ein einziger Durchlauf: nach der letzten Phase stoppt die Animation.
        if (!isLastPhase) {
          timer = setTimeout(() => setCurrentPhaseIndex(currentPhaseIndex + 1), PHASE_HOLD_MS);
        }
      } else {
        timer = setTimeout(typeNext, CHAR_DELAY_MS);
      }
    };

    timer = setTimeout(typeNext, CHAR_DELAY_MS);
    return () => clearTimeout(timer);
  }, [mounted, currentPhaseIndex, runId]);

  const currentPhase = PHASES[currentPhaseIndex] ?? PHASES[0];
  const currentMedia = MEDIA[mediaIndex] ?? MEDIA[0];
  const totalChars = currentPhase.codeLines.reduce((sum, line) => sum + line.length, 0);
  const displayed = getDisplayedText(currentPhase.codeLines, typedChars);
  const isTyping = typedChars < totalChars;

  if (!mounted) {
    return (
      <div className="relative rounded-xl border border-zinc-800 bg-[#0d0d0f] shadow-2xl h-[420px]" />
    );
  }

  return (
    <div className="relative">
      {/* Licht-Effekt hinter dem Fenster */}
      <div
        aria-hidden
        className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-emerald-500/10 blur-2xl"
      />
      <div className="relative rounded-xl border border-zinc-800 bg-[#0d0d0f] overflow-hidden shadow-2xl">
      {/* Sanfter Lichtschein am oberen Fensterrand */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-400/[0.04] to-transparent"
      />

      <div className="flex items-center gap-2 border-b border-zinc-800/80 bg-[#111114] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="ml-3 text-[11px] text-zinc-500 font-mono truncate">{FILE_PATH}</span>
        <span className="ml-auto shrink-0 text-[11px] rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-zinc-400">{LANGUAGE}</span>
        <button
          type="button"
          onClick={replay}
          aria-label={t('Nochmal abspielen', 'Replay', 'Phát lại')}
          title={t('Nochmal abspielen', 'Replay', 'Phát lại')}
          className="shrink-0 rounded-md p-1 text-zinc-500 transition-colors hover:bg-zinc-800/70 hover:text-emerald-300"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="min-w-0 p-5 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentPhaseIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex h-full flex-col gap-2"
            >
              <div className="text-[11px] font-medium text-emerald-400/90">
                {t('Phase', 'Phase', 'Giai đoạn')} {currentPhaseIndex + 1}/{PHASES.length}
              </div>
              <div className="text-xs text-zinc-300 min-h-[48px]">
                <span className="text-zinc-100 font-medium">{currentPhase.title}:</span>{' '}
                {currentPhase.description}
              </div>
              <div className="p-3 font-mono text-[12px] leading-relaxed text-zinc-300 h-[190px] overflow-hidden">
                <pre className="whitespace-pre-wrap break-words">
                  {displayed}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
                      className="ml-[3px] inline-block h-3 w-[8px] bg-emerald-400/90 align-middle shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                    />
                  )}
                </pre>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <div className="flex items-center gap-1">
                  {PHASES.map((_, idx) => (
                    <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx <= currentPhaseIndex ? 'w-4 bg-emerald-400' : 'w-2 bg-zinc-700'}`} />
                  ))}
                </div>
                <ChevronRight className="h-3 w-3 text-zinc-500" />
                <div className="text-[11px] text-zinc-500 truncate">
                  {t('AI-Agenten Fabrik-LEGO', 'AI-Agent Factory-LEGO', 'AI-Agent Fabrik-LEGO')}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="min-w-0 p-5 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mediaIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col"
            >
              <div className="flex h-[240px] lg:h-[262px] items-center justify-center overflow-hidden rounded-lg">
                {currentMedia.type === 'video' ? (
                  <video
                    src={currentMedia.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full max-w-full object-contain"
                  />
                ) : (
                  <img
                    src={currentMedia.src}
                    alt="AI-Agenten Fabrik-LEGO"
                    className="h-full w-full max-w-full object-contain"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-3 flex items-center justify-end">
            <a
              href="https://ai-os.vuxuantiep.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 whitespace-nowrap text-[11px] font-medium text-emerald-300 transition-colors hover:text-emerald-200"
            >
              <img src="/animation/6.png" alt="LEGO AI" className="h-6 w-6 shrink-0 object-contain" />
              <span className="underline decoration-emerald-500/40 underline-offset-4 group-hover:decoration-emerald-300">LEGO AI</span>
              <ArrowRight className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
