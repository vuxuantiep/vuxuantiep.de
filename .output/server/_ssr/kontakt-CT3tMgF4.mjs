import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Linkedin, l as Github, m as Calendar, o as MapPin, s as Mail } from "../_libs/lucide-react.mjs";
import { n as Nav, t as Footer } from "./Footer-D4Ek-74e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontakt-CT3tMgF4.js
var import_jsx_runtime = require_jsx_runtime();
function Kontakt() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-6 pt-20 pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: "Kontakt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight",
						children: "Lass uns reden."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-muted-foreground",
						children: "Schreib mir ein paar Sätze zu deinem Vorhaben — ich melde mich innerhalb von 24 Stunden."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "rounded-2xl border border-border bg-surface/40 p-8 space-y-5",
							onSubmit: (e) => e.preventDefault(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-muted-foreground",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
										placeholder: "Max Mustermann"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-muted-foreground",
										children: "E-Mail"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
										placeholder: "max@firma.de"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: "Projektart"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cloud-Architektur" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "KI-Integration / LLM" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Web-App / Frontend" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Beratung / Audit" })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: "Nachricht"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 5,
									className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
									placeholder: "Worum geht es? Zeitrahmen, Budget, aktueller Stand…"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90",
									children: "Anfrage senden"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: [
								{
									icon: Mail,
									label: "E-Mail",
									value: "hallo@vuxuantiep.de"
								},
								{
									icon: Calendar,
									label: "Cal.com",
									value: "cal.com/tiep/30min"
								},
								{
									icon: MapPin,
									label: "Standort",
									value: "Berlin · Remote EU"
								},
								{
									icon: Github,
									label: "GitHub",
									value: "@tiep"
								},
								{
									icon: Linkedin,
									label: "LinkedIn",
									value: "/in/tiep"
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: c.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium",
									children: c.value
								})] })]
							}, c.label))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Kontakt as component };
