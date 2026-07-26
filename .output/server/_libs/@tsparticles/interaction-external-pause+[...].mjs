import { b as isInArray } from "./animation-utils+[...].mjs";
import { _ as ExternalInteractorBase, n as ensureInteractivityPluginLoaded } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-external-pause/esm/Pauser.js
var pauseMode = "pause";
var Pauser = class extends ExternalInteractorBase {
	handleClickMode;
	maxDistance = 0;
	constructor(container) {
		super(container);
		this.handleClickMode = (mode) => {
			if (mode !== pauseMode) return;
			const container = this.container;
			if (container.animationStatus) container.pause();
			else container.play();
		};
	}
	clear() {}
	init() {}
	interact() {}
	isEnabled(_interactivityData, particle) {
		const options = this.container.actualOptions, events = (particle?.interactivity ?? options.interactivity)?.events;
		return !!events && isInArray(pauseMode, events.onClick.mode);
	}
	reset() {}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-pause/esm/index.js
async function loadExternalPauseInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("externalPause", (container) => {
			return Promise.resolve(new Pauser(container));
		});
	});
}
//#endregion
export { loadExternalPauseInteraction as t };
