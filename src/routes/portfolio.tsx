import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "@/contexts/LangContext";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — vuxuantiep.de" },
      { name: "description", content: "Ausgewählte Freelance-Projekte: Cloud-Plattformen, KI-Produkte und Web-Apps." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const { t } = useLang();

  const projects = [
    {
      tag: t("KI · SaaS", "AI · SaaS", "AI · SaaS"),
      title: "Helio Copilot",
      client: t("FinTech Scale-up", "FinTech scale-up", "FinTech scale-up"),
      desc: t(
        "RAG-basierter Support-Agent über 2 Mio. Tickets. Antwortzeit von 4 h auf 12 s.",
        "RAG-based support agent across 2M+ tickets. Response time cut from 4h to 12s.",
        "Agent hỗ trợ dựa trên RAG cho hơn 2 triệu ticket. Thời gian phản hồi giảm từ 4 giờ xuống 12 giây."
      ),
      stack: ["Next.js", "OpenAI", "pgvector"],
      metric: t("−87% Ticket-Backlog", "−87% ticket backlog", "−87% ticket tồn đọng"),
      color: "from-primary/30 to-accent/20",
      goals: t(
        "Reduzierung der Support-Aufwände und Beschleunigung der Antwortzeiten im 1st-Level-Support durch Automatisierung wiederkehrender Anfragen.",
        "Reduce support workload and speed up first-level response times by automating recurring requests.",
        "Giảm khối lượng công việc hỗ trợ và tăng tốc thời gian phản hồi ở cấp độ 1 bằng cách tự động hóa các yêu cầu lặp lại."
      ),
      challenges: t(
        "Sichere Anbindung an Altsysteme mit komplexen Berechtigungsstrukturen, Minimierung von Halluzinationen bei regulatorisch kritischen Fintech-Themen.",
        "Secure integration with legacy systems with complex permission structures; minimizing hallucinations on regulatorily critical fintech topics.",
        "Kết nối an toàn với hệ thống cũ có cấu trúc phân quyền phức tạp, giảm thiểu ảo giác (hallucination) ở các chủ đề fintech nhạy cảm về quy định."
      ),
      results: t(
        "Reduktion der Ticket-Bearbeitungszeit um 87%, Antwortzeit von 4 Stunden auf durchschnittlich 12 Sekunden gesenkt, hohe Kundenzufriedenheit.",
        "87% reduction in ticket handling time, average response time cut from 4 hours to 12 seconds, high customer satisfaction.",
        "Giảm 87% thời gian xử lý ticket, thời gian phản hồi trung bình giảm từ 4 giờ xuống 12 giây, mức độ hài lòng khách hàng cao."
      ),
    },
    {
      tag: t("Cloud", "Cloud", "Cloud"),
      title: "Aurora Platform",
      client: t("B2B Logistik", "B2B logistics", "Logistics B2B"),
      desc: t(
        "Multi-Region AWS-Infrastruktur mit Event-Driven Architecture. 99.99% Uptime SLA.",
        "Multi-region AWS infrastructure with event-driven architecture. 99.99% uptime SLA.",
        "Hạ tầng AWS đa vùng với kiến trúc hướng sự kiện. SLA uptime 99.99%."
      ),
      stack: ["AWS CDK", "Kafka", "DynamoDB"],
      metric: t("10× Durchsatz", "10× throughput", "10× thông lượng"),
      color: "from-accent/30 to-primary/20",
      goals: t(
        "Modernisierung einer monolithischen Logistik-Plattform hin zu einer hochverfügbaren, skalierbaren Cloud-Architektur.",
        "Modernize a monolithic logistics platform into a highly available, scalable cloud architecture.",
        "Hiện đại hóa nền tảng logistics dạng monolith thành kiến trúc đám mây có tính sẵn sàng cao và khả năng mở rộng."
      ),
      challenges: t(
        "Zero-Downtime Migration von On-Premise-Datenbanken zu DynamoDB, Event-Synchronisation über mehrere AWS-Regionen.",
        "Zero-downtime migration from on-premise databases to DynamoDB, event synchronization across multiple AWS regions.",
        "Di chuyển không downtime từ database on-premise sang DynamoDB, đồng bộ sự kiện qua nhiều vùng AWS."
      ),
      results: t(
        "Erfolgreiche Skalierung für das 10-fache Transaktionsvolumen, Erreichen der 99.99% SLA, signifikante Reduktion der operativen Kosten.",
        "Successfully scaled to 10× transaction volume, achieved 99.99% SLA, significant reduction in operational costs.",
        "Mở rộng thành công lên 10 lần khối lượng giao dịch, đạt SLA 99.99%, giảm đáng kể chi phí vận hành."
      ),
    },
    {
      tag: t("Web", "Web", "Web"),
      title: "Northwind Studio",
      client: t("Designagentur", "Design agency", "Công ty thiết kế"),
      desc: t(
        "Headless CMS + Edge-Rendering. Lighthouse 100 / 100 / 100 / 100.",
        "Headless CMS + edge rendering. Lighthouse 100 / 100 / 100 / 100.",
        "Headless CMS + edge rendering. Lighthouse 100 / 100 / 100 / 100."
      ),
      stack: ["TanStack", "Sanity", "CF Workers"],
      metric: t("1.2s LCP global", "1.2s LCP globally", "LCP 1.2s toàn cầu"),
      color: "from-primary/20 to-accent/30",
      goals: t(
        "Neugestaltung und technische Optimierung einer Agentur-Website mit Fokus auf maximale Performance und SEO.",
        "Redesign and technical optimization of an agency website focused on maximum performance and SEO.",
        "Thiết kế lại và tối ưu kỹ thuật website agency, tập trung vào hiệu năng tối đa và SEO."
      ),
      challenges: t(
        "Darstellung von hochauflösenden Medieninhalten bei gleichzeitig extrem schnellen Ladezeiten global (Edge Delivery).",
        "Serving high-resolution media content while keeping load times extremely fast globally (edge delivery).",
        "Hiển thị nội dung media độ phân giải cao trong khi vẫn giữ tốc độ tải cực nhanh trên toàn cầu (edge delivery)."
      ),
      results: t(
        "Lighthouse Scores von 100/100/100/100, Largest Contentful Paint (LCP) weltweit unter 1.2 Sekunden, 40% mehr Inbound Leads.",
        "Lighthouse scores of 100/100/100/100, Largest Contentful Paint (LCP) under 1.2s worldwide, 40% more inbound leads.",
        "Điểm Lighthouse 100/100/100/100, Largest Contentful Paint (LCP) dưới 1.2 giây trên toàn cầu, tăng 40% lượng khách hàng tiềm năng."
      ),
    },
    {
      tag: t("KI · Tooling", "AI · Tooling", "AI · Công cụ"),
      title: "PromptForge",
      client: t("Open Source", "Open source", "Mã nguồn mở"),
      desc: t(
        "Prompt-Versioning und A/B-Testing für LLM-Pipelines. 4k Stars auf GitHub.",
        "Prompt versioning and A/B testing for LLM pipelines. 4k stars on GitHub.",
        "Quản lý phiên bản prompt và A/B testing cho LLM pipeline. 4k stars trên GitHub."
      ),
      stack: ["TypeScript", "tRPC", "Postgres"],
      metric: "4.2k ⭐",
      color: "from-accent/20 to-primary/30",
      goals: t(
        "Entwicklung eines Open-Source-Tools zur Verwaltung, Versionierung und systematischen Evaluierung von LLM-Prompts für Entwicklerteams.",
        "Build an open-source tool for managing, versioning, and systematically evaluating LLM prompts for developer teams.",
        "Xây dựng công cụ mã nguồn mở để quản lý, phiên bản hóa và đánh giá có hệ thống các prompt LLM cho các đội phát triển."
      ),
      challenges: t(
        "Nahtlose Integration in bestehende CI/CD-Pipelines, performante Speicherung großer Prompt-Evaluation-Datensätze.",
        "Seamless integration into existing CI/CD pipelines, performant storage of large prompt-evaluation datasets.",
        "Tích hợp liền mạch vào các CI/CD pipeline hiện có, lưu trữ hiệu quả các tập dữ liệu đánh giá prompt lớn."
      ),
      results: t(
        "Über 4.200 GitHub Stars, Adoption in dutzenden Enterprise-Teams, etablierter Standard für Prompt-Engineering Workflows.",
        "Over 4,200 GitHub stars, adopted by dozens of enterprise teams, became a standard for prompt-engineering workflows.",
        "Hơn 4.200 GitHub stars, được hàng chục đội enterprise áp dụng, trở thành tiêu chuẩn cho quy trình prompt-engineering."
      ),
    },
    {
      tag: t("Cloud", "Cloud", "Cloud"),
      title: "Polaris ETL",
      client: t("Healthcare", "Healthcare", "Y tế"),
      desc: t(
        "HIPAA-konforme Daten-Pipelines auf GCP. Migration von 400 GB legacy ETL.",
        "HIPAA-compliant data pipelines on GCP. Migrated 400 GB of legacy ETL.",
        "Pipeline dữ liệu tuân thủ HIPAA trên GCP. Di chuyển 400 GB ETL cũ."
      ),
      stack: ["GCP", "Dataflow", "BigQuery"],
      metric: t("−62% Kosten", "−62% cost", "−62% chi phí"),
      color: "from-primary/30 to-accent/10",
      goals: t(
        "Zentralisierung und Migration historischer Gesundheitsdaten in ein modernes, HIPAA-konformes Data Warehouse zur Forschung.",
        "Centralize and migrate historical health data into a modern, HIPAA-compliant data warehouse for research.",
        "Tập trung hóa và di chuyển dữ liệu y tế lịch sử vào một data warehouse hiện đại, tuân thủ HIPAA phục vụ nghiên cứu."
      ),
      challenges: t(
        "Strenge Datenschutzvorgaben (HIPAA, DSGVO), Deduplizierung fehlerhafter Datensätze aus 15 verschiedenen Legacy-Systemen.",
        "Strict privacy requirements (HIPAA, GDPR), deduplication of faulty records from 15 different legacy systems.",
        "Yêu cầu bảo mật nghiêm ngặt (HIPAA, GDPR), khử trùng lặp dữ liệu lỗi từ 15 hệ thống cũ khác nhau."
      ),
      results: t(
        "62% Einsparung bei Infrastrukturkosten, sichere und zentrale Datenverfügbarkeit für Data-Science Teams in nahezu Echtzeit.",
        "62% savings in infrastructure costs, secure and centralized near real-time data availability for data science teams.",
        "Tiết kiệm 62% chi phí hạ tầng, dữ liệu sẵn có an toàn, tập trung gần thời gian thực cho các đội data science."
      ),
    },
    {
      tag: t("Web · KI", "Web · AI", "Web · AI"),
      title: "Lumen Editor",
      client: "MediaTech",
      desc: t(
        "Echtzeit-Kollaborativer Editor mit KI-Vorschlägen. Y.js + LLM-Streaming.",
        "Real-time collaborative editor with AI suggestions. Y.js + LLM streaming.",
        "Trình soạn thảo cộng tác thời gian thực với gợi ý AI. Y.js + LLM streaming."
      ),
      stack: ["React", "Yjs", "Claude"],
      metric: t("12k MAU", "12k MAU", "12k MAU"),
      color: "from-accent/30 to-primary/10",
      goals: t(
        "Aufbau eines webbasierten Text-Editors mit kollaborativen Echtzeit-Features und intelligenter Schreibunterstützung durch KI.",
        "Build a web-based text editor with real-time collaboration and intelligent AI-powered writing support.",
        "Xây dựng trình soạn thảo văn bản trên web với tính năng cộng tác thời gian thực và hỗ trợ viết thông minh bằng AI."
      ),
      challenges: t(
        "Konfliktfreie Synchronisation (CRDTs) bei gleichzeitiger Textgenerierung durch LLM-Streams im selben Dokument.",
        "Conflict-free synchronization (CRDTs) while an LLM stream simultaneously generates text in the same document.",
        "Đồng bộ hóa không xung đột (CRDT) trong khi LLM stream đồng thời tạo văn bản trong cùng tài liệu."
      ),
      results: t(
        "Skalierung auf 12.000 monatlich aktive Nutzer, hohe Retention-Rate durch nahtloses KI-gestütztes Co-Writing-Erlebnis.",
        "Scaled to 12,000 monthly active users, high retention through a seamless AI-assisted co-writing experience.",
        "Mở rộng lên 12.000 người dùng hoạt động hàng tháng, tỷ lệ giữ chân cao nhờ trải nghiệm đồng viết với AI liền mạch."
      ),
    },
  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const testimonials = [
    {
      q: t(
        "Tiep hat unsere KI-Roadmap in 6 Wochen umgesetzt, wofür intern 6 Monate geplant waren.",
        "Tiep implemented our AI roadmap in 6 weeks — internally we had planned 6 months for it.",
        "Tiệp đã triển khai lộ trình AI của chúng tôi trong 6 tuần, trong khi nội bộ dự kiến mất 6 tháng."
      ),
      a: "Sarah K.", role: t("CTO, FinTech", "CTO, FinTech", "CTO, FinTech"),
    },
    {
      q: t(
        "Sauberer Code, klare Kommunikation, faire Preise. Wir buchen ihn jedes Quartal nach.",
        "Clean code, clear communication, fair pricing. We book him again every quarter.",
        "Code sạch, giao tiếp rõ ràng, giá cả hợp lý. Chúng tôi thuê lại anh ấy mỗi quý."
      ),
      a: "Markus B.", role: t("Head of Engineering", "Head of Engineering", "Head of Engineering"),
    },
    {
      q: t(
        "Endlich jemand, der KI-Hype und Realität trennen kann. Pragmatisch und liefert.",
        "Finally someone who can separate AI hype from reality. Pragmatic and delivers.",
        "Cuối cùng cũng có người phân biệt được sự cường điệu và thực tế của AI. Thực dụng và mang lại kết quả."
      ),
      a: "Lena W.", role: t("Founder", "Founder", "Founder"),
    },
  ];

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="text-xs uppercase tracking-widest text-primary">Portfolio</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight max-w-3xl">
          {t("Ausgewählte Arbeiten", "Selected work", "Dự án tiêu biểu")}<br />
          {t("der letzten ", "from the last ", "trong ")}<span className="text-primary">{t("5 Jahre", "5 years", "5 năm qua")}</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          {t(
            "Eine Auswahl produktiver Projekte für Startups, Scale-ups und Mittelstand. Mehr auf Anfrage unter NDA.",
            "A selection of production projects for startups, scale-ups and SMEs. More available on request under NDA.",
            "Một số dự án tiêu biểu cho startup, scale-up và doanh nghiệp vừa. Thêm thông tin theo yêu cầu, có NDA."
          )}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              onClick={() => setSelectedProject(p)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-8 hover:border-primary/40 transition-all cursor-pointer"
            >
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
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-surface p-6 md:p-10 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 rounded-full p-2 bg-background border border-border text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-wider text-primary">{selectedProject.tag}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{selectedProject.client}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.stack.map((s) => (
                    <span key={s} className="rounded bg-primary/10 px-3 py-1.5 text-xs font-mono text-primary border border-primary/20">{s}</span>
                  ))}
                  <span className="rounded bg-accent/10 px-3 py-1.5 text-xs font-mono text-accent border border-accent/20">{t("Metrik", "Metric", "Chỉ số")}: {selectedProject.metric}</span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t("Zielsetzung", "Objectives", "Mục tiêu")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.goals}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {t("Technische Herausforderungen", "Technical Challenges", "Thách thức Kỹ thuật")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" /> {t("Ergebnisse & Impact", "Results & Impact", "Kết quả & Tác động")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.results}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-xs uppercase tracking-widest text-accent">{t("Stimmen", "Testimonials", "Đánh giá")}</div>
        <h2 className="mt-2 text-3xl font-semibold">{t("Was Kunden sagen", "What clients say", "Khách hàng nói gì")}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((q) => (
            <div key={q.a} className="rounded-xl border border-border bg-surface/40 p-6">
              <p className="text-sm text-foreground leading-relaxed">„{q.q}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="text-sm font-medium">{q.a}</div>
                <div className="text-xs text-muted-foreground">{q.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-border bg-surface/40 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">{t("Dein Projekt als nächstes?", "Your project next?", "Dự án tiếp theo của bạn?")}</h2>
            <p className="text-muted-foreground mt-2">{t("Lass uns 30 Minuten unverbindlich sprechen.", "Let's talk for 30 minutes, no obligation.", "Hãy trò chuyện 30 phút, không ràng buộc.")}</p>
          </div>
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            {t("Anfrage senden", "Send request", "Gửi yêu cầu")} <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
