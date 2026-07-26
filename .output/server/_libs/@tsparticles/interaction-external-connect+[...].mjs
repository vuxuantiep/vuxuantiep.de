import { P as clamp, X as isNull, b as isInArray } from "./animation-utils+[...].mjs";
import { _ as loadOptionProperty, c as getStyleFromHsl, i as colorMix, l as getStyleFromRgb, v as loadProperty, y as loadRangeProperty } from "./basic+[...].mjs";
import { t as drawLine } from "../tsparticles__canvas-utils.mjs";
import { _ as ExternalInteractorBase, n as ensureInteractivityPluginLoaded } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-external-connect/esm/Options/Classes/ConnectLinks.js
var ConnectLinks = class {
	opacity = .5;
	load(data) {
		if (isNull(data)) return;
		loadRangeProperty(this, "opacity", data.opacity);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-connect/esm/Options/Classes/Connect.js
var Connect = class {
	distance = 80;
	links = new ConnectLinks();
	radius = 60;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "distance", data.distance);
		this.links.load(data.links);
		loadProperty(this, "radius", data.radius);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-connect/esm/Utils.js
var gradientMin = 0, gradientMax = 1, defaultLinksWidth = 0;
function gradient(container, context, p1, p2, opacity) {
	const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();
	if (!color1 || !color2) return;
	const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = colorMix(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
	grad.addColorStop(gradientMin, getStyleFromHsl(color1, container.hdr, opacity));
	grad.addColorStop(clamp(gradStop, gradientMin, gradientMax), getStyleFromRgb(midRgb, container.hdr, opacity));
	grad.addColorStop(gradientMax, getStyleFromHsl(color2, container.hdr, opacity));
	return grad;
}
function drawConnectLine(context, width, lineStyle, begin, end) {
	drawLine(context, begin, end);
	context.lineWidth = width;
	context.strokeStyle = lineStyle;
	context.stroke();
}
function lineStyle(container, ctx, p1, p2) {
	const connectOptions = container.actualOptions.interactivity?.modes.connect;
	if (!connectOptions) return;
	return gradient(container, ctx, p1, p2, connectOptions.links.opacity);
}
function drawConnection(container, p1, p2) {
	container.canvas.render.draw((ctx) => {
		const ls = lineStyle(container, ctx, p1, p2);
		if (!ls) return;
		const pos1 = p1.getPosition(), pos2 = p2.getPosition();
		drawConnectLine(ctx, p1.retina.linksWidth ?? defaultLinksWidth, ls, pos1, pos2);
	});
}
//#endregion
//#region node_modules/@tsparticles/interaction-external-connect/esm/Connector.js
var connectMode = "connect", minDistance = 0;
var Connector = class extends ExternalInteractorBase {
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
		const container = this.container, connect = container.actualOptions.interactivity?.modes.connect;
		if (!connect) return;
		this.#maxDistance = connect.distance;
		container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;
		container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;
	}
	interact(interactivityData) {
		const container = this.container;
		if (container.actualOptions.interactivity?.events.onHover.enable && interactivityData.status === "pointermove") {
			const mousePos = interactivityData.mouse.position, { connectModeDistance, connectModeRadius } = container.retina;
			if (!connectModeDistance || connectModeDistance < minDistance || !connectModeRadius || connectModeRadius < minDistance || !mousePos) return;
			const distance = Math.abs(connectModeRadius), query = container.particles.grid.queryCircle(mousePos, distance, (p) => this.isEnabled(interactivityData, p));
			query.forEach((p1, i) => {
				const pos1 = p1.getPosition();
				for (const p2 of query.slice(i + 1)) {
					const pos2 = p2.getPosition(), distMax = Math.abs(connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
					if (xDiff < distMax && yDiff < distMax) drawConnection(container, p1, p2);
				}
			});
		}
	}
	isEnabled(interactivityData, particle) {
		const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
		if (!(events?.onHover.enable && mouse.position)) return false;
		return isInArray(connectMode, events.onHover.mode);
	}
	loadModeOptions(options, ...sources) {
		loadOptionProperty(options, "connect", Connect, ...sources);
	}
	reset() {}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-connect/esm/index.js
async function loadExternalConnectInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("externalConnect", (container) => {
			return Promise.resolve(new Connector(container));
		});
	});
}
//#endregion
export { loadExternalConnectInteraction as t };
