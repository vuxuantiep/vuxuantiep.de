import { T as safeDocument, X as isNull, b as isInArray, st as half } from "./animation-utils+[...].mjs";
import { a as Circle, o as Rectangle } from "../tsparticles__engine.mjs";
import { _ as loadOptionProperty, v as loadProperty } from "./basic+[...].mjs";
import { _ as ExternalInteractorBase, a as divModeExecute, n as ensureInteractivityPluginLoaded, o as isDivModeEnabled, u as mouseMoveEvent, x as DivType } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-external-destroy/esm/Utils.js
var toleranceFactor = 10;
function processDestroy(container, area) {
	const query = container.particles.grid.query(area);
	for (const particle of query) particle.destroy();
}
function singleSelectorDestroy(container, selector, div) {
	const query = safeDocument().querySelectorAll(selector);
	if (!query.length) return;
	query.forEach((item) => {
		const elem = item, pxRatio = container.retina.pixelRatio, pos = {
			x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
			y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
		}, radius = elem.offsetWidth * half * pxRatio, tolerance = toleranceFactor * pxRatio;
		processDestroy(container, div.type === DivType.circle ? new Circle(pos.x, pos.y, radius + tolerance) : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2));
	});
}
function divDestroy(container, divs, destroyMode) {
	divModeExecute(destroyMode, divs, (selector, div) => {
		singleSelectorDestroy(container, selector, div);
	});
}
function mouseDestroy(container, interactivityData) {
	const tolerance = toleranceFactor * container.retina.pixelRatio, mousePos = interactivityData.mouse.position, radius = container.retina.destroyModeDistance;
	if (!radius || radius < 0 || !mousePos) return;
	processDestroy(container, new Circle(mousePos.x, mousePos.y, radius + tolerance));
}
//#endregion
//#region node_modules/@tsparticles/interaction-external-destroy/esm/Options/Classes/Destroy.js
var Destroy = class {
	distance = 200;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "distance", data.distance);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-destroy/esm/Destroyer.js
var destroyMode = "destroy";
var Destroyer = class extends ExternalInteractorBase {
	#maxDistance;
	constructor(container) {
		super(container);
		this.#maxDistance = 0;
	}
	get maxDistance() {
		return this.#maxDistance;
	}
	clear() {}
	init() {
		const container = this.container, destroy = container.actualOptions.interactivity?.modes.destroy;
		if (!destroy) return;
		this.#maxDistance = destroy.distance;
		container.retina.destroyModeDistance = destroy.distance * container.retina.pixelRatio;
	}
	interact(interactivityData) {
		const events = this.container.actualOptions.interactivity?.events, mouseMoveStatus = interactivityData.status === mouseMoveEvent;
		if (!events) return;
		const hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
		if (mouseMoveStatus && hoverEnabled && isInArray(destroyMode, hoverMode)) mouseDestroy(this.container, interactivityData);
		else divDestroy(this.container, divs, destroyMode);
	}
	isEnabled(interactivityData, particle) {
		const options = this.container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
		if (!events) return false;
		const divs = events.onDiv;
		return !!mouse.position && events.onHover.enable && isInArray(destroyMode, events.onHover.mode) || isDivModeEnabled(destroyMode, divs);
	}
	loadModeOptions(options, ...sources) {
		loadOptionProperty(options, "destroy", Destroy, ...sources);
	}
	reset() {}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-destroy/esm/index.js
async function loadExternalDestroyInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("externalDestroy", async (container) => {
			return Promise.resolve(new Destroyer(container));
		});
	});
}
//#endregion
export { loadExternalDestroyInteraction as t };
