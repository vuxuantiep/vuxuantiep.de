import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as LangProvider } from "./LangContext-DlHRSoPA.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Qhu9H01V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-hb2xzTOZ.css";
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
var Route$4 = createRootRouteWithContext()({
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
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
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
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$3 = () => import("./portfolio-C-Qjnebb.mjs");
var Route$3 = createFileRoute("/portfolio")({
	head: () => ({ meta: [{ title: "Portfolio — vuxuantiep.de" }, {
		name: "description",
		content: "Ausgewählte Freelance-Projekte: Cloud-Plattformen, KI-Produkte und Web-Apps."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./kontakt-DrApwjU1.mjs");
var Route$2 = createFileRoute("/kontakt")({
	head: () => ({ meta: [{ title: "Kontakt — vuxuantiep.de" }, {
		name: "description",
		content: "Projekt anfragen, Erstgespräch buchen oder einfach Hallo sagen."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./blog-j2zzQMo-.mjs");
var Route$1 = createFileRoute("/blog")({
	head: () => ({ meta: [{ title: "Blog — KI & neue Technologien · vuxuantiep.de" }, {
		name: "description",
		content: "Artikel zu KI, LLMs, Cloud-Architektur und modernen Web-Technologien. Aus der Praxis, ohne Hype."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BlbHMG64.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [{ title: "vuxuantiep.de — IT Freelancer für Cloud, KI & Web" }, {
		name: "description",
		content: "Freiberuflicher IT-Engineer. Ich baue performante Cloud-Plattformen, KI-Integrationen und moderne Web-Anwendungen."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var PortfolioRoute = Route$3.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$4
});
var KontaktRoute = Route$2.update({
	id: "/kontakt",
	path: "/kontakt",
	getParentRoute: () => Route$4
});
var BlogRoute = Route$1.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	BlogRoute,
	KontaktRoute,
	PortfolioRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
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
