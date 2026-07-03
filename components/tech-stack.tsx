'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Server, Cloud, Bot, Database, TerminalSquare, Layers, Cpu, ShieldCheck, Key, Network, Brain, Activity, FileCode, Search } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const categories = ['Agentic Coding', 'Alle', 'KI & Data', 'Cloud & DevOps', 'Backend', 'Frontend', 'Security', 'Versionierung', 'Virtualisierung'];

const skills = [
  { name: 'TypeScript', category: ['Frontend', 'Backend'], proficiency: 95, years: 6, icon: Code2 },
  { name: 'React / Next.js', category: ['Frontend'], proficiency: 90, years: 5, icon: TerminalSquare },
  { name: 'Node.js', category: ['Backend'], proficiency: 85, years: 6, icon: Server },
  { name: 'Python', category: ['Backend', 'KI & Data'], proficiency: 85, years: 4, icon: Code2 },
  { name: 'WebAssembly', category: ['Frontend', 'Backend'], proficiency: 70, years: 2, icon: Code2 },
  { name: 'PostgreSQL', category: ['Backend', 'KI & Data'], proficiency: 80, years: 5, icon: Database },
  { name: 'Supabase', category: ['Backend', 'Cloud & DevOps'], proficiency: 85, years: 3, icon: Database },
  { name: 'MS SQL Server', category: ['Backend'], proficiency: 85, years: 5, icon: Database },
  { name: 'MinIO', category: ['Cloud & DevOps'], proficiency: 80, years: 3, icon: Database },
  { name: 'AWS / CDK', category: ['Cloud & DevOps'], proficiency: 85, years: 4, icon: Cloud },
  { name: 'Azure', category: ['Cloud & DevOps'], proficiency: 85, years: 4, icon: Cloud },
  { name: 'Azure Arc', category: ['Cloud & DevOps'], proficiency: 80, years: 2, icon: Cloud },
  { name: 'Cloudflare', category: ['Cloud & DevOps'], proficiency: 85, years: 4, icon: Cloud },
  { name: 'Grafana / CheckMK', category: ['Cloud & DevOps'], proficiency: 85, years: 4, icon: Activity },
  { name: 'Hyper-V', category: ['Cloud & DevOps', 'Virtualisierung'], proficiency: 85, years: 6, icon: Layers },
  { name: 'Docker / K8s', category: ['Cloud & DevOps', 'Virtualisierung'], proficiency: 75, years: 4, icon: Layers },
  { name: 'GitHub / Gitea', category: ['Versionierung', 'Cloud & DevOps'], proficiency: 90, years: 6, icon: Code2 },
  { name: 'Dokploy', category: ['Cloud & DevOps'], proficiency: 80, years: 1, icon: Layers },
  { name: 'IaC (Bicep, ARM, Ansible)', category: ['Cloud & DevOps'], proficiency: 85, years: 4, icon: FileCode },
  { name: 'n8n / Node-RED', category: ['Cloud & DevOps', 'Backend'], proficiency: 90, years: 4, icon: Activity },
  { name: 'Activepieces', category: ['Cloud & DevOps', 'Backend'], proficiency: 85, years: 2, icon: Activity },
  { name: 'Tailscale', category: ['Cloud & DevOps', 'Network'], proficiency: 80, years: 3, icon: Network },
  { name: 'Raspberry Pi', category: ['Cloud & DevOps'], proficiency: 80, years: 4, icon: Cpu },
  { name: 'PowerShell', category: ['Cloud & DevOps'], proficiency: 90, years: 5, icon: TerminalSquare },
  { name: 'Windows Server (AD, GPO)', category: ['Cloud & DevOps', 'Security'], proficiency: 90, years: 6, icon: Server },
  { name: 'Entra-ID', category: ['Cloud & DevOps', 'Security'], proficiency: 85, years: 4, icon: ShieldCheck },
  { name: 'Azure Backup & ASR', category: ['Cloud & DevOps', 'Security'], proficiency: 85, years: 4, icon: ShieldCheck },
  { name: 'Keycloak', category: ['Backend', 'Security'], proficiency: 80, years: 2, icon: Key },
  { name: 'OSINT', category: ['Security', 'KI & Data'], proficiency: 75, years: 3, icon: Search },
  { name: 'OpenAI / LLMs', category: ['KI & Data'], proficiency: 85, years: 2, icon: Bot },
  { name: 'LangChain', category: ['KI & Data'], proficiency: 80, years: 2, icon: Bot },
  { name: 'Ollama', category: ['KI & Data'], proficiency: 90, years: 2, icon: Bot },
  { name: 'Open Claw', category: ['KI & Data', 'Agentic Coding'], proficiency: 85, years: 1, icon: Brain },
  { name: 'Codex', category: ['KI & Data', 'Agentic Coding'], proficiency: 90, years: 1, icon: Bot },
  { name: 'AI Gateway / OpenRouter', category: ['KI & Data', 'Cloud & DevOps'], proficiency: 90, years: 2, icon: Network },
  { name: 'Claude Code', category: ['KI & Data', 'Agentic Coding'], proficiency: 90, years: 1, icon: TerminalSquare },
  { name: 'Cody-AI Code Assistant', category: ['KI & Data', 'Agentic Coding'], proficiency: 85, years: 1, icon: Bot },
  { name: 'OpenHands', category: ['KI & Data', 'Agentic Coding'], proficiency: 80, years: 1, icon: Bot },
  { name: 'Hermes', category: ['KI & Data', 'Agentic Coding'], proficiency: 80, years: 1, icon: Bot },
  { name: 'LangGraph', category: ['KI & Data', 'Agentic Coding'], proficiency: 85, years: 1, icon: TerminalSquare },
  { name: 'Aider', category: ['KI & Data', 'Agentic Coding'], proficiency: 90, years: 1, icon: Bot },
  { name: 'Cline', category: ['KI & Data', 'Agentic Coding'], proficiency: 85, years: 1, icon: TerminalSquare },
  { name: 'Azad-Code', category: ['KI & Data', 'Agentic Coding'], proficiency: 85, years: 1, icon: Bot },
];

