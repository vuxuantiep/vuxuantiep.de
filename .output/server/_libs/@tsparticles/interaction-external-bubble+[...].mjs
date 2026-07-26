import { C as itemFromSingleOrMultiple, I as getDistance, J as isArray, P as clamp, T as safeDocument, X as isNull, b as isInArray, ct as millisecondsToSeconds, h as executeOnSingleOrMultiple, st as half } from "./animation-utils+[...].mjs";
import { a as Circle, o as Rectangle } from "../tsparticles__engine.mjs";
import { _ as loadOptionProperty, f as rgbToHsl, h as OptionsColor, i as colorMix, u as rangeColorToHsl, v as loadProperty, y as loadRangeProperty } from "./basic+[...].mjs";
import { _ as ExternalInteractorBase, a as divModeExecute, i as divMode, n as ensureInteractivityPluginLoaded, o as isDivModeEnabled, x as DivType } from "./interaction-external-attract+[...].mjs";
//#region node_modules/unenv/dist/runtime/_internal/utils.mjs
/* @__NO_SIDE_EFFECTS__ */
function createNotImplementedError(name) {
	return /* @__PURE__ */ new Error(`[unenv] ${name} is not implemented yet!`);
}
//#endregion
//#region node_modules/unenv/dist/runtime/web/performance/_polyfills.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var _supportedEntryTypes = [
	"event",
	"mark",
	"measure",
	"resource"
];
var _PerformanceEntry = class {
	__unenv__ = true;
	detail;
	entryType = "event";
	name;
	startTime;
	constructor(name, options) {
		this.name = name;
		this.startTime = options?.startTime || _performanceNow();
		this.detail = options?.detail;
	}
	get duration() {
		return _performanceNow() - this.startTime;
	}
	toJSON() {
		return {
			name: this.name,
			entryType: this.entryType,
			startTime: this.startTime,
			duration: this.duration,
			detail: this.detail
		};
	}
};
var _PerformanceMark = class extends _PerformanceEntry {
	entryType = "mark";
};
var _PerformanceMeasure = class extends _PerformanceEntry {
	entryType = "measure";
};
var _PerformanceResourceTiming = class extends _PerformanceEntry {
	entryType = "resource";
	serverTiming = [];
	connectEnd = 0;
	connectStart = 0;
	decodedBodySize = 0;
	domainLookupEnd = 0;
	domainLookupStart = 0;
	encodedBodySize = 0;
	fetchStart = 0;
	initiatorType = "";
	name = "";
	nextHopProtocol = "";
	redirectEnd = 0;
	redirectStart = 0;
	requestStart = 0;
	responseEnd = 0;
	responseStart = 0;
	secureConnectionStart = 0;
	startTime = 0;
	transferSize = 0;
	workerStart = 0;
	responseStatus = 0;
};
var _PerformanceObserver = class {
	__unenv__ = true;
	static supportedEntryTypes = _supportedEntryTypes;
	_callback = null;
	constructor(callback) {
		this._callback = callback;
	}
	takeRecords() {
		return [];
	}
	disconnect() {
		throw /* @__PURE__ */ createNotImplementedError("PerformanceObserver.disconnect");
	}
	observe(options) {
		throw /* @__PURE__ */ createNotImplementedError("PerformanceObserver.observe");
	}
};
var _PerformanceObserverEntryList = class {
	__unenv__ = true;
	getEntries() {
		return [];
	}
	getEntriesByName(_name, _type) {
		return [];
	}
	getEntriesByType(type) {
		return [];
	}
};
var _Performance = class {
	__unenv__ = true;
	timeOrigin = _timeOrigin;
	eventCounts = /* @__PURE__ */ new Map();
	_entries = [];
	_resourceTimingBufferSize = 0;
	navigation = void 0;
	timing = void 0;
	onresourcetimingbufferfull = null;
	now() {
		if (this.timeOrigin === _timeOrigin) return _performanceNow();
		return Date.now() - this.timeOrigin;
	}
	clearMarks(markName) {
		this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
	}
	clearMeasures(measureName) {
		this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
	}
	clearResourceTimings() {
		this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
	}
	getEntries() {
		return this._entries;
	}
	getEntriesByName(name, type) {
		return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
	}
	getEntriesByType(type) {
		return this._entries.filter((e) => e.entryType === type);
	}
	mark(name, options) {
		const entry = new _PerformanceMark(name, options);
		this._entries.push(entry);
		return entry;
	}
	measure(measureName, startOrMeasureOptions, endMark) {
		let start;
		let end;
		if (typeof startOrMeasureOptions === "string") {
			start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
			end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
		} else {
			start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
			end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
		}
		const entry = new _PerformanceMeasure(measureName, {
			startTime: start,
			detail: {
				start,
				end
			}
		});
		this._entries.push(entry);
		return entry;
	}
	setResourceTimingBufferSize(maxSize) {
		this._resourceTimingBufferSize = maxSize;
	}
	toJSON() {
		return this;
	}
	addEventListener(type, listener, options) {
		throw /* @__PURE__ */ createNotImplementedError("Performance.addEventListener");
	}
	removeEventListener(type, listener, options) {
		throw /* @__PURE__ */ createNotImplementedError("Performance.removeEventListener");
	}
	dispatchEvent(event) {
		throw /* @__PURE__ */ createNotImplementedError("Performance.dispatchEvent");
	}
};
//#endregion
//#region node_modules/unenv/dist/runtime/web/performance/index.mjs
var PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry;
var PerformanceMark = globalThis.PerformanceMark || _PerformanceMark;
var PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure;
var PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming;
var PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver;
var Performance = globalThis.Performance || _Performance;
var PerformanceObserverEntryList = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList;
var performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new _Performance();
//#endregion
//#region node_modules/unenv/dist/runtime/polyfill/performance.mjs
globalThis.performance ||= performance;
globalThis.Performance ||= Performance;
globalThis.PerformanceEntry ||= PerformanceEntry;
globalThis.PerformanceMark ||= PerformanceMark;
globalThis.PerformanceMeasure ||= PerformanceMeasure;
globalThis.PerformanceObserver ||= PerformanceObserver;
globalThis.PerformanceObserverEntryList ||= PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming ||= PerformanceResourceTiming;
var performance_default = globalThis.performance;
//#endregion
//#region node_modules/@tsparticles/interaction-external-bubble/esm/Options/Classes/BubbleBase.js
var BubbleBase = class {
	color;
	distance = 200;
	duration = .4;
	mix = false;
	opacity;
	size;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "distance", data.distance);
		loadProperty(this, "duration", data.duration);
		loadProperty(this, "mix", data.mix);
		loadRangeProperty(this, "opacity", data.opacity);
		if (data.color !== void 0) {
			const sourceColor = isArray(this.color) ? void 0 : this.color;
			this.color = executeOnSingleOrMultiple(data.color, (color) => {
				return OptionsColor.create(sourceColor, color);
			});
		}
		loadProperty(this, "size", data.size);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-bubble/esm/Options/Classes/BubbleDiv.js
