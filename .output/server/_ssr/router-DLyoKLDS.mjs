import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as seoHead, r as useLang, t as LangProvider } from "./LangContext-CD_fLab6.mjs";
import { d as ShieldCheck, n as X } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DLyoKLDS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CcpWLyNc.css";
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
var Route$8 = createRootRouteWithContext()({
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
				property: "og:image",
				content: "https://vuxuantiep.de/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "vuxuantiep.de — Software, die skaliert. KI, die liefert."
			},
			{
				property: "og:locale",
				content: "de_DE"
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
			},
			{
				name: "twitter:image",
				content: "https://vuxuantiep.de/og-image.png"
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
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LangProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyNotice, {})] })
	});
}
var $$splitComponentImporter$7 = () => import("./portfolio-CTqRhawQ.mjs");
var Route$7 = createFileRoute("/portfolio")({
	head: ({ match }) => seoHead({
		path: "/portfolio",
		search: match.search,
		title: {
			de: "Portfolio — vuxuantiep.de",
			en: "Portfolio — vuxuantiep.de",
			vi: "Portfolio — vuxuantiep.de"
		},
		description: {
			de: "Ausgewählte Freelance-Projekte: Cloud-Plattformen, KI-Produkte und Web-Apps.",
			en: "Selected freelance projects: cloud platforms, AI products, and web apps.",
			vi: "Các dự án freelance tiêu biểu: nền tảng đám mây, sản phẩm AI và ứng dụng web."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./kontakt-CkORxHPn.mjs");
var Route$6 = createFileRoute("/kontakt")({
	head: ({ match }) => seoHead({
		path: "/kontakt",
		search: match.search,
		title: {
			de: "Kontakt — vuxuantiep.de",
			en: "Contact — vuxuantiep.de",
			vi: "Liên hệ — vuxuantiep.de"
		},
		description: {
			de: "Projekt anfragen, Erstgespräch buchen oder einfach Hallo sagen.",
			en: "Request a project, book an initial call, or just say hello.",
			vi: "Gửi yêu cầu dự án, đặt lịch tư vấn hoặc chỉ để chào hỏi."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./impressum-DotdKkX9.mjs");
var Route$5 = createFileRoute("/impressum")({
	head: ({ match }) => seoHead({
		path: "/impressum",
		search: match.search,
		noindex: true,
		title: {
			de: "Impressum — vuxuantiep.de",
			en: "Legal Notice — vuxuantiep.de",
			vi: "Thông tin pháp lý — vuxuantiep.de"
		},
		description: {
			de: "Impressum und Anbieterkennzeichnung von vuxuantiep.de.",
			en: "Legal notice and provider identification of vuxuantiep.de.",
			vi: "Thông tin pháp lý và nhà cung cấp của vuxuantiep.de."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./datenschutz-8-AYIWHl.mjs");
var Route$4 = createFileRoute("/datenschutz")({
	head: ({ match }) => seoHead({
		path: "/datenschutz",
		search: match.search,
		noindex: true,
		title: {
			de: "Datenschutzerklärung — vuxuantiep.de",
			en: "Privacy Policy — vuxuantiep.de",
			vi: "Chính sách bảo mật — vuxuantiep.de"
		},
		description: {
			de: "Datenschutzerklärung von vuxuantiep.de gemäß DSGVO.",
			en: "Privacy policy of vuxuantiep.de in accordance with the GDPR.",
			vi: "Chính sách bảo mật của vuxuantiep.de theo GDPR."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./broki-CoYKE4VK.mjs");
var Route$3 = createFileRoute("/broki")({
	head: ({ match }) => seoHead({
		path: "/broki",
		search: match.search,
		title: {
			de: "Broki AI — Die KI, die im Browser bleibt | vuxuantiep.de",
			en: "Broki AI — The AI that stays in your browser | vuxuantiep.de",
			vi: "Broki AI — AI ở lại trong trình duyệt | vuxuantiep.de"
		},
		description: {
			de: "Broki AI: KI-Wiki-Assistent, 100 % lokal im Browser (WebGPU/WASM). DSGVO-konform, keine Cloud, null Serverkosten. Für Kanzleien, Praxen und regulierte Branchen.",
			en: "Broki AI: local AI knowledge assistant, 100% in the browser (WebGPU/WASM). GDPR-compliant, no cloud, zero server costs.",
			vi: "Broki AI: trợ lý kiến thức AI, 100% cục bộ trong trình duyệt. Tuân thủ GDPR, không đám mây."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./blog-clmWTuzi.mjs");
var Route$2 = createFileRoute("/blog")({
	head: ({ match }) => seoHead({
		path: "/blog",
		search: match.search,
		title: {
			de: "Blog — KI & neue Technologien · vuxuantiep.de",
			en: "Blog — AI & New Technologies · vuxuantiep.de",
			vi: "Blog — AI & Công nghệ mới · vuxuantiep.de"
		},
		description: {
			de: "Artikel zu KI, LLMs, Cloud-Architektur und modernen Web-Technologien. Aus der Praxis, ohne Hype.",
			en: "Articles on AI, LLMs, cloud architecture, and modern web technologies. Hands-on, no hype.",
			vi: "Bài viết về AI, LLM, kiến trúc đám mây và công nghệ web hiện đại. Từ thực tiễn, không thổi phồng."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-CsbIyd75.mjs");
var Route$1 = createFileRoute("/")({
	head: ({ match }) => seoHead({
		path: "/",
		search: match.search,
		title: {
			de: "vuxuantiep.de — IT Freelancer für Cloud, KI & Web",
			en: "vuxuantiep.de — IT Freelancer for Cloud, AI & Web",
			vi: "vuxuantiep.de — Freelancer IT về Cloud, AI & Web"
		},
		description: {
			de: "Freiberuflicher IT-Engineer. Ich baue performante Cloud-Plattformen, KI-Integrationen und moderne Web-Anwendungen.",
			en: "Freelance IT engineer. I build performant cloud platforms, AI integrations, and modern web applications.",
			vi: "Kỹ sư IT tự do. Tôi xây dựng nền tảng đám mây hiệu năng cao, tích hợp AI và ứng dụng web hiện đại."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog.lokale-llm-gpu-server-oCdYAjhM.mjs");
var Route = createFileRoute("/blog/lokale-llm-gpu-server")({
	head: ({ match }) => seoHead({
		path: "/blog/lokale-llm-gpu-server",
		search: match.search,
		title: {
			de: "Lokale LLMs trainieren mit eigenem GPU-Server — vuxuantiep.de",
			en: "Training local LLMs on your own GPU server — vuxuantiep.de",
			vi: "Huấn luyện LLM cục bộ với máy chủ GPU riêng — vuxuantiep.de"
		},
		description: {
			de: "Welche GPU 2026 für lokales LLM-Training geeignet ist, wie du das Projekt technisch aufsetzt und wie du die Hardware zwischen Training und Vermietung optimal auslastest.",
			en: "Which GPUs are suitable for local LLM training in 2026, how to set up the project technically, and how to keep the hardware utilized between training runs and rental income.",
			vi: "GPU nào phù hợp để huấn luyện LLM cục bộ năm 2026, cách thiết lập dự án về mặt kỹ thuật, và cách tận dụng tối đa phần cứng giữa huấn luyện và cho thuê."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var PortfolioRoute = Route$7.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$8
});
var KontaktRoute = Route$6.update({
	id: "/kontakt",
	path: "/kontakt",
	getParentRoute: () => Route$8
});
var ImpressumRoute = Route$5.update({
	id: "/impressum",
	path: "/impressum",
	getParentRoute: () => Route$8
});
var DatenschutzRoute = Route$4.update({
	id: "/datenschutz",
	path: "/datenschutz",
	getParentRoute: () => Route$8
});
var BrokiRoute = Route$3.update({
	id: "/broki",
	path: "/broki",
	getParentRoute: () => Route$8
});
var BlogRoute = Route$2.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$8
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var BlogRouteChildren = { BlogLokaleLlmGpuServerRoute: Route.update({
	id: "/lokale-llm-gpu-server",
	path: "/lokale-llm-gpu-server",
	getParentRoute: () => BlogRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	BlogRoute: BlogRoute._addFileChildren(BlogRouteChildren),
	BrokiRoute,
	DatenschutzRoute,
	ImpressumRoute,
	KontaktRoute,
	PortfolioRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
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
