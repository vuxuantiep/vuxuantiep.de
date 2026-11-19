import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Compass, Database, Headset, KeyRound } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

/**
 * Drei konkrete Angebote (Entwurf 19.11.2026): Problem → Leistung → Ergebnis → Dauer.
 * Preise bewusst noch „nach Erstgespräch“ – Festpreise erst nach
 * Wirtschaftlichkeits-Prüfung und CEO-Freigabe eintragen.
 */
export function Offers() {
  const { t } = useLang();

  const offers = [
    {
      icon: Compass,
      step: t("Einstieg", "Entry", "Khởi đầu"),
      title: t("KI-Potenzialanalyse", "AI potential analysis", "Phân tích tiềm năng AI"),
      problem: t(
        "Sie wollen KI nutzen, wissen aber nicht, wo sie sich lohnt und was mit Ihren Daten passieren darf.",
        "You want to use AI but don't know where it pays off or what may happen to your data.",
        "Bạn muốn dùng AI nhưng chưa biết dùng ở đâu hiệu quả và dữ liệu của bạn được phép xử lý thế nào."
      ),
      items: [
        t("Bestandsaufnahme Ihrer IT und Datenlage", "Review of your IT and data", "Rà soát hệ thống IT và dữ liệu"),
        t("2–3 passende Anwendungsfälle mit Nutzen", "2–3 suitable use cases with benefits", "2–3 tình huống sử dụng phù hợp kèm lợi ích"),
        t("Datenschutz-Einschätzung: lokal, hybrid oder Cloud", "Privacy assessment: local, hybrid or cloud", "Đánh giá bảo mật: cục bộ, lai hay đám mây"),
      ],
      result: t(
        "Bericht mit Architekturvorschlag und Maßnahmenplan",
        "Report with architecture proposal and action plan",
        "Báo cáo kèm đề xuất kiến trúc và kế hoạch hành động"
      ),
      duration: t("ca. 1–2 Wochen", "approx. 1–2 weeks", "khoảng 1–2 tuần"),
    },
    {
      icon: Database,
      step: t("Kernleistung", "Core service", "Dịch vụ chính"),
      title: "Local AI & Private RAG",
      problem: t(
        "Ihr Wissen steckt in Dokumenten, die nicht in fremde Cloud-KIs gehören.",
        "Your knowledge sits in documents that don't belong in third-party cloud AI.",
        "Tri thức của bạn nằm trong tài liệu không nên đưa lên AI đám mây bên ngoài."
      ),
      items: [
        t("KI-Assistent auf eigener Hardware (z. B. Ollama)", "AI assistant on your own hardware (e.g. Ollama)", "Trợ lý AI trên phần cứng riêng (vd. Ollama)"),
        t("Wissenssuche über Ihre Dokumente", "Knowledge search across your documents", "Tìm kiếm tri thức trong tài liệu của bạn"),
        t("Zugriff nur mit Login und passenden Rechten", "Access only with login and matching permissions", "Chỉ truy cập khi đăng nhập và có quyền phù hợp"),
      ],
      result: t(
        "Funktionsfähiger KI-Assistent mit Ihrer Dokumentensuche",
        "Working AI assistant with search across your documents",
        "Trợ lý AI hoạt động được với tìm kiếm tài liệu của bạn"
      ),
      duration: t("ca. 3–6 Wochen", "approx. 3–6 weeks", "khoảng 3–6 tuần"),
      featured: true,
    },
    {
      icon: KeyRound,
      step: t("Ausbau", "Expansion", "Mở rộng"),
      title: "Identity & AI Automation",
      problem: t(
        "Zu viele Konten, unklare Rechte und Routinearbeit, die Ihr Team aufhält.",
        "Too many accounts, unclear permissions and routine work slowing your team down.",
        "Quá nhiều tài khoản, phân quyền không rõ ràng và việc lặp lại làm chậm đội ngũ."
      ),
      items: [
        t("Entra ID, Active Directory oder Keycloak", "Entra ID, Active Directory or Keycloak", "Entra ID, Active Directory hoặc Keycloak"),
        t("Rollen, MFA und Conditional Access", "Roles, MFA and Conditional Access", "Vai trò, MFA và Conditional Access"),
        t("KI-Workflows mit menschlicher Freigabe", "AI workflows with human approval", "Quy trình AI có con người phê duyệt"),
      ],
      result: t(
        "Kontrollierte, nachvollziehbare Abläufe mit klaren Zugriffsrechten",
        "Controlled, traceable processes with clear access rights",
        "Quy trình được kiểm soát, minh bạch với quyền truy cập rõ ràng"
      ),
      duration: t("nach Umfang", "depending on scope", "tùy phạm vi"),
    },
  ];

  return (
    <section id="angebote" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {t("Angebote", "Offers", "Gói dịch vụ")}
        </div>
        <h2 className="mt-3 text-[1.6rem] font-semibold leading-tight md:text-4xl">
          {t("Wie ich Sie unterstütze", "How I can help you", "Tôi có thể hỗ trợ bạn thế nào")}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {t(
            "Vom laufenden Betrieb bis zur eigenen KI: vier klar umrissene Angebote, jedes mit festem Ergebnis.",
            "From day-to-day operations to your own AI: four clearly scoped offers, each with a defined result.",
            "Từ vận hành hằng ngày đến AI riêng: bốn gói dịch vụ rõ ràng, mỗi gói có kết quả cụ thể."
          )}
        </p>
      </div>

      {/* IT-Administration & Support (Entwurf 19.11.2026): eigene Zielgruppe
          (Justiz, Gesundheitswesen), baut auf der echten Berufspraxis auf.
          Produktnamen nur als Erfahrung, keine Partnerschaft behaupten. */}
      <div className="mt-10 grid gap-8 rounded-3xl bg-surface p-7 md:p-9 lg:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-card text-primary shadow-sm">
              <Headset className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {t("Betrieb & Support", "Operations & support", "Vận hành & hỗ trợ")}
            </span>
          </div>
          <h3 className="mt-6 text-2xl font-semibold">
            {t("IT-Administration für Justiz & Gesundheitswesen", "IT administration for justice & healthcare", "Quản trị IT cho ngành tư pháp & y tế")}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {t(
              "Fachanwendungen dürfen nicht ausfallen. Ich kenne die Umgebungen aus der Praxis: E-Akte für 13 Fachgerichte und Software-Rollouts im laufenden Klinikbetrieb.",
              "Specialist applications must not fail. I know these environments first-hand: e-files for 13 courts and software rollouts during live hospital operations.",
              "Phần mềm chuyên ngành không được phép gián đoạn. Tôi hiểu các môi trường này từ thực tế: hồ sơ điện tử cho 13 tòa án và triển khai phần mềm trong lúc bệnh viện vẫn hoạt động."
            )}
          </p>
          <Link
            to="/kontakt"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-[var(--primary-hover)]"
          >
            {t("Support anfragen", "Request support", "Yêu cầu hỗ trợ")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t("Basis-IT", "Core IT", "IT nền tảng")}
          </div>
          <ul className="mt-3 space-y-2.5 text-[15px]">
            {[
              t("Microsoft 365, Azure und Entra ID", "Microsoft 365, Azure and Entra ID", "Microsoft 365, Azure và Entra ID"),
              t("Active Directory, Rechte und Gruppen", "Active Directory, permissions and groups", "Active Directory, phân quyền và nhóm"),
              t("Windows-Server, Citrix und Arbeitsplätze", "Windows Server, Citrix and workstations", "Windows Server, Citrix và máy trạm"),
              t("Anwender-Support vor Ort und remote", "User support on site and remote", "Hỗ trợ người dùng tại chỗ và từ xa"),
            ].map((it) => (
              <li key={it} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t("Fachanwendungen", "Specialist applications", "Phần mềm chuyên ngành")}
          </div>
          <ul className="mt-3 space-y-2.5 text-[15px]">
            {[
              t("Justiz: EUREKA-Fach, eIP und E-Akte", "Justice: EUREKA-Fach, eIP and e-files", "Tư pháp: EUREKA-Fach, eIP và hồ sơ điện tử"),
              t("Klinik: CGM NAVIS", "Hospital: CGM NAVIS", "Bệnh viện: CGM NAVIS"),
              t("Arztpraxis: CGM Turbomed", "Medical practice: CGM Turbomed", "Phòng khám: CGM Turbomed"),
              t("Go-Live-Begleitung und Schulung", "Go-live support and training", "Hỗ trợ go-live và đào tạo"),
            ].map((it) => (
              <li key={it} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                <span>{it}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            {t(
              "Als Projektunterstützung, Vertretung oder laufende Betreuung.",
              "As project support, cover or ongoing care.",
              "Dưới dạng hỗ trợ dự án, thay thế tạm thời hoặc chăm sóc thường xuyên."
            )}
          </p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {offers.map((o) => (
          <div
            key={o.title}
            className={`flex flex-col rounded-3xl p-7 ${o.featured ? "bg-primary text-primary-foreground" : "bg-surface"}`}
          >
            <div className="flex items-center justify-between">
              <div className={`grid h-12 w-12 place-items-center rounded-2xl ${o.featured ? "bg-primary-foreground/15" : "bg-card text-primary shadow-sm"}`}>
                <o.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${o.featured ? "text-primary-foreground/80" : "text-primary"}`}>
                {o.step}
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold">{o.title}</h3>
            <p className={`mt-3 text-base leading-relaxed ${o.featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
              {o.problem}
            </p>
            <ul className="mt-5 space-y-2.5 text-[15px]">
              {o.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${o.featured ? "" : "text-primary"}`} strokeWidth={2.5} />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <div className={`mt-6 border-t pt-5 text-sm ${o.featured ? "border-primary-foreground/20" : "border-border"}`}>
              <div className={`text-xs font-semibold uppercase tracking-wider ${o.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {t("Ergebnis", "Result", "Kết quả")}
              </div>
              <div className="mt-1 font-medium">{o.result}</div>
              <div className={`mt-4 flex flex-col gap-1 ${o.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                <span>{t("Dauer", "Duration", "Thời gian")}: {o.duration}</span>
                <span>{t("Festpreis nach Erstgespräch", "Fixed price after first call", "Giá cố định sau buổi tư vấn")}</span>
              </div>
            </div>
            <div className="flex-1" />
            <Link
              to="/kontakt"
              className={`mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors ${
                o.featured
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  : "bg-card text-foreground hover:bg-card/70"
              }`}
            >
              {t("Erstgespräch anfragen", "Request a first call", "Đặt buổi tư vấn")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
}
