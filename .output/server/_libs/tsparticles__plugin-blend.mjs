import { r as __exportAll } from "../_runtime.mjs";
import "./@tsparticles/animation-utils+[...].mjs";
import { r as DrawLayer } from "./tsparticles__engine.mjs";
//#region node_modules/@tsparticles/plugin-blend/esm/BlendPluginInstance.js
var BlendPluginInstance_exports = /* @__PURE__ */ __exportAll({ BlendPluginInstance: () => BlendPluginInstance });
var BlendPluginInstance = class {
	layer = DrawLayer.CanvasSetup;
	#container;
	#defaultCompositeValue;
	constructor(container) {
		this.#container = container;
	}
	drawParticleCleanup(context, particle) {
		if (!particle.options.blend?.enable) return;
		context.globalCompositeOperation = particle.originalBlendMode ?? "source-over";
		particle.originalBlendMode = void 0;
	}
	drawParticleSetup(context, particle) {
		if (!particle.options.blend?.enable) return;
		particle.originalBlendMode = context.globalCompositeOperation;
		context.globalCompositeOperation = particle.options.blend.mode;
	}
	drawSettingsCleanup(context) {
		if (!this.#defaultCompositeValue) return;
		context.globalCompositeOperation = this.#defaultCompositeValue;
	}
	drawSettingsSetup(context) {
		const previousComposite = context.globalCompositeOperation, blend = this.#container.actualOptions.blend;
		this.#defaultCompositeValue = previousComposite;
		context.globalCompositeOperation = blend?.enable ? blend.mode : previousComposite;
	}
};
//#endregion
export { BlendPluginInstance_exports as t };
