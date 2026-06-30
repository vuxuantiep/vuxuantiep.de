'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TerminalSquare, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/components/language-provider';
import { Language } from '@/lib/i18n';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-emerald-900/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center gap-2 font-mono text-zinc-100 font-medium hover:text-emerald-400 transition-colors">
          <TerminalSquare className="w-5 h-5 text-emerald-400" />
          Vũ xuân Tiệp
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#start" className="hover:text-zinc-100 transition-colors">{t.nav.start}</Link>
          <Link href="#leistungen" className="hover:text-zinc-100 transition-colors">{t.nav.services}</Link>
          <Link href="#projekte" className="hover:text-zinc-100 transition-colors">{t.nav.projects}</Link>
          <Link href="#blog" className="hover:text-zinc-100 transition-colors">{t.nav.blog}</Link>
          <Link href="#kontakt" className="hover:text-zinc-100 transition-colors">{t.nav.contact}</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs font-medium text-zinc-500 bg-zinc-900/50 rounded-md p-1 border border-zinc-800/50">
            <button onClick={() => setLang('DE')} className={`px-2 py-1 rounded-sm transition-colors ${lang === 'DE' ? 'bg-zinc-800 text-zinc-200' : 'hover:text-zinc-300'}`}>DE</button>
            <button onClick={() => setLang('EN')} className={`px-2 py-1 rounded-sm transition-colors ${lang === 'EN' ? 'bg-zinc-800 text-zinc-200' : 'hover:text-zinc-300'}`}>EN</button>
            <button onClick={() => setLang('VI')} className={`px-2 py-1 rounded-sm transition-colors ${lang === 'VI' ? 'bg-zinc-800 text-zinc-200' : 'hover:text-zinc-300'}`}>VI</button>
          </div>
          <Link href="#kontakt" className="text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-md hover:bg-emerald-500 hover:text-zinc-950 transition-all">
            {t.nav.startProject}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
          aria-label="Menü umschalten"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 sm:w-72 bg-[#0a0a0c]/95 backdrop-blur-xl border-l border-emerald-900/30 shadow-2xl z-50 flex flex-col md:hidden"
            >
              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
                <div className="flex flex-col gap-4 text-base font-medium text-zinc-400">
                  <Link href="#start" onClick={() => setIsOpen(false)} className="hover:text-zinc-100 transition-colors block py-2 border-b border-zinc-800/50">{t.nav.start}</Link>
                  <Link href="#leistungen" onClick={() => setIsOpen(false)} className="hover:text-zinc-100 transition-colors block py-2 border-b border-zinc-800/50">{t.nav.services}</Link>
                  <Link href="#projekte" onClick={() => setIsOpen(false)} className="hover:text-zinc-100 transition-colors block py-2 border-b border-zinc-800/50">{t.nav.projects}</Link>
                  <Link href="#blog" onClick={() => setIsOpen(false)} className="hover:text-zinc-100 transition-colors block py-2 border-b border-zinc-800/50">{t.nav.blog}</Link>
                  <Link href="#kontakt" onClick={() => setIsOpen(false)} className="hover:text-zinc-100 transition-colors block py-2 border-b border-zinc-800/50">{t.nav.contact}</Link>
                </div>
                <div className="pt-2">
                  <div className="flex items-center justify-center gap-2 mb-6 text-xs font-medium text-zinc-500 bg-zinc-900/50 rounded-md p-1 border border-zinc-800/50 w-full">
                    <button onClick={() => setLang('DE')} className={`flex-1 py-2 rounded-sm transition-colors ${lang === 'DE' ? 'bg-zinc-800 text-zinc-200' : 'hover:text-zinc-300'}`}>DE</button>
                    <button onClick={() => setLang('EN')} className={`flex-1 py-2 rounded-sm transition-colors ${lang === 'EN' ? 'bg-zinc-800 text-zinc-200' : 'hover:text-zinc-300'}`}>EN</button>
                    <button onClick={() => setLang('VI')} className={`flex-1 py-2 rounded-sm transition-colors ${lang === 'VI' ? 'bg-zinc-800 text-zinc-200' : 'hover:text-zinc-300'}`}>VI</button>
                  </div>
                  <Link href="#kontakt" onClick={() => setIsOpen(false)} className="block w-full text-center text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-3 rounded-lg hover:bg-emerald-500 hover:text-zinc-950 transition-all">
                    {t.nav.startProject}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
