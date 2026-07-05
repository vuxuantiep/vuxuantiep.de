import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useLang, t as LangProvider } from "./LangContext-DlHRSoPA.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ShieldCheck, t as X } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DZmBrTOJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DQpiKicS.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var STORAGE_KEY = "privacy-notice-dismissed";
function PrivacyNotice() {
	const { t } = useLang();
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
		} catch {
			setVisible(true);
		}
	}, []);
	const dismiss = () => {
		try {
			localStorage.setItem(STORAGE_KEY, (/* @__PURE__ */ new Date()).toISOString());
		} catch {}
		setVisible(false);
	};
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-label": t("Datenschutzhinweis", "Privacy notice", "Thông báo quyền riêng tư"),
		className: "fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-xl rounded-xl border border-border bg-surface/95 p-4 shadow-2xl backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs leading-relaxed text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						t("Diese Website verwendet keine Tracking-Cookies und keine Analyse- oder Werbedienste. Es werden nur technisch notwendige Daten verarbeitet (z. B. Server-Logs beim Hosting und diese Hinweis-Bestätigung in deinem Browser).", "This website uses no tracking cookies and no analytics or advertising services. Only technically necessary data is processed (e.g. hosting server logs and this notice confirmation in your browser).", "Trang web này không dùng cookie theo dõi, không dùng dịch vụ phân tích hay quảng cáo. Chỉ dữ liệu cần thiết về kỹ thuật được xử lý (ví dụ: nhật ký máy chủ và xác nhận thông báo này trong trình duyệt của bạn)."),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/datenschutz",
							className: "text-primary underline underline-offset-2 hover:text-primary/80",
							children: t("Mehr in der Datenschutzerklärung", "More in the privacy policy", "Xem thêm trong chính sách quyền riêng tư")
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: dismiss,
						className: "mt-3 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t("Verstanden", "Got it", "Đã hiểu")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: dismiss,
					"aria-label": t("Hinweis schließen", "Close notice", "Đóng thông báo"),
					className: "shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-background hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Seite nicht gefunden"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Diese Seite existiert nicht."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Zur Startseite"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-semibold text-foreground",
				children: "Diese Seite konnte nicht geladen werden"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
					children: "Erneut versuchen"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent",
					children: "Zur Startseite"
				})]
			})]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "vuxuantiep.de — IT Freelancer für Cloud, KI & Web" },
			{
				name: "description",
				content: "Freelance IT-Engineer für Cloud-Architektur, KI-Integration und moderne Web-Plattformen."
			},
			{
				name: "keywords",
				content: "IT Freelancer, Cloud Architektur, KI-Integration, Web Engineering, AWS, React, TypeScript, LLM, RAG"
			},
			{
				property: "og:title",
				content: "vuxuantiep.de — IT Freelancer für Cloud, KI & Web"
			},
			{
				property: "og:description",
				content: "Freelance IT-Engineer für Cloud-Architektur, KI-Integration und moderne Web-Plattformen."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://vuxuantiep.de"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "vuxuantiep.de — IT Freelancer für Cloud, KI & Web"
			},
			{
				name: "twitter:description",
				content: "Freelance IT-Engineer für Cloud-Architektur, KI-Integration und moderne Web-Plattformen."
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "de",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LangProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyNotice, {})] })
	});
}
var $$splitComponentImporter$5 = () => import("./portfolio-BeFHAPW4.mjs");
var Route$5 = createFileRoute("/portfolio")({
	head: () => ({ meta: [{ title: "Portfolio — vuxuantiep.de" }, {
		name: "description",
		content: "Ausgewählte Freelance-Projekte: Cloud-Plattformen, KI-Produkte und Web-Apps."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./kontakt-iDOUOiKG.mjs");
var Route$4 = createFileRoute("/kontakt")({
	head: () => ({ meta: [{ title: "Kontakt — vuxuantiep.de" }, {
		name: "description",
		content: "Projekt anfragen, Erstgespräch buchen oder einfach Hallo sagen."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./impressum-C3Ly_b60.mjs");
var Route$3 = createFileRoute("/impressum")({
	head: () => ({ meta: [
		{ title: "Impressum — vuxuantiep.de" },
		{
			name: "description",
			content: "Impressum und Anbieterkennzeichnung von vuxuantiep.de."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./datenschutz-CFGVHr5r.mjs");
var Route$2 = createFileRoute("/datenschutz")({
	head: () => ({ meta: [
		{ title: "Datenschutzerklärung — vuxuantiep.de" },
		{
			name: "description",
			content: "Datenschutzerklärung von vuxuantiep.de gemäß DSGVO."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./blog-B7kOiNkz.mjs");
var Route$1 = createFileRoute("/blog")({
	head: () => ({ meta: [{ title: "Blog — KI & neue Technologien · vuxuantiep.de" }, {
		name: "description",
		content: "Artikel zu KI, LLMs, Cloud-Architektur und modernen Web-Technologien. Aus der Praxis, ohne Hype."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BZUs5QGP.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [{ title: "vuxuantiep.de — IT Freelancer für Cloud, KI & Web" }, {
		name: "description",
		content: "Freiberuflicher IT-Engineer. Ich baue performante Cloud-Plattformen, KI-Integrationen und moderne Web-Anwendungen."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var PortfolioRoute = Route$5.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$6
});
var KontaktRoute = Route$4.update({
	id: "/kontakt",
	path: "/kontakt",
	getParentRoute: () => Route$6
});
var ImpressumRoute = Route$3.update({
	id: "/impressum",
	path: "/impressum",
	getParentRoute: () => Route$6
});
var DatenschutzRoute = Route$2.update({
	id: "/datenschutz",
	path: "/datenschutz",
	getParentRoute: () => Route$6
});
var BlogRoute = Route$1.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	BlogRoute,
	DatenschutzRoute,
	ImpressumRoute,
	KontaktRoute,
	PortfolioRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
