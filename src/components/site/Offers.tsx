import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Compass, Database, KeyRound } from "lucide-react";
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
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
          {t("Drei Wege zu sicherer KI", "Three paths to secure AI", "Ba con đường đến AI an toàn")}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {t(
            "Klar umrissen, mit festem Ergebnis. Sie können klein einsteigen und später ausbauen.",
            "Clearly scoped, with a defined result. Start small and expand later.",
            "Phạm vi rõ ràng, kết quả cụ thể. Bạn có thể bắt đầu nhỏ và mở rộng sau."
          )}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
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
