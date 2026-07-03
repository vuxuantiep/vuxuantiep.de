import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Search, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Nav, t as Footer } from "./Footer-D4Ek-74e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-tiE7-cl_.js
var import_jsx_runtime = require_jsx_runtime();
var featured = {
	tag: "LLM · Praxis",
	date: "12. Juni 2026 · 8 min",
	title: "RAG in Produktion: 7 Lektionen aus echten Projekten",
	excerpt: "Retrieval-Augmented Generation klingt einfach — bis man es betreibt. Hier sind sieben Erkenntnisse, die ich in den letzten zwei Jahren bei Produktiv-Deployments gesammelt habe: von Chunk-Sizing über Hybrid-Search bis zu Eval-Pipelines."
};
var posts = [
	{
		tag: "Edge",
		date: "28.05.2026",
		title: "Cloudflare Workers vs. Lambda — der ehrliche Vergleich",
		excerpt: "Cold Starts, Pricing, DX. Was wann wirklich besser ist."
	},
	{
		tag: "Agents",
		date: "14.05.2026",
		title: "Multi-Agent Systeme mit Tool-Calling: ein Bauplan",
		excerpt: "Wie man Agent-Orchestrierung baut, die nicht im Loop landet."
	},
	{
		tag: "DevEx",
		date: "02.05.2026",
		title: "TanStack Start in der Praxis: nach 3 Monaten",
		excerpt: "Was funktioniert, was nervt, was ich an Next.js vermisse."
	},
	{
		tag: "KI · Ethik",
		date: "18.04.2026",
		title: "EU AI Act für Entwickler: was du wirklich tun musst",
		excerpt: "Praktischer Leitfaden ohne juristischen Ballast."
	},
	{
		tag: "Vector DB",
		date: "05.04.2026",
		title: "pgvector vs. Pinecone vs. Qdrant — Benchmarks 2026",
		excerpt: "Latenz, Recall, Kosten. Mit reproduzierbarem Setup."
	},
	{
		tag: "Tooling",
		date: "22.03.2026",
		title: "Claude Code, Cursor, Continue — Workflows im Vergleich",
		excerpt: "Drei Wochen, drei Tools, ein ehrliches Fazit."
	}
];
var tags = [
	"Alle",
	"LLM",
	"Edge",
	"Agents",
	"Vector DB",
	"DevEx",
	"KI · Ethik",
	"Tooling"
];
function Blog() {
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
							"KI & neue",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Technologien."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-muted-foreground",
						children: "Notizen aus der Praxis: LLMs, Edge-Computing, Cloud-Architektur und Tooling für moderne Software-Teams."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col md:flex-row gap-4 md:items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: tags.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: `rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${i === 0 ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"}`,
								children: t
							}, t))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative max-w-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: "Artikel suchen…",
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
									children: "Featured"
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
							children: ["Artikel lesen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })]
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
								children: ["Weiterlesen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}, p.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-md border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium hover:bg-surface",
						children: "Ältere Artikel laden"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Blog as component };
