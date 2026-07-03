import { n as useScroll, t as useSpring } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang } from "./LangContext-DlHRSoPA.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Terminal } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-D4Ek-74e.js
var import_jsx_runtime = require_jsx_runtime();
function Nav() {
	const { lang, setLang, t } = useLang();
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: .001
	});
	const LangButton = ({ code }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setLang(code),
		className: `px-2 py-1 rounded transition-colors ${lang === code ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
		children: code
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed top-0 left-0 right-0 h-1 bg-[#4ADE80] origin-left z-[60]",
		style: { scaleX }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-[-1] bg-[radial-gradient(#4ADE80_1px,transparent_1px)] [background-size:16px_16px] opacity-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-[-1] bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2 font-display text-lg font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-md bg-transparent border border-primary text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vũ xuân Tiệp" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								activeOptions: { exact: true },
								activeProps: { className: "text-foreground" },
								className: "hover:text-foreground transition-colors",
								children: lang === "DE" ? "Start" : lang === "EN" ? "Home" : "Trang chủ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#leistungen",
								className: "hover:text-foreground transition-colors",
								children: lang === "DE" ? "Leistungen" : lang === "EN" ? "Services" : "Dịch vụ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/portfolio",
								activeProps: { className: "text-foreground" },
								className: "hover:text-foreground transition-colors",
								children: lang === "DE" ? "Projekte" : lang === "EN" ? "Projects" : "Dự án"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								activeProps: { className: "text-foreground" },
								className: "hover:text-foreground transition-colors",
								children: "Blog"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kontakt",
								activeProps: { className: "text-foreground" },
								className: "hover:text-foreground transition-colors",
								children: lang === "DE" ? "Kontakt" : lang === "EN" ? "Contact" : "Liên hệ"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-xs font-medium bg-surface/50 rounded-md p-1 border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangButton, { code: "DE" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangButton, { code: "EN" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangButton, { code: "VI" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontakt",
							className: "rounded-md bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20",
							children: lang === "DE" ? "Projekt starten" : lang === "EN" ? "Start Project" : "Bắt đầu dự án"
						})]
					})
				]
			})
		]
	})] });
}
function Footer() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-display text-foreground font-semibold",
					children: ["vuxuantiep.de — ", t("IT & KI Experte", "IT & AI Expert", "Chuyên gia IT & AI")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1",
					children: t("Cloud · KI · Web Engineering", "Cloud · AI · Web Engineering", "Đám mây · AI · Web Engineering")
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-foreground",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-foreground",
							children: "LinkedIn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-foreground",
							children: "Mastodon"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-foreground",
							children: "RSS"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" · ",
					t("Impressum", "Imprint", "Dấu ấn"),
					" · ",
					t("Datenschutz", "Privacy", "Bảo mật")
				] })
			]
		})
	});
}
//#endregion
export { Nav as n, Footer as t };
