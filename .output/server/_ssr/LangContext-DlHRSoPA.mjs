import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LangContext-DlHRSoPA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LangContext = (0, import_react.createContext)(void 0);
function LangProvider({ children }) {
	const [lang, setLang] = (0, import_react.useState)("DE");
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
export { useLang as n, LangProvider as t };
