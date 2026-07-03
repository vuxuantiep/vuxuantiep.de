import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang } from "./LangContext-DlHRSoPA.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Cpu, f as CodeXml, g as ArrowUp, h as Bot, i as Shield, l as Github, n as Terminal, p as Cloud, r as Sparkles, t as X, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Nav, t as Footer } from "./Footer-D4Ek-74e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CXarN5dh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var smallProjects = [
	{
		tag: "KI-Automatisierung",
		tagColor: "text-green-500 bg-green-500/10",
		tag2: "Immobilien",
		title: "Immobilien-Verwaltung",
		desc: "KI-gesteuertes Agenten-System: Agent für den Einkauf, spezialisierter Agent für Auswertung & Optimierung und ein Agent für den Verkauf.",
		status: "Produktion",
		goals: "Vollständige Automatisierung der Akquise, Bewertung und Vermarktung von Immobilien.",
		challenges: "Datenbereinigung aus unstrukturierten Exposés und dynamische Wertermittlung durch LLMs.",
		results: "Reduktion der manuellen Prüfzeit um 90% und höhere Deal-Abschlussquote durch Vorqualifizierung."
	},
	{
		tag: "Corporate LLM",
		tagColor: "text-blue-400 bg-blue-500/10",
		tag2: "Enterprise",
		title: "Wissensdatenbank & DMS Anbindung",
		desc: "Aufbau eines internen Corporate LLMs mit Anbindung an das Dokumentenmanagementsystem (DMS) für intelligente Wissenssuche und -management.",
		status: "Produktion",
		goals: "Zentraler Zugang zu verteiltem Unternehmenswissen durch ein internes, kontextaffines Sprachmodell.",
		challenges: "DSGVO-konforme Verarbeitung sensibler Dokumente und Berechtigungsmanagement (RAG) auf File-Ebene.",
		results: "Signifikante Zeitersparnis bei der Informationssuche und Reduzierung von Redundanzen in der internen Kommunikation."
	},
	{
		tag: "KI-Agent",
		tagColor: "text-purple-400 bg-purple-500/10",
		tag2: "Finance",
		title: "Buchhaltung-Agent",
		desc: "Automatisierte Rechnungs- und Belegverarbeitung, Vorkontierung und Auswertungen speziell für Einzelhändler und Restaurant-Betreiber.",
		status: "Produktion",
		goals: "Automatisierung der Vorkontierung und Extraktion von Rechnungsdaten zur Entlastung der Buchhaltung.",
		challenges: "Zuverlässige Erkennung von Handschriften, zerknitterten Belegen und diversen Rechnungsformaten (OCR + LLM).",
		results: "Über 95% Extraktionsgenauigkeit und Reduktion der Steuerberaterkosten um ca. 40% pro Mandant."
	}
];
function Home() {
	const { t } = useLang();
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(null);
	const [news, setNews] = (0, import_react.useState)([]);
	const [showScrollTop, setShowScrollTop] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 400);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	(0, import_react.useEffect)(() => {
		const fetchNews = async () => {
			try {
				const items = (await (await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${encodeURIComponent("\"AI\" OR \"LLM\" OR \"Agentic AI\" OR \"Security\" OR \"E-Commerce\"")}&tags=story&hitsPerPage=15`)).json()).hits.map((hit) => ({
					title: hit.title,
					url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`
				})).filter((item) => item.title);
				const customTopics = [
					{
						title: "KI in Unternehmen produktiv einsetzen",
						url: "#"
					},
					{
						title: "Agentic AI: Autonome Agenten",
						url: "#"
					},
					{
						title: "IT & KI Sicherheit",
						url: "#"
					},
					{
						title: "KI für E-Commerce",
						url: "#"
					}
				];
				if (items.length > 0) setNews([...customTopics, ...items.slice(0, 10)]);
				else setNews([
					...customTopics,
					{
						title: "OpenAI veröffentlicht neues LLM",
						url: "#"
					},
					{
						title: "WebAssembly in Produktion",
						url: "#"
					}
				]);
			} catch (e) {
				setNews([
					{
						title: "KI in Unternehmen produktiv einsetzen",
						url: "#"
					},
					{
						title: "Agentic AI: Autonome Agenten",
						url: "#"
					},
					{
						title: "IT & KI Sicherheit",
						url: "#"
					},
					{
						title: "KI für E-Commerce",
						url: "#"
					}
				]);
			}
		};
		fetchNews();
	}, []);
	(0, import_react.useEffect)(() => {
		if (selectedProject) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [selectedProject]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative mx-auto max-w-6xl px-6 pt-20 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/80 to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }), t("Verfügbar ab Q3 2026", "Available starting Q3 2026", "Có sẵn từ Quý 3 năm 2026")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl",
								children: [
									t("Software, die ", "Software that ", "Phần mềm mở rộng "),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: t("skaliert", "scales", "hiệu quả")
									}),
									".",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									t("KI, die ", "AI that ", "AI mang lại "),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: t("liefert", "delivers", "kết quả")
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg text-muted-foreground",
								children: t("Hi, ich bin Tiep — IT & KI Experte. Ich konzipiere und baue Cloud-Plattformen, integriere KI sicher (DSGVO-konform, AI Act, NIS2 auditierbar) in bestehende Produkte und liefere produktionsreifen Code.", "Hi, I'm Tiep — IT & AI Expert. I design and build Cloud platforms, integrate AI securely (GDPR-compliant, AI Act, NIS2 auditable) into existing products, and deliver production-ready code.", "Xin chào, tôi là Tiệp — Chuyên gia IT & AI. Tôi thiết kế và xây dựng nền tảng đám mây, tích hợp AI bảo mật và cung cấp mã nguồn sẵn sàng cho sản xuất.")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/portfolio",
									className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90",
									children: [
										t("Projekte ansehen", "View Projects", "Xem dự án"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/kontakt",
									className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface/50 px-5 py-3 text-sm font-medium hover:bg-surface",
									children: t("Erstgespräch buchen", "Book initial call", "Đặt lịch tư vấn")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-yellow-500",
											children: "★"
										}), " 4.9/5 · 32 Reviews"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "h-3 w-3" }), " Azure Certified Solution Architect"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "h-3 w-3" }), " AWS Practitioner"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-3 w-3" }), " MCSA 2016"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-3 w-3" }), " MCPD & MCTS .Net C#"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-1",
										children: "🌍 Remote / EU-weit"
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-surface shadow-2xl overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 border-b border-border bg-background/40 px-4 py-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-destructive/70" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-yellow-500/70" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-primary/70" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-3 text-xs text-muted-foreground font-mono",
											children: "~/projects/vuxuantiep/deploy.ts"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pre", {
									className: "p-5 text-xs leading-relaxed font-mono overflow-x-auto no-scrollbar",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "// Agentic deployment of 4 projects"
										}),
										"\n",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "import"
										}),
										" ",
										"{ Stack }",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "from"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "\"aws-cdk-lib\""
										}),
										";",
										"\n",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "import"
										}),
										" ",
										"{ AIAgent }",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "from"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "\"@tiep/ai\""
										}),
										";",
										"\n\n",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "export const"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "app"
										}),
										" = ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "new"
										}),
										" Stack(",
										"{",
										"\n",
										"  ",
										"region: ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "\"eu-central-1\""
										}),
										",",
										"\n",
										"  ",
										"runtime: ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "\"edge\""
										}),
										",",
										"\n",
										"  ",
										"agents: [",
										"\n",
										"    ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "new"
										}),
										" AIAgent(",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "\"youtube-factory\""
										}),
										"),",
										"\n",
										"    ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "new"
										}),
										" AIAgent(",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "\"aivo-geo\""
										}),
										"),",
										"\n",
										"    ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "new"
										}),
										" AIAgent(",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "\"trade-research\""
										}),
										"),",
										"\n",
										"    ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "new"
										}),
										" AIAgent(",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "\"core-platform\""
										}),
										")",
										"\n",
										"  ",
										"],",
										"\n",
										"}",
										");",
										"\n\n",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "✓"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "4 projects deployed in 12s █"
										})
									]
								})]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-5xl px-6 relative z-20 -mt-6 mb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "overflow-hidden rounded-xl border border-border/50 bg-[#0a0a0a]/80 backdrop-blur-md shadow-2xl py-3 relative flex items-center",
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .2
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex whitespace-nowrap animate-marquee items-center",
							style: { animationDuration: "50s" },
							children: [...Array(2)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex px-4 items-center text-sm font-mono tracking-tight text-muted-foreground",
								children: news.length > 0 ? news.map((item, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: item.url,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "hover:text-primary transition-colors cursor-pointer group flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-green-500/80 text-xs",
											children: "▲"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground/90 font-medium group-hover:text-green-400 transition-colors",
											children: item.title
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-8 text-border/50",
										children: "|"
									})]
								}, j)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary/70 animate-pulse",
										children: t("Lade Live-Feed...", "Loading Live-Feed...", "Đang tải dữ liệu...")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-8 text-border/50",
										children: "|"
									})]
								})
							}, i))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "leistungen",
				className: "mx-auto max-w-6xl px-6 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-6 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-100px"
						},
						transition: {
							duration: .6,
							ease: "easeOut"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-primary",
							children: t("Leistungen", "Services", "Dịch vụ")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl md:text-4xl font-semibold",
							children: t("Was ich für dich baue", "What I build for you", "Những gì tôi mang lại")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/portfolio",
						className: "hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground",
						children: [
							t("Alle Projekte", "All Projects", "Tất cả dự án"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						{
							icon: Cloud,
							title: t("Cloud Architektur", "Cloud Architecture", "Kiến trúc đám mây"),
							desc: t("AWS, GCP, Cloudflare. Infrastructure as Code, kostenoptimiert und produktionsreif.", "AWS, GCP, Cloudflare. Infrastructure as Code, cost-optimized and production-ready.", "AWS, GCP, Cloudflare. Infrastructure as Code, tối ưu chi phí và sẵn sàng chạy thực tế."),
							tags: [
								"AWS CDK",
								"Terraform",
								"K8s"
							]
						},
						{
							icon: Cpu,
							title: t("KI-Integration", "AI Integration", "Tích hợp AI"),
							desc: t("LLM-Agents, RAG-Pipelines, Embeddings. Vom Prototyp bis zum SLA-gestützten Betrieb.", "LLM-Agents, RAG-Pipelines, Embeddings. From prototype to SLA-backed operation.", "LLM-Agents, RAG-Pipelines, Embeddings. Từ bản mẫu đến vận hành có cam kết SLA."),
							tags: [
								"OpenAI",
								"LangChain",
								"Vector DB"
							]
						},
						{
							icon: CodeXml,
							title: t("Web Engineering", "Web Engineering", "Kỹ thuật Web"),
							desc: t("TypeScript, React, Next.js. Schnelle Time-to-Market ohne technische Schulden.", "TypeScript, React, Next.js. Fast time-to-market without technical debt.", "TypeScript, React, Next.js. Ra mắt thị trường nhanh chóng không có nợ kỹ thuật."),
							tags: [
								"TS",
								"React",
								"Next.js"
							]
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-xl border border-border bg-surface/50 p-6 hover:border-primary/40 hover:bg-surface transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-lg bg-background border border-border text-muted-foreground group-hover:text-primary transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: s.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-background px-2 py-1 text-xs font-mono text-muted-foreground",
									children: t
								}, t))
							})
						]
					}, s.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-6 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl border border-border bg-surface/30 p-8 md:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-[1fr_1.5fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: {
								once: true,
								margin: "-100px"
							},
							transition: {
								duration: .6,
								ease: "easeOut"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs uppercase tracking-widest text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-accent" }), " Tech Stack"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-3xl md:text-4xl font-semibold",
									children: t("Werkzeuge, denen ich vertraue", "Tools I trust", "Các công cụ tôi tin tưởng")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-5 w-5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm font-medium text-primary",
											children: [
												"\"",
												t("KI nicht als Consumer sondern Wertschöpfer", "AI not as a consumer but as a creator of value", "AI không chỉ là công cụ tiêu dùng, mà là nguồn tạo giá trị"),
												"\""
											]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-sm leading-relaxed text-muted-foreground",
									children: t("Erprobt in Produktion bei Startups und Mittelstand. Pragmatisch ausgewählt und auf nachhaltigen Betrieb ausgelegt.", "Proven in production at startups and SMEs. Pragmatically chosen and designed for sustainable operation.", "Đã được kiểm chứng trong sản xuất tại các startup và doanh nghiệp SME. Lựa chọn thực tế và thiết kế cho vận hành bền vững.")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 pt-8 border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm font-medium text-green-400",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4" }), " AI Governance Layer"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground leading-relaxed",
										children: t("Architektur konzipiert für DSGVO, AI Act & NIS2 Compliance durch Auditing, Security & Privacy AI Layer.", "Architecture designed for GDPR, AI Act & NIS2 Compliance through Auditing, Security & Privacy AI Layer.", "Kiến trúc được thiết kế cho sự tuân thủ GDPR, AI Act & NIS2 qua lớp Auditing, bảo mật và riêng tư AI.")
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-background/40 rounded-xl border border-border p-6 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2 mb-8 text-xs font-medium border-b border-border pb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-full bg-primary/10 px-3 py-1.5 text-primary",
										children: "Agentic Coding"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: "Alle"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: "KI & Data"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: "Cloud & DevOps"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: "Backend"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: "Frontend"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: "Security"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm",
								children: [
									{
										name: "Open Claw",
										exp: "1 Jahre"
									},
									{
										name: "Codex",
										exp: "1 Jahre"
									},
									{
										name: "Claude Code",
										exp: "1 Jahre"
									},
									{
										name: "Cody",
										exp: "1 Jahre"
									},
									{
										name: "OpenHands",
										exp: "1 Jahre"
									},
									{
										name: "Hermes",
										exp: "1 Jahre"
									},
									{
										name: "LangGraph",
										exp: "1 Jahre"
									},
									{
										name: "Aider",
										exp: "1 Jahre"
									},
									{
										name: "Cline",
										exp: "1 Jahre"
									},
									{
										name: "Azad-Code",
										exp: "1 Jahre"
									}
								].map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between py-2 border-b border-border/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tool.name })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: tool.exp
									})]
								}, tool.name))
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "projekte",
				className: "mx-auto max-w-6xl px-6 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "mb-12",
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-100px"
						},
						transition: {
							duration: .6,
							ease: "easeOut"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-primary",
							children: t("Aktuelle & Bisherige Projekte", "Current & Past Projects", "Dự án hiện tại và quá khứ")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl md:text-4xl font-semibold",
							children: t("Ausgewählte Arbeiten", "Selected Works", "Dự án tiêu biểu")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-border bg-surface/30 overflow-hidden mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid lg:grid-cols-[1fr_1fr] gap-8 p-8 md:p-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2 mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
											" ",
											t("Aktuelles Meisterstück", "Current Masterpiece", "Tuyệt tác hiện tại")
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center rounded-full bg-background border border-border px-2.5 py-1 text-xs text-muted-foreground",
										children: "Agentic E-Commerce"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-3xl font-semibold mb-4",
									children: "TRACE AI Commerce"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-muted-foreground leading-relaxed mb-6",
									children: [
										"Eine Agentic-Commerce-Plattform (ACOS). Ein intelligentes Betriebssystem für den digitalen Handel. Arbeitet als ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Multi-Agenten-Team"
										}),
										" mit getrennten Rollen, wo jeder Agent ein hochspezialisierter Experte in seinem Bereich ist (z.B. Planner, Architect, DevOps, Security, SEO, Support)."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground leading-relaxed mb-8",
									children: [
										"Inklusive starker ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "AI Governance"
										}),
										" (Auditor, Security, Privacy, Compliance AI) für DSGVO, AI Act und NIS 2 Compliance durch einem ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Model Continuity Layer"
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: [
										"LangGraph",
										"Qdrant",
										"Supabase",
										"n8n",
										"MCP Server"
									].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded text-xs px-2.5 py-1 font-mono bg-primary/10 text-primary",
										children: tag
									}, tag))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl border border-border bg-background p-6 flex flex-col items-center justify-center min-h-[300px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full max-w-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											className: "text-center mb-8",
											initial: {
												opacity: 0,
												y: -20
											},
											whileInView: {
												opacity: 1,
												y: 0
											},
											viewport: { once: true },
											transition: { duration: .5 },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary mb-3 relative",
												animate: { boxShadow: [
													"0px 0px 0px 0px rgba(74, 222, 128, 0.2)",
													"0px 0px 20px 5px rgba(74, 222, 128, 0.4)",
													"0px 0px 0px 0px rgba(74, 222, 128, 0.2)"
												] },
												transition: {
													repeat: Infinity,
													duration: 3,
													ease: "easeInOut"
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-7 w-7" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-bold tracking-widest uppercase",
												children: "TRACE OS"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-3 gap-4 mb-8",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
													className: "text-center",
													initial: {
														opacity: 0,
														y: 20
													},
													whileInView: {
														opacity: 1,
														y: 0
													},
													viewport: { once: true },
													transition: {
														duration: .5,
														delay: .1
													},
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
															className: "mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface mb-2",
															whileHover: {
																scale: 1.1,
																borderColor: "rgba(74, 222, 128, 0.5)"
															},
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-accent" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-[10px] uppercase tracking-wider text-muted-foreground",
															children: "AGENT"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-2 text-[10px] text-muted-foreground",
															children: [
																"Trend",
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
																"Trade",
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
																"OSINT"
															]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
													className: "text-center relative",
													initial: {
														opacity: 0,
														y: 20
													},
													whileInView: {
														opacity: 1,
														y: 0
													},
													viewport: { once: true },
													transition: {
														duration: .5,
														delay: .2
													},
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
															className: "mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface mb-2",
															whileHover: {
																scale: 1.1,
																borderColor: "rgba(74, 222, 128, 0.5)"
															},
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-4 w-4 text-muted-foreground" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-[10px] uppercase tracking-wider text-muted-foreground",
															children: "FACTORY"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-2 text-[10px] text-muted-foreground",
															children: [
																"YouTube",
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
																"TikTok",
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
																"SEO"
															]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
													className: "text-center",
													initial: {
														opacity: 0,
														y: 20
													},
													whileInView: {
														opacity: 1,
														y: 0
													},
													viewport: { once: true },
													transition: {
														duration: .5,
														delay: .3
													},
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
															className: "mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface mb-2",
															whileHover: {
																scale: 1.1,
																borderColor: "rgba(74, 222, 128, 0.5)"
															},
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "h-4 w-4 text-yellow-500" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-[10px] uppercase tracking-wider text-muted-foreground",
															children: "AGENT"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-2 text-[10px] text-muted-foreground",
															children: [
																"Shopping Agent",
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
																"Deal"
															]
														})
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											className: "rounded-lg border border-border bg-surface/50 p-3 text-center text-[10px] text-muted-foreground font-mono",
											initial: { opacity: 0 },
											whileInView: { opacity: 1 },
											viewport: { once: true },
											transition: {
												duration: .5,
												delay: .5
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: "KI-Agenten"
											}), " → Marktforschung → Content → Handel → eigene Produkte"]
										})
									]
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-6",
						children: smallProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => setSelectedProject(p),
							className: "rounded-xl border border-border bg-surface/30 p-6 hover:border-primary/40 transition-colors cursor-pointer group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium ${p.tagColor}`,
										children: p.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5",
										children: p.tag2
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "text-lg font-semibold mb-3 group-hover:text-primary transition-colors flex justify-between items-center",
									children: [p.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground mb-6",
									children: p.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
										" ",
										p.status
									]
								})
							]
						}, p.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedProject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						onClick: () => setSelectedProject(null),
						className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .95,
								y: 20
							},
							animate: {
								opacity: 1,
								scale: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								scale: .95,
								y: 20
							},
							transition: {
								type: "spring",
								duration: .5,
								bounce: 0
							},
							onClick: (e) => e.stopPropagation(),
							className: "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-surface p-6 md:p-10 shadow-2xl text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSelectedProject(null),
									className: "absolute right-6 top-6 rounded-full p-2 bg-background border border-border text-muted-foreground hover:text-foreground transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-8 pr-12",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 mb-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `rounded px-2 py-0.5 text-xs font-medium uppercase tracking-wider ${selectedProject.tagColor}`,
													children: selectedProject.tag
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "·"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-muted-foreground uppercase tracking-wider",
													children: selectedProject.tag2
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-2xl md:text-3xl font-display font-semibold mb-4",
											children: selectedProject.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 text-sm text-primary font-medium",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }),
												" ",
												selectedProject.status
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "text-lg font-semibold mb-3 flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
												" ",
												t("Zielsetzung", "Objectives", "Mục tiêu")
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground leading-relaxed",
											children: selectedProject.goals
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "text-lg font-semibold mb-3 flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
												" ",
												t("Technische Herausforderungen", "Technical Challenges", "Thách thức Kỹ thuật")
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground leading-relaxed",
											children: selectedProject.challenges
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "text-lg font-semibold mb-3 flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#4ADE80]" }),
												" ",
												t("Ergebnisse & Impact", "Results & Impact", "Kết quả & Tác động")
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground leading-relaxed",
											children: selectedProject.results
										})] })
									]
								})
							]
						})
					}) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-4xl px-6 py-20 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-100px"
						},
						transition: {
							duration: .6,
							ease: "easeOut"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center justify-center gap-2 text-xs font-mono text-primary mb-4 rounded-full border border-border bg-surface/50 px-3 py-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-3.5 w-3.5" }),
									" ",
									t("Journal", "Journal", "Nhật ký")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl md:text-4xl font-semibold mb-4",
								children: t("Gedanken & Architektur", "Thoughts & Architecture", "Suy nghĩ & Kiến trúc")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mb-12 max-w-xl mx-auto",
								children: t("Technische Deep-Dives, Lektionen aus der Produktion und Perspektiven auf die Entwicklung von KI-Agenten und Cloud-Systemen.", "Technical deep-dives, lessons from production, and perspectives on the evolution of AI agents and cloud systems.", "Các bài viết chuyên sâu về kỹ thuật, bài học từ thực tế sản xuất và góc nhìn về sự phát triển của hệ thống đám mây và tác nhân AI.")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blog",
								className: "group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-xl border border-border bg-surface/30 p-6 hover:border-primary/40 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-xs text-muted-foreground mb-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded bg-primary/10 px-2 py-0.5 text-primary font-medium",
												children: "LLM"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📅 28. Juni 2026" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⏱ 10 min" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold mb-2 group-hover:text-primary transition-colors",
										children: "Die nächste Generation von LLMs: Was kommt nach GPT-4?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Eine Analyse der neuen Architekturen, Mixture of Experts (MoE) und wie lokale, spezialisierte Modelle die Cloud-Giganten herausfordern."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-primary font-medium shrink-0 flex items-center gap-1",
									children: ["Artikel lesen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blog",
								className: "group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-xl border border-border bg-surface/30 p-6 hover:border-primary/40 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-xs text-muted-foreground mb-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded bg-accent/10 px-2 py-0.5 text-accent font-medium",
												children: "WebAssembly"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📅 15. Mai 2026" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⏱ 8 min" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold mb-2 group-hover:text-primary transition-colors",
										children: "WebAssembly & KI: Modelle direkt im Browser ausführen"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Wie WebAssembly (Wasm) und WebGPU es ermöglichen, leistungsstarke KI-Modelle ohne Serverkosten direkt auf dem Endgerät laufen zu lassen."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-primary font-medium shrink-0 flex items-center gap-1",
									children: ["Artikel lesen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blog",
								className: "group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-xl border border-border bg-surface/30 p-6 hover:border-primary/40 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-xs text-muted-foreground mb-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded bg-primary/10 px-2 py-0.5 text-primary font-medium",
												children: "AI Tech"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📅 02. April 2026" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⏱ 14 min" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold mb-2 group-hover:text-primary transition-colors",
										children: "Agentic Workflows: Wenn KI selbstständig handelt"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Über den Wandel von Chatbots zu autonomen Agenten-Systemen und wie sie komplette Unternehmensprozesse steuern."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-primary font-medium shrink-0 flex items-center gap-1",
									children: ["Artikel lesen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog",
							className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2",
							children: ["Alle Artikel anzeigen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "kontakt",
				className: "mx-auto max-w-4xl px-6 py-20 pb-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "rounded-2xl border border-border bg-surface/30 p-12 text-center",
					initial: {
						opacity: 0,
						scale: .95
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: {
						once: true,
						margin: "-100px"
					},
					transition: {
						duration: .5,
						ease: "easeOut"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "mx-auto mb-6 h-8 w-8 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-semibold mb-4",
							children: t("Hast du ein Projekt im Kopf?", "Do you have a project in mind?", "Bạn có dự án muốn thực hiện?")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mb-8 max-w-xl mx-auto",
							children: t("30 Minuten Erstgespräch, kostenlos. Wir prüfen Scope, Stack und Zeitplan — und ob wir zueinander passen.", "30 minutes initial call, free of charge. We check scope, stack and timeline — and if we are a good fit.", "Tư vấn 30 phút miễn phí. Chúng ta sẽ xem xét phạm vi, công nghệ, lịch trình — và sự phù hợp.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/kontakt",
							className: "inline-flex items-center gap-2 rounded-md bg-[#4ADE80] px-6 py-3 text-sm font-medium text-black hover:bg-[#4ADE80]/90 transition-colors",
							children: [
								t("Termin anfragen", "Request a meeting", "Đặt lịch hẹn"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showScrollTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				initial: {
					opacity: 0,
					scale: .8,
					y: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					scale: .8,
					y: 20
				},
				onClick: scrollToTop,
				className: "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary/20 text-primary border border-primary/30 shadow-lg backdrop-blur-md hover:bg-primary/30 transition-colors",
				"aria-label": "Scroll to top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
			}) })
		]
	});
}
//#endregion
export { Home as component };
