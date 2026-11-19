import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Globe, X } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "@/contexts/LangContext";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: ({ match }) => seoHead({
    path: "/portfolio",
    search: match.search,
    title: {
      de: "Projekte & Praxis — vuxuantiep.de",
      en: "Portfolio — vuxuantiep.de",
      vi: "Portfolio — vuxuantiep.de",
    },
    description: {
      de: "Eigene KI-Projekte (AI-OS, BDS Navigator, Broki AI, TRACE IT) und Berufspraxis aus Kliniken, Justiz und IT-Betrieb.",
      en: "Own AI projects (AI-OS, BDS Navigator, Broki AI, TRACE IT) and professional experience from hospitals, the judiciary and IT operations.",
      vi: "Dự án AI riêng (AI-OS, BDS Navigator, Broki AI, TRACE IT) và kinh nghiệm thực tế tại bệnh viện, tư pháp và vận hành IT.",
    },
  }),
  component: Portfolio,
});

function Portfolio() {
  const { t } = useLang();

  // Nur echte, eigene Projekte (Stand 19.11.2026). Die früheren Beispielprojekte
  // der Website-Vorlage (Helio, Aurora, Northwind, PromptForge, Polaris, Lumen)
  // und die Vorlagen-Kundenstimmen wurden entfernt: nicht belegbar.
  const projects: {
    tag: string; title: string; client: string; status: string; desc: string;
    stack: string[]; metric: string; color: string; goals: string;
    challenges: string; results: string; link?: string; stackImages?: string[];
  }[] = [
    {
      tag: t("KI · Agenten", "AI · Agents", "AI · Agents"),
      title: "AI-OS Multi-Agenten-Fabrik",
      client: t("Eigenentwicklung", "Own development", "Tự phát triển"),
      status: t("Im täglichen Eigenbetrieb", "In daily own use", "Đang vận hành hằng ngày"),
      desc: t(
        "Mein eigenes KI-Betriebssystem: spezialisierte Agenten, Workflow-Engine, Wissensdatenbank (RAG) und Monitoring – lokal mit Ollama betrieben.",
        "My own AI operating system: specialised agents, workflow engine, knowledge base (RAG) and monitoring – run locally with Ollama.",
        "Hệ điều hành AI của riêng tôi: các agent chuyên biệt, workflow engine, cơ sở tri thức (RAG) và giám sát – chạy cục bộ với Ollama."
      ),
      stack: ["Python", "Flask", "LangGraph", "Ollama", "Docker"],
      metric: t("10 Agenten", "10 agents", "10 agent"),
      color: "from-accent/30 to-primary/20",
      goals: t(
        "Eine Werkbank, auf der ich KI-Agenten, lokale Modelle und Automatisierung unter realen Bedingungen entwickle und teste – bevor ich sie Kunden empfehle.",
        "A workbench where I build and test AI agents, local models and automation under real conditions – before recommending them to clients.",
        "Một xưởng làm việc nơi tôi phát triển và thử nghiệm agent AI, mô hình cục bộ và tự động hóa trong điều kiện thực tế – trước khi đề xuất cho khách hàng."
      ),
      challenges: t(
        "Agenten mit klaren Rollen und menschlicher Freigabe, Betrieb auf Standard-Hardware ohne GPU, Datenschutz-Schalter zwischen rein lokalem und hybridem LLM-Betrieb.",
        "Agents with clear roles and human approval, running on standard hardware without a GPU, a privacy switch between purely local and hybrid LLM operation.",
        "Agent có vai trò rõ ràng và cần con người phê duyệt, chạy trên phần cứng thông thường không có GPU, công tắc bảo mật giữa chế độ LLM thuần cục bộ và lai."
      ),
      results: t(
        "Läuft täglich in meinem eigenen Betrieb mit Dashboard, zehn Agenten, Wissenssuche, Backups und Health-Checks. Es ist die technische Grundlage für TRACE AI.",
        "Runs daily in my own operations with a dashboard, ten agents, knowledge search, backups and health checks. It is the technical foundation of TRACE AI.",
        "Vận hành hằng ngày trong công việc của tôi với dashboard, mười agent, tìm kiếm tri thức, sao lưu và kiểm tra tình trạng. Đây là nền tảng kỹ thuật của TRACE AI."
      ),
      stackImages: [
        "/images/AI-OS/temp_image_1783206019551.png",
        "/images/AI-OS/temp_image_1783206113009.png",
        "/images/AI-OS/temp_image_1783206156456.png",
      ],
    },
    {
      tag: t("KI · Immobilien", "AI · Real estate", "AI · Bất động sản"),
      title: "BDS Navigator",
      client: t("Eigenentwicklung", "Own development", "Tự phát triển"),
      status: t("Online als Prototyp", "Online as a prototype", "Bản thử nghiệm trực tuyến"),
      desc: t(
        "Digitale Plattform mit Karten, Marktdaten und KI-Assistent für Immobilien-Investoren in Vietnam und Deutschland.",
        "Digital platform with maps, market data and an AI assistant for real estate investors in Vietnam and Germany.",
        "Nền tảng số với bản đồ, dữ liệu thị trường và trợ lý AI cho nhà đầu tư bất động sản tại Việt Nam và Đức."
      ),
      stack: ["Next.js", "Python", "PostgreSQL"],
      metric: t("2 Märkte", "2 markets", "2 thị trường"),
      color: "from-primary/20 to-accent/30",
      goals: t(
        "Marktdaten und Objektinformationen aus zwei Ländern an einem Ort zusammenführen und mit einem KI-Assistenten verständlich machen.",
        "Bring market data and property information from two countries together in one place and make it understandable with an AI assistant.",
        "Tập hợp dữ liệu thị trường và thông tin bất động sản từ hai quốc gia vào một nơi và giúp dễ hiểu hơn nhờ trợ lý AI."
      ),
      challenges: t(
        "Uneinheitliche Datenquellen, unterschiedliche Bewertungslogik in beiden Märkten, dreisprachige Oberfläche (Deutsch, Englisch, Vietnamesisch).",
        "Inconsistent data sources, different valuation logic in both markets, a trilingual interface (German, English, Vietnamese).",
        "Nguồn dữ liệu không đồng nhất, logic định giá khác nhau ở hai thị trường, giao diện ba ngôn ngữ (Đức, Anh, Việt)."
      ),
      results: t(
        "Online erreichbarer Prototyp mit Karten, Marktdaten und KI-Assistent.",
        "Publicly reachable prototype with maps, market data and an AI assistant.",
        "Bản thử nghiệm có thể truy cập trực tuyến với bản đồ, dữ liệu thị trường và trợ lý AI."
      ),
      link: "https://bds-navigator.vuxuantiep.de/",
      stackImages: [
        "/images/BDS-Navigator/temp_image_1783206179972.png",
        "/images/BDS-Navigator/temp_image_1783206188233.png",
        "/images/BDS-Navigator/temp_image_1783206197407.png",
      ],
    },
    {
      tag: t("KI · Browser", "AI · Browser", "AI · Trình duyệt"),
      title: "Broki AI",
      client: t("Eigenentwicklung", "Own development", "Tự phát triển"),
      status: t("Prototyp", "Prototype", "Bản thử nghiệm"),
      desc: t(
        "Browser-Erweiterung mit eigener Wissensbasis, signierten Updates und Zero-Trust-Sicherheit.",
        "Browser extension with its own knowledge base, signed updates and zero-trust security.",
        "Tiện ích trình duyệt với kho tri thức riêng, cập nhật có chữ ký và bảo mật Zero Trust."
      ),
      stack: ["Manifest V3", "WebLLM", "Tailscale"],
      metric: t("Lokal + privat", "Local + private", "Cục bộ + riêng tư"),
      color: "from-accent/20 to-primary/30",
      goals: t(
        "Eine KI-Assistentin direkt im Browser, die auf das eigene Wissen zugreift, ohne dass Daten an fremde Cloud-Dienste gehen.",
        "An AI assistant right in the browser that uses your own knowledge without sending data to third-party cloud services.",
        "Một trợ lý AI ngay trong trình duyệt, sử dụng tri thức của riêng bạn mà không gửi dữ liệu đến dịch vụ đám mây bên ngoài."
      ),
      challenges: t(
        "Sprachmodell im Browser bzw. auf eigener Hardware, sichere Anbindung über Tailscale, signierte Konfiguration gegen Manipulation.",
        "Language model in the browser or on own hardware, secure connection via Tailscale, signed configuration against tampering.",
        "Mô hình ngôn ngữ trong trình duyệt hoặc trên phần cứng riêng, kết nối an toàn qua Tailscale, cấu hình có chữ ký chống giả mạo."
      ),
      results: t(
        "Funktionsfähiger Prototyp. Ich teste ihn derzeit selbst im Alltag, danach folgt die Pilotphase.",
        "Working prototype. I am currently testing it myself in daily use; a pilot phase follows.",
        "Bản thử nghiệm hoạt động được. Hiện tôi đang tự dùng thử hằng ngày, sau đó sẽ đến giai đoạn thí điểm."
      ),
      link: "/broki",
    },
    {
      tag: t("IT · Automatisierung", "IT · Automation", "IT · Tự động hóa"),
      title: "TRACE IT Werkbank",
      client: t("Eigenentwicklung", "Own development", "Tự phát triển"),
      status: t("Live im Eigenbetrieb", "Live in own use", "Đang vận hành"),
      desc: t(
        "Web-Werkbank für den IT-Support-Alltag: 12 Module mit KI-Unterstützung über eine mehrstufige LLM-Ausweichkette.",
        "Web workbench for everyday IT support: 12 modules with AI assistance via a multi-stage LLM fallback chain.",
        "Bàn làm việc web cho công việc hỗ trợ IT hằng ngày: 12 mô-đun có hỗ trợ AI qua chuỗi LLM dự phòng nhiều tầng."
      ),
      stack: ["Python", "Cloudflare Tunnel", "LiteLLM"],
      metric: t("12 Module", "12 modules", "12 mô-đun"),
      color: "from-primary/30 to-accent/20",
      goals: t(
        "Wiederkehrende Support-Aufgaben bündeln und beschleunigen, mit KI als Helfer und dem Menschen als Entscheider.",
        "Bundle and speed up recurring support tasks, with AI as a helper and a human making the decisions.",
        "Gom và đẩy nhanh các tác vụ hỗ trợ lặp lại, với AI là trợ thủ và con người là người quyết định."
      ),
      challenges: t(
        "Ausfallsicherheit bei Cloud-LLMs (automatischer Wechsel zwischen mehreren Anbietern), sichere Veröffentlichung ohne offene Ports.",
        "Resilience with cloud LLMs (automatic switching between several providers), secure publishing without open ports.",
        "Đảm bảo hoạt động liên tục với LLM đám mây (tự động chuyển giữa nhiều nhà cung cấp), công bố an toàn mà không mở cổng."
      ),
      results: t(
        "Seit Juli 2026 live und im täglichen Einsatz. Sie ist der Grundstein für TRACE IT.",
        "Live and in daily use since July 2026. It is the cornerstone of TRACE IT.",
        "Hoạt động và được dùng hằng ngày từ tháng 7/2026. Đây là nền móng của TRACE IT."
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


  return (
    <div className="min-h-screen">
      <Nav />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="text-xs uppercase tracking-widest text-primary">Portfolio</div>
        <h1 className="mt-3 font-display text-[1.75rem] md:text-[2.25rem] font-semibold leading-tight max-w-3xl">
          {t("Eigene Projekte", "Own projects", "Dự án riêng")}<br />
          {t("und ", "and ", "và ")}<span className="text-primary">{t("Berufspraxis", "professional practice", "kinh nghiệm thực tế")}</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          {t(
            "Oben stehen meine eigenen Entwicklungen, die ich selbst betreibe oder als Prototyp teste. Darunter folgt meine Erfahrung aus Kliniken, Justiz und IT-Betrieb. Beides ist klar getrennt.",
            "Above are my own developments, which I run myself or test as prototypes. Below is my experience from hospitals, the judiciary and IT operations. The two are kept clearly separate.",
            "Phía trên là các dự án tôi tự phát triển, tự vận hành hoặc đang thử nghiệm. Phía dưới là kinh nghiệm của tôi tại bệnh viện, ngành tư pháp và vận hành IT. Hai phần được tách biệt rõ ràng."
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
                  <div className="text-sm text-muted-foreground">{p.client} · {p.status}</div>
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
                  <span className="text-sm text-muted-foreground">{selectedProject.client} · {selectedProject.status}</span>
                </div>
                <h2 className="text-[1.5rem] md:text-[1.875rem] font-display font-semibold mb-6">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.stack.map((s) => (
                    <span key={s} className="rounded bg-primary/10 px-3 py-1.5 text-xs font-mono text-primary border border-primary/20">{s}</span>
                  ))}
                  <span className="rounded bg-accent/10 px-3 py-1.5 text-xs font-mono text-accent border border-accent/20">{t("Metrik", "Metric", "Chỉ số")}: {selectedProject.metric}</span>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded bg-primary/10 px-3 py-1.5 text-xs font-mono text-primary border border-primary/20 inline-flex items-center gap-1 hover:bg-primary/20 transition-colors"
                    >
                      <Globe className="h-3 w-3" />
                      {t("Projekt besuchen", "Visit project", "Xem dự án")}
                    </a>
                  )}
                </div>
              </div>

              {selectedProject.stackImages && selectedProject.stackImages.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t("Screenshots", "Screenshots", "Ảnh chụp màn hình")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProject.stackImages.map((img, idx) => (
                      <div key={idx} className="relative rounded-lg overflow-hidden border border-border bg-background/50 aspect-video">
                        <img 
                          src={img} 
                          alt={`${selectedProject.title} screenshot ${idx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t("Ergebnisse & Impact", "Results & Impact", "Kết quả & Tác động")}
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

      {/* Berufliche Praxis: echte Referenzen aus Anstellungen, getrennt von Eigenentwicklungen */}
      <ExperienceSection />

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
