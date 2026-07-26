import { T as safeDocument, U as getRangeValue, X as isNull, b as isInArray, d as circleBounce, et as Vector, f as circleBounceDataFromParticle, st as half, u as calculateBounds } from "./animation-utils+[...].mjs";
import { a as Circle, o as Rectangle } from "../tsparticles__engine.mjs";
import { _ as loadOptionProperty, v as loadProperty } from "./basic+[...].mjs";
import { _ as ExternalInteractorBase, a as divModeExecute, n as ensureInteractivityPluginLoaded, o as isDivModeEnabled, u as mouseMoveEvent, x as DivType } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-external-bounce/esm/Utils.js
var halfPI = Math.PI * half, toleranceFactor = 10;
function processBounce(container, position, radius, area, enabledCb) {
	const query = container.particles.grid.query(area, enabledCb);
	for (const particle of query) if (area instanceof Circle) circleBounce(circleBounceDataFromParticle(particle), {
		position,
		radius,
		mass: radius ** 2 * halfPI,
		velocity: Vector.origin,
		factor: Vector.origin
	});
	else if (area instanceof Rectangle) rectBounce(particle, calculateBounds(position, radius));
}
function singleSelectorBounce(container, selector, div, bounceCb) {
	const query = safeDocument().querySelectorAll(selector);
	if (!query.length) return;
	query.forEach((item) => {
		const elem = item, pxRatio = container.retina.pixelRatio, pos = {
			x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
			y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
		}, radius = elem.offsetWidth * half * pxRatio, tolerance = toleranceFactor * pxRatio;
		bounceCb(pos, radius, div.type === DivType.circle ? new Circle(pos.x, pos.y, radius + tolerance) : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2));
	});
}
function divBounce(container, divs, bounceMode, enabledCb) {
	divModeExecute(bounceMode, divs, (selector, div) => {
		singleSelectorBounce(container, selector, div, (pos, radius, area) => {
			processBounce(container, pos, radius, area, enabledCb);
		});
	});
}
function mouseBounce(container, interactivityData, enabledCb) {
	const tolerance = toleranceFactor * container.retina.pixelRatio, mousePos = interactivityData.mouse.position, radius = container.retina.bounceModeDistance;
	if (!radius || radius < 0 || !mousePos) return;
	processBounce(container, mousePos, radius, new Circle(mousePos.x, mousePos.y, radius + tolerance), enabledCb);
}
function rectSideBounce(data) {
	const res = { bounced: false }, { pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor } = data;
	if (pOtherSide.min < rectOtherSide.min || pOtherSide.min > rectOtherSide.max || pOtherSide.max < rectOtherSide.min || pOtherSide.max > rectOtherSide.max) return res;
	if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) * .5 && velocity > 0 || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) * .5 && velocity < 0) {
		res.velocity = velocity * -factor;
		res.bounced = true;
	}
	return res;
}
function rectBounce(particle, divBounds) {
	const bounds = calculateBounds(particle.getPosition(), particle.getRadius()), bounceOptions = particle.options.bounce, resH = rectSideBounce({
		pSide: {
			min: bounds.left,
			max: bounds.right
		},
		pOtherSide: {
			min: bounds.top,
			max: bounds.bottom
		},
		rectSide: {
			min: divBounds.left,
			max: divBounds.right
		},
		rectOtherSide: {
			min: divBounds.top,
			max: divBounds.bottom
		},
		velocity: particle.velocity.x,
		factor: getRangeValue(bounceOptions.horizontal.value)
	});
	if (resH.bounced) {
		if (resH.velocity !== void 0) particle.velocity.x = resH.velocity;
		if (resH.position !== void 0) particle.position.x = resH.position;
	}
	const resV = rectSideBounce({
		pSide: {
			min: bounds.top,
			max: bounds.bottom
		},
		pOtherSide: {
			min: bounds.left,
			max: bounds.right
		},
		rectSide: {
			min: divBounds.top,
			max: divBounds.bottom
		},
		rectOtherSide: {
			min: divBounds.left,
			max: divBounds.right
		},
		velocity: particle.velocity.y,
		factor: getRangeValue(bounceOptions.vertical.value)
	});
	if (resV.bounced) {
		if (resV.velocity !== void 0) particle.velocity.y = resV.velocity;
		if (resV.position !== void 0) particle.position.y = resV.position;
	}
}
//#endregion
//#region node_modules/@tsparticles/interaction-external-bounce/esm/Options/Classes/Bounce.js
var Bounce = class {
	distance = 200;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "distance", data.distance);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-bounce/esm/Bouncer.js
var bounceMode = "bounce";
var Bouncer = class extends ExternalInteractorBase {
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
		const container = this.container, bounce = container.actualOptions.interactivity?.modes.bounce;
		if (!bounce) return;
		this.#maxDistance = bounce.distance;
		container.retina.bounceModeDistance = bounce.distance * container.retina.pixelRatio;
	}
	interact(interactivityData) {
		const events = this.container.actualOptions.interactivity?.events, mouseMoveStatus = interactivityData.status === mouseMoveEvent;
		if (!events) return;
		const hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
		if (mouseMoveStatus && hoverEnabled && isInArray(bounceMode, hoverMode)) mouseBounce(this.container, interactivityData, (p) => this.isEnabled(interactivityData, p));
		else divBounce(this.container, divs, bounceMode, (p) => this.isEnabled(interactivityData, p));
	}
	isEnabled(interactivityData, particle) {
		const options = this.container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
		if (!events) return false;
		const divs = events.onDiv;
		return !!mouse.position && events.onHover.enable && isInArray(bounceMode, events.onHover.mode) || isDivModeEnabled(bounceMode, divs);
	}
	loadModeOptions(options, ...sources) {
		loadOptionProperty(options, "bounce", Bounce, ...sources);
	}
	reset() {}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-bounce/esm/index.js
async function loadExternalBounceInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("externalBounce", (container) => {
			return Promise.resolve(new Bouncer(container));
		});
	});
}
//#endregion
export { loadExternalBounceInteraction as t };
