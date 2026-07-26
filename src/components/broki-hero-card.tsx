'use client';

import { motion } from 'motion/react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useLang } from '@/contexts/LangContext';

const BROKI_PORTRAIT = '/images/broki/broki-assistentin.png';

/**
 * Broki-Produktkarte für den Hero (ersetzt die frühere KI-Fabrik-Slideshow).
 * Zeigt Brokis Alleinstellung: eine KI, die als Sidebar im Browser-Tab sitzt und
 * proaktiv warnt — 100 % lokal, DSGVO-konform. Verlinkt auf die Produktseite /broki.
 * Hinweis (Positionierung): KEIN Raspberry Pi / Tailscale im Verkaufstext — das
 * ist optionales Zusatzpaket, nicht Teil des Kern-Pitchs.
 */
export function BrokiHeroCard() {
  const { t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative"
    >
      {/* Broki-Portrait: schwebt am Kartenrand, sanfte Idle-Animation (Atmen + Glow-Puls) */}
      <motion.div
        className="pointer-events-none absolute -top-10 -right-6 z-20 h-28 w-28 sm:h-36 sm:w-36"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/25 blur-2xl"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <img
          src={BROKI_PORTRAIT}
          alt="Broki AI"
          className="relative h-full w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
        />
      </motion.div>

      {/* Browser-Fenster-Mockup */}
      <div className="overflow-hidden rounded-xl border border-border bg-surface/60 shadow-2xl backdrop-blur">
        {/* Titelleiste */}
        <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <div className="ml-3 flex-1 truncate rounded-md bg-surface/80 px-3 py-1 font-mono text-xs text-muted-foreground">
            mandanten-akte-2025.pdf
          </div>
        </div>

        <div className="flex">
          {/* Seiteninhalt (angedeutet) */}
          <div className="hidden flex-1 space-y-2 p-4 sm:block">
            <div className="h-2 w-3/4 rounded bg-border" />
            <div className="h-2 w-full rounded bg-border/70" />
            <div className="h-2 w-5/6 rounded bg-border/70" />
            <div className="mt-4 h-2 w-2/3 rounded bg-border" />
            <div className="h-2 w-full rounded bg-border/70" />
            <div className="h-2 w-4/5 rounded bg-border/70" />
            <div className="mt-4 h-2 w-1/2 rounded bg-border" />
            <div className="h-2 w-full rounded bg-border/70" />
          </div>

          {/* Broki-Sidebar */}
          <div className="w-full space-y-3 border-l border-border bg-background/50 p-4 sm:w-64">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={BROKI_PORTRAIT}
                  alt=""
                  className="h-5 w-5 rounded-full object-cover object-top ring-1 ring-primary/40"
                />
                <span className="font-display text-sm font-semibold">Broki AI</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t('Lokal', 'Local', 'Cục bộ')}
              </span>
            </div>

            {/* Proaktive Warnung — Brokis USP */}
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-3"
            >
              <div className="flex items-center gap-1.5 text-yellow-500">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">{t('Prüfhinweis', 'Alert', 'Cảnh báo')}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {t(
                  'Die USt-IdNr. scheint ungültig zu sein.',
                  'The VAT ID appears to be invalid.',
                  'Mã số thuế GTGT có vẻ không hợp lệ.',
                )}
              </p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground/70">
                {t('Quelle', 'Source', 'Nguồn')}: §27a UStG
              </p>
            </motion.div>

            <div className="rounded-lg border border-border bg-surface/60 p-3">
              <p className="text-xs text-foreground">
                {t(
                  'Antworten aus Ihrem lokalen Firmenwissen — nichts verlässt das Gerät.',
                  'Answers from your local company knowledge — nothing leaves the device.',
                  'Câu trả lời từ kiến thức nội bộ — không dữ liệu nào rời khỏi thiết bị.',
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Produkt-Zeile unter dem Fenster */}
      <div className="mt-4 flex flex-col gap-3 rounded-xl border border-border bg-surface/40 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-semibold">Broki AI</span>
            <span className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] text-primary">
              BrowserLLM
            </span>
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            {t(
              '100 % lokal im Browser · DSGVO · keine Cloud',
              '100% local in the browser · GDPR · no cloud',
              '100% cục bộ trong trình duyệt · GDPR · không đám mây',
            )}
          </p>
        </div>
        <Link
          to="/broki"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {t('Broki entdecken', 'Discover Broki', 'Khám phá Broki')}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
