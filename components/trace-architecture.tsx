'use client';

import { motion } from 'motion/react';
import { User, Briefcase, Code, BrainCircuit, Database, Shield, LayoutGrid, Search, ShoppingCart, Globe, Workflow } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TraceArchitecture() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="h-full w-full rounded-xl bg-transparent animate-pulse"></div>;
  }

  return (
    <div className="w-full flex flex-col gap-10 font-mono text-xs text-emerald-400/80 items-center justify-center p-8">
      {/* 1. Interface Layer */}
      <div className="flex flex-col items-center">
        <div className="text-emerald-500/60 mb-2 uppercase tracking-widest text-[10px]">1. Interface Layer</div>
        <div className="w-64 border border-emerald-500/30 bg-emerald-950/20 p-4 rounded-xl flex items-center justify-center gap-4 backdrop-blur-sm">
          <User className="w-5 h-5 text-emerald-300" />
          <span className="text-emerald-200 text-sm">Human CEO</span>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center -my-5"><div className="w-px h-10 bg-gradient-to-b from-emerald-500/30 to-emerald-500/10"></div></div>

      {/* 2. AI Management Layer */}
      <div className="flex flex-col items-center">
        <div className="text-emerald-500/60 mb-2 uppercase tracking-widest text-[10px]">2. AI Management Layer</div>
        <div className="flex gap-4">
          <div className="w-40 border border-emerald-500/30 bg-emerald-950/20 p-4 rounded-xl flex flex-col items-center gap-2">
            <Briefcase className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-300 font-bold">CEO Agent</span>
            <span className="text-[9px] text-emerald-500/80">Strategie & Planung</span>
          </div>
          <div className="w-40 border border-emerald-500/20 bg-emerald-950/10 p-4 rounded-xl flex flex-col items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-emerald-500" />
            <span className="text-emerald-400">CTO Agent</span>
          </div>
          <div className="w-40 border border-emerald-500/20 bg-emerald-950/10 p-4 rounded-xl flex flex-col items-center gap-2">
            <Workflow className="w-5 h-5 text-emerald-500" />
            <span className="text-emerald-400">Project Manager</span>
          </div>
          <div className="w-40 border border-emerald-500/20 bg-emerald-950/10 p-4 rounded-xl flex flex-col items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-500" />
            <span className="text-emerald-400">Auditor Agent</span>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center -my-5"><div className="w-px h-10 bg-gradient-to-b from-emerald-500/20 to-emerald-500/10"></div></div>

      {/* 3. Agent Organization Layer */}
      <div className="flex flex-col items-center">
        <div className="text-emerald-500/60 mb-2 uppercase tracking-widest text-[10px]">3. Agent Organization Layer</div>
        <div className="flex gap-4">
          <div className="w-32 border border-emerald-500/20 bg-emerald-950/10 p-3 rounded-lg flex items-center justify-center gap-2">
            <Code className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400">Developer</span>
          </div>
          <div className="w-32 border border-emerald-500/20 bg-emerald-950/10 p-3 rounded-lg flex items-center justify-center gap-2">
            <Search className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400">Research</span>
          </div>
          <div className="w-32 border border-emerald-500/20 bg-emerald-950/10 p-3 rounded-lg flex items-center justify-center gap-2">
            <LayoutGrid className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400">Content</span>
          </div>
          <div className="w-32 border border-emerald-500/20 bg-emerald-950/10 p-3 rounded-lg flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400">Commerce</span>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center -my-5"><div className="w-px h-10 bg-gradient-to-b from-emerald-500/20 to-emerald-500/10"></div></div>

      {/* 4. AI Factory OS */}
      <div className="flex flex-col items-center">
        <div className="text-emerald-500/60 mb-2 uppercase tracking-widest text-[10px]">4. AI Factory OS</div>
        <div className="flex gap-3">
          {['LangGraph', 'LiteLLM', 'MCP Server', 'Memory / RAG', 'FastAPI'].map(tech => (
            <div key={tech} className="px-6 py-2 border border-emerald-500/20 bg-emerald-950/10 rounded-md text-emerald-400 text-[11px]">
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center -my-5"><div className="w-px h-10 bg-gradient-to-b from-emerald-500/20 to-emerald-500/10"></div></div>

      {/* 5. Data & Infrastructure */}
      <div className="flex flex-col items-center">
        <div className="text-emerald-500/60 mb-2 uppercase tracking-widest text-[10px]">5. Data & Infrastructure</div>
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center bg-emerald-950/10">
              <Database className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-[10px]">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center bg-emerald-950/10">
              <Database className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-[10px]">Qdrant</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center bg-emerald-950/10">
              <BrainCircuit className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-[10px]">Ollama</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center bg-emerald-950/10">
              <Globe className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-[10px]">Docker</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center bg-emerald-950/10">
              <Shield className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-[10px]">Security Vault</span>
          </div>
        </div>
      </div>
    </div>
  );
}

