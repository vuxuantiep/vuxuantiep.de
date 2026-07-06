import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, Cloud, Cpu, Code2, Sparkles, Github, CheckCircle2, Bot, Shield, Terminal, MessageSquare, X } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ScrollDots, useScrollDotSections } from "@/components/site/ScrollDots";
import { Footer } from "@/components/site/Footer";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "@/contexts/LangContext";
import { ProductCodeSlideshow } from "@/components/product-code-slideshow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "vuxuantiep.de — IT Freelancer für Cloud, KI & Web" },
      { name: "description", content: "Freiberuflicher IT-Engineer. Ich baue performante Cloud-Plattformen, KI-Integrationen und moderne Web-Anwendungen." },
    ],
  }),
  component: Home,
});

interface NewsItem {
  title: string;
  url: string;
}

function TechStackTabs() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState("agentic");

  const yrs = (n: number) =>
    n === 1 ? t("1 Jahr", "1 year", "1 năm") : t(`${n} Jahre`, `${n} years`, `${n} năm`);

  const categories: { id: string; label: string; tools: { name: string; years: number }[] }[] = [
    {
      id: "agentic",
      label: "Agentic Coding",
      tools: [
        { name: "Open Claw", years: 1 },
        { name: "Codex", years: 1 },
        { name: "Claude Code", years: 1 },
        { name: "Cody", years: 1 },
        { name: "OpenHands", years: 1 },
        { name: "Hermes", years: 1 },
        { name: "LangGraph", years: 1 },
        { name: "Aider", years: 1 },
        { name: "Cline", years: 1 },
        { name: "Azad-Code", years: 1 },
      ],
    },
    {
      id: "ki",
      label: t("KI & Data", "AI & Data", "AI & Data"),
      tools: [
        { name: "Ollama", years: 2 },
        { name: "n8n", years: 2 },
        { name: "Node-RED", years: 2 },
        { name: "Qdrant", years: 1 },
        { name: "PostgreSQL", years: 3 },
        { name: "MSSQL", years: 8 },
        { name: "Oracle DB", years: 3 },
        { name: "Hindsight", years: 1 },
        { name: "Obsidian", years: 2 },
        { name: "Albert AI (Agorum)", years: 1 },
      ],
    },
    {
      id: "cloud",
      label: "Cloud & DevOps",
      tools: [
        { name: "Azure / Entra ID", years: 2 },
        { name: "AWS", years: 1 },
        { name: "Docker", years: 3 },
        { name: "Docker Swarm / Dokploy", years: 1 },
        { name: "K3s (Kubernetes)", years: 2 },
        { name: "Ansible / Semaphore", years: 2 },
        { name: "Bicep / ARM", years: 1 },
        { name: "PowerShell", years: 6 },
        { name: "Windows Server (AD, GPO)", years: 6 },
        { name: "Hyper-V", years: 6 },
        { name: "GitHub / Gitea", years: 5 },
        { name: "Endpoint Manager / SCCM", years: 4 },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      tools: [
        { name: "C# / .NET", years: 10 },
        { name: "ASP.NET MVC", years: 8 },
        { name: "Python", years: 3 },
        { name: "FastAPI", years: 2 },
        { name: "VBA", years: 10 },
        { name: "MCP-Server", years: 1 },
        { name: "REST API / CLI", years: 5 },
        { name: "Dolibarr DMS", years: 2 },
      ],
    },
    {
      id: "frontend",
      label: "Frontend",
      tools: [
        { name: "JavaScript", years: 8 },
        { name: "jQuery", years: 8 },
        { name: "HTML & CSS", years: 8 },
        { name: "React / TanStack", years: 1 },
      ],
    },
    {
      id: "security",
      label: "Security",
      tools: [
        { name: "Authentik (IAM)", years: 1 },
        { name: "Azure Entra ID / IAM", years: 2 },
        { name: "Cloudflare Zero-Trust", years: 2 },
        { name: "Tailscale", years: 2 },
        { name: "Traefik", years: 2 },
        { name: t("GPO & Berechtigungskonzepte", "GPO & permission concepts", "GPO & phân quyền"), years: 6 },
        { name: "Acronis Backup", years: 3 },
      ],
    },
  ];

  const allTab = {
    id: "all",
    label: t("Alle", "All", "Tất cả"),
    tools: categories.flatMap((c) => c.tools),
  };
  const tabs = [categories[0], allTab, ...categories.slice(1)];
  const activeTools = tabs.find((tab) => tab.id === activeTab)?.tools ?? [];

  return (
    <div className="bg-background/40 rounded-xl border border-border p-6 overflow-hidden">
      <div className="flex flex-wrap mb-8 text-xs font-medium border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={
              tab.id === activeTab
                ? "-mb-px rounded-t-lg border border-border border-b-background bg-primary/10 px-3 py-2 text-primary"
                : "rounded-t-lg border border-transparent px-3 py-2 text-muted-foreground hover:bg-surface/50 hover:text-foreground"
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm"
      >
        {activeTools.map((tool) => (
          <div key={tool.name} className="flex items-center justify-between py-2 border-b border-border/50">
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <span>{tool.name}</span>
            </div>
            <span className="text-xs text-muted-foreground">{yrs(tool.years)}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Home() {
  const { t, lang } = useLang();
  const dotSections = useScrollDotSections();

  const smallProjects = [
    {
      tag: t("KI-Automatisierung", "AI Automation", "Tự động hóa AI"), tagColor: "text-green-500 bg-green-500/10", tag2: t("Immobilien", "Real Estate", "Bất động sản"),
      title: t("Immobilien-Verwaltung", "Real Estate Management", "Quản lý bất động sản"),
      desc: t(
        "KI-gesteuertes Agenten-System: Agent für den Einkauf, spezialisierter Agent für Auswertung und Optimierung sowie ein Agent für den Verkauf.",
        "AI-driven agent system: an agent for acquisition, a specialized agent for evaluation and optimization, and an agent for sales.",
        "Hệ thống agent điều khiển bởi AI: agent cho thu mua, agent chuyên biệt cho đánh giá và tối ưu, cùng một agent cho bán hàng."
      ),
      status: t("Produktion", "Production", "Đang vận hành"),
      goals: t(
        "Vollständige Automatisierung der Akquise, Bewertung und Vermarktung von Immobilien.",
        "Full automation of real estate acquisition, valuation, and marketing.",
        "Tự động hóa hoàn toàn việc thu mua, định giá và tiếp thị bất động sản."
      ),
      challenges: t(
        "Datenbereinigung aus unstrukturierten Exposés und dynamische Wertermittlung durch LLMs.",
        "Data cleansing from unstructured listings and dynamic valuation through LLMs.",
        "Làm sạch dữ liệu từ các tin đăng phi cấu trúc và định giá động thông qua LLM."
      ),
      results: t(
        "Reduktion der manuellen Prüfzeit um 90% und höhere Deal-Abschlussquote durch Vorqualifizierung.",
        "90% reduction in manual review time and a higher deal close rate through pre-qualification.",
        "Giảm 90% thời gian kiểm tra thủ công và tăng tỷ lệ chốt giao dịch nhờ sơ tuyển trước."
      ),
    },
    {
      tag: "Corporate LLM", tagColor: "text-blue-400 bg-blue-500/10", tag2: t("Enterprise", "Enterprise", "Doanh nghiệp"),
      title: t("Wissensdatenbank & DMS Anbindung", "Knowledge Base & DMS Integration", "Cơ sở tri thức & tích hợp DMS"),
      desc: t(
        "Aufbau eines internen Corporate LLMs mit Anbindung an das Dokumentenmanagementsystem (DMS) für intelligente Wissenssuche und -management.",
        "Building an internal corporate LLM connected to the document management system (DMS) for intelligent knowledge search and management.",
        "Xây dựng LLM nội bộ doanh nghiệp kết nối với hệ thống quản lý tài liệu (DMS) để tìm kiếm và quản lý tri thức thông minh."
      ),
      status: t("Produktion", "Production", "Đang vận hành"),
      goals: t(
        "Zentraler Zugang zu verteiltem Unternehmenswissen durch ein internes, kontextaffines Sprachmodell.",
        "Central access to distributed company knowledge through an internal, context-aware language model.",
        "Truy cập tập trung vào tri thức doanh nghiệp phân tán thông qua mô hình ngôn ngữ nội bộ, nhận biết ngữ cảnh."
      ),
      challenges: t(
        "DSGVO-konforme Verarbeitung sensibler Dokumente und Berechtigungsmanagement (RAG) auf File-Ebene.",
        "GDPR-compliant processing of sensitive documents and file-level permission management (RAG).",
        "Xử lý tài liệu nhạy cảm tuân thủ GDPR và quản lý phân quyền (RAG) ở cấp độ file."
      ),
      results: t(
        "Signifikante Zeitersparnis bei der Informationssuche und Reduzierung von Redundanzen in der internen Kommunikation.",
        "Significant time savings in information retrieval and reduced redundancy in internal communication.",
        "Tiết kiệm đáng kể thời gian tìm kiếm thông tin và giảm trùng lặp trong giao tiếp nội bộ."
      ),
    },
    {
      tag: t("KI-Agent", "AI Agent", "AI Agent"), tagColor: "text-purple-400 bg-purple-500/10", tag2: "Finance",
      title: t("Buchhaltung-Agent", "Accounting Agent", "Agent kế toán"),
      desc: t(
        "Automatisierte Rechnungs- und Belegverarbeitung, Vorkontierung sowie Auswertungen speziell für Einzelhändler und Restaurant-Betreiber.",
        "Automated invoice and receipt processing, pre-accounting, and reporting tailored for retailers and restaurant operators.",
        "Xử lý hóa đơn và chứng từ tự động, hạch toán sơ bộ và báo cáo dành riêng cho nhà bán lẻ và chủ nhà hàng."
      ),
      status: t("Produktion", "Production", "Đang vận hành"),
      goals: t(
        "Automatisierung der Vorkontierung und Extraktion von Rechnungsdaten zur Entlastung der Buchhaltung.",
        "Automating pre-accounting and invoice data extraction to relieve the accounting department.",
        "Tự động hóa hạch toán sơ bộ và trích xuất dữ liệu hóa đơn để giảm tải cho bộ phận kế toán."
      ),
      challenges: t(
        "Zuverlässige Erkennung von Handschriften, zerknitterten Belegen und diversen Rechnungsformaten (OCR + LLM).",
        "Reliable recognition of handwriting, crumpled receipts, and diverse invoice formats (OCR + LLM).",
        "Nhận dạng đáng tin cậy chữ viết tay, biên lai nhàu nát và nhiều định dạng hóa đơn khác nhau (OCR + LLM)."
      ),
      results: t(
        "Über 95% Extraktionsgenauigkeit und Reduktion der Steuerberaterkosten um ca. 40% pro Mandant.",
        "Over 95% extraction accuracy and roughly 40% reduction in tax advisor costs per client.",
        "Độ chính xác trích xuất hơn 95% và giảm khoảng 40% chi phí tư vấn thuế cho mỗi khách hàng."
      ),
    },
  ];

  const [selectedProject, setSelectedProject] = useState<typeof smallProjects[0] | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const query = encodeURIComponent('"AI" OR "LLM" OR "Agentic AI" OR "Security" OR "E-Commerce"');
        const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=story&hitsPerPage=15`);
        const data = await response.json();
        const items = data.hits.map((hit: any) => ({
          title: hit.title,
          url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`
        })).filter((item: any) => item.title);
        
        const customTopics = [
          { title: t("KI in Unternehmen produktiv einsetzen", "Using AI productively in enterprises", "Ứng dụng AI hiệu quả trong doanh nghiệp"), url: "#" },
          { title: t("Agentic AI: Autonome Agenten", "Agentic AI: Autonomous agents", "Agentic AI: Các tác nhân tự động"), url: "#" },
          { title: t("IT & KI Sicherheit", "IT & AI Security", "Bảo mật IT & AI"), url: "#" },
          { title: t("KI für E-Commerce", "AI for E-Commerce", "AI cho Thương mại điện tử"), url: "#" }
        ];

        if (items.length > 0) {
          setNews([...customTopics, ...items.slice(0, 10)]);
        } else {
          setNews([
            ...customTopics,
            { title: t("OpenAI veröffentlicht neues LLM", "OpenAI releases new LLM", "OpenAI phát hành LLM mới"), url: "#" },
            { title: t("WebAssembly in Produktion", "WebAssembly in production", "WebAssembly trong sản xuất"), url: "#" }
          ]);
        }
      } catch (e) {
        setNews([
          { title: t("KI in Unternehmen produktiv einsetzen", "Using AI productively in enterprises", "Ứng dụng AI hiệu quả trong doanh nghiệp"), url: "#" },
          { title: t("Agentic AI: Autonome Agenten", "Agentic AI: Autonomous agents", "Agentic AI: Các tác nhân tự động"), url: "#" },
          { title: t("IT & KI Sicherheit", "IT & AI Security", "Bảo mật IT & AI"), url: "#" },
          { title: t("KI für E-Commerce", "AI for E-Commerce", "AI cho Thương mại điện tử"), url: "#" }
        ]);
      }
    };
    fetchNews();
  }, [lang]);

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
      <ScrollDots sections={dotSections} />

      {/* Hero */}
      <section id="start" className="relative mx-auto max-w-6xl px-6 pt-20 pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/80 to-background" />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {t("Verfügbar ab Q3 2026", "Available starting Q3 2026", "Có sẵn từ Quý 3 năm 2026")}
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              {t("Software, die ", "Software that ", "Phần mềm mở rộng ")}<span className="text-primary">{t("skaliert", "scales", "hiệu quả")}</span>.<br />
              {t("KI, die ", "AI that ", "AI mang lại ")}<span className="text-accent">{t("liefert", "delivers", "kết quả")}</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {t(
                "Hi, ich bin Tiep — IT & KI Experte. Ich konzipiere und baue Cloud-Plattformen, integriere KI sicher (DSGVO-konform, AI Act, NIS2 auditierbar) in bestehende Produkte und liefere produktionsreifen Code.",
                "Hi, I'm Tiep — IT & AI Expert. I design and build Cloud platforms, integrate AI securely (GDPR-compliant, AI Act, NIS2 auditable) into existing products, and deliver production-ready code.",
                "Xin chào, tôi là Tiệp — Chuyên gia IT & AI. Tôi thiết kế và xây dựng nền tảng đám mây, tích hợp AI bảo mật và cung cấp mã nguồn sẵn sàng cho sản xuất."
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                {t("Projekte ansehen", "View Projects", "Xem dự án")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/50 px-5 py-3 text-sm font-medium hover:bg-surface">
                {t("Erstgespräch buchen", "Book initial call", "Đặt lịch tư vấn")}
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1"><span className="text-yellow-500">★</span> 4.9/5 · 32 {t("Bewertungen", "Reviews", "Đánh giá")}</div>
              <div className="flex items-center gap-1"><Cloud className="h-3 w-3" /> Azure Certified Solution Architect</div>
              <div className="flex items-center gap-1"><Cloud className="h-3 w-3" /> AWS Practitioner</div>
              <div className="flex items-center gap-1"><Terminal className="h-3 w-3" /> MCSA 2016</div>
              <div className="flex items-center gap-1"><Code2 className="h-3 w-3" /> MCPD & MCTS .Net C#</div>
              <div className="flex items-center gap-1">🌍 {t("Remote / EU-weit", "Remote / EU-wide", "Remote / Toàn EU")}</div>
            </div>
          </div>

          {/* Product code slideshow */}
          <ProductCodeSlideshow />
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-xs uppercase tracking-widest text-primary">{t("Leistungen", "Services", "Dịch vụ")}</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold">{t("Was ich für dich baue", "What I build for you", "Những gì tôi mang lại")}</h2>
          </motion.div>
          <Link to="/portfolio" className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            {t("Alle Projekte", "All Projects", "Tất cả dự án")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Cloud, title: t("Cloud Architektur", "Cloud Architecture", "Kiến trúc đám mây"), desc: t("AWS, GCP, Cloudflare. Infrastructure as Code, kostenoptimiert und produktionsreif.", "AWS, GCP, Cloudflare. Infrastructure as Code, cost-optimized and production-ready.", "AWS, GCP, Cloudflare. Infrastructure as Code, tối ưu chi phí và sẵn sàng chạy thực tế."), tags: ["AWS CDK", "Terraform", "K8s"] },
            { icon: Cpu, title: t("KI-Integration", "AI Integration", "Tích hợp AI"), desc: t("LLM-Agents, RAG-Pipelines, Embeddings. Vom Prototyp bis zum SLA-gestützten Betrieb.", "LLM-Agents, RAG-Pipelines, Embeddings. From prototype to SLA-backed operation.", "LLM-Agents, RAG-Pipelines, Embeddings. Từ bản mẫu đến vận hành có cam kết SLA."), tags: ["OpenAI", "LangChain", "Vector DB"] },
            { icon: Code2, title: t("Web Engineering", "Web Engineering", "Kỹ thuật Web"), desc: t("TypeScript, React, Next.js. Schnelle Time-to-Market ohne technische Schulden.", "TypeScript, React, Next.js. Fast time-to-market without technical debt.", "TypeScript, React, Next.js. Ra mắt thị trường nhanh chóng không có nợ kỹ thuật."), tags: ["TS", "React", "Next.js"] },
          ].map((s) => (
            <div key={s.title} className="group rounded-xl border border-border bg-surface/50 p-6 hover:border-primary/40 hover:bg-surface transition-all">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-background border border-border text-muted-foreground group-hover:text-primary transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-md bg-background px-2 py-1 text-xs font-mono text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack - Improved Version */}
      <section id="tech" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-border bg-surface/30 p-8 md:p-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]">
            {/* Left side text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" /> Tech Stack
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold">{t("Werkzeuge, denen ich vertraue", "Tools I trust", "Các công cụ tôi tin tưởng")}</h2>
              
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                  <p className="text-sm font-medium text-primary">"{t("KI nicht als Consumer sondern Wertschöpfer", "AI not as a consumer but as a creator of value", "AI không chỉ là công cụ tiêu dùng, mà là nguồn tạo giá trị")}"</p>
                </div>
              </div>
              
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {t("Erprobt in Produktion bei Startups und Mittelstand. Pragmatisch ausgewählt und auf nachhaltigen Betrieb ausgelegt.", "Proven in production at startups and SMEs. Pragmatically chosen and designed for sustainable operation.", "Đã được kiểm chứng trong sản xuất tại các startup và doanh nghiệp SME. Lựa chọn thực tế và thiết kế cho vận hành bền vững.")}
              </p>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2 text-sm font-medium text-green-400">
                  <Shield className="h-4 w-4" /> AI Governance Layer
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Architektur konzipiert für DSGVO, AI Act und NIS2 Compliance durch Auditing, Security & Privacy AI Layer.", "Architecture designed for GDPR, AI Act and NIS2 compliance through Auditing, Security & Privacy AI Layer.", "Kiến trúc được thiết kế cho sự tuân thủ GDPR, AI Act và NIS2 qua lớp Auditing, bảo mật và riêng tư AI.")}
                </p>
              </div>
            </motion.div>

            {/* Right side tools */}
            <TechStackTabs />
          </div>
        </div>
      </section>
      
      {/* Projects / Ausgewählte Arbeiten */}
      <section id="projekte" className="mx-auto max-w-6xl px-6 py-20">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-xs uppercase tracking-widest text-primary">{t("Aktuelle & Bisherige Projekte", "Current & Past Projects", "Dự án hiện tại và quá khứ")}</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">{t("Ausgewählte Arbeiten", "Selected Works", "Dự án tiêu biểu")}</h2>
        </motion.div>

        {/* Featured Project */}
        <div className="rounded-2xl border border-border bg-surface/30 overflow-hidden mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 p-8 md:p-12">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  <Sparkles className="h-3 w-3" /> {t("Aktuelles Meisterstück", "Current Masterpiece", "Tuyệt tác hiện tại")}
                </span>
                <span className="inline-flex items-center rounded-full bg-background border border-border px-2.5 py-1 text-xs text-muted-foreground">
                  Agentic E-Commerce
                </span>
              </div>
              <h3 className="text-3xl font-semibold mb-4">TRACE AI Commerce</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  "Eine Agentic-Commerce-Plattform (ACOS). Ein intelligentes Betriebssystem für den digitalen Handel.",
                  "An agentic commerce platform (ACOS). An intelligent operating system for digital commerce.",
                  "Một nền tảng thương mại agentic (ACOS). Một hệ điều hành thông minh cho thương mại số."
                )}{" "}
                {t("Arbeitet als", "Operates as a", "Hoạt động như một")} <strong className="text-foreground">{t("Multi-Agenten-Team", "multi-agent team", "đội ngũ đa tác nhân")}</strong>{" "}
                {t(
                  "mit getrennten Rollen, wobei jeder Agent ein hochspezialisierter Experte in seinem Bereich ist (z.B. Planner, Architect, DevOps, Security, SEO, Support).",
                  "with separate roles, where each agent is a highly specialized expert in its domain (e.g. Planner, Architect, DevOps, Security, SEO, Support).",
                  "với các vai trò riêng biệt, mỗi agent là chuyên gia chuyên sâu trong lĩnh vực của mình (ví dụ: Planner, Architect, DevOps, Security, SEO, Support)."
                )}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {t("Inklusive starker", "Including strong", "Bao gồm")} <strong className="text-foreground">AI Governance</strong>{" "}
                {t(
                  "(Auditor, Security, Privacy, Compliance AI) für DSGVO, AI Act und NIS 2 Compliance durch einem",
                  "(Auditor, Security, Privacy, Compliance AI) for GDPR, AI Act and NIS 2 compliance through a",
                  "AI mạnh mẽ (Auditor, Security, Privacy, Compliance AI) để tuân thủ GDPR, AI Act và NIS 2 thông qua một"
                )} <strong className="text-foreground">{t("Model Continuity Layer", "Model Continuity Layer", "Model Continuity Layer")}</strong>.
              </p>
              <div className="flex flex-wrap gap-2">
                {["LangGraph", "Qdrant", "Supabase", "n8n", "MCP Server"].map(tag => (
                  <span key={tag} className="rounded text-xs px-2.5 py-1 font-mono bg-primary/10 text-primary">{tag}</span>
                ))}
              </div>
            </div>

            {/* Diagram Representation */}
            <div className="rounded-xl border border-border bg-background p-6 flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-full max-w-sm">
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary mb-3 relative"
                    animate={{ boxShadow: ["0px 0px 0px 0px rgba(74, 222, 128, 0.2)", "0px 0px 20px 5px rgba(74, 222, 128, 0.4)", "0px 0px 0px 0px rgba(74, 222, 128, 0.2)"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <Cpu className="h-7 w-7" />
                  </motion.div>
                  <div className="text-xs font-bold tracking-widest uppercase">TRACE OS</div>
                </motion.div>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <motion.div 
                      className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface mb-2"
                      whileHover={{ scale: 1.1, borderColor: "rgba(74, 222, 128, 0.5)" }}
                    >
                      <Sparkles className="h-4 w-4 text-accent" />
                    </motion.div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">AGENT</div>
                    <div className="mt-2 text-[10px] text-muted-foreground">Trend<br/>Trade<br/>OSINT</div>
                  </motion.div>
                  <motion.div 
                    className="text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.div 
                      className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface mb-2"
                      whileHover={{ scale: 1.1, borderColor: "rgba(74, 222, 128, 0.5)" }}
                    >
                      <Code2 className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">FACTORY</div>
                    <div className="mt-2 text-[10px] text-muted-foreground">YouTube<br/>TikTok<br/>SEO</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.div 
                      className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface mb-2"
                      whileHover={{ scale: 1.1, borderColor: "rgba(74, 222, 128, 0.5)" }}
                    >
                      <Cloud className="h-4 w-4 text-yellow-500" />
                    </motion.div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">AGENT</div>
                    <div className="mt-2 text-[10px] text-muted-foreground">Shopping Agent<br/>Deal</div>
                  </motion.div>
                </div>

                <motion.div 
                  className="rounded-lg border border-border bg-surface/50 p-3 text-center text-[10px] text-muted-foreground font-mono"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="text-primary">{t("KI-Agenten", "AI Agents", "AI Agents")}</span> → {t("Marktforschung", "Market Research", "Nghiên cứu thị trường")} → {t("Content", "Content", "Nội dung")} → {t("Handel", "Commerce", "Thương mại")} → {t("eigene Produkte", "own products", "sản phẩm riêng")}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Smaller Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {smallProjects.map((p) => (
            <div 
              key={p.title} 
              onClick={() => setSelectedProject(p)}
              className="rounded-xl border border-border bg-surface/30 p-6 hover:border-primary/40 transition-colors cursor-pointer group"
            >
              <div className="flex gap-2 mb-4">
                <span className={`rounded px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium ${p.tagColor}`}>{p.tag}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5">{p.tag2}</span>
              </div>
              <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors flex justify-between items-center">
                {p.title}
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                {p.desc}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p.status}
              </div>
            </div>
          ))}
        </div>

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
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-surface p-6 md:p-10 shadow-2xl text-left"
              >
                <button
                  type="button"
                  aria-label={t("Schließen", "Close", "Đóng")}
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-6 top-6 rounded-full p-2 bg-background border border-border text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="mb-8 pr-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`rounded px-2 py-0.5 text-xs font-medium uppercase tracking-wider ${selectedProject.tagColor}`}>{selectedProject.tag}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">{selectedProject.tag2}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">{selectedProject.title}</h2>
                  <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> {selectedProject.status}
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
      </section>

      {/* Blog - Stacked Row Layout */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center gap-2 text-xs font-mono text-primary mb-4 rounded-full border border-border bg-surface/50 px-3 py-1">
            <Bot className="h-3.5 w-3.5" /> {t("Journal", "Journal", "Nhật ký")}
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t("Gedanken & Architektur", "Thoughts & Architecture", "Suy nghĩ & Kiến trúc")}</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            {t(
              "Technische Deep-Dives, Lektionen aus der Produktion und Perspektiven auf die Entwicklung von KI-Agenten und Cloud-Systemen.",
              "Technical deep-dives, lessons from production, and perspectives on the evolution of AI agents and cloud systems.",
              "Các bài viết chuyên sâu về kỹ thuật, bài học từ thực tế sản xuất và góc nhìn về sự phát triển của hệ thống đám mây và tác nhân AI."
            )}
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-4 text-left">
          <Link to="/blog" className="group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-xl border border-border bg-surface/30 p-6 hover:border-primary/40 transition-colors">
            <div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-primary font-medium">LLM</span>
                <span>📅 {t("28. Juni 2026", "June 28, 2026", "28 Tháng 6, 2026")}</span>
                <span>⏱ 10 {t("min", "min", "phút")}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {t("Die nächste Generation von LLMs: Was kommt nach GPT-4?", "The next generation of LLMs: what comes after GPT-4?", "Thế hệ LLM tiếp theo: điều gì sẽ đến sau GPT-4?")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  "Eine Analyse der neuen Architekturen, Mixture of Experts (MoE) und wie lokale, spezialisierte Modelle die Cloud-Giganten herausfordern.",
                  "An analysis of new architectures, Mixture of Experts (MoE), and how local, specialized models are challenging the cloud giants.",
                  "Phân tích các kiến trúc mới, Mixture of Experts (MoE) và cách các mô hình chuyên biệt cục bộ đang thách thức các gã khổng lồ đám mây."
                )}
              </p>
            </div>
            <div className="text-sm text-primary font-medium shrink-0 flex items-center gap-1">
              {t("Artikel lesen", "Read article", "Đọc bài viết")} <ArrowRight className="h-4 w-4" />
            </div>
          </Link>

          <Link to="/blog" className="group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-xl border border-border bg-surface/30 p-6 hover:border-primary/40 transition-colors">
            <div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="rounded bg-accent/10 px-2 py-0.5 text-accent font-medium">WebAssembly</span>
                <span>📅 {t("15. Mai 2026", "May 15, 2026", "15 Tháng 5, 2026")}</span>
                <span>⏱ 8 {t("min", "min", "phút")}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {t("WebAssembly & KI: Modelle direkt im Browser ausführen", "WebAssembly & AI: running models directly in the browser", "WebAssembly & AI: chạy mô hình trực tiếp trên trình duyệt")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  "Wie WebAssembly (Wasm) und WebGPU es ermöglichen, leistungsstarke KI-Modelle ohne Serverkosten direkt auf dem Endgerät laufen zu lassen.",
                  "How WebAssembly (Wasm) and WebGPU make it possible to run powerful AI models directly on the device, without server costs.",
                  "Cách WebAssembly (Wasm) và WebGPU cho phép chạy các mô hình AI mạnh mẽ trực tiếp trên thiết bị mà không tốn chi phí máy chủ."
                )}
              </p>
            </div>
            <div className="text-sm text-primary font-medium shrink-0 flex items-center gap-1">
              {t("Artikel lesen", "Read article", "Đọc bài viết")} <ArrowRight className="h-4 w-4" />
            </div>
          </Link>

          <Link to="/blog" className="group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-xl border border-border bg-surface/30 p-6 hover:border-primary/40 transition-colors">
            <div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-primary font-medium">AI Tech</span>
                <span>📅 {t("02. April 2026", "April 2, 2026", "2 Tháng 4, 2026")}</span>
                <span>⏱ 14 {t("min", "min", "phút")}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {t("Agentic Workflows: Wenn KI selbstständig handelt", "Agentic workflows: when AI acts on its own", "Agentic Workflows: Khi AI tự hành động")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  "Über den Wandel von Chatbots zu autonomen Agenten-Systemen und wie sie komplette Unternehmensprozesse steuern.",
                  "On the shift from chatbots to autonomous agent systems and how they control entire business processes.",
                  "Về sự chuyển đổi từ chatbot sang hệ thống agent tự động và cách chúng điều khiển toàn bộ quy trình doanh nghiệp."
                )}
              </p>
            </div>
            <div className="text-sm text-primary font-medium shrink-0 flex items-center gap-1">
              {t("Artikel lesen", "Read article", "Đọc bài viết")} <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>

        <div className="mt-8">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
            {t("Alle Artikel anzeigen", "View all articles", "Xem tất cả bài viết")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="kontakt" className="mx-auto max-w-4xl px-6 py-20 pb-32">
        <motion.div 
          className="rounded-2xl border border-border bg-surface/30 p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Github className="mx-auto mb-6 h-8 w-8 text-muted-foreground" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t("Hast du ein Projekt im Kopf?", "Do you have a project in mind?", "Bạn có dự án muốn thực hiện?")}</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t(
              "30 Minuten Erstgespräch, kostenlos. Wir prüfen Scope, Stack und Zeitplan — und ob wir zueinander passen.",
              "30 minutes initial call, free of charge. We check scope, stack and timeline — and if we are a good fit.",
              "Tư vấn 30 phút miễn phí. Chúng ta sẽ xem xét phạm vi, công nghệ, lịch trình — và sự phù hợp."
            )}
          </p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md bg-[#4ADE80] px-6 py-3 text-sm font-medium text-black hover:bg-[#4ADE80]/90 transition-colors">
            {t("Termin anfragen", "Request a meeting", "Đặt lịch hẹn")} <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* News Marquee */}
      <section className="mx-auto max-w-5xl px-6 relative z-20 -mt-12 mb-16">
        <motion.div
          className="overflow-hidden rounded-xl border border-border/50 bg-[#0a0a0a]/80 backdrop-blur-md shadow-2xl py-3 relative flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
          <div className="flex whitespace-nowrap animate-marquee items-center" style={{ animationDuration: "50s" }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex px-4 items-center text-sm font-mono tracking-tight text-muted-foreground">
                {news.length > 0 ? news.map((item, j) => (
                  <div key={j} className="flex items-center">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer group flex items-center gap-2">
                      <span className="text-green-500/80 text-xs">▲</span>
                      <span className="text-foreground/90 font-medium group-hover:text-green-400 transition-colors">{item.title}</span>
                    </a>
                    <span className="mx-8 text-border/50">|</span>
                  </div>
                )) : (
                  <div className="flex items-center">
                    <span className="text-primary/70 animate-pulse">{t("Lade Live-Feed...", "Loading Live-Feed...", "Đang tải dữ liệu...")}</span>
                    <span className="mx-8 text-border/50">|</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary/20 text-primary border border-primary/30 shadow-lg backdrop-blur-md hover:bg-primary/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

