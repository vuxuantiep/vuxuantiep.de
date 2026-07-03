import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Cpu, Code2, Sparkles, Github, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "vuxuantiep.de — IT Freelancer für Cloud, KI & Web" },
      { name: "description", content: "Freiberuflicher IT-Engineer. Ich baue performante Cloud-Plattformen, KI-Integrationen und moderne Web-Anwendungen." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Verfügbar ab Q3 2026
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              Software, die <span className="text-primary">skaliert</span>.<br />
              KI, die <span className="text-accent">liefert</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Hi, ich bin Tiep — freiberuflicher IT-Engineer. Ich konzipiere und baue Cloud-Plattformen,
              integriere KI in bestehende Produkte und liefere produktionsreifen Code.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Projekte ansehen <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/50 px-5 py-3 text-sm font-medium hover:bg-surface">
                Erstgespräch buchen
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <div>⭐ 4.9 / 5 · 32 Reviews</div>
              <div>🏆 AWS Certified Solutions Architect</div>
              <div>🇩🇪 Remote / EU-weit</div>
            </div>
          </div>

          {/* Code mockup card */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <div className="rounded-xl border border-border bg-surface shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-background/40 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-primary/70" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">~/projects/tiep/deploy.ts</span>
              </div>
              <pre className="p-5 text-xs leading-relaxed font-mono overflow-x-auto">
<span className="text-muted-foreground">// Cloud-native by default</span>{"\n"}
<span className="text-accent">import</span> {"{ Stack }"} <span className="text-accent">from</span> <span className="text-primary">"aws-cdk-lib"</span>;{"\n"}
<span className="text-accent">import</span> {"{ AIAgent }"} <span className="text-accent">from</span> <span className="text-primary">"@tiep/ai"</span>;{"\n\n"}
<span className="text-accent">export const</span> <span className="text-primary">app</span> = <span className="text-accent">new</span> Stack({"{"}{"\n"}
{"  "}region: <span className="text-primary">"eu-central-1"</span>,{"\n"}
{"  "}runtime: <span className="text-primary">"edge"</span>,{"\n"}
{"  "}agents: [<span className="text-accent">new</span> AIAgent(<span className="text-primary">"copilot"</span>)],{"\n"}
{"}"});{"\n\n"}
<span className="text-primary">✓</span> <span className="text-muted-foreground">deployed in 42s</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary">Leistungen</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Was ich für dich baue</h2>
          </div>
          <Link to="/portfolio" className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            Alle Projekte <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Cloud, title: "Cloud Architektur", desc: "AWS, GCP, Cloudflare. Infrastructure as Code, kostenoptimiert und produktionsreif.", tags: ["AWS CDK", "Terraform", "K8s"] },
            { icon: Cpu, title: "KI-Integration", desc: "LLM-Agents, RAG-Pipelines, Embeddings. Vom Prototyp bis zum SLA-gestützten Betrieb.", tags: ["OpenAI", "LangChain", "Vector DB"] },
            { icon: Code2, title: "Web Engineering", desc: "TypeScript, React, Edge-Runtimes. Schnelle Time-to-Market ohne technische Schulden.", tags: ["TS", "React", "TanStack"] },
          ].map((s) => (
            <div key={s.title} className="group rounded-xl border border-border bg-surface/50 p-6 hover:border-primary/40 hover:bg-surface transition-all">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-md bg-background/60 px-2 py-1 text-xs font-mono text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-border bg-surface/40 p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <div className="text-xs uppercase tracking-widest text-accent">Tech Stack</div>
              <h2 className="mt-2 text-3xl font-semibold">Werkzeuge, denen ich vertraue</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Erprobt in Produktion bei Startups und Mittelstand. Pragmatisch ausgewählt, nicht hype-getrieben.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["TypeScript", "React 19", "TanStack Start", "Node.js", "PostgreSQL", "AWS / CDK", "Cloudflare Workers", "Docker / K8s", "OpenAI / Claude", "LangChain", "Supabase", "Stripe"].map((t) => (
                <div key={t} className="flex items-center gap-2 rounded-md border border-border bg-background/40 px-3 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary inline-flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Aus dem Blog
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold">KI & neue Technologien</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            Alle Artikel <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { tag: "LLM", title: "RAG in Produktion: 7 Lektionen aus echten Projekten", date: "12. Juni 2026" },
            { tag: "Edge", title: "Cloudflare Workers vs. Lambda — der ehrliche Vergleich", date: "28. Mai 2026" },
            { tag: "Agents", title: "Multi-Agent Systeme mit Tool-Calling: ein Bauplan", date: "14. Mai 2026" },
          ].map((p) => (
            <Link key={p.title} to="/blog" className="group rounded-xl border border-border bg-surface/40 p-6 hover:border-primary/40 transition-all">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded bg-primary/15 px-2 py-0.5 text-primary font-medium">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
              <div className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                Lesen <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-surface/60 to-accent/10 p-12 text-center">
          <Github className="mx-auto h-8 w-8 text-muted-foreground" />
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Hast du ein Projekt im Kopf?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            30 Minuten Erstgespräch, kostenlos. Wir prüfen Scope, Stack und Zeitplan — und ob wir zueinander passen.
          </p>
          <Link to="/kontakt" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Termin anfragen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
