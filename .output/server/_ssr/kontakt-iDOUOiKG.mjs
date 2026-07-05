import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useLang } from "./LangContext-DlHRSoPA.mjs";
import { d as MapPin, f as Mail, h as Github, p as Linkedin, x as Calendar } from "../_libs/lucide-react.mjs";
import { n as Nav, t as Footer } from "./Footer-BNr43njz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontakt-iDOUOiKG.js
var import_jsx_runtime = require_jsx_runtime();
function Kontakt() {
	const { t } = useLang();
	const contacts = [
		{
			icon: Mail,
			label: t("E-Mail", "Email", "Email"),
			value: "tiep@vuxuantiep.de",
			href: "mailto:tiep@vuxuantiep.de"
		},
		{
			icon: Calendar,
			label: "Cal.com",
			value: "cal.com/tiep/30min",
			href: "https://cal.com/tiep/30min"
		},
		{
			icon: MapPin,
			label: t("Standort", "Location", "Địa điểm"),
			value: t("Hamburg · Remote EU", "Hamburg · Remote EU", "Hamburg · Remote toàn EU")
		},
		{
			icon: Github,
			label: "GitHub",
			value: "@vuxuantiep",
			href: "https://github.com/vuxuantiep"
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			value: "/in/vuxuantiep",
			href: "https://linkedin.com/in/vuxuantiep"
		}
	];
	const projectTypes = [
		t("Cloud-Architektur", "Cloud Architecture", "Kiến trúc đám mây"),
		t("KI-Integration / LLM", "AI Integration / LLM", "Tích hợp AI / LLM"),
		t("Web-App / Frontend", "Web App / Frontend", "Web App / Frontend"),
		t("Beratung / Audit", "Consulting / Audit", "Tư vấn / Kiểm định"),
		t("Sonstige Anfrage / andere Fragen", "Other request / other questions", "Yêu cầu khác / câu hỏi khác")
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-6 pt-20 pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: t("Kontakt", "Contact", "Liên hệ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl md:text-6xl font-semibold leading-tight",
						children: t("Lass uns reden.", "Let's talk.", "Hãy trò chuyện nhé.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-muted-foreground",
						children: t("Schreib mir ein paar Sätze zu deinem Vorhaben — ich melde mich innerhalb von 24 Stunden.", "Send me a few lines about your project — I'll get back to you within 24 hours.", "Hãy gửi cho tôi vài dòng về dự án của bạn — tôi sẽ phản hồi trong vòng 24 giờ.")
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
										children: t("Name", "Name", "Tên")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
										placeholder: "Max Mustermann"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-muted-foreground",
										children: t("E-Mail", "Email", "Email")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
										placeholder: "max@firma.de"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: t("Projektart", "Project type", "Loại dự án")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									"aria-label": t("Projektart", "Project type", "Loại dự án"),
									className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
									children: projectTypes.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: option }, option))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: t("Nachricht", "Message", "Tin nhắn")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 5,
									className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
									placeholder: t("Worum geht es? Zeitrahmen, Budget, aktueller Stand…", "What's it about? Timeline, budget, current status…", "Dự án của bạn là gì? Thời gian, ngân sách, tình trạng hiện tại…")
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90",
									children: t("Anfrage senden", "Send request", "Gửi yêu cầu")
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: contacts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: c.href,
								target: c.href?.startsWith("http") ? "_blank" : void 0,
								rel: c.href?.startsWith("http") ? "noopener noreferrer" : void 0,
								className: `flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4 ${c.href ? "hover:border-primary/40 transition-colors" : ""}`,
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
