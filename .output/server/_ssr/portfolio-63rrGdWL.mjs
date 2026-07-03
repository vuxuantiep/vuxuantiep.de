import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowUpRight, t as X, u as ExternalLink } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Nav, t as Footer } from "./Footer-D4Ek-74e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-63rrGdWL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var projects = [
	{
		tag: "KI · SaaS",
		title: "Helio Copilot",
		client: "FinTech Scale-up",
		desc: "RAG-basierter Support-Agent über 2 Mio. Tickets. Antwortzeit von 4 h auf 12 s.",
		stack: [
			"Next.js",
			"OpenAI",
			"pgvector"
		],
		metric: "−87% Ticket-Backlog",
		color: "from-primary/30 to-accent/20",
		goals: "Reduzierung der Support-Aufwände und Beschleunigung der Antwortzeiten im 1st-Level-Support durch Automatisierung wiederkehrender Anfragen.",
		challenges: "Sichere Anbindung an Altsysteme mit komplexen Berechtigungsstrukturen, Minimierung von Halluzinationen bei regulatorisch kritischen Fintech-Themen.",
		results: "Reduktion der Ticket-Bearbeitungszeit um 87%, Antwortzeit von 4 Stunden auf durchschnittlich 12 Sekunden gesenkt, hohe Kundenzufriedenheit."
	},
	{
		tag: "Cloud",
		title: "Aurora Platform",
		client: "B2B Logistik",
		desc: "Multi-Region AWS-Infrastruktur mit Event-Driven Architecture. 99.99% Uptime SLA.",
		stack: [
			"AWS CDK",
			"Kafka",
			"DynamoDB"
		],
		metric: "10× Durchsatz",
		color: "from-accent/30 to-primary/20",
		goals: "Modernisierung einer monolithischen Logistik-Plattform hin zu einer hochverfügbaren, skalierbaren Cloud-Architektur.",
		challenges: "Zero-Downtime Migration von On-Premise-Datenbanken zu DynamoDB, Event-Synchronisation über mehrere AWS-Regionen.",
		results: "Erfolgreiche Skalierung für das 10-fache Transaktionsvolumen, Erreichen der 99.99% SLA, signifikante Reduktion der operativen Kosten."
	},
	{
		tag: "Web",
		title: "Northwind Studio",
		client: "Designagentur",
		desc: "Headless CMS + Edge-Rendering. Lighthouse 100 / 100 / 100 / 100.",
		stack: [
			"TanStack",
			"Sanity",
			"CF Workers"
		],
		metric: "1.2s LCP global",
		color: "from-primary/20 to-accent/30",
		goals: "Neugestaltung und technische Optimierung einer Agentur-Website mit Fokus auf maximale Performance und SEO.",
		challenges: "Darstellung von hochauflösenden Medieninhalten bei gleichzeitig extrem schnellen Ladezeiten global (Edge Delivery).",
		results: "Lighthouse Scores von 100/100/100/100, Largest Contentful Paint (LCP) weltweit unter 1.2 Sekunden, 40% mehr Inbound Leads."
	},
	{
		tag: "KI · Tooling",
		title: "PromptForge",
		client: "Open Source",
		desc: "Prompt-Versioning und A/B-Testing für LLM-Pipelines. 4k Stars auf GitHub.",
		stack: [
			"TypeScript",
			"tRPC",
			"Postgres"
		],
		metric: "4.2k ⭐",
		color: "from-accent/20 to-primary/30",
		goals: "Entwicklung eines Open-Source-Tools zur Verwaltung, Versionierung und systematischen Evaluierung von LLM-Prompts für Entwicklerteams.",
		challenges: "Nahtlose Integration in bestehende CI/CD-Pipelines, performante Speicherung großer Prompt-Evaluation-Datensätze.",
		results: "Über 4.200 GitHub Stars, Adoption in dutzenden Enterprise-Teams, etablierter Standard für Prompt-Engineering Workflows."
	},
	{
		tag: "Cloud",
		title: "Polaris ETL",
		client: "Healthcare",
		desc: "HIPAA-konforme Daten-Pipelines auf GCP. Migration von 400 GB legacy ETL.",
		stack: [
			"GCP",
			"Dataflow",
			"BigQuery"
		],
		metric: "−62% Kosten",
		color: "from-primary/30 to-accent/10",
		goals: "Zentralisierung und Migration historischer Gesundheitsdaten in ein modernes, HIPAA-konformes Data Warehouse zur Forschung.",
		challenges: "Strenge Datenschutzvorgaben (HIPAA, DSGVO), Deduplizierung fehlerhafter Datensätze aus 15 verschiedenen Legacy-Systemen.",
		results: "62% Einsparung bei Infrastrukturkosten, sichere und zentrale Datenverfügbarkeit für Data-Science Teams in nahezu Echtzeit."
	},
	{
		tag: "Web · KI",
		title: "Lumen Editor",
		client: "MediaTech",
		desc: "Echtzeit-Kollaborativer Editor mit KI-Vorschlägen. Y.js + LLM-Streaming.",
		stack: [
			"React",
			"Yjs",
			"Claude"
		],
		metric: "12k MAU",
		color: "from-accent/30 to-primary/10",
		goals: "Aufbau eines webbasierten Text-Editors mit kollaborativen Echtzeit-Features und intelligenter Schreibunterstützung durch KI.",
		challenges: "Konfliktfreie Synchronisation (CRDTs) bei gleichzeitiger Textgenerierung durch LLM-Streams im selben Dokument.",
		results: "Skalierung auf 12.000 monatlich aktive Nutzer, hohe Retention-Rate durch nahtloses KI-gestütztes Co-Writing-Erlebnis."
	}
];
function Portfolio() {
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(null);
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
				className: "mx-auto max-w-6xl px-6 pt-20 pb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: "Portfolio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight max-w-3xl",
						children: [
							"Ausgewählte Arbeiten",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"der letzten ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "5 Jahre"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-muted-foreground",
						children: "Eine Auswahl produktiver Projekte für Startups, Scale-ups und Mittelstand. Mehr auf Anfrage unter NDA."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-6 pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => setSelectedProject(p),
						className: "group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-8 hover:border-primary/40 transition-all cursor-pointer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 -z-10 bg-gradient-to-br ${p.color} opacity-40 group-hover:opacity-70 transition-opacity` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-wider text-primary",
										children: p.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 text-2xl font-semibold",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground",
										children: p.client
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm text-muted-foreground",
								children: p.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-background/60 px-2 py-1 text-xs font-mono text-muted-foreground",
										children: s
									}, s))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium text-primary",
									children: p.metric
								})]
							})
						]
					}, p.title))
				})
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
					className: "relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-surface p-6 md:p-10 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedProject(null),
							className: "absolute right-6 top-6 rounded-full p-2 bg-background border border-border text-muted-foreground hover:text-foreground transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs uppercase tracking-wider text-primary",
											children: selectedProject.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground",
											children: selectedProject.client
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl md:text-4xl font-display font-semibold mb-6",
									children: selectedProject.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2 mb-8",
									children: [selectedProject.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-primary/10 px-3 py-1.5 text-xs font-mono text-primary border border-primary/20",
										children: s
									}, s)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded bg-accent/10 px-3 py-1.5 text-xs font-mono text-accent border border-accent/20",
										children: ["Metric: ", selectedProject.metric]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-lg font-semibold mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), " Zielsetzung"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground leading-relaxed",
									children: selectedProject.goals
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-lg font-semibold mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }), " Technische Herausforderungen"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground leading-relaxed",
									children: selectedProject.challenges
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-lg font-semibold mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#4ADE80]" }), " Ergebnisse & Impact"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground leading-relaxed",
									children: selectedProject.results
								})] })
							]
						})
					]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-6 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-accent",
						children: "Stimmen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-semibold",
						children: "Was Kunden sagen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: [
							{
								q: "Tiep hat unsere KI-Roadmap in 6 Wochen umgesetzt, wofür intern 6 Monate geplant waren.",
								a: "Sarah K.",
								role: "CTO, FinTech"
							},
							{
								q: "Sauberer Code, klare Kommunikation, faire Preise. Wir buchen ihn jedes Quartal nach.",
								a: "Markus B.",
								role: "Head of Engineering"
							},
							{
								q: "Endlich jemand, der KI-Hype und Realität trennen kann. Pragmatisch und liefert.",
								a: "Lena W.",
								role: "Founder"
							}
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-surface/40 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-foreground leading-relaxed",
								children: [
									"„",
									t.q,
									"\""
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 pt-5 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium",
									children: t.a
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: t.role
								})]
							})]
						}, t.a))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-6 py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-surface/40 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Dein Projekt als nächstes?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2",
						children: "Lass uns 30 Minuten unverbindlich sprechen."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/kontakt",
						className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: ["Anfrage senden ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Portfolio as component };
