import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — vuxuantiep.de" },
      { name: "description", content: "Ausgewählte Freelance-Projekte: Cloud-Plattformen, KI-Produkte und Web-Apps." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { tag: "KI · SaaS", title: "Helio Copilot", client: "FinTech Scale-up", desc: "RAG-basierter Support-Agent über 2 Mio. Tickets. Antwortzeit von 4 h auf 12 s.", stack: ["Next.js", "OpenAI", "pgvector"], metric: "−87% Ticket-Backlog", color: "from-primary/30 to-accent/20" },
  { tag: "Cloud", title: "Aurora Platform", client: "B2B Logistik", desc: "Multi-Region AWS-Infrastruktur mit Event-Driven Architecture. 99.99% Uptime SLA.", stack: ["AWS CDK", "Kafka", "DynamoDB"], metric: "10× Durchsatz", color: "from-accent/30 to-primary/20" },
  { tag: "Web", title: "Northwind Studio", client: "Designagentur", desc: "Headless CMS + Edge-Rendering. Lighthouse 100 / 100 / 100 / 100.", stack: ["TanStack", "Sanity", "CF Workers"], metric: "1.2s LCP global", color: "from-primary/20 to-accent/30" },
  { tag: "KI · Tooling", title: "PromptForge", client: "Open Source", desc: "Prompt-Versioning und A/B-Testing für LLM-Pipelines. 4k Stars auf GitHub.", stack: ["TypeScript", "tRPC", "Postgres"], metric: "4.2k ⭐", color: "from-accent/20 to-primary/30" },
  { tag: "Cloud", title: "Polaris ETL", client: "Healthcare", desc: "HIPAA-konforme Daten-Pipelines auf GCP. Migration von 400 GB legacy ETL.", stack: ["GCP", "Dataflow", "BigQuery"], metric: "−62% Kosten", color: "from-primary/30 to-accent/10" },
  { tag: "Web · KI", title: "Lumen Editor", client: "MediaTech", desc: "Echtzeit-Kollaborativer Editor mit KI-Vorschlägen. Y.js + LLM-Streaming.", stack: ["React", "Yjs", "Claude"], metric: "12k MAU", color: "from-accent/30 to-primary/10" },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="text-xs uppercase tracking-widest text-primary">Portfolio</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight max-w-3xl">
          Ausgewählte Arbeiten<br />der letzten <span className="text-primary">5 Jahre</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Eine Auswahl produktiver Projekte für Startups, Scale-ups und Mittelstand. Mehr auf Anfrage unter NDA.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <a key={p.title} href="#" className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-8 hover:border-primary/40 transition-all">
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.color} opacity-40 group-hover:opacity-70 transition-opacity`} />
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary">{p.tag}</div>
                  <h2 className="mt-2 text-2xl font-semibold">{p.title}</h2>
                  <div className="text-sm text-muted-foreground">{p.client}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="mt-5 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded bg-background/60 px-2 py-1 text-xs font-mono text-muted-foreground">{s}</span>
                  ))}
                </div>
                <div className="text-sm font-medium text-primary">{p.metric}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-xs uppercase tracking-widest text-accent">Stimmen</div>
        <h2 className="mt-2 text-3xl font-semibold">Was Kunden sagen</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { q: "Tiep hat unsere KI-Roadmap in 6 Wochen umgesetzt, wofür intern 6 Monate geplant waren.", a: "Sarah K.", role: "CTO, FinTech" },
            { q: "Sauberer Code, klare Kommunikation, faire Preise. Wir buchen ihn jedes Quartal nach.", a: "Markus B.", role: "Head of Engineering" },
            { q: "Endlich jemand, der KI-Hype und Realität trennen kann. Pragmatisch und liefert.", a: "Lena W.", role: "Founder" },
          ].map((t) => (
            <div key={t.a} className="rounded-xl border border-border bg-surface/40 p-6">
              <p className="text-sm text-foreground leading-relaxed">„{t.q}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="text-sm font-medium">{t.a}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-border bg-surface/40 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Dein Projekt als nächstes?</h2>
            <p className="text-muted-foreground mt-2">Lass uns 30 Minuten unverbindlich sprechen.</p>
          </div>
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Anfrage senden <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
