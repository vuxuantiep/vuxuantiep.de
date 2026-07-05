'use client';

import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { useLang } from '@/contexts/LangContext';
import { useState, useEffect } from 'react';
import type { Language } from '../../lib/i18n';

interface StoryPhase {
  title: string;
  description: string;
  codeLines: string[];
}

interface ProductStory {
  id: string;
  phases: StoryPhase[];
  language: string;
  filePath: string;
  imageUrl: string;
}

const productTitles: Record<string, Record<Language, string>> = {
  'lego-factory': { DE: 'AI-Agenten Fabrik-LEGO', EN: 'AI-Agent Factory-LEGO', VI: 'AI-Agent Fabrik-LEGO' },
  'bds-navigator': { DE: 'BDS-Navigator', EN: 'BDS-Navigator', VI: 'BDS-Navigator' },
};

const PRODUCTS: ProductStory[] = [
  {
    id: 'lego-factory',
    language: 'TypeScript',
    filePath: 'packages/factory/src/evolution.ts',
    imageUrl: '/images/AI-OS/68a07710-9bd3-4285-af62-53efa9849800.png',
    phases: [
      { title: 'Idee', description: 'Wie bauen wir eine Fabrik aus wiederverwendbaren KI-Agenten?', codeLines: ['// Phase 1 — Idee', '// Ziel: Agenten wie LEGO kombinieren', '', 'interface AgentSpec {', '  role: string;', '  skills: string[];', '  memory?: Memory;', '}'] },
      { title: 'Architektur', description: 'Modulare Registry mit Intent-Routing und Memory-Layer.', codeLines: ['// Phase 2 — Architektur', 'import { Registry } from "@lego/core";', 'import { Memory } from "@lego/memory";', '', 'const registry = new Registry({', '  routing: "intent-aware",', '  memory: new Memory({ model: "nomic-768" })', '});'] },
      { title: 'Implementierung', description: 'Stack aus Planner, Retriever und Writer wird zusammengebaut.', codeLines: ['// Phase 3 — Implementierung', 'const stack = ["planner", "retriever", "writer"];', '', 'export const agents = AgentRegistry.build({', '  stack,', '  routing: "intent-aware",', '  autonomy: "high"', '});'] },
      { title: 'Betrieb', description: 'Die Fabrik läuft autonom und skaliert in Produktion.', codeLines: ['// Phase 4 — Produktiv', 'agents.deploy("prod-eu-central-1");', '', '// 12 Agents deployed in 8s', '// Autonomy loop: OK', '// Observability: ENABLED'] },
    ],
  },
  {
    id: 'bds-navigator',
    language: 'TypeScript',
    filePath: 'packages/navigator/src/evolution.ts',
    imageUrl: '/images/BDS-Navigator/temp_image_1783206179972.png',
    phases: [
      { title: 'Idee', description: 'Wie wird eine Baustelle digital navigierbar?', codeLines: ['// Phase 1 — Idee', '// Ziel: Baumodelle, Dokumente & QA verknüpfen', '', 'interface SiteModel {', '  docs: Document[];', '  qa: QAEngine;', '  geo: GeoIndex;', '}'] },
      { title: 'Architektur', description: 'Hierarchische Navigation mit Export in JSON, CSV und Mermaid.', codeLines: ['// Phase 2 — Architektur', 'import { NavigationSDK } from "@bds/sdk";', 'import { Dashboard } from "@bds/ui";', '', 'const nav = new NavigationSDK({', '  mode: "hierarchical",', '  filters: { semantic: true, fuzzy: true }', '});'] },
      { title: 'Implementierung', description: 'Upload, Verschlagwortung und Live-Dashboard entstehen.', codeLines: ['// Phase 3 — Implementierung', 'nav.onUpload(async (doc) => {', '  await qa.validate(doc);', '  await index.add(doc);', '  dashboard.refresh();', '});'] },
      { title: 'Betrieb', description: 'Die Baustelle wird live dokumentiert und steuerbar.', codeLines: ['// Phase 4 — Produktiv', 'await nav.initialize();', '', '// Dokumentation bereit', '// Live-Status: OK', '// Export: JSON | CSV | Mermaid'] },
    ],
  },
];

