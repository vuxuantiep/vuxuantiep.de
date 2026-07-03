'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

const POSTS = [
  {
    id: 'next-gen-llms',
    title: 'Die nächste Generation von LLMs: Was kommt nach GPT-4?',
    description: 'Eine Analyse der neuen Architekturen, Mixture of Experts (MoE) und wie lokale, spezialisierte Modelle die Cloud-Giganten herausfordern.',
    date: '28. Juni 2026',
    readTime: '10 min',
    tag: 'LLM'
  },
  {
    id: 'webassembly-ai',
    title: 'WebAssembly & KI: Modelle direkt im Browser ausführen',
    description: 'Wie WebAssembly (Wasm) und WebGPU es ermöglichen, leistungsstarke KI-Modelle ohne Serverkosten direkt auf dem Endgerät laufen zu lassen.',
    date: '15. Mai 2026',
    readTime: '8 min',
    tag: 'WebAssembly'
  },
  {
    id: 'ai-agents-ecommerce',
    title: 'Agentic Workflows: Wenn KI selbstständig handelt',
    description: 'Über den Wandel von Chatbots zu autonomen Agenten-Systemen und wie sie komplette Unternehmensprozesse steuern.',
    date: '02. April 2026',
    readTime: '14 min',
    tag: 'AI Tech'
  }
];

export function BlogSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-6">
          <BookOpen className="w-4 h-4" />
          <span>Journal</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gedanken & Architektur</h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Technische Deep-Dives, Lektionen aus der Produktion und Perspektiven auf die Entwicklung von KI-Agenten und Cloud-Systemen.
        </p>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-6 md:p-8 rounded-2xl bg-[#111114] border border-zinc-800/80 flex flex-col md:flex-row gap-6 md:gap-12 md:items-center">
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton className="w-16 h-5 bg-zinc-800/80" />
                  <Skeleton className="w-24 h-4 bg-zinc-800/80" />
                  <Skeleton className="w-16 h-4 bg-zinc-800/80" />
                </div>
                <Skeleton className="w-3/4 h-7 mb-3 bg-zinc-800/80" />
                <Skeleton className="w-full h-4 mb-2 bg-zinc-800/80" />
                <Skeleton className="w-2/3 h-4 bg-zinc-800/80" />
              </div>
              <div className="shrink-0 md:pl-6 md:border-l md:border-zinc-800/50 flex items-center md:justify-center">
                <Skeleton className="w-24 h-5 bg-zinc-800/80" />
              </div>
            </div>
          ))
        ) : (
          POSTS.map((post) => (
            <Link 
              key={post.id} 
              href={`#`} 
              className="group p-6 md:p-8 rounded-2xl bg-[#111114] border border-zinc-800/80 hover:border-emerald-500/30 transition-all flex flex-col md:flex-row gap-6 md:gap-12 md:items-center relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute top-1/2 left-0 w-1/3 h-full -translate-y-1/2 bg-emerald-500/0 blur-[80px] rounded-full group-hover:bg-emerald-500/5 transition-colors duration-500 pointer-events-none" />

              <div className="flex-grow relative z-10">
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-4">
                  <span className="text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded">
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  {post.description}
                </p>
              </div>

              <div className="relative z-10 shrink-0 md:pl-6 md:border-l md:border-zinc-800/50 flex items-center md:justify-center">
                 <div className="flex items-center gap-2 text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
                   <span>Artikel lesen</span>
                   <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                 </div>
              </div>
            </Link>
          ))
        )}
      </div>
      
      <div className="mt-12 text-center">
        <button className="text-sm font-mono text-zinc-400 hover:text-emerald-400 transition-colors border-b border-dashed border-zinc-700 hover:border-emerald-400 pb-1">
          Alle Artikel anzeigen →
        </button>
      </div>
    </div>
  );
}
