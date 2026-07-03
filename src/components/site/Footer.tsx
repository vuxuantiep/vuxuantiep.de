import { useLang } from "../../contexts/LangContext";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-muted-foreground">
        <div>
          <div className="font-display text-foreground font-semibold">vuxuantiep.de — {t("IT & KI Experte", "IT & AI Expert", "Chuyên gia IT & AI")}</div>
          <div className="mt-1">{t("Cloud · KI · Web Engineering", "Cloud · AI · Web Engineering", "Đám mây · AI · Web Engineering")}</div>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/vuxuantiep" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
          <a href="https://linkedin.com/in/vuxuantiep" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href="mailto:tiep@vuxuantiep.de" className="hover:text-foreground">E-Mail</a>
        </div>
        <div>© {new Date().getFullYear()} · {t("Impressum", "Imprint", "Dấu ấn")} · {t("Datenschutz", "Privacy", "Bảo mật")}</div>
      </div>
    </footer>
  );
}
