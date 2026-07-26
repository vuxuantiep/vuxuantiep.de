import { I as getDistance, X as isNull, b as isInArray } from "./animation-utils+[...].mjs";
import { _ as loadOptionProperty, h as OptionsColor, l as getStyleFromRgb, o as getLinkColor, s as getLinkRandomColor, v as loadProperty, y as loadRangeProperty } from "./basic+[...].mjs";
import { t as drawLine } from "../tsparticles__canvas-utils.mjs";
import { _ as ExternalInteractorBase, n as ensureInteractivityPluginLoaded } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-external-grab/esm/Options/Classes/GrabLinks.js
var GrabLinks = class {
	blink = false;
	color;
	consent = false;
	opacity = 1;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "blink", data.blink);
		if (data.color !== void 0) this.color = OptionsColor.create(this.color, data.color);
		loadProperty(this, "consent", data.consent);
		loadRangeProperty(this, "opacity", data.opacity);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-grab/esm/Options/Classes/Grab.js
var Grab = class {
	distance = 100;
	links = new GrabLinks();
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "distance", data.distance);
		this.links.load(data.links);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-grab/esm/Utils.js
var defaultWidth = 0;
function drawGrabLine(context, width, begin, end, colorLine, opacity, hdr = false) {
	drawLine(context, begin, end);
	context.strokeStyle = getStyleFromRgb(colorLine, hdr, opacity);
	context.lineWidth = width;
	context.stroke();
}
function drawGrab(container, particle, lineColor, opacity, mousePos) {
	container.canvas.render.draw((ctx) => {
		const beginPos = particle.getPosition();
		drawGrabLine(ctx, particle.retina.linksWidth ?? defaultWidth, beginPos, mousePos, lineColor, opacity, container.hdr);
	});
}
//#endregion
//#region node_modules/@tsparticles/interaction-external-grab/esm/Grabber.js
var grabMode = "grab", minDistance = 0, minOpacity = 0;
var Grabber = class extends ExternalInteractorBase {
	#maxDistance;
	#pluginManager;
	constructor(pluginManager, container) {
		super(container);
		this.#pluginManager = pluginManager;
		this.#maxDistance = 0;
	}
	get maxDistance() {
		return this.#maxDistance;
	}
	clear() {}
	init() {
		const container = this.container, grab = container.actualOptions.interactivity?.modes.grab;
		if (!grab) return;
		this.#maxDistance = grab.distance;
		container.retina.grabModeDistance = grab.distance * container.retina.pixelRatio;
	}
	interact(interactivityData) {
		const container = this.container, interactivity = container.actualOptions.interactivity;
		if (!interactivity?.modes.grab || !interactivity.events.onHover.enable || interactivityData.status !== "pointermove") return;
		const mousePos = interactivityData.mouse.position;
		if (!mousePos) return;
		const distance = container.retina.grabModeDistance;
		if (!distance || distance < minDistance) return;
		const query = container.particles.grid.queryCircle(mousePos, distance, (p) => this.isEnabled(interactivityData, p));
		for (const particle of query) {
			const pointDistance = getDistance(particle.getPosition(), mousePos);
			if (pointDistance > distance) continue;
			const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - pointDistance * lineOpacity / distance;
			if (opacityLine <= minOpacity) continue;
			const optColor = grabLineOptions.color ?? particle.options.links?.color;
			if (!container.particles.grabLineColor && optColor) {
				const linksOptions = interactivity.modes.grab.links;
				container.particles.grabLineColor = getLinkRandomColor(this.#pluginManager, optColor, linksOptions.blink, linksOptions.consent);
			}
			const colorLine = getLinkColor(particle, void 0, container.particles.grabLineColor);
			if (!colorLine) continue;
			drawGrab(container, particle, colorLine, opacityLine, mousePos);
		}
	}
	isEnabled(interactivityData, particle) {
		const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
		return !!events?.onHover.enable && !!mouse.position && isInArray(grabMode, events.onHover.mode);
	}
	loadModeOptions(options, ...sources) {
		loadOptionProperty(options, "grab", Grab, ...sources);
	}
	reset() {}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-grab/esm/index.js
async function loadExternalGrabInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("externalGrab", (container) => {
			return Promise.resolve(new Grabber(e.pluginManager, container));
		});
	});
}
//#endregion
export { loadExternalGrabInteraction as t };