const CHAR_DELAY_MS = 38;
const PHASE_HOLD_MS = 3200;
const SLIDE_TRANSITION_MS = 0.9;

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
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [typedChars, setTypedChars] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const phases = PRODUCTS[activeProductIndex].phases;
    const isLastPhase = currentPhaseIndex + 1 >= phases.length;
    const totalCharsInPhase = phases[currentPhaseIndex].codeLines.reduce(
      (sum, line) => sum + line.length,
      0
    );

    let chars = 0;
    let timer: ReturnType<typeof setTimeout>;
    setTypedChars(0);

    const advance = () => {
      if (isLastPhase) {
        setActiveProductIndex((activeProductIndex + 1) % PRODUCTS.length);
        setCurrentPhaseIndex(0);
      } else {
        setCurrentPhaseIndex(currentPhaseIndex + 1);
      }
    };

    const typeNext = () => {
      chars += 1;
      setTypedChars(chars);
      if (chars >= totalCharsInPhase) {
        const hold = isLastPhase ? PHASE_HOLD_MS + SLIDE_TRANSITION_MS * 1000 : PHASE_HOLD_MS;
        timer = setTimeout(advance, hold);
      } else {
        timer = setTimeout(typeNext, CHAR_DELAY_MS);
      }
    };

    timer = setTimeout(typeNext, CHAR_DELAY_MS);
    return () => clearTimeout(timer);
  }, [mounted, activeProductIndex, currentPhaseIndex]);

  const activeProduct = PRODUCTS[activeProductIndex % PRODUCTS.length];
  const currentPhase =
    activeProduct.phases[currentPhaseIndex] ?? activeProduct.phases[0];
  const displayed = getDisplayedText(currentPhase.codeLines, typedChars);

  if (!mounted) {
    return (
      <div className="relative rounded-xl border border-zinc-800 bg-[#0d0d0f] overflow-hidden shadow-2xl h-[420px]" />
    );
  }

  return (
    <div className="relative rounded-xl border border-zinc-800 bg-[#0d0d0f] overflow-hidden shadow-2xl h-[420px]">
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 blur-2xl" />

      <div className="flex items-center gap-2 border-b border-zinc-800/80 bg-[#111114] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="ml-3 text-[11px] text-zinc-500 font-mono">{activeProduct.filePath}</span>
        <span className="ml-auto text-[11px] rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-zinc-400">{activeProduct.language}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative p-5 border-r border-zinc-800/60">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProductIndex + '-' + currentPhaseIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-2"
            >
              <div className="text-[11px] font-medium text-emerald-400/90">
                {t('Phase', 'Phase', 'Giai đoạn')} {currentPhaseIndex + 1}/{activeProduct.phases.length}
              </div>
              <div className="text-xs text-zinc-300">
                <span className="text-zinc-100 font-medium">{currentPhase.title}:</span>{' '}
                {currentPhase.description}
              </div>
              <div className="mt-2 rounded-lg border border-zinc-800 bg-[#0a0a0c] p-3 font-mono text-[12px] leading-relaxed text-zinc-300 min-h-[120px]">
                <pre className="whitespace-pre-wrap break-words">{displayed}</pre>
                {typedChars < currentPhase.codeLines.reduce((sum, line) => sum + line.length, 0) && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
                    className="ml-[3px] inline-block h-3 w-[8px] bg-emerald-400/90 align-middle shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                  />
                )}
              </div>

              <div className="flex items-center gap-2 pt-1">
                <div className="flex items-center gap-1">
                  {activeProduct.phases.map((_, idx) => (
                    <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx <= currentPhaseIndex ? 'w-4 bg-emerald-400' : 'w-2 bg-zinc-700'}`} />
                  ))}
                </div>
                <ChevronRight className="h-3 w-3 text-zinc-500" />
                <div className="text-[11px] text-zinc-500">
                  {t(productTitles[activeProduct.id]?.DE, productTitles[activeProduct.id]?.EN, productTitles[activeProduct.id]?.VI)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative flex items-center justify-center p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProductIndex + '-visual'}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="relative w-full"
            >
              <img
                src={activeProduct.imageUrl}
                alt={t(productTitles[activeProduct.id]?.DE, productTitles[activeProduct.id]?.EN, productTitles[activeProduct.id]?.VI)}
                className="w-full h-auto max-h-[240px] object-contain rounded-lg shadow-lg"
              />
              <div className="mt-3 flex items-center gap-2 text-[11px] text-zinc-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                {t('Live-Vorschau', 'Live Preview', 'Xem trước trực tiếp')}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
