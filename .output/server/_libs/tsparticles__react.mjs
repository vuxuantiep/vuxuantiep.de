import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "./@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "./radix-ui__react-context+react.mjs";
import { r as tsParticles } from "./@tsparticles/animation-utils+[...].mjs";
//#region node_modules/@tsparticles/react/ParticlesProvider.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var s = !1, c, l, u = (0, import_react.createContext)({ loaded: !1 }), d = ({ children: e, init: t }) => {
	let [d, f] = (0, import_react.useState)(s);
	(0, import_react.useEffect)(() => {
		let e = !1;
		if (!s) {
			if (!c) l = t, c = (async () => {
				await t(tsParticles), s = !0;
			})().catch((e) => {
				throw c = void 0, l = void 0, e;
			});
			else if (l && l !== t) throw Error("ParticlesProvider init callback must be stable across the app lifecycle.");
			return c.then(() => {
				e || f(!0);
			}).catch(() => {
				e || f(!1);
			}), () => {
				e = !0;
			};
		}
	}, [t]);
	let p = (0, import_react.useMemo)(() => ({ loaded: d }), [d]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(u.Provider, {
		value: p,
		children: d ? e : null
	});
};
function f() {
	return (0, import_react.useContext)(u);
}
//#endregion
//#region node_modules/@tsparticles/react/Particles.js
var a = (a) => {
	let { className: o, id: s, options: c, particlesLoaded: l, style: u, url: d } = a, { loaded: f$1 } = f(), p = (0, import_react.useRef)(void 0);
	return (0, import_react.useEffect)(() => {
		if (!f$1) return;
		let e = s ?? "tsparticles";
		return tsParticles.load({
			id: e,
			url: d,
			options: c
		}).then((t) => {
			if (!t?.destroyed) {
				if (!document.getElementById(e)) {
					t?.destroy();
					return;
				}
				p.current = t, l?.(t);
			}
		}), () => {
			p.current?.destroy(), p.current = void 0;
		};
	}, [
		s,
		f$1,
		c,
		l,
		d
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: s ?? "tsparticles",
		className: o,
		style: u
	});
};
//#endregion
export { d as n, a as t };
