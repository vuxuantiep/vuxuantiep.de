import { Link } from "@tanstack/react-router";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useLang } from "../../contexts/LangContext";

/**
 * Footer im Apple-Clean-Stil: dunkelgrüne CTA-Karte ("Lass uns Ideen
 * verwirklichen.") + schlichte Fußzeile auf Weiß.
 */
export function Footer() {
  const { t } = useLang();

  return (
    <footer>
      <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-[2rem] bg-[oklch(0.3_0.05_165)] px-6 py-14 text-center text-[oklch(0.97_0.01_85)] md:px-12 md:py-20">
          <h2 className="text-3xl font-semibold md:text-5xl">
            {t("Ihre Daten. Ihre KI. Ihre Kontrolle.", "Your data. Your AI. Your control.", "Dữ liệu của bạn. AI của bạn. Quyền kiểm soát của bạn.")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg opacity-80">
            {t(
              "30 Minuten Erstgespräch, kostenlos: Wo kann lokale KI in Ihrem Unternehmen sicher helfen?",
              "Free 30-minute intro call: where can local AI safely help your business?",
              "Tư vấn miễn phí 30 phút: AI cục bộ có thể hỗ trợ doanh nghiệp của bạn an toàn ở đâu?"
            )}
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[oklch(0.97_0.01_85)] px-7 text-base font-medium text-[oklch(0.25_0.04_165)] transition-opacity hover:opacity-90"
          >
            {t("Kontakt aufnehmen", "Get in touch", "Liên hệ")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-6 pt-10 pb-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <a href="mailto:info@vuxuantiep.de" className="inline-flex min-h-10 items-center gap-2 hover:text-foreground">
              <Mail className="h-4 w-4" /> info@vuxuantiep.de
            </a>
            <span className="inline-flex min-h-10 items-center gap-2">
              <MapPin className="h-4 w-4" /> Hamburg, Deutschland
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© {new Date().getFullYear()} Vu Xuan Tiep</span>
            <Link to="/impressum" className="inline-flex min-h-10 items-center hover:text-foreground">
              {t("Impressum", "Imprint", "Thông tin pháp lý")}
            </Link>
            <Link to="/datenschutz" className="inline-flex min-h-10 items-center hover:text-foreground">
              {t("Datenschutz", "Privacy", "Bảo mật")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