export function TechStack() {
  const [activeCat, setActiveCat] = useState('Agentic Coding');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filtered = activeCat === 'Alle'
    ? skills
    : skills.filter(s => s.category.includes(activeCat));

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
              activeCat === cat
                ? 'bg-emerald-500/10 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                : 'bg-black/20 text-zinc-400 hover:text-zinc-200 hover:bg-black/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[400px]">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-[#0d0d12]/60 rounded-xl p-4 flex flex-col justify-between h-[84px]">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2.5">
                  <Skeleton className="w-6 h-6 rounded-md bg-zinc-800/80" />
                  <Skeleton className="w-24 h-4 bg-zinc-800/80" />
                </div>
                <Skeleton className="w-16 h-3 bg-zinc-800/80" />
              </div>
              <Skeleton className="h-1 w-full bg-zinc-800/80 rounded-full" />
            </div>
          ))
        ) : (
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="group relative bg-[#0d0d12]/60 backdrop-blur-sm hover:bg-[#0d0d12]/80 rounded-xl p-4 transition-colors overflow-hidden"
                >
                  {/* Subtle Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex justify-between items-center mb-3 text-sm relative z-10">
                    <div className="flex items-center gap-2.5 text-zinc-200 font-medium">
                      <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      {skill.name}
                    </div>
                    <div className="text-zinc-500 text-xs font-mono group-hover:text-zinc-400 transition-colors">{skill.years} Jahre</div>
                  </div>
                  
                  <div className="h-1 w-full bg-zinc-900/80 rounded-full overflow-hidden relative z-10">
                    {/* Animated Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1.2, delay: 0.1 + (i * 0.05), ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-emerald-500/80 to-cyan-400/80 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

