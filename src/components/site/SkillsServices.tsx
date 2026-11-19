import { motion } from "motion/react";
import { ShieldCheck, Sparkles, Server, Rocket } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

/**
 * "Meine Schwerpunkte" — 4 Karten. Smartphone: untereinander, Tablet: 2 Spalten,
 * Desktop: 4 Spalten. Keine Hover-Abhängigkeit (Inhalte sind immer sichtbar).
 */
export function SkillsServices() {
  const { t } = useLang();

  // Schwerpunkte entlang der Positionierung „Souveräne KI" (18.11.2026)
  const items = [
    {
      icon: Sparkles,
      title: t("Souveräne KI", "Sovereign AI", "AI tự chủ"),
      desc: t(
        "Lokale Sprachmodelle und Wissenssuche auf eigener Hardware – Ihre Dokumente verlassen das Haus nicht.",
        "Local language models and knowledge search on your own hardware – your documents never leave the building.",
        "Mô hình ngôn ngữ và tìm kiếm tri thức cục bộ trên phần cứng riêng – tài liệu không rời khỏi doanh nghiệp."
      ),
    },
    {
      icon: ShieldCheck,
      title: "Identity & Zero Trust",
      desc: t(
        "Entra ID, Conditional Access, Keycloak: ein Login, klare Rollen, MFA – für Menschen und KI-Agenten.",
        "Entra ID, Conditional Access, Keycloak: one login, clear roles, MFA – for people and AI agents.",
        "Entra ID, Conditional Access, Keycloak: một lần đăng nhập, vai trò rõ ràng, MFA – cho con người và tác tử AI."
      ),
    },
    {
      icon: Server,
      title: t("Hybrider Arbeitsplatz", "Hybrid workplace", "Môi trường làm việc lai"),
      desc: t(
        "Microsoft 365 und openDesk sinnvoll kombinieren – statt Abhängigkeit von nur einem Anbieter.",
        "Combine Microsoft 365 and openDesk sensibly – instead of depending on a single vendor.",
        "Kết hợp Microsoft 365 và openDesk hợp lý – thay vì phụ thuộc vào một nhà cung cấp."
      ),
    },
    {
      icon: Rocket,
      title: t("Agenten mit Freigabe", "Agents with approval", "Tác tử có phê duyệt"),
      desc: t(
        "Automatisierung, die Tickets und Aufgaben vorbereitet – ausgeführt wird erst nach menschlicher Freigabe.",
        "Automation that prepares tickets and tasks – executed only after human approval.",
        "Tự động hóa chuẩn bị ticket và công việc – chỉ thực hiện sau khi con người phê duyệt."
      ),
    },
  ];

  return (
    <section id="leistungen" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {t("Leistungen", "Services", "Dịch vụ")}
        </div>
        <h2 className="mt-3 text-[1.6rem] font-semibold leading-tight md:text-4xl">
          {t("Was ich anders mache", "What I do differently", "Điều tôi làm khác biệt")}
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
            className="rounded-3xl bg-surface p-7"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-card text-primary shadow-sm">
              <item.icon className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