var BubbleDiv = class extends BubbleBase {
	selectors = [];
	load(data) {
		super.load(data);
		if (isNull(data)) return;
		loadProperty(this, "selectors", data.selectors);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-bubble/esm/Options/Classes/Bubble.js
var Bubble = class extends BubbleBase {
	divs;
	load(data) {
		super.load(data);
		if (isNull(data)) return;
		this.divs = executeOnSingleOrMultiple(data.divs, (div) => {
			const tmp = new BubbleDiv();
			tmp.load(div);
			return tmp;
		});
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-bubble/esm/BubbleModifier.js
var BubbleModifier = class {
	div;
	enabled = false;
	fillColor;
	finalColor;
	id = "bubble";
	inRange = false;
	opacity;
	priority = 100;
	radius;
	strokeColor;
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-bubble/esm/Enums.js
var ProcessBubbleType;
(function(ProcessBubbleType) {
	ProcessBubbleType["color"] = "color";
	ProcessBubbleType["opacity"] = "opacity";
	ProcessBubbleType["size"] = "size";
})(ProcessBubbleType || (ProcessBubbleType = {}));
//#endregion
//#region node_modules/@tsparticles/interaction-external-bubble/esm/Utils.js
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
	if (modeValue >= optionsValue) return clamp(particleValue + (modeValue - optionsValue) * ratio, particleValue, modeValue);
	else if (modeValue < optionsValue) return clamp(particleValue - (optionsValue - modeValue) * ratio, modeValue, particleValue);
}
//#endregion
//#region node_modules/@tsparticles/interaction-external-bubble/esm/Bubbler.js
var bubbleMode = "bubble", minDistance = 0, defaultClickTime = 0, defaultOpacity = 1, ratioOffset = 1, defaultBubbleValue = 0, minRatio = 0, defaultRatio = 1;
var Bubbler = class extends ExternalInteractorBase {
	handleClickMode;
	#maxDistance;
	#modifiers = /* @__PURE__ */ new WeakMap();
	#pluginManager;
	constructor(pluginManager, container) {
		super(container);
		this.#pluginManager = pluginManager;
		this.#maxDistance = 0;
		container.bubble ??= {};
		this.handleClickMode = (mode) => {
			if (mode !== bubbleMode) return;
			container.bubble ??= {};
			container.bubble.clicking = true;
		};
	}
	get maxDistance() {
		return this.#maxDistance;
	}
	clear(particle, _delta, force) {
		if (this.#modifiers.get(particle)?.inRange && !force) return;
		particle.removeModifier(bubbleMode);
		this.#modifiers.delete(particle);
	}
	getOrCreateModifier(particle) {
		let mod = this.#modifiers.get(particle);
		if (!mod) {
			mod = new BubbleModifier();
			this.#modifiers.set(particle, mod);
			particle.addModifier(mod);
		}
		return mod;
	}
	init() {
		const container = this.container, bubble = container.actualOptions.interactivity?.modes.bubble;
		if (!bubble) return;
		this.#maxDistance = bubble.distance;
		container.retina.bubbleModeDistance = bubble.distance * container.retina.pixelRatio;
		if (bubble.size !== void 0) container.retina.bubbleModeSize = bubble.size * container.retina.pixelRatio;
	}
	interact(interactivityData, delta) {
		const events = this.container.actualOptions.interactivity?.events;
		if (!events) return;
		const onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
		if (hoverEnabled && isInArray(bubbleMode, hoverMode)) this.#hoverBubble(interactivityData);
		else if (clickEnabled && isInArray(bubbleMode, clickMode)) this.#clickBubble(interactivityData);
		else divModeExecute(bubbleMode, divs, (selector, div) => {
			this.#singleSelectorHover(interactivityData, delta, selector, div);
		});
	}
	isEnabled(interactivityData, particle) {
		const options = this.container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
		if (!events) return false;
		const { onClick, onDiv, onHover } = events, divBubble = isDivModeEnabled(bubbleMode, onDiv);
		if (!(divBubble || onHover.enable && !!mouse.position || onClick.enable && mouse.clickPosition)) return false;
		return isInArray(bubbleMode, onHover.mode) || isInArray(bubbleMode, onClick.mode) || divBubble;
	}
	loadModeOptions(options, ...sources) {
		loadOptionProperty(options, "bubble", Bubble, ...sources);
	}
	reset(_interactivityData, particle) {
		const mod = this.#modifiers.get(particle);
		if (mod) {
			mod.enabled = false;
			mod.inRange = false;
		}
	}
	#clickBubble(interactivityData) {
		const container = this.container, options = container.actualOptions, mouseClickPos = interactivityData.mouse.clickPosition, bubbleOptions = options.interactivity?.modes.bubble;
		if (!bubbleOptions || !mouseClickPos) return;
		container.bubble ??= {};
		const distance = container.retina.bubbleModeDistance;
		if (!distance || distance < minDistance) return;
		const query = container.particles.grid.queryCircle(mouseClickPos, distance, (p) => this.isEnabled(interactivityData, p)), { bubble } = container;
		for (const particle of query) {
			if (!bubble.clicking) continue;
			const mod = this.getOrCreateModifier(particle);
			mod.enabled = !bubble.durationEnd;
			mod.inRange = !bubble.durationEnd;
			const distMouse = getDistance(particle.getPosition(), mouseClickPos), timeSpent = (performance_default.now() - (interactivityData.mouse.clickTime ?? defaultClickTime)) / millisecondsToSeconds;
			if (timeSpent > bubbleOptions.duration) bubble.durationEnd = true;
			if (timeSpent > bubbleOptions.duration * 2) {
				bubble.clicking = false;
				bubble.durationEnd = false;
			}
			const sizeData = {
				bubbleObj: {
					optValue: container.retina.bubbleModeSize,
					value: mod.radius
				},
				particlesObj: {
					optValue: particle.size.max,
					value: particle.size.value
				},
				type: ProcessBubbleType.size
			};
			this.#process(particle, distMouse, timeSpent, sizeData);
			const opacityData = {
				bubbleObj: {
					optValue: bubbleOptions.opacity,
					value: mod.opacity
				},
				particlesObj: {
					optValue: particle.opacity?.max ?? defaultOpacity,
					value: particle.opacity?.value ?? defaultOpacity
				},
				type: ProcessBubbleType.opacity
			};
			this.#process(particle, distMouse, timeSpent, opacityData);
			if (!bubble.durationEnd && distMouse <= distance) this.#hoverBubbleColor(particle, distMouse);
			else {
				mod.fillColor = void 0;
				mod.strokeColor = void 0;
			}
		}
	}
	#hoverBubble(interactivityData) {
		const container = this.container, mousePos = interactivityData.mouse.position, distance = container.retina.bubbleModeDistance;
		if (!distance || distance < minDistance || !mousePos) return;
		const query = container.particles.grid.queryCircle(mousePos, distance, (p) => this.isEnabled(interactivityData, p));
		for (const particle of query) {
			const mod = this.getOrCreateModifier(particle);
			mod.enabled = true;
			mod.inRange = true;
			const pointDistance = getDistance(particle.getPosition(), mousePos), ratio = ratioOffset - pointDistance / distance;
			if (pointDistance <= distance) {
				if (ratio >= minRatio && interactivityData.status === "pointermove") {
					this.#hoverBubbleSize(particle, ratio);
					this.#hoverBubbleOpacity(particle, ratio);
					this.#hoverBubbleColor(particle, ratio);
				}
			} else this.reset(interactivityData, particle);
			if (interactivityData.status === "pointerleave") this.reset(interactivityData, particle);
		}
	}
	#hoverBubbleColor(particle, ratio, divBubble) {
		const options = this.container.actualOptions, bubbleOptions = divBubble ?? options.interactivity?.modes.bubble, mod = this.getOrCreateModifier(particle);
		if (!bubbleOptions) return;
		if (!mod.finalColor) {
			const modeColor = bubbleOptions.color;
			if (!modeColor) return;
			const bubbleColor = itemFromSingleOrMultiple(modeColor);
			mod.finalColor = rangeColorToHsl(this.#pluginManager, bubbleColor);
		}
		if (!mod.finalColor) return;
		if (bubbleOptions.mix) {
			mod.fillColor = void 0;
			mod.strokeColor = void 0;
			const pColor = particle.getFillColor();
			if (pColor) {
				const mixedColor = rgbToHsl(colorMix(pColor, mod.finalColor, ratioOffset - ratio, ratio));
				mod.fillColor = mixedColor;
				mod.strokeColor = mixedColor;
			} else {
				mod.fillColor = mod.finalColor;
				mod.strokeColor = mod.finalColor;
			}
		} else {
			mod.fillColor = mod.finalColor;
			mod.strokeColor = mod.finalColor;
		}
	}
	#hoverBubbleOpacity(particle, ratio, divBubble) {
		const options = this.container.actualOptions, modeOpacity = divBubble?.opacity ?? options.interactivity?.modes.bubble?.opacity;
		if (!modeOpacity) return;
		const opacity = calculateBubbleValue(particle.opacity?.value ?? defaultOpacity, modeOpacity, particle.opacity?.max ?? defaultOpacity, ratio);
		if (opacity !== void 0) {
			const mod = this.getOrCreateModifier(particle);
			mod.opacity = opacity;
		}
	}
	#hoverBubbleSize(particle, ratio, divBubble) {
		const container = this.container, modeSize = divBubble?.size ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
		if (modeSize === void 0) return;
		const pSize = particle.size.value, size = calculateBubbleValue(pSize, modeSize, particle.size.max, ratio);
		if (size !== void 0) {
			const mod = this.getOrCreateModifier(particle);
			mod.radius = size;
		}
	}
	#process(particle, distMouse, timeSpent, data) {
		const container = this.container, bubbleParam = data.bubbleObj.optValue, bubbleOptions = container.actualOptions.interactivity?.modes.bubble;
		if (!bubbleOptions || bubbleParam === void 0) return;
		const bubbleDuration = bubbleOptions.duration, bubbleDistance = container.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value ?? defaultBubbleValue, type = data.type;
		if (!bubbleDistance || bubbleDistance < minDistance || bubbleParam === particlesParam) return;
		container.bubble ??= {};
		const mod = this.getOrCreateModifier(particle);
		if (container.bubble.durationEnd) {
			if (pObjBubble) {
				if (type === ProcessBubbleType.size) mod.radius = void 0;
				if (type === ProcessBubbleType.opacity) mod.opacity = void 0;
			}
		} else if (distMouse <= bubbleDistance) {
			if ((pObjBubble ?? pObj) !== bubbleParam) {
				const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
				if (type === ProcessBubbleType.size) mod.radius = value;
				if (type === ProcessBubbleType.opacity) mod.opacity = value;
			}
		} else {
			if (type === ProcessBubbleType.size) mod.radius = void 0;
			if (type === ProcessBubbleType.opacity) mod.opacity = void 0;
		}
	}
	#singleSelectorHover(interactivityData, delta, selector, div) {
		const container = this.container, selectors = safeDocument().querySelectorAll(selector), bubble = container.actualOptions.interactivity?.modes.bubble;
		if (!bubble || !selectors.length) return;
		selectors.forEach((item) => {
			const elem = item, pxRatio = container.retina.pixelRatio, pos = {
				x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
				y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
			}, repulseRadius = elem.offsetWidth * half * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container.particles.grid.query(area, (p) => this.isEnabled(interactivityData, p));
			for (const particle of query) {
				if (!area.contains(particle.getPosition())) continue;
				const mod = this.getOrCreateModifier(particle);
				mod.enabled = true;
				mod.inRange = true;
				const divs = bubble.divs, divBubble = divMode(divs, elem);
				if (!mod.div || mod.div !== elem) {
					this.clear(particle, delta, true);
					mod.div = elem;
				}
				this.#hoverBubbleSize(particle, defaultRatio, divBubble);
				this.#hoverBubbleOpacity(particle, defaultRatio, divBubble);
				this.#hoverBubbleColor(particle, defaultRatio, divBubble);
			}
		});
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-external-bubble/esm/index.js
async function loadExternalBubbleInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("externalBubble", (container) => {
			return Promise.resolve(new Bubbler(e.pluginManager, container));
		});
	});
}
//#endregion
export { performance_default as n, loadExternalBubbleInteraction as t };
