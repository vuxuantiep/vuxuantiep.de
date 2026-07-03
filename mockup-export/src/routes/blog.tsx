import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — KI & neue Technologien · vuxuantiep.de" },
      { name: "description", content: "Artikel zu KI, LLMs, Cloud-Architektur und modernen Web-Technologien. Aus der Praxis, ohne Hype." },
    ],
  }),
  component: Blog,
});

const featured = {
  tag: "LLM · Praxis",
  date: "12. Juni 2026 · 8 min",
  title: "RAG in Produktion: 7 Lektionen aus echten Projekten",
  excerpt: "Retrieval-Augmented Generation klingt einfach — bis man es betreibt. Hier sind sieben Erkenntnisse, die ich in den letzten zwei Jahren bei Produktiv-Deployments gesammelt habe: von Chunk-Sizing über Hybrid-Search bis zu Eval-Pipelines.",
};

const posts = [
  { tag: "Edge", date: "28.05.2026", title: "Cloudflare Workers vs. Lambda — der ehrliche Vergleich", excerpt: "Cold Starts, Pricing, DX. Was wann wirklich besser ist." },
  { tag: "Agents", date: "14.05.2026", title: "Multi-Agent Systeme mit Tool-Calling: ein Bauplan", excerpt: "Wie man Agent-Orchestrierung baut, die nicht im Loop landet." },
  { tag: "DevEx", date: "02.05.2026", title: "TanStack Start in der Praxis: nach 3 Monaten", excerpt: "Was funktioniert, was nervt, was ich an Next.js vermisse." },
  { tag: "KI · Ethik", date: "18.04.2026", title: "EU AI Act für Entwickler: was du wirklich tun musst", excerpt: "Praktischer Leitfaden ohne juristischen Ballast." },
  { tag: "Vector DB", date: "05.04.2026", title: "pgvector vs. Pinecone vs. Qdrant — Benchmarks 2026", excerpt: "Latenz, Recall, Kosten. Mit reproduzierbarem Setup." },
  { tag: "Tooling", date: "22.03.2026", title: "Claude Code, Cursor, Continue — Workflows im Vergleich", excerpt: "Drei Wochen, drei Tools, ein ehrliches Fazit." },
];

const tags = ["Alle", "LLM", "Edge", "Agents", "Vector DB", "DevEx", "KI · Ethik", "Tooling"];

function Blog() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="text-xs uppercase tracking-widest text-primary">Blog</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight">
          KI & neue<br />Technologien.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Notizen aus der Praxis: LLMs, Edge-Computing, Cloud-Architektur und Tooling für moderne Software-Teams.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <button key={t} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${i === 0 ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="relative max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input placeholder="Artikel suchen…" className="w-full rounded-md border border-border bg-surface/50 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/50" />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <a href="#" className="group block rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-surface/50 to-accent/10 p-10 hover:border-primary/40 transition-all">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded bg-primary/20 px-2 py-0.5 text-primary font-medium">Featured</span>
                <span className="text-muted-foreground">{featured.tag} · {featured.date}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">{featured.excerpt}</p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-primary">
              Artikel lesen <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <a key={p.title} href="#" className="group flex flex-col rounded-xl border border-border bg-surface/40 p-6 hover:border-primary/40 transition-all">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded bg-primary/15 px-2 py-0.5 text-primary font-medium">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                Weiterlesen <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-md border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium hover:bg-surface">
            Ältere Artikel laden
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-2xl border border-border bg-surface/40 p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Monatlich. Kein Spam.</h2>
          <p className="mt-3 text-muted-foreground">Eine kuratierte E-Mail pro Monat zu KI, Cloud und Web. ~1.200 Leser.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" placeholder="du@example.com" className="flex-1 rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary/50" />
            <button className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">Abonnieren</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
