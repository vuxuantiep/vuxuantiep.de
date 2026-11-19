import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Languages, Briefcase } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { AboutSection } from "@/components/site/AboutSection";
import { SkillsServices } from "@/components/site/SkillsServices";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { useLang } from "@/contexts/LangContext";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/ueber-mich")({
  head: ({ match }) =>
    seoHead({
      path: "/ueber-mich",
      search: match.search,
      title: {
        de: "Über mich — Vu Xuan Tiep · vuxuantiep.de",
        en: "About me — Vu Xuan Tiep · vuxuantiep.de",
        vi: "Về tôi — Vu Xuan Tiep · vuxuantiep.de",
      },
      description: {
        de: "IT-Experte aus Hamburg für Identity & Security, KI und Automatisierung. Werdegang, Werte und Schwerpunkte.",
        en: "IT expert from Hamburg for identity & security, AI and automation. Background, values and focus areas.",
        vi: "Chuyên gia IT tại Hamburg về danh tính & bảo mật, AI và tự động hóa. Lý lịch, giá trị và lĩnh vực trọng tâm.",
      },
    }),
  component: AboutPage,
});

// Freigestelltes Portrait (transparenter Hintergrund) — liegt direkt auf dem
// warmen Header-Verlauf, unten weich ausgeblendet. Kein Rahmen.
const PORTRAIT = "/images/about/portrait-business-transparent.webp";

function AboutPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <header className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              // endet exakt im Ton der folgenden Beige-Sektion → kein sichtbarer Übergang
              "radial-gradient(ellipse 45% 70% at 76% 55%, oklch(0.9 0.045 70 / 0.85), transparent 70%), radial-gradient(ellipse 50% 60% at 5% 10%, oklch(0.95 0.03 140 / 0.35), transparent 70%), linear-gradient(to bottom, var(--background) 25%, oklch(0.955 0.022 76))",
          }}
        />
        {/* items-start: Foto beginnt auf Höhe der Überschrift (nicht unten ausgerichtet) */}
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 px-4 pt-10 pb-8 sm:px-6 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-12">
          <div className="pb-4 lg:pb-0">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t("Über mich", "About me", "Về tôi")}
            </div>
            <h1 className="mt-5 text-[1.75rem] md:text-[2.25rem] font-semibold leading-[1.1]">
              {t("Hallo, ich bin Tiep.", "Hi, I'm Tiep.", "Xin chào, tôi là Tiệp.")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t(
                "Mit über 10 Jahren Berufspraxis in der IT verbinde ich IT und KI zu Lösungen, die im Alltag spürbar entlasten: Antworten aus dem eigenen Firmenwissen in Sekunden, weniger wiederkehrende Supportanfragen, sichere Zugänge – und Daten, die im Unternehmen bleiben. Das ist für mich nicht nur Arbeit, sondern Leidenschaft.",
                "With more than 10 years of hands-on IT experience, I combine IT and AI into solutions that make a noticeable difference every day: answers from your own company knowledge in seconds, fewer recurring support requests, secure access – and data that stays in your company. For me this isn't just work, it's a passion.",
                "Với hơn 10 năm kinh nghiệm thực tế trong ngành IT, tôi kết hợp IT và AI thành những giải pháp giảm tải rõ rệt mỗi ngày: câu trả lời từ tri thức nội bộ chỉ trong vài giây, ít yêu cầu hỗ trợ lặp lại, truy cập an toàn – và dữ liệu luôn ở lại doanh nghiệp. Với tôi, đây không chỉ là công việc mà là đam mê."
              )}
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Briefcase className="h-4 w-4 text-primary" /> {t("10+ Jahre IT-Praxis", "10+ years in IT", "10+ năm kinh nghiệm IT")}</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Hamburg, Deutschland</span>
              <span className="inline-flex items-center gap-2"><Languages className="h-4 w-4 text-primary" /> Deutsch · English · Tiếng Việt</span>
            </div>
            <Link
              to="/kontakt"
              className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-medium text-primary-foreground transition-colors hover:bg-[var(--primary-hover)]"
            >
              {t("Kontakt aufnehmen", "Get in touch", "Liên hệ")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <img
              src={PORTRAIT}
              alt={t("Portrait Vu Xuan Tiep", "Portrait of Vu Xuan Tiep", "Chân dung Vu Xuan Tiep")}
              width={1418}
              height={1232}
              fetchPriority="high"
              className="block w-full [mask-image:linear-gradient(to_bottom,black_70%,transparent_98%)]"
            />
          </div>
        </div>
      </header>

      <AboutSection variant="page" />
      <ExperienceSection />
      <SkillsServices />
      <Footer />
    </div>
  );
}
