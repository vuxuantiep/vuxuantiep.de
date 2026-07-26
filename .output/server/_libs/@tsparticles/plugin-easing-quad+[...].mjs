//#region node_modules/@tsparticles/plugin-easing-quad/esm/easingsFunctions.js
var easingsFunctions = /* @__PURE__ */ new Map();
easingsFunctions.set("ease-in-quad", (value) => value ** 2);
easingsFunctions.set("ease-out-quad", (value) => 1 - (1 - value) ** 2);
easingsFunctions.set("ease-in-out-quad", (value) => value < .5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2);
//#endregion
//#region node_modules/@tsparticles/plugin-easing-quad/esm/index.js
async function loadEasingQuadPlugin(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		for (const [easing, easingFn] of easingsFunctions) e.pluginManager.addEasing(easing, easingFn);
	});
}
//#endregion
export { loadEasingQuadPlugin as t };
