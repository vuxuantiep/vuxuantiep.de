'use client';

import { motion } from 'motion/react';
import { Network, Search, Video, ShoppingCart, ArrowRight, BrainCircuit } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TraceOsTree() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="h-[400px] w-full rounded-xl bg-transparent animate-pulse"></div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-8 rounded-2xl bg-[#0a0a0c]/80 border border-emerald-500/20 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Subtle Glows */}
      <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 p-32 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Core System */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-10 group cursor-pointer">
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl mb-3 relative overflow-hidden">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-md"
            />
            <BrainCircuit className="w-10 h-10 text-emerald-400 relative z-10" />
          </div>
          <span className="text-base font-bold text-emerald-400 tracking-widest drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">TRACE OS</span>
        </motion.div>

        {/* Connecting Lines */}
        <div className="relative h-12 w-full max-w-[600px] mx-auto -mt-8 mb-4">
          {/* Main vertical line from OS */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '32px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-0 left-1/2 w-px bg-gradient-to-b from-emerald-500/50 to-emerald-500/20 transform -translate-x-1/2"
          />
          {/* Horizontal connecting line */}
          <motion.div 
            initial={{ width: 0, left: '50%' }}
            whileInView={{ width: '80%', left: '10%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-[32px] h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0"
          />
          {/* Branch vertical lines */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '24px' }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="absolute top-[32px] left-[10%] w-px bg-gradient-to-b from-emerald-500/30 to-emerald-500/0"
          />
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '24px' }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="absolute top-[32px] left-[50%] w-px bg-gradient-to-b from-emerald-500/30 to-emerald-500/0 transform -translate-x-1/2"
          />
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '24px' }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="absolute top-[32px] right-[10%] w-px bg-gradient-to-b from-emerald-500/30 to-emerald-500/0"
          />
        </div>

        {/* Agents Level */}
        <div className="flex justify-between w-full max-w-[650px] mx-auto mb-10 px-4 relative">
          
          {/* Research Agent */}
          <motion.div variants={itemVariants} className="flex flex-col items-center group w-1/3 relative z-10">
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 mb-3 relative overflow-hidden backdrop-blur-sm transition-colors group-hover:border-cyan-500/30">
               <Search className="w-6 h-6 text-cyan-400 relative z-10" />
               <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0 }}
                  className="absolute inset-0 bg-cyan-400/10 rounded-xl blur-md"
               />
            </div>
            <span className="text-sm font-mono text-zinc-200">Research</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">AGENT</span>
            
            <div className="flex flex-col items-center mt-5 gap-2 border-t border-zinc-800/50 pt-4 w-full">
              <span className="text-xs text-zinc-400 font-mono hover:text-cyan-400 transition-colors cursor-default">Trend</span>
              <span className="text-xs text-zinc-400 font-mono hover:text-cyan-400 transition-colors cursor-default">Trade</span>
              <span className="text-xs text-zinc-400 font-mono hover:text-cyan-400 transition-colors cursor-default">OSINT</span>
            </div>
          </motion.div>

          {/* Content Factory */}
          <motion.div variants={itemVariants} className="flex flex-col items-center group w-1/3 relative z-10">
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 mb-3 relative overflow-hidden backdrop-blur-sm transition-colors group-hover:border-purple-500/30">
               <Video className="w-6 h-6 text-purple-400 relative z-10" />
               <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                  className="absolute inset-0 bg-purple-400/10 rounded-xl blur-md"
               />
            </div>
            <span className="text-sm font-mono text-zinc-200">Content</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">FACTORY</span>

            <div className="flex flex-col items-center mt-5 gap-2 border-t border-zinc-800/50 pt-4 w-full">
              <span className="text-xs text-zinc-400 font-mono hover:text-purple-400 transition-colors cursor-default">YouTube</span>
              <span className="text-xs text-zinc-400 font-mono hover:text-purple-400 transition-colors cursor-default">TikTok</span>
              <span className="text-xs text-zinc-400 font-mono hover:text-purple-400 transition-colors cursor-default">SEO</span>
            </div>
          </motion.div>

          {/* Commerce Agent */}
          <motion.div variants={itemVariants} className="flex flex-col items-center group w-1/3 relative z-10">
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 mb-3 relative overflow-hidden backdrop-blur-sm transition-colors group-hover:border-yellow-500/30">
               <ShoppingCart className="w-6 h-6 text-yellow-400 relative z-10" />
               <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 2 }}
                  className="absolute inset-0 bg-yellow-400/10 rounded-xl blur-md"
               />
            </div>
            <span className="text-sm font-mono text-zinc-200">Commerce</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">AGENT</span>

            <div className="flex flex-col items-center mt-5 gap-2 border-t border-zinc-800/50 pt-4 w-full relative">
              <span className="text-xs text-zinc-400 font-mono hover:text-yellow-400 transition-colors cursor-default text-center">Shopping Agent</span>
              <span className="text-xs text-zinc-400 font-mono hover:text-yellow-400 transition-colors cursor-default">Deal</span>
              
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '30px' }}
                viewport={{ once: true }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute top-[50px] left-1/2 w-px bg-zinc-800 transform -translate-x-1/2 hidden md:block"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="absolute top-[80px] w-48 border border-zinc-800 bg-zinc-950/80 p-3 rounded-xl hidden md:flex flex-col items-center gap-1 shadow-lg"
              >
                <span className="text-[10px] text-zinc-400 font-mono">Digital Products</span>
                <span className="text-[10px] text-zinc-400 font-mono">Physical Products</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Animated packets moving between agents to show communication */}
          <motion.div
             className="absolute top-10 left-[20%] w-2 h-2 rounded-full bg-cyan-400 z-20"
             animate={{ x: [0, 180, 0], opacity: [0, 1, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             style={{ filter: "blur(2px)" }}
          />
          <motion.div
             className="absolute top-10 right-[20%] w-2 h-2 rounded-full bg-yellow-400 z-20"
             animate={{ x: [0, -180, 0], opacity: [0, 1, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             style={{ filter: "blur(2px)" }}
          />
        </div>

        {/* Space for the absolute box above */}
        <div className="h-20 hidden md:block w-full"></div>

        {/* Process Flow */}
        <motion.div 
          variants={itemVariants}
          className="mt-6 pt-6 border-t border-zinc-800/50 w-full flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs font-mono text-zinc-400"
        >
          <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
            <Network className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-bold">KI-Agenten</span>
          </div>
          
          <ArrowRight className="w-4 h-4 text-zinc-600 hidden sm:block" />
          
          <span className="hover:text-zinc-200 transition-colors cursor-default">Marktforschung</span>
          
          <ArrowRight className="w-4 h-4 text-zinc-600 hidden sm:block" />
          
          <span className="hover:text-zinc-200 transition-colors cursor-default">Content</span>
          
          <ArrowRight className="w-4 h-4 text-zinc-600 hidden sm:block" />
          
          <span className="hover:text-zinc-200 transition-colors cursor-default">Handel</span>
          
          <ArrowRight className="w-4 h-4 text-zinc-600 hidden sm:block" />
          
          <div className="bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">
            <span className="text-cyan-400 font-bold">eigene Produkte</span>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
