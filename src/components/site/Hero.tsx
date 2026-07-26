import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLang } from "@/contexts/LangContext";

const HARBOR_IMAGE = "/images/harbor/kallmorgen-hafen.jpg";

/**
 * Vollflächiger Hero mit Hamburger-Hafen-Ölgemälde (Friedrich Kallmorgen,
 * gemeinfrei) als Hintergrund. Textfarbe ist bewusst fest auf warmes
 * Dunkel-Braun/Schwarz gesetzt (nicht an --foreground gekoppelt), da sie
 * über dem hellen Himmel-Bereich des Gemäldes sitzt, unabhängig vom
 * globalen dunklen Theme der restlichen Seite.
 */
export function Hero() {
  const { t } = useLang();

  return (
    <section id="start" className="relative overflow-hidden">
      <img
        src={HARBOR_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "50% 35%" }}
      />
      {/* Scrim für Lesbarkeit: dunkler links (Textspalte), Verlauf nach unten zur nächsten Sektion */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.968_0.011_85/0.55)] via-[oklch(0.968_0.011_85/0.2)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-28 md:pt-48 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
          style={{ color: "oklch(0.232 0.006 78)" }}
        >
          <h1 className="font-display text-4xl font-medium leading-[1.1] md:text-6xl">
            {t(
              "Technologie mit Vision. Lösungen mit Wirkung.",
              "Technology with vision. Solutions with impact.",
              "Công nghệ có tầm nhìn. Giải pháp tạo tác động."
            )}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed opacity-90 md:text-lg">
            {t(
              "Ich unterstütze Unternehmen und Gründer mit KI, Automatisierung und digitalen Plattformen – für eine smarte und effiziente Zukunft.",
              "I support companies and founders with AI, automation, and digital platforms — for a smart and efficient future.",
              "Tôi đồng hành cùng doanh nghiệp và nhà sáng lập với AI, tự động hóa và nền tảng số — cho một tương lai thông minh và hiệu quả."
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#ueber-mich"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,var(--primary-hover),var(--primary))] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_15px_oklch(0.581_0.109_169/35%),0_8px_20px_rgba(0,0,0,0.18)] ring-1 ring-[var(--color-accent)]/40 transition-all hover:-translate-y-0.5"
            >
              {t("Mehr über mich", "More about me", "Thêm về tôi")} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors"
              style={{
                borderColor: "oklch(0.232 0.006 78 / 30%)",
                background: "oklch(0.968 0.011 85 / 70%)",
                color: "oklch(0.232 0.006 78)",
              }}
            >
              {t("Meine Leistungen", "My services", "Dịch vụ của tôi")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
