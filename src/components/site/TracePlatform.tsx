import { Headset, HeartHandshake, ShoppingCart, Glasses, Smartphone, Cpu, Network, Fingerprint, ShieldCheck, FileCheck2, Workflow, BrainCircuit } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

/**
 * TRACE AI — „One Platform. Many Lives." (CEO-Leitbild 18.11.2026).
 * Vier Produktlinien auf einem gemeinsamen Core + gemeinsamer Infrastruktur.
 * Status-Labels bewusst ehrlich: nur TRACE IT ist im Aufbau, der Rest ist Konzept.
 * TRACE Care ausdrücklich als Alltagsbegleiter, nicht als Medizinprodukt.
 */
export function TracePlatform() {
  const { t } = useLang();

  const lines = [
    {
      icon: Headset,
      name: "TRACE IT",
      area: t("Helpdesk · MDM · IAM", "Helpdesk · MDM · IAM", "Helpdesk · MDM · IAM"),
      points: [
        t("IT-Support mit KI", "AI-powered IT support", "Hỗ trợ IT bằng AI"),
        t("Geräte- & Nutzerverwaltung", "Device & user management", "Quản lý thiết bị & người dùng"),
        t("Sichere Identitäten", "Secure identities", "Danh tính an toàn"),
      ],
      status: t("Im Aufbau · Fokus", "In development · focus", "Đang phát triển · trọng tâm"),
      active: true,
    },
    {
      icon: HeartHandshake,
      name: "TRACE Care",
      area: t("Senioren · Familie · Alltag", "Seniors · family · daily life", "Người cao tuổi · gia đình · đời sống"),
      points: [
        t("Begleitung im Alltag", "Everyday companion", "Đồng hành hằng ngày"),
        t("Erinnerungen & Kontakt zur Familie", "Reminders & family contact", "Nhắc nhở & liên lạc gia đình"),
        t("Einfache Bedienung per Sprache", "Simple voice control", "Điều khiển bằng giọng nói đơn giản"),
      ],
      status: t("Konzept · mit Partnern", "Concept · with partners", "Ý tưởng · cùng đối tác"),
    },
    {
      icon: ShoppingCart,
      name: "TRACE Commerce",
      area: t("Einkauf · Produktberatung", "Shopping · product advice", "Mua sắm · tư vấn sản phẩm"),
      points: [
        t("KI-Produktberatung", "AI product advice", "Tư vấn sản phẩm bằng AI"),
        t("Persönliche Kriterien, lokal gespeichert", "Personal criteria, stored locally", "Tiêu chí cá nhân, lưu cục bộ"),
        t("Kauf erst nach Bestätigung", "Purchase only after confirmation", "Chỉ mua sau khi xác nhận"),
      ],
      status: t("Konzept", "Concept", "Ý tưởng"),
    },
    {
      icon: Glasses,
      name: "TRACE Vision",
      area: t("Smart Glasses · Wearables", "Smart glasses · wearables", "Kính thông minh · thiết bị đeo"),
      points: [
        t("Augmented Assistance", "Augmented assistance", "Hỗ trợ tăng cường"),
        t("Hands-free KI bei der Arbeit", "Hands-free AI at work", "AI rảnh tay khi làm việc"),
        t("Datenschutz by Design", "Privacy by design", "Bảo mật ngay từ thiết kế"),
      ],
      status: t("Vision", "Vision", "Tầm nhìn"),
    },
  ];

  const infra = [
    { icon: Smartphone, label: "Android" },
    { icon: Cpu, label: "On-device AI" },
    { icon: Network, label: "Hybrid AI Gateway" },
    { icon: Fingerprint, label: "Identity" },
    { icon: ShieldCheck, label: "Security" },
    { icon: FileCheck2, label: "Audit" },
    { icon: Workflow, label: "Automation" },
  ];

  return (
    <section id="trace-ai" className="section-parchment relative isolate bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t("Eigene Plattform", "Own platform", "Nền tảng riêng")}
            </div>
            <h2 className="mt-3 text-[1.5rem] md:text-[1.875rem] font-semibold leading-tight">
              TRACE AI — {t("Eine Plattform. Viele Lebensbereiche.", "One platform. Many lives.", "Một nền tảng. Nhiều cuộc sống.")}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {t(
                "Statt sechs einzelner Apps entsteht ein gemeinsamer, lokaler KI-Kern mit Identität, Sicherheit und Audit – darauf bauen alle Anwendungen auf.",
                "Instead of six separate apps, I'm building one shared local AI core with identity, security and audit – every application builds on it.",
                "Thay vì sáu ứng dụng riêng lẻ, tôi xây dựng một lõi AI cục bộ chung với danh tính, bảo mật và kiểm toán – mọi ứng dụng đều dựa trên đó."
              )}
            </p>
          </div>
          <div className="text-sm font-medium italic text-primary md:text-base">
            {t("Intelligent. Sicher. Hybrid.", "Intelligent. Secure. Hybrid.", "Thông minh. An toàn. Lai.")}
          </div>
        </div>

        {/* Produktlinien */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lines.map((line) => (
            <div key={line.name} className={`flex flex-col rounded-3xl p-6 ${line.active ? "bg-card" : "bg-card/60"}`}>
              <div className="flex items-start justify-between gap-3">
                <div className={`grid h-11 w-11 place-items-center rounded-2xl ${line.active ? "bg-primary text-primary-foreground" : "bg-[var(--beige)] text-primary"}`}>
                  <line.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${line.active ? "bg-primary/10 text-primary" : "bg-[var(--beige)] text-muted-foreground"}`}>
                  {line.status}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{line.name}</h3>
              <div className="mt-0.5 text-sm text-muted-foreground">{line.area}</div>
              <ul className="mt-4 space-y-1.5 text-[15px] text-foreground/85">
                {line.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Verbindung → Core */}
        <div aria-hidden className="mx-auto h-8 w-px bg-gradient-to-b from-primary/0 to-primary/40" />

        <div className="rounded-[2rem] bg-[oklch(0.3_0.05_165)] px-6 py-8 text-[oklch(0.97_0.01_85)] md:flex md:items-center md:justify-between md:gap-10 md:px-10">
          <div className="flex items-center gap-4">
            <BrainCircuit className="h-10 w-10 shrink-0 opacity-90" strokeWidth={1.4} />
            <div>
              <div className="text-2xl font-semibold md:text-3xl">TRACE AI Core</div>
              <div className="mt-1 text-sm opacity-75 md:text-base">Local LLM · Memory · RAG · Voice · AI Agents</div>
            </div>
          </div>
          <ul className="mt-5 grid gap-1.5 text-sm opacity-90 md:mt-0 md:text-[15px]">
            <li>✓ {t("Personalisierte KI – lokal", "Personalised AI – local", "AI cá nhân hóa – cục bộ")}</li>
            <li>✓ {t("Kontext & Gedächtnis, löschbar", "Context & memory, deletable", "Ngữ cảnh & bộ nhớ, có thể xóa")}</li>
            <li>✓ {t("Agenten – kritische Schritte mit Freigabe", "Agents – critical steps with approval", "Tác tử – bước quan trọng cần phê duyệt")}</li>
          </ul>
        </div>

        <div aria-hidden className="mx-auto h-8 w-px bg-gradient-to-b from-primary/40 to-primary/0" />

        {/* Gemeinsame Infrastruktur */}
        <div className="text-center text-sm font-medium text-muted-foreground">
          {t("Gemeinsame Infrastruktur", "Shared infrastructure", "Hạ tầng chung")}
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2.5">
          {infra.map((i) => (
            <span key={i.label} className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm">
              <i.icon className="h-4 w-4 text-primary" strokeWidth={1.8} /> {i.label}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          {t(
            "TRACE Care ist als Alltagsbegleiter geplant, nicht als Medizinprodukt. Entwicklung und Pilotbetrieb ohne echte Kunden- oder Gesundheitsdaten.",
            "TRACE Care is planned as an everyday companion, not a medical device. Development and pilots use no real customer or health data.",
            "TRACE Care được thiết kế là trợ lý đời sống, không phải thiết bị y tế. Phát triển và thử nghiệm không dùng dữ liệu khách hàng hay sức khỏe thật."
          )}
        </p>
      </div>
    </section>
  );
}
