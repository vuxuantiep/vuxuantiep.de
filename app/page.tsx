'use client';

import { FadeIn } from '@/components/fade-in';
import { ContactForm } from '@/components/contact-form';
import { TechStack } from '@/components/tech-stack';
import { AnimatedCode } from '@/components/animated-code';
import { TraceArchitecture } from '@/components/trace-architecture';
import { MultiAgentAnimation } from '@/components/multi-agent-animation';
import { TraceOsTree } from '@/components/trace-os-tree';
import { Cloud, Code2, CheckCircle2, ChevronRight, Github, Linkedin, Mail, Server, Bot, TerminalSquare, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';

import { Navigation } from '@/components/navigation';
import { BlogSection } from '@/components/blog-section';

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-black text-zinc-300 selection:bg-emerald-500/30 font-sans relative overflow-x-hidden">
      {/* Background ambient glow / Rahmen */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/20 via-black to-black" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-5%] w-[20%] h-[40%] bg-emerald-950/30 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute left-4 right-4 top-4 bottom-4 border border-emerald-950/30 rounded-3xl pointer-events-none hidden md:block" />
      </div>
      
      {/* Content Wrapper */}
      <div className="relative z-10">
      {/* Navigation */}
      <Navigation />

      <main className="space-y-32">
        {/* Hero Section */}
        <div className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-zinc-900/50">
          {/* Animated Dots Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] opacity-60" />
            <div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] opacity-40 animate-[dotPan_3s_linear_infinite]"
            />
            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
          </div>

          <section id="start" className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 text-xs font-mono text-zinc-400 mb-8 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {t.hero.available}
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                  {t.hero.title1}<span className="text-emerald-400">{t.hero.title1_highlight}</span><br />
                  {t.hero.title2}<span className="text-cyan-400">{t.hero.title2_highlight}</span>
                </h1>
                <p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-lg">
                  {t.hero.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Link href="#projekte" className="inline-flex items-center gap-2 bg-emerald-400 text-zinc-950 font-medium px-6 py-3 rounded-lg hover:bg-emerald-300 transition-colors">
                    {t.hero.viewProjects}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link href="#kontakt" className="inline-flex items-center gap-2 bg-zinc-900/50 backdrop-blur-sm text-white border border-zinc-700 font-medium px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors">
                    {t.hero.bookCall}
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[13px] text-zinc-500 font-medium max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500/80">★</span> {t.hero.reviews}
                  </div>
                  <div className="flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-emerald-500/60" /> Azure Certified Solution Architect
                  </div>
                  <div className="flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-emerald-500/60" /> AWS Practitioner
                  </div>
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-emerald-500/60" /> MCSA 2016
                  </div>
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-500/60" /> MCPD & MCTS .Net C#
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500/60" /> {t.hero.remote}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="relative hidden lg:block">
                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 blur-2xl rounded-full"></div>
                <AnimatedCode />
              </FadeIn>
            </div>
          </section>
        </div>

        {/* Services Section */}
        <section id="leistungen" className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">{t.services.label}</div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.services.title}</h2>
              <Link href="#projekte" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-1 transition-colors">
                {t.services.allProjects} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <div className="p-8 rounded-2xl bg-[#111114] border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-6">
                  <Cloud className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{t.services.cloudTitle}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {t.services.cloudDesc}
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
                  <span className="px-2 py-1 bg-zinc-900 rounded">AWS CDK</span>
                  <span className="px-2 py-1 bg-zinc-900 rounded">Terraform</span>
                  <span className="px-2 py-1 bg-zinc-900 rounded">K8s</span>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="p-8 rounded-2xl bg-[#111114] border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-6">
                  <Bot className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{t.services.aiTitle}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {t.services.aiDesc}
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
                  <span className="px-2 py-1 bg-zinc-900 rounded">OpenAI</span>
                  <span className="px-2 py-1 bg-zinc-900 rounded">LangChain</span>
                  <span className="px-2 py-1 bg-zinc-900 rounded">Vector DB</span>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="p-8 rounded-2xl bg-[#111114] border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-6">
                  <Code2 className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{t.services.webTitle}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {t.services.webDesc}
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
                  <span className="px-2 py-1 bg-zinc-900 rounded">TS</span>
                  <span className="px-2 py-1 bg-zinc-900 rounded">React</span>
                  <span className="px-2 py-1 bg-zinc-900 rounded">Next.js</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Tech Stack */}
        <section className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#111114] via-[#0a0a0c] to-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col gap-12 relative overflow-hidden group">
              
              {/* Refined Isometric Background Architecture */}
              <div 
                className="absolute inset-0 md:-right-[20%] md:-top-[30%] w-full h-[160%] opacity-20 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none z-0 flex items-center justify-end origin-center" 
                style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-35deg) scale(0.85)' }}
              >
                <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-emerald-500/15 blur-[120px] rounded-full z-[-1] pointer-events-none"></div>
                <TraceArchitecture />
              </div>

              <div className="flex flex-col xl:flex-row gap-12 xl:items-start items-center relative z-10">
                <div className="xl:w-1/3 w-full">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    {t.tech.label}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{t.tech.title}</h2>
                  <div className="mb-8">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/5 rounded-xl text-emerald-300 text-sm font-medium shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                      <Rocket className="w-4 h-4" />
                      {t.tech.quote}
                    </span>
                  </div>
                  <p className="text-base text-zinc-400 leading-relaxed mb-6">
                    {t.tech.desc}
                  </p>
                  
                  <div className="p-6 bg-[#0a0a0c]/40 rounded-2xl mt-10 backdrop-blur-xl hidden xl:block relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[40px] rounded-full"></div>
                     <h4 className="text-emerald-400 text-sm font-bold mb-3 flex items-center gap-2">
                       <CheckCircle2 className="w-5 h-5" /> {t.tech.layerTitle}
                     </h4>
                     <p className="text-sm text-zinc-400 leading-relaxed">{t.tech.layerDesc}</p>
                  </div>
                </div>
                
                <div className="xl:w-2/3 w-full relative">
                  {/* Glass panel behind tech stack for better readability over the 3D architecture */}
                  <div className="absolute inset-0 bg-[#0a0a0c]/40 backdrop-blur-md rounded-3xl shadow-2xl z-0"></div>
                  <div className="relative z-10 p-4 sm:p-8">
                    <TechStack />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Projects Section */}
        <section id="projekte" className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">{t.projects.label}</div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.projects.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* TRACE AI Commerce OS - Highlighted Project */}
              <div className="md:col-span-2 lg:col-span-3 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#111114] via-[#0d0d12] to-[#0a0a0c] border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 flex flex-col xl:flex-row gap-10 relative overflow-hidden group shadow-2xl">
                
                {/* Dynamic Multi-Agent Animation Background - Made Smaller and positioned */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[600px] z-0 opacity-30 pointer-events-none xl:left-auto xl:right-[10%] xl:translate-x-0">
                  <MultiAgentAnimation />
                </div>
                
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-700 z-0 pointer-events-none"></div>
                
                <div className="relative z-10 w-full xl:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20 flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                      <Rocket className="w-3.5 h-3.5" /> {t.projects.highlightBadge}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono tracking-wide">{t.projects.highlightRole}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">{t.projects.traceTitle}</h3>
                  <p className="text-base text-zinc-300 leading-relaxed mb-4 max-w-2xl">
                    {t.projects.traceDesc1}<strong className="text-emerald-300 font-medium">{t.projects.traceDesc1_highlight}</strong>{t.projects.traceDesc1_rest}
                  </p>
                  <p className="text-base text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                    {t.projects.traceDesc2}<strong className="text-zinc-200 font-medium">{t.projects.traceDesc2_highlight1}</strong>{t.projects.traceDesc2_rest1}<strong className="text-zinc-200 font-medium">{t.projects.traceDesc2_highlight2}</strong>{t.projects.traceDesc2_rest2}
                  </p>
                  <div className="flex flex-wrap gap-2.5 text-xs font-mono text-emerald-400">
                    {['LangGraph', 'Qdrant', 'Supabase', 'n8n', 'Ollama', 'MCP Server'].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-emerald-950/30 rounded-lg border border-emerald-900/40 shadow-sm backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Foreground Trace OS Tree Diagram */}
                <div className="relative z-10 w-full xl:w-1/2 flex items-center justify-center pt-8 xl:pt-0">
                  <div className="w-full max-w-[600px] transform lg:scale-95 origin-center">
                    <TraceOsTree />
                  </div>
                </div>
              </div>

              {/* Project 1 */}
              <div className="p-6 rounded-2xl bg-[#111114] border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded border border-emerald-500/20">{t.projects.p1Badge}</span>
                  <span className="text-xs text-zinc-500 font-mono">{t.projects.p1Tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t.projects.p1Title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {t.projects.p1Desc}
                </p>
                <div className="pt-6 border-t border-zinc-800/80 flex items-center gap-2 text-sm text-zinc-300 font-medium cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {t.projects.production}
                </div>
              </div>

              {/* Project 2 */}
              <div className="p-6 rounded-2xl bg-[#111114] border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded border border-cyan-500/20">{t.projects.p2Badge}</span>
                  <span className="text-xs text-zinc-500 font-mono">{t.projects.p2Tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t.projects.p2Title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {t.projects.p2Desc}
                </p>
                <div className="pt-6 border-t border-zinc-800/80 flex items-center gap-2 text-sm text-zinc-300 font-medium cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {t.projects.production}
                </div>
              </div>

              {/* Project 3 */}
              <div className="p-6 rounded-2xl bg-[#111114] border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded border border-purple-500/20">{t.projects.p3Badge}</span>
                  <span className="text-xs text-zinc-500 font-mono">{t.projects.p3Tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t.projects.p3Title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {t.projects.p3Desc}
                </p>
                <div className="pt-6 border-t border-zinc-800/80 flex items-center gap-2 text-sm text-zinc-300 font-medium cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  {t.projects.production}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Blog Section */}
        <section id="blog" className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <BlogSection />
          </FadeIn>
        </section>

        {/* Contact CTA & Form */}
        <section id="kontakt" className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="relative rounded-3xl bg-[#111114] border border-zinc-800/80 overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-emerald-500/5 blur-[100px]"></div>
              
              <div className="relative p-8 md:p-16">
                <div className="text-center mb-12">
                  <TerminalSquare className="w-8 h-8 text-emerald-400 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
                  <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                    {t.contact.desc}
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <ContactForm />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-900/20 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-mono text-zinc-100 font-medium mb-1">Vũ xuân Tiệp — {t.footer.role}</div>
            <div className="text-sm text-zinc-500">Cloud · KI · Web Engineering</div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Github className="w-4 h-4"/> GitHub</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4"/> LinkedIn</a>
            <a href="mailto:vuxuantiep@gmail.com" className="hover:text-white transition-colors flex items-center gap-2"><Mail className="w-4 h-4"/> E-Mail</a>
          </div>

          <div className="text-sm text-zinc-500 text-center md:text-right">
            © {new Date().getFullYear()} · {t.footer.imprint} · {t.footer.privacy}
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
