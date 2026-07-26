import { X as isNull, b as isInArray, st as half } from "./animation-utils+[...].mjs";
import { _ as loadOptionProperty, v as loadProperty } from "./basic+[...].mjs";
import { _ as ExternalInteractorBase, n as ensureInteractivityPluginLoaded } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-external-parallax/esm/Options/Classes/Parallax.js
var Parallax = class {
	force = 2;
	smooth = 10;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "force", data.force);
		loadProperty(this, "smooth", data.smooth);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-parallax/esm/Parallaxer.js
var parallaxMode = "parallax";
var Parallaxer = class extends ExternalInteractorBase {
	maxDistance = 0;
	constructor(container) {
		super(container);
	}
	clear() {}
	init() {}
	interact(interactivityData) {
		for (const particle of this.container.particles.filter((p) => this.isEnabled(interactivityData, p))) this.#parallaxInteract(interactivityData, particle);
	}
	isEnabled(interactivityData, particle) {
		const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
		return !!events?.onHover.enable && !!mouse.position && isInArray(parallaxMode, events.onHover.mode);
	}
	loadModeOptions(options, ...sources) {
		loadOptionProperty(options, "parallax", Parallax, ...sources);
	}
	reset() {}
	#parallaxInteract(interactivityData, particle) {
		if (!this.isEnabled(interactivityData, particle)) return;
		const container = this.container, parallaxOptions = container.actualOptions.interactivity?.modes.parallax;
		if (!parallaxOptions) return;
		const parallaxForce = parallaxOptions.force, mousePos = interactivityData.mouse.position;
		if (!mousePos) return;
		const canvasSize = container.canvas.size, canvasCenter = {
			x: canvasSize.width * half,
			y: canvasSize.height * half
		}, parallaxSmooth = parallaxOptions.smooth, factor = particle.getRadius() / parallaxForce, centerDistance = {
			x: (mousePos.x - canvasCenter.x) * factor,
			y: (mousePos.y - canvasCenter.y) * factor
		}, { offset } = particle;
		offset.x += (centerDistance.x - offset.x) / parallaxSmooth;
		offset.y += (centerDistance.y - offset.y) / parallaxSmooth;
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-parallax/esm/index.js
async function loadExternalParallaxInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("externalParallax", (container) => {
			return Promise.resolve(new Parallaxer(container));
		});
	});
}
//#endregion
export { loadExternalParallaxInteraction as t };
