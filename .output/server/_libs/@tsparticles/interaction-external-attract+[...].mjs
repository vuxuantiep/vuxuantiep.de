import { J as isArray, L as getDistances, P as clamp, X as isNull, b as isInArray, ct as millisecondsToSeconds, et as Vector, h as executeOnSingleOrMultiple, m as deepExtend, v as getItemsFromInitializer } from "./animation-utils+[...].mjs";
import { a as Circle } from "../tsparticles__engine.mjs";
import { _ as loadOptionProperty, v as loadProperty } from "./basic+[...].mjs";
//#region node_modules/@tsparticles/plugin-interactivity/esm/Options/Classes/Events/ClickEvent.js
var ClickEvent = class {
	enable = false;
	mode = [];
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "mode", data.mode);
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/Enums/DivType.js
var DivType;
(function(DivType) {
	DivType["circle"] = "circle";
	DivType["rectangle"] = "rectangle";
})(DivType || (DivType = {}));
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/Options/Classes/Events/DivEvent.js
var DivEvent = class {
	enable = false;
	mode = [];
	selectors = [];
	type = DivType.circle;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "selectors", data.selectors);
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "mode", data.mode);
		loadProperty(this, "type", data.type);
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/Options/Classes/Events/HoverEvent.js
var HoverEvent = class {
	enable = false;
	mode = [];
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "mode", data.mode);
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/Options/Classes/Events/Events.js
var Events = class {
	onClick = new ClickEvent();
	onDiv = new DivEvent();
	onHover = new HoverEvent();
	load(data) {
		if (isNull(data)) return;
		this.onClick.load(data.onClick);
		const onDiv = data.onDiv;
		if (onDiv !== void 0) this.onDiv = executeOnSingleOrMultiple(onDiv, (t) => {
			const tmp = new DivEvent();
			tmp.load(t);
			return tmp;
		});
		this.onHover.load(data.onHover);
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/Enums/InteractivityDetect.js
var InteractivityDetect;
(function(InteractivityDetect) {
	InteractivityDetect["canvas"] = "canvas";
	InteractivityDetect["parent"] = "parent";
	InteractivityDetect["window"] = "window";
})(InteractivityDetect || (InteractivityDetect = {}));
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/Options/Classes/Modes/Modes.js
var Modes = class {
	#container;
	#pluginManager;
	constructor(pluginManager, container) {
		this.#pluginManager = pluginManager;
		this.#container = container;
	}
	load(data) {
		if (isNull(data)) return;
		if (!this.#container) return;
		const interactors = this.#pluginManager.interactors?.get(this.#container);
		if (!interactors) return;
		for (const interactor of interactors) {
			if (!interactor.loadModeOptions) continue;
			interactor.loadModeOptions(this, data);
		}
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/Options/Classes/Interactivity.js
var Interactivity = class {
	detectsOn = InteractivityDetect.window;
	events = new Events();
	modes;
	constructor(pluginManager, container) {
		this.modes = new Modes(pluginManager, container);
	}
	load(data) {
		if (isNull(data)) return;
		const detectsOn = data.detectsOn;
		if (detectsOn !== void 0) this.detectsOn = detectsOn;
		this.events.load(data.events);
		this.modes.load(data.modes);
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/InteractivityPlugin.js
var InteractivityPlugin = class {
	id = "interactivity";
	#pluginManager;
	constructor(pluginManager) {
		this.#pluginManager = pluginManager;
	}
	async getPlugin(container) {
		const { InteractivityPluginInstance } = await import("./plugin-interactivity+[...].mjs").then((n) => n.t);
		return new InteractivityPluginInstance(this.#pluginManager, container);
	}
	loadOptions(container, options, source) {
		if (!this.needsPlugin()) return;
		let interactivityOptions = options.interactivity;
		if (!interactivityOptions?.load) options.interactivity = interactivityOptions = new Interactivity(this.#pluginManager, container);
		interactivityOptions.load(source?.interactivity);
		const interactors = this.#pluginManager.interactors?.get(container);
		if (!interactors) return;
		for (const interactor of interactors) if (interactor.loadOptions) interactor.loadOptions(options, source);
	}
	loadParticlesOptions(container, options, source) {
		if (source?.interactivity) options.interactivity = deepExtend({}, source.interactivity);
		const interactors = this.#pluginManager.interactors?.get(container);
		if (!interactors) return;
		for (const interactor of interactors) interactor.loadParticlesOptions?.(options, source);
	}
	needsPlugin() {
		return true;
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/Enums/InteractorType.js
var InteractorType;
(function(InteractorType) {
	InteractorType["external"] = "external";
	InteractorType["particles"] = "particles";
})(InteractorType || (InteractorType = {}));
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/BaseClasses/ExternalInteractorBase.js
var ExternalInteractorBase = class {
	type = InteractorType.external;
	container;
	constructor(container) {
		this.container = container;
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/BaseClasses/ParticlesInteractorBase.js
var ParticlesInteractorBase = class {
	type = InteractorType.particles;
	container;
	constructor(container) {
		this.container = container;
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/InteractivityConstants.js
var clickEvent = "click";
var mouseDownEvent = "pointerdown";
var mouseUpEvent = "pointerup";
var mouseLeaveEvent = "pointerleave";
var mouseMoveEvent = "pointermove";
var touchStartEvent = "touchstart";
var touchEndEvent = "touchend";
var touchMoveEvent = "touchmove";
var touchCancelEvent = "touchcancel";
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/utils.js
function findItemFromSingleOrMultiple(obj, callback) {
	if (isArray(obj)) return obj.find((t, index) => callback(t, index));
	return callback(obj, 0) ? obj : void 0;
}
function checkSelector(element, selectors) {
	const res = executeOnSingleOrMultiple(selectors, (selector) => {
		return element.matches(selector);
	});
	return isArray(res) ? res.some((t) => t) : res;
}
function isDivModeEnabled(mode, divs) {
	return !!findItemFromSingleOrMultiple(divs, (t) => t.enable && isInArray(mode, t.mode));
}
function divModeExecute(mode, divs, callback) {
	executeOnSingleOrMultiple(divs, (div) => {
		const divMode = div.mode;
		if (div.enable && isInArray(mode, divMode)) singleDivModeExecute(div, callback);
	});
}
function singleDivModeExecute(div, callback) {
	const selectors = div.selectors;
	executeOnSingleOrMultiple(selectors, (selector) => {
		callback(selector, div);
	});
}
function divMode(divs, element) {
	if (!element || !divs) return;
	return findItemFromSingleOrMultiple(divs, (div) => {
		return checkSelector(element, div.selectors);
	});
}
//#endregion
//#region node_modules/@tsparticles/plugin-interactivity/esm/index.js
async function loadInteractivityPlugin(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		const interactivityEngine = e, interactivityPluginManager = interactivityEngine.pluginManager;
		interactivityPluginManager.addPlugin(new InteractivityPlugin(interactivityPluginManager));
		interactivityPluginManager.initializers.interactors ??= /* @__PURE__ */ new Map();
		interactivityPluginManager.interactors ??= /* @__PURE__ */ new Map();
		interactivityPluginManager.addInteractor = (name, interactorInitializer) => {
			interactivityPluginManager.initializers.interactors ??= /* @__PURE__ */ new Map();
			interactivityPluginManager.initializers.interactors.set(name, interactorInitializer);
		};
		interactivityPluginManager.getInteractors = async (container, force = false) => {
			interactivityPluginManager.interactors ??= /* @__PURE__ */ new Map();
			interactivityPluginManager.initializers.interactors ??= /* @__PURE__ */ new Map();
			return getItemsFromInitializer(container, interactivityPluginManager.interactors, interactivityPluginManager.initializers.interactors, force);
		};
		interactivityPluginManager.setOnClickHandler = (callback) => {
			const { items } = interactivityEngine;
			if (!items.length) throw new Error("Click handlers can only be set after calling tsParticles.load()");
			items.forEach((item) => {
				item.addClickHandler?.(callback);
			});
		};
	});
}
function ensureInteractivityPluginLoaded(e) {
	if (!e.pluginManager.addInteractor) throw new Error("tsParticles Interactivity Plugin is not loaded");
}
//#endregion
//#region node_modules/@tsparticles/interaction-external-attract/esm/Utils.js
var minFactor = 1, minRadius = 0, updateVector = Vector.origin;
function processAttract(pluginManager, container, position, attractRadius, area, queryCb, onAttractParticle) {
	const attractOptions = container.actualOptions.interactivity?.modes.attract;
	if (!attractOptions) return;
	const query = container.particles.grid.query(area, queryCb);
	for (const particle of query) {
		const { dx, dy, distance } = getDistances(particle.position, position), velocity = attractOptions.speed * attractOptions.factor, attractFactor = clamp(pluginManager.getEasing(attractOptions.easing)(1 - distance / attractRadius) * velocity, minFactor, attractOptions.maxSpeed);
		updateVector.x = !distance ? velocity : dx / distance * attractFactor;
		updateVector.y = !distance ? velocity : dy / distance * attractFactor;
		onAttractParticle?.(particle);
		particle.position.subFrom(updateVector);
	}
}
function clickAttract(pluginManager, container, interactivityData, enabledCb, onAttractParticle) {
	container.attract ??= { particles: [] };
	const { attract } = container;
	if (!attract.finish) {
		attract.count ??= 0;
		attract.count++;
		if (attract.count === container.particles.count) attract.finish = true;
	}
	if (attract.clicking) {
		const mousePos = interactivityData.mouse.clickPosition, attractRadius = container.retina.attractModeDistance;
		if (!attractRadius || attractRadius < minRadius || !mousePos) return;
		processAttract(pluginManager, container, mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius), (p) => enabledCb(p), onAttractParticle);
	} else if (attract.clicking === false) attract.particles = [];
}
function hoverAttract(pluginManager, container, interactivityData, enabledCb, onAttractParticle) {
	const mousePos = interactivityData.mouse.position, attractRadius = container.retina.attractModeDistance;
	if (!attractRadius || attractRadius < minRadius || !mousePos) return;
	processAttract(pluginManager, container, mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius), (p) => enabledCb(p), onAttractParticle);
}
//#endregion
//#region node_modules/@tsparticles/interaction-external-attract/esm/Options/Classes/Attract.js
var Attract = class {
	distance = 200;
	duration = .4;
	easing = "ease-out-quad";
	factor = 1;
	maxSpeed = 50;
	restore;
	speed = 1;
	constructor() {
		this.restore = {
			enable: false,
			delay: 0,
			speed: .08,
			follow: true
		};
	}
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "distance", data.distance);
		loadProperty(this, "duration", data.duration);
		if (data.easing !== void 0) this.easing = data.easing;
		loadProperty(this, "factor", data.factor);
		if (data.maxSpeed !== void 0) this.maxSpeed = data.maxSpeed;
		loadProperty(this, "speed", data.speed);
		if (data.restore !== void 0) {
			this.restore.enable = data.restore.enable ?? this.restore.enable;
			this.restore.delay = data.restore.delay ?? this.restore.delay;
			this.restore.speed = data.restore.speed ?? this.restore.speed;
			this.restore.follow = data.restore.follow ?? this.restore.follow;
		}
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-attract/esm/Attractor.js
var attractMode = "attract", minVelocityLengthSq = 0, minRestoreSpeed = .001, maxRestoreSpeed = 1, restoreEpsilon = .5;
var Attractor = class extends ExternalInteractorBase {
	handleClickMode;
	#interactedThisFrame;
	#maxDistance;
	#pluginManager;
	#restoreData;
	constructor(pluginManager, container) {
		super(container);
		this.#pluginManager = pluginManager;
		this.#maxDistance = 0;
		this.#interactedThisFrame = /* @__PURE__ */ new Set();
		this.#restoreData = /* @__PURE__ */ new Map();
		container.attract ??= { particles: [] };
		this.handleClickMode = (mode, interactivityData) => {
			const attract = this.container.actualOptions.interactivity?.modes.attract;
			if (!attract || mode !== attractMode) return;
			container.attract ??= { particles: [] };
			container.attract.clicking = true;
			container.attract.count = 0;
			for (const particle of container.attract.particles) {
				if (!this.isEnabled(interactivityData, particle)) continue;
				particle.velocity.setTo(particle.initialVelocity);
			}
			container.attract.particles = [];
			container.attract.finish = false;
			setTimeout(() => {
				if (container.destroyed) return;
				container.attract ??= { particles: [] };
				container.attract.clicking = false;
			}, attract.duration * millisecondsToSeconds);
		};
	}
	get maxDistance() {
		return this.#maxDistance;
	}
	clear() {}
	init() {
		const container = this.container, attract = container.actualOptions.interactivity?.modes.attract;
		if (!attract) return;
		this.#maxDistance = attract.distance;
		container.retina.attractModeDistance = attract.distance * container.retina.pixelRatio;
	}
	interact(interactivityData) {
		this.#interactedThisFrame.clear();
		const options = this.container.actualOptions, mouseMoveStatus = interactivityData.status === mouseMoveEvent, events = options.interactivity?.events;
		if (!events) return;
		const { enable: hoverEnabled, mode: hoverMode } = events.onHover, { enable: clickEnabled, mode: clickMode } = events.onClick;
		if (mouseMoveStatus && hoverEnabled && isInArray(attractMode, hoverMode)) hoverAttract(this.#pluginManager, this.container, interactivityData, (p) => this.isEnabled(interactivityData, p), (p) => {
			this.#trackInteractedParticle(p);
		});
		else if (clickEnabled && isInArray(attractMode, clickMode)) clickAttract(this.#pluginManager, this.container, interactivityData, (p) => this.isEnabled(interactivityData, p), (p) => {
			this.#trackInteractedParticle(p);
		});
		this.#restoreParticles();
	}
	isEnabled(interactivityData, particle) {
		const options = this.container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
		if ((!mouse.position || !events?.onHover.enable) && (!mouse.clickPosition || !events?.onClick.enable)) return false;
		const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
		return isInArray(attractMode, hoverMode) || isInArray(attractMode, clickMode);
	}
	loadModeOptions(options, ...sources) {
		loadOptionProperty(options, "attract", Attract, ...sources);
	}
	reset() {}
	#restoreParticles() {
		const restore = this.container.actualOptions.interactivity?.modes.attract?.restore;
		if (!restore?.enable || !this.#restoreData.size) return;
		const now = Date.now(), restoreDelay = restore.delay * millisecondsToSeconds, restoreSpeed = Math.max(minRestoreSpeed, Math.min(maxRestoreSpeed, restore.speed));
		for (const [particle, restoreData] of this.#restoreData) {
			if (this.#interactedThisFrame.has(particle)) continue;
			if (particle.destroyed) {
				this.#restoreData.delete(particle);
				continue;
			}
			const target = restoreData.target;
			if (now - restoreData.lastInteractionTime < restoreDelay) continue;
			let dx = target.x - particle.position.x, dy = target.y - particle.position.y, dz = target.z - particle.position.z;
			if (restore.follow && particle.options.move.enable) {
				const { x: vx, y: vy, z: vz } = particle.velocity, velocityLengthSq = vx * vx + vy * vy + vz * vz;
				if (velocityLengthSq > minVelocityLengthSq) {
					const parallelScale = (dx * vx + dy * vy + dz * vz) / velocityLengthSq;
					dx -= vx * parallelScale;
					dy -= vy * parallelScale;
					dz -= vz * parallelScale;
				}
			}
			particle.position.x += dx * restoreSpeed;
			particle.position.y += dy * restoreSpeed;
			particle.position.z += dz * restoreSpeed;
			if (Math.abs(dx) <= restoreEpsilon && Math.abs(dy) <= restoreEpsilon) {
				particle.position.x = target.x;
				particle.position.y = target.y;
				particle.position.z = target.z;
				this.#restoreData.delete(particle);
				continue;
			}
		}
	}
	#trackInteractedParticle(particle) {
		this.#interactedThisFrame.add(particle);
		if (!(this.container.actualOptions.interactivity?.modes.attract?.restore)?.enable) return;
		const now = Date.now();
		let restoreData = this.#restoreData.get(particle);
		if (!restoreData) {
			restoreData = {
				target: particle.position.copy(),
				lastInteractionTime: now
			};
			this.#restoreData.set(particle, restoreData);
		}
		restoreData.lastInteractionTime = now;
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-attract/esm/index.js
async function loadExternalAttractInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("externalAttract", (container) => {
			return Promise.resolve(new Attractor(e.pluginManager, container));
		});
	});
}
//#endregion
export { ExternalInteractorBase as _, divModeExecute as a, InteractivityDetect as b, mouseDownEvent as c, mouseUpEvent as d, touchCancelEvent as f, ParticlesInteractorBase as g, touchStartEvent as h, divMode as i, mouseLeaveEvent as l, touchMoveEvent as m, ensureInteractivityPluginLoaded as n, isDivModeEnabled as o, touchEndEvent as p, loadInteractivityPlugin as r, clickEvent as s, loadExternalAttractInteraction as t, mouseMoveEvent as u, InteractorType as v, DivType as x, Interactivity as y };
