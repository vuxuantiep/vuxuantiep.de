import { r as __exportAll } from "../_runtime.mjs";
import { A as animate, B as getRandom, C as itemFromSingleOrMultiple, D as safeMutationObserver, E as safeMatchMedia, F as degToRad, J as isArray, K as randomInRangeValue, M as cancelAnimation, N as checkDistance, O as PixelMode, P as clamp, Q as isObject, R as getParticleBaseVelocity, T as safeDocument, U as getRangeValue, Y as isBoolean, Z as isNumber, at as doublePI, b as isInArray, c as getLogger, ct as millisecondsToSeconds, dt as resizeEvent, et as Vector, ft as visibilityChangeEvent, g as getFullScreenStyle, h as executeOnSingleOrMultiple, it as defaultTransform, j as calcExactPositionOrRandomFromSize, k as OutModeDirection, l as EventType, lt as originPoint, m as deepExtend, nt as MoveDirection, ot as generatedAttribute, p as cloneStyle, q as setRangeValue, rt as defaultCompositeValue, st as half, tt as Vector3d, w as manageListener, y as getPosition, z as getParticleDirectionAngle } from "./@tsparticles/animation-utils+[...].mjs";
import { C as OutMode, S as ParticleOutType, a as getHslFromAnimation, b as OptionLoader, c as getStyleFromHsl, d as rangeColorToRgb, g as loadLazyProperty, h as OptionsColor, l as getStyleFromRgb, m as AnimatableColor, p as ValueWithRandom, r as alterHsl, u as rangeColorToHsl, v as loadProperty, x as loadOptions, y as loadRangeProperty } from "./@tsparticles/basic+[...].mjs";
//#region node_modules/@tsparticles/engine/esm/Enums/RangeType.js
var RangeType;
(function(RangeType) {
	RangeType["circle"] = "circle";
	RangeType["rectangle"] = "rectangle";
})(RangeType || (RangeType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/Utils/Ranges.js
var BaseRange = class {
	position;
	type;
	constructor(x, y, type) {
		this.position = {
			x,
			y
		};
		this.type = type;
	}
	_resetPosition(x, y) {
		this.position.x = x;
		this.position.y = y;
	}
};
var Circle = class Circle extends BaseRange {
	radius;
	constructor(x, y, radius) {
		super(x, y, RangeType.circle);
		this.radius = radius;
	}
	contains(point) {
		return checkDistance(point, this.position, this.radius);
	}
	intersects(range) {
		const pos1 = this.position, pos2 = range.position, r = this.radius, dx = Math.abs(pos2.x - pos1.x), dy = Math.abs(pos2.y - pos1.y);
		if (range instanceof Circle || range.type === RangeType.circle) return r + range.radius > Math.hypot(dx, dy);
		else if (range instanceof Rectangle || range.type === RangeType.rectangle) {
			const { width, height } = range.size;
			return Math.pow(dx - width, 2) + Math.pow(dy - height, 2) <= r ** 2 || dx <= r + width && dy <= r + height || dx <= width || dy <= height;
		}
		return false;
	}
	reset(x, y, radius) {
		this._resetPosition(x, y);
		this.radius = radius;
		return this;
	}
};
var Rectangle = class Rectangle extends BaseRange {
	size;
	constructor(x, y, width, height) {
		super(x, y, RangeType.rectangle);
		this.size = {
			height,
			width
		};
	}
	contains(point) {
		const w = this.size.width, h = this.size.height, pos = this.position;
		return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
	}
	intersects(range) {
		if (range instanceof Circle) return range.intersects(this);
		if (!(range instanceof Rectangle)) return false;
		const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range.size, w2 = size2.width, h2 = size2.height;
		return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
	}
	reset(x, y, width, height) {
		this._resetPosition(x, y);
		this.size.width = width;
		this.size.height = height;
		return this;
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/Directions/RotateDirection.js
var RotateDirection;
(function(RotateDirection) {
	RotateDirection["clockwise"] = "clockwise";
	RotateDirection["counterClockwise"] = "counter-clockwise";
	RotateDirection["random"] = "random";
})(RotateDirection || (RotateDirection = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/Modes/LimitMode.js
var LimitMode;
(function(LimitMode) {
	LimitMode["delete"] = "delete";
	LimitMode["wait"] = "wait";
})(LimitMode || (LimitMode = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/DrawLayer.js
var DrawLayer;
(function(DrawLayer) {
	DrawLayer[DrawLayer["BackgroundElement"] = 0] = "BackgroundElement";
	DrawLayer[DrawLayer["BackgroundDraw"] = 1] = "BackgroundDraw";
	DrawLayer[DrawLayer["BackgroundMask"] = 2] = "BackgroundMask";
	DrawLayer[DrawLayer["CanvasSetup"] = 3] = "CanvasSetup";
	DrawLayer[DrawLayer["PluginContent"] = 4] = "PluginContent";
	DrawLayer[DrawLayer["Particles"] = 5] = "Particles";
	DrawLayer[DrawLayer["CanvasCleanup"] = 6] = "CanvasCleanup";
	DrawLayer[DrawLayer["Foreground"] = 7] = "Foreground";
})(DrawLayer || (DrawLayer = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Background/Background.js
var Background = class extends OptionLoader {
	color;
	draw;
	element;
	image = "";
	opacity = 1;
	position = "";
	repeat = "";
	size = "";
	constructor() {
		super();
		this.color = new OptionsColor();
		this.color.value = "";
	}
	doLoad(data) {
		if (data.color !== void 0) this.color = OptionsColor.create(this.color, data.color);
		loadProperty(this, "element", data.element);
		loadProperty(this, "draw", data.draw);
		loadProperty(this, "image", data.image);
		loadProperty(this, "position", data.position);
		loadProperty(this, "repeat", data.repeat);
		loadProperty(this, "size", data.size);
		loadProperty(this, "opacity", data.opacity);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/FullScreen/FullScreen.js
var FullScreen = class extends OptionLoader {
	enable = true;
	zIndex = 0;
	doLoad(data) {
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "zIndex", data.zIndex);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/ResizeEvent.js
var ResizeEvent = class extends OptionLoader {
	delay = .5;
	enable = true;
	doLoad(data) {
		loadProperty(this, "delay", data.delay);
		loadProperty(this, "enable", data.enable);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Effect/Effect.js
var Effect = class extends OptionLoader {
	close = true;
	options = {};
	type = [];
	doLoad(data) {
		const options = data.options;
		if (options !== void 0) for (const effect in options) {
			const item = options[effect];
			if (item) this.options[effect] = deepExtend(this.options[effect] ?? {}, item);
		}
		loadProperty(this, "close", data.close);
		loadProperty(this, "type", data.type);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Fill.js
var Fill = class extends OptionLoader {
	color;
	enable = true;
	opacity = 1;
	doLoad(data) {
		if (data.color !== void 0) this.color = AnimatableColor.create(this.color, data.color);
		loadProperty(this, "enable", data.enable);
		loadRangeProperty(this, "opacity", data.opacity);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveAngle.js
var MoveAngle = class extends OptionLoader {
	offset = 0;
	value = 90;
	doLoad(data) {
		loadRangeProperty(this, "offset", data.offset);
		loadRangeProperty(this, "value", data.value);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveCenter.js
var MoveCenter = class extends OptionLoader {
	mode = PixelMode.percent;
	radius = 0;
	x = 50;
	y = 50;
	doLoad(data) {
		loadProperty(this, "x", data.x);
		loadProperty(this, "y", data.y);
		loadProperty(this, "mode", data.mode);
		loadProperty(this, "radius", data.radius);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveGravity.js
var MoveGravity = class extends OptionLoader {
	acceleration = 9.81;
	enable = false;
	inverse = false;
	maxSpeed = 50;
	doLoad(data) {
		loadRangeProperty(this, "acceleration", data.acceleration);
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "inverse", data.inverse);
		loadRangeProperty(this, "maxSpeed", data.maxSpeed);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Path/MovePath.js
var MovePath = class extends OptionLoader {
	clamp = true;
	delay = new ValueWithRandom();
	enable = false;
	generator;
	options = {};
	doLoad(data) {
		loadProperty(this, "clamp", data.clamp);
		this.delay.load(data.delay);
		loadProperty(this, "enable", data.enable);
		this.generator = data.generator;
		if (data.options) this.options = deepExtend(this.options, data.options);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/OutModes.js
var OutModes = class extends OptionLoader {
	bottom;
	default = OutMode.out;
	left;
	right;
	top;
	doLoad(data) {
		if (data.default !== void 0) this.default = data.default;
		this.bottom = data.bottom ?? data.default;
		this.left = data.left ?? data.default;
		this.right = data.right ?? data.default;
		this.top = data.top ?? data.default;
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Spin.js
var Spin = class extends OptionLoader {
	acceleration = 0;
	enable = false;
	position;
	doLoad(data) {
		loadRangeProperty(this, "acceleration", data.acceleration);
		loadProperty(this, "enable", data.enable);
		if (data.position) this.position = deepExtend({}, data.position);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Move.js
var Move = class extends OptionLoader {
	angle = new MoveAngle();
	center = new MoveCenter();
	decay = 0;
	direction = MoveDirection.none;
	distance = {};
	drift = 0;
	enable = false;
	gravity = new MoveGravity();
	outModes = new OutModes();
	path = new MovePath();
	random = false;
	size = false;
	speed = 2;
	spin = new Spin();
	straight = false;
	vibrate = false;
	warp = false;
	doLoad(data) {
		this.angle.load(isNumber(data.angle) ? { value: data.angle } : data.angle);
		this.center.load(data.center);
		loadRangeProperty(this, "decay", data.decay);
		loadProperty(this, "direction", data.direction);
		if (data.distance !== void 0) this.distance = isNumber(data.distance) ? {
			horizontal: data.distance,
			vertical: data.distance
		} : { ...data.distance };
		loadRangeProperty(this, "drift", data.drift);
		loadProperty(this, "enable", data.enable);
		this.gravity.load(data.gravity);
		const outModes = data.outModes;
		if (outModes !== void 0) if (isObject(outModes)) this.outModes.load(outModes);
		else this.outModes.load({ default: outModes });
		this.path.load(data.path);
		loadProperty(this, "random", data.random);
		loadProperty(this, "size", data.size);
		loadRangeProperty(this, "speed", data.speed);
		this.spin.load(data.spin);
		loadProperty(this, "straight", data.straight);
		loadProperty(this, "vibrate", data.vibrate);
		loadProperty(this, "warp", data.warp);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Stroke.js
var Stroke = class extends OptionLoader {
	color;
	opacity;
	width = 0;
	doLoad(data) {
		if (data.color !== void 0) this.color = AnimatableColor.create(this.color, data.color);
		loadRangeProperty(this, "width", data.width);
		loadRangeProperty(this, "opacity", data.opacity);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Paint.js
var Paint = class extends OptionLoader {
	color;
	fill;
	stroke;
	doLoad(data) {
		if (data.color !== void 0) this.color = AnimatableColor.create(this.color, data.color);
		loadLazyProperty(this, "fill", data.fill, () => new Fill());
		loadLazyProperty(this, "stroke", data.stroke, () => new Stroke());
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js
var ParticlesBounceFactor = class extends ValueWithRandom {
	value = 1;
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Bounce/ParticlesBounce.js
var ParticlesBounce = class extends OptionLoader {
	horizontal = new ParticlesBounceFactor();
	vertical = new ParticlesBounceFactor();
	doLoad(data) {
		this.horizontal.load(data.horizontal);
		this.vertical.load(data.vertical);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesDensity.js
var ParticlesDensity = class extends OptionLoader {
	enable = false;
	height = 1080;
	width = 1920;
	doLoad(data) {
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "width", data.width);
		loadProperty(this, "height", data.height);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesNumberLimit.js
var ParticlesNumberLimit = class extends OptionLoader {
	mode = LimitMode.delete;
	value = 0;
	doLoad(data) {
		loadProperty(this, "mode", data.mode);
		loadProperty(this, "value", data.value);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesNumber.js
var ParticlesNumber = class extends OptionLoader {
	density = new ParticlesDensity();
	limit = new ParticlesNumberLimit();
	value = 0;
	doLoad(data) {
		this.density.load(data.density);
		this.limit.load(data.limit);
		loadProperty(this, "value", data.value);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Shape/Shape.js
var Shape = class extends OptionLoader {
	close = true;
	options = {};
	type = "circle";
	doLoad(data) {
		const options = data.options;
		if (options !== void 0) for (const shape in options) {
			const item = options[shape];
			if (item) this.options[shape] = deepExtend(this.options[shape] ?? {}, item);
		}
		loadProperty(this, "close", data.close);
		loadProperty(this, "type", data.type);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/ZIndex/ZIndex.js
var ZIndex = class extends ValueWithRandom {
	opacityRate = 1;
	sizeRate = 1;
	velocityRate = 1;
	doLoad(data) {
		super.doLoad(data);
		loadProperty(this, "opacityRate", data.opacityRate);
		loadProperty(this, "sizeRate", data.sizeRate);
		loadProperty(this, "velocityRate", data.velocityRate);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Particles/ParticlesOptions.js
var ParticlesOptions = class extends OptionLoader {
	bounce = new ParticlesBounce();
	effect = new Effect();
	groups = {};
	move = new Move();
	number = new ParticlesNumber();
	paint;
	palette;
	reduceDuplicates = false;
	shape = new Shape();
	zIndex = new ZIndex();
	#container;
	#pluginManager;
	constructor(pluginManager, container) {
		super();
		this.#pluginManager = pluginManager;
		this.#container = container;
		this.paint = new Paint();
		this.paint.color = new AnimatableColor();
		this.paint.color.value = "#fff";
		this.paint.fill = new Fill();
		this.paint.fill.enable = true;
	}
	doLoad(data) {
		if (data.palette) {
			this.palette = data.palette;
			this.#importPalette(this.palette);
		}
		if (data.groups !== void 0) for (const group of Object.keys(data.groups)) {
			if (!(group in data.groups)) continue;
			const item = data.groups[group];
			if (item !== void 0) this.groups[group] = deepExtend(this.groups[group] ?? {}, item);
		}
		if (data.reduceDuplicates !== void 0) this.reduceDuplicates = data.reduceDuplicates;
		this.bounce.load(data.bounce);
		this.effect.load(data.effect);
		this.move.load(data.move);
		this.number.load(data.number);
		const paintToLoad = data.paint;
		if (paintToLoad) if (isArray(paintToLoad)) this.paint = executeOnSingleOrMultiple(paintToLoad, (t) => {
			const tmp = new Paint();
			tmp.load(t);
			return tmp;
		});
		else if (isArray(this.paint)) {
			this.paint = new Paint();
			this.paint.load(paintToLoad);
		} else this.paint.load(paintToLoad);
		this.shape.load(data.shape);
		this.zIndex.load(data.zIndex);
		if (this.#container) {
			for (const plugin of this.#pluginManager.plugins) if (plugin.loadParticlesOptions) plugin.loadParticlesOptions(this.#container, this, data);
			const updaters = this.#pluginManager.updaters.get(this.#container);
			if (updaters) {
				for (const updater of updaters) if (updater.loadOptions) updater.loadOptions(this, data);
			}
		}
	}
	#importPalette(palette) {
		const paletteData = this.#pluginManager.getPalette(palette);
		if (!paletteData) return;
		const paletteColors = paletteData.colors, defaultPaintStrokeWidth = 0, defaultPaintVariantsLength = 1, firstPaintVariantIndex = 0, defaultPalettePaintVariant = {}, palettePaintVariants = (isArray(paletteColors) ? paletteColors : [paletteColors]).flatMap((variant) => {
			const paletteFill = variant.fill, paletteStroke = variant.stroke, fillPart = paletteFill ? {
				color: { value: paletteFill.value },
				enable: paletteFill.enable,
				opacity: paletteFill.opacity
			} : void 0;
			if (!paletteStroke) return [{ fill: fillPart }];
			return [{
				fill: fillPart,
				stroke: {
					color: { value: paletteStroke.value },
					opacity: paletteStroke.opacity,
					width: paletteStroke.width || defaultPaintStrokeWidth
				}
			}];
		}), palettePaint = palettePaintVariants.length > defaultPaintVariantsLength ? palettePaintVariants : palettePaintVariants[firstPaintVariantIndex] ?? defaultPalettePaintVariant;
		this.load({
			paint: palettePaint,
			blend: {
				enable: true,
				mode: paletteData.blendMode
			}
		});
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Utils/ParticlesOptionsLoader.js
function loadParticlesOptions(pluginManager, container, ...sourceOptionsArr) {
	const options = new ParticlesOptions(pluginManager, container);
	loadOptions(options, ...sourceOptionsArr);
	return options;
}
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/Options.js
var Options = class extends OptionLoader {
	autoPlay = true;
	background;
	clear = true;
	defaultThemes = {};
	delay = 0;
	detectRetina = true;
	duration = 0;
	fpsLimit = 120;
	fullScreen;
	hdr = true;
	key;
	name;
	palette;
	particles;
	pauseOnBlur = true;
	pauseOnOutsideViewport = true;
	preset;
	resize;
	smooth = false;
	style = {};
	zLayers = 100;
	#container;
	#pluginManager;
	constructor(pluginManager, container) {
		super();
		this.#pluginManager = pluginManager;
		this.#container = container;
		this.background = new Background();
		this.fullScreen = new FullScreen();
		this.particles = loadParticlesOptions(this.#pluginManager, this.#container);
		this.resize = new ResizeEvent();
	}
	doLoad(data) {
		if (data.preset !== void 0) {
			this.preset = data.preset;
			executeOnSingleOrMultiple(this.preset, (preset) => {
				this.#importPreset(preset);
			});
		}
		if (data.palette !== void 0) {
			this.palette = data.palette;
			this.#importPalette(this.palette);
		}
		loadProperty(this, "autoPlay", data.autoPlay);
		loadProperty(this, "clear", data.clear);
		loadProperty(this, "key", data.key);
		loadProperty(this, "name", data.name);
		loadRangeProperty(this, "delay", data.delay);
		loadProperty(this, "detectRetina", data.detectRetina);
		loadRangeProperty(this, "duration", data.duration);
		loadProperty(this, "fpsLimit", data.fpsLimit);
		loadProperty(this, "hdr", data.hdr);
		loadProperty(this, "pauseOnBlur", data.pauseOnBlur);
		loadProperty(this, "pauseOnOutsideViewport", data.pauseOnOutsideViewport);
		loadProperty(this, "zLayers", data.zLayers);
		this.background.load(data.background);
		const fullScreen = data.fullScreen;
		if (isBoolean(fullScreen)) this.fullScreen.enable = fullScreen;
		else this.fullScreen.load(fullScreen);
		this.particles.load(data.particles);
		this.resize.load(data.resize);
		this.style = deepExtend(this.style, data.style);
		loadProperty(this, "smooth", data.smooth);
		this.#pluginManager.plugins.forEach((plugin) => {
			plugin.loadOptions(this.#container, this, data);
		});
	}
	#importPalette(palette) {
		const paletteData = this.#pluginManager.getPalette(palette);
		if (!paletteData) return;
		this.load({
			background: { color: paletteData.background },
			blend: {
				enable: true,
				mode: paletteData.blendMode
			},
			particles: { palette }
		});
	}
	#importPreset(preset) {
		this.load(this.#pluginManager.getPreset(preset));
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/RenderManager.js
var fColorIndex = 0, sColorIndex = 1;
function setTransformValue(factor, newFactor, key) {
	const newValue = newFactor[key];
	if (newValue !== void 0) factor[key] = (factor[key] ?? 1) * newValue;
}
var RenderManager = class {
	#backgroundElement;
	#backgroundWarnings;
	#canvasClearPlugins;
	#canvasManager;
	#colorPlugins;
	#container;
	#context;
	#contextSettings;
	#drawParticlePlugins;
	#drawParticlesCleanupPlugins;
	#drawParticlesSetupPlugins;
	#layers;
	#pluginManager;
	#postDrawUpdaters;
	#preDrawUpdaters;
	#reusableColorStyles = {};
	#reusablePluginColors = [void 0, void 0];
	#reusableTransform = {};
	constructor(pluginManager, container, canvasManager) {
		this.#pluginManager = pluginManager;
		this.#container = container;
		this.#canvasManager = canvasManager;
		this.#context = null;
		this.#backgroundElement = null;
		this.#backgroundWarnings = /* @__PURE__ */ new Set();
		this.#preDrawUpdaters = [];
		this.#postDrawUpdaters = [];
		this.#canvasClearPlugins = [];
		this.#colorPlugins = [];
		this.#drawParticlePlugins = [];
		this.#drawParticlesCleanupPlugins = [];
		this.#drawParticlesSetupPlugins = [];
		this.#layers = {
			0: [],
			1: [],
			2: [],
			3: [],
			4: [],
			5: [],
			6: [],
			7: []
		};
	}
	get settings() {
		return this.#contextSettings;
	}
	canvasClear() {
		if (!this.#container.actualOptions.clear) return;
		this.draw((ctx) => {
			ctx.clearRect(originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
		});
	}
	clear() {
		for (const plugin of this.#canvasClearPlugins) if (plugin.canvasClear?.() ?? false) return;
		for (const layer of Object.values(DrawLayer)) if (typeof layer === "number") {
			for (const plugin of this.#getLayerPlugins(layer)) if (plugin.canvasClear?.() ?? false) return;
		}
		this.canvasClear();
	}
	destroy() {
		this.stop();
		this.#backgroundElement = null;
		this.#backgroundWarnings.clear();
		this.#preDrawUpdaters = [];
		this.#postDrawUpdaters = [];
		this.#canvasClearPlugins = [];
		this.#colorPlugins = [];
		this.#drawParticlePlugins = [];
		this.#drawParticlesCleanupPlugins = [];
		this.#drawParticlesSetupPlugins = [];
		for (const layer of Object.values(DrawLayer)) if (typeof layer === "number") this.#layers[layer] = [];
	}
	draw(cb) {
		const ctx = this.#context;
		if (!ctx) return;
		return cb(ctx);
	}
	drawParticle(particle, delta) {
		if (particle.spawning || particle.destroyed) return;
		const radius = particle.getRadius();
		if (radius <= 0) return;
		const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor();
		let [fColor, sColor] = this.#getPluginParticleColors(particle);
		fColor ??= pfColor;
		sColor ??= psColor;
		if (!fColor && !sColor) return;
		const container = this.#container, zIndexOptions = particle.options.zIndex, zIndexFactor = 1 - particle.zIndexFactor, { fillOpacity, opacity, strokeOpacity } = particle.getOpacity(), transform = this.#reusableTransform, colorStyles = this.#reusableColorStyles, fill = fColor ? getStyleFromHsl(fColor, container.hdr, fillOpacity * opacity) : void 0, stroke = sColor ? getStyleFromHsl(sColor, container.hdr, strokeOpacity * opacity) : fill;
		transform.a = transform.b = transform.c = transform.d = void 0;
		colorStyles.fill = fill;
		colorStyles.stroke = stroke;
		this.draw((context) => {
			for (const plugin of this.#drawParticlesSetupPlugins) plugin.drawParticleSetup?.(context, particle, delta);
			this.#applyPreDrawUpdaters(context, particle, radius, opacity, colorStyles, transform);
			this.#drawParticle({
				container,
				context,
				particle,
				delta,
				colorStyles,
				radius: radius * zIndexFactor ** zIndexOptions.sizeRate,
				opacity,
				transform
			});
			this.#applyPostDrawUpdaters(particle);
			for (const plugin of this.#drawParticlesCleanupPlugins) plugin.drawParticleCleanup?.(context, particle, delta);
		});
	}
	drawParticlePlugins(particle, delta) {
		this.draw((ctx) => {
			for (const plugin of this.#drawParticlePlugins) this.#drawParticlePlugin(ctx, plugin, particle, delta);
		});
	}
	drawParticles(delta) {
		const { particles, actualOptions } = this.#container;
		this.clear();
		particles.update(delta);
		this.draw((ctx) => {
			const width = this.#canvasManager.size.width, height = this.#canvasManager.size.height;
			if (this.#backgroundElement) try {
				ctx.drawImage(this.#backgroundElement, originPoint.x, originPoint.y, width, height);
			} catch {
				this.#warnOnce("background-element-draw-error", "Error drawing background element onto canvas");
			}
			const background = actualOptions.background;
			if (background.draw) try {
				background.draw(ctx, delta);
			} catch {
				this.#warnOnce("background-draw-error", "Error in background.draw callback");
			}
			for (const plugin of this.#getLayerPlugins(DrawLayer.BackgroundMask)) plugin.canvasPaint?.();
			for (const plugin of this.#getLayerPlugins(DrawLayer.CanvasSetup)) plugin.drawSettingsSetup?.(ctx, delta);
			for (const plugin of this.#getLayerPlugins(DrawLayer.PluginContent)) plugin.draw?.(ctx, delta);
			particles.drawParticles(delta);
			for (const plugin of this.#getLayerPlugins(DrawLayer.CanvasCleanup)) {
				plugin.clearDraw?.(ctx, delta);
				plugin.drawSettingsCleanup?.(ctx, delta);
			}
		});
	}
	init() {
		this.initUpdaters();
		this.initPlugins();
		this.#resolveBackgroundElement();
		this.paint();
	}
	initPlugins() {
		this.#canvasClearPlugins = [];
		this.#colorPlugins = [];
		this.#drawParticlePlugins = [];
		this.#drawParticlesSetupPlugins = [];
		this.#drawParticlesCleanupPlugins = [];
		for (const layer of Object.values(DrawLayer)) if (typeof layer === "number") this.#layers[layer] = [];
		for (const plugin of this.#container.plugins) {
			if (plugin.particleFillColor ?? plugin.particleStrokeColor) this.#colorPlugins.push(plugin);
			if (plugin.drawParticle) this.#drawParticlePlugins.push(plugin);
			if (plugin.drawParticleSetup) this.#drawParticlesSetupPlugins.push(plugin);
			if (plugin.drawParticleCleanup) this.#drawParticlesCleanupPlugins.push(plugin);
			if (plugin.canvasClear) this.#canvasClearPlugins.push(plugin);
			if (plugin.canvasPaint) this.#getLayerPlugins(DrawLayer.BackgroundMask).push(plugin);
			if (plugin.drawSettingsSetup) this.#getLayerPlugins(DrawLayer.CanvasSetup).push(plugin);
			if (plugin.draw) this.#getLayerPlugins(DrawLayer.PluginContent).push(plugin);
			if (plugin.clearDraw ?? plugin.drawSettingsCleanup) this.#getLayerPlugins(DrawLayer.CanvasCleanup).push(plugin);
		}
	}
	initUpdaters() {
		this.#preDrawUpdaters = [];
		this.#postDrawUpdaters = [];
		for (const updater of this.#container.particleUpdaters) {
			if (updater.afterDraw) this.#postDrawUpdaters.push(updater);
			if (updater.getColorStyles ?? updater.getTransformValues ?? updater.beforeDraw) this.#preDrawUpdaters.push(updater);
		}
	}
	paint() {
		let handled = false;
		for (const plugin of this.#getLayerPlugins(DrawLayer.BackgroundMask)) {
			handled = plugin.canvasPaint?.() ?? false;
			if (handled) break;
		}
		if (handled) return;
		this.paintBase();
	}
	paintBase(baseColor) {
		this.draw((ctx) => {
			ctx.fillStyle = baseColor ?? "rgba(0,0,0,0)";
			ctx.fillRect(originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
		});
	}
	paintImage(image, opacity) {
		this.draw((ctx) => {
			if (!image) return;
			const prevAlpha = ctx.globalAlpha;
			ctx.globalAlpha = opacity;
			ctx.drawImage(image, originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
			ctx.globalAlpha = prevAlpha;
		});
	}
	setContext(context) {
		this.#context = context;
		if (this.#context) this.#context.globalCompositeOperation = defaultCompositeValue;
	}
	setContextSettings(settings) {
		this.#contextSettings = settings;
	}
	stop() {
		this.draw((ctx) => {
			ctx.clearRect(originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
		});
	}
	#applyPostDrawUpdaters(particle) {
		for (const updater of this.#postDrawUpdaters) updater.afterDraw?.(particle);
	}
	#applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform) {
		for (const updater of this.#preDrawUpdaters) {
			if (updater.getColorStyles) {
				const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
				if (fill) colorStyles.fill = fill;
				if (stroke) colorStyles.stroke = stroke;
			}
			if (updater.getTransformValues) {
				const updaterTransform = updater.getTransformValues(particle);
				for (const key in updaterTransform) setTransformValue(transform, updaterTransform, key);
			}
			updater.beforeDraw?.(particle);
		}
	}
	#drawAfterEffect(drawer, data) {
		if (!drawer?.drawAfter) return;
		const { particle } = data;
		if (!particle.effect) return;
		drawer.drawAfter(data);
	}
	#drawBeforeEffect(drawer, data) {
		if (!drawer?.drawBefore) return;
		const { particle } = data;
		if (!particle.effect) return;
		drawer.drawBefore(data);
	}
	#drawParticle(data) {
		const { container, context, particle, delta, colorStyles, radius, opacity, transform } = data, { effectDrawers, shapeDrawers } = container, pos = particle.getPosition(), transformData = particle.getTransformData(transform), drawScale = 1, drawPosition = {
			x: pos.x,
			y: pos.y
		};
		context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
		if (colorStyles.fill) context.fillStyle = colorStyles.fill;
		const fillEnabled = !!particle.fillEnabled, strokeWidth = particle.strokeWidth ?? 0;
		context.lineWidth = strokeWidth;
		if (colorStyles.stroke) context.strokeStyle = colorStyles.stroke;
		const drawData = {
			context,
			particle,
			radius,
			drawRadius: radius * drawScale,
			opacity,
			delta,
			pixelRatio: container.retina.pixelRatio,
			fill: fillEnabled,
			stroke: strokeWidth > 0,
			transformData,
			position: { ...pos },
			drawPosition,
			drawScale
		};
		for (const plugin of container.plugins) plugin.drawParticleTransform?.(drawData);
		const effect = particle.effect ? effectDrawers.get(particle.effect) : void 0, shape = particle.shape ? shapeDrawers.get(particle.shape) : void 0;
		this.#drawBeforeEffect(effect, drawData);
		this.#drawShapeBeforeDraw(shape, drawData);
		this.#drawShape(shape, drawData);
		this.#drawShapeAfterDraw(shape, drawData);
		this.#drawAfterEffect(effect, drawData);
		context.resetTransform();
	}
	#drawParticlePlugin(context, plugin, particle, delta) {
		if (!plugin.drawParticle) return;
		plugin.drawParticle(context, particle, delta);
	}
	#drawShape(drawer, data) {
		if (!drawer) return;
		const { context, fill, particle, stroke } = data;
		if (!particle.shape) return;
		context.beginPath();
		drawer.draw(data);
		if (particle.shapeClose) context.closePath();
		if (fill) context.fill();
		if (stroke) context.stroke();
	}
	#drawShapeAfterDraw(drawer, data) {
		if (!drawer?.afterDraw) return;
		const { particle } = data;
		if (!particle.shape) return;
		drawer.afterDraw(data);
	}
	#drawShapeBeforeDraw(drawer, data) {
		if (!drawer?.beforeDraw) return;
		const { particle } = data;
		if (!particle.shape) return;
		drawer.beforeDraw(data);
	}
	#getLayerPlugins(layer) {
		return this.#layers[layer];
	}
	#getPluginParticleColors(particle) {
		let fColor, sColor;
		for (const plugin of this.#colorPlugins) {
			if (!fColor && plugin.particleFillColor) fColor = rangeColorToHsl(this.#pluginManager, plugin.particleFillColor(particle));
			if (!sColor && plugin.particleStrokeColor) sColor = rangeColorToHsl(this.#pluginManager, plugin.particleStrokeColor(particle));
			if (fColor && sColor) break;
		}
		this.#reusablePluginColors[fColorIndex] = fColor;
		this.#reusablePluginColors[sColorIndex] = sColor;
		return this.#reusablePluginColors;
	}
	#resolveBackgroundElement() {
		const background = this.#container.actualOptions.background;
		this.#backgroundElement = null;
		if (!background.element) return;
		if (typeof background.element === "string") {
			if (typeof document !== "undefined") {
				const node = document.querySelector(background.element);
				if (node instanceof HTMLCanvasElement || node instanceof HTMLVideoElement || node instanceof HTMLImageElement) this.#backgroundElement = node;
				else if (node) this.#warnOnce("background-element-not-supported", `Background element "${background.element}" is not a supported drawable element (canvas, video, or img)`);
				else this.#warnOnce("background-element-not-found", `Background element selector "${background.element}" not found`);
			}
		} else if (background.element instanceof HTMLCanvasElement || background.element instanceof OffscreenCanvas || background.element instanceof HTMLVideoElement || background.element instanceof HTMLImageElement) this.#backgroundElement = background.element;
	}
	#warnOnce(key, message) {
		if (!this.#backgroundWarnings.has(key)) {
			this.#backgroundWarnings.add(key);
			getLogger().warning(message);
		}
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/CanvasManager.js
var transferredCanvases = /* @__PURE__ */ new WeakMap(), getTransferredCanvas = (canvas) => {
	const transferredCanvas = transferredCanvases.get(canvas);
	if (transferredCanvas) return transferredCanvas;
	if (typeof canvas.transferControlToOffscreen !== "function") throw new TypeError("OffscreenCanvas is required but not supported by this browser");
	try {
		const offscreenCanvas = canvas.transferControlToOffscreen();
		transferredCanvases.set(canvas, offscreenCanvas);
		return offscreenCanvas;
	} catch {
		throw new TypeError("OffscreenCanvas transfer failed");
	}
}, isHtmlCanvasElement = (canvas) => {
	return typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement;
};
function setStyle(canvas, style, important = false) {
	if (!style) return;
	const elementStyle = canvas.style, keys = /* @__PURE__ */ new Set();
	for (let i = 0; i < elementStyle.length; i++) {
		const key = elementStyle.item(i);
		if (!key) continue;
		keys.add(key);
	}
	for (let i = 0; i < style.length; i++) {
		const key = style.item(i);
		if (!key) continue;
		keys.add(key);
	}
	for (const key of keys) {
		const value = style.getPropertyValue(key);
		if (value) elementStyle.setProperty(key, value, important ? "important" : "");
		else elementStyle.removeProperty(key);
	}
}
var CanvasManager = class {
	domElement;
	render;
	renderCanvas;
	size;
	zoom = 1;
	#container;
	#generated;
	#mutationObserver;
	#originalStyle;
	#pluginManager;
	#pointerEvents;
	#resizePlugins;
	#standardSize;
	#zoomCenter;
	constructor(pluginManager, container) {
		this.#pluginManager = pluginManager;
		this.#container = container;
		this.render = new RenderManager(pluginManager, container, this);
		this.#standardSize = {
			height: 0,
			width: 0
		};
		const pxRatio = container.retina.pixelRatio, stdSize = this.#standardSize;
		this.size = {
			height: stdSize.height * pxRatio,
			width: stdSize.width * pxRatio
		};
		this.#generated = false;
		this.#resizePlugins = [];
		this.#pointerEvents = "none";
	}
	get #fullScreen() {
		return this.#container.actualOptions.fullScreen.enable;
	}
	destroy() {
		this.stop();
		if (this.#generated) {
			this.domElement?.remove();
			this.domElement = void 0;
			this.renderCanvas = void 0;
		} else this.#resetOriginalStyle();
		this.render.destroy();
		this.#resizePlugins = [];
	}
	getZoomCenter() {
		const pxRatio = this.#container.retina.pixelRatio, { width, height } = this.size;
		if (this.#zoomCenter) return this.#zoomCenter;
		return {
			x: width * half / pxRatio,
			y: height * half / pxRatio
		};
	}
	init() {
		this.#safeMutationObserver((obs) => {
			obs.disconnect();
		});
		this.#mutationObserver = safeMutationObserver((records) => {
			for (const record of records) if (record.type === "attributes" && record.attributeName === "style") this.#repairStyle();
		});
		this.resize();
		this.#initStyle();
		this.initBackground();
		this.#safeMutationObserver((obs) => {
			const element = this.domElement;
			if (!element || !(element instanceof Node)) return;
			obs.observe(element, { attributes: true });
		});
		this.initPlugins();
		this.#initContext();
		this.render.init();
	}
	initBackground() {
		const container = this.#container, background = container.actualOptions.background, element = this.domElement;
		if (!element) return;
		const elementStyle = element.style, color = rangeColorToRgb(this.#pluginManager, background.color);
		if (color) elementStyle.backgroundColor = getStyleFromRgb(color, container.actualOptions.hdr, background.opacity);
		else elementStyle.backgroundColor = "";
		elementStyle.backgroundImage = background.image || "";
		elementStyle.backgroundPosition = background.position || "";
		elementStyle.backgroundRepeat = background.repeat || "";
		elementStyle.backgroundSize = background.size || "";
	}
	initPlugins() {
		this.#resizePlugins = [];
		for (const plugin of this.#container.plugins) if (plugin.resize) this.#resizePlugins.push(plugin);
	}
	loadCanvas(canvas) {
		if (this.#generated && this.domElement) this.domElement.remove();
		const domCanvas = isHtmlCanvasElement(canvas) ? canvas : void 0;
		this.domElement = domCanvas;
		this.#generated = domCanvas ? domCanvas.dataset[generatedAttribute] === "true" : false;
		this.renderCanvas = domCanvas ? getTransferredCanvas(domCanvas) : canvas;
		const domElement = this.domElement;
		if (domElement) {
			domElement.ariaHidden = "true";
			this.#originalStyle = cloneStyle(domElement.style);
		}
		const standardSize = this.#standardSize, renderCanvas = this.renderCanvas;
		if (domElement) {
			standardSize.height = domElement.offsetHeight;
			standardSize.width = domElement.offsetWidth;
		} else {
			standardSize.height = renderCanvas.height;
			standardSize.width = renderCanvas.width;
		}
		const pxRatio = this.#container.retina.pixelRatio, retinaSize = this.size;
		renderCanvas.height = retinaSize.height = standardSize.height * pxRatio;
		renderCanvas.width = retinaSize.width = standardSize.width * pxRatio;
	}
	resize() {
		const element = this.domElement;
		if (!element) return false;
		const container = this.#container, renderCanvas = this.renderCanvas;
		if (renderCanvas === void 0) return false;
		const currentSize = container.canvas.#standardSize, newSize = {
			width: element.offsetWidth,
			height: element.offsetHeight
		}, pxRatio = container.retina.pixelRatio, retinaSize = {
			width: newSize.width * pxRatio,
			height: newSize.height * pxRatio
		};
		if (newSize.height === currentSize.height && newSize.width === currentSize.width && retinaSize.height === renderCanvas.height && retinaSize.width === renderCanvas.width) return false;
		const oldSize = { ...currentSize };
		currentSize.height = newSize.height;
		currentSize.width = newSize.width;
		const canvasSize = this.size;
		renderCanvas.width = canvasSize.width = retinaSize.width;
		renderCanvas.height = canvasSize.height = retinaSize.height;
		if (this.#container.started) container.particles.setResizeFactor({
			width: currentSize.width / oldSize.width,
			height: currentSize.height / oldSize.height
		});
		return true;
	}
	setPointerEvents(type) {
		if (!this.domElement) return;
		this.#pointerEvents = type;
		this.#repairStyle();
	}
	setZoom(zoomLevel, center) {
		this.zoom = zoomLevel;
		this.#zoomCenter = center;
	}
	stop() {
		this.#safeMutationObserver((obs) => {
			obs.disconnect();
		});
		this.#mutationObserver = void 0;
		this.render.stop();
	}
	async windowResize() {
		if (!this.domElement || !this.resize()) return;
		const container = this.#container, needsRefresh = container.updateActualOptions();
		container.particles.setDensity();
		this.#applyResizePlugins();
		if (needsRefresh) await container.refresh();
	}
	#applyResizePlugins() {
		for (const plugin of this.#resizePlugins) plugin.resize?.();
	}
	#initContext() {
		const canSupportHdr = this.#container.actualOptions.hdr && safeMatchMedia("(color-gamut: p3)")?.matches && safeMatchMedia("(dynamic-range: high)")?.matches;
		this.render.setContextSettings({
			alpha: true,
			desynchronized: true,
			willReadFrequently: false,
			...canSupportHdr ? {
				colorSpace: "display-p3",
				colorType: "float16"
			} : { colorSpace: "srgb" }
		});
		const renderCanvas = this.renderCanvas;
		if (!renderCanvas) return;
		this.render.setContext(renderCanvas.getContext("2d", this.render.settings));
	}
	#initStyle() {
		const element = this.domElement, options = this.#container.actualOptions;
		if (!element) return;
		if (this.#fullScreen) this.#setFullScreenStyle();
		else this.#resetOriginalStyle();
		for (const key in options.style) {
			if (!key || !(key in options.style)) continue;
			const value = options.style[key];
			if (!value) continue;
			element.style.setProperty(key, value, "important");
		}
	}
	#repairStyle() {
		const element = this.domElement;
		if (!element) return;
		this.#safeMutationObserver((observer) => {
			observer.disconnect();
		});
		this.#initStyle();
		this.initBackground();
		const pointerEvents = this.#pointerEvents;
		element.style.pointerEvents = pointerEvents;
		element.style.setProperty("pointer-events", pointerEvents);
		this.#safeMutationObserver((observer) => {
			if (!(element instanceof Node)) return;
			observer.observe(element, { attributes: true });
		});
	}
	#resetOriginalStyle() {
		const element = this.domElement, originalStyle = this.#originalStyle;
		if (!element || !originalStyle) return;
		setStyle(element, originalStyle, true);
	}
	#safeMutationObserver(callback) {
		if (!this.#mutationObserver) return;
		callback(this.#mutationObserver);
	}
	#setFullScreenStyle() {
		const element = this.domElement;
		if (!element) return;
		setStyle(element, getFullScreenStyle(this.#container.actualOptions.fullScreen.zIndex), true);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/Utils/EventListeners.js
var EventListeners = class {
	#container;
	#handlers;
	#resizeObserver;
	#resizeTimeout;
	constructor(container) {
		this.#container = container;
		this.#handlers = {
			visibilityChange: () => {
				this.#handleVisibilityChange();
			},
			resize: () => {
				this.#handleWindowResize();
			}
		};
	}
	addListeners() {
		this.#manageListeners(true);
	}
	removeListeners() {
		this.#manageListeners(false);
	}
	#handleVisibilityChange() {
		const container = this.#container;
		if (!container.actualOptions.pauseOnBlur) return;
		if (safeDocument().hidden) {
			container.pageHidden = true;
			container.pause();
		} else {
			container.pageHidden = false;
			if (container.animationStatus) container.play(true);
			else container.draw(true);
		}
	}
	#handleWindowResize() {
		if (this.#resizeTimeout) {
			clearTimeout(this.#resizeTimeout);
			this.#resizeTimeout = void 0;
		}
		const handleResize = async () => {
			await this.#container.canvas.windowResize();
		};
		this.#resizeTimeout = setTimeout(() => void handleResize(), this.#container.actualOptions.resize.delay * millisecondsToSeconds);
	}
	#manageListeners(add) {
		const handlers = this.#handlers;
		this.#manageResize(add);
		manageListener(document, visibilityChangeEvent, handlers.visibilityChange, add, false);
	}
	#manageResize(add) {
		const handlers = this.#handlers, container = this.#container;
		if (!container.actualOptions.resize.enable) return;
		if (typeof ResizeObserver === "undefined") {
			manageListener(globalThis, resizeEvent, handlers.resize, add);
			return;
		}
		const canvasEl = container.canvas.domElement;
		if (this.#resizeObserver && !add) {
			if (canvasEl) this.#resizeObserver.unobserve(canvasEl);
			this.#resizeObserver.disconnect();
			this.#resizeObserver = void 0;
		} else if (!this.#resizeObserver && add && canvasEl) {
			this.#resizeObserver = new ResizeObserver((entries) => {
				if (!entries.find((e) => e.target === canvasEl)) return;
				this.#handleWindowResize();
			});
			this.#resizeObserver.observe(canvasEl);
		}
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/Particle.js
function loadEffectData(effect, effectOptions, id, reduceDuplicates) {
	const effectData = effectOptions.options[effect];
	return deepExtend({ close: effectOptions.close }, itemFromSingleOrMultiple(effectData, id, reduceDuplicates));
}
function loadShapeData(shape, shapeOptions, id, reduceDuplicates) {
	const shapeData = shapeOptions.options[shape];
	return deepExtend({ close: shapeOptions.close }, itemFromSingleOrMultiple(shapeData, id, reduceDuplicates));
}
function fixOutMode(data) {
	if (!isInArray(data.outMode, data.checkModes)) return;
	const diameter = data.radius * 2;
	if (data.coord > data.maxCoord - diameter) data.setCb(-data.radius);
	else if (data.coord < diameter) data.setCb(data.radius);
}
function normalizeAngle(angle, modulus) {
	const normalized = angle % modulus;
	return normalized < 0 ? normalized + modulus : normalized;
}
function initParticleState(particle, id, group) {
	particle.id = id;
	particle.group = group;
	particle.justWarped = false;
	particle.effectClose = true;
	particle.shapeClose = true;
	particle.pathRotation = false;
	particle.lastPathTime = 0;
	particle.destroyed = false;
	particle.unbreakable = false;
	particle.isRotating = false;
	particle.rotation = 0;
	particle.misplaced = false;
	particle.retina = {
		maxDistance: {},
		maxSpeed: 0,
		moveDrift: 0,
		moveSpeed: 0,
		sizeAnimationSpeed: 0
	};
	particle.size = {
		value: 1,
		max: 1,
		min: 1,
		enable: false
	};
	particle.outType = ParticleOutType.normal;
	particle.ignoresResizeRatio = true;
}
function resolveParticleOptions(particle, container, pluginManager, overrideOptions) {
	const mainOptions = container.actualOptions, particlesOptions = loadParticlesOptions(pluginManager, container, mainOptions.particles), reduceDuplicates = particlesOptions.reduceDuplicates;
	particle.effect = itemFromSingleOrMultiple(particlesOptions.effect.type, particle.id, reduceDuplicates);
	particle.shape = itemFromSingleOrMultiple(particlesOptions.shape.type, particle.id, reduceDuplicates);
	const effectOptions = particlesOptions.effect, shapeOptions = particlesOptions.shape;
	if (overrideOptions) {
		if (overrideOptions.effect) {
			const overrideEffectType = overrideOptions.effect.type;
			if (overrideEffectType && overrideEffectType !== particle.effect) {
				const effect = itemFromSingleOrMultiple(overrideEffectType, particle.id, reduceDuplicates);
				if (effect) particle.effect = effect;
			}
			effectOptions.load(overrideOptions.effect);
		}
		if (overrideOptions.shape) {
			const overrideShapeType = overrideOptions.shape.type;
			if (overrideShapeType && overrideShapeType !== particle.shape) {
				const shape = itemFromSingleOrMultiple(overrideShapeType, particle.id, reduceDuplicates);
				if (shape) particle.shape = shape;
			}
			shapeOptions.load(overrideOptions.shape);
		}
	}
	if (particle.effect === "random") {
		const availableEffects = [...container.effectDrawers.keys()];
		particle.effect = availableEffects[Math.floor(getRandom() * availableEffects.length)];
	}
	if (particle.shape === "random") {
		const availableShapes = [...container.shapeDrawers.keys()];
		particle.shape = availableShapes[Math.floor(getRandom() * availableShapes.length)];
	}
	particle.effectData = particle.effect ? loadEffectData(particle.effect, effectOptions, particle.id, reduceDuplicates) : void 0;
	particle.shapeData = particle.shape ? loadShapeData(particle.shape, shapeOptions, particle.id, reduceDuplicates) : void 0;
	particlesOptions.load(overrideOptions);
	const effectData = particle.effectData, shapeData = particle.shapeData;
	if (effectData) particlesOptions.load(effectData.particles);
	if (shapeData) particlesOptions.load(shapeData.particles);
	particle.effectClose = effectData?.close ?? particlesOptions.effect.close;
	particle.shapeClose = shapeData?.close ?? particlesOptions.shape.close;
	return particlesOptions;
}
function initParticleDrawers(particle, container) {
	let effectDrawer, shapeDrawer;
	if (particle.effect) effectDrawer = container.effectDrawers.get(particle.effect);
	if (effectDrawer?.loadEffect) effectDrawer.loadEffect(particle);
	if (particle.shape) shapeDrawer = container.shapeDrawers.get(particle.shape);
	if (shapeDrawer?.loadShape) shapeDrawer.loadShape(particle);
	const sideCountFunc = shapeDrawer?.getSidesCount;
	if (sideCountFunc) particle.sides = sideCountFunc(particle);
}
function runUpdaterPreInit(updaters, particle) {
	for (const updater of updaters) updater.preInit?.(particle);
}
function runUpdaterInit(updaters, particle) {
	for (const updater of updaters) updater.init(particle);
}
function runDrawerInit(container, particle) {
	const shapeDrawer = particle.shape ? container.shapeDrawers.get(particle.shape) : void 0;
	(particle.effect ? container.effectDrawers.get(particle.effect) : void 0)?.particleInit?.(container, particle);
	shapeDrawer?.particleInit?.(container, particle);
}
function runParticleCreatedPlugins(container, particle) {
	for (const plugin of container.particleCreatedPlugins) plugin.particleCreated?.(particle);
}
var Particle = class {
	backColor;
	destroyed;
	direction;
	effect;
	effectClose;
	effectData;
	fillColor;
	fillEnabled;
	fillOpacity;
	group;
	id;
	ignoresResizeRatio;
	initialPosition;
	initialVelocity;
	isRotating;
	justWarped;
	lastPathTime;
	misplaced;
	moveCenter;
	offset;
	opacity;
	options;
	outType;
	pathRotation;
	position;
	randomIndexData;
	retina;
	roll;
	rotation;
	shape;
	shapeClose;
	shapeData;
	sides;
	size;
	spawning;
	strokeColor;
	strokeOpacity;
	strokeWidth;
	unbreakable;
	velocity;
	zIndexFactor;
	#cachedOpacityData = {
		fillOpacity: 1,
		opacity: 1,
		strokeOpacity: 1
	};
	#cachedPosition = Vector3d.origin;
	#cachedRotateData = {
		sin: 0,
		cos: 0
	};
	#cachedTransform = {
		a: 1,
		b: 0,
		c: 0,
		d: 1
	};
	#container;
	#modifiers = [];
	#pluginManager;
	constructor(pluginManager, container) {
		this.#pluginManager = pluginManager;
		this.#container = container;
	}
	addModifier(modifier) {
		this.#modifiers.push(modifier);
		this.#modifiers.sort((a, b) => a.priority - b.priority);
	}
	clearModifiers() {
		this.#modifiers.length = 0;
	}
	destroy(override) {
		if (this.unbreakable || this.destroyed) return;
		this.destroyed = true;
		this.clearModifiers();
		const container = this.#container;
		(this.shape ? container.shapeDrawers.get(this.shape) : void 0)?.particleDestroy?.(this);
		for (const plugin of container.particleDestroyedPlugins) plugin.particleDestroyed?.(this, override);
		for (const updater of container.particleUpdaters) updater.particleDestroyed?.(this, override);
		this.#container.dispatchEvent(EventType.particleDestroyed, { particle: this });
	}
	draw(delta) {
		const render = this.#container.canvas.render;
		render.drawParticlePlugins(this, delta);
		render.drawParticle(this, delta);
	}
	getAngle() {
		return this.rotation + (this.pathRotation ? this.velocity.angle : 0);
	}
	getFillColor() {
		return this.#getRollColor(this.#applyModifiers(getHslFromAnimation(this.fillColor), (m) => m.fillColor));
	}
	getMass() {
		return this.getRadius() ** 2 * Math.PI * half;
	}
	getModifier(id) {
		return this.#modifiers.find((m) => m.id === id);
	}
	getOpacity() {
		const zIndexOptions = this.options.zIndex, zOpacityFactor = (1 - this.zIndexFactor) ** zIndexOptions.opacityRate, baseOpacity = getRangeValue(this.opacity?.value ?? 1), opacity = this.#applyModifiers(void 0, (m) => m.opacity) ?? baseOpacity, fillOpacity = this.fillOpacity ?? 1, strokeOpacity = this.strokeOpacity ?? 1;
		this.#cachedOpacityData.fillOpacity = opacity * fillOpacity * zOpacityFactor;
		this.#cachedOpacityData.opacity = opacity * zOpacityFactor;
		this.#cachedOpacityData.strokeOpacity = opacity * strokeOpacity * zOpacityFactor;
		return this.#cachedOpacityData;
	}
	getPosition() {
		this.#cachedPosition.x = this.position.x + this.offset.x;
		this.#cachedPosition.y = this.position.y + this.offset.y;
		this.#cachedPosition.z = this.position.z;
		return this.#cachedPosition;
	}
	getRadius() {
		return this.#applyModifiers(this.size.value, (m) => m.radius);
	}
	getRotateData() {
		const angle = this.getAngle();
		this.#cachedRotateData.sin = Math.sin(angle);
		this.#cachedRotateData.cos = Math.cos(angle);
		return this.#cachedRotateData;
	}
	getStrokeColor() {
		return this.#getRollColor(this.#applyModifiers(getHslFromAnimation(this.strokeColor), (m) => m.strokeColor));
	}
	getTransformData(externalTransform) {
		const rotateData = this.getRotateData(), rotating = this.isRotating;
		this.#cachedTransform.a = rotateData.cos * (externalTransform.a ?? defaultTransform.a);
		this.#cachedTransform.b = rotating ? rotateData.sin * (externalTransform.b ?? 1) : externalTransform.b ?? defaultTransform.b;
		this.#cachedTransform.c = rotating ? -rotateData.sin * (externalTransform.c ?? 1) : externalTransform.c ?? defaultTransform.c;
		this.#cachedTransform.d = rotateData.cos * (externalTransform.d ?? defaultTransform.d);
		return this.#cachedTransform;
	}
	init(id, position, overrideOptions, group) {
		const container = this.#container;
		initParticleState(this, id, group);
		this.options = resolveParticleOptions(this, container, this.#pluginManager, overrideOptions);
		container.retina.initParticle(this);
		runUpdaterPreInit(container.particleUpdaters, this);
		this.#initPosition(position);
		this.initialVelocity = this.#calculateVelocity();
		this.velocity = this.initialVelocity.copy();
		this.zIndexFactor = this.position.z / container.zLayers;
		this.sides = 24;
		initParticleDrawers(this, container);
		this.spawning = false;
		runUpdaterInit(container.particleUpdaters, this);
		runDrawerInit(container, this);
		runParticleCreatedPlugins(container, this);
	}
	isInsideCanvas(direction) {
		return this.#getInsideCanvasResult({ direction }).inside;
	}
	isInsideCanvasForOutMode(outMode, direction) {
		return this.#getInsideCanvasResult({
			direction,
			outMode
		}).inside;
	}
	isShowingBack() {
		if (!this.roll) return false;
		const angle = this.roll.angle;
		if (this.roll.horizontal && this.roll.vertical) {
			const adjustedAngle = normalizeAngle(angle, doublePI);
			return adjustedAngle >= Math.PI * .5 && adjustedAngle < Math.PI * 3 * .5;
		}
		if (this.roll.horizontal) {
			const adjustedAngle = normalizeAngle(angle + Math.PI * half, doublePI);
			return adjustedAngle >= Math.PI && adjustedAngle < Math.PI * 2;
		}
		if (this.roll.vertical) {
			const adjustedAngle = normalizeAngle(angle, doublePI);
			return adjustedAngle >= Math.PI && adjustedAngle < Math.PI * 2;
		}
		return false;
	}
	isVisible() {
		return !this.destroyed && !this.spawning && this.isInsideCanvas();
	}
	removeModifier(id) {
		const idx = this.#modifiers.findIndex((m) => m.id === id);
		if (idx >= 0) this.#modifiers.splice(idx, 1);
	}
	reset() {
		for (const updater of this.#container.particleUpdaters) updater.reset?.(this);
	}
	#applyModifiers(base, getter) {
		let value = base;
		for (const mod of this.#modifiers) if (mod.enabled) {
			const override = getter(mod);
			if (override !== void 0) value = override;
		}
		return value;
	}
	#calcPosition(position, zIndex) {
		let tryCount = 0, posVec = position ? Vector3d.create(position.x, position.y, zIndex) : void 0;
		const container = this.#container, plugins = container.particlePositionPlugins, outModes = this.options.move.outModes, radius = this.getRadius(), canvasSize = container.canvas.size;
		for (;;) {
			for (const plugin of plugins) {
				const pluginPos = plugin.particlePosition?.(posVec, this);
				if (pluginPos) return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
			}
			const exactPosition = calcExactPositionOrRandomFromSize({
				size: canvasSize,
				position: posVec
			}), pos = Vector3d.create(exactPosition.x, exactPosition.y, zIndex);
			this.#fixHorizontal(pos, radius, outModes.left ?? outModes.default);
			this.#fixHorizontal(pos, radius, outModes.right ?? outModes.default);
			this.#fixVertical(pos, radius, outModes.top ?? outModes.default);
			this.#fixVertical(pos, radius, outModes.bottom ?? outModes.default);
			let isValidPosition = true;
			for (const plugin of container.particles.checkParticlePositionPlugins) {
				isValidPosition = plugin.checkParticlePosition?.(this, pos, tryCount) ?? true;
				if (!isValidPosition) break;
			}
			if (isValidPosition) return pos;
			tryCount += 1;
			posVec = void 0;
		}
	}
	#calculateVelocity() {
		const moveOptions = this.options.move, res = getParticleBaseVelocity(this.direction).copy();
		if (moveOptions.direction === MoveDirection.inside || moveOptions.direction === MoveDirection.outside) return res;
		const rad = degToRad(getRangeValue(moveOptions.angle.value)), radOffset = degToRad(getRangeValue(moveOptions.angle.offset)), range = {
			left: radOffset - rad * half,
			right: radOffset + rad * half
		};
		if (!moveOptions.straight) res.angle += randomInRangeValue(setRangeValue(range.left, range.right));
		if (moveOptions.random && typeof moveOptions.speed === "number") res.length *= getRandom();
		return res;
	}
	#fixHorizontal(pos, radius, outMode) {
		fixOutMode({
			outMode,
			checkModes: [OutMode.bounce],
			coord: pos.x,
			maxCoord: this.#container.canvas.size.width,
			setCb: (value) => pos.x += value,
			radius
		});
	}
	#fixVertical(pos, radius, outMode) {
		fixOutMode({
			outMode,
			checkModes: [OutMode.bounce],
			coord: pos.y,
			maxCoord: this.#container.canvas.size.height,
			setCb: (value) => pos.y += value,
			radius
		});
	}
	#getDefaultInsideCanvasResult(direction, outMode) {
		const radius = this.getRadius(), canvasSize = this.#container.canvas.size, position = this.position, isBounce = outMode === OutMode.bounce;
		if (direction === OutModeDirection.bottom) return {
			inside: isBounce ? position.y + radius < canvasSize.height : position.y - radius < canvasSize.height,
			reason: "default"
		};
		if (direction === OutModeDirection.left) return {
			inside: isBounce ? position.x - radius > 0 : position.x + radius > 0,
			reason: "default"
		};
		if (direction === OutModeDirection.right) return {
			inside: isBounce ? position.x + radius < canvasSize.width : position.x - radius < canvasSize.width,
			reason: "default"
		};
		if (direction === OutModeDirection.top) return {
			inside: isBounce ? position.y - radius > 0 : position.y + radius > 0,
			reason: "default"
		};
		return {
			inside: position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius,
			reason: "default"
		};
	}
	#getInsideCanvasCallbackData(direction, outMode) {
		return {
			canvasSize: this.#container.canvas.size,
			direction,
			outMode,
			particle: this,
			radius: this.getRadius()
		};
	}
	#getInsideCanvasResult(data) {
		const defaultResult = this.#getDefaultInsideCanvasResult(data.direction, data.outMode), container = this.#container, shapeDrawer = this.shape ? container.shapeDrawers.get(this.shape) : void 0, effectDrawer = this.effect ? container.effectDrawers.get(this.effect) : void 0, shapeCheck = shapeDrawer?.isInsideCanvas, effectCheck = effectDrawer?.isInsideCanvas;
		if (!shapeCheck && !effectCheck) return defaultResult;
		const callbackData = this.#getInsideCanvasCallbackData(data.direction, data.outMode), shapeResult = shapeCheck ? this.#normalizeInsideCanvasResult(shapeCheck(callbackData), "shape") : void 0, effectResult = effectCheck ? this.#normalizeInsideCanvasResult(effectCheck(callbackData), "effect") : void 0;
		if (shapeResult && effectResult) {
			const margin = Math.max(shapeResult.margin ?? 0, effectResult.margin ?? 0);
			return {
				inside: shapeResult.inside && effectResult.inside,
				margin: margin > 0 ? margin : void 0,
				reason: "combined"
			};
		}
		return shapeResult ?? effectResult ?? defaultResult;
	}
	#getRollColor(color) {
		if (!color || !this.roll || !this.backColor && !this.roll.alter) return color;
		if (!this.isShowingBack()) return color;
		if (this.backColor) return this.backColor;
		if (this.roll.alter) return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
		return color;
	}
	#initPosition(position) {
		const container = this.#container, zIndexValue = Math.floor(getRangeValue(this.options.zIndex.value)), initialPosition = this.#calcPosition(position, clamp(zIndexValue, 0, container.zLayers));
		if (!initialPosition) throw new Error("a valid position cannot be found for particle");
		this.position = initialPosition;
		this.initialPosition = this.position.copy();
		const canvasSize = container.canvas.size;
		this.moveCenter = {
			...getPosition(this.options.move.center, canvasSize),
			radius: this.options.move.center.radius,
			mode: this.options.move.center.mode
		};
		this.direction = getParticleDirectionAngle(this.options.move.direction, this.position, this.moveCenter);
		switch (this.options.move.direction) {
			case MoveDirection.inside:
				this.outType = ParticleOutType.inside;
				break;
			case MoveDirection.outside:
				this.outType = ParticleOutType.outside;
				break;
			default: break;
		}
		this.offset = Vector.origin;
	}
	#normalizeInsideCanvasResult(result, reason) {
		if (typeof result === "boolean") return {
			inside: result,
			reason
		};
		return {
			inside: result.inside,
			margin: result.margin,
			reason: result.reason ?? reason
		};
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/Utils/SpatialHashGrid.js
var SpatialHashGrid = class {
	#cellSize;
	#cells = /* @__PURE__ */ new Map();
	#circlePool = [];
	#circlePoolIdx;
	#pendingCellSize;
	#rectanglePool = [];
	#rectanglePoolIdx;
	constructor(cellSize) {
		this.#cellSize = cellSize;
		this.#circlePoolIdx = 0;
		this.#rectanglePoolIdx = 0;
	}
	clear() {
		this.#cells.clear();
		const pendingCellSize = this.#pendingCellSize;
		if (pendingCellSize) this.#cellSize = pendingCellSize;
		this.#pendingCellSize = void 0;
	}
	insert(particle) {
		const { x, y } = particle.getPosition(), key = this.#cellKeyFromCoords(x, y);
		if (!this.#cells.has(key)) this.#cells.set(key, []);
		this.#cells.get(key)?.push(particle);
	}
	query(range, check, out = []) {
		const bounds = this.#getRangeBounds(range);
		if (!bounds) return out;
		const minCellX = Math.floor(bounds.minX / this.#cellSize), maxCellX = Math.floor(bounds.maxX / this.#cellSize), minCellY = Math.floor(bounds.minY / this.#cellSize), maxCellY = Math.floor(bounds.maxY / this.#cellSize);
		for (let cx = minCellX; cx <= maxCellX; cx++) for (let cy = minCellY; cy <= maxCellY; cy++) {
			const key = `${cx}_${cy}`, cellParticles = this.#cells.get(key);
			if (!cellParticles) continue;
			for (const p of cellParticles) {
				if (check && !check(p)) continue;
				if (range.contains(p.getPosition())) out.push(p);
			}
		}
		return out;
	}
	queryCircle(position, radius, check, out = []) {
		const circle = this.#acquireCircle(position.x, position.y, radius), result = this.query(circle, check, out);
		this.#releaseShapes();
		return result;
	}
	queryRectangle(position, size, check, out = []) {
		const rect = this.#acquireRectangle(position.x, position.y, size.width, size.height), result = this.query(rect, check, out);
		this.#releaseShapes();
		return result;
	}
	setCellSize(cellSize) {
		this.#pendingCellSize = cellSize;
	}
	#acquireCircle(x, y, r) {
		return (this.#circlePool[this.#circlePoolIdx++] ??= new Circle(x, y, r)).reset(x, y, r);
	}
	#acquireRectangle(x, y, w, h) {
		return (this.#rectanglePool[this.#rectanglePoolIdx++] ??= new Rectangle(x, y, w, h)).reset(x, y, w, h);
	}
	#cellKeyFromCoords(x, y) {
		return `${Math.floor(x / this.#cellSize)}_${Math.floor(y / this.#cellSize)}`;
	}
	#getRangeBounds(range) {
		if (range instanceof Circle) {
			const r = range.radius, { x, y } = range.position;
			return {
				minX: x - r,
				maxX: x + r,
				minY: y - r,
				maxY: y + r
			};
		}
		if (range instanceof Rectangle) {
			const { x, y } = range.position, { width, height } = range.size;
			return {
				minX: x,
				maxX: x + width,
				minY: y,
				maxY: y + height
			};
		}
		return null;
	}
	#releaseShapes() {
		this.#circlePoolIdx = 0;
		this.#rectanglePoolIdx = 0;
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/ParticlesManager.js
var ParticlesManager = class {
	checkParticlePositionPlugins;
	grid;
	#array;
	#container;
	#groupLimits;
	#limit;
	#nextId;
	#particleBuckets;
	#particleResetPlugins;
	#particleUpdatePlugins;
	#pluginManager;
	#pool;
	#postParticleUpdatePlugins;
	#postUpdatePlugins;
	#resizeFactor;
	#updatePlugins;
	#zBuckets;
	constructor(pluginManager, container) {
		this.#pluginManager = pluginManager;
		this.#container = container;
		this.#nextId = 0;
		this.#array = [];
		this.#pool = [];
		this.#limit = 0;
		this.#groupLimits = /* @__PURE__ */ new Map();
		this.#particleBuckets = /* @__PURE__ */ new Map();
		this.#zBuckets = this.#createBuckets(this.#container.zLayers);
		this.grid = new SpatialHashGrid(100);
		this.checkParticlePositionPlugins = [];
		this.#particleResetPlugins = [];
		this.#particleUpdatePlugins = [];
		this.#postUpdatePlugins = [];
		this.#postParticleUpdatePlugins = [];
		this.#updatePlugins = [];
	}
	get count() {
		return this.#array.length;
	}
	addParticle(position, overrideOptions, group, initializer) {
		const limitMode = this.#container.actualOptions.particles.number.limit.mode, limit = group === void 0 ? this.#limit : this.#groupLimits.get(group) ?? this.#limit, currentCount = this.count;
		if (limit > 0) switch (limitMode) {
			case LimitMode.delete: {
				const countToRemove = currentCount + 1 - limit;
				if (countToRemove > 0) this.removeQuantity(countToRemove);
				break;
			}
			case LimitMode.wait:
				if (currentCount >= limit) return;
				break;
			default: break;
		}
		try {
			const particle = this.#pool.pop() ?? new Particle(this.#pluginManager, this.#container);
			particle.init(this.#nextId, position, overrideOptions, group);
			let canAdd = true;
			if (initializer) canAdd = initializer(particle);
			if (!canAdd) {
				this.#pool.push(particle);
				return;
			}
			this.#array.push(particle);
			this.#insertParticleIntoBucket(particle);
			this.#nextId++;
			this.#container.dispatchEvent(EventType.particleAdded, { particle });
			return particle;
		} catch (e) {
			getLogger().warning(`error adding particle: ${e}`);
		}
	}
	clear() {
		this.#array = [];
		this.#particleBuckets.clear();
		this.#resetBuckets(this.#container.zLayers);
	}
	destroy() {
		this.#array = [];
		this.#pool.length = 0;
		this.#particleBuckets.clear();
		this.#zBuckets = [];
		this.checkParticlePositionPlugins = [];
		this.#particleResetPlugins = [];
		this.#particleUpdatePlugins = [];
		this.#postUpdatePlugins = [];
		this.#postParticleUpdatePlugins = [];
		this.#updatePlugins = [];
	}
	drawParticles(delta) {
		for (let i = this.#zBuckets.length - 1; i >= 0; i--) {
			const bucket = this.#zBuckets[i];
			if (!bucket) continue;
			for (const particle of bucket) particle.draw(delta);
		}
	}
	filter(condition) {
		return this.#array.filter(condition);
	}
	find(condition) {
		return this.#array.find(condition);
	}
	get(index) {
		return this.#array[index];
	}
	async init() {
		const container = this.#container, options = container.actualOptions;
		this.checkParticlePositionPlugins = [];
		this.#updatePlugins = [];
		this.#particleUpdatePlugins = [];
		this.#postUpdatePlugins = [];
		this.#particleResetPlugins = [];
		this.#postParticleUpdatePlugins = [];
		this.#particleBuckets.clear();
		this.#resetBuckets(container.zLayers);
		this.grid = new SpatialHashGrid(100 * container.retina.pixelRatio);
		for (const plugin of container.plugins) {
			if (plugin.redrawInit) await plugin.redrawInit();
			if (plugin.checkParticlePosition) this.checkParticlePositionPlugins.push(plugin);
			if (plugin.update) this.#updatePlugins.push(plugin);
			if (plugin.particleUpdate) this.#particleUpdatePlugins.push(plugin);
			if (plugin.postUpdate) this.#postUpdatePlugins.push(plugin);
			if (plugin.particleReset) this.#particleResetPlugins.push(plugin);
			if (plugin.postParticleUpdate) this.#postParticleUpdatePlugins.push(plugin);
		}
		await this.#container.initDrawersAndUpdaters();
		for (const drawer of this.#container.effectDrawers.values()) await drawer.init?.(container);
		for (const drawer of this.#container.shapeDrawers.values()) await drawer.init?.(container);
		let handled = false;
		for (const plugin of container.plugins) {
			handled = plugin.particlesInitialization?.() ?? handled;
			if (handled) break;
		}
		if (!handled) {
			const particlesOptions = options.particles, groups = particlesOptions.groups;
			for (const group in groups) {
				const groupOptions = groups[group];
				if (!groupOptions) continue;
				for (let i = this.count, j = 0; j < groupOptions.number.value && i < particlesOptions.number.value; i++, j++) this.addParticle(void 0, groupOptions, group);
			}
			for (let i = this.count; i < particlesOptions.number.value; i++) this.addParticle();
		}
	}
	push(nb, position, overrideOptions, group) {
		for (let i = 0; i < nb; i++) this.addParticle(position, overrideOptions, group);
	}
	async redraw() {
		this.clear();
		await this.init();
		this.#container.canvas.render.drawParticles({
			value: 0,
			factor: 0
		});
	}
	remove(particle, group, override) {
		this.removeAt(this.#array.indexOf(particle), void 0, group, override);
	}
	removeAt(index, quantity = 1, group, override) {
		if (index < 0 || index > this.count) return;
		let deleted = 0;
		for (let i = index; deleted < quantity && i < this.count; i++) if (this.#removeParticle(i, group, override)) {
			i--;
			deleted++;
		}
	}
	removeQuantity(quantity, group) {
		this.removeAt(0, quantity, group);
	}
	setDensity() {
		const options = this.#container.actualOptions, groups = options.particles.groups;
		let pluginsCount = 0;
		for (const plugin of this.#container.plugins) if (plugin.particlesDensityCount) pluginsCount += plugin.particlesDensityCount();
		for (const group in groups) {
			const groupData = groups[group];
			if (!groupData) continue;
			const groupDataOptions = loadParticlesOptions(this.#pluginManager, this.#container, groupData);
			this.#applyDensity(groupDataOptions, pluginsCount, group);
		}
		this.#applyDensity(options.particles, pluginsCount);
	}
	setResizeFactor(factor) {
		this.#resizeFactor = factor;
	}
	update(delta) {
		this.grid.clear();
		for (const plugin of this.#updatePlugins) plugin.update?.(delta);
		const particlesToDelete = this.#updateParticlesPhase1(delta);
		for (const plugin of this.#postUpdatePlugins) plugin.postUpdate?.(delta);
		this.#updateParticlesPhase2(delta, particlesToDelete);
		if (particlesToDelete.size) for (const particle of particlesToDelete) this.remove(particle);
		this.#resizeFactor = void 0;
	}
	#addToPool(...particles) {
		this.#pool.push(...particles);
	}
	#applyDensity(options, pluginsCount, group, groupOptions) {
		const numberOptions = options.number;
		if (!numberOptions.density.enable) {
			if (group === void 0) this.#limit = numberOptions.limit.value;
			else if (groupOptions?.number.limit.value ?? numberOptions.limit.value) this.#groupLimits.set(group, groupOptions?.number.limit.value ?? numberOptions.limit.value);
			return;
		}
		const densityFactor = this.#initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit.value > 0 ? numberOptions.limit.value : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + pluginsCount, particlesCount = Math.min(this.count, this.filter((t) => t.group === group).length);
		if (group === void 0) this.#limit = numberOptions.limit.value * densityFactor;
		else this.#groupLimits.set(group, numberOptions.limit.value * densityFactor);
		if (particlesCount < particlesNumber) this.push(Math.abs(particlesNumber - particlesCount), void 0, options, group);
		else if (particlesCount > particlesNumber) this.removeQuantity(particlesCount - particlesNumber, group);
	}
	#createBuckets(zLayers) {
		const bucketCount = Math.max(Math.floor(zLayers), 1);
		return Array.from({ length: bucketCount }, () => []);
	}
	#getBucketIndex(zIndex) {
		const maxBucketIndex = this.#zBuckets.length - 1;
		if (maxBucketIndex <= 0) return 0;
		return Math.min(Math.max(Math.floor(zIndex), 0), maxBucketIndex);
	}
	#initDensityFactor(densityOptions) {
		const container = this.#container;
		if (!densityOptions.enable) return 1;
		const canvasSize = container.canvas.size, pxRatio = container.retina.pixelRatio;
		if (!canvasSize.width || !canvasSize.height) return 1;
		return canvasSize.width * canvasSize.height / (densityOptions.height * densityOptions.width * pxRatio ** 2);
	}
	#insertParticleIntoBucket(particle) {
		const bucketIndex = this.#getBucketIndex(particle.position.z), bucket = this.#zBuckets[bucketIndex];
		if (!bucket) return;
		bucket.push(particle);
		this.#particleBuckets.set(particle.id, bucketIndex);
	}
	#removeParticle(index, group, override) {
		const particle = this.#array[index];
		if (!particle) return false;
		if (particle.group !== group) return false;
		this.#array.splice(index, 1);
		this.#removeParticleFromBucket(particle);
		particle.destroy(override);
		this.#container.dispatchEvent(EventType.particleRemoved, { particle });
		this.#addToPool(particle);
		return true;
	}
	#removeParticleFromBucket(particle) {
		const bucketIndex = this.#particleBuckets.get(particle.id) ?? this.#getBucketIndex(particle.position.z), bucket = this.#zBuckets[bucketIndex];
		if (!bucket) {
			this.#particleBuckets.delete(particle.id);
			return;
		}
		const idx = bucket.findIndex((p) => p.id === particle.id);
		if (idx >= 0) bucket.splice(idx, 1);
		this.#particleBuckets.delete(particle.id);
	}
	#resetBuckets(zLayers) {
		const bucketCount = Math.max(Math.floor(zLayers), 1);
		if (this.#zBuckets.length !== bucketCount) {
			this.#zBuckets = this.#createBuckets(bucketCount);
			return;
		}
		for (const bucket of this.#zBuckets) bucket.length = 0;
	}
	#updateParticleBucket(particle) {
		const newBucketIndex = this.#getBucketIndex(particle.position.z), currentBucketIndex = this.#particleBuckets.get(particle.id);
		if (currentBucketIndex === void 0) {
			this.#insertParticleIntoBucket(particle);
			return;
		}
		if (currentBucketIndex === newBucketIndex) return;
		const currentBucket = this.#zBuckets[currentBucketIndex];
		if (currentBucket) {
			const idx = currentBucket.findIndex((p) => p.id === particle.id);
			if (idx >= 0) currentBucket.splice(idx, 1);
		}
		const newBucket = this.#zBuckets[newBucketIndex];
		if (!newBucket) {
			this.#particleBuckets.set(particle.id, newBucketIndex);
			return;
		}
		newBucket.push(particle);
		if (newBucket.length >= 2) {
			const prev = newBucket[newBucket.length - 2];
			if (prev && particle.id < prev.id) newBucket.sort((a, b) => a.id - b.id);
		}
		this.#particleBuckets.set(particle.id, newBucketIndex);
	}
	#updateParticlesPhase1(delta) {
		const particlesToDelete = /* @__PURE__ */ new Set(), resizeFactor = this.#resizeFactor;
		for (const particle of this.#array) {
			if (resizeFactor && !particle.ignoresResizeRatio) {
				particle.position.x *= resizeFactor.width;
				particle.position.y *= resizeFactor.height;
				particle.initialPosition.x *= resizeFactor.width;
				particle.initialPosition.y *= resizeFactor.height;
			}
			particle.ignoresResizeRatio = false;
			for (const plugin of this.#particleResetPlugins) plugin.particleReset?.(particle);
			for (const plugin of this.#particleUpdatePlugins) {
				if (particle.destroyed) break;
				plugin.particleUpdate?.(particle, delta);
			}
			if (particle.destroyed) {
				particlesToDelete.add(particle);
				continue;
			}
			this.grid.insert(particle);
		}
		return particlesToDelete;
	}
	#updateParticlesPhase2(delta, particlesToDelete) {
		for (const particle of this.#array) {
			if (particle.destroyed) {
				particlesToDelete.add(particle);
				continue;
			}
			for (const updater of this.#container.particleUpdaters) updater.update(particle, delta);
			if (!particle.spawning) for (const plugin of this.#postParticleUpdatePlugins) plugin.postParticleUpdate?.(particle, delta);
			this.#updateParticleBucket(particle);
		}
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/Retina.js
var Retina = class {
	pixelRatio;
	reduceFactor;
	#container;
	constructor(container) {
		this.#container = container;
		this.pixelRatio = 1;
		this.reduceFactor = 1;
	}
	init() {
		const container = this.#container, options = container.actualOptions;
		this.pixelRatio = options.detectRetina ? devicePixelRatio : 1;
		this.reduceFactor = 1;
		const ratio = this.pixelRatio, canvas = container.canvas, element = canvas.domElement;
		if (element) {
			canvas.size.width = element.offsetWidth * ratio;
			canvas.size.height = element.offsetHeight * ratio;
		}
	}
	initParticle(particle) {
		const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
		props.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
		props.moveDrift = getRangeValue(moveOptions.drift) * ratio;
		props.moveSpeed = getRangeValue(moveOptions.speed) * ratio;
		const maxDistance = props.maxDistance;
		maxDistance.horizontal = moveDistance.horizontal === void 0 ? void 0 : moveDistance.horizontal * ratio;
		maxDistance.vertical = moveDistance.vertical === void 0 ? void 0 : moveDistance.vertical * ratio;
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Core/Container.js
var Container_exports = /* @__PURE__ */ __exportAll({ Container: () => Container });
function guardCheck(container) {
	return !container.destroyed;
}
function updateDelta(delta, value, fpsLimit = 60, smooth = false) {
	delta.value = value;
	delta.factor = smooth ? 60 / fpsLimit : 60 * value / millisecondsToSeconds;
}
function loadContainerOptions(pluginManager, container, ...sourceOptionsArr) {
	const options = new Options(pluginManager, container);
	loadOptions(options, ...sourceOptionsArr);
	return options;
}
var Container = class {
	actualOptions;
	canvas;
	destroyed;
	effectDrawers;
	fpsLimit;
	hdr;
	id;
	pageHidden;
	particleCreatedPlugins;
	particleDestroyedPlugins;
	particlePositionPlugins;
	particleUpdaters;
	particles;
	plugins;
	retina;
	shapeDrawers;
	started;
	zLayers;
	#delay;
	#delayTimeout;
	#delta = {
		value: 0,
		factor: 0
	};
	#dispatchCallback;
	#drawAnimationFrame;
	#duration;
	#eventListeners;
	#firstStart;
	#initialSourceOptions;
	#lastFrameTime;
	#lifeTime;
	#onDestroy;
	#options;
	#paused;
	#pluginManager;
	#smooth;
	#sourceOptions;
	constructor(params) {
		const { dispatchCallback, pluginManager, id, onDestroy, sourceOptions } = params;
		this.#pluginManager = pluginManager;
		this.#dispatchCallback = dispatchCallback;
		this.#onDestroy = onDestroy;
		this.id = Symbol(id);
		this.fpsLimit = 120;
		this.hdr = false;
		this.#smooth = false;
		this.#delay = 0;
		this.#duration = 0;
		this.#lifeTime = 0;
		this.#firstStart = true;
		this.started = false;
		this.destroyed = false;
		this.#paused = true;
		this.#lastFrameTime = 0;
		this.zLayers = 100;
		this.pageHidden = false;
		this.#sourceOptions = sourceOptions;
		this.#initialSourceOptions = sourceOptions;
		this.effectDrawers = /* @__PURE__ */ new Map();
		this.shapeDrawers = /* @__PURE__ */ new Map();
		this.particleUpdaters = [];
		this.retina = new Retina(this);
		this.canvas = new CanvasManager(this.#pluginManager, this);
		this.particles = new ParticlesManager(this.#pluginManager, this);
		this.plugins = [];
		this.particleDestroyedPlugins = [];
		this.particleCreatedPlugins = [];
		this.particlePositionPlugins = [];
		this.#options = loadContainerOptions(this.#pluginManager, this);
		this.actualOptions = loadContainerOptions(this.#pluginManager, this);
		this.#eventListeners = new EventListeners(this);
		this.dispatchEvent(EventType.containerBuilt);
	}
	get animationStatus() {
		return !this.#paused && !this.pageHidden && guardCheck(this);
	}
	get options() {
		return this.#options;
	}
	get sourceOptions() {
		return this.#sourceOptions;
	}
	addLifeTime(value) {
		this.#lifeTime += value;
	}
	alive() {
		return !this.#duration || this.#lifeTime <= this.#duration;
	}
	destroy(remove = true) {
		if (!guardCheck(this)) return;
		this.stop();
		this.particles.destroy();
		this.canvas.destroy();
		for (const [, effectDrawer] of this.effectDrawers) effectDrawer.destroy?.(this);
		for (const [, shapeDrawer] of this.shapeDrawers) shapeDrawer.destroy?.(this);
		for (const plugin of this.plugins) plugin.destroy?.();
		this.effectDrawers = /* @__PURE__ */ new Map();
		this.shapeDrawers = /* @__PURE__ */ new Map();
		this.particleUpdaters = [];
		this.plugins.length = 0;
		this.#pluginManager.clearPlugins(this);
		this.destroyed = true;
		this.#onDestroy(remove);
		this.dispatchEvent(EventType.containerDestroyed);
	}
	dispatchEvent(type, data) {
		this.#dispatchCallback(type, {
			container: this,
			data
		});
	}
	draw(force) {
		if (!guardCheck(this)) return;
		let refreshTime = force;
		this.#drawAnimationFrame = animate((timestamp) => {
			if (refreshTime) {
				this.#lastFrameTime = void 0;
				refreshTime = false;
			}
			this.#nextFrame(timestamp);
		});
	}
	async export(type, options = {}) {
		for (const plugin of this.plugins) {
			if (!plugin.export) continue;
			const res = await plugin.export(type, options);
			if (!res.supported) continue;
			return res.blob;
		}
		getLogger().error(`Export plugin with type ${type} not found`);
	}
	async init() {
		if (!guardCheck(this)) return;
		const allContainerPlugins = /* @__PURE__ */ new Map();
		for (const plugin of this.#pluginManager.plugins) {
			const containerPlugin = await plugin.getPlugin(this);
			if (containerPlugin.preInit) await containerPlugin.preInit();
			allContainerPlugins.set(plugin, containerPlugin);
		}
		await this.initDrawersAndUpdaters();
		this.#options = loadContainerOptions(this.#pluginManager, this, this.#initialSourceOptions, this.sourceOptions);
		this.actualOptions = loadContainerOptions(this.#pluginManager, this, this.#options);
		this.plugins.length = 0;
		this.particleDestroyedPlugins.length = 0;
		this.particleCreatedPlugins.length = 0;
		this.particlePositionPlugins.length = 0;
		for (const [plugin, containerPlugin] of allContainerPlugins) if (plugin.needsPlugin(this.actualOptions)) {
			this.plugins.push(containerPlugin);
			if (containerPlugin.particleCreated) this.particleCreatedPlugins.push(containerPlugin);
			if (containerPlugin.particleDestroyed) this.particleDestroyedPlugins.push(containerPlugin);
			if (containerPlugin.particlePosition) this.particlePositionPlugins.push(containerPlugin);
		}
		this.retina.init();
		this.canvas.init();
		this.updateActualOptions();
		this.canvas.initBackground();
		this.canvas.resize();
		const { delay, duration, fpsLimit, hdr, smooth, zLayers } = this.actualOptions;
		this.hdr = hdr;
		this.zLayers = zLayers;
		this.#duration = getRangeValue(duration) * millisecondsToSeconds;
		this.#delay = getRangeValue(delay) * millisecondsToSeconds;
		this.#lifeTime = 0;
		this.fpsLimit = fpsLimit > 0 ? fpsLimit : 120;
		this.#smooth = smooth;
		for (const plugin of this.plugins) await plugin.init?.();
		await this.particles.init();
		this.dispatchEvent(EventType.containerInit);
		this.particles.setDensity();
		for (const plugin of this.plugins) plugin.particlesSetup?.();
		this.dispatchEvent(EventType.particlesSetup);
	}
	async initDrawersAndUpdaters() {
		const pluginManager = this.#pluginManager;
		this.effectDrawers = await pluginManager.getEffectDrawers(this, true);
		this.shapeDrawers = await pluginManager.getShapeDrawers(this, true);
		this.particleUpdaters = await pluginManager.getUpdaters(this, true);
	}
	pause() {
		if (!guardCheck(this)) return;
		if (this.#drawAnimationFrame !== void 0) {
			cancelAnimation(this.#drawAnimationFrame);
			this.#drawAnimationFrame = void 0;
		}
		if (this.#paused) return;
		for (const plugin of this.plugins) plugin.pause?.();
		if (!this.pageHidden) this.#paused = true;
		this.dispatchEvent(EventType.containerPaused);
	}
	play(force) {
		if (!guardCheck(this)) return;
		const needsUpdate = this.#paused || force;
		if (this.#firstStart && !this.actualOptions.autoPlay) {
			this.#firstStart = false;
			return;
		}
		if (this.#paused) this.#paused = false;
		if (needsUpdate) {
			for (const plugin of this.plugins) if (plugin.play) plugin.play();
		}
		this.dispatchEvent(EventType.containerPlay);
		this.draw(needsUpdate ?? false);
	}
	async refresh() {
		if (!guardCheck(this)) return;
		this.stop();
		return this.start();
	}
	async reset(sourceOptions) {
		if (!guardCheck(this)) return;
		this.#initialSourceOptions = sourceOptions;
		this.#sourceOptions = sourceOptions;
		this.#options = loadContainerOptions(this.#pluginManager, this, this.#initialSourceOptions, this.sourceOptions);
		this.actualOptions = loadContainerOptions(this.#pluginManager, this, this.#options);
		return this.refresh();
	}
	async start() {
		if (!guardCheck(this) || this.started) return;
		await this.init();
		this.started = true;
		await new Promise((resolve) => {
			const start = async () => {
				this.#eventListeners.addListeners();
				for (const plugin of this.plugins) await plugin.start?.();
				this.dispatchEvent(EventType.containerStarted);
				this.play();
				resolve();
			};
			this.#delayTimeout = setTimeout(() => void start(), this.#delay);
		});
	}
	stop() {
		if (!guardCheck(this) || !this.started) return;
		if (this.#delayTimeout) {
			clearTimeout(this.#delayTimeout);
			this.#delayTimeout = void 0;
		}
		this.#firstStart = true;
		this.started = false;
		this.#eventListeners.removeListeners();
		this.pause();
		this.particles.clear();
		this.canvas.stop();
		for (const plugin of this.plugins) plugin.stop?.();
		this.particleCreatedPlugins.length = 0;
		this.particleDestroyedPlugins.length = 0;
		this.particlePositionPlugins.length = 0;
		this.#sourceOptions = this.#options;
		this.dispatchEvent(EventType.containerStopped);
	}
	updateActualOptions() {
		let refresh = false;
		for (const plugin of this.plugins) if (plugin.updateActualOptions) refresh = plugin.updateActualOptions() || refresh;
		return refresh;
	}
	#nextFrame(timestamp) {
		try {
			if (!this.#smooth && this.#lastFrameTime !== void 0 && timestamp < this.#lastFrameTime + 1e3 / this.fpsLimit) {
				this.draw(false);
				return;
			}
			this.#lastFrameTime ??= timestamp;
			updateDelta(this.#delta, timestamp - this.#lastFrameTime, this.fpsLimit, this.#smooth);
			this.addLifeTime(this.#delta.value);
			this.#lastFrameTime = timestamp;
			if (this.#delta.value > 1e3) {
				this.draw(false);
				return;
			}
			this.canvas.render.drawParticles(this.#delta);
			if (!this.alive()) {
				this.destroy();
				return;
			}
			if (this.animationStatus) this.draw(false);
		} catch (e) {
			getLogger().error("error in animation loop", e);
		}
	}
};
//#endregion
export { Circle as a, RotateDirection as i, ParticlesBounce as n, Rectangle as o, DrawLayer as r, Container_exports as t };
