/**
 * Blog-/Journal-Artikel (Stand 18.11.2026).
 * Inhalte recherchiert am 18.11.2026, Quellen stehen am Ende jedes Artikels.
 * Artikeltext auf Deutsch; Titel und Teaser zusätzlich EN/VI.
 * Neueste Artikel zuerst – Journal auf der Startseite zeigt die ersten 3.
 */

export type L = { de: string; en: string; vi: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "tip"; text: string };

export interface Article {
  slug: string;
  tag: string;
  date: string; // ISO
  readMin: number;
  title: L;
  excerpt: L;
  body: Block[];
  sources: { label: string; url: string }[];
}

export const ARTICLES: Article[] = [
  {
    slug: "microsoft-365-ausfall-november-2026",
    tag: "M365 · Ausfallsicherheit",
    date: "2026-11-18",
    readMin: 7,
    title: {
      de: "Fast 24 Stunden ohne Outlook: Was der Microsoft-365-Ausfall lehrt",
      en: "Almost 24 hours without Outlook: lessons from the Microsoft 365 outage",
      vi: "Gần 24 giờ không có Outlook: bài học từ sự cố Microsoft 365",
    },
    excerpt: {
      de: "Am 12. und 13. November standen Outlook, Exchange Online, Teams und Copilot weltweit still – ausgelöst durch einen Monate alten Fehler. Was passiert ist und wie Unternehmen sich gegen den nächsten Ausfall wappnen.",
      en: "On 12–13 November, Outlook, Exchange Online, Teams and Copilot went down worldwide – triggered by a months-old bug. What happened and how companies can prepare for the next outage.",
      vi: "Ngày 12–13/11, Outlook, Exchange Online, Teams và Copilot ngừng hoạt động toàn cầu do một lỗi tồn tại nhiều tháng. Chuyện gì đã xảy ra và doanh nghiệp nên chuẩn bị thế nào.",
    },
    body: [
      { type: "p", text: "Am Donnerstag, 12. November 2026, um 16:20 Uhr UTC begann einer der größten Microsoft-365-Ausfälle der letzten Jahre. Erst am Freitag um 16:10 Uhr UTC meldete Microsoft das Ende der Kundenbeeinträchtigung. Betroffen waren Outlook und Exchange Online, Teams und Copilot – E-Mails kamen nicht an oder stark verzögert." },
      { type: "h", text: "Was technisch passiert ist" },
      { type: "p", text: "Laut dem vorläufigen Post-Incident-Report von Microsoft kamen drei Dinge zusammen:" },
      { type: "ul", items: [
        "Ein Softwarefehler aus einem Update im Juli für die Netzwerk-Gateway-Server von Microsoft 365, der Server unter bestimmten Lastmustern überfordert.",
        "Rund 15 Stunden vorher war Teams automatisch auf die Netzwerk-Infrastruktur von Exchange Online umgeschwenkt – das erhöhte dort den Verkehr.",
        "Etwa 14 % der Gateway-Kapazität waren wegen eines anderen Problems ohnehin offline.",
      ] },
      { type: "p", text: "Der Fehler breitete sich in weniger als zwei Stunden über die Flotte aus; im Tiefpunkt reagierten über 80 % der Server nicht mehr. Neustarts halfen nicht, weil der aufgestaute Verkehr die Server sofort wieder überlastete. Teams, OneDrive und SharePoint konnten auf andere Infrastruktur ausweichen – Exchange Online nicht, deshalb dauerte die Erholung bei E-Mail am längsten. Microsoft betont, es gebe keine Hinweise auf einen Cyberangriff." },
      { type: "h", text: "Die eigentliche Lehre: Abhängigkeit ist ein Risiko" },
      { type: "p", text: "Microsoft hat Kapazität erhöht, das Monitoring verbessert und Schutzmechanismen ergänzt. Das ist richtig – ändert aber nichts daran, dass ein einziger Anbieter-Fehler für einen ganzen Arbeitstag E-Mail, Chat und KI-Assistenz lahmlegen kann. Für Kanzleien, Praxen oder Behörden ist das mehr als ärgerlich." },
      { type: "h", text: "Was Sie jetzt konkret tun können" },
      { type: "ul", items: [
        "Notfall-Kommunikation festlegen: einen zweiten, unabhängigen Kanal (z. B. Matrix/Element, Signal-Gruppe oder Telefonkette) vorab einrichten und testen.",
        "Kritische Postfächer absichern: Exchange-Online-Archiv plus regelmäßiges Backup außerhalb von Microsoft; Outlook-Cache-Modus auf den Clients aktiv lassen, damit vorhandene Mails lesbar bleiben.",
        "Service-Health überwachen: Benachrichtigungen aus dem Microsoft 365 Admin Center an eine Adresse außerhalb von M365 senden – sonst erfährt man vom Ausfall per Mail, die nicht ankommt.",
        "Notfallhandbuch auf Papier oder offline: Ansprechpartner, Telefonnummern, Workarounds.",
        "Hybride Strategie prüfen: Für besonders sensible oder kritische Bereiche einen souveränen Arbeitsplatz wie openDesk parallel betreiben.",
      ] },
      { type: "tip", text: "Praxis-Tipp: Microsoft veröffentlicht den finalen Post-Incident-Report im Admin Center (Tracking-IDs EX1550543 und MO1550821). Ein Blick hinein lohnt sich für jede IT-Abteilung – und als Anlass für einen kurzen Notfall-Test im eigenen Team." },
    ],
    sources: [
      { label: "BleepingComputer: Microsoft says months-old bug caused global Microsoft 365 outage", url: "https://www.bleepingcomputer.com/news/microsoft/microsoft-says-months-old-bug-caused-global-microsoft-365-outage/" },
      { label: "CNBC: Microsoft apologizes for massive outage", url: "https://www.cnbc.com/2026/11/12/microsoft-outage-outlook-aws-google.html" },
      { label: "Forbes: Microsoft Apologises For Outage And Reveals Cause", url: "https://www.forbes.com/sites/kateoflahertyuk/2026/11/13/microsoft-outage-what-happened-and-what-to-do-next/" },
    ],
  },
  {
    slug: "ki-agenten-sicherheit-prompt-injection",
    tag: "KI · Sicherheit",
    date: "2026-11-16",
    readMin: 8,
    title: {
      de: "KI-Agenten sicher betreiben: Prompt Injection und der BSI-Basisschutz",
      en: "Running AI agents securely: prompt injection and the BSI baseline",
      vi: "Vận hành AI agent an toàn: prompt injection và bộ bảo vệ cơ bản của BSI",
    },
    excerpt: {
      de: "Sobald KI-Agenten Mails lesen, Dokumente verarbeiten und Werkzeuge bedienen, werden versteckte Anweisungen zum Einfallstor. Was das BSI empfiehlt – und wie ich Agenten mit Freigabe baue.",
      en: "Once AI agents read mail, process documents and use tools, hidden instructions become an entry point. What the BSI recommends – and how I build agents with human approval.",
      vi: "Khi AI agent đọc email, xử lý tài liệu và dùng công cụ, các chỉ dẫn ẩn trở thành cửa ngõ tấn công. BSI khuyến nghị gì – và cách tôi xây agent có phê duyệt của con người.",
    },
    body: [
      { type: "p", text: "2026 ist das Jahr, in dem KI-Agenten aus der Demo in den Betrieb wandern: Sie lesen Postfächer, fassen Akten zusammen, legen Tickets an und rufen APIs auf. Damit wächst eine Angriffsfläche, die klassische Firewalls nicht sehen – Prompt Injection." },
      { type: "h", text: "Was Prompt Injection ist" },
      { type: "p", text: "Bei der indirekten Prompt Injection steckt die Anweisung nicht in der Frage des Nutzers, sondern im Inhalt, den die KI verarbeitet: in einer E-Mail, einem PDF, einer Webseite. Ein Beispiel aus dem AISI-Monatsbericht des BSI (08/2026): In den USA versteckte ein Kläger Anweisungen in weißer Schrift in Gerichtsdokumenten, um eine KI-gestützte Prüfung zu beeinflussen. Aufgeflogen ist es nur, weil jemand genau hinsah." },
      { type: "h", text: "Der BSI-Basisschutz" },
      { type: "p", text: "Für dokumentbasierte LLM-Chats hat das BSI im September 2026 einen Basisschutz veröffentlicht. Sinngemäß fünf Maßnahmen:" },
      { type: "ul", items: [
        "Eingaben bereinigen (z. B. versteckten Text, Steuerzeichen, unsichtbare Formatierung entfernen).",
        "Dokumentinhalte klar von Anweisungen trennen.",
        "Den System-Prompt härten.",
        "Ein gegenüber solchen Angriffen robustes Modell wählen und testen.",
        "Ausgaben filtern, bevor sie weiterverwendet werden.",
      ] },
      { type: "p", text: "Wichtig: Das BSI sagt selbst, dass indirekte Prompt Injection nicht abschließend lösbar ist. Die Maßnahmen senken das Risiko – sie beseitigen es nicht." },
      { type: "h", text: "Wie ich Agenten baue: Freigabe statt Blindflug" },
      { type: "ul", items: [
        "Least Privilege: Jeder Agent bekommt eine eigene Identität mit minimalen Rechten – keine geteilten Admin-Konten, kein Dauer-Token.",
        "Mensch in der Schleife: Kritische Aktionen (Mail senden, löschen, zahlen, Rechte ändern) werden vorgeschlagen, aber erst nach Freigabe ausgeführt.",
        "Lokale Modelle für sensible Daten: Was das Haus nicht verlassen darf, verarbeitet ein lokales Modell.",
        "Audit-Log: Jede Agenten-Aktion ist nachvollziehbar – wer, was, wann, auf welcher Grundlage.",
        "Nicht-menschliche Identitäten inventarisieren: Service-Konten und API-Schlüssel von Agenten regelmäßig prüfen und rotieren.",
      ] },
      { type: "tip", text: "Faustregel: Ein Agent darf alles lesen, was er braucht – aber nur das ausführen, was ein Mensch auch freigegeben hätte." },
    ],
    sources: [
      { label: "BSI – AISI Deutschland: Aktuelle KI-Sicherheitsthemen 08/2026", url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/AISI/Blogeintraege/AISI-News_2026-08.html" },
      { label: "BSI: KI-Sicherheitsstudie 2026 (PDF)", url: "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/KI/KI-Sicherheitsstudie-2026.pdf?__blob=publicationFile&v=5" },
      { label: "Computer Weekly: Prompt Injection untergräbt die Kontrolle über Sprachmodelle", url: "https://www.computerweekly.com/de/ratgeber/Prompt-Injection-untergraebt-die-Kontrolle-ueber-Sprachmodelle" },
    ],
  },
  {
    slug: "opendesk-nubus-souveraener-arbeitsplatz",
    tag: "openDesk · Nubus",
    date: "2026-11-12",
    readMin: 8,
    title: {
      de: "openDesk & Nubus: Der souveräne Arbeitsplatz in der Praxis",
      en: "openDesk & Nubus: the sovereign workplace in practice",
      vi: "openDesk & Nubus: môi trường làm việc tự chủ trong thực tế",
    },
    excerpt: {
      de: "Mail, Dateien, Office, Chat und Video – Open Source und in Deutschland betreibbar. Wie openDesk aufgebaut ist, warum Nubus das Herzstück ist und für wen sich der Umstieg lohnt.",
      en: "Mail, files, office, chat and video – open source and operable in Germany. How openDesk is built, why Nubus is at its heart and who should consider switching.",
      vi: "Email, tệp, văn phòng, chat và video – mã nguồn mở và vận hành được tại Đức. Cấu trúc openDesk, vì sao Nubus là trái tim và ai nên chuyển đổi.",
    },
    body: [
      { type: "p", text: "openDesk ist der souveräne Arbeitsplatz, den das Zentrum für Digitale Souveränität (ZenDiS) für die öffentliche Verwaltung entwickelt – und der zunehmend auch für Unternehmen interessant wird. Spätestens nach dem jüngsten Microsoft-365-Ausfall fragen viele: Gibt es eine echte Alternative, zumindest für sensible Bereiche?" },
      { type: "h", text: "Die Bausteine" },
      { type: "ul", items: [
        "Nextcloud – Dateien, Synchronisation und Freigaben",
        "Open-Xchange – E-Mail, Kalender, Kontakte",
        "Collabora Online – Bearbeiten von Office-Dokumenten im Browser",
        "Element/Matrix und Jitsi – Chat und Videokonferenz",
        "OpenProject und XWiki – Projekte und Wissen",
      ] },
      { type: "h", text: "Nubus: das Identitäts-Herzstück" },
      { type: "p", text: "Alles hängt an Nubus von Univention: Es verwaltet Benutzer und Gruppen (LDAP) und stellt mit Keycloak Single Sign-On per OpenID Connect und SAML bereit. Ein Login, eine zentrale Rechteverwaltung, MFA an einer Stelle. Genau hier entscheidet sich, ob ein souveräner Arbeitsplatz sicher ist – nicht beim Office-Programm." },
      { type: "h", text: "Was sich 2026 bewegt hat" },
      { type: "ul", items: [
        "ZenDiS hat sein Partnerprogramm für private Anbieter neu aufgestellt – openDesk wird damit auch über IT-Dienstleister erhältlich.",
        "Die Releases konzentrierten sich auf Interoperabilität und Hochverfügbarkeit.",
        "Eine agentenbasierte KI für die Suite wurde angekündigt; erste Proofs of Concept waren für die Smart Country Convention im Oktober 2026 geplant.",
      ] },
      { type: "h", text: "Für wen lohnt sich das?" },
      { type: "p", text: "Ein kompletter Wechsel ist selten der beste erste Schritt. Sinnvoller ist oft ein hybrides Modell: Microsoft 365 für die Breite, openDesk für Bereiche mit besonders sensiblen Daten – verbunden über eine saubere Identitätsföderation. So entsteht Souveränität dort, wo sie zählt, ohne den Betrieb auf den Kopf zu stellen." },
      { type: "tip", text: "Mein Vorgehen: erst Identität (Nubus/Keycloak, MFA, Rollen) sauber aufsetzen, dann einen Pilotbereich mit 5–10 Nutzern umstellen, dann ausbauen." },
    ],
    sources: [
      { label: "openDesk – FAQ", url: "https://www.opendesk.eu/en/faq" },
      { label: "Wikipedia: openDesk", url: "https://en.wikipedia.org/wiki/OpenDesk" },
      { label: "Wikipedia: ZenDiS", url: "https://en.wikipedia.org/wiki/ZenDiS" },
      { label: "Borncity: openDesk erreicht neue Stufe", url: "https://borncity.com/news/opendesk-deutsche-antwort-auf-microsoft-erreicht-neue-stufe/" },
    ],
  },
  {
    slug: "lokale-ki-auf-dem-smartphone",
    tag: "On-Device KI",
    date: "2026-11-06",
    readMin: 6,
    title: {
      de: "Lokale KI auf dem Smartphone: Was 2026 schon ohne Cloud geht",
      en: "Local AI on your smartphone: what works without the cloud in 2026",
      vi: "AI cục bộ trên điện thoại: năm 2026 làm được gì mà không cần đám mây",
    },
    excerpt: {
      de: "Apple, Google und Samsung bringen Sprachmodelle direkt aufs Gerät. Was das für Datenschutz bedeutet, welche Hardware nötig ist und wo die Grenzen liegen.",
      en: "Apple, Google and Samsung bring language models right onto the device. What that means for privacy, which hardware you need and where the limits are.",
      vi: "Apple, Google và Samsung đưa mô hình ngôn ngữ trực tiếp lên thiết bị. Điều đó có ý nghĩa gì với quyền riêng tư, cần phần cứng nào và giới hạn ở đâu.",
    },
    body: [
      { type: "p", text: "Noch vor zwei Jahren hieß „KI auf dem Handy“ fast immer: Daten in die Cloud schicken. 2026 laufen kleine, aber leistungsfähige Sprachmodelle direkt auf dem Gerät – offline, schnell und ohne dass Inhalte das Telefon verlassen." },
      { type: "h", text: "Der Stand bei den großen Plattformen" },
      { type: "ul", items: [
        "Apple: Das Foundation-Models-Framework gibt App-Entwicklern Zugriff auf ein lokales Modell mit rund 3 Milliarden Parametern; auf der WWDC 2026 kam die nächste Generation hinzu.",
        "Google/Android: Gemini Nano läuft über den Systemdienst AICore; mit Gemma 4 gibt es offene Modelle, die auch auf Smartphones lokal arbeiten.",
        "Samsung: Galaxy AI kombiniert je nach Funktion lokale Verarbeitung mit Googles Modellen.",
      ] },
      { type: "h", text: "Warum das für Unternehmen relevant ist" },
      { type: "p", text: "Lokale Modelle sind ideal für Aufgaben mit sensiblen Inhalten: Gesprächsnotizen zusammenfassen, Texte umformulieren, Fotos von Dokumenten auswerten. Für Senioren- oder Pflege-Anwendungen – wie bei TRACE Care geplant – bedeutet On-Device-KI: Hilfe auch ohne stabile Verbindung und ohne Datenabfluss." },
      { type: "h", text: "Die Grenzen" },
      { type: "ul", items: [
        "Hardware: Gute Ergebnisse brauchen aktuelle Geräte mit viel Arbeitsspeicher (12–16 GB) und NPU.",
        "Größe: Ein 3-Milliarden-Parameter-Modell ist kein Ersatz für große Cloud-Modelle bei komplexen Analysen.",
        "Verwaltung: Im Unternehmen müssen Geräte trotzdem über MDM (z. B. Intune) gesteuert werden – lokale KI ersetzt keine Geräte-Sicherheit.",
      ] },
      { type: "tip", text: "Mein Ansatz: hybrid. Einfache, sensible Aufgaben lokal auf dem Gerät; schwere Aufgaben über ein eigenes KI-Gateway an ein lokales Server-Modell – und nur bei Freigabe in die Cloud." },
    ],
    sources: [
      { label: "Perficient: Mobile AI 2026 – why on-device intelligence is the new standard", url: "https://blogs.perficient.com/2026/01/19/part-1-mobile-ai-2026-why-on-device-intelligence-is-the-new-standard/" },
      { label: "Apple Foundation Models in iOS 26", url: "https://appsops.store/news/apple-foundation-models-ios26-on-device-ai-features" },
      { label: "Google's Gemma 4 on your phone", url: "https://www.pulse.bot/ai/news/googles-gemma-4-puts-free-agentic-ai-on-your-phone-and-no-data-ever-leaves-the-device-b5d93f6f-f753-4c68-9ac5-ed957a606b07/" },
    ],
  },
  {
    slug: "webassembly-wasi-0-3",
    tag: "WebAssembly",
    date: "2026-10-30",
    readMin: 7,
    title: {
      de: "WebAssembly 2026: WASI 0.3, Async und KI direkt im Browser",
      en: "WebAssembly 2026: WASI 0.3, async and AI right in the browser",
      vi: "WebAssembly 2026: WASI 0.3, async và AI ngay trong trình duyệt",
    },
    excerpt: {
      de: "Mit WASI 0.3 bekommt WebAssembly natives Async – und wird damit auch auf dem Server ernst zu nehmen. Warum Wasm für sichere, portable KI-Bausteine spannend ist.",
      en: "With WASI 0.3, WebAssembly gets native async – making it a serious server-side option. Why Wasm is exciting for secure, portable AI components.",
      vi: "Với WASI 0.3, WebAssembly có async gốc – trở thành lựa chọn nghiêm túc phía máy chủ. Vì sao Wasm hấp dẫn cho các thành phần AI an toàn, di động.",
    },
    body: [
      { type: "p", text: "WebAssembly (Wasm) hat den Browser längst verlassen. Am 11. Juni 2026 wurde WASI 0.3 (Preview 3) verabschiedet – der wichtigste Schritt seit Jahren." },
      { type: "h", text: "Was WASI 0.3 bringt" },
      { type: "ul", items: [
        "Natives Async im Component Model: stream<T>, future<T> und async-Funktionen ersetzen das bisherige wasi:io-Paket.",
        "Laufzeit-Unterstützung: Wasmtime 46 (Juni 2026) unterstützt WASI 0.3 standardmäßig.",
        "Noch offen: Das Component Model hat noch keine Version 1.0, ein Termin für WASI 1.0 steht nicht fest.",
      ] },
      { type: "h", text: "Warum das für KI und Sicherheit spannend ist" },
      { type: "p", text: "Wasm-Module laufen in einer Sandbox ohne Zugriff auf Dateien, Netz oder Umgebungsvariablen – außer man erlaubt es ausdrücklich. Genau das braucht man für KI-Agenten: Werkzeuge, die der Agent aufrufen darf, aber die nichts tun können, was nicht freigegeben ist. In meinem eigenen AI-OS teste ich solche Wasm-Werkzeuge für Agenten." },
      { type: "p", text: "Im Browser ermöglichen WebAssembly und WebGPU, kleine Sprachmodelle komplett lokal auszuführen – ohne Server, ohne Datenübertragung. Mein Projekt DokuCheck nutzt genau das: Dokumente prüfen, ohne dass sie den Rechner verlassen." },
      { type: "h", text: "Wann Wasm sich lohnt" },
      { type: "ul", items: [
        "Plugins und Erweiterungen, die isoliert laufen sollen",
        "Edge-Funktionen mit sehr kurzen Startzeiten",
        "KI im Browser für datenschutzkritische Anwendungen",
        "Portable Werkzeuge, die auf Server, Edge und Client gleich laufen",
      ] },
      { type: "tip", text: "Mein Rat: Für neue Projekte auf das Component Model setzen, aber Versionen festschreiben – der Standard bewegt sich noch." },
    ],
    sources: [
      { label: "wasi.dev: WASI P3", url: "https://wasi.dev/releases/wasi-p3" },
      { label: "The New Stack: WASI 1.0 – WebAssembly everywhere in 2026", url: "https://thenewstack.io/wasi-1-0-you-wont-know-when-webassembly-is-everywhere-in-2026/" },
      { label: "WASI 0.3 native async (Zusammenfassung)", url: "https://www.youngju.dev/transcribe/2026-07-16-wasi-0-3-native-async.en" },
    ],
  },
  {
    slug: "kali-linux-2026-3",
    tag: "Security · Kali Linux",
    date: "2026-10-28",
    readMin: 6,
    title: {
      de: "Kali Linux 2026.3: Neue Werkzeuge – und wie man sie verantwortungsvoll nutzt",
      en: "Kali Linux 2026.3: new tools – and how to use them responsibly",
      vi: "Kali Linux 2026.3: công cụ mới – và cách sử dụng có trách nhiệm",
    },
    excerpt: {
      de: "Kernel 7.1, KDE Plasma 6.7, sechs neue Tools und überarbeitete Build-Skripte. Was neu ist und warum Penetrationstests nur mit klarer Freigabe stattfinden.",
      en: "Kernel 7.1, KDE Plasma 6.7, six new tools and reworked build scripts. What's new and why penetration tests only happen with clear authorisation.",
      vi: "Kernel 7.1, KDE Plasma 6.7, sáu công cụ mới và script build được làm lại. Có gì mới và vì sao kiểm thử xâm nhập chỉ diễn ra khi có ủy quyền rõ ràng.",
    },
    body: [
      { type: "p", text: "Am 26. Oktober 2026 ist Kali Linux 2026.3 erschienen, die dritte Ausgabe des Jahres. Kali ist die Standard-Distribution für Penetrationstests und Sicherheitsanalysen – und ein gutes Werkzeug, um die eigene Infrastruktur mit den Augen eines Angreifers zu sehen." },
      { type: "h", text: "Was neu ist" },
      { type: "ul", items: [
        "Linux-Kernel 7.1.5 und KDE Plasma 6.7",
        "Sechs neue Tools: dalfox (XSS-Scanner), katana (Crawler), qsreplace (URL-Parameter), rustscan (schneller Port-Scanner), sdrangel (Software Defined Radio) und snaffler-ng (findet Zugangsdaten und sensible Dateien auf SMB-Freigaben)",
        "Überarbeitete Build-Skripte, Bau auch im Container mit Docker oder Podman",
        "126 Paket-Updates und Neuerungen für Kali NetHunter",
      ] },
      { type: "p", text: "Zur Einordnung: Kali 2026.1 brachte im März unter anderem einen BackTrack-Modus zum 20. Geburtstag des Vorgängers, 2026.2 GNOME 50 und ein neues APT-Quellformat." },
      { type: "h", text: "Warum snaffler-ng für Admins interessant ist" },
      { type: "p", text: "Tools wie snaffler-ng zeigen, was in vielen Netzwerken schlummert: Passwörter in Skripten, Konfigurationsdateien mit Zugangsdaten, offen freigegebene Ordner. Genau das findet ein Angreifer nach dem ersten Einbruch zuerst. Wer es selbst zuerst findet, kann es beheben." },
      { type: "h", text: "Wichtig: nur mit Freigabe" },
      { type: "ul", items: [
        "Penetrationstests nur mit schriftlicher Beauftragung und klar abgegrenztem Umfang – alles andere ist strafbar.",
        "Testumgebung bevorzugen: Erst im Lab (z. B. eigene VLANs, Proxmox) üben, dann in Absprache produktiv.",
        "Ergebnisse vertraulich behandeln und priorisiert beheben – ein Bericht ohne Maßnahmen bringt nichts.",
      ] },
      { type: "tip", text: "Empfehlung: Active Directory, Dateifreigaben und Webdienste regelmäßig selbst prüfen – im Lab oder mit beauftragtem Test –, bevor es jemand anderes tut." },
    ],
    sources: [
      { label: "Kali Linux Blog: Kali Linux 2026.3 Release", url: "https://www.kali.org/blog/kali-linux-2026-3-release/" },
      { label: "9to5Linux: Kali Linux 2026.3 released", url: "https://9to5linux.com/kali-linux-2026-3-released-with-linux-7-1-kde-plasma-6-7-and-new-tools" },
      { label: "BleepingComputer: Kali Linux 2026.1 released", url: "https://www.bleepingcomputer.com/news/linux/kali-linux-20261-released-with-8-new-tools-new-backtrack-mode/" },
    ],
  },
  {
    slug: "it-freelancer-markt-2026-deutschland-hamburg",
    tag: "Freelancing · Markt",
    date: "2026-10-20",
    readMin: 6,
    title: {
      de: "IT-Freelancer-Markt 2026: Deutschland und Hamburg im Überblick",
      en: "The IT freelance market in 2026: Germany and Hamburg at a glance",
      vi: "Thị trường IT freelancer 2026: tổng quan Đức và Hamburg",
    },
    excerpt: {
      de: "Stundensätze stabil, Auftragslage schwieriger, KI-Projekte stark gefragt. Was die großen Studien 2026 zeigen – und was das für Kunden und Freelancer in Hamburg bedeutet.",
      en: "Rates stable, demand tougher, AI projects in high demand. What the major 2026 studies show – and what it means for clients and freelancers in Hamburg.",
      vi: "Giá theo giờ ổn định, đơn hàng khó hơn, dự án AI được săn đón. Các nghiên cứu lớn năm 2026 cho thấy gì – và ý nghĩa với khách hàng và freelancer tại Hamburg.",
    },
    body: [
      { type: "p", text: "Der IT-Projektmarkt in Deutschland ist 2026 zweigeteilt: Die Stundensätze halten sich, aber viele Freelancer spüren eine schwächere Auftragslage. Gleichzeitig wachsen die Ausschreibungen für KI-Themen deutlich." },
      { type: "h", text: "Die Zahlen" },
      { type: "ul", items: [
        "Freelancer-Kompass 2026 (freelancermap, über 5.400 Befragte im DACH-Raum): Median-Stundensatz in der IT 95 €, Durchschnitt 97 €. SAP- und ERP-Spezialisten liegen mit 120 € (Median) vorn.",
        "freelance.de-Studie 2026: durchschnittlich rund 102 € pro Stunde in der IT.",
        "56 % der IT-Freelancer bewerten die Auftragslage schlechter als im Vorjahr; nur ein Viertel hat in den letzten zwölf Monaten den Satz erhöht.",
        "Laut Bitkom fehlen der deutschen Wirtschaft trotzdem rund 109.000 IT-Fachkräfte.",
        "KI wächst: Ausschreibungen für AI Engineers stiegen zwischen 2024 und 2025 von knapp 60 auf rund 200.",
      ] },
      { type: "h", text: "Und Hamburg?" },
      { type: "p", text: "Belastbare, aktuelle Zahlen nur für Hamburg gibt es kaum – die großen Studien werten bundesweit aus. Auf Plattformen liegt Hamburg bei IT-Ausschreibungen regelmäßig hinter Frankfurt und München, aber unter den Top-Standorten. Typisch für Hamburg sind Projekte in Logistik und Hafen, Medien, Handel, Gesundheitswesen und öffentlicher Verwaltung – also Branchen mit viel Infrastruktur und oft sensiblen Daten." },
      { type: "h", text: "Was das für Unternehmen bedeutet" },
      { type: "ul", items: [
        "Spezialisierung zählt: Gefragt sind Kombinationen – etwa Identity & Security plus KI, oder Cloud plus Betrieb – nicht Generalisten.",
        "Ausschreibung ist nicht Auftrag: Viele KI-Projekte starten als Pilot. Gute Freelancer helfen, den Pilot so zu schneiden, dass er messbaren Nutzen bringt.",
        "Regionalität hat Wert: Für Vor-Ort-Einsätze, Workshops und Go-Lives ist ein Ansprechpartner in Hamburg oft schneller und günstiger als Remote aus der Ferne.",
      ] },
      { type: "tip", text: "Meine Positionierung: IT-Betrieb und souveräne KI aus einer Hand – mit über 10 Jahren Praxis in Kliniken, Justiz, Energieversorgung und Kanzleien." },
    ],
    sources: [
      { label: "freelancermap: IT-Freelancer Stundensatz 2026", url: "https://www.freelancermap.de/blog/stundensatz-it-freelancer/" },
      { label: "freelancermap: Pressemitteilung Freelancer-Kompass 2026 (PDF)", url: "https://www.freelancermap.de/media/press_release/2026-07-23-IT-Freelancer.pdf" },
      { label: "freelance.de: Projektmarkt schwächelt, Stundensätze bleiben stabil", url: "https://www.mynewsdesk.com/de/freelance-punkt-de/pressreleases/projektmarkt-fuer-freelancer-schwaechelt-stundensaetze-bleiben-stabil-3438001" },
      { label: "it-daily: Spezialisierung zahlt sich aus", url: "https://www.it-daily.net/it-management/projekt-personal/sap-erp-spezialist-it-stundensaetze" },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatDate(iso: string, lang: "DE" | "EN" | "VI") {
  const d = new Date(iso + "T12:00:00Z");
  const loc = lang === "EN" ? "en-GB" : lang === "VI" ? "vi-VN" : "de-DE";
  return d.toLocaleDateString(loc, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
