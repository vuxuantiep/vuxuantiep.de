import { HeartPulse, Scale, Landmark, Zap, Calculator, Code2, BadgeCheck } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

/**
 * „Erfahrung aus der Praxis" (18.11.2026) — Referenzen aus dem Lebenslauf.
 * Bewusst nach Branche statt mit Arbeitgeber-/Kundennamen (öffentliche
 * Referenznennung braucht deren Zustimmung). Keine privaten Daten.
 * Kennzahlen 1:1 aus dem CV (Stand 11/2026).
 */
export function ExperienceSection() {
  const { t } = useLang();

  const stats = [
    { value: "10+", label: t("Jahre IT-Praxis", "years in IT", "năm kinh nghiệm IT") },
    { value: "≈ 800", label: t("Arbeitsplätze ausgerollt", "workstations rolled out", "máy trạm đã triển khai") },
    { value: "13", label: t("Fachgerichte betreut", "courts supported", "tòa án được hỗ trợ") },
    { value: "99,8 %", label: t("Verfügbarkeit erreicht", "availability achieved", "độ sẵn sàng đạt được") },
  ];

  const stations = [
    {
      icon: HeartPulse,
      sector: t("Universitätsklinikum", "University hospital", "Bệnh viện đại học"),
      period: "2026",
      title: t("Go-Live-Support beim Software-Rollout", "Go-live support for a software rollout", "Hỗ trợ go-live khi triển khai phần mềm"),
      text: t(
        "Vor-Ort-Begleitung von Ärzten und Pflege in 3 Stationen und einer Ambulanz – geduldig, verständlich, im laufenden Klinikbetrieb.",
        "On-site support for doctors and nurses on 3 wards and an outpatient clinic – patient and clear, during live hospital operations.",
        "Hỗ trợ tại chỗ cho bác sĩ và điều dưỡng tại 3 khoa và 1 phòng khám – kiên nhẫn, dễ hiểu, ngay trong lúc bệnh viện vận hành."
      ),
    },
    {
      icon: Scale,
      sector: t("Justiz · Digitalisierung", "Justice · digitalisation", "Tư pháp · số hóa"),
      period: "2023 – 2026",
      title: t("E-Akte für 13 Fachgerichte", "E-file system for 13 courts", "Hồ sơ điện tử cho 13 tòa án"),
      text: t(
        "5 Fachanwendungen in hybrider Citrix- und Windows-Server-Umgebung betreut: ≥ 99,8 % Verfügbarkeit, > 100 Tickets im Monat, 98,7 % SLA-Treue.",
        "Ran 5 specialist applications in a hybrid Citrix and Windows Server environment: ≥ 99.8 % availability, > 100 tickets a month, 98.7 % SLA compliance.",
        "Vận hành 5 ứng dụng chuyên ngành trong môi trường lai Citrix và Windows Server: độ sẵn sàng ≥ 99,8 %, > 100 ticket mỗi tháng, tuân thủ SLA 98,7 %."
      ),
    },
    {
      icon: Landmark,
      sector: t("Gerichtsbarkeit", "Judiciary", "Tòa án"),
      period: "2020 – 2023",
      title: t("Sichere Windows-Infrastruktur", "Secure Windows infrastructure", "Hạ tầng Windows an toàn"),
      text: t(
        "Active Directory, Gruppenrichtlinien und Berechtigungskonzepte im sensiblen Behördenumfeld, automatisierte Softwareverteilung.",
        "Active Directory, group policies and permission concepts in a sensitive public-sector environment, automated software deployment.",
        "Active Directory, chính sách nhóm và phân quyền trong môi trường cơ quan nhạy cảm, tự động phân phối phần mềm."
      ),
    },
    {
      icon: Zap,
      sector: t("Energieversorger", "Energy utility", "Công ty năng lượng"),
      period: "2019 – 2020",
      title: t("Rollout von rund 800 Arbeitsplätzen", "Rollout of around 800 workstations", "Triển khai khoảng 800 máy trạm"),
      text: t(
        "Windows-10-Arbeitsplätze inklusive Peripherie und Smartphones vor Ort eingerichtet, Softwareverteilung über SCCM.",
        "Set up Windows 10 workstations on site including peripherals and smartphones, software deployment via SCCM.",
        "Thiết lập máy trạm Windows 10 tại chỗ cùng thiết bị ngoại vi và điện thoại, phân phối phần mềm qua SCCM."
      ),
    },
    {
      icon: Calculator,
      sector: t("Steuerkanzlei", "Tax firm", "Văn phòng thuế"),
      period: "2017 – 2019",
      title: t("Komplette IT aus einer Hand", "Complete IT from one source", "Toàn bộ IT từ một đầu mối"),
      text: t(
        "Netzwerk, Arbeitsplätze und Webserver aufgebaut und betreut, Datenmigration und Webentwicklung.",
        "Built and ran the network, workstations and web server, plus data migration and web development.",
        "Xây dựng và vận hành mạng, máy trạm và web server, kèm chuyển đổi dữ liệu và phát triển web."
      ),
    },
    {
      icon: Code2,
      sector: t("Softwareentwicklung · Deutschland & Vietnam", "Software development · Germany & Vietnam", "Phát triển phần mềm · Đức & Việt Nam"),
      period: "2015 – 2017",
      title: t("Entwicklerteam über Grenzen koordiniert", "Coordinated a developer team across borders", "Điều phối đội lập trình xuyên biên giới"),
      text: t(
        "Web- und Softwareentwicklung mit C# und ASP.NET, Koordination eines Entwicklerteams in Vietnam.",
        "Web and software development with C# and ASP.NET, coordinating a developer team in Vietnam.",
        "Phát triển web và phần mềm với C# và ASP.NET, điều phối đội lập trình tại Việt Nam."
      ),
    },
  ];

  const certs = ["Azure Cloud Administrator", "AWS Cloud Practitioner", "MCSA Windows Server 2016", "MCPD & MCTS .NET C#"];

  return (
    <section id="erfahrung" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {t("Referenzen", "References", "Tham chiếu")}
        </div>
        <h2 className="mt-3 text-[1.6rem] font-semibold leading-tight md:text-4xl">
          {t("Erfahrung aus der Praxis", "Hands-on experience", "Kinh nghiệm thực tế")}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {t(
            "Von der Klinikstation bis zum Gericht: Ich kenne IT dort, wo sie zuverlässig laufen muss – und genau dieses Wissen fließt in jede KI-Lösung.",
            "From hospital wards to courts: I know IT where it has to run reliably – and that knowledge goes into every AI solution.",
            "Từ khoa bệnh viện đến tòa án: tôi hiểu IT ở nơi nó phải vận hành ổn định – và kiến thức đó được đưa vào mọi giải pháp AI."
          )}
        </p>
      </div>

      {/* Kennzahlen */}
      <dl className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-3xl bg-surface p-5 md:p-6">
            <dt className="text-sm text-muted-foreground">{s.label}</dt>
            <dd className="mt-1 text-3xl font-semibold text-primary md:text-4xl">{s.value}</dd>
          </div>
        ))}
      </dl>

      {/* Stationen */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stations.map((st) => (
          <article key={st.title} className="flex flex-col rounded-3xl bg-surface p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                <st.icon className="h-4 w-4" strokeWidth={1.9} /> {st.sector}
              </span>
              <span className="text-xs text-muted-foreground">{st.period}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold">{st.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{st.text}</p>
          </article>
        ))}
      </div>

      {/* Zertifizierungen */}
      <div className="mt-8 flex flex-wrap items-center gap-2.5">
        <span className="mr-1 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
          <BadgeCheck className="h-4 w-4 text-primary" /> {t("Zertifiziert", "Certified", "Chứng chỉ")}
        </span>
        {certs.map((c) => (
          <span key={c} className="rounded-full bg-[var(--beige)] px-3.5 py-1.5 text-sm text-foreground/85">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
