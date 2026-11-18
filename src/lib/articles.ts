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
    slug: "zero-trust-modell-praxis",
    tag: "Zero Trust",
    date: "2026-11-18",
    readMin: 9,
    title: {
      de: "Zero Trust in der Praxis: „Niemals vertrauen, immer prüfen“ – ohne Großprojekt",
      en: "Zero Trust in practice: “never trust, always verify” – without a mega-project",
      vi: "Zero Trust trong thực tế: “không bao giờ tin, luôn kiểm tra” – không cần dự án khổng lồ",
    },
    excerpt: {
      de: "Das Firmennetz ist kein sicherer Ort mehr. Was Zero Trust nach NIST und BSI bedeutet, aus welchen Bausteinen es besteht und wie man es mit Microsoft- oder Open-Source-Werkzeugen Schritt für Schritt einführt.",
      en: "The corporate network is no longer a safe place. What Zero Trust means according to NIST and the BSI, its building blocks and how to introduce it step by step with Microsoft or open-source tools.",
      vi: "Mạng nội bộ không còn là nơi an toàn. Zero Trust theo NIST và BSI nghĩa là gì, gồm những thành phần nào và cách triển khai từng bước với công cụ Microsoft hoặc mã nguồn mở.",
    },
    body: [
      { type: "p", text: "Früher galt: Wer im Firmennetz ist, ist vertrauenswürdig. Homeoffice, Cloud-Dienste, Partnerzugänge und KI-Agenten haben diese Grenze aufgelöst. Zero Trust dreht das Prinzip um: Jeder Zugriff wird geprüft – egal, woher er kommt." },
      { type: "h", text: "Die Grundlagen" },
      { type: "p", text: "Der Referenzrahmen ist NIST SP 800-207 (2020). Er beschreibt eine Architektur, in der eine Policy Engine über jeden Zugriff entscheidet und ein Durchsetzungspunkt (Policy Enforcement Point) die Entscheidung umsetzt. Das BSI hat 2023 ein eigenes Positionspapier veröffentlicht, das Identitäten, Geräte und Netz gemeinsam betrachtet." },
      { type: "ul", items: [
        "Explizit prüfen: Identität, Gerätezustand, Ort und Risiko bei jedem Zugriff bewerten.",
        "Minimale Rechte: nur so viel Zugriff wie nötig, nur so lange wie nötig.",
        "Von einem Einbruch ausgehen: Netze segmentieren, alles protokollieren, Schaden begrenzen.",
      ] },
      { type: "h", text: "Die fünf Bausteine" },
      { type: "ul", items: [
        "Identität: zentrale Anmeldung mit MFA oder Passkeys – Entra ID oder Keycloak.",
        "Geräte: nur verwaltete, aktuelle Geräte bekommen Zugriff – Intune bzw. ein MDM.",
        "Netz: Segmentierung mit VLANs und Firewall, Zugriff auf interne Dienste über VPN (WireGuard) oder einen Identity-Aware-Proxy statt offener Ports.",
        "Anwendungen und Daten: Zugriff pro Anwendung, Verschlüsselung, Klassifizierung sensibler Daten.",
        "Sichtbarkeit: zentrale Protokolle und Alarme in einem SIEM.",
      ] },
      { type: "h", text: "Mit Microsoft oder Open Source" },
      { type: "ul", items: [
        "Microsoft: Entra ID mit Conditional Access, Intune für Geräte, Defender und Sentinel für Erkennung – stark integriert, aber lizenzintensiv.",
        "Open Source: Keycloak/Nubus für Identität, OPNsense und WireGuard fürs Netz, Teleport oder ein Reverse-Proxy mit SSO für Admin-Zugänge, Wazuh als SIEM.",
        "Hybrid: Entra bleibt für M365 zuständig, Keycloak für eigene Anwendungen – beide mit denselben MFA- und Rollenregeln.",
      ] },
      { type: "h", text: "Fahrplan in sechs Schritten" },
      { type: "ul", items: [
        "1. MFA für alle Konten – zuerst für Administratoren.",
        "2. Admin-Konten trennen und nur bei Bedarf freischalten (PIM).",
        "3. Conditional Access bzw. Zugriffsregeln: verwaltetes Gerät plus MFA als Standard.",
        "4. Netz segmentieren: Verwaltung, Server, Clients und Gäste in eigene VLANs.",
        "5. Offene Ports schließen, Zugriff nur über VPN oder Proxy mit Anmeldung.",
        "6. Protokolle zentral sammeln und Alarme definieren.",
      ] },
      { type: "tip", text: "Zero Trust ist kein Produkt, das man kauft, sondern ein Prinzip, das man einführt. Wer mit Identität und MFA beginnt, hat den größten Teil des Risikos bereits reduziert." },
    ],
    sources: [
      { label: "BSI: Zero-Trust-Positionspapier veröffentlicht (NKCS)", url: "https://nkcs.bund.de/en/news/bsi-zero-trust-position-paper-published" },
      { label: "NIST SP 800-207 Zero Trust Architecture (DIN-Eintrag)", url: "https://din.de/en/innovation-and-research/hydrogen/standards-search/nist-special-publication-800-207-1189178" },
      { label: "Computerwoche: Mit Zero Trust starten", url: "https://www.computerwoche.de/article/2806679/mit-zero-trust-starten.html" },
    ],
  },
  {
    slug: "iam-iga-pim-erklaert",
    tag: "IAM · IGA · PIM",
    date: "2026-11-18",
    readMin: 10,
    title: {
      de: "IAM, IGA und PIM einfach erklärt – und wie man sie souverän umsetzt",
      en: "IAM, IGA and PIM explained simply – and how to implement them sovereignly",
      vi: "IAM, IGA và PIM giải thích đơn giản – và cách triển khai tự chủ",
    },
    excerpt: {
      de: "Wer darf sich anmelden, wer darf was – und wer darf Admin sein? Die drei Disziplinen der Identitätssicherheit, ihre Werkzeuge bei Microsoft und im Open-Source-Lager und warum NIS2 sie zur Pflicht macht.",
      en: "Who can sign in, who can do what – and who can be admin? The three disciplines of identity security, their tools from Microsoft and the open-source world, and why NIS2 makes them mandatory.",
      vi: "Ai được đăng nhập, ai được làm gì – và ai được làm quản trị? Ba lĩnh vực của bảo mật danh tính, công cụ của Microsoft và mã nguồn mở, và vì sao NIS2 biến chúng thành nghĩa vụ.",
    },
    body: [
      { type: "p", text: "Die meisten Angriffe beginnen heute nicht mit einer Sicherheitslücke, sondern mit einem gestohlenen oder zu mächtigen Konto. Deshalb ist Identität der neue Perimeter – und drei Begriffe tauchen dabei immer wieder auf." },
      { type: "h", text: "IAM – Identity & Access Management" },
      { type: "p", text: "Die Grundlage: Benutzer anlegen, anmelden und Zugriff steuern. Dazu gehören Verzeichnis, Single Sign-On, MFA und Rollen." },
      { type: "ul", items: [
        "Microsoft: Entra ID (früher Azure AD), on-premises Active Directory.",
        "Open Source: Keycloak für Anmeldung und SSO, Nubus (Univention) als Verzeichnis und Verwaltung – das Fundament von openDesk.",
      ] },
      { type: "h", text: "IGA – Identity Governance & Administration" },
      { type: "p", text: "IGA beantwortet die Frage: Hat jemand noch die richtigen Rechte? Es geht um den Lebenszyklus – Eintritt, Wechsel, Austritt (Joiner-Mover-Leaver) – und um regelmäßige Überprüfung." },
      { type: "ul", items: [
        "Automatisches Anlegen und Entziehen von Konten aus der Personalquelle.",
        "Rollenmodelle (RBAC) statt Einzelrechte.",
        "Rezertifizierung: Führungskräfte bestätigen regelmäßig, wer was darf.",
        "Funktionstrennung (Segregation of Duties): z. B. darf niemand Rechnungen anlegen und gleichzeitig freigeben.",
        "Microsoft: Entra ID Governance (Zugriffspakete, Access Reviews, Lifecycle Workflows).",
        "Open Source: midPoint von Evolveum – eine ausgewachsene IGA-Plattform mit Rollen, Workflows und Rezertifizierung.",
      ] },
      { type: "h", text: "PIM / PAM – privilegierte Zugriffe" },
      { type: "p", text: "Administratorrechte sind das wertvollste Ziel für Angreifer. PIM (Privileged Identity Management) sorgt dafür, dass niemand dauerhaft Admin ist: Rechte werden nur bei Bedarf, zeitlich begrenzt und mit Begründung freigeschaltet. PAM (Privileged Access Management) sichert zusätzlich die Sitzungen selbst ab." },
      { type: "ul", items: [
        "Just-in-Time: Admin-Rolle für zwei Stunden statt für immer.",
        "Freigabe durch eine zweite Person für besonders kritische Rollen.",
        "Getrennte Admin-Konten, keine E-Mail und kein Surfen mit Admin-Rechten.",
        "Sitzungsaufzeichnung und Protokoll für Server-Zugriffe.",
        "Microsoft: Entra PIM (Teil von Entra ID P2 bzw. ID Governance).",
        "Open Source / selbst gehostet: Teleport für Zero-Trust-Zugriff auf Server, Datenbanken und Kubernetes mit Kurzzeit-Zertifikaten; OpenBao (Fork von HashiCorp Vault) für Geheimnisse und kurzlebige Zugangsdaten.",
      ] },
      { type: "h", text: "Nicht vergessen: Maschinen- und Agenten-Identitäten" },
      { type: "p", text: "Service-Konten, API-Schlüssel und KI-Agenten sind ebenfalls Identitäten – und oft die am schlechtesten verwalteten. Sie brauchen Besitzer, minimale Rechte, Ablaufdaten und regelmäßige Rotation." },
      { type: "h", text: "Warum das jetzt Pflicht ist" },
      { type: "p", text: "Seit dem 6. Dezember 2025 gilt in Deutschland das NIS2-Umsetzungsgesetz. Betroffene Unternehmen müssen Risikomanagement nachweisen – Zugriffskontrolle, MFA und der Umgang mit privilegierten Konten gehören zum Kern. Die Geschäftsleitung haftet persönlich." },
      { type: "tip", text: "Reihenfolge, die sich bewährt: erst IAM sauber (ein Verzeichnis, SSO, MFA), dann PIM für Admins, dann IGA mit Rollen und Rezertifizierung. Wer mit IGA beginnt, automatisiert sonst nur das bestehende Chaos." },
    ],
    sources: [
      { label: "Univention: Keycloak im Integrationskatalog", url: "https://www.univention.com/products/integration-catalog/keycloak/" },
      { label: "Heuking: NIS2-Umsetzungsgesetz in Kraft", url: "https://www.heuking.de/de/news-events/newsletter-fachbeitraege/artikel/ab-jetzt-gilts-nis2-umsetzungsgesetz-in-kraft.html" },
      { label: "Reed Smith: Germany's NIS-2 Implementation Law enters into force", url: "https://www.reedsmith.com/our-insights/blogs/technology-law-dispatch/102lxfr/finally-germany-enacts-its-nis2-law/" },
      { label: "Paperclipped: BSI-Regeln für KI-Agenten und nicht-menschliche Identitäten", url: "https://www.paperclipped.de/en/blog/bsi-ki-agenten-security-rules-germany/" },
    ],
  },
  {
    slug: "siem-open-source-vs-sentinel-nis2",
    tag: "SIEM · NIS2",
    date: "2026-11-18",
    readMin: 8,
    title: {
      de: "SIEM für den Mittelstand: Sentinel, Wazuh & Co. – und was NIS2 verlangt",
      en: "SIEM for mid-sized companies: Sentinel, Wazuh & co. – and what NIS2 requires",
      vi: "SIEM cho doanh nghiệp vừa: Sentinel, Wazuh & các lựa chọn khác – và NIS2 yêu cầu gì",
    },
    excerpt: {
      de: "Ohne zentrale Protokolle merkt man einen Angriff oft erst, wenn es zu spät ist – und kann die NIS2-Meldefristen kaum einhalten. Was ein SIEM leistet, welche Lösungen es gibt und wie man klein anfängt.",
      en: "Without central logs, attacks are often noticed too late – and NIS2 reporting deadlines are hard to meet. What a SIEM does, which solutions exist and how to start small.",
      vi: "Không có nhật ký tập trung, tấn công thường bị phát hiện quá muộn – và khó đáp ứng thời hạn báo cáo NIS2. SIEM làm gì, có những giải pháp nào và cách bắt đầu từ quy mô nhỏ.",
    },
    body: [
      { type: "p", text: "Ein SIEM (Security Information and Event Management) sammelt Protokolle aus Servern, Firewalls, Anmeldediensten und Clients an einem Ort, wertet sie aus und schlägt Alarm, wenn etwas verdächtig ist – etwa viele fehlgeschlagene Anmeldungen, ein neuer Admin um drei Uhr nachts oder Verbindungen zu bekannten Angreifer-Servern." },
      { type: "h", text: "Warum das jetzt dringend ist" },
      { type: "p", text: "Das NIS2-Umsetzungsgesetz gilt seit dem 6. Dezember 2025 ohne Übergangsfrist. Erhebliche Sicherheitsvorfälle müssen gestaffelt gemeldet werden: eine Erstmeldung innerhalb von 24 Stunden, ein Bericht nach 72 Stunden, ein Abschlussbericht nach einem Monat. Ohne zentrale Protokolle ist das kaum zu schaffen." },
      { type: "h", text: "Die Optionen" },
      { type: "ul", items: [
        "Microsoft Sentinel: Cloud-SIEM in Azure, sehr gut bei Microsoft-365- und Entra-Daten; Kosten wachsen mit der Datenmenge.",
        "Wazuh (Open Source, GPLv2): SIEM plus Endpoint-Schutz – Agenten auf Windows, Linux und macOS, Erkennung von Angriffen, Integritätsprüfung, Schwachstellen-Erkennung und Compliance-Berichte. Version 5 ist in Vorbereitung.",
        "Security Onion: freie Plattform für Netzwerk-Überwachung und Threat Hunting.",
        "Graylog: zentrales Log-Management mit Alarmierung; Lizenzbedingungen der Open-Variante prüfen.",
        "Elastic Security: leistungsfähig, aber Lizenzmodell und Ressourcenbedarf beachten.",
      ] },
      { type: "h", text: "Was zuerst angebunden werden sollte" },
      { type: "ul", items: [
        "Anmeldungen: Entra ID, Active Directory, Keycloak – fehlgeschlagene Logins, neue Admins, MFA-Änderungen.",
        "Firewall und VPN: Verbindungen von außen, blockierte Zugriffe.",
        "Server: Windows-Ereignisprotokolle, Linux-Auth-Logs, Proxmox.",
        "Kritische Anwendungen und KI-Agenten: wer hat welche Aktion ausgelöst.",
      ] },
      { type: "h", text: "Klein anfangen" },
      { type: "ul", items: [
        "Ein Wazuh-Server als VM auf Proxmox, Agenten auf den wichtigsten Servern.",
        "Zehn sinnvolle Alarme statt tausend Meldungen – sonst schaut niemand mehr hin.",
        "Klare Zuständigkeit: Wer reagiert auf einen Alarm, auch am Wochenende?",
        "Aufbewahrung und Datenschutz klären: Protokolle enthalten personenbezogene Daten.",
        "Hybrid möglich: M365-Daten in Sentinel, eigene Infrastruktur in Wazuh – oder M365-Protokolle per Schnittstelle ebenfalls in Wazuh.",
      ] },
      { type: "tip", text: "Ein SIEM ist nur so gut wie die Reaktion darauf. Lieber wenige Quellen sauber anbinden und einen Notfallplan üben, als alles zu sammeln und nichts zu sehen." },
    ],
    sources: [
      { label: "Wazuh: Release Notes", url: "https://documentation.wazuh.com/current/release-notes/" },
      { label: "Heuking: NIS2-Umsetzungsgesetz in Kraft", url: "https://www.heuking.de/de/news-events/newsletter-fachbeitraege/artikel/ab-jetzt-gilts-nis2-umsetzungsgesetz-in-kraft.html" },
      { label: "Computer Weekly: NIS2 ist in Kraft – was Unternehmen beachten müssen", url: "https://www.computerweekly.com/de/feature/NIS2-ist-in-Kraft-Was-Unternehmen-beachten-muessen" },
      { label: "IHK Braunschweig: NIS-2 betroffen und noch nicht registriert?", url: "https://www.ihk.de/braunschweig/beratung-und-service/innovation/aktuelle-informationen/nis-2-betroffen-und-noch-nicht-registriert--7091310" },
    ],
  },
  {
    slug: "opendesk-nubus-keycloak-euro-office-hybrid-m365",
    tag: "openDesk · Hybrid M365",
    date: "2026-11-18",
    readMin: 13,
    title: {
      de: "openDesk, Nubus, Keycloak & Euro-Office – und wie das hybrid mit Microsoft 365 zusammenspielt",
      en: "openDesk, Nubus, Keycloak & Euro-Office – and how it all works in hybrid with Microsoft 365",
      vi: "openDesk, Nubus, Keycloak & Euro-Office – và cách kết hợp lai với Microsoft 365",
    },
    excerpt: {
      de: "Wer macht was im souveränen Arbeitsplatz? Proxmox VE trägt die Infrastruktur, Nubus verwaltet Identitäten, Keycloak meldet an, Collabora oder Euro-Office bearbeiten Dokumente. Mit Entra ID als Brücke laufen openDesk und M365 nebeneinander – und die Frage, ob Keycloak Entra ersetzen kann.",
      en: "Who does what in the sovereign workplace? Nubus manages identities, Keycloak handles sign-in, Collabora or Euro-Office edit documents. With Entra ID as a bridge, openDesk and M365 run side by side – without duplicate administration.",
      vi: "Ai làm gì trong môi trường làm việc tự chủ? Nubus quản lý danh tính, Keycloak xử lý đăng nhập, Collabora hoặc Euro-Office chỉnh sửa tài liệu. Với Entra ID làm cầu nối, openDesk và M365 chạy song song – không phải quản trị hai lần.",
    },
    body: [
      { type: "p", text: "„Raus aus Microsoft“ klingt gut, ist für die meisten Unternehmen aber kein realistischer erster Schritt. Realistisch ist: Souveränität dort, wo sie zählt – und ein sauberes Zusammenspiel mit dem, was schon da ist. Dafür muss man verstehen, welche Rolle jeder Baustein spielt." },
      { type: "h", text: "Die Rollenverteilung" },
      { type: "ul", items: [
        "Nubus (Univention) – die Identitäts- und Zugriffsverwaltung: Benutzer, Gruppen, Rollen und Berechtigungen liegen in einem LDAP-Verzeichnis, gepflegt über die Nubus-Verwaltung und das Portal.",
        "Keycloak – die Anmeldung: Single Sign-On für alle Apps per OpenID Connect (und SAML), MFA, Passkeys. Keycloak liest die Benutzer aus dem Nubus-Verzeichnis.",
        "Die Fachanwendungen – Nextcloud (Dateien), Open-Xchange (Mail, Kalender), Element (Chat), Jitsi (Video), OpenProject und XWiki – vertrauen alle Keycloak. Ein Login, eine Abmeldung.",
        "Collabora Online – die Office-Bearbeitung im Browser, standardmäßig in openDesk.",
      ] },
      { type: "h", text: "Und Euro-Office?" },
      { type: "p", text: "Euro-Office ist ein Open-Source-Fork von ONLYOFFICE (AGPL-3.0), den Nextcloud und IONOS im März 2026 gestartet haben. Die erste stabile Browser-Version kam im Juni, eine Desktop-Version folgte im Herbst. Seit Nextcloud Hub 26 Summer läuft die Office-App von Nextcloud auf Euro-Office; Collabora bleibt wählbar." },
      { type: "ul", items: [
        "Stärke: sehr gute Kompatibilität mit Word-, Excel- und PowerPoint-Dateien und eine moderne Browser-Oberfläche.",
        "Zu beachten: ONLYOFFICE wirft den Projekten Lizenzverstöße vor und hat die Partnerschaft mit Nextcloud ausgesetzt. Die AGPL erlaubt Forks – trotzdem sollte man die Entwicklung im Blick behalten.",
        "In openDesk ist Collabora der Standard. Euro-Office lässt sich über Nextcloud anbinden, ist aber kein offizieller openDesk-Baustein – vor dem Einsatz Kompatibilität und Support klären.",
      ] },
      { type: "h", text: "Das Fundament: Proxmox VE als Infrastruktur-Ebene" },
      { type: "p", text: "Souveränität beginnt nicht bei der App, sondern bei der Hardware darunter. Proxmox VE ist eine Open-Source-Virtualisierungsplattform (Debian-basiert, KVM für virtuelle Maschinen, LXC für Container) – eine echte Alternative zu VMware oder Hyper-V ohne Lizenzkosten pro Kern. Die aktuelle Version 9.2 (Mai 2026) basiert auf Debian 13 mit Linux-Kernel 7.0; Version 8 ist seit August 2026 ohne Sicherheitsupdates." },
      { type: "ul", items: [
        "Trennung per VLAN und Firewall: Verwaltung, Identität (Nubus/Keycloak), Arbeitsplatz (openDesk) und KI (lokale Modelle) laufen in getrennten Netzsegmenten – z. B. mit einer OPNsense-VM als Firewall.",
        "openDesk selbst wird auf Kubernetes ausgerollt; auf Proxmox läuft dafür ein kleiner Kubernetes-Cluster (z. B. k3s oder RKE2) in VMs.",
        "Hochverfügbarkeit: Proxmox-Cluster ab drei Knoten (oder zwei Knoten plus kleinem Quorum-Gerät wie einem Raspberry Pi) mit HA-Regeln und Live-Migration.",
        "Speicher und Backup: ZFS mit Snapshots, dazu Proxmox Backup Server und eine Offline-Kopie – damit ein Ausfall oder Ransomware nicht alles mitnimmt.",
        "Sicherheit: API-Tokens mit minimalen Rechten, MFA für die Proxmox-Oberfläche, regelmäßige Updates.",
      ] },
      { type: "h", text: "Hybrid mit Microsoft 365: die Identität ist die Brücke" },
      { type: "p", text: "Der Schlüssel für einen Mischbetrieb ist nicht das Office-Programm, sondern die Identität. Ziel: Mitarbeitende melden sich einmal an – egal ob sie Teams oder Nextcloud öffnen – und Rechte werden nur an einer Stelle gepflegt." },
      { type: "ul", items: [
        "Anmeldung: Keycloak kann Entra ID als externen Identitätsanbieter per OIDC oder SAML einbinden („Identity Brokering“). Wer ein Microsoft-Konto hat, meldet sich darüber auch in openDesk an – inklusive der MFA- und Conditional-Access-Regeln aus Entra.",
        "Benutzer-Abgleich: Eine direkte, offiziell unterstützte Synchronisation von Entra ID in das Nubus-Verzeichnis gibt es laut openDesk-Dokumentation nicht. Gängige Wege sind ein lokales Active Directory als gemeinsame Quelle (das Entra per Entra Connect und Nubus per Directory Importer lesen) oder Entra Domain Services als LDAP-Quelle.",
        "Daten: Sensible Bereiche (z. B. Personal, Patientendaten, Mandantenakten) liegen in Nextcloud auf eigener oder deutscher Infrastruktur; die breite Zusammenarbeit bleibt in M365.",
        "Kommunikation: Matrix/Element als zweiter, unabhängiger Kanal – spätestens seit dem M365-Ausfall im November ein Argument für sich.",
      ] },
      { type: "h", text: "Kann Keycloak Entra ID ersetzen?" },
      { type: "p", text: "Die ehrliche Antwort: teilweise – und es hängt davon ab, ob Microsoft 365 bleibt." },
      { type: "ul", items: [
        "Ohne Microsoft 365: Ja. Für openDesk und alle selbst betriebenen Anwendungen übernehmen Nubus und Keycloak alles, was man von Entra kennt: zentrale Benutzer und Gruppen, Single Sign-On, MFA und Passkeys, Rollen und Föderation mit Partnern.",
        "Mit Microsoft 365: Nein, nicht vollständig. M365 setzt Entra ID als Verzeichnis zwingend voraus – jeder Benutzer und jede Lizenz existiert dort. Entra lässt sich zwar mit einem externen SAML-2.0-Anbieter föderieren (dann meldet man sich über den externen Dienst an), aber Microsoft unterstützt solche Drittanbieter-Konfigurationen nicht selbst, testet sie nicht mehr und listet Einschränkungen bei unterstützten Clients. Für Keycloak gibt es keine offizielle Freigabe.",
        "Was in Entra bleibt: Geräteverwaltung mit Intune, Conditional Access, Lizenzen und die Microsoft-eigenen Sicherheitsfunktionen.",
        "Die pragmatische Lösung: Entra bleibt Identitätsquelle für die Microsoft-Welt, Keycloak bindet Entra als Anmeldeanbieter für openDesk ein. Wer später aus M365 aussteigt, dreht die Richtung um: Nubus wird führend, Entra fällt weg – die Apps merken davon nichts, weil sie nur Keycloak kennen.",
      ] },
      { type: "h", text: "Ein realistischer Fahrplan" },
      { type: "ul", items: [
        "0. Fundament bauen: Proxmox-Cluster mit getrennten VLANs, Firewall und Backup-Konzept.",
        "1. Identität klären: Wer ist die führende Quelle – AD, Entra oder Nubus? Rollen und Gruppen sauber definieren.",
        "2. Keycloak mit Entra föderieren, MFA durchgängig erzwingen.",
        "3. Pilot: ein Team mit sensiblen Daten auf Nextcloud + Collabora (oder Euro-Office) umstellen.",
        "4. Notfall-Kanal mit Element einrichten.",
        "5. Erst nach dem Pilot entscheiden, was weiter wandert.",
      ] },
      { type: "tip", text: "Souveränität ist kein Alles-oder-nichts. Wer die Identität kontrolliert, kann Anbieter austauschen – Schritt für Schritt und ohne Abhängigkeit von einem einzigen Hersteller." },
    ],
    sources: [
      { label: "openDesk-Dokumentation: IdP-Föderation (OpenCoDE)", url: "https://gitlab.opencode.de/bmi/opendesk/deployment/opendesk/-/blob/develop/docs/enhanced-configuration/idp-federation.md?ref_type=heads" },
      { label: "Univention: Keycloak im Integrationskatalog", url: "https://www.univention.com/products/integration-catalog/keycloak/" },
      { label: "heise: Nextcloud und IONOS entwickeln Euro-Office", url: "https://www.heise.de/en/news/Microsoft-alternative-Nextcloud-and-Ionos-develop-open-source-Euro-Office-11228123.html" },
      { label: "The Register: Forking frenzy after launch of Euro-Office", url: "https://www.theregister.com/software/2026/04/02/forking-frenzy-ensues-after-launch-of-euro-office/5221537" },
      { label: "Wikipedia: Euro-Office", url: "https://en.wikipedia.org/wiki/Euro-Office" },
      { label: "WZ-IT: Euro-Office, Collabora und ONLYOFFICE im Vergleich", url: "https://wz-it.com/en/blog/nextcloud-office-euro-office-collabora-onlyoffice-comparison/" },
      { label: "Proxmox: Pressemitteilung Proxmox VE 9.2", url: "https://www.proxmox.com/en/about/press-releases/proxmox-virtual-environment-9-2" },
      { label: "Microsoft Learn: SAML 2.0 Identity Provider für Single Sign-On mit Entra ID", url: "https://learn.microsoft.com/lv-lv/entra/identity/hybrid/connect/how-to-connect-fed-saml-idp" },
      { label: "Microsoft Learn: Entra-Föderations-Kompatibilitätsliste", url: "https://learn.microsoft.com/vi-vn/entra/identity/hybrid/connect/how-to-connect-fed-compatibility" },
    ],
  },
  {
    slug: "lokale-ki-agenten-hermes-claude-code",
    tag: "KI-Agenten",
    date: "2026-11-18",
    readMin: 8,
    title: {
      de: "Lokale KI-Agenten: Was gibt es Neues bei Hermes Agent und Claude Code?",
      en: "Local AI agents: what's new in Hermes Agent and Claude Code?",
      vi: "AI agent cục bộ: Hermes Agent và Claude Code có gì mới?",
    },
    excerpt: {
      de: "Hermes Agent läuft komplett selbst gehostet mit lokalen Modellen, Claude Code wird zum Agenten mit Sandbox und Fernsteuerung. Zwei Wege – und wann welcher passt.",
      en: "Hermes Agent runs fully self-hosted with local models, Claude Code is becoming an agent with sandboxing and remote control. Two approaches – and when each fits.",
      vi: "Hermes Agent chạy hoàn toàn tự host với mô hình cục bộ, Claude Code trở thành agent có sandbox và điều khiển từ xa. Hai hướng đi – và khi nào nên dùng cái nào.",
    },
    body: [
      { type: "p", text: "KI-Agenten sind 2026 die Werkzeuge, die tatsächlich Arbeit erledigen: Sie planen, rufen Werkzeuge auf, merken sich Dinge und arbeiten im Hintergrund. Zwei Vertreter nutze ich selbst täglich – mit sehr unterschiedlichem Ansatz." },
      { type: "h", text: "Hermes Agent: offen, selbst gehostet, lernend" },
      { type: "p", text: "Hermes Agent von Nous Research ist ein Open-Source-Agent unter MIT-Lizenz. Er läuft auf eigener Hardware – vom PC bis zum Raspberry Pi – und arbeitet mit beliebigen Modellen: lokal über Ollama, llama.cpp oder vLLM, oder über einen eigenen Endpunkt." },
      { type: "ul", items: [
        "Gedächtnis: Hermes pflegt ein eigenes Langzeitgedächtnis und Nutzerprofile und durchsucht frühere Sitzungen.",
        "Skills: Nach komplexen Aufgaben legt er wiederverwendbare Fähigkeiten an und verbessert sie – kompatibel mit dem offenen Agent-Skills-Standard.",
        "Kanäle: Ein Gateway für Telegram, Discord, Slack, WhatsApp, Signal und die Kommandozeile.",
        "Zeitpläne: Eingebauter Cron-Scheduler, Ergebnisse landen im gewünschten Kanal.",
        "Erweiterbar über MCP-Server.",
        "Neu im Herbst 2026: Laut Release-Berichten lädt Hermes passende llama.cpp-Modelle inzwischen selbst herunter – lokale KI ohne Bastelei.",
      ] },
      { type: "p", text: "In meinem eigenen Setup läuft Hermes als Docker-Container auf PC und Raspberry Pi – mit lokalem Modell, eigenem Gedächtnis und ohne dass Daten an einen Cloud-Anbieter gehen." },
      { type: "h", text: "Claude Code: der Coding-Agent wird zum Arbeitsplatz" },
      { type: "p", text: "Claude Code von Anthropic ist ein Agent für Software- und IT-Arbeit im Terminal, in der IDE und in der Desktop-App. Er nutzt Anthropics Cloud-Modelle – ist also nicht lokal, arbeitet aber direkt auf den eigenen Dateien. Die Neuerungen im November 2026 laut offiziellem Changelog:" },
      { type: "ul", items: [
        "Code Mode (experimentell, seit 12.11.): Claude schreibt JavaScript, das mehrere Werkzeug-Aufrufe verkettet – weniger Hin und Her bei großen Aufgaben.",
        "Strengere Sandbox: Befehle in der Sandbox dürfen sensible Ordner im Home-Verzeichnis standardmäßig nicht mehr beschreiben; Bash-Befehle in der Sandbox laufen standardmäßig durch die normale Freigabe.",
        "Auto-Modus mit Sicherheitsprüfung: Riskante Befehle werden geprüft statt pauschal durch Erlaubnisregeln durchgewunken.",
        "Remote Control: Sitzungen lassen sich von anderen Geräten fortsetzen, Antworten werden live übertragen.",
      ] },
      { type: "h", text: "Wann was passt" },
      { type: "ul", items: [
        "Hermes: wenn Daten das Haus nicht verlassen dürfen, für Routinen, Benachrichtigungen und persönliche Assistenz – und wenn man Anbieter frei wechseln will.",
        "Claude Code: wenn es um anspruchsvolle Software- und Infrastrukturarbeit geht und Cloud-Modelle vertretbar sind – mit klaren Freigaben und Sandbox.",
        "Kombiniert: Ein eigenes KI-Gateway (z. B. LiteLLM) entscheidet je Aufgabe, ob ein lokales oder ein Cloud-Modell genutzt wird.",
      ] },
      { type: "tip", text: "Mein Grundsatz für beide: Agenten bekommen eigene Identitäten mit minimalen Rechten, kritische Aktionen nur nach Freigabe, und alles wird protokolliert." },
    ],
    sources: [
      { label: "GitHub: NousResearch/hermes-agent", url: "https://github.com/NousResearch/hermes-agent" },
      { label: "Hermes Agent v0.22.0 (Release-Bericht)", url: "https://explainx.ai/blog/hermes-agent-v0-22-0-threshold-release-local-models-connectors-stable-channel-2026" },
      { label: "Claude Code Changelog (offiziell)", url: "https://code.claude.com/docs/en/changelog" },
      { label: "Claude Code: Code Mode (Doku)", url: "https://code.claude.com/docs/en/code-mode" },
    ],
  },
  {
    slug: "power-automate-copilot-studio-open-source-alternativen",
    tag: "Automatisierung · Souveränität",
    date: "2026-11-18",
    readMin: 10,
    title: {
      de: "Power Automate & Copilot Studio vs. Open Source: Enterprise-Niveau ohne Anbieter-Abhängigkeit",
      en: "Power Automate & Copilot Studio vs. open source: enterprise grade without vendor lock-in",
      vi: "Power Automate & Copilot Studio so với mã nguồn mở: chuẩn doanh nghiệp mà không phụ thuộc nhà cung cấp",
    },
    excerpt: {
      de: "n8n, Activepieces, Node-RED, Windmill, Langflow, LibreChat, Dify: Was die Alternativen können, wo die Lizenz-Fallen liegen und wie ein dezentraler, souveräner und nachhaltiger Automatisierungs-Stack aussieht.",
      en: "n8n, Activepieces, Node-RED, Windmill, Langflow, LibreChat, Dify: what the alternatives can do, where the licence traps are and what a decentralised, sovereign and sustainable automation stack looks like.",
      vi: "n8n, Activepieces, Node-RED, Windmill, Langflow, LibreChat, Dify: các lựa chọn thay thế làm được gì, bẫy giấy phép ở đâu và một hệ thống tự động hóa phi tập trung, tự chủ, bền vững trông như thế nào.",
    },
    body: [
      { type: "p", text: "Power Automate und Copilot Studio sind bequem, wenn ohnehin alles in Microsoft 365 liegt. Der Preis: Lizenzen pro Nutzer, Flow oder Credit – und eine wachsende Abhängigkeit von einem einzigen Anbieter. Die gute Nachricht: Für fast jeden Anwendungsfall gibt es selbst betreibbare Alternativen auf Enterprise-Niveau." },
      { type: "h", text: "Workflow-Automatisierung: Power Automate und die Alternativen" },
      { type: "ul", items: [
        "Power Automate (proprietär): stark im Microsoft-Ökosystem; Premium-Connectoren, RPA und unbeaufsichtigte Bots kosten extra (Premium-, Process- oder Pay-as-you-go-Lizenz).",
        "n8n (Sustainable Use License): sehr mächtig, über 400 Integrationen, KI-Knoten. Wichtig: „fair code“, aber keine OSI-Open-Source-Lizenz – interner Einsatz ist erlaubt, Weiterverkauf oder White-Label nicht.",
        "Activepieces (MIT, Community Edition): echtes Open Source, einfache Oberfläche, gut für Fachabteilungen.",
        "Node-RED (Apache-2.0): bewährt, leichtgewichtig, ideal für Events, IoT und Integrationen.",
        "Windmill (AGPLv3): für technische Teams – Skripte in Python, TypeScript oder Go als Workflows.",
        "Grenze: Für klassische Windows-Oberflächen-Automatisierung (RPA wie Power Automate Desktop) gibt es keinen gleichwertigen 1:1-Ersatz.",
      ] },
      { type: "h", text: "KI-Assistenten und Agenten: Copilot Studio und die Alternativen" },
      { type: "ul", items: [
        "Copilot Studio (proprietär): Agenten mit Zugriff auf M365-Daten; Abrechnung über Copilot Credits.",
        "LibreChat (MIT): Chat-Oberfläche mit Agenten, beliebige Modelle – lokal oder Cloud.",
        "Open WebUI: Chat mit RAG auf eigenen Dokumenten, eng mit Ollama verzahnt (auch in openDesk Edu integriert).",
        "Langflow (MIT): visueller Baukasten für Agenten und RAG-Pipelines; der gehostete Dienst wurde laut Berichten 2026 eingestellt, Selbstbetrieb läuft weiter.",
        "Dify (modifizierte Apache-2.0): sehr komplette App-Plattform; Einschränkungen bei Mandanten-Betrieb und Branding beachten.",
        "Für Entwickler: LangGraph und vergleichbare Frameworks für Agenten mit festen Abläufen und Freigabe-Schritten.",
      ] },
      { type: "h", text: "So sieht ein souveräner Stack aus" },
      { type: "ul", items: [
        "Identität: Keycloak oder Nubus – SSO und MFA für alle Werkzeuge, angebunden an Entra ID, falls M365 bleibt.",
        "Modelle: Ollama oder vLLM lokal, davor ein KI-Gateway (z. B. LiteLLM), das je Aufgabe zwischen lokal und Cloud routet.",
        "Automatisierung: Activepieces oder n8n für Geschäftsprozesse, Node-RED für Ereignisse.",
        "Agenten & Chat: LibreChat oder Open WebUI für Mitarbeitende, eigene Agenten mit Freigabe für kritische Aktionen.",
        "Betrieb: Container auf eigener Hardware oder deutschem Hosting, Backups, Monitoring, Audit-Logs.",
      ] },
      { type: "h", text: "Dezentral, souverän, nachhaltig" },
      { type: "ul", items: [
        "Dezentral: Keine einzelne Plattform als Single Point of Failure – Bausteine sind austauschbar, offene Standards (OIDC, MCP, REST) verbinden sie.",
        "Souverän: Daten, Modelle und Prozesse liegen unter eigener Kontrolle; Lizenzbedingungen sind bekannt und planbar.",
        "Nachhaltig: Kleine, spezialisierte Modelle auf effizienter Hardware statt jede Anfrage an ein Rechenzentrum; keine Lizenzkosten, die mit jedem Nutzer wachsen.",
      ] },
      { type: "tip", text: "Mein Rat: Nicht alles auf einmal ablösen. Mit einem Prozess starten, der heute teure Premium-Lizenzen braucht oder sensible Daten verarbeitet – dort ist der Nutzen sofort messbar. Und vor jeder Entscheidung die aktuelle LICENSE-Datei des Projekts lesen." },
    ],
    sources: [
      { label: "Rework: Power Automate vs n8n – Renting Automation vs Owning It", url: "https://resources.rework.com/tools/automation/microsoft-power-automate-vs-n8n" },
      { label: "Taku: Power Automate Alternatives outside the Microsoft stack", url: "https://taku.ai/blog/power-automate-alternatives" },
      { label: "sim.ai: Copilot Studio and Power Automate alternatives", url: "https://www.sim.ai/library/best-microsoft-copilot-studio-power-automate-alternatives" },
      { label: "Agenta: Best open-source AI agent platforms 2026", url: "https://agenta.ai/blog/best-open-source-ai-agent-platforms" },
      { label: "Rasa: Copilot Studio alternatives", url: "https://rasa.com/blog/copilot-studio-alternatives" },
      { label: "Univention: Open WebUI in openDesk Edu", url: "https://www.univention.com/products/integration-catalog/open-webui-in-opendesk-edu/" },
    ],
  },
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
