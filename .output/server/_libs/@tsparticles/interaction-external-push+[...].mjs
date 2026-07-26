import { C as itemFromSingleOrMultiple, S as itemFromArray, U as getRangeValue, X as isNull, b as isInArray, h as executeOnSingleOrMultiple, m as deepExtend } from "./animation-utils+[...].mjs";
import { _ as loadOptionProperty, v as loadProperty, y as loadRangeProperty } from "./basic+[...].mjs";
import { _ as ExternalInteractorBase, n as ensureInteractivityPluginLoaded } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-external-push/esm/Options/Classes/Push.js
var Push = class {
	default = true;
	groups = [];
	particles;
	quantity = 4;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "default", data.default);
		if (data.groups !== void 0) this.groups = data.groups.map((t) => t);
		if (!this.groups.length) this.default = true;
		loadRangeProperty(this, "quantity", data.quantity);
		this.particles = executeOnSingleOrMultiple(data.particles, (particles) => {
			return deepExtend({}, particles);
		});
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-push/esm/Pusher.js
var pushMode = "push", minQuantity = 0;
var Pusher = class extends ExternalInteractorBase {
	handleClickMode;
	maxDistance = 0;
	constructor(container) {
		super(container);
		this.handleClickMode = (mode, interactivityData) => {
			if (mode !== pushMode) return;
			const container = this.container, pushOptions = container.actualOptions.interactivity?.modes.push;
			if (!pushOptions) return;
			const quantity = getRangeValue(pushOptions.quantity);
			if (quantity <= minQuantity) return;
			const group = itemFromArray([void 0, ...pushOptions.groups]), overrideOptions = deepExtend(group !== void 0 ? container.actualOptions.particles.groups[group] : void 0, itemFromSingleOrMultiple(pushOptions.particles));
			container.particles.push(quantity, interactivityData.mouse.position, overrideOptions, group);
		};
	}
	clear() {}
	init() {}
	interact() {}
	isEnabled(interactivityData, particle) {
		const options = this.container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
		return !!events && mouse.clicking && mouse.inside && !!mouse.position && isInArray(pushMode, events.onClick.mode);
	}
	loadModeOptions(options, ...sources) {
		loadOptionProperty(options, "push", Push, ...sources);
	}
	reset() {}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-push/esm/index.js
async function loadExternalPushInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("externalPush", (container) => {
			return Promise.resolve(new Pusher(container));
		});
	});
}
//#endregion
export { loadExternalPushInteraction as t };
