import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useLang } from "./LangContext-CD_fLab6.mjs";
import { C as Github, D as CodeXml, E as Cpu, M as ArrowUp, O as Cloud, P as ArrowRight, T as ExternalLink, c as Terminal, d as ShieldCheck, j as Bot, l as Sparkles, n as X, s as TriangleAlert, u as Shield } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Nav, t as Footer } from "./Footer-FuDUfcV_.mjs";
import { t as ParticleBackground } from "./ParticleBackground-CC7ssT2s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CsbIyd75.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScrollDots({ sections }) {
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const mid = window.innerHeight / 2;
			let current = 0;
			sections.forEach((s, i) => {
				const el = document.getElementById(s.id);
				if (el && el.getBoundingClientRect().top <= mid) current = i;
			});
			setActive(current);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [sections]);
	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Seitenbereiche",
		className: "fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex",
		children: sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => scrollTo(s.id),
			"aria-label": s.label,
			title: s.label,
			className: "group relative flex h-4 w-4 items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `rounded-full transition-all duration-300 ${i === active ? "h-3 w-3 bg-primary shadow-[0_0_10px_rgba(74,222,128,0.7)]" : "h-1.5 w-1.5 bg-muted-foreground/40 group-hover:h-2.5 group-hover:w-2.5 group-hover:bg-primary/70"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute right-6 whitespace-nowrap rounded-md border border-border bg-surface px-2 py-1 text-[11px] text-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100",
				children: s.label
			})]
		}, s.id))
	});
}
function useScrollDotSections() {
	const { t } = useLang();
	return [
		{
			id: "start",
			label: t("Start", "Home", "Trang chủ")
		},
		{
			id: "leistungen",
			label: t("Leistungen", "Services", "Dịch vụ")
		},
		{
			id: "tech",
			label: t("Tech-Stack", "Tech stack", "Công nghệ")
		},
		{
			id: "projekte",
			label: t("Projekte", "Projects", "Dự án")
		},
		{
			id: "kontakt",
			label: t("Kontakt", "Contact", "Liên hệ")
		}
	];
}
/**
* Broki-Produktkarte für den Hero (ersetzt die frühere KI-Fabrik-Slideshow).
* Zeigt Brokis Alleinstellung: eine KI, die als Sidebar im Browser-Tab sitzt und
* proaktiv warnt — 100 % lokal, DSGVO-konform. Verlinkt auf die Produktseite /broki.
* Hinweis (Positionierung): KEIN Raspberry Pi / Tailscale im Verkaufstext — das
* ist optionales Zusatzpaket, nicht Teil des Kern-Pitchs.
*/
function BrokiHeroCard() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
			ease: "easeOut"
		},
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-xl border border-border bg-surface/60 shadow-2xl backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-red-500/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-yellow-500/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-green-500/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-3 flex-1 truncate rounded-md bg-surface/80 px-3 py-1 font-mono text-xs text-muted-foreground",
						children: "mandanten-akte-2025.pdf"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden flex-1 space-y-2 p-4 sm:block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-3/4 rounded bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-full rounded bg-border/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-5/6 rounded bg-border/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-2 w-2/3 rounded bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-full rounded bg-border/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-4/5 rounded bg-border/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-2 w-1/2 rounded bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-full rounded bg-border/70" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full space-y-3 border-l border-border bg-background/50 p-4 sm:w-64",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm font-semibold",
									children: "Broki AI"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
									" ",
									t("Lokal", "Local", "Cục bộ")
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 8
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								delay: .5,
								duration: .5
							},
							className: "rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-yellow-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium",
										children: t("Prüfhinweis", "Alert", "Cảnh báo")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: t("Die USt-IdNr. scheint ungültig zu sein.", "The VAT ID appears to be invalid.", "Mã số thuế GTGT có vẻ không hợp lệ.")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-mono text-[10px] text-muted-foreground/70",
									children: [t("Quelle", "Source", "Nguồn"), ": §27a UStG"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border border-border bg-surface/60 p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-foreground",
								children: t("Antworten aus Ihrem lokalen Firmenwissen — nichts verlässt das Gerät.", "Answers from your local company knowledge — nothing leaves the device.", "Câu trả lời từ kiến thức nội bộ — không dữ liệu nào rời khỏi thiết bị.")
							})
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-col gap-3 rounded-xl border border-border bg-surface/40 p-4 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm font-semibold",
					children: "Broki AI"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] text-primary",
					children: "BrowserLLM"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 flex items-center gap-1.5 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }), t("100 % lokal im Browser · DSGVO · keine Cloud", "100% local in the browser · GDPR · no cloud", "100% cục bộ trong trình duyệt · GDPR · không đám mây")]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/broki",
				className: "inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
				children: [t("Broki entdecken", "Discover Broki", "Khám phá Broki"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})]
		})]
	});
}
var CODING_AGENT_BENCHMARKS = {
	updatedAt: "2026-07-26",
	sourceLabel: "Artificial Analysis",
	sourceUrl: "https://artificialanalysis.ai/agents/coding-agents",
	charts: [
		{
			key: "index",
			title: {
				de: "Kodierungsagentenindex",
				en: "Coding Agent Index",
				vi: "Chỉ số Agent lập trình"
			},
			subtitle: {
				de: "Höher ist besser",
				en: "Higher is better",
				vi: "Càng cao càng tốt"
			},
			unit: "",
			accent: "primary",
			entries: [
				{
					name: "Claude Code (Opus 5)",
					value: 67
				},
				{
					name: "Codex CLI (GPT-5.6)",
					value: 67
				},
				{
					name: "Grok Code (xAI)",
					value: 66
				},
				{
					name: "Gemini CLI (Pro)",
					value: 61
				},
				{
					name: "Cursor Composer",
					value: 54
				}
			]
		},
		{
			key: "time",
			title: {
				de: "Zeit pro Aufgabe",
				en: "Time per Task",
				vi: "Thời gian mỗi tác vụ"
			},
			subtitle: {
				de: "Tiefer ist besser",
				en: "Lower is better",
				vi: "Càng thấp càng tốt"
			},
			unit: "m",
			accent: "blue",
			entries: [
				{
					name: "Cursor Composer",
					value: 6.8
				},
				{
					name: "Codex CLI (GPT-5.6)",
					value: 10.2
				},
				{
					name: "Grok Code (xAI)",
					value: 10.8
				},
				{
					name: "Gemini CLI (Pro)",
					value: 12.6
				},
				{
					name: "OpenCode",
					value: 16.5
				}
			]
		},
		{
			key: "cost",
			title: {
				de: "Kosten pro Aufgabe",
				en: "Cost per Task",
				vi: "Chi phí mỗi tác vụ"
			},
			subtitle: {
				de: "USD · tiefer ist besser",
				en: "USD · lower is better",
				vi: "USD · càng thấp càng tốt"
			},
			unit: "$",
			accent: "amber",
			entries: [
				{
					name: "DeepSeek",
					value: .27
				},
				{
					name: "Cursor Composer",
					value: .55
				},
				{
					name: "OpenCode",
					value: 1.43
				},
				{
					name: "Grok Code (xAI)",
					value: 2
				},
				{
					name: "Gemini CLI (Pro)",
					value: 2.59
				}
			]
		}
	]
};
var ACCENT_CLASSES = {
	primary: {
		text: "text-primary",
		bar: "bg-primary",
		track: "bg-primary/10"
	},
	blue: {
		text: "text-blue-400",
		bar: "bg-blue-400",
		track: "bg-blue-400/10"
	},
	amber: {
		text: "text-amber-400",
		bar: "bg-amber-400",
		track: "bg-amber-400/10"
	}
};
function formatValue(value, unit) {
	const num = Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0$/, "");
	return unit === "$" ? `${num} $` : `${num}${unit}`;
}
function ChartCard({ chart }) {
	const { t } = useLang();
	const colors = ACCENT_CLASSES[chart.accent];
	const max = Math.max(...chart.entries.map((e) => e.value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface/50 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-sm ${colors.bar}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: t(chart.title.de, chart.title.en, chart.title.vi)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mb-5",
				children: t(chart.subtitle.de, chart.subtitle.en, chart.subtitle.vi)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: chart.entries.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-2 mb-1 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate text-muted-foreground",
						children: entry.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `shrink-0 font-medium ${colors.text}`,
						children: formatValue(entry.value, chart.unit)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `h-1.5 w-full rounded-full overflow-hidden ${colors.track}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: 0 },
						whileInView: { width: `${entry.value / max * 100}%` },
						viewport: { once: true },
						transition: {
							duration: .8,
							delay: i * .05,
							ease: "easeOut"
						},
						className: `h-full rounded-full ${colors.bar}`
					})
				})] }, entry.name))
			})
		]
	});
}
function CodingAgentBenchmarks() {
	const { t, lang } = useLang();
	const data = CODING_AGENT_BENCHMARKS;
	const locale = lang === "DE" ? "de-DE" : lang === "VI" ? "vi-VN" : "en-US";
	const updatedLabel = new Date(data.updatedAt).toLocaleDateString(locale, {
		day: "2-digit",
		month: "2-digit",
		year: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-4 md:grid-cols-3",
		children: data.charts.map((chart) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, { chart }, chart.key))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			t("Manuell gepflegt", "Manually maintained", "Cập nhật thủ công"),
			" · ",
			t("Stand", "As of", "Cập nhật"),
			": ",
			updatedLabel
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: data.sourceUrl,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "inline-flex items-center gap-1 hover:text-foreground",
			children: [
				t("Quelle", "Source", "Nguồn"),
				": ",
				data.sourceLabel,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })
			]
		})]
	})] });
}
var RATING = {
	value: "4.9/5",
	count: 32,
	sourceLabel: "",
	sourceUrl: ""
};
var TESTIMONIALS = [];
function AiNewsTabs({ payload }) {
	const { t, lang } = useLang();
	const [activeTab, setActiveTab] = (0, import_react.useState)("agentic");
	const categories = [
		{
			id: "agentic",
			label: "Agentic AI"
		},
		{
			id: "llm",
			label: t("LLM & Modelle", "LLMs & Models", "LLM & Mô hình")
		},
		{
			id: "business",
			label: t("KI in Unternehmen", "AI in Business", "AI trong doanh nghiệp")
		},
		{
			id: "security",
			label: "Security"
		},
		{
			id: "gpu",
			label: t("GPU-Markt", "GPU Market", "Thị trường GPU")
		},
		{
			id: "webllm",
			label: "WebLLM & WebAssembly"
		}
	];
	const visibleCategories = payload === null ? categories : categories.filter((c) => payload.items.some((item) => item.category === c.id));
	(0, import_react.useEffect)(() => {
		if (payload !== null && visibleCategories.length > 0 && !visibleCategories.some((c) => c.id === activeTab)) setActiveTab(visibleCategories[0].id);
	}, [payload]);
	const locale = lang === "DE" ? "de-DE" : lang === "VI" ? "vi-VN" : "en-US";
	const formatDate = (iso) => {
		const date = new Date(iso);
		return Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString(locale, {
			day: "2-digit",
			month: "2-digit",
			year: "numeric"
		});
	};
	const activeItems = (payload?.items ?? []).filter((item) => item.category === activeTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background/40 rounded-xl border border-border p-6 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scrollbar-hidden flex flex-nowrap overflow-x-auto whitespace-nowrap mb-6 text-xs font-medium border-b border-border",
			children: visibleCategories.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setActiveTab(tab.id),
				className: tab.id === activeTab ? "-mb-px rounded-t-lg border border-border border-b-background bg-primary/10 px-3 py-2 text-primary" : "rounded-t-lg border border-transparent px-3 py-2 text-muted-foreground hover:bg-surface/50 hover:text-foreground",
				children: tab.label
			}, tab.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 8
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .25,
				ease: "easeOut"
			},
			className: "text-sm",
			children: payload === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-4 text-muted-foreground animate-pulse",
				children: t("Lade Live-Feed...", "Loading Live-Feed...", "Đang tải dữ liệu...")
			}) : activeItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-4 text-muted-foreground",
				children: t("Aktuell keine Meldungen in dieser Kategorie.", "No current news in this category.", "Hiện chưa có tin trong chuyên mục này.")
			}) : activeItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: item.url,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "group flex items-center justify-between gap-4 py-2.5 border-b border-border/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 text-xs text-green-500/80",
						children: "▲"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate transition-colors group-hover:text-primary",
						children: item.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "shrink-0 text-xs text-muted-foreground",
					children: [
						item.source,
						" · ",
						formatDate(item.publishedAt)
					]
				})]
			}, item.url))
		}, activeTab)]
	});
}
function TechStackTabs() {
	const { t } = useLang();
	const [activeTab, setActiveTab] = (0, import_react.useState)("agentic");
	const levelLabel = (level) => level === 3 ? t("Experte", "Expert", "Chuyên gia") : level === 2 ? t("Fortgeschritten", "Advanced", "Thành thạo") : t("Vertraut", "Familiar", "Quen thuộc");
	const categories = [
		{
			id: "agentic",
			label: "Agentic Coding",
			tools: [
				{
					name: "Open Claw",
					level: 2
				},
				{
					name: "Codex",
					level: 3
				},
				{
					name: "Claude Code",
					level: 3
				},
				{
					name: "Cody",
					level: 2
				},
				{
					name: "OpenHands",
					level: 2
				},
				{
					name: "Hermes",
					level: 2
				},
				{
					name: "LangGraph",
					level: 2
				},
				{
					name: "Aider",
					level: 3
				},
				{
					name: "Cline",
					level: 2
				},
				{
					name: "Azad-Code",
					level: 2
				}
			]
		},
		{
			id: "ki",
			label: t("KI & Data", "AI & Data", "AI & Data"),
			tools: [
				{
					name: "Ollama",
					level: 3
				},
				{
					name: "n8n",
					level: 3
				},
				{
					name: "Node-RED",
					level: 2
				},
				{
					name: "Qdrant",
					level: 1
				},
				{
					name: "PostgreSQL",
					level: 2
				},
				{
					name: "MSSQL",
					level: 3
				},
				{
					name: "Oracle DB",
					level: 2
				},
				{
					name: "Hindsight",
					level: 1
				},
				{
					name: "Obsidian",
					level: 2
				},
				{
					name: "Albert AI (Agorum)",
					level: 1
				}
			]
		},
		{
			id: "cloud",
			label: "Cloudcomputing",
			tools: [
				{
					name: "Azure / Entra ID",
					level: 2
				},
				{
					name: "AWS",
					level: 2
				},
				{
					name: "Docker",
					level: 2
				},
				{
					name: "Docker Swarm / Dokploy",
					level: 2
				},
				{
					name: "K3s (Kubernetes)",
					level: 2
				},
				{
					name: "Ansible / Semaphore",
					level: 2
				},
				{
					name: "Bicep / ARM",
					level: 2
				},
				{
					name: "PowerShell",
					level: 3
				},
				{
					name: "Windows Server (AD, GPO)",
					level: 3
				},
				{
					name: "Hyper-V",
					level: 3
				},
				{
					name: "GitHub / Gitea",
					level: 3
				},
				{
					name: "Endpoint Manager / SCCM",
					level: 2
				}
			]
		},
		{
			id: "backend",
			label: "Backend",
			tools: [
				{
					name: "C# / .NET",
					level: 3
				},
				{
					name: "ASP.NET MVC",
					level: 3
				},
				{
					name: "Python",
					level: 2
				},
				{
					name: "FastAPI",
					level: 2
				},
				{
					name: "VBA",
					level: 3
				},
				{
					name: "MCP-Server",
					level: 2
				},
				{
					name: "REST API / CLI",
					level: 3
				},
				{
					name: "Dolibarr DMS",
					level: 2
				}
			]
		},
		{
			id: "frontend",
			label: "Frontend",
			tools: [
				{
					name: "JavaScript",
					level: 3
				},
				{
					name: "jQuery",
					level: 3
				},
				{
					name: "HTML & CSS",
					level: 3
				},
				{
					name: "React / TanStack",
					level: 2
				}
			]
		},
		{
			id: "security",
			label: "Security",
			tools: [
				{
					name: "Authentik (IAM)",
					level: 1
				},
				{
					name: "Azure Entra ID / IAM",
					level: 2
				},
				{
					name: "Cloudflare Zero-Trust",
					level: 2
				},
				{
					name: "Tailscale",
					level: 2
				},
				{
					name: "Traefik",
					level: 2
				},
				{
					name: t("GPO & Berechtigungskonzepte", "GPO & permission concepts", "GPO & phân quyền"),
					level: 3
				},
				{
					name: "Acronis Backup",
					level: 2
				}
			]
		}
	];
	const activeTools = categories.find((tab) => tab.id === activeTab)?.tools ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background/40 rounded-xl border border-border p-6 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scrollbar-hidden flex flex-nowrap overflow-x-auto whitespace-nowrap mb-8 text-xs font-medium border-b border-border",
			children: categories.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setActiveTab(tab.id),
				className: tab.id === activeTab ? "-mb-px rounded-t-lg border border-border border-b-background bg-primary/10 px-3 py-2 text-primary" : "rounded-t-lg border border-transparent px-3 py-2 text-muted-foreground hover:bg-surface/50 hover:text-foreground",
				children: tab.label
			}, tab.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 8
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .25,
				ease: "easeOut"
			},
			className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm",
			children: activeTools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between py-2 border-b border-border/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tool.name })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex gap-1",
						children: [
							1,
							2,
							3
						].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${step <= tool.level ? "bg-primary" : "bg-border"}` }, step))
					}), levelLabel(tool.level)]
				})]
			}, tool.name))
		}, activeTab)]
	});
}
function Home() {
	const { t } = useLang();
	const dotSections = useScrollDotSections();
	const smallProjects = [
		{
			tag: t("KI-Automatisierung", "AI Automation", "Tự động hóa AI"),
			tagColor: "text-green-500 bg-green-500/10",
			tag2: t("Immobilien", "Real Estate", "Bất động sản"),
			title: t("Immobilien-Verwaltung", "Real Estate Management", "Quản lý bất động sản"),
			desc: t("KI-gesteuertes Agenten-System: Agent für den Einkauf, spezialisierter Agent für Auswertung und Optimierung sowie ein Agent für den Verkauf.", "AI-driven agent system: an agent for acquisition, a specialized agent for evaluation and optimization, and an agent for sales.", "Hệ thống agent điều khiển bởi AI: agent cho thu mua, agent chuyên biệt cho đánh giá và tối ưu, cùng một agent cho bán hàng."),
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
			desc: t("Automatisierte Rechnungs- und Belegverarbeitung, Vorkontierung sowie Auswertungen speziell für Einzelhändler und Restaurant-Betreiber.", "Automated invoice and receipt processing, pre-accounting, and reporting tailored for retailers and restaurant operators.", "Xử lý hóa đơn và chứng từ tự động, hạch toán sơ bộ và báo cáo dành riêng cho nhà bán lẻ và chủ nhà hàng."),
			status: t("Produktion", "Production", "Đang vận hành"),
			goals: t("Automatisierung der Vorkontierung und Extraktion von Rechnungsdaten zur Entlastung der Buchhaltung.", "Automating pre-accounting and invoice data extraction to relieve the accounting department.", "Tự động hóa hạch toán sơ bộ và trích xuất dữ liệu hóa đơn để giảm tải cho bộ phận kế toán."),
			challenges: t("Zuverlässige Erkennung von Handschriften, zerknitterten Belegen und diversen Rechnungsformaten (OCR + LLM).", "Reliable recognition of handwriting, crumpled receipts, and diverse invoice formats (OCR + LLM).", "Nhận dạng đáng tin cậy chữ viết tay, biên lai nhàu nát và nhiều định dạng hóa đơn khác nhau (OCR + LLM)."),
			results: t("Über 95% Extraktionsgenauigkeit und Reduktion der Steuerberaterkosten um ca. 40% pro Mandant.", "Over 95% extraction accuracy and roughly 40% reduction in tax advisor costs per client.", "Độ chính xác trích xuất hơn 95% và giảm khoảng 40% chi phí tư vấn thuế cho mỗi khách hàng.")
		}
	];
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(null);
	const [aiNews, setAiNews] = (0, import_react.useState)(null);
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
		let cancelled = false;
		fetch("/api/ai-news").then((response) => response.json()).then((data) => {
			if (!cancelled && data.items?.length) setAiNews(data);
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, []);
	const fallbackTopics = [
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
	const news = aiNews?.items?.length ? aiNews.items.slice(0, 14) : fallbackTopics;
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollDots, { sections: dotSections }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "start",
				className: "relative mx-auto max-w-6xl px-6 pt-20 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/80 to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center relative z-10",
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
										className: "text-primary",
										children: t("liefert", "delivers", "kết quả")
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg text-muted-foreground",
								children: t("Hi, ich bin Tiep — IT & KI Spezialist. Ich konzipiere und baue Cloud-Plattformen, integriere KI sicher (DSGVO-konform, AI Act, NIS2 auditierbar) in bestehende Produkte und liefere produktionsreifen Code.", "Hi, I'm Tiep — IT & AI Specialist. I design and build Cloud platforms, integrate AI securely (GDPR-compliant, AI Act, NIS2 auditable) into existing products, and deliver production-ready code.", "Xin chào, tôi là Tiệp — Chuyên viên IT & AI. Tôi thiết kế và xây dựng nền tảng đám mây, tích hợp AI bảo mật và cung cấp mã nguồn sẵn sàng cho sản xuất.")
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
									RATING.sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: RATING.sourceUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex items-center gap-1 underline-offset-4 hover:text-foreground hover:underline",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-yellow-500",
												children: "★"
											}),
											" ",
											RATING.value,
											" · ",
											RATING.count,
											" ",
											t("Bewertungen", "Reviews", "Đánh giá"),
											RATING.sourceLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-muted-foreground/70",
												children: [
													"(",
													RATING.sourceLabel,
													")"
												]
											}) : null
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-yellow-500",
												children: "★"
											}),
											" ",
											RATING.value,
											" · ",
											RATING.count,
											" ",
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
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrokiHeroCard, {})]
					})
				]
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
				id: "tech",
				className: "mx-auto max-w-6xl px-6 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl border border-border bg-surface/30 p-8 md:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]",
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
										children: t("Architektur konzipiert für DSGVO, AI Act und NIS2 Compliance durch Auditing, Security & Privacy AI Layer.", "Architecture designed for GDPR, AI Act and NIS2 compliance through Auditing, Security & Privacy AI Layer.", "Kiến trúc được thiết kế cho sự tuân thủ GDPR, AI Act và NIS2 qua lớp Auditing, bảo mật và riêng tư AI.")
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStackTabs, {})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "coding-benchmarks",
				className: "mx-auto max-w-6xl px-6 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-primary",
							children: t("Coding-Agenten im Vergleich", "Coding Agents Compared", "So sánh Agent lập trình")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl md:text-3xl font-semibold",
							children: t("Wie gut sind aktuelle KI-Coding-Agenten?", "How good are today's AI coding agents?", "Các Agent lập trình AI hiện tại tốt đến đâu?")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodingAgentBenchmarks, {})]
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-2xl border border-border bg-surface/30 overflow-hidden mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 p-8 md:p-12",
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
										t("mit getrennten Rollen, wobei jeder Agent ein hochspezialisierter Experte in seinem Bereich ist (z.B. Planner, Architect, DevOps, Security, SEO, Support).", "with separate roles, where each agent is a highly specialized expert in its domain (e.g. Planner, Architect, DevOps, Security, SEO, Support).", "với các vai trò riêng biệt, mỗi agent là chuyên gia chuyên sâu trong lĩnh vực của mình (ví dụ: Planner, Architect, DevOps, Security, SEO, Support).")
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
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://trace-ai.vuxuantiep.de/",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90",
										children: [
											t("Produkt ansehen", "View product", "Xem sản phẩm"),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: t("Demo-Version in Vorschau", "Demo version in preview", "Bản demo xem trước")
									})]
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
						})]
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
									type: "button",
									"aria-label": t("Schließen", "Close", "Đóng"),
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
			TESTIMONIALS.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "stimmen",
				className: "mx-auto max-w-6xl px-6 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: t("Kundenstimmen", "Testimonials", "Đánh giá khách hàng")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl md:text-4xl font-semibold",
						children: t("Was Kunden sagen", "What clients say", "Khách hàng nói gì")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: TESTIMONIALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "rounded-xl border border-border bg-surface/50 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: [
								"„",
								t(item.quote.de, item.quote.en, item.quote.vi),
								"\""
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-xs text-muted-foreground",
								children: [
									item.role,
									" · ",
									item.company
								]
							})]
						})]
					}, item.name))
				})]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-5xl px-6 relative z-20 -mt-12 mb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "overflow-hidden rounded-xl border border-border/50 bg-[#0a0a0a]/80 backdrop-blur-md shadow-2xl py-3 relative flex items-center",
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
						margin: "-50px"
					},
					transition: { duration: .6 },
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "ai-news",
				className: "mx-auto max-w-5xl px-6 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						margin: "-50px"
					},
					transition: {
						duration: .6,
						ease: "easeOut"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-2 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-primary",
							children: "AI-News"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl md:text-3xl font-semibold",
							children: t("Aktuelles aus der KI-Welt", "Latest from the AI world", "Tin mới từ thế giới AI")
						})] }), aiNews?.updatedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [
								t("Stand", "Updated", "Cập nhật"),
								": ",
								new Date(aiNews.updatedAt).toLocaleDateString("de-DE", {
									day: "2-digit",
									month: "2-digit",
									year: "numeric"
								}),
								" · ",
								t("täglich 7 Uhr aktualisiert", "refreshed daily at 7 AM", "cập nhật hằng ngày lúc 7 giờ")
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiNewsTabs, { payload: aiNews })]
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
