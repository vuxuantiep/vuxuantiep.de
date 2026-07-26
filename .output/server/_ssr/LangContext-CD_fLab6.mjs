import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as useNavigate, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LangContext-CD_fLab6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE_URL = "https://vuxuantiep.de";
/** Liest den lang-Query-Parameter aus dem (untypisierten) Router-Search-Objekt. */
function langFromSearch(search) {
	const value = search?.lang;
	return value === "en" || value === "vi" ? value : void 0;
}
function urlFor(path, lang) {
	return lang ? `${SITE_URL}${path}?lang=${lang}` : `${SITE_URL}${path}`;
}
function pick(text, lang) {
	return lang === "en" ? text.en : lang === "vi" ? text.vi : text.de;
}
/**
* Erzeugt meta + links für den Route-Head:
* - Title & Description in der Sprache der aufgerufenen URL
* - selbstreferenzierender canonical (jede Sprachversion ist ihr eigenes Original)
* - hreflang für de/en/vi plus x-default (→ deutsche Version)
*/
function seoHead(options) {
	const lang = langFromSearch(options.search);
	const meta = [
		{ title: pick(options.title, lang) },
		{
			name: "description",
			content: pick(options.description, lang)
		},
		{
			property: "og:url",
			content: urlFor(options.path, lang)
		}
	];
	if (options.noindex) meta.push({
		name: "robots",
		content: "noindex"
	});
	return {
		meta,
		links: [
			{
				rel: "canonical",
				href: urlFor(options.path, lang)
			},
			{
				rel: "alternate",
				hreflang: "de",
				href: urlFor(options.path, void 0)
			},
			{
				rel: "alternate",
				hreflang: "en",
				href: urlFor(options.path, "en")
			},
			{
				rel: "alternate",
				hreflang: "vi",
				href: urlFor(options.path, "vi")
			},
			{
				rel: "alternate",
				hreflang: "x-default",
				href: urlFor(options.path, void 0)
			}
		]
	};
}
var LangContext = (0, import_react.createContext)(void 0);
function LangProvider({ children }) {
	const search = useRouterState({ select: (s) => s.location.search });
	const navigate = useNavigate();
	const param = langFromSearch(search);
	const lang = param === "en" ? "EN" : param === "vi" ? "VI" : "DE";
	const setLang = (next) => {
		navigate({
			to: ".",
			search: (prev) => ({
				...prev,
				lang: next === "DE" ? void 0 : next.toLowerCase()
			}),
			replace: true,
			resetScroll: false
		});
	};
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang.toLowerCase();
	}, [lang]);
	const t = (de, en, vi) => {
		switch (lang) {
			case "EN": return en;
			case "VI": return vi;
			default: return de;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangContext.Provider, {
		value: {
			lang,
			setLang,
			t
		},
		children
	});
}
function useLang() {
	const context = (0, import_react.useContext)(LangContext);
	if (context === void 0) throw new Error("useLang must be used within a LangProvider");
	return context;
}
//#endregion
export { seoHead as n, useLang as r, LangProvider as t };
