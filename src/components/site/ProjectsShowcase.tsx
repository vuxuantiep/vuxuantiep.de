import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLang } from "@/contexts/LangContext";
import { TraceVisual, BrokiVisual, AiOsVisual, BdsVisual } from "@/components/site/ProjectVisuals";

export type Project = {
  key: "trace" | "broki" | "bds" | "aios";
  title: string;
  tagline: string;
  desc: string;
  to: "/" | "/portfolio" | "/broki";
  hash?: string;
};

/** Gemeinsame Projektliste für Hero-Galerie und Projektsektion. */
export function useProjects(): Project[] {
  const { t } = useLang();
  return [
    {
      key: "trace",
      title: "TRACE AI",
      tagline: "One Platform. Many Lives.",
      desc: t(
        "Hybride KI-Plattform mit lokalem Kern – Basis für TRACE IT, Care, Commerce und Vision.",
        "Hybrid AI platform with a local core – the base for TRACE IT, Care, Commerce and Vision.",
        "Nền tảng AI lai với lõi cục bộ – nền móng cho TRACE IT, Care, Commerce và Vision."
      ),
      to: "/",
      hash: "trace-ai",
    },
    {
      key: "broki",
      title: "Broki AI",
      tagline: t("KI-Assistentin im Browser", "AI assistant in the browser", "Trợ lý AI trong trình duyệt"),
      desc: t(
        "Browser-Erweiterung mit eigener Wissensbasis, signierten Updates und Zero-Trust-Sicherheit.",
        "Browser extension with its own knowledge base, signed updates and zero-trust security.",
        "Tiện ích trình duyệt với kho tri thức riêng, cập nhật có chữ ký và bảo mật Zero Trust."
      ),
      to: "/broki",
    },
    {
      key: "bds",
      title: "BDS Navigator",
      tagline: t("Immobilien-Verwaltung", "Property management", "Quản lý bất động sản"),
      desc: t(
        "Digitale Plattform mit Karten, Marktdaten und KI-Assistent für Investoren.",
        "Digital platform with maps, market data and an AI assistant for investors.",
        "Nền tảng số với bản đồ, dữ liệu thị trường và trợ lý AI cho nhà đầu tư."
      ),
      to: "/portfolio",
    },
    {
      key: "aios",
      title: "AI-OS",
      tagline: t("Multi-Agenten-Plattform", "Multi-agent platform", "Nền tảng đa tác tử"),
      desc: t(
        "Eigenes KI-Betriebssystem mit spezialisierten Agenten, Workflows und Wissensdatenbank.",
        "My own AI operating system with specialised agents, workflows and a knowledge base.",
        "Hệ điều hành AI riêng với các tác tử chuyên biệt, quy trình và cơ sở tri thức."
      ),
      to: "/portfolio",
    },
  ];
}

/**
 * Randloses Projektbild: warmer Verlauf als Grund, Visual bzw. Screenshot
 * läuft unten weich in die Kartenfarbe über (kein Bildrahmen).
 */
// Einheitlicher Look für alle 4 Projekte (CEO 18.11.2026): transparentes,
// langsam bewegtes Hintergrundbild + klare Grafik im Vordergrund.
// TRACE blendet Plattform ↔ Infrastruktur über; Broki hat (noch) kein
// echtes Bild – dort liegt die eigene Grafik vergrößert dahinter.
const BG_IMAGES: Record<string, string> = {
  trace: "/images/projects/trace-plattform.webp",
  bds: "/images/BDS-Navigator/temp_image_1783206179972.png",
  aios: "/images/projects/aios-architektur.webp",
};

export function ProjectMedia({ project, className = "" }: { project: Project; className?: string }) {
  const bg = BG_IMAGES[project.key];
  return (
    <div className={`relative overflow-hidden bg-gradient-to-b from-[var(--beige)] to-[var(--surface)] ${className}`}>
      <div aria-hidden="true" className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]">
        {bg ? (
          <img src={bg} alt="" loading="lazy" decoding="async" className="pm-pan absolute inset-0 h-full w-full object-cover object-top opacity-[0.32]" />
        ) : (
          <div className="pm-pan absolute inset-0 scale-150 opacity-[0.32]">
            <BrokiVisual className="h-full w-full" />
          </div>
        )}
        {project.key === "trace" && (
          <img src="/images/projects/trace-infrastruktur.webp" alt="" loading="lazy" decoding="async" className="pm-pan pm-fade absolute inset-0 h-full w-full object-cover opacity-0" />
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {project.key === "trace" && <TraceVisual className="h-full w-full" />}
        {project.key === "broki" && <BrokiVisual className="h-full w-full" />}
        {project.key === "bds" && <BdsVisual className="h-full w-full" />}
        {project.key === "aios" && <AiOsVisual className="h-full w-full" />}
      </div>
      {/* weicher Übergang in die Kartenfläche */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[var(--surface)]" />
    </div>
  );
}

/**
 * "Ausgewählte Projekte" — randlose, warme Karten (2 Spalten ab md,
 * auf dem Smartphone untereinander).
 */
export function ProjectsShowcase() {
  const { t } = useLang();
  const projects = useProjects();

  return (
    <section id="projekte" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t("Projekte", "Projects", "Dự án")}
          </div>
          <h2 className="mt-3 text-[1.6rem] font-semibold leading-tight md:text-4xl">
            {t("Ausgewählte Projekte", "Selected projects", "Dự án tiêu biểu")}
          </h2>
        </div>
        <Link to="/portfolio" className="inline-flex min-h-11 items-center gap-2 text-base font-medium text-primary hover:underline underline-offset-4">
          {t("Alle Projekte", "All projects", "Tất cả dự án")} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.key}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.06, ease: "easeOut" }}
          >
            <Link
              to={p.to}
              hash={p.hash}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-surface transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_oklch(0.4_0.05_60/0.45)]"
            >
              <ProjectMedia project={p} className="aspect-[16/10]" />
              <div className="flex flex-1 flex-col px-6 pb-7 md:px-8">
                <div className="text-sm font-medium text-primary">{p.tagline}</div>
                <h3 className="mt-1.5 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
                  {t("Mehr erfahren", "Learn more", "Tìm hiểu thêm")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
