import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Cloud, Cpu, Bot, Lock, Zap, X, KeyRound, FileCheck, Users, ScrollText } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ParticleBackground } from "@/components/site/ParticleBackground";
import { useLang } from "@/contexts/LangContext";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/broki")({
  head: ({ match }) => seoHead({
    path: "/broki",
    search: match.search,
    title: {
      de: "Broki AI — Die KI, die im Browser bleibt | vuxuantiep.de",
      en: "Broki AI — The AI that stays in your browser | vuxuantiep.de",
      vi: "Broki AI — AI ở lại trong trình duyệt | vuxuantiep.de",
    },
    description: {
      de: "Broki AI: KI-Wiki-Assistent, 100 % lokal im Browser (WebGPU/WASM). DSGVO-konform, keine Cloud, null Serverkosten. Für Kanzleien, Praxen und regulierte Branchen.",
      en: "Broki AI: local AI knowledge assistant, 100% in the browser (WebGPU/WASM). GDPR-compliant, no cloud, zero server costs.",
      vi: "Broki AI: trợ lý kiến thức AI, 100% cục bộ trong trình duyệt. Tuân thủ GDPR, không đám mây.",
    },
  }),
  component: BrokiPage,
});

function BrokiPage() {
  const { t } = useLang();

  const vorteile = [
    { icon: Lock, titel: t("100 % lokal", "100% local", "100% cục bộ"),
      text: t("Inferenz im Browser via WebGPU/WASM. Ihre Daten verlassen das Gerät nie.",
        "Inference in the browser via WebGPU/WASM. Your data never leaves the device.",
        "Suy luận trong trình duyệt. Dữ liệu không bao giờ rời khỏi thiết bị.") },
    { icon: ShieldCheck, titel: t("DSGVO by Design", "GDPR by design", "GDPR ngay từ thiết kế"),
      text: t("Kein Mandantengeheimnis-Bruch, kein Betriebsrat-Konflikt. Prüfbar in der Netzwerk-Konsole.",
        "No breach of confidentiality. Verifiable in the network console.",
        "Không vi phạm bảo mật. Có thể kiểm chứng trong bảng điều khiển mạng.") },
    { icon: Cloud, titel: t("Keine Cloud, 0 € Server", "No cloud, €0 servers", "Không đám mây, 0 € máy chủ"),
      text: t("Die Rechenleistung stellt der Laptop des Nutzers. Skaliert kostenlos mit jedem Mitarbeiter.",
        "Compute runs on the user's laptop. Scales for free with every employee.",
        "Tính toán chạy trên máy của người dùng. Mở rộng miễn phí.") },
    { icon: Zap, titel: t("Proaktiv statt Chatbot", "Proactive, not a chatbot", "Chủ động, không phải chatbot"),
      text: t("Warnt aktiv bei Fehlern und fehlenden Angaben — mit Quelle, direkt im Arbeits-Tab.",
        "Actively flags errors and missing data — with sources, right in your tab.",
        "Chủ động cảnh báo lỗi — kèm nguồn, ngay trong tab làm việc.") },
    { icon: Bot, titel: t("Ihr Firmenwissen", "Your company knowledge", "Kiến thức công ty"),
      text: t("Antworten aus Ihrem eigenen Wiki und Ihren Dokumenten — lokal indiziert, mit Rollen.",
        "Answers from your own wiki and documents — locally indexed, role-based.",
        "Câu trả lời từ wiki của bạn — lập chỉ mục cục bộ, theo vai trò.") },
    { icon: Cpu, titel: t("Krisensicher", "Resilient", "Chống khủng hoảng"),
      text: t("Läuft offline weiter, wenn Cloud oder Internet ausfallen. Integrierter Crash-Rollback.",
        "Keeps working offline if cloud or internet fail. Built-in crash rollback.",
        "Vẫn hoạt động ngoại tuyến. Có khôi phục sau sự cố.") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
        <ParticleBackground />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 font-mono text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {t("Online · 100 % lokal im Browser", "Online · 100% local in the browser", "Trực tuyến · 100% cục bộ")}
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-[1.75rem] md:text-[2.25rem] font-semibold leading-[1.1]">
            {t("Die KI, die im Browser ", "The AI that stays in your ", "AI ở lại trong ")}
            <span className="text-primary">{t("bleibt", "browser", "trình duyệt")}</span>.<br />
            {t("Zu 100 % ", "100% ", "100% ")}<span className="text-primary">{t("privat", "private", "riêng tư")}</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            {t(
              "Broki AI bringt Ihren KI-Berater und Ihr Firmenwissen in jeden Browser-Tab — 100 % lokal via WebGPU und WebAssembly. Null Serverkosten. Absolute DSGVO-Sicherheit.",
              "Broki AI brings your AI advisor and company knowledge into every browser tab — 100% local via WebGPU and WebAssembly. Zero server costs. Absolute GDPR safety.",
              "Broki AI mang cố vấn AI và kiến thức công ty vào mọi tab trình duyệt — 100% cục bộ. Không chi phí máy chủ. An toàn GDPR tuyệt đối.",
            )}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              {t("B2B-Demo vereinbaren", "Book a B2B demo", "Đặt lịch demo B2B")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/50 px-5 py-3 text-sm font-medium hover:bg-surface">
              {t("Alle Projekte", "All projects", "Tất cả dự án")}
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span className="text-primary">✓ {t("100 % lokal", "100% local", "100% cục bộ")}</span>
            <span className="text-primary">✓ DSGVO-konform</span>
            <span className="text-primary">✓ {t("keine Cloud", "no cloud", "không đám mây")}</span>
            <span className="text-primary">✓ {t("keine Datenübertragung", "no data transfer", "không truyền dữ liệu")}</span>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">{t("Warum Broki", "Why Broki", "Vì sao Broki")}</div>
          <h2 className="mt-2 font-display text-[1.5rem] md:text-[1.875rem] font-semibold">
            {t("Eine Kern-Technologie. Für regulierte Branchen gebaut.", "One core technology. Built for regulated industries.", "Một công nghệ lõi. Cho ngành được quản lý.")}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vorteile.map((v) => (
            <div key={v.titel} className="rounded-xl border border-border bg-surface/40 p-5">
              <v.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-display text-base font-semibold">{v.titel}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Abgrenzung */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-border bg-surface/40 p-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/5 px-3 py-1 text-xs text-red-400">
            <X className="h-3.5 w-3.5" /> {t("Das Problem mit Cloud-KI-Assistenten", "The problem with cloud AI assistants", "Vấn đề với trợ lý AI đám mây")}
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t(
              "Populäre KI-Browser-Assistenten senden Prompts und Dokumente in die Cloud — für Kanzleien und Praxen ein Compliance-Verstoß. Broki ist die einzige KI, die Ihre Mandantendaten nie sieht.",
              "Popular AI browser assistants send prompts and documents to the cloud — a compliance violation for law firms and practices. Broki is the only AI that never sees your client data.",
              "Các trợ lý AI phổ biến gửi dữ liệu lên đám mây — vi phạm tuân thủ. Broki là AI duy nhất không bao giờ thấy dữ liệu khách hàng của bạn.",
            )}
          </p>
          <p className="mt-4 font-mono text-sm text-primary">
            {t("Kein Chatbot. Eine Intelligenzschicht für Ihr Unternehmen.", "Not a chatbot. An intelligence layer for your company.", "Không phải chatbot. Một lớp trí tuệ cho doanh nghiệp.")}
          </p>
        </div>
      </section>

      {/* Sicherheit & Compliance */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">{t("Für die IT-Sicherheit gebaut", "Built for IT security", "Xây dựng cho an ninh CNTT")}</div>
          <h2 className="mt-2 font-display text-[1.5rem] md:text-[1.875rem] font-semibold">
            {t("Sicherheit, Kontrolle & Auditierbarkeit", "Security, control & auditability", "Bảo mật, kiểm soát & khả năng kiểm toán")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            {t(
              "Konzipiert für regulierte Branchen — DSGVO, EU AI Act und NIS2 auditierbar, auf dem Weg zu BSI- und ISO-27001-Konformität.",
              "Designed for regulated industries — GDPR, EU AI Act and NIS2 auditable, on the path to BSI and ISO 27001 conformity.",
              "Thiết kế cho ngành được quản lý — GDPR, EU AI Act và NIS2 có thể kiểm toán, hướng tới BSI và ISO 27001.",
            )}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: KeyRound, titel: t("Signatur & Private Key", "Signature & private key", "Chữ ký & khóa riêng"),
              text: t("Jedes Wissenspaket ist ECDSA-signiert; manipulierte Daten werden sofort gesperrt (Data-Poisoning-Schutz).",
                "Every knowledge package is ECDSA-signed; tampered data is locked immediately.",
                "Mọi gói kiến thức được ký ECDSA; dữ liệu bị sửa đổi bị khóa ngay.") },
            { icon: Users, titel: t("Zero-Trust & Access Control", "Zero-trust & access control", "Zero-trust & kiểm soát truy cập"),
              text: t("Rollenbasierter Zugriff; Partnern lässt sich ein gefilterter Wissensteil geben — nie der System-Zugang.",
                "Role-based access; partners get a filtered slice of knowledge — never system access.",
                "Truy cập theo vai trò; đối tác nhận phần kiến thức đã lọc — không bao giờ truy cập hệ thống.") },
            { icon: ScrollText, titel: t("Auditierbar", "Auditable", "Có thể kiểm toán"),
              text: t("Nachvollziehbare Verarbeitung, dokumentierte Entscheidungswege — prüfbar für Betriebsrat und Revision.",
                "Traceable processing, documented decisions — verifiable for works council and audit.",
                "Xử lý minh bạch, quyết định được ghi lại — có thể kiểm chứng.") },
            { icon: FileCheck, titel: t("EU AI Act · NIS2 · BSI/ISO", "EU AI Act · NIS2 · BSI/ISO", "EU AI Act · NIS2 · BSI/ISO"),
              text: t("An den kommenden EU-Regeln ausgerichtet; Sicherheitskonzept auf ISO 27001 und BSI-Grundschutz vorbereitet.",
                "Aligned with upcoming EU rules; security concept prepared for ISO 27001 and BSI baseline protection.",
                "Phù hợp quy định EU; chuẩn bị cho ISO 27001 và BSI.") },
          ].map((s) => (
            <div key={s.titel} className="rounded-xl border border-border bg-surface/40 p-5">
              <s.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-display text-sm font-semibold">{s.titel}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center font-mono text-[11px] text-muted-foreground/70">
          {t(
            "Hinweis: Zertifizierungen (BSI, ISO 27001) sind Ziel und in Vorbereitung — nicht als abgeschlossen dargestellt.",
            "Note: certifications (BSI, ISO 27001) are a goal and in preparation — not presented as completed.",
            "Lưu ý: chứng nhận (BSI, ISO 27001) là mục tiêu và đang chuẩn bị.",
          )}
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">
          {t("Bereit für KI ohne Cloud-Risiko?", "Ready for AI without cloud risk?", "Sẵn sàng cho AI không rủi ro đám mây?")}
        </h2>
        <div className="mt-6 flex justify-center">
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            {t("Erstgespräch buchen", "Book an initial call", "Đặt lịch tư vấn")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
