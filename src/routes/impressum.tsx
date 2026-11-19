import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/contexts/LangContext";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/impressum")({
  head: ({ match }) => seoHead({
    path: "/impressum",
    search: match.search,
    noindex: true,
    title: {
      de: "Impressum — vuxuantiep.de",
      en: "Legal Notice — vuxuantiep.de",
      vi: "Thông tin pháp lý — vuxuantiep.de",
    },
    description: {
      de: "Impressum und Anbieterkennzeichnung von vuxuantiep.de.",
      en: "Legal notice and provider identification of vuxuantiep.de.",
      vi: "Thông tin pháp lý và nhà cung cấp của vuxuantiep.de.",
    },
  }),
  component: Impressum,
});

function Impressum() {
  const { t } = useLang();

  return (
    <div className="min-h-screen">
      <Nav />
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-20">
        <div className="text-xs uppercase tracking-widest text-primary">{t("Rechtliches", "Legal", "Pháp lý")}</div>
        <h1 className="mt-3 font-display text-[1.75rem] md:text-[2.25rem] font-semibold leading-tight">
          {t("Impressum", "Imprint", "Thông tin pháp lý")}
        </h1>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">
              {t("Angaben gemäß § 5 DDG", "Information pursuant to § 5 DDG", "Thông tin theo § 5 DDG")}
            </h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground">Vu Xuan Tiep</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Stresemannallee 15, 22529 Hamburg, {t("Deutschland", "Germany", "Đức")}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">{t("Kontakt", "Contact", "Liên hệ")}</h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+491781868683" className="hover:text-foreground transition-colors">+49 178 1868683</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>
                  <a href="mailto:tiep@vuxuantiep.de" className="hover:text-foreground transition-colors">tiep@vuxuantiep.de</a>
                  {" "}{t("oder", "or", "hoặc")}{" "}
                  <a href="mailto:vuxuantiep@gmail.com" className="hover:text-foreground transition-colors">vuxuantiep@gmail.com</a>
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">
              {t(
                "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
                "Responsible for content pursuant to § 18 (2) MStV",
                "Chịu trách nhiệm nội dung theo § 18 (2) MStV"
              )}
            </h2>
            <p className="mt-4">Vu Xuan Tiep, Stresemannallee 15, 22529 Hamburg</p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">{t("Haftungshinweis", "Disclaimer", "Miễn trừ trách nhiệm")}</h2>
            <p className="mt-4">
              {t(
                "Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
                "Despite careful content control, I assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.",
                "Mặc dù kiểm soát nội dung cẩn thận, tôi không chịu trách nhiệm về nội dung của các liên kết bên ngoài. Chủ sở hữu của các trang được liên kết hoàn toàn chịu trách nhiệm về nội dung của họ."
              )}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
