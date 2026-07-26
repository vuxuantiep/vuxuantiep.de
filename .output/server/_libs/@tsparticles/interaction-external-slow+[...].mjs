import { I as getDistance, X as isNull, b as isInArray } from "./animation-utils+[...].mjs";
import { _ as loadOptionProperty, v as loadProperty } from "./basic+[...].mjs";
import { _ as ExternalInteractorBase, n as ensureInteractivityPluginLoaded } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-external-slow/esm/Options/Classes/Slow.js
var Slow = class {
	factor = 3;
	radius = 200;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "factor", data.factor);
		loadProperty(this, "radius", data.radius);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-slow/esm/SlowModifier.js
var SlowModifier = class {
	enabled = false;
	id = "slow";
	priority = 100;
	speedFactor = 1;
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-slow/esm/Slower.js
var slowMode = "slow", minRadius = 0;
var Slower = class extends ExternalInteractorBase {
	#maxDistance;
	#modifiers = /* @__PURE__ */ new WeakMap();
	constructor(container) {
		super(container);
		this.#maxDistance = 0;
	}
	get maxDistance() {
		return this.#maxDistance;
	}
	clear(particle, _delta, force) {
		if (this.#modifiers.get(particle)?.enabled && !force) return;
		particle.removeModifier(slowMode);
		this.#modifiers.delete(particle);
	}
	getOrCreateModifier(particle) {
		let mod = this.#modifiers.get(particle);
		if (!mod) {
			mod = new SlowModifier();
			this.#modifiers.set(particle, mod);
			particle.addModifier(mod);
		}
		return mod;
	}
	init() {
		const container = this.container, slow = container.actualOptions.interactivity?.modes.slow;
		if (!slow) return;
		this.#maxDistance = slow.radius;
		container.retina.slowModeRadius = slow.radius * container.retina.pixelRatio;
	}
	interact() {}
	isEnabled(interactivityData, particle) {
		const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
		return !!events?.onHover.enable && !!mouse.position && isInArray(slowMode, events.onHover.mode);
	}
	loadModeOptions(options, ...sources) {
		loadOptionProperty(options, "slow", Slow, ...sources);
	}
	reset(interactivityData, particle) {
		const mod = this.#modifiers.get(particle);
		if (mod) mod.enabled = false;
		const container = this.container, options = container.actualOptions, mousePos = interactivityData.mouse.position, radius = container.retina.slowModeRadius, slowOptions = options.interactivity?.modes.slow;
		if (!slowOptions || !radius || radius < minRadius || !mousePos) return;
		const dist = getDistance(mousePos, particle.getPosition()), proximityFactor = dist / radius, slowFactor = slowOptions.factor;
		if (dist > radius) return;
		const activeMod = this.getOrCreateModifier(particle);
		activeMod.enabled = true;
		activeMod.speedFactor = proximityFactor / slowFactor;
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-slow/esm/index.js
async function loadExternalSlowInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("externalSlow", (container) => {
			return Promise.resolve(new Slower(container));
		});
	});
}
//#endregion
export { loadExternalSlowInteraction as t };
