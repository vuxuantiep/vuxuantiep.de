import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as d, t as a } from "../_libs/tsparticles__react.mjs";
import { t as loadSlim } from "../_libs/@tsparticles/slim+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ParticlesCanvas-DvMABWFp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PARTICLE_COLOR = "#4ade80";
function ParticlesCanvas({ isMobile }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, {
		init: loadSlim,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, {
			id: "hero-particles",
			options: (0, import_react.useMemo)(() => ({
				fullScreen: { enable: false },
				detectRetina: true,
				fpsLimit: 60,
				pauseOnOutsideViewport: true,
				background: { color: "transparent" },
				particles: {
					number: {
						value: isMobile ? 40 : 120,
						density: { enable: true }
					},
					color: { value: PARTICLE_COLOR },
					shape: { type: "circle" },
					opacity: { value: {
						min: .15,
						max: .55
					} },
					size: { value: {
						min: 1,
						max: 3
					} },
					links: {
						enable: true,
						distance: 100,
						color: PARTICLE_COLOR,
						opacity: .25,
						width: 1.5
					},
					move: {
						enable: true,
						speed: .7,
						outModes: { default: "out" }
					}
				},
				interactivity: {
					detectsOn: "window",
					events: {
						onHover: {
							enable: true,
							mode: "grab"
						},
						onClick: {
							enable: true,
							mode: "push"
						},
						resize: { enable: true }
					},
					modes: {
						grab: {
							distance: 200,
							links: { opacity: .7 }
						},
						push: { quantity: 4 }
					}
				}
			}), [isMobile]),
			className: "h-full w-full"
		})
	});
}
//#endregion
export { ParticlesCanvas as default };
