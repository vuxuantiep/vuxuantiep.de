import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ParticleBackground-CC7ssT2s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ParticlesCanvas = (0, import_react.lazy)(() => import("./ParticlesCanvas-DvMABWFp.mjs"));
/**
* Interaktiver Partikel-Netzwerk-Hintergrund für den Hero-Bereich.
*
* - lädt die tsparticles-Engine erst, wenn der Hero im Viewport ist (IntersectionObserver)
* - respektiert prefers-reduced-motion: dann bleibt nur der statische Hintergrund
* - reduziert die Partikelanzahl auf Mobilgeräten (< 768px)
* - pointer-events-none: Buttons und Links darüber bleiben voll klickbar
*/
function ParticleBackground() {
	const containerRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	const [isMobile, setIsMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		setIsMobile(window.matchMedia("(max-width: 767px)").matches);
		const el = containerRef.current;
		if (!el) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				setActive(true);
				observer.disconnect();
			}
		}, { threshold: .1 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	const edgeMask = "radial-gradient(ellipse 62% 75% at 50% 42%, transparent 48%, rgba(0,0,0,0.6) 75%, black 95%)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: "pointer-events-none absolute inset-0 z-0",
		style: {
			maskImage: edgeMask,
			WebkitMaskImage: edgeMask
		},
		"aria-hidden": "true",
		children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticlesCanvas, { isMobile })
		})
	});
}
//#endregion
export { ParticleBackground as t };
