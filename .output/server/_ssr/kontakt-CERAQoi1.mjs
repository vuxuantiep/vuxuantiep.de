import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useLang } from "./LangContext-DlHRSoPA.mjs";
import { S as CircleCheck, _ as Github, f as MapPin, h as Linkedin, m as LoaderCircle, p as Mail, r as TriangleAlert, w as Calendar } from "../_libs/lucide-react.mjs";
import { n as Nav, t as Footer } from "./Footer-BNr43njz.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CNUofncy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontakt-CERAQoi1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var sendContactMessage = createServerFn({ method: "POST" }).inputValidator((data) => {
	const name = String(data.name ?? "").trim().slice(0, 200);
	const email = String(data.email ?? "").trim().slice(0, 200);
	const projectType = String(data.projectType ?? "").trim().slice(0, 200);
	const message = String(data.message ?? "").trim().slice(0, 5e3);
	const lang = [
		"DE",
		"EN",
		"VI"
	].includes(String(data.lang)) ? String(data.lang) : "DE";
	if (!name) throw new Error("Bitte Namen angeben.");
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Bitte gültige E-Mail angeben.");
	if (!message) throw new Error("Bitte eine Nachricht schreiben.");
	return {
		name,
		email,
		projectType,
		message,
		lang
	};
}).handler(createSsrRpc("c674b0b7792d4633bcc5ea3647131a08a33d340c202834e6fdf7c9a0e6122f78"));
function Kontakt() {
	const { t, lang } = useLang();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [projectType, setProjectType] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (status === "sending") return;
		setStatus("sending");
		setErrorMsg("");
		try {
			await sendContactMessage({ data: {
				name,
				email,
				projectType: projectType || "—",
				message,
				lang
			} });
			setStatus("success");
			setName("");
			setEmail("");
			setMessage("");
		} catch (err) {
			setStatus("error");
			setErrorMsg(err instanceof Error ? err.message : "");
		}
	};
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
							onSubmit: handleSubmit,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-muted-foreground",
										children: t("Name", "Name", "Tên")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										value: name,
										onChange: (e) => setName(e.target.value),
										className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
										placeholder: "Max Mustermann"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-muted-foreground",
										children: t("E-Mail", "Email", "Email")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
										placeholder: "max@firma.de"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: t("Projektart", "Project type", "Loại dự án")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									"aria-label": t("Projektart", "Project type", "Loại dự án"),
									value: projectType || projectTypes[0],
									onChange: (e) => setProjectType(e.target.value),
									className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
									children: projectTypes.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: option }, option))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: t("Nachricht", "Message", "Tin nhắn")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									rows: 5,
									value: message,
									onChange: (e) => setMessage(e.target.value),
									className: "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50",
									placeholder: t("Worum geht es? Zeitrahmen, Budget, aktueller Stand…", "What's it about? Timeline, budget, current status…", "Dự án của bạn là gì? Thời gian, ngân sách, tình trạng hiện tại…")
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "submit",
											disabled: status === "sending",
											className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60",
											children: [status === "sending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), status === "sending" ? t("Wird gesendet…", "Sending…", "Đang gửi…") : t("Anfrage senden", "Send request", "Gửi yêu cầu")]
										}),
										status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 text-sm text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), t("Nachricht gesendet — ich melde mich!", "Message sent — I'll get back to you!", "Đã gửi tin nhắn — tôi sẽ liên hệ lại!")]
										}),
										status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 text-sm text-destructive",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }), errorMsg || t("Senden fehlgeschlagen. Bitte per E-Mail an tiep@vuxuantiep.de.", "Sending failed. Please email tiep@vuxuantiep.de.", "Gửi thất bại. Vui lòng email tiep@vuxuantiep.de.")]
										})
									]
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
