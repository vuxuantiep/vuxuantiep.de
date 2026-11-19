import { createFileRoute } from "@tanstack/react-router";
import { Mail, Calendar, MapPin, Github, Linkedin, CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/contexts/LangContext";
import { sendContactMessage } from "@/lib/contact";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/kontakt")({
  head: ({ match }) => seoHead({
    path: "/kontakt",
    search: match.search,
    title: {
      de: "Kontakt — vuxuantiep.de",
      en: "Contact — vuxuantiep.de",
      vi: "Liên hệ — vuxuantiep.de",
    },
    description: {
      de: "Projekt anfragen, Erstgespräch buchen oder einfach Hallo sagen.",
      en: "Request a project, book an initial call, or just say hello.",
      vi: "Gửi yêu cầu dự án, đặt lịch tư vấn hoặc chỉ để chào hỏi.",
    },
  }),
  component: Kontakt,
});

function Kontakt() {
  const { t, lang } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");
    try {
      await sendContactMessage({
        data: { name, email, projectType: projectType || "—", message, lang },
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "");
    }
  };

  const contacts = [
    { icon: Mail, label: t("E-Mail", "Email", "Email"), value: "tiep@vuxuantiep.de", href: "mailto:tiep@vuxuantiep.de" },
    // Cal.com-Link (cal.com/tiep/30min) lieferte 404 – bis ein gültiger Buchungslink
    // vorliegt, Terminanfrage per E-Mail (18.11.2026).
    { icon: Calendar, label: t("Erstgespräch (30 Min.)", "Intro call (30 min)", "Tư vấn ban đầu (30 phút)"), value: t("Termin per E-Mail anfragen", "Request a slot by email", "Đặt lịch qua email"), href: "mailto:tiep@vuxuantiep.de?subject=Terminanfrage%20Erstgespr%C3%A4ch%2030%20Minuten" },
    { icon: MapPin, label: t("Standort", "Location", "Địa điểm"), value: t("Hamburg · Remote EU", "Hamburg · Remote EU", "Hamburg · Remote toàn EU") },
    { icon: Github, label: "GitHub", value: "@vuxuantiep", href: "https://github.com/vuxuantiep" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/vuxuantiep", href: "https://linkedin.com/in/vuxuantiep" },
  ];

  // passend zu den drei Angeboten auf der Startseite (Entwurf 19.11.2026)
  const projectTypes = [
    t("KI-Potenzialanalyse", "AI potential analysis", "Phân tích tiềm năng AI"),
    "Local AI & Private RAG",
    "Identity & AI Automation",
    t("IT-Betreuung / Support", "IT support", "Hỗ trợ IT"),
    t("Sonstige Anfrage", "Other request", "Yêu cầu khác"),
  ];

  return (
    <div className="min-h-screen">
      <Nav />
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-20">
        <div className="text-xs uppercase tracking-widest text-primary">{t("Kontakt", "Contact", "Liên hệ")}</div>
        <h1 className="mt-3 font-display text-[1.75rem] md:text-[2.25rem] font-semibold leading-tight max-w-3xl">
          {t(
            "Sie möchten KI einsetzen, ohne sensible Daten aus der Hand zu geben?",
            "Want to use AI without giving away sensitive data?",
            "Bạn muốn dùng AI mà không để lộ dữ liệu nhạy cảm?"
          )}
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          {t(
            "Im kostenlosen 30-Minuten-Erstgespräch besprechen wir:",
            "In a free 30-minute first call we discuss:",
            "Trong buổi tư vấn miễn phí 30 phút, chúng ta sẽ trao đổi:"
          )}
        </p>
        <ul className="mt-3 max-w-xl space-y-1.5 text-foreground/85">
          <li>· {t("Ihre aktuelle IT-Umgebung", "Your current IT environment", "Môi trường IT hiện tại của bạn")}</li>
          <li>· {t("einen konkreten KI-Anwendungsfall", "one concrete AI use case", "một tình huống ứng dụng AI cụ thể")}</li>
          <li>· {t("eine mögliche sichere Architektur", "a possible secure architecture", "một kiến trúc an toàn khả thi")}</li>
        </ul>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form className="rounded-2xl border border-border bg-surface/40 p-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("Name", "Name", "Tên")}</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50"
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("E-Mail", "Email", "Email")}</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50"
                  placeholder="max@firma.de"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">{t("Projektart", "Project type", "Loại dự án")}</label>
              <select
                aria-label={t("Projektart", "Project type", "Loại dự án")}
                value={projectType || projectTypes[0]}
                onChange={(e) => setProjectType(e.target.value)}
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
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50"
                placeholder={t(
                  "Worum geht es? Zeitrahmen, Budget, aktueller Stand…",
                  "What's it about? Timeline, budget, current status…",
                  "Dự án của bạn là gì? Thời gian, ngân sách, tình trạng hiện tại…"
                )}
              />
            </div>
            {/* Datenschutzhinweis direkt am Formular (Art. 13 DSGVO, 18.11.2026) */}
            <p className="text-xs leading-relaxed text-muted-foreground">
              {t(
                "Mit dem Absenden werden Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeitet. Mehr dazu in der ",
                "By submitting, your details are processed to handle your enquiry. More in the ",
                "Khi gửi, thông tin của bạn được xử lý để giải quyết yêu cầu. Xem thêm trong "
              )}
              <a href="/datenschutz" className="underline underline-offset-2 hover:text-foreground">
                {t("Datenschutzerklärung", "privacy policy", "chính sách quyền riêng tư")}
              </a>
              .
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
              >
                {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "sending"
                  ? t("Wird gesendet…", "Sending…", "Đang gửi…")
                  : t("Anfrage senden", "Send request", "Gửi yêu cầu")}
              </button>
              {status === "success" && (
                <span className="inline-flex items-center gap-1.5 text-sm text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                  {t("Nachricht gesendet — ich melde mich!", "Message sent — I'll get back to you!", "Đã gửi tin nhắn — tôi sẽ liên hệ lại!")}
                </span>
              )}
              {status === "error" && (
                <span className="inline-flex items-center gap-1.5 text-sm text-destructive">
                  <TriangleAlert className="h-4 w-4" />
                  {errorMsg || t("Senden fehlgeschlagen. Bitte per E-Mail an tiep@vuxuantiep.de.", "Sending failed. Please email tiep@vuxuantiep.de.", "Gửi thất bại. Vui lòng email tiep@vuxuantiep.de.")}
                </span>
              )}
            </div>
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
