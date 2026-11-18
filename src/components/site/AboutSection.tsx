import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

/**
 * "Über mich" — warme Beige-Sektion (persönliche Note). Keine erfundenen
 * Kennzahlen; nur belegbare Aussagen.
 */
export function AboutSection({ variant = "home" }: { variant?: "home" | "page" }) {
  const { t } = useLang();

  const values = [
    {
      title: t("Praxisnah", "Hands-on", "Thực tiễn"),
      desc: t(
        "Aus dem IT-Alltag mit echten Anwendern — Lösungen müssen im Betrieb funktionieren.",
        "From everyday IT work with real users — solutions have to work in production.",
        "Từ công việc IT hằng ngày với người dùng thật — giải pháp phải chạy được trong thực tế."
      ),
    },
    {
      title: t("Datenschutz zuerst", "Privacy first", "Ưu tiên bảo mật dữ liệu"),
      desc: t(
        "Lokale KI, Zero Trust und klare Rechte statt Daten in fremden Clouds.",
        "Local AI, zero trust and clear permissions instead of data in someone else's cloud.",
        "AI cục bộ, Zero Trust và phân quyền rõ ràng thay vì dữ liệu trên đám mây lạ."
      ),
    },
    {
      title: t("Zwei Kulturen", "Two cultures", "Hai nền văn hóa"),
      desc: t(
        "Deutsch, Englisch und Vietnamesisch — Brücken zwischen Menschen und Märkten.",
        "German, English and Vietnamese — bridges between people and markets.",
        "Tiếng Đức, Anh và Việt — cầu nối giữa con người và thị trường."
      ),
    },
  ];

  return (
    <section id="ueber-mich" className="section-parchment bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t("Über mich", "About me", "Về tôi")}
          </div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            {variant === "home"
              ? t("Hallo, ich bin Tiep.", "Hi, I'm Tiep.", "Xin chào, tôi là Tiệp.")
              : t("Wofür ich stehe", "What I stand for", "Điều tôi theo đuổi")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t(
              "Ich bin IT-Experte, KI-Enthusiast und Unternehmer aus Hamburg. Meine Mission ist es, Menschen und Unternehmen mit intelligenten, sicheren Lösungen in eine bessere digitale Zukunft zu begleiten.",
              "I'm an IT expert, AI enthusiast and entrepreneur based in Hamburg. My mission is to guide people and companies into a better digital future with intelligent, secure solutions.",
              "Tôi là chuyên gia IT, người đam mê AI và doanh nhân tại Hamburg. Sứ mệnh của tôi là đồng hành cùng con người và doanh nghiệp đến một tương lai số tốt đẹp hơn với các giải pháp thông minh, an toàn."
            )}
          </p>
          <Link
            to={variant === "home" ? "/ueber-mich" : "/kontakt"}
            className="mt-8 inline-flex min-h-12 items-center gap-2 text-base font-medium text-primary hover:underline underline-offset-4"
          >
            {variant === "home"
              ? t("Mehr über mich", "More about me", "Thêm về tôi")
              : t("Lass uns sprechen", "Let's talk", "Hãy trò chuyện")}{" "}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="flex flex-col gap-4">
          {values.map((v) => (
            <li key={v.title} className="rounded-3xl bg-card/80 p-6">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">{v.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
