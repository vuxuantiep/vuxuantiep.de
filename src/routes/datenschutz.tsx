import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/contexts/LangContext";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/datenschutz")({
  head: ({ match }) => seoHead({
    path: "/datenschutz",
    search: match.search,
    noindex: true,
    title: {
      de: "Datenschutzerklärung — vuxuantiep.de",
      en: "Privacy Policy — vuxuantiep.de",
      vi: "Chính sách bảo mật — vuxuantiep.de",
    },
    description: {
      de: "Datenschutzerklärung von vuxuantiep.de gemäß DSGVO.",
      en: "Privacy policy of vuxuantiep.de in accordance with the GDPR.",
      vi: "Chính sách bảo mật của vuxuantiep.de theo GDPR.",
    },
  }),
  component: Datenschutz,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}

function Datenschutz() {
  const { t } = useLang();

  return (
    <div className="min-h-screen">
      <Nav />
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-20">
        <div className="text-xs uppercase tracking-widest text-primary">{t("Rechtliches", "Legal", "Pháp lý")}</div>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-tight">
          {t("Datenschutzerklärung", "Privacy Policy", "Chính sách quyền riêng tư")}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">{t("Stand: November 2026", "Last updated: November 2026", "Cập nhật: tháng 11/2026")}</p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground">
          <Section title={t("1. Verantwortlicher", "1. Controller", "1. Bên chịu trách nhiệm")}>
            <p>
              {t(
                "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
                "The controller within the meaning of the General Data Protection Regulation (GDPR) is:",
                "Bên chịu trách nhiệm theo Quy định bảo vệ dữ liệu chung (GDPR) là:"
              )}
            </p>
            <p className="text-foreground">
              Vu Xuan Tiep
              <br />
              Stresemannallee 15, 22529 Hamburg, {t("Deutschland", "Germany", "Đức")}
              <br />
              {t("Telefon", "Phone", "Điện thoại")}: <a href="tel:+491781868683" className="hover:text-primary transition-colors">+49 178 1868683</a>
              <br />
              E-Mail: <a href="mailto:tiep@vuxuantiep.de" className="hover:text-primary transition-colors">tiep@vuxuantiep.de</a>{" "}
              {t("oder", "or", "hoặc")} <a href="mailto:vuxuantiep@gmail.com" className="hover:text-primary transition-colors">vuxuantiep@gmail.com</a>
            </p>
          </Section>

          <Section title={t("2. Überblick und Grundsätze", "2. Overview and principles", "2. Tổng quan và nguyên tắc")}>
            <p>
              {t(
                "Dies ist eine persönliche Portfolio-Website. Der Schutz deiner Daten ist mir wichtig: Diese Website setzt keine Tracking-Cookies ein, nutzt keine Analyse-, Statistik- oder Werbedienste und erstellt keine Nutzerprofile. Personenbezogene Daten werden nur verarbeitet, soweit dies für den Betrieb der Website technisch erforderlich ist oder du sie mir selbst mitteilst (z. B. per E-Mail).",
                "This is a personal portfolio website. Protecting your data matters to me: this website sets no tracking cookies, uses no analytics, statistics or advertising services, and builds no user profiles. Personal data is only processed where technically necessary to operate the site or where you provide it yourself (e.g. by email).",
                "Đây là website portfolio cá nhân. Việc bảo vệ dữ liệu của bạn rất quan trọng với tôi: website này không đặt cookie theo dõi, không dùng dịch vụ phân tích, thống kê hay quảng cáo và không lập hồ sơ người dùng. Dữ liệu cá nhân chỉ được xử lý khi cần thiết về mặt kỹ thuật để vận hành trang hoặc khi bạn tự cung cấp (ví dụ qua email)."
              )}
            </p>
          </Section>

          <Section title={t("3. Hosting und Server-Logfiles", "3. Hosting and server log files", "3. Hosting và nhật ký máy chủ")}>
            <p>
              {t(
                "Diese Website wird bei Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA gehostet (Cloudflare Workers). Beim Aufruf der Website verarbeitet Cloudflare technisch notwendige Verbindungsdaten (insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene URL, User-Agent), um die Seite auszuliefern und die Sicherheit und Stabilität des Dienstes zu gewährleisten (z. B. Abwehr von Angriffen).",
                "This website is hosted with Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA (Cloudflare Workers). When you visit the site, Cloudflare processes technically necessary connection data (in particular IP address, date and time of access, requested URL, user agent) to deliver the site and to ensure the security and stability of the service (e.g. mitigating attacks).",
                "Website này được lưu trữ tại Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA (Cloudflare Workers). Khi bạn truy cập, Cloudflare xử lý dữ liệu kết nối cần thiết về kỹ thuật (đặc biệt là địa chỉ IP, ngày giờ truy cập, URL được yêu cầu, user agent) để phân phối trang và đảm bảo an ninh, ổn định của dịch vụ."
              )}
            </p>
            <p>
              {t(
                "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren und effizienten Bereitstellung der Website). Mit Cloudflare besteht ein Auftragsverarbeitungsvertrag; die Übermittlung in die USA stützt sich auf das EU-US Data Privacy Framework sowie Standardvertragsklauseln. Weitere Informationen: https://www.cloudflare.com/privacypolicy/",
                "The legal basis is Art. 6(1)(f) GDPR (legitimate interest in the secure and efficient provision of the website). A data processing agreement is in place with Cloudflare; transfers to the USA are based on the EU-US Data Privacy Framework and standard contractual clauses. More information: https://www.cloudflare.com/privacypolicy/",
                "Cơ sở pháp lý là Điều 6(1)(f) GDPR (lợi ích chính đáng trong việc cung cấp website an toàn, hiệu quả). Đã có hợp đồng xử lý dữ liệu với Cloudflare; việc chuyển dữ liệu sang Mỹ dựa trên EU-US Data Privacy Framework và các điều khoản hợp đồng chuẩn. Thông tin thêm: https://www.cloudflare.com/privacypolicy/"
              )}
            </p>
          </Section>

          <Section title={t("4. Cookies und lokale Speicherung", "4. Cookies and local storage", "4. Cookie và lưu trữ cục bộ")}>
            <p>
              {t(
                "Diese Website verwendet keine Cookies zu Tracking-, Analyse- oder Werbezwecken. Es wird lediglich technisch notwendige Speicherung im Browser (Local Storage) genutzt, etwa um deine Bestätigung des Datenschutzhinweises zu merken. Diese Daten verbleiben in deinem Browser, werden nicht an Dritte übertragen und können jederzeit über die Browser-Einstellungen gelöscht werden.",
                "This website does not use cookies for tracking, analytics or advertising. Only technically necessary browser storage (local storage) is used, for example to remember that you acknowledged the privacy notice. This data stays in your browser, is not transmitted to third parties and can be deleted at any time via your browser settings.",
                "Website này không dùng cookie cho mục đích theo dõi, phân tích hay quảng cáo. Chỉ sử dụng lưu trữ trình duyệt cần thiết về kỹ thuật (local storage), ví dụ để ghi nhớ việc bạn đã xác nhận thông báo quyền riêng tư. Dữ liệu này nằm trong trình duyệt của bạn, không được truyền cho bên thứ ba và có thể xóa bất cứ lúc nào trong cài đặt trình duyệt."
              )}
            </p>
            <p>
              {t(
                "Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG (unbedingt erforderliche Speicherung) sowie Art. 6 Abs. 1 lit. f DSGVO. Eine Einwilligung ist hierfür nicht erforderlich.",
                "Legal basis: § 25(2) no. 2 TDDDG (strictly necessary storage) and Art. 6(1)(f) GDPR. Consent is not required for this.",
                "Cơ sở pháp lý: § 25(2) số 2 TDDDG (lưu trữ thực sự cần thiết) và Điều 6(1)(f) GDPR. Không cần sự đồng ý cho việc này."
              )}
            </p>
          </Section>

          <Section title={t("5. Schriftarten", "5. Fonts", "5. Phông chữ")}>
            <p>
              {t(
                "Alle Schriftarten (Space Grotesk, Inter, JetBrains Mono) werden lokal von diesem Server ausgeliefert. Beim Seitenaufruf wird keine Verbindung zu Google Fonts oder anderen externen Schriftdiensten aufgebaut.",
                "All fonts (Space Grotesk, Inter, JetBrains Mono) are served locally from this server. No connection to Google Fonts or other external font services is established when you visit the site.",
                "Tất cả phông chữ (Space Grotesk, Inter, JetBrains Mono) được phân phối cục bộ từ máy chủ này. Khi truy cập trang, không có kết nối nào tới Google Fonts hay dịch vụ phông chữ bên ngoài khác."
              )}
            </p>
          </Section>

          <Section title={t("6. Tech-Schlagzeilen auf der Startseite", "6. Tech headlines on the homepage", "6. Tin công nghệ trên trang chủ")}>
            <p>
              {t(
                "Auf der Startseite werden aktuelle Tech-Schlagzeilen angezeigt (Quellen: Hacker News über die Algolia-API, TechCrunch, The Verge). Diese Schlagzeilen ruft der Server dieser Website selbst ab; dein Browser stellt dabei keine Verbindung zu diesen Anbietern her, und es werden weder deine IP-Adresse noch andere personenbezogene Daten an sie übermittelt. Erst wenn du auf eine Schlagzeile klickst, öffnest du die Website des jeweiligen Anbieters; dort gilt dessen Datenschutzerklärung.",
                "The homepage shows current tech headlines (sources: Hacker News via the Algolia API, TechCrunch, The Verge). These headlines are fetched by this website's own server; your browser does not connect to these providers, and neither your IP address nor any other personal data is transmitted to them. Only when you click a headline do you open the provider's website, where its own privacy policy applies.",
                "Trang chủ hiển thị các tin công nghệ mới (nguồn: Hacker News qua API Algolia, TechCrunch, The Verge). Các tin này do máy chủ của website tự tải về; trình duyệt của bạn không kết nối tới các nhà cung cấp đó, và địa chỉ IP cũng như dữ liệu cá nhân khác của bạn không được truyền cho họ. Chỉ khi bạn nhấp vào một tin, bạn mới mở trang của nhà cung cấp đó; khi ấy áp dụng chính sách quyền riêng tư của họ."
              )}
            </p>
          </Section>

          <Section title={t("7. Kontaktaufnahme", "7. Contact", "7. Liên hệ")}>
            <p>
              {t(
                "Wenn du mich per E-Mail, Telefon oder über das Kontaktformular kontaktierst, werden die von dir mitgeteilten Daten (Name, Kontaktdaten, Inhalt der Anfrage) ausschließlich zur Bearbeitung deiner Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung oder Durchführung eines Vertrags) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Nachrichten über das Kontaktformular werden über den E-Mail-Server der IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (Deutschland) zugestellt; mit IONOS besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO). Du erhältst automatisch eine Eingangsbestätigung an die angegebene E-Mail-Adresse.",
                "If you contact me by email, phone or via the contact form, the data you provide (name, contact details, content of your enquiry) is processed solely to handle your enquiry. The legal basis is Art. 6(1)(b) GDPR (initiation or performance of a contract) or Art. 6(1)(f) GDPR (legitimate interest in answering enquiries). The data is deleted once it is no longer needed to handle your enquiry and no statutory retention obligations apply. Messages sent via the contact form are delivered through the mail server of IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (Germany); a data processing agreement pursuant to Art. 28 GDPR is in place with IONOS. You automatically receive a confirmation of receipt at the email address you provided.",
                "Nếu bạn liên hệ với tôi qua email, điện thoại hoặc biểu mẫu liên hệ, dữ liệu bạn cung cấp (tên, thông tin liên hệ, nội dung yêu cầu) chỉ được xử lý để giải quyết yêu cầu của bạn. Cơ sở pháp lý là Điều 6(1)(b) GDPR hoặc Điều 6(1)(f) GDPR. Dữ liệu sẽ bị xóa khi không còn cần thiết và không có nghĩa vụ lưu trữ theo luật. Tin nhắn qua biểu mẫu liên hệ được gửi qua máy chủ email của IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (Đức); đã có hợp đồng xử lý dữ liệu theo Điều 28 GDPR với IONOS. Bạn sẽ tự động nhận được email xác nhận tới địa chỉ đã cung cấp."
              )}
            </p>
          </Section>

          <Section title={t("8. SSL/TLS-Verschlüsselung", "8. SSL/TLS encryption", "8. Mã hóa SSL/TLS")}>
            <p>
              {t(
                "Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung (erkennbar an „https://“ in der Adresszeile).",
                "For security reasons and to protect the transmission of confidential content, this website uses SSL/TLS encryption (recognisable by \"https://\" in the address bar).",
                "Vì lý do bảo mật và để bảo vệ việc truyền nội dung bí mật, website này sử dụng mã hóa SSL/TLS (nhận biết qua \"https://\" trên thanh địa chỉ)."
              )}
            </p>
          </Section>

          <Section title={t("9. Deine Rechte", "9. Your rights", "9. Quyền của bạn")}>
            <p>
              {t(
                "Du hast nach der DSGVO folgende Rechte hinsichtlich deiner personenbezogenen Daten: Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21). Zur Ausübung genügt eine formlose Nachricht an die oben genannten Kontaktdaten.",
                "Under the GDPR you have the following rights regarding your personal data: right of access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection to processing based on Art. 6(1)(f) GDPR (Art. 21). To exercise these rights, an informal message to the contact details above is sufficient.",
                "Theo GDPR, bạn có các quyền sau đối với dữ liệu cá nhân của mình: quyền truy cập (Điều 15), chỉnh sửa (Điều 16), xóa (Điều 17), hạn chế xử lý (Điều 18), di chuyển dữ liệu (Điều 20) và phản đối việc xử lý dựa trên Điều 6(1)(f) GDPR (Điều 21). Chỉ cần gửi tin nhắn tới thông tin liên hệ ở trên."
              )}
            </p>
            <p>
              {t(
                "Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig für Hamburg: Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (HmbBfDI), Ludwig-Erhard-Straße 22, 20459 Hamburg, https://datenschutz-hamburg.de",
                "You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). Competent for Hamburg: The Hamburg Commissioner for Data Protection and Freedom of Information (HmbBfDI), Ludwig-Erhard-Straße 22, 20459 Hamburg, https://datenschutz-hamburg.de",
                "Bạn cũng có quyền khiếu nại với cơ quan giám sát bảo vệ dữ liệu (Điều 77 GDPR). Cơ quan có thẩm quyền tại Hamburg: HmbBfDI, Ludwig-Erhard-Straße 22, 20459 Hamburg, https://datenschutz-hamburg.de"
              )}
            </p>
          </Section>

          <Section title={t("10. Aktualität dieser Erklärung", "10. Currency of this policy", "10. Cập nhật chính sách")}>
            <p>
              {t(
                "Diese Datenschutzerklärung wird bei Änderungen der Website oder der Rechtslage angepasst. Es gilt jeweils die hier veröffentlichte aktuelle Fassung.",
                "This privacy policy is updated when the website or the legal situation changes. The current version published here applies.",
                "Chính sách này được cập nhật khi website hoặc quy định pháp luật thay đổi. Phiên bản mới nhất được công bố tại đây có hiệu lực."
              )}
            </p>
          </Section>
        </div>
      </section>
      <Footer />
    </div>
  );
}
