'use client';

import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface SlideLine {
  text: string;
  color?: string;
}

interface Slide {
  title: string;
  tag: string;
  tab: string;
  lines: SlideLine[];
}

const slides: Slide[] = [
  {
    title: 'AI-Agenten Fabrik-LEGO',
    tag: 'KI-Automatisierung',
    tab: '~/lego-factory/deploy.ts',
    lines: [
      { text: '// KI-Agenten Fabrik konfigurieren', color: 'text-zinc-500' },
      { text: 'import { LegoFactory } from "@tiep/lego";', color: 'text-pink-400' },
      { text: 'const factory = new LegoFactory({', color: 'text-blue-400' },
      { text: '  agents: ["scraper", "analyzer", "writer"],', color: 'text-emerald-300' },
      { text: '  pipeline: "autonomous-loop",', color: 'text-zinc-300' },
      { text: '  autonomy: "high"', color: 'text-zinc-300' },
      { text: '});', color: 'text-zinc-300' },
      { text: '', color: 'text-zinc-300' },
      { text: 'factory.deploy("prod-eu-central-1");', color: 'text-zinc-300' },
      { text: '// 12 Agents deployed in 8s', color: 'text-emerald-400' },
    ]
  },
  {
    title: 'BDS-Navigator',
    tag: 'Bau Dokumenations System',
    tab: '~/bds-navigator/index.ts',
    lines: [
      { text: '// BDS-Navigator initialisieren', color: 'text-zinc-500' },
      { text: 'import { BDSNavigator } from "@tiep/bds";', color: 'text-pink-400' },
      { text: 'const nav = new BDSNavigator({', color: 'text-blue-400' },
      { text: '  mode: "site-intelligence",', color: 'text-emerald-300' },
      { text: '  docs: true,', color: 'text-zinc-300' },
      { text: '  qa: "ai-powered"', color: 'text-zinc-300' },
      { text: '});', color: 'text-zinc-300' },
      { text: '', color: 'text-zinc-300' },
      { text: 'nav.init("construction-site");', color: 'text-zinc-300' },
      { text: '// Dokumentation bereit', color: 'text-emerald-400' },
    ]
  }
];

export function AnimatedCode() {
  const [mounted, setMounted] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const slideStartRef = useRef(Date.now());

  useEffect(() => {
    setMounted(true);
    slideStartRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const SLIDE_DURATION = 6000;
    const interval = setInterval(() => {
      slideStartRef.current = Date.now();
      setSlideIndex(i => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [mounted]);

  const currentSlide = slides[slideIndex];
  const elapsed = Date.now() - slideStartRef.current;
  const LINE_DELAY = 450;
  const visibleLines = Math.min(
    Math.floor(elapsed / LINE_DELAY) + 1,
    currentSlide.lines.length
  );

  if (!mounted) {
    return (
      <div className="relative rounded-xl border border-zinc-800 bg-[#0d0d0f] overflow-hidden shadow-2xl h-[330px]" />
    );
  }

  return (
    <div className="relative rounded-xl border border-zinc-800 bg-[#0d0d0f] overflow-hidden shadow-2xl">
      <div className="flex items-center px-4 py-3 border-b border-zinc-800/80 bg-[#111114]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="ml-4 text-xs font-mono text-zinc-500 transition-all duration-300">
          {currentSlide.tab}
        </div>
      </div>

      <div className="p-4 sm:p-5 text-[11px] sm:text-[12px] font-mono text-zinc-300 leading-snug overflow-hidden min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {currentSlide.lines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={line.color || 'text-zinc-300'}
              >
                {line.text}
                {i === visibleLines - 1 && i < currentSlide.lines.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
                    className="inline-block w-[7px] h-3 bg-emerald-400/90 ml-[2px] align-middle shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {visibleLines === currentSlide.lines.length && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex items-center gap-2 mt-4"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0.3, 1] }}
              transition={{ duration: 0.6 }}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </motion.div>
            <span className="text-emerald-400/90 drop-shadow-[0_0_4px_rgba(52,211,153,0.4)]">
              {currentSlide.tag} — bereit
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
              className="w-2 h-4 bg-emerald-400/80 ml-1 inline-block align-middle shadow-[0_0_8px_rgba(52,211,153,0.8)]"
            />
          </motion.div>
        )}

        <div className="flex gap-2 mt-3">
          {slides.map((slide, i) => (
            <motion.button
              key={i}
              onClick={() => {
                slideStartRef.current = Date.now();
                setSlideIndex(i);
              }}
              animate={{
                width: i === slideIndex ? 16 : 8,
                backgroundColor:
                  i === slideIndex ? 'rgb(52, 211, 153)' : 'rgb(63, 63, 70)'
              }}
              transition={{ duration: 0.3 }}
              className="h-1 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
