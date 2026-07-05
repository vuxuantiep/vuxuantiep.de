import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useLang } from "./LangContext-DlHRSoPA.mjs";
import { S as ArrowRight, a as Search } from "../_libs/lucide-react.mjs";
import { n as Nav, t as Footer } from "./Footer-nJJ7xBAV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-x9o1G6Nt.js
var import_jsx_runtime = require_jsx_runtime();
function Blog() {
	const { t } = useLang();
	const featured = {
		tag: t("LLM · Praxis", "LLM · Practice", "LLM · Thực tế"),
		date: t("12. Juni 2026 · 8 min", "June 12, 2026 · 8 min", "12 Tháng 6, 2026 · 8 phút"),
		title: t("RAG in Produktion: 7 Lektionen aus echten Projekten", "RAG in production: 7 lessons from real projects", "RAG trong thực tế: 7 bài học từ các dự án thật"),
		excerpt: t("Retrieval-Augmented Generation klingt einfach — bis man es betreibt. Hier sind sieben Erkenntnisse, die ich in den letzten zwei Jahren bei Produktiv-Deployments gesammelt habe: von Chunk-Sizing über Hybrid-Search bis zu Eval-Pipelines.", "Retrieval-Augmented Generation sounds simple — until you run it in production. Here are seven lessons I've gathered over the last two years of production deployments: from chunk sizing to hybrid search to eval pipelines.", "Retrieval-Augmented Generation nghe có vẻ đơn giản — cho đến khi bạn vận hành nó trong thực tế. Đây là bảy bài học tôi đúc kết được trong hai năm triển khai sản xuất: từ chunk-sizing, hybrid-search cho đến eval-pipeline.")
	};
	const posts = [
		{
			tag: "Edge",
			date: "28.05.2026",
			title: t("Cloudflare Workers vs. Lambda — der ehrliche Vergleich", "Cloudflare Workers vs. Lambda — the honest comparison", "Cloudflare Workers vs. Lambda — so sánh thẳng thắn"),
			excerpt: t("Cold Starts, Pricing, DX. Was wann wirklich besser ist.", "Cold starts, pricing, DX. What's actually better, and when.", "Cold start, giá cả, trải nghiệm dev. Cái nào thực sự tốt hơn và khi nào.")
		},
		{
			tag: "Agents",
			date: "14.05.2026",
			title: t("Multi-Agent Systeme mit Tool-Calling: ein Bauplan", "Multi-agent systems with tool calling: a blueprint", "Hệ thống đa tác nhân với tool-calling: một bản thiết kế"),
			excerpt: t("Wie man Agent-Orchestrierung baut, die nicht im Loop landet.", "How to build agent orchestration that doesn't get stuck in a loop.", "Cách xây dựng hệ thống điều phối agent không bị kẹt trong vòng lặp.")
		},
		{
			tag: "DevEx",
			date: "02.05.2026",
			title: t("TanStack Start in der Praxis: nach 3 Monaten", "TanStack Start in practice: after 3 months", "TanStack Start trong thực tế: sau 3 tháng"),
			excerpt: t("Was funktioniert, was nervt, was ich an Next.js vermisse.", "What works, what's annoying, what I miss from Next.js.", "Điều gì hiệu quả, điều gì phiền, và tôi nhớ gì ở Next.js.")
		},
		{
			tag: "KI · Ethik",
			date: "18.04.2026",
			title: t("EU AI Act für Entwickler: was du wirklich tun musst", "EU AI Act for developers: what you actually need to do", "EU AI Act cho lập trình viên: những gì bạn thực sự cần làm"),
			excerpt: t("Praktischer Leitfaden ohne juristischen Ballast.", "A practical guide without the legal jargon.", "Hướng dẫn thực tế, không rườm rà pháp lý.")
		},
		{
			tag: "Vector DB",
			date: "05.04.2026",
			title: t("pgvector vs. Pinecone vs. Qdrant — Benchmarks 2026", "pgvector vs. Pinecone vs. Qdrant — 2026 benchmarks", "pgvector vs. Pinecone vs. Qdrant — Benchmark 2026"),
			excerpt: t("Latenz, Recall, Kosten. Mit reproduzierbarem Setup.", "Latency, recall, cost. With a reproducible setup.", "Độ trễ, recall, chi phí. Với thiết lập có thể tái tạo.")
		},
		{
			tag: "Tooling",
			date: "22.03.2026",
			title: t("Claude Code, Cursor, Continue — Workflows im Vergleich", "Claude Code, Cursor, Continue — comparing workflows", "Claude Code, Cursor, Continue — so sánh quy trình làm việc"),
			excerpt: t("Drei Wochen, drei Tools, ein ehrliches Fazit.", "Three weeks, three tools, one honest verdict.", "Ba tuần, ba công cụ, một kết luận thẳng thắn.")
		}
	];
	const tags = [
		t("Alle", "All", "Tất cả"),
		"LLM",
		"Edge",
		"Agents",
		"Vector DB",
		"DevEx",
		t("KI · Ethik", "AI · Ethics", "AI · Đạo đức"),
		"Tooling"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-6 pt-20 pb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: "Blog"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight",
						children: [
							t("KI & neue", "AI & emerging", "AI & công nghệ"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							t("Technologien.", "technologies.", "mới.")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-muted-foreground",
						children: t("Notizen aus der Praxis: LLMs, Edge-Computing, Cloud-Architektur und Tooling für moderne Software-Teams.", "Notes from practice: LLMs, edge computing, cloud architecture, and tooling for modern software teams.", "Ghi chú từ thực tế: LLM, edge computing, kiến trúc đám mây và công cụ cho các đội ngũ phần mềm hiện đại.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col md:flex-row gap-4 md:items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: tags.map((tag, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${i === 0 ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"}`,
								children: tag
							}, tag))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative max-w-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: t("Artikel suchen…", "Search articles…", "Tìm bài viết…"),
								className: "w-full rounded-md border border-border bg-surface/50 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/50"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-6 pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "group block rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-surface/50 to-accent/10 p-10 hover:border-primary/40 transition-all",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-[1fr_auto] md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-primary/20 px-2 py-0.5 text-primary font-medium",
									children: t("Featured", "Featured", "Nổi bật")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										featured.tag,
										" · ",
										featured.date
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl md:text-4xl font-semibold group-hover:text-primary transition-colors",
								children: featured.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground max-w-2xl",
								children: featured.excerpt
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 text-sm text-primary",
							children: [
								t("Artikel lesen", "Read article", "Đọc bài viết"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-6 pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "group flex flex-col rounded-xl border border-border bg-surface/40 p-6 hover:border-primary/40 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-primary/15 px-2 py-0.5 text-primary font-medium",
									children: p.tag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.date })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-semibold group-hover:text-primary transition-colors",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground flex-1",
								children: p.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground",
								children: [
									t("Weiterlesen", "Continue reading", "Đọc tiếp"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								]
							})
						]
					}, p.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-md border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium hover:bg-surface",
						children: t("Ältere Artikel laden", "Load older articles", "Tải bài viết cũ hơn")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Blog as component };
