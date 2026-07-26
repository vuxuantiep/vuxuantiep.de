//#region node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js
var generatedAttribute = "generated";
var defaultCompositeValue = "source-over";
var resizeEvent = "resize";
var visibilityChangeEvent = "visibilitychange";
var half = .5;
var millisecondsToSeconds = 1e3;
var originPoint = {
	x: 0,
	y: 0,
	z: 0
};
var defaultTransform = {
	a: 1,
	b: 0,
	c: 0,
	d: 1
};
var randomColorValue = "random";
var doublePI = Math.PI * 2;
var generatedTrue = "true";
var generatedFalse = "false";
var canvasTag = "canvas";
var quarter = .25;
var threeQuarter = .75;
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/Directions/MoveDirection.js
var MoveDirection;
(function(MoveDirection) {
	MoveDirection["bottom"] = "bottom";
	MoveDirection["bottomLeft"] = "bottom-left";
	MoveDirection["bottomRight"] = "bottom-right";
	MoveDirection["left"] = "left";
	MoveDirection["none"] = "none";
	MoveDirection["right"] = "right";
	MoveDirection["top"] = "top";
	MoveDirection["topLeft"] = "top-left";
	MoveDirection["topRight"] = "top-right";
	MoveDirection["outside"] = "outside";
	MoveDirection["inside"] = "inside";
})(MoveDirection || (MoveDirection = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/Utils/Vectors.js
function getZ(source) {
	return "z" in source ? source.z : originPoint.z;
}
var Vector3d = class Vector3d {
	x;
	y;
	z;
	constructor(x = originPoint.x, y = originPoint.y, z = originPoint.z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	static get origin() {
		return Vector3d.create(originPoint.x, originPoint.y, originPoint.z);
	}
	get angle() {
		return Math.atan2(this.y, this.x);
	}
	set angle(angle) {
		this.#updateFromAngle(angle, this.length);
	}
	get length() {
		return Math.sqrt(this.getLengthSq());
	}
	set length(length) {
		this.#updateFromAngle(this.angle, length);
	}
	static clone(source) {
		return Vector3d.create(source.x, source.y, getZ(source));
	}
	static create(x, y, z) {
		if (typeof x === "number") return new Vector3d(x, y ?? originPoint.y, z ?? originPoint.z);
		return new Vector3d(x.x, x.y, getZ(x));
	}
	add(v) {
		return Vector3d.create(this.x + v.x, this.y + v.y, this.z + getZ(v));
	}
	addTo(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += getZ(v);
	}
	copy() {
		return Vector3d.clone(this);
	}
	div(n) {
		return Vector3d.create(this.x / n, this.y / n, this.z / n);
	}
	getLengthSq() {
		return this.x ** 2 + this.y ** 2;
	}
	mult(n) {
		return Vector3d.create(this.x * n, this.y * n, this.z * n);
	}
	multTo(n) {
		this.x *= n;
		this.y *= n;
		this.z *= n;
	}
	normalize() {
		const length = this.length;
		if (length != 0) this.multTo(1 / length);
	}
	rotate(angle) {
		return Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), originPoint.z);
	}
	setTo(c) {
		this.x = c.x;
		this.y = c.y;
		this.z = getZ(c);
	}
	sub(v) {
		return Vector3d.create(this.x - v.x, this.y - v.y, this.z - getZ(v));
	}
	subFrom(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= getZ(v);
	}
	#updateFromAngle(angle, length) {
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
	}
};
var Vector = class Vector extends Vector3d {
	constructor(x = originPoint.x, y = originPoint.y) {
		super(x, y, originPoint.z);
	}
	static get origin() {
		return Vector.create(originPoint.x, originPoint.y);
	}
	static clone(source) {
		return Vector.create(source.x, source.y);
	}
	static create(x, y) {
		if (typeof x === "number") return new Vector(x, y ?? originPoint.y);
		return new Vector(x.x, x.y);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js
function isBoolean(arg) {
	return typeof arg === "boolean";
}
function isString(arg) {
	return typeof arg === "string";
}
function isNumber(arg) {
	return typeof arg === "number";
}
function isObject(arg) {
	return typeof arg === "object" && arg !== null;
}
function isArray(arg) {
	return Array.isArray(arg);
}
function isNull(arg) {
	return arg === null || arg === void 0;
}
//#endregion
//#region node_modules/@tsparticles/engine/esm/Utils/MathUtils.js
var degToRadFactor = Math.PI / 180;
var _random = Math.random;
var _animationLoop = {
	nextFrame: (cb) => requestAnimationFrame(cb),
	cancel: (idx) => {
		cancelAnimationFrame(idx);
	}
};
function getRandom() {
	return clamp(_random(), 0, 1 - Number.EPSILON);
}
function getRandomInRange(min, max) {
	return getRandom() * (max - min) + min;
}
function animate(fn) {
	return _animationLoop.nextFrame(fn);
}
function cancelAnimation(handle) {
	_animationLoop.cancel(handle);
}
function clamp(num, min, max) {
	return Math.min(Math.max(num, min), max);
}
function mix(comp1, comp2, weight1, weight2) {
	return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
function randomInRangeValue(r) {
	const max = getRangeMax(r), minOffset = 0;
	let min = getRangeMin(r);
	if (max === min) min = minOffset;
	return getRandomInRange(min, max);
}
function getRangeValue(value) {
	return isNumber(value) ? value : randomInRangeValue(value);
}
function getRangeMin(value) {
	return isNumber(value) ? value : value.min;
}
function getRangeMax(value) {
	return isNumber(value) ? value : value.max;
}
function setRangeValue(source, value) {
	if (source === value || value === void 0 && isNumber(source)) return source;
	const min = getRangeMin(source), max = getRangeMax(source);
	return value !== void 0 ? {
		min: Math.min(min, value),
		max: Math.max(max, value)
	} : setRangeValue(min, max);
}
function getDistances(pointA, pointB) {
	const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
	return {
		dx,
		dy,
		distance: Math.hypot(dx, dy)
	};
}
function getDistanceSq(pointA, pointB) {
	const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
	return dx * dx + dy * dy;
}
function getDistance(pointA, pointB) {
	return Math.sqrt(getDistanceSq(pointA, pointB));
}
function checkDistance(pointA, pointB, distance) {
	return getDistanceSq(pointA, pointB) <= distance * distance;
}
function degToRad(degrees) {
	return degrees * degToRadFactor;
}
function getParticleDirectionAngle(direction, position, center) {
	if (isNumber(direction)) return degToRad(direction);
	switch (direction) {
		case MoveDirection.top: return -Math.PI * half;
		case MoveDirection.topRight: return -Math.PI * quarter;
		case MoveDirection.right: return 0;
		case MoveDirection.bottomRight: return Math.PI * quarter;
		case MoveDirection.bottom: return Math.PI * half;
		case MoveDirection.bottomLeft: return Math.PI * threeQuarter;
		case MoveDirection.left: return Math.PI;
		case MoveDirection.topLeft: return -Math.PI * threeQuarter;
		case MoveDirection.inside: return Math.atan2(center.y - position.y, center.x - position.x);
		case MoveDirection.outside: return Math.atan2(position.y - center.y, position.x - center.x);
		default: return getRandom() * doublePI;
	}
}
function getParticleBaseVelocity(direction) {
	const baseVelocity = Vector.origin;
	baseVelocity.length = 1;
	baseVelocity.angle = direction;
	return baseVelocity;
}
function collisionVelocity(v1, v2, m1, m2) {
	return Vector.create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * 2 * m2 / (m1 + m2), v1.y);
}
function calcExactPositionOrRandomFromSize(data) {
	const { position, size } = data;
	return {
		x: position?.x ?? getRandom() * size.width,
		y: position?.y ?? getRandom() * size.height
	};
}
function parseAlpha(input) {
	const defaultAlpha = 1;
	if (!input) return defaultAlpha;
	return input.endsWith("%") ? parseFloat(input) / 100 : parseFloat(input);
}
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/Directions/OutModeDirection.js
var OutModeDirection;
(function(OutModeDirection) {
	OutModeDirection["bottom"] = "bottom";
	OutModeDirection["left"] = "left";
	OutModeDirection["right"] = "right";
	OutModeDirection["top"] = "top";
})(OutModeDirection || (OutModeDirection = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/Modes/PixelMode.js
var PixelMode;
(function(PixelMode) {
	PixelMode["precise"] = "precise";
	PixelMode["percent"] = "percent";
})(PixelMode || (PixelMode = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Utils/Utils.js
var minRadius = 0;
function isForbiddenKey(key) {
	return key === "__proto__" || key === "constructor" || key === "prototype";
}
function hasMatchMedia() {
	return typeof matchMedia !== "undefined";
}
function safeDocument() {
	return globalThis.document;
}
function safeMatchMedia(query) {
	if (!hasMatchMedia()) return;
	return matchMedia(query);
}
function safeMutationObserver(callback) {
	if (typeof MutationObserver === "undefined") return;
	return new MutationObserver(callback);
}
function isInArray(value, array) {
	return value === array || isArray(array) && array.includes(value);
}
function itemFromArray(array, index, useIndex = true) {
	return array[index !== void 0 && useIndex ? index % array.length : Math.floor(getRandom() * array.length)];
}
function isPointInside(point, size, offset, radius, direction) {
	return areBoundsInside(calculateBounds(point, radius ?? minRadius), size, offset, direction);
}
function areBoundsInside(bounds, size, offset, direction) {
	let inside = true;
	if (!direction || direction === OutModeDirection.bottom) inside = bounds.top < size.height + offset.x;
	if (inside && (!direction || direction === OutModeDirection.left)) inside = bounds.right > offset.x;
	if (inside && (!direction || direction === OutModeDirection.right)) inside = bounds.left < size.width + offset.y;
	if (inside && (!direction || direction === OutModeDirection.top)) inside = bounds.bottom > offset.y;
	return inside;
}
function calculateBounds(point, radius) {
	return {
		bottom: point.y + radius,
		left: point.x - radius,
		right: point.x + radius,
		top: point.y - radius
	};
}
function deepExtend(destination, ...sources) {
	for (const source of sources) {
		if (isNull(source)) continue;
		if (!isObject(source)) {
			destination = source;
			continue;
		}
		if (Array.isArray(source)) {
			if (!Array.isArray(destination)) destination = [];
		} else if (!isObject(destination) || Array.isArray(destination)) destination = Object.create(null);
		const sourceKeys = Object.keys(source);
		if (!sourceKeys.some((k) => {
			const v = source[k];
			return isObject(v) || Array.isArray(v);
		})) {
			const sourceDict = source, destDict = destination;
			for (const key of sourceKeys) {
				if (isForbiddenKey(key)) continue;
				const v = sourceDict[key];
				if (v !== void 0) destDict[key] = v;
			}
			continue;
		}
		for (const key of sourceKeys) {
			if (isForbiddenKey(key)) continue;
			const sourceDict = source, destDict = destination, value = sourceDict[key];
			destDict[key] = Array.isArray(value) ? value.map((v) => deepExtend(void 0, v)) : deepExtend(destDict[key], value);
		}
	}
	return destination;
}
function circleBounceDataFromParticle(p) {
	return {
		position: p.getPosition(),
		radius: p.getRadius(),
		mass: p.getMass(),
		velocity: p.velocity,
		factor: Vector.create(getRangeValue(p.options.bounce.horizontal.value), getRangeValue(p.options.bounce.vertical.value))
	};
}
function circleBounce(p1, p2) {
	const { x: xVelocityDiff, y: yVelocityDiff } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [p1.position, p2.position], { dx: xDist, dy: yDist } = getDistances(pos2, pos1);
	if (xVelocityDiff * xDist + yVelocityDiff * yDist < 0) return;
	const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = collisionVelocity(u1, u2, m1, m2), v2 = collisionVelocity(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
	p1.velocity.x = vFinal1.x * p1.factor.x;
	p1.velocity.y = vFinal1.y * p1.factor.y;
	p2.velocity.x = vFinal2.x * p2.factor.x;
	p2.velocity.y = vFinal2.y * p2.factor.y;
}
function executeOnSingleOrMultiple(obj, callback) {
	return isArray(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, 0);
}
function itemFromSingleOrMultiple(obj, index, useIndex) {
	return isArray(obj) ? itemFromArray(obj, index, useIndex) : obj;
}
function getPositionOrSize(positionOrSize, canvasSize) {
	if (!(positionOrSize.mode === PixelMode.percent)) {
		const { mode: _, ...rest } = positionOrSize;
		return rest;
	}
	if ("x" in positionOrSize) return {
		x: positionOrSize.x / 100 * canvasSize.width,
		y: positionOrSize.y / 100 * canvasSize.height
	};
	else return {
		width: positionOrSize.width / 100 * canvasSize.width,
		height: positionOrSize.height / 100 * canvasSize.height
	};
}
function getPosition(position, canvasSize) {
	return getPositionOrSize(position, canvasSize);
}
function cloneStyle(style) {
	const clonedStyle = safeDocument().createElement("div").style;
	for (const key in style) {
		const styleKey = style[key];
		if (!(key in style) || isNull(styleKey)) continue;
		const styleValue = style.getPropertyValue?.(styleKey);
		if (!styleValue) continue;
		const stylePriority = style.getPropertyPriority?.(styleKey);
		if (stylePriority) clonedStyle.setProperty(styleKey, styleValue, stylePriority);
		else clonedStyle.setProperty(styleKey, styleValue);
	}
	return clonedStyle;
}
var _cachedZIndex, _cachedStyle;
function getFullScreenStyle(zIndex) {
	if (_cachedZIndex !== zIndex || !_cachedStyle) {
		_cachedZIndex = zIndex;
		const fullScreenStyle = safeDocument().createElement("div").style, radix = 10, style = {
			width: "100%",
			height: "100%",
			margin: "0",
			padding: "0",
			borderWidth: "0",
			position: "fixed",
			zIndex: zIndex.toString(radix),
			"z-index": zIndex.toString(radix),
			top: "0",
			left: "0",
			"pointer-events": "none"
		};
		for (const key in style) {
			const value = style[key];
			if (value === void 0) continue;
			fullScreenStyle.setProperty(key, value);
		}
		_cachedStyle = fullScreenStyle;
	}
	return _cachedStyle;
}
function manageListener(element, event, handler, add, options) {
	if (add) {
		let addOptions = { passive: true };
		if (isBoolean(options)) addOptions.capture = options;
		else if (options !== void 0) addOptions = options;
		element.addEventListener(event, handler, addOptions);
	} else {
		const removeOptions = options;
		element.removeEventListener(event, handler, removeOptions);
	}
}
async function getItemsFromInitializer(container, map, initializers, force = false) {
	let res = map.get(container);
	if (!res || force) {
		res = await Promise.all([...initializers.values()].map((t) => t(container)));
		map.set(container, res);
	}
	return res;
}
async function getItemMapFromInitializer(container, map, initializers, force = false) {
	let res = map.get(container);
	if (!res || force) {
		const entries = await Promise.all([...initializers.entries()].map(([key, initializer]) => initializer(container).then((item) => [key, item])));
		res = new Map(entries);
		map.set(container, res);
	}
	return res;
}
//#endregion
//#region node_modules/@tsparticles/engine/esm/Utils/EventDispatcher.js
var EventDispatcher = class {
	#listeners;
	constructor() {
		this.#listeners = /* @__PURE__ */ new Map();
	}
	addEventListener(type, listener) {
		this.removeEventListener(type, listener);
		let arr = this.#listeners.get(type);
		if (!arr) {
			arr = [];
			this.#listeners.set(type, arr);
		}
		arr.push(listener);
	}
	dispatchEvent(type, args) {
		this.#listeners.get(type)?.forEach((handler) => {
			handler(args);
		});
	}
	hasEventListener(type) {
		return !!this.#listeners.get(type);
	}
	removeAllEventListeners(type) {
		if (!type) this.#listeners = /* @__PURE__ */ new Map();
		else this.#listeners.delete(type);
	}
	removeEventListener(type, listener) {
		const arr = this.#listeners.get(type);
		if (!arr) return;
		const length = arr.length, idx = arr.indexOf(listener);
		if (idx < 0) return;
		if (length === 1) this.#listeners.delete(type);
		else arr.splice(idx, 1);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/Types/EventType.js
var EventType;
(function(EventType) {
	EventType["configAdded"] = "configAdded";
	EventType["containerInit"] = "containerInit";
	EventType["particlesSetup"] = "particlesSetup";
	EventType["containerStarted"] = "containerStarted";
	EventType["containerStopped"] = "containerStopped";
	EventType["containerDestroyed"] = "containerDestroyed";
	EventType["containerPaused"] = "containerPaused";
	EventType["containerPlay"] = "containerPlay";
	EventType["containerBuilt"] = "containerBuilt";
	EventType["particleAdded"] = "particleAdded";
	EventType["particleDestroyed"] = "particleDestroyed";
	EventType["particleRemoved"] = "particleRemoved";
})(EventType || (EventType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/Utils/PluginManager.js
var PluginManager = class {
	colorManagers = /* @__PURE__ */ new Map();
	easingFunctions = /* @__PURE__ */ new Map();
	effectDrawers = /* @__PURE__ */ new Map();
	initializers = {
		effects: /* @__PURE__ */ new Map(),
		shapes: /* @__PURE__ */ new Map(),
		updaters: /* @__PURE__ */ new Map()
	};
	palettes = /* @__PURE__ */ new Map();
	plugins = [];
	presets = /* @__PURE__ */ new Map();
	shapeDrawers = /* @__PURE__ */ new Map();
	updaters = /* @__PURE__ */ new Map();
	#allLoadersSet = /* @__PURE__ */ new Set();
	#configs = /* @__PURE__ */ new Map();
	#engine;
	#executedSet = /* @__PURE__ */ new Set();
	#initialized = false;
	#isRunningLoaders = false;
	#loadPromises = /* @__PURE__ */ new Set();
	constructor(engine) {
		this.#engine = engine;
	}
	get configs() {
		const res = {};
		for (const [name, config] of this.#configs) res[name] = config;
		return res;
	}
	addColorManager(name, manager) {
		this.colorManagers.set(name, manager);
	}
	addConfig(config) {
		const key = config.key ?? config.name ?? "default";
		this.#configs.set(key, config);
		this.#engine.dispatchEvent(EventType.configAdded, { data: {
			name: key,
			config
		} });
	}
	addEasing(name, easing) {
		if (this.easingFunctions.get(name)) return;
		this.easingFunctions.set(name, easing);
	}
	addEffect(effect, drawer) {
		this.initializers.effects.set(effect, drawer);
	}
	addPalette(name, palette) {
		this.palettes.set(name, palette);
	}
	addParticleUpdater(name, updaterInitializer) {
		this.initializers.updaters.set(name, updaterInitializer);
	}
	addPlugin(plugin) {
		if (this.getPlugin(plugin.id)) return;
		this.plugins.push(plugin);
	}
	addPreset(preset, options, override = false) {
		if (!(override || !this.getPreset(preset))) return;
		this.presets.set(preset, options);
	}
	addShape(shapes, drawer) {
		for (const shape of shapes) this.initializers.shapes.set(shape, drawer);
	}
	clearPlugins(container) {
		this.effectDrawers.delete(container);
		this.shapeDrawers.delete(container);
		this.updaters.delete(container);
	}
	getEasing(name) {
		return this.easingFunctions.get(name) ?? ((value) => value);
	}
	getEffectDrawers(container, force = false) {
		return getItemMapFromInitializer(container, this.effectDrawers, this.initializers.effects, force);
	}
	getPalette(name) {
		return this.palettes.get(name);
	}
	getPlugin(plugin) {
		return this.plugins.find((t) => t.id === plugin);
	}
	getPreset(preset) {
		return this.presets.get(preset);
	}
	async getShapeDrawers(container, force = false) {
		return getItemMapFromInitializer(container, this.shapeDrawers, this.initializers.shapes, force);
	}
	async getUpdaters(container, force = false) {
		return getItemsFromInitializer(container, this.updaters, this.initializers.updaters, force);
	}
	async init() {
		if (this.#initialized || this.#isRunningLoaders) return;
		this.#isRunningLoaders = true;
		this.#executedSet = /* @__PURE__ */ new Set();
		this.#allLoadersSet = new Set(this.#loadPromises);
		try {
			for (const loader of this.#allLoadersSet) await this.#runLoader(loader, this.#executedSet, this.#allLoadersSet);
		} finally {
			this.#loadPromises.clear();
			this.#isRunningLoaders = false;
			this.#initialized = true;
		}
	}
	loadParticlesOptions(container, options, ...sourceOptions) {
		const updaters = this.updaters.get(container);
		if (!updaters) return;
		updaters.forEach((updater) => updater.loadOptions?.(options, ...sourceOptions));
	}
	async register(...loaders) {
		if (this.#initialized) throw new Error("Register plugins can only be done before calling tsParticles.load()");
		for (const loader of loaders) if (this.#isRunningLoaders) await this.#runLoader(loader, this.#executedSet, this.#allLoadersSet);
		else this.#loadPromises.add(loader);
	}
	async #runLoader(loader, executed, allLoaders) {
		if (executed.has(loader)) return;
		executed.add(loader);
		allLoaders.add(loader);
		await loader(this.#engine);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Utils/LogUtils.js
var errorPrefix = "tsParticles - Error";
var wrap = (fn) => (...args) => {
	fn(...args);
}, _logger = {
	debug: wrap(console.debug),
	error: (message, ...optionalParams) => {
		console.error(`${errorPrefix} - ${message}`, ...optionalParams);
	},
	info: wrap(console.info),
	log: wrap(console.log),
	trace: wrap(console.trace),
	verbose: wrap(console.log),
	warning: wrap(console.warn)
};
function getLogger() {
	return _logger;
}
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/Engine.js
var fullPercent = "100%";
async function getDataFromUrl(data) {
	const url = itemFromSingleOrMultiple(data.url, data.index);
	if (!url) return data.fallback;
	const response = await fetch(url);
	if (response.ok) return await response.json();
	getLogger().error(`${response.status.toString()} while retrieving config file`);
	return data.fallback;
}
var getCanvasFromContainer = (domContainer) => {
	const documentSafe = safeDocument();
	let canvasEl;
	if (domContainer instanceof HTMLCanvasElement || domContainer.tagName.toLowerCase() === "canvas") {
		canvasEl = domContainer;
		canvasEl.dataset[generatedAttribute] ??= generatedFalse;
		if (canvasEl.dataset["generated"] === "true") {
			canvasEl.style.width ||= fullPercent;
			canvasEl.style.height ||= fullPercent;
			canvasEl.style.pointerEvents = "none";
			canvasEl.style.setProperty("pointer-events", "none");
		}
	} else {
		const foundCanvas = domContainer.getElementsByTagName(canvasTag).item(0);
		if (foundCanvas) {
			canvasEl = foundCanvas;
			canvasEl.dataset[generatedAttribute] = generatedFalse;
		} else {
			canvasEl = documentSafe.createElement(canvasTag);
			canvasEl.dataset[generatedAttribute] = generatedTrue;
			domContainer.appendChild(canvasEl);
		}
		canvasEl.style.width ||= fullPercent;
		canvasEl.style.height ||= fullPercent;
		canvasEl.style.pointerEvents = "none";
		canvasEl.style.setProperty("pointer-events", "none");
	}
	return canvasEl;
}, getDomContainer = (id, source) => {
	const documentSafe = safeDocument();
	let domContainer = source ?? documentSafe.getElementById(id);
	if (domContainer) return domContainer;
	domContainer = documentSafe.createElement("canvas");
	domContainer.id = id;
	domContainer.dataset[generatedAttribute] = generatedTrue;
	documentSafe.body.append(domContainer);
	return domContainer;
};
var Engine = class {
	pluginManager = new PluginManager(this);
	#domArray = [];
	#eventDispatcher = new EventDispatcher();
	#initialized = false;
	get items() {
		return this.#domArray;
	}
	get version() {
		return "4.3.2";
	}
	addEventListener(type, listener) {
		this.#eventDispatcher.addEventListener(type, listener);
	}
	checkVersion(pluginVersion) {
		if (this.version === pluginVersion) return;
		throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${pluginVersion}`);
	}
	dispatchEvent(type, args) {
		this.#eventDispatcher.dispatchEvent(type, args);
	}
	async init() {
		if (this.#initialized) return;
		await this.pluginManager.init();
		this.#initialized = true;
	}
	item(index) {
		const items = this.items, item = items[index];
		if (item?.destroyed) {
			items.splice(index, 1);
			return;
		}
		return item;
	}
	async load(params) {
		await this.init();
		let domSourceElement;
		if (typeof HTMLElement !== "undefined" && params.element instanceof HTMLElement) domSourceElement = params.element;
		const { Container } = await import("../tsparticles__engine.mjs").then((n) => n.t), id = params.id ?? domSourceElement?.id ?? `tsparticles${Math.floor(getRandom() * 1e4).toString()}`, { index, url } = params, currentOptions = itemFromSingleOrMultiple(url ? await getDataFromUrl({
			fallback: params.options,
			url,
			index
		}) : params.options, index), { items } = this, oldIndex = items.findIndex((v) => v.id.description === id), newItem = new Container({
			dispatchCallback: (eventType, args) => {
				this.dispatchEvent(eventType, args);
			},
			id,
			onDestroy: (remove) => {
				if (!remove) return;
				const mainArr = this.items, idx = mainArr.indexOf(newItem);
				if (idx >= 0) mainArr.splice(idx, 1);
			},
			pluginManager: this.pluginManager,
			sourceOptions: currentOptions
		});
		if (oldIndex >= 0) {
			const old = this.item(oldIndex), deleteCount = old ? 1 : 0;
			if (old && !old.destroyed) old.destroy(false);
			items.splice(oldIndex, deleteCount, newItem);
		} else items.push(newItem);
		const sourceCanvas = typeof OffscreenCanvas !== "undefined" && params.element instanceof OffscreenCanvas ? params.element : getCanvasFromContainer(getDomContainer(id, domSourceElement));
		newItem.canvas.loadCanvas(sourceCanvas);
		await newItem.start();
		return newItem;
	}
	async refresh(refresh = true) {
		if (!refresh) return;
		await Promise.all(this.items.map((t) => t.refresh()));
	}
	removeEventListener(type, listener) {
		this.#eventDispatcher.removeEventListener(type, listener);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/initEngine.js
function initEngine() {
	return new Engine();
}
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/Modes/AnimationMode.js
var AnimationMode;
(function(AnimationMode) {
	AnimationMode["auto"] = "auto";
	AnimationMode["increase"] = "increase";
	AnimationMode["decrease"] = "decrease";
	AnimationMode["random"] = "random";
})(AnimationMode || (AnimationMode = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/Types/DestroyType.js
var DestroyType;
(function(DestroyType) {
	DestroyType["none"] = "none";
	DestroyType["max"] = "max";
	DestroyType["min"] = "min";
})(DestroyType || (DestroyType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/Types/StartValueType.js
var StartValueType;
(function(StartValueType) {
	StartValueType["max"] = "max";
	StartValueType["min"] = "min";
	StartValueType["random"] = "random";
})(StartValueType || (StartValueType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/AnimationStatus.js
var AnimationStatus;
(function(AnimationStatus) {
	AnimationStatus["increasing"] = "increasing";
	AnimationStatus["decreasing"] = "decreasing";
})(AnimationStatus || (AnimationStatus = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/index.js
var tsParticles = initEngine();
//#endregion
//#region node_modules/@tsparticles/animation-utils/esm/Utils.js
function checkDestroy(particle, destroyType, value, minValue, maxValue) {
	switch (destroyType) {
		case DestroyType.max:
			if (value >= maxValue) particle.destroy();
			break;
		case DestroyType.min:
			if (value <= minValue) particle.destroy();
			break;
		default: break;
	}
}
function initParticleNumericAnimationValue(options, pxRatio) {
	const valueRange = options.value, animationOptions = options.animation, res = {
		delayTime: getRangeValue(animationOptions.delay) * millisecondsToSeconds,
		enable: animationOptions.enable,
		value: getRangeValue(options.value) * pxRatio,
		max: getRangeMax(valueRange) * pxRatio,
		min: getRangeMin(valueRange) * pxRatio,
		loops: 0,
		maxLoops: getRangeValue(animationOptions.count),
		time: 0
	}, decayOffset = 1;
	if (animationOptions.enable) {
		res.decay = decayOffset - getRangeValue(animationOptions.decay);
		switch (animationOptions.mode) {
			case AnimationMode.increase:
				res.status = AnimationStatus.increasing;
				break;
			case AnimationMode.decrease:
				res.status = AnimationStatus.decreasing;
				break;
			case AnimationMode.random:
				res.status = getRandom() >= .5 ? AnimationStatus.increasing : AnimationStatus.decreasing;
				break;
			default: break;
		}
		const autoStatus = animationOptions.mode === AnimationMode.auto;
		switch (animationOptions.startValue) {
			case StartValueType.min:
				res.value = res.min;
				if (autoStatus) res.status = AnimationStatus.increasing;
				break;
			case StartValueType.max:
				res.value = res.max;
				if (autoStatus) res.status = AnimationStatus.decreasing;
				break;
			case StartValueType.random:
			default:
				res.value = randomInRangeValue(res);
				if (autoStatus) res.status = getRandom() >= .5 ? AnimationStatus.increasing : AnimationStatus.decreasing;
				break;
		}
	}
	res.initialValue = res.value;
	return res;
}
function updateAnimation(particle, data, changeDirection, destroyType, delta) {
	const minLoops = 0, minDelay = 0, identity = 1, minVelocity = 0, minDecay = 1;
	if (particle.destroyed || !data.enable || (data.maxLoops ?? minLoops) > minLoops && (data.loops ?? minLoops) > (data.maxLoops ?? minLoops)) return;
	const velocity = (data.velocity ?? minVelocity) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? minDecay;
	data.time ??= 0;
	const delayTime = data.delayTime ?? minDelay;
	if (delayTime > minDelay && data.time < delayTime) {
		data.time += delta.value;
		if (data.time < delayTime) return;
	}
	switch (data.status) {
		case AnimationStatus.increasing:
			data.value += velocity;
			break;
		case AnimationStatus.decreasing:
			data.value -= velocity;
			break;
		default: break;
	}
	if (data.velocity && decay !== identity) data.velocity *= decay;
	switch (data.status) {
		case AnimationStatus.increasing:
			if (data.value >= maxValue) {
				if (changeDirection) data.status = AnimationStatus.decreasing;
				else data.value -= maxValue;
				data.loops ??= minLoops;
				data.loops++;
			}
			break;
		case AnimationStatus.decreasing:
			if (data.value <= minValue) {
				if (changeDirection) data.status = AnimationStatus.increasing;
				else data.value += maxValue;
				data.loops ??= minLoops;
				data.loops++;
			}
			break;
		default: break;
	}
	checkDestroy(particle, destroyType, data.value, minValue, maxValue);
	if (!particle.destroyed) data.value = clamp(data.value, minValue, maxValue);
}
//#endregion
export { isString as $, animate as A, getRandom as B, itemFromSingleOrMultiple as C, safeMutationObserver as D, safeMatchMedia as E, degToRad as F, parseAlpha as G, getRangeMax as H, getDistance as I, isArray as J, randomInRangeValue as K, getDistances as L, cancelAnimation as M, checkDistance as N, PixelMode as O, clamp as P, isObject as Q, getParticleBaseVelocity as R, itemFromArray as S, safeDocument as T, getRangeValue as U, getRandomInRange as V, mix as W, isNull as X, isBoolean as Y, isNumber as Z, getItemMapFromInitializer as _, StartValueType as a, doublePI as at, isInArray as b, getLogger as c, millisecondsToSeconds as ct, circleBounce as d, resizeEvent as dt, Vector as et, circleBounceDataFromParticle as f, visibilityChangeEvent as ft, getFullScreenStyle as g, executeOnSingleOrMultiple as h, AnimationStatus as i, defaultTransform as it, calcExactPositionOrRandomFromSize as j, OutModeDirection as k, EventType as l, originPoint as lt, deepExtend as m, updateAnimation as n, MoveDirection as nt, DestroyType as o, generatedAttribute as ot, cloneStyle as p, setRangeValue as q, tsParticles as r, defaultCompositeValue as rt, AnimationMode as s, half as st, initParticleNumericAnimationValue as t, Vector3d as tt, calculateBounds as u, randomColorValue as ut, getItemsFromInitializer as v, manageListener as w, isPointInside as x, getPosition as y, getParticleDirectionAngle as z };
