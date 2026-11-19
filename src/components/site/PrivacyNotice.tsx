import { Link } from "@tanstack/react-router";
import { ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LangContext";

const STORAGE_KEY = "privacy-notice-dismissed";

export function PrivacyNotice() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // Storage nicht verfügbar (z. B. blockiert) — Hinweis einfach anzeigen.
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      // Ohne Storage wird der Hinweis beim nächsten Besuch erneut gezeigt.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("Datenschutzhinweis", "Privacy notice", "Thông báo quyền riêng tư")}
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-xl rounded-xl border border-border bg-surface/95 p-4 shadow-2xl backdrop-blur"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <div className="text-xs leading-relaxed text-muted-foreground">
          <p>
            {t(
              "Diese Website verwendet keine Tracking-Cookies und keine Analyse- oder Werbedienste. Es werden nur technisch notwendige Daten verarbeitet (z. B. Server-Logs beim Hosting und diese Hinweis-Bestätigung in Ihrem Browser).",
              "This website uses no tracking cookies and no analytics or advertising services. Only technically necessary data is processed (e.g. hosting server logs and this notice confirmation in your browser).",
              "Trang web này không dùng cookie theo dõi, không dùng dịch vụ phân tích hay quảng cáo. Chỉ dữ liệu cần thiết về kỹ thuật được xử lý (ví dụ: nhật ký máy chủ và xác nhận thông báo này trong trình duyệt của bạn)."
            )}{" "}
            <Link to="/datenschutz" className="text-primary underline underline-offset-2 hover:text-primary/80">
              {t("Mehr in der Datenschutzerklärung", "More in the privacy policy", "Xem thêm trong chính sách quyền riêng tư")}
            </Link>
          </p>
          <button
            type="button"
            onClick={dismiss}
            className="mt-3 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("Verstanden", "Got it", "Đã hiểu")}
          </button>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label={t("Hinweis schließen", "Close notice", "Đóng thông báo")}
          className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
