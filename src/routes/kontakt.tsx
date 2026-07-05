import { createFileRoute } from "@tanstack/react-router";
import { Mail, Calendar, MapPin, Github, Linkedin } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/contexts/LangContext";

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
  const { t } = useLang();

  const contacts = [
    { icon: Mail, label: t("E-Mail", "Email", "Email"), value: "tiep@vuxuantiep.de", href: "mailto:tiep@vuxuantiep.de" },
    { icon: Calendar, label: "Cal.com", value: "cal.com/tiep/30min", href: "https://cal.com/tiep/30min" },
    { icon: MapPin, label: t("Standort", "Location", "Địa điểm"), value: t("Hamburg · Remote EU", "Hamburg · Remote EU", "Hamburg · Remote toàn EU") },
    { icon: Github, label: "GitHub", value: "@vuxuantiep", href: "https://github.com/vuxuantiep" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/vuxuantiep", href: "https://linkedin.com/in/vuxuantiep" },
  ];

  const projectTypes = [
    t("Cloud-Architektur", "Cloud Architecture", "Kiến trúc đám mây"),
    t("KI-Integration / LLM", "AI Integration / LLM", "Tích hợp AI / LLM"),
    t("Web-App / Frontend", "Web App / Frontend", "Web App / Frontend"),
    t("Beratung / Audit", "Consulting / Audit", "Tư vấn / Kiểm định"),
    t("Sonstige Anfrage / andere Fragen", "Other request / other questions", "Yêu cầu khác / câu hỏi khác"),
  ];

  return (
    <div className="min-h-screen">
      <Nav />
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-20">
        <div className="text-xs uppercase tracking-widest text-primary">{t("Kontakt", "Contact", "Liên hệ")}</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight">
          {t("Lass uns reden.", "Let's talk.", "Hãy trò chuyện nhé.")}
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          {t(
            "Schreib mir ein paar Sätze zu deinem Vorhaben — ich melde mich innerhalb von 24 Stunden.",
            "Send me a few lines about your project — I'll get back to you within 24 hours.",
            "Hãy gửi cho tôi vài dòng về dự án của bạn — tôi sẽ phản hồi trong vòng 24 giờ."
          )}
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form className="rounded-2xl border border-border bg-surface/40 p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("Name", "Name", "Tên")}</label>
                <input className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50" placeholder="Max Mustermann" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("E-Mail", "Email", "Email")}</label>
                <input type="email" className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50" placeholder="max@firma.de" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">{t("Projektart", "Project type", "Loại dự án")}</label>
              <select
                aria-label={t("Projektart", "Project type", "Loại dự án")}
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50"
              >
                {projectTypes.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">{t("Nachricht", "Message", "Tin nhắn")}</label>
              <textarea
                rows={5}
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50"
                placeholder={t(
                  "Worum geht es? Zeitrahmen, Budget, aktueller Stand…",
                  "What's it about? Timeline, budget, current status…",
                  "Dự án của bạn là gì? Thời gian, ngân sách, tình trạng hiện tại…"
                )}
              />
            </div>
            <button type="submit" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              {t("Anfrage senden", "Send request", "Gửi yêu cầu")}
            </button>
          </form>

          <div className="space-y-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel={c.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4 ${c.href ? "hover:border-primary/40 transition-colors" : ""}`}
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
