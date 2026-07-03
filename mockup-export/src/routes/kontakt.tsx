import { createFileRoute } from "@tanstack/react-router";
import { Mail, Calendar, MapPin, Github, Linkedin } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — vuxuantiep.de" },
      { name: "description", content: "Projekt anfragen, Erstgespräch buchen oder einfach Hallo sagen." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-20">
        <div className="text-xs uppercase tracking-widest text-primary">Kontakt</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight">
          Lass uns reden.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Schreib mir ein paar Sätze zu deinem Vorhaben — ich melde mich innerhalb von 24 Stunden.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form className="rounded-2xl border border-border bg-surface/40 p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Name</label>
                <input className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50" placeholder="Max Mustermann" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">E-Mail</label>
                <input type="email" className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50" placeholder="max@firma.de" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Projektart</label>
              <select className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50">
                <option>Cloud-Architektur</option>
                <option>KI-Integration / LLM</option>
                <option>Web-App / Frontend</option>
                <option>Beratung / Audit</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Nachricht</label>
              <textarea rows={5} className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50" placeholder="Worum geht es? Zeitrahmen, Budget, aktueller Stand…" />
            </div>
            <button className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">Anfrage senden</button>
          </form>

          <div className="space-y-4">
            {[
              { icon: Mail, label: "E-Mail", value: "hallo@vuxuantiep.de" },
              { icon: Calendar, label: "Cal.com", value: "cal.com/tiep/30min" },
              { icon: MapPin, label: "Standort", value: "Berlin · Remote EU" },
              { icon: Github, label: "GitHub", value: "@tiep" },
              { icon: Linkedin, label: "LinkedIn", value: "/in/tiep" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
