import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useLang } from "./LangContext-DlHRSoPA.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowRight, _ as ChevronRight, b as ArrowUp, d as Github, g as CircleCheck, h as Cloud, i as Shield, m as CodeXml, n as Terminal, p as Cpu, r as Sparkles, t as X, y as Bot } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Nav, t as Footer } from "./Footer-nJJ7xBAV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Biu2FV7c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILE_PATH = "packages/factory/src/evolution.ts";
var LANGUAGE = "TypeScript";
var MEDIA = [
	{
		type: "image",
		src: "/animation/0.png"
	},
	{
		type: "image",
		src: "/animation/1.png"
	},
	{
		type: "video",
		src: "/animation/2.mp4"
	},
	{
		type: "image",
		src: "/animation/3.png"
	},
	{
		type: "video",
		src: "/animation/4.mp4"
	},
	{
		type: "image",
		src: "/animation/5.png"
	}
];
var PHASES = [
	{
		title: "Idee",
		description: "Wie bauen wir eine Fabrik aus wiederverwendbaren KI-Agenten?",
		codeLines: [
			"// Phase 1 — Idee",
			"// Ziel: Agenten wie LEGO kombinieren",
			"",
			"interface AgentSpec {",
			"  role: string;",
			"  skills: string[];",
			"  memory?: Memory;",
			"}"
		]
	},
	{
		title: "Architektur",
		description: "Modulare Registry mit Intent-Routing und Memory-Layer.",
		codeLines: [
			"// Phase 2 — Architektur",
			"import { Registry } from \"@lego/core\";",
			"import { Memory } from \"@lego/memory\";",
			"",
			"const registry = new Registry({",
			"  routing: \"intent-aware\",",
			"  memory: new Memory({ model: \"nomic-768\" })",
			"});"
		]
	},
	{
		title: "Implementierung",
		description: "Stack aus Planner, Retriever und Writer wird zusammengebaut.",
		codeLines: [
			"// Phase 3 — Implementierung",
			"const stack = [\"planner\", \"retriever\", \"writer\"];",
			"",
			"export const agents = AgentRegistry.build({",
			"  stack,",
			"  routing: \"intent-aware\",",
			"  autonomy: \"high\"",
			"});"
		]
	},
	{
		title: "Betrieb",
		description: "Die Fabrik läuft autonom und skaliert in Produktion.",
		codeLines: [
			"// Phase 4 — Produktiv",
			"agents.deploy(\"prod-eu-central-1\");",
			"",
			"// 12 Agents deployed in 8s",
			"// Autonomy loop: OK",
			"// Observability: ENABLED"
		]
	}
];
var CHAR_DELAY_MS = 38;
var PHASE_HOLD_MS = 3200;
var MEDIA_HOLD_MS = 6500;
function getDisplayedText(lines, typedChars) {
	const totalChars = lines.reduce((sum, line) => sum + line.length, 0);
	let remaining = Math.max(0, Math.min(typedChars, totalChars));
	return lines.map((line) => {
		if (remaining <= 0) return "";
		const take = Math.min(line.length, remaining);
		remaining -= take;
		return line.slice(0, take);
	}).join("\n");
}
function ProductCodeSlideshow() {
	const { t } = useLang();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [currentPhaseIndex, setCurrentPhaseIndex] = (0, import_react.useState)(0);
	const [typedChars, setTypedChars] = (0, import_react.useState)(0);
	const [mediaIndex, setMediaIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!mounted || mediaIndex + 1 >= MEDIA.length) return;
		const timer = setTimeout(() => setMediaIndex(mediaIndex + 1), MEDIA_HOLD_MS);
		return () => clearTimeout(timer);
	}, [mounted, mediaIndex]);
	(0, import_react.useEffect)(() => {
		if (!mounted) return;
		const isLastPhase = currentPhaseIndex + 1 >= PHASES.length;
		const totalCharsInPhase = PHASES[currentPhaseIndex].codeLines.reduce((sum, line) => sum + line.length, 0);
		let chars = 0;
		let timer;
		setTypedChars(0);
		const typeNext = () => {
			chars += 1;
			setTypedChars(chars);
			if (chars >= totalCharsInPhase) {
				if (!isLastPhase) timer = setTimeout(() => setCurrentPhaseIndex(currentPhaseIndex + 1), PHASE_HOLD_MS);
			} else timer = setTimeout(typeNext, CHAR_DELAY_MS);
		};
		timer = setTimeout(typeNext, CHAR_DELAY_MS);
		return () => clearTimeout(timer);
	}, [mounted, currentPhaseIndex]);
	const currentPhase = PHASES[currentPhaseIndex] ?? PHASES[0];
	const currentMedia = MEDIA[mediaIndex] ?? MEDIA[0];
	const totalChars = currentPhase.codeLines.reduce((sum, line) => sum + line.length, 0);
	const displayed = getDisplayedText(currentPhase.codeLines, typedChars);
	const isTyping = typedChars < totalChars;
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative rounded-xl border border-zinc-800 bg-[#0d0d0f] overflow-hidden shadow-2xl h-[420px]" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative rounded-xl border border-zinc-800 bg-[#0d0d0f] overflow-hidden shadow-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 blur-2xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-zinc-800/80 bg-[#111114] px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500/80" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-3 text-[11px] text-zinc-500 font-mono truncate",
						children: FILE_PATH
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto shrink-0 text-[11px] rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-zinc-400",
						children: LANGUAGE
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-5 border-b lg:border-b-0 lg:border-r border-zinc-800/60 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						initial: false,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							exit: { opacity: 0 },
							transition: {
								duration: .4,
								ease: "easeOut"
							},
							className: "flex h-full flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] font-medium text-emerald-400/90",
									children: [
										t("Phase", "Phase", "Giai đoạn"),
										" ",
										currentPhaseIndex + 1,
										"/",
										PHASES.length
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-zinc-300 min-h-[48px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-zinc-100 font-medium",
											children: [currentPhase.title, ":"]
										}),
										" ",
										currentPhase.description
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg border border-zinc-800 bg-[#0a0a0c] p-3 font-mono text-[12px] leading-relaxed text-zinc-300 h-[190px] overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pre", {
										className: "whitespace-pre-wrap break-words",
										children: [displayed, isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											animate: { opacity: [1, 0] },
											transition: {
												repeat: Infinity,
												duration: .7,
												ease: "linear"
											},
											className: "ml-[3px] inline-block h-3 w-[8px] bg-emerald-400/90 align-middle shadow-[0_0_6px_rgba(52,211,153,0.8)]"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-1",
											children: PHASES.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1 rounded-full transition-all duration-300 ${idx <= currentPhaseIndex ? "w-4 bg-emerald-400" : "w-2 bg-zinc-700"}` }, idx))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 text-zinc-500" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-zinc-500 truncate",
											children: t("AI-Agenten Fabrik-LEGO", "AI-Agent Factory-LEGO", "AI-Agent Fabrik-LEGO")
										})
									]
								})
							]
						}, currentPhaseIndex)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-5 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						initial: false,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .98
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							exit: {
								opacity: 0,
								scale: .98
							},
							transition: {
								duration: .5,
								ease: "easeInOut"
							},
							className: "flex h-full flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-[240px] lg:h-[262px] items-center justify-center overflow-hidden rounded-lg border border-zinc-800/60 bg-[#0a0a0c]",
								children: currentMedia.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									src: currentMedia.src,
									autoPlay: true,
									muted: true,
									loop: true,
									playsInline: true,
									className: "h-full w-full object-contain"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: currentMedia.src,
									alt: "AI-Agenten Fabrik-LEGO",
									className: "h-full w-full object-contain"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center gap-2 text-[11px] text-zinc-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-400 shrink-0" }), t("Live-Vorschau", "Live Preview", "Xem trước trực tiếp")]
							})]
						}, mediaIndex)
					})
				})]
			})
		]
	});
}
function Home() {
	const { t, lang } = useLang();
	const smallProjects = [
		{
			tag: t("KI-Automatisierung", "AI Automation", "Tự động hóa AI"),
			tagColor: "text-green-500 bg-green-500/10",
			tag2: t("Immobilien", "Real Estate", "Bất động sản"),
			title: t("Immobilien-Verwaltung", "Real Estate Management", "Quản lý bất động sản"),
			desc: t("KI-gesteuertes Agenten-System: Agent für den Einkauf, spezialisierter Agent für Auswertung & Optimierung und ein Agent für den Verkauf.", "AI-driven agent system: an agent for acquisition, a specialized agent for evaluation & optimization, and an agent for sales.", "Hệ thống agent điều khiển bởi AI: agent cho thu mua, agent chuyên biệt cho đánh giá & tối ưu, và agent cho bán hàng."),
			status: t("Produktion", "Production", "Đang vận hành"),
			goals: t("Vollständige Automatisierung der Akquise, Bewertung und Vermarktung von Immobilien.", "Full automation of real estate acquisition, valuation, and marketing.", "Tự động hóa hoàn toàn việc thu mua, định giá và tiếp thị bất động sản."),
			challenges: t("Datenbereinigung aus unstrukturierten Exposés und dynamische Wertermittlung durch LLMs.", "Data cleansing from unstructured listings and dynamic valuation through LLMs.", "Làm sạch dữ liệu từ các tin đăng phi cấu trúc và định giá động thông qua LLM."),
			results: t("Reduktion der manuellen Prüfzeit um 90% und höhere Deal-Abschlussquote durch Vorqualifizierung.", "90% reduction in manual review time and a higher deal close rate through pre-qualification.", "Giảm 90% thời gian kiểm tra thủ công và tăng tỷ lệ chốt giao dịch nhờ sơ tuyển trước.")
		},
		{
			tag: "Corporate LLM",
			tagColor: "text-blue-400 bg-blue-500/10",
			tag2: t("Enterprise", "Enterprise", "Doanh nghiệp"),
			title: t("Wissensdatenbank & DMS Anbindung", "Knowledge Base & DMS Integration", "Cơ sở tri thức & tích hợp DMS"),
			desc: t("Aufbau eines internen Corporate LLMs mit Anbindung an das Dokumentenmanagementsystem (DMS) für intelligente Wissenssuche und -management.", "Building an internal corporate LLM connected to the document management system (DMS) for intelligent knowledge search and management.", "Xây dựng LLM nội bộ doanh nghiệp kết nối với hệ thống quản lý tài liệu (DMS) để tìm kiếm và quản lý tri thức thông minh."),
			status: t("Produktion", "Production", "Đang vận hành"),
			goals: t("Zentraler Zugang zu verteiltem Unternehmenswissen durch ein internes, kontextaffines Sprachmodell.", "Central access to distributed company knowledge through an internal, context-aware language model.", "Truy cập tập trung vào tri thức doanh nghiệp phân tán thông qua mô hình ngôn ngữ nội bộ, nhận biết ngữ cảnh."),
			challenges: t("DSGVO-konforme Verarbeitung sensibler Dokumente und Berechtigungsmanagement (RAG) auf File-Ebene.", "GDPR-compliant processing of sensitive documents and file-level permission management (RAG).", "Xử lý tài liệu nhạy cảm tuân thủ GDPR và quản lý phân quyền (RAG) ở cấp độ file."),
			results: t("Signifikante Zeitersparnis bei der Informationssuche und Reduzierung von Redundanzen in der internen Kommunikation.", "Significant time savings in information retrieval and reduced redundancy in internal communication.", "Tiết kiệm đáng kể thời gian tìm kiếm thông tin và giảm trùng lặp trong giao tiếp nội bộ.")
		},
		{
			tag: t("KI-Agent", "AI Agent", "AI Agent"),
			tagColor: "text-purple-400 bg-purple-500/10",
			tag2: "Finance",
			title: t("Buchhaltung-Agent", "Accounting Agent", "Agent kế toán"),
			desc: t("Automatisierte Rechnungs- und Belegverarbeitung, Vorkontierung und Auswertungen speziell für Einzelhändler und Restaurant-Betreiber.", "Automated invoice and receipt processing, pre-accounting, and reporting tailored for retailers and restaurant operators.", "Xử lý hóa đơn và chứng từ tự động, hạch toán sơ bộ và báo cáo dành riêng cho nhà bán lẻ và chủ nhà hàng."),
			status: t("Produktion", "Production", "Đang vận hành"),
			goals: t("Automatisierung der Vorkontierung und Extraktion von Rechnungsdaten zur Entlastung der Buchhaltung.", "Automating pre-accounting and invoice data extraction to relieve the accounting department.", "Tự động hóa hạch toán sơ bộ và trích xuất dữ liệu hóa đơn để giảm tải cho bộ phận kế toán."),
			challenges: t("Zuverlässige Erkennung von Handschriften, zerknitterten Belegen und diversen Rechnungsformaten (OCR + LLM).", "Reliable recognition of handwriting, crumpled receipts, and diverse invoice formats (OCR + LLM).", "Nhận dạng đáng tin cậy chữ viết tay, biên lai nhàu nát và nhiều định dạng hóa đơn khác nhau (OCR + LLM)."),
			results: t("Über 95% Extraktionsgenauigkeit und Reduktion der Steuerberaterkosten um ca. 40% pro Mandant.", "Over 95% extraction accuracy and roughly 40% reduction in tax advisor costs per client.", "Độ chính xác trích xuất hơn 95% và giảm khoảng 40% chi phí tư vấn thuế cho mỗi khách hàng.")
		}
	];
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
						title: t("KI in Unternehmen produktiv einsetzen", "Using AI productively in enterprises", "Ứng dụng AI hiệu quả trong doanh nghiệp"),
						url: "#"
					},
					{
						title: t("Agentic AI: Autonome Agenten", "Agentic AI: Autonomous agents", "Agentic AI: Các tác nhân tự động"),
						url: "#"
					},
					{
						title: t("IT & KI Sicherheit", "IT & AI Security", "Bảo mật IT & AI"),
						url: "#"
					},
					{
						title: t("KI für E-Commerce", "AI for E-Commerce", "AI cho Thương mại điện tử"),
						url: "#"
					}
				];
				if (items.length > 0) setNews([...customTopics, ...items.slice(0, 10)]);
				else setNews([
					...customTopics,
					{
						title: t("OpenAI veröffentlicht neues LLM", "OpenAI releases new LLM", "OpenAI phát hành LLM mới"),
						url: "#"
					},
					{
						title: t("WebAssembly in Produktion", "WebAssembly in production", "WebAssembly trong sản xuất"),
						url: "#"
					}
				]);
			} catch (e) {
				setNews([
					{
						title: t("KI in Unternehmen produktiv einsetzen", "Using AI productively in enterprises", "Ứng dụng AI hiệu quả trong doanh nghiệp"),
						url: "#"
					},
					{
						title: t("Agentic AI: Autonome Agenten", "Agentic AI: Autonomous agents", "Agentic AI: Các tác nhân tự động"),
						url: "#"
					},
					{
						title: t("IT & KI Sicherheit", "IT & AI Security", "Bảo mật IT & AI"),
						url: "#"
					},
					{
						title: t("KI für E-Commerce", "AI for E-Commerce", "AI cho Thương mại điện tử"),
						url: "#"
					}
				]);
			}
		};
		fetchNews();
	}, [lang]);
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
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-yellow-500",
												children: "★"
											}),
											" 4.9/5 · 32 ",
											t("Bewertungen", "Reviews", "Đánh giá")
										]
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: ["🌍 ", t("Remote / EU-weit", "Remote / EU-wide", "Remote / Toàn EU")]
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCodeSlideshow, {})]
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
										type: "button",
										className: "rounded-full bg-primary/10 px-3 py-1.5 text-primary",
										children: "Agentic Coding"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: t("Alle", "All", "Tất cả")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: t("KI & Data", "AI & Data", "AI & Data")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: "Cloud & DevOps"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: "Backend"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: "Frontend"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground",
										children: "Security"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm",
								children: [
									{
										name: "Open Claw",
										exp: t("1 Jahre", "1 year", "1 năm")
									},
									{
										name: "Codex",
										exp: t("1 Jahre", "1 year", "1 năm")
									},
									{
										name: "Claude Code",
										exp: t("1 Jahre", "1 year", "1 năm")
									},
									{
										name: "Cody",
										exp: t("1 Jahre", "1 year", "1 năm")
									},
									{
										name: "OpenHands",
										exp: t("1 Jahre", "1 year", "1 năm")
									},
									{
										name: "Hermes",
										exp: t("1 Jahre", "1 year", "1 năm")
									},
									{
										name: "LangGraph",
										exp: t("1 Jahre", "1 year", "1 năm")
									},
									{
										name: "Aider",
										exp: t("1 Jahre", "1 year", "1 năm")
									},
									{
										name: "Cline",
										exp: t("1 Jahre", "1 year", "1 năm")
									},
									{
										name: "Azad-Code",
										exp: t("1 Jahre", "1 year", "1 năm")
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
										t("Eine Agentic-Commerce-Plattform (ACOS). Ein intelligentes Betriebssystem für den digitalen Handel.", "An agentic commerce platform (ACOS). An intelligent operating system for digital commerce.", "Một nền tảng thương mại agentic (ACOS). Một hệ điều hành thông minh cho thương mại số."),
										" ",
										t("Arbeitet als", "Operates as a", "Hoạt động như một"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: t("Multi-Agenten-Team", "multi-agent team", "đội ngũ đa tác nhân")
										}),
										" ",
										t("mit getrennten Rollen, wo jeder Agent ein hochspezialisierter Experte in seinem Bereich ist (z.B. Planner, Architect, DevOps, Security, SEO, Support).", "with separate roles, where each agent is a highly specialized expert in its domain (e.g. Planner, Architect, DevOps, Security, SEO, Support).", "với các vai trò riêng biệt, mỗi agent là chuyên gia chuyên sâu trong lĩnh vực của mình (ví dụ: Planner, Architect, DevOps, Security, SEO, Support).")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground leading-relaxed mb-8",
									children: [
										t("Inklusive starker", "Including strong", "Bao gồm"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "AI Governance"
										}),
										" ",
										t("(Auditor, Security, Privacy, Compliance AI) für DSGVO, AI Act und NIS 2 Compliance durch einem", "(Auditor, Security, Privacy, Compliance AI) for GDPR, AI Act and NIS 2 compliance through a", "AI mạnh mẽ (Auditor, Security, Privacy, Compliance AI) để tuân thủ GDPR, AI Act và NIS 2 thông qua một"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: t("Model Continuity Layer", "Model Continuity Layer", "Model Continuity Layer")
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
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary",
													children: t("KI-Agenten", "AI Agents", "AI Agents")
												}),
												" → ",
												t("Marktforschung", "Market Research", "Nghiên cứu thị trường"),
												" → ",
												t("Content", "Content", "Nội dung"),
												" → ",
												t("Handel", "Commerce", "Thương mại"),
												" → ",
												t("eigene Produkte", "own products", "sản phẩm riêng")
											]
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
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📅 ", t("28. Juni 2026", "June 28, 2026", "28 Tháng 6, 2026")] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["⏱ 10 ", t("min", "min", "phút")] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold mb-2 group-hover:text-primary transition-colors",
										children: t("Die nächste Generation von LLMs: Was kommt nach GPT-4?", "The next generation of LLMs: what comes after GPT-4?", "Thế hệ LLM tiếp theo: điều gì sẽ đến sau GPT-4?")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: t("Eine Analyse der neuen Architekturen, Mixture of Experts (MoE) und wie lokale, spezialisierte Modelle die Cloud-Giganten herausfordern.", "An analysis of new architectures, Mixture of Experts (MoE), and how local, specialized models are challenging the cloud giants.", "Phân tích các kiến trúc mới, Mixture of Experts (MoE) và cách các mô hình chuyên biệt cục bộ đang thách thức các gã khổng lồ đám mây.")
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-primary font-medium shrink-0 flex items-center gap-1",
									children: [
										t("Artikel lesen", "Read article", "Đọc bài viết"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
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
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📅 ", t("15. Mai 2026", "May 15, 2026", "15 Tháng 5, 2026")] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["⏱ 8 ", t("min", "min", "phút")] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold mb-2 group-hover:text-primary transition-colors",
										children: t("WebAssembly & KI: Modelle direkt im Browser ausführen", "WebAssembly & AI: running models directly in the browser", "WebAssembly & AI: chạy mô hình trực tiếp trên trình duyệt")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: t("Wie WebAssembly (Wasm) und WebGPU es ermöglichen, leistungsstarke KI-Modelle ohne Serverkosten direkt auf dem Endgerät laufen zu lassen.", "How WebAssembly (Wasm) and WebGPU make it possible to run powerful AI models directly on the device, without server costs.", "Cách WebAssembly (Wasm) và WebGPU cho phép chạy các mô hình AI mạnh mẽ trực tiếp trên thiết bị mà không tốn chi phí máy chủ.")
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-primary font-medium shrink-0 flex items-center gap-1",
									children: [
										t("Artikel lesen", "Read article", "Đọc bài viết"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
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
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📅 ", t("02. April 2026", "April 2, 2026", "2 Tháng 4, 2026")] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["⏱ 14 ", t("min", "min", "phút")] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold mb-2 group-hover:text-primary transition-colors",
										children: t("Agentic Workflows: Wenn KI selbstständig handelt", "Agentic workflows: when AI acts on its own", "Agentic Workflows: Khi AI tự hành động")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: t("Über den Wandel von Chatbots zu autonomen Agenten-Systemen und wie sie komplette Unternehmensprozesse steuern.", "On the shift from chatbots to autonomous agent systems and how they control entire business processes.", "Về sự chuyển đổi từ chatbot sang hệ thống agent tự động và cách chúng điều khiển toàn bộ quy trình doanh nghiệp.")
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-primary font-medium shrink-0 flex items-center gap-1",
									children: [
										t("Artikel lesen", "Read article", "Đọc bài viết"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog",
							className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2",
							children: [
								t("Alle Artikel anzeigen", "View all articles", "Xem tất cả bài viết"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
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
