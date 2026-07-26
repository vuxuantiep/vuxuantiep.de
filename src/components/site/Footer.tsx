import { Link } from "@tanstack/react-router";
import { useLang } from "../../contexts/LangContext";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative overflow-hidden border-t border-border mt-24">
      {/* Grünes Punktraster — gleiches Muster wie im Menü (Nav) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#318267_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-muted-foreground">
        <div>
          <div className="font-display text-foreground font-semibold">vuxuantiep.de — {t("IT & KI Spezialist", "IT & AI Specialist", "Chuyên viên IT & AI")}</div>
          <div className="mt-1">{t("Cloud · KI · Web Engineering", "Cloud · AI · Web Engineering", "Đám mây · AI · Web Engineering")}</div>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/vuxuantiep" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
          <a href="https://linkedin.com/in/vuxuantiep" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href="mailto:tiep@vuxuantiep.de" className="hover:text-foreground">E-Mail</a>
        </div>
        <div>
          © 2026 Vu Xuan Tiep ·{" "}
          <Link to="/impressum" className="hover:text-foreground transition-colors">
            {t("Impressum", "Imprint", "Thông tin pháp lý")}
          </Link>{" "}
          ·{" "}
          <Link to="/datenschutz" className="hover:text-foreground transition-colors">
            {t("Datenschutz", "Privacy", "Bảo mật")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
