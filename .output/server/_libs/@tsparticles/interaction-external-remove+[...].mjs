import { U as getRangeValue, X as isNull, b as isInArray } from "./animation-utils+[...].mjs";
import { _ as loadOptionProperty, y as loadRangeProperty } from "./basic+[...].mjs";
import { _ as ExternalInteractorBase, n as ensureInteractivityPluginLoaded } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-external-remove/esm/Options/Classes/Remove.js
var Remove = class {
	quantity = 2;
	load(data) {
		if (isNull(data)) return;
		loadRangeProperty(this, "quantity", data.quantity);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-remove/esm/Remover.js
var removeMode = "remove";
var Remover = class extends ExternalInteractorBase {
	handleClickMode;
	maxDistance = 0;
	constructor(container) {
		super(container);
		this.handleClickMode = (mode) => {
			const container = this.container, options = container.actualOptions;
			if (!options.interactivity?.modes.remove || mode !== removeMode) return;
			const removeNb = getRangeValue(options.interactivity.modes.remove.quantity);
			for (let i = 0; i < removeNb; i++) container.particles.get(i)?.destroy();
		};
	}
	clear() {}
	init() {}
	interact() {}
	isEnabled(interactivityData, particle) {
		const options = this.container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
		return !!events && mouse.clicking && mouse.inside && !!mouse.position && isInArray(removeMode, events.onClick.mode);
	}
	loadModeOptions(options, ...sources) {
		loadOptionProperty(options, "remove", Remove, ...sources);
	}
	reset() {}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-remove/esm/index.js
async function loadExternalRemoveInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("externalRemove", (container) => {
			return Promise.resolve(new Remover(container));
		});
	});
}
//#endregion
export { loadExternalRemoveInteraction as t };
