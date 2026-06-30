'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export function AnimatedCode() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="relative rounded-xl border border-zinc-800 bg-[#0d0d0f] overflow-hidden shadow-2xl h-[330px]">
        {/* Placeholder before mount to prevent layout shift */}
      </div>
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
        <div className="ml-4 text-xs font-mono text-zinc-500">~/projects/vuxuantiep/deploy.ts</div>
      </div>
      <div className="p-4 sm:p-5 text-[11px] sm:text-[12px] font-mono text-zinc-300 leading-snug overflow-hidden min-h-[280px]">
        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 0.1, duration: 0.4, ease: "linear" }} className="w-fit whitespace-nowrap">
          <span className="text-zinc-500">{`// Agentic deployment of 4 projects`}</span>
        </motion.div>
        
        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 0.5, duration: 0.6, ease: "linear" }} className="w-fit whitespace-nowrap mt-1">
          <span className="text-pink-400">import</span> {'{'} Stack {'}'} <span className="text-pink-400">from</span> <span className="text-emerald-300">&quot;aws-cdk-lib&quot;</span>;
        </motion.div>
        
        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 1.1, duration: 0.5, ease: "linear" }} className="w-fit whitespace-nowrap mt-1">
          <span className="text-pink-400">import</span> {'{'} AIAgent {'}'} <span className="text-pink-400">from</span> <span className="text-emerald-300">&quot;@tiep/ai&quot;</span>;
        </motion.div>
        
        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 1.6, duration: 0.5, ease: "linear" }} className="w-fit whitespace-nowrap mt-3">
          <span className="text-pink-400">export const</span> <span className="text-blue-400">app</span> <span className="text-pink-400">= new</span> Stack({'{'}
        </motion.div>
        
        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 2.1, duration: 0.4, ease: "linear" }} className="w-fit whitespace-nowrap mt-1">
          &nbsp;&nbsp;region: <span className="text-emerald-300">&quot;eu-central-1&quot;</span>,
        </motion.div>
        
        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 2.5, duration: 0.4, ease: "linear" }} className="w-fit whitespace-nowrap mt-1">
          &nbsp;&nbsp;runtime: <span className="text-emerald-300">&quot;edge&quot;</span>,
        </motion.div>
        
        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 2.9, duration: 0.3, ease: "linear" }} className="w-fit whitespace-nowrap mt-1">
          &nbsp;&nbsp;agents: [
        </motion.div>
        
        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 3.2, duration: 0.4, ease: "linear" }} className="w-fit whitespace-nowrap mt-1">
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">new</span> AIAgent(<span className="text-emerald-300">&quot;youtube-factory&quot;</span>),
        </motion.div>
        
        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 3.6, duration: 0.4, ease: "linear" }} className="w-fit whitespace-nowrap mt-1">
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">new</span> AIAgent(<span className="text-emerald-300">&quot;aivo-geo&quot;</span>),
        </motion.div>
        
        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 4.0, duration: 0.4, ease: "linear" }} className="w-fit whitespace-nowrap mt-1">
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">new</span> AIAgent(<span className="text-emerald-300">&quot;trade-research&quot;</span>),
        </motion.div>

        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 4.4, duration: 0.4, ease: "linear" }} className="w-fit whitespace-nowrap mt-1">
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">new</span> AIAgent(<span className="text-emerald-300">&quot;core-platform&quot;</span>)
        </motion.div>
        
        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 4.8, duration: 0.2, ease: "linear" }} className="w-fit whitespace-nowrap mt-1">
          &nbsp;&nbsp;],
        </motion.div>

        <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 5.0, duration: 0.2, ease: "linear" }} className="w-fit whitespace-nowrap mt-1">
          {'}'});
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 5.5, type: "spring" }}
          className="text-zinc-500 flex items-center gap-2 mt-4"
        >
          <motion.div
             animate={{ opacity: [0, 1, 0.3, 1] }}
             transition={{ delay: 5.5, duration: 0.6 }}
          >
             <CheckCircle2 className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]"/>
          </motion.div>
          <span className="text-emerald-400/90 drop-shadow-[0_0_4px_rgba(52,211,153,0.4)]">4 projects deployed in 12s</span>
          <motion.span 
             animate={{ opacity: [1, 0] }}
             transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
             className="w-2 h-4 bg-emerald-400/80 ml-1 inline-block align-middle shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          />
        </motion.div>
      </div>
    </div>
  );
}
