import { $ as isString, B as getRandom, C as itemFromSingleOrMultiple, F as degToRad, G as parseAlpha, J as isArray, K as randomInRangeValue, L as getDistances, P as clamp, Q as isObject, S as itemFromArray, U as getRangeValue, V as getRandomInRange, W as mix, X as isNull, _ as getItemMapFromInitializer, a as StartValueType, at as doublePI, ct as millisecondsToSeconds, et as Vector, i as AnimationStatus, k as OutModeDirection, lt as originPoint, n as updateAnimation, o as DestroyType, q as setRangeValue, s as AnimationMode, st as half, t as initParticleNumericAnimationValue, u as calculateBounds, ut as randomColorValue, x as isPointInside } from "./animation-utils+[...].mjs";
//#region node_modules/@tsparticles/engine/esm/Enums/Modes/OutMode.js
var OutMode;
(function(OutMode) {
	OutMode["bounce"] = "bounce";
	OutMode["none"] = "none";
	OutMode["out"] = "out";
	OutMode["destroy"] = "destroy";
	OutMode["split"] = "split";
})(OutMode || (OutMode = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/Types/AlterType.js
var AlterType;
(function(AlterType) {
	AlterType["darken"] = "darken";
	AlterType["enlighten"] = "enlighten";
})(AlterType || (AlterType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Enums/Types/ParticleOutType.js
var ParticleOutType;
(function(ParticleOutType) {
	ParticleOutType["normal"] = "normal";
	ParticleOutType["inside"] = "inside";
	ParticleOutType["outside"] = "outside";
})(ParticleOutType || (ParticleOutType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/esm/Utils/OptionLoader.js
var OptionLoader = class {
	load(data) {
		if (isNull(data)) return;
		this.doLoad(data);
	}
};
function loadOptions(options, ...sourceOptionsArr) {
	for (const sourceOptions of sourceOptionsArr) options.load(sourceOptions);
}
//#endregion
//#region node_modules/@tsparticles/engine/esm/Utils/OptionsUtils.js
function loadProperty(obj, key, value) {
	if (value !== void 0) obj[key] = value;
}
function loadRangeProperty(obj, key, value) {
	if (value !== void 0) obj[key] = setRangeValue(value);
}
function loadNestedProperty(obj, key, value) {
	if (value !== void 0) obj[key].load(value);
}
function loadLazyProperty(obj, key, value, factory) {
	if (value !== void 0) {
		const objRecord = obj;
		objRecord[key] ??= factory();
		objRecord[key].load(value);
	}
}
function loadOptionProperty(obj, key, optionClass, ...sources) {
	const objRecord = obj;
	objRecord[key] ??= new optionClass();
	const target = objRecord[key];
	for (const source of sources) target.load(source?.[key]);
}
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/AnimationOptions.js
var AnimationOptions = class extends OptionLoader {
	count = 0;
	decay = 0;
	delay = 0;
	enable = false;
	speed = 1;
	sync = false;
	doLoad(data) {
		loadRangeProperty(this, "count", data.count);
		loadProperty(this, "enable", data.enable);
		loadRangeProperty(this, "speed", data.speed);
		loadRangeProperty(this, "decay", data.decay);
		loadRangeProperty(this, "delay", data.delay);
		loadProperty(this, "sync", data.sync);
	}
};
var RangedAnimationOptions = class extends AnimationOptions {
	mode = AnimationMode.auto;
	startValue = StartValueType.random;
	doLoad(data) {
		super.doLoad(data);
		loadProperty(this, "mode", data.mode);
		loadProperty(this, "startValue", data.startValue);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/ColorAnimation.js
var ColorAnimation = class extends AnimationOptions {
	max;
	min;
	offset = 0;
	sync = true;
	constructor(min, max) {
		super();
		this.min = min;
		this.max = max;
	}
	doLoad(data) {
		super.doLoad(data);
		loadProperty(this, "max", data.max);
		loadProperty(this, "min", data.min);
		loadRangeProperty(this, "offset", data.offset);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/HslAnimation.js
var HslAnimation = class extends OptionLoader {
	h = new ColorAnimation(0, 360);
	l = new ColorAnimation(0, 100);
	s = new ColorAnimation(0, 100);
	doLoad(data) {
		this.h.load(data.h);
		this.s.load(data.s);
		this.l.load(data.l);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/OptionsColor.js
var OptionsColor = class OptionsColor extends OptionLoader {
	value = "";
	static create(source, data) {
		const color = new OptionsColor();
		color.load(source);
		if (data !== void 0) if (isString(data) || isArray(data)) color.load({ value: data });
		else color.load(data);
		return color;
	}
	doLoad(data) {
		if (!isNull(data.value)) this.value = data.value;
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/AnimatableColor.js
var AnimatableColor = class AnimatableColor extends OptionsColor {
	animation = new HslAnimation();
	static create(source, data) {
		const color = new AnimatableColor();
		color.load(source);
		if (data !== void 0) if (isString(data) || isArray(data)) color.load({ value: data });
		else color.load(data);
		return color;
	}
	doLoad(data) {
		super.doLoad(data);
		const colorAnimation = data.animation;
		if (colorAnimation !== void 0) if (colorAnimation.enable === void 0) this.animation.load(data.animation);
		else this.animation.h.load(colorAnimation);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Options/Classes/ValueWithRandom.js
var ValueWithRandom = class extends OptionLoader {
	value = 0;
	doLoad(data) {
		if (!isNull(data.value)) this.value = setRangeValue(data.value);
	}
};
var AnimationValueWithRandom = class extends ValueWithRandom {
	animation = new AnimationOptions();
	doLoad(data) {
		super.doLoad(data);
		loadNestedProperty(this, "animation", data.animation);
	}
};
var RangedAnimationValueWithRandom = class extends AnimationValueWithRandom {
	animation = new RangedAnimationOptions();
};
//#endregion
//#region node_modules/@tsparticles/engine/esm/Utils/ColorUtils.js
var styleCache = /* @__PURE__ */ new Map(), maxStyleCacheSize = 2e3, rgbFixedPrecision = 2, hslFixedPrecision = 2, hdrRgbFixedPrecision = 4, hdrHslFixedPrecision = 4, sdrReferenceWhiteNits = 203, hdrAnimationScale = sdrReferenceWhiteNits / 400;
function getCachedStyle(key, generator) {
	let cached = styleCache.get(key);
	if (!cached) {
		cached = generator();
		if (styleCache.size > maxStyleCacheSize) styleCache.clear();
		styleCache.set(key, cached);
	}
	return cached;
}
function stringToRgba(pluginManager, input) {
	if (!input) return;
	for (const manager of pluginManager.colorManagers.values()) if (manager.accepts(input)) return manager.parseString(input);
}
function rangeColorToRgb(pluginManager, input, index, useIndex = true) {
	if (!input) return;
	const color = isString(input) ? { value: input } : input;
	if (isString(color.value)) return colorToRgb(pluginManager, color.value, index, useIndex);
	if (isArray(color.value)) {
		const value = itemFromArray(color.value, index, useIndex);
		if (!value) return;
		return rangeColorToRgb(pluginManager, { value });
	}
	for (const manager of pluginManager.colorManagers.values()) {
		const res = manager.handleRangeColor(color);
		if (res) return res;
	}
}
function colorToRgb(pluginManager, input, index, useIndex = true) {
	if (!input) return;
	const color = isString(input) ? { value: input } : input;
	if (isString(color.value)) return color.value === "random" ? getRandomRgbColor() : stringToRgb(pluginManager, color.value);
	if (isArray(color.value)) {
		const value = itemFromArray(color.value, index, useIndex);
		if (!value) return;
		return colorToRgb(pluginManager, { value });
	}
	for (const manager of pluginManager.colorManagers.values()) {
		const res = manager.handleColor(color);
		if (res) return res;
	}
}
function rangeColorToHsl(pluginManager, color, index, useIndex = true) {
	const rgb = rangeColorToRgb(pluginManager, color, index, useIndex);
	return rgb ? rgbToHsl(rgb) : void 0;
}
function rgbToHsl(color) {
	const r1 = color.r / 255, g1 = color.g / 255, b1 = color.b / 255, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
		h: 0,
		l: (max + min) * half,
		s: 0
	};
	if (max !== min) {
		res.s = res.l < .5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
		if (r1 === max) res.h = (g1 - b1) / (max - min);
		else if (g1 === max) res.h = 2 + (b1 - r1) / (max - min);
		else res.h = 4 + (r1 - g1) / (max - min);
	}
	res.l *= 100;
	res.s *= 100;
	res.h *= 60;
	if (res.h < 0) res.h += 360;
	if (res.h >= 360) res.h -= 360;
	return res;
}
function stringToRgb(pluginManager, input) {
	return stringToRgba(pluginManager, input);
}
function hslChannel(temp1, temp2, temp3) {
	const temp3Min = 0, temp3Max = 1;
	if (temp3 < temp3Min) temp3++;
	if (temp3 > temp3Max) temp3--;
	if (temp3 * 6 < temp3Max) return temp1 + (temp2 - temp1) * 6 * temp3;
	if (temp3 * 2 < temp3Max) return temp2;
	if (temp3 * 3 < temp3Max * 2) return temp1 + (temp2 - temp1) * (2 / 3 - temp3) * 6;
	return temp1;
}
function hslToRgb(hsl) {
	const h = (hsl.h % 360 + 360) % 360, s = Math.max(0, Math.min(100, hsl.s)), l = Math.max(0, Math.min(100, hsl.l)), hNormalized = h / 360, sNormalized = s / 100, lNormalized = l / 100;
	if (s === 0) {
		const grayscaleValue = Math.round(lNormalized * 255);
		return {
			r: grayscaleValue,
			g: grayscaleValue,
			b: grayscaleValue
		};
	}
	const temp1 = lNormalized < .5 ? lNormalized * (1 + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp2 = 2 * lNormalized - temp1, phaseThird = 1 / 3, red = Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized + phaseThird)), green = Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized)), blue = Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized - phaseThird));
	return {
		r: Math.round(red),
		g: Math.round(green),
		b: Math.round(blue)
	};
}
function hslToRgbFloat(hsl) {
	const h = (hsl.h % 360 + 360) % 360, s = Math.max(0, Math.min(100, hsl.s)), l = Math.max(0, Math.min(100, hsl.l)), hNormalized = h / 360, sNormalized = s / 100, lNormalized = l / 100;
	if (s === 0) {
		const grayscaleValue = lNormalized * 255;
		return {
			r: grayscaleValue,
			g: grayscaleValue,
			b: grayscaleValue
		};
	}
	const temp1 = lNormalized < .5 ? lNormalized * (1 + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp2 = 2 * lNormalized - temp1, phaseThird = 1 / 3;
	return {
		r: Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized + phaseThird)),
		g: Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized)),
		b: Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized - phaseThird))
	};
}
function hslaToRgba(hsla) {
	const rgbResult = hslToRgb(hsla);
	return {
		a: hsla.a,
		b: rgbResult.b,
		g: rgbResult.g,
		r: rgbResult.r
	};
}
function getRandomRgbColor(min, hdr) {
	const fixedMin = min ?? 0;
	if (hdr) return {
		r: getRandomInRange(fixedMin, 255),
		g: getRandomInRange(fixedMin, 255),
		b: getRandomInRange(fixedMin, 255)
	};
	const fixedMax = 256, getRgbInRangeValue = () => Math.floor(getRandomInRange(fixedMin, fixedMax));
	return {
		b: getRgbInRangeValue(),
		g: getRgbInRangeValue(),
		r: getRgbInRangeValue()
	};
}
function getStyleFromRgb(color, hdr, opacity) {
	const rgbPrecision = hdr ? hdrRgbFixedPrecision : rgbFixedPrecision, op = opacity ?? 1;
	return getCachedStyle(`rgb-${color.r.toFixed(rgbPrecision)}-${color.g.toFixed(rgbPrecision)}-${color.b.toFixed(rgbPrecision)}-${hdr ? "hdr" : "sdr"}-${op.toString()}`, () => hdr ? getHdrStyleFromRgb(color, opacity) : getSdrStyleFromRgb(color, opacity));
}
function getHdrStyleFromRgb(color, opacity, peakNits = 400) {
	const headroom = peakNits / sdrReferenceWhiteNits;
	return `color(display-p3 ${(color.r / 255 * headroom).toString()} ${(color.g / 255 * headroom).toString()} ${(color.b / 255 * headroom).toString()} / ${(opacity ?? 1).toString()})`;
}
function getSdrStyleFromRgb(color, opacity) {
	return `rgba(${color.r.toString()}, ${color.g.toString()}, ${color.b.toString()}, ${(opacity ?? 1).toString()})`;
}
function getStyleFromHsl(color, hdr, opacity) {
	const hslPrecision = hdr ? hdrHslFixedPrecision : hslFixedPrecision, op = opacity ?? 1;
	return getCachedStyle(`hsl-${color.h.toFixed(hslPrecision)}-${color.s.toFixed(hslPrecision)}-${color.l.toFixed(hslPrecision)}-${hdr ? "hdr" : "sdr"}-${op.toString()}`, () => hdr ? getStyleFromRgb(hslToRgbFloat(color), true, opacity) : `hsla(${color.h.toString()}, ${color.s.toString()}%, ${color.l.toString()}%, ${op.toString()})`);
}
function colorMix(color1, color2, size1, size2) {
	let rgb1 = color1, rgb2 = color2;
	if (!("r" in rgb1)) rgb1 = hslToRgb(color1);
	if (!("r" in rgb2)) rgb2 = hslToRgb(color2);
	return {
		b: mix(rgb1.b, rgb2.b, size1, size2),
		g: mix(rgb1.g, rgb2.g, size1, size2),
		r: mix(rgb1.r, rgb2.r, size1, size2)
	};
}
function getLinkColor(p1, p2, linkColor) {
	if (linkColor === "random") return getRandomRgbColor();
	else if (linkColor === "mid") {
		const sourceColor = p1.getFillColor() ?? p1.getStrokeColor(), destColor = p2?.getFillColor() ?? p2?.getStrokeColor();
		if (sourceColor && destColor && p2) return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
		else {
			const hslColor = sourceColor ?? destColor;
			if (hslColor) return hslToRgb(hslColor);
		}
	} else return linkColor;
}
function getLinkRandomColor(pluginManager, optColor, blink, consent) {
	const color = isString(optColor) ? optColor : optColor.value;
	if (color === "random") {
		if (consent) return rangeColorToRgb(pluginManager, { value: color });
		if (blink) return randomColorValue;
		return "mid";
	} else if (color === "mid") return "mid";
	else return rangeColorToRgb(pluginManager, { value: color });
}
function getHslFromAnimation(animation) {
	return animation === void 0 ? void 0 : {
		h: animation.h.value,
		s: animation.s.value,
		l: animation.l.value
	};
}
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
	const resColor = {
		h: {
			enable: false,
			value: hsl.h,
			min: 0,
			max: 360
		},
		s: {
			enable: false,
			value: hsl.s,
			min: 0,
			max: 100
		},
		l: {
			enable: false,
			value: hsl.l,
			min: 0,
			max: 100
		}
	};
	if (animationOptions) {
		setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
		setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
		setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
	}
	return resColor;
}
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
	colorValue.enable = colorAnimation.enable;
	colorValue.min = colorAnimation.min;
	colorValue.max = colorAnimation.max;
	if (colorValue.enable) {
		colorValue.velocity = getRangeValue(colorAnimation.speed) / 100 * reduceFactor;
		colorValue.decay = 1 - getRangeValue(colorAnimation.decay);
		colorValue.status = AnimationStatus.increasing;
		colorValue.loops = 0;
		colorValue.maxLoops = getRangeValue(colorAnimation.count);
		colorValue.time = 0;
		colorValue.delayTime = getRangeValue(colorAnimation.delay) * millisecondsToSeconds;
		if (!colorAnimation.sync) {
			colorValue.velocity *= getRandom();
			colorValue.value *= getRandom();
		}
		colorValue.initialValue = colorValue.value;
		colorValue.offset = setRangeValue(colorAnimation.offset);
	} else colorValue.velocity = 0;
}
function updateColorValue(data, decrease, delta, hdr) {
	const minLoops = 0, minDelay = 0, identity = 1, minVelocity = 0, minOffset = 0, velocityFactor = 3.6;
	if (!data.enable || (data.maxLoops ?? minLoops) > minLoops && (data.loops ?? minLoops) > (data.maxLoops ?? minLoops)) return;
	data.time ??= 0;
	if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) data.time += delta.value;
	if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) return;
	const offset = data.offset ? randomInRangeValue(data.offset) : minOffset, velocity = ((data.velocity ?? minVelocity) * delta.factor + offset * velocityFactor) * (hdr ? hdrAnimationScale : identity), decay = data.decay ?? identity, max = data.max, min = data.min;
	if (!decrease || data.status === AnimationStatus.increasing) {
		data.value += velocity;
		if (data.value > max) {
			data.loops ??= 0;
			data.loops++;
			if (decrease) data.status = AnimationStatus.decreasing;
			else data.value -= max;
		}
	} else {
		data.value -= velocity;
		if (data.value < min) {
			data.loops ??= 0;
			data.loops++;
			data.status = AnimationStatus.increasing;
		}
	}
	if (data.velocity && decay !== identity) data.velocity *= decay;
	data.value = clamp(data.value, min, max);
}
function updateColor(color, delta, hdr) {
	if (!color) return;
	const { h, s, l } = color;
	updateColorValue(h, false, delta, hdr);
	updateColorValue(s, true, delta, hdr);
	updateColorValue(l, true, delta, hdr);
}
function alterHsl(color, type, value) {
	return {
		h: color.h,
		s: color.s,
		l: color.l + (type === AlterType.darken ? -1 : 1) * value
	};
}
//#endregion
//#region node_modules/@tsparticles/plugin-blend/esm/Options/Classes/Blend.js
var Blend = class {
	enable = false;
	mode = "destination-out";
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "mode", data.mode);
		loadProperty(this, "enable", data.enable);
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-blend/esm/BlendPlugin.js
var BlendPlugin = class {
	id = "blend";
	async getPlugin(container) {
		const { BlendPluginInstance } = await import("../tsparticles__plugin-blend.mjs").then((n) => n.t);
		return new BlendPluginInstance(container);
	}
	loadOptions(_container, options, source) {
		if (!this.needsPlugin(options) && !this.needsPlugin(source)) return;
		let blendOptions = options.blend;
		if (!blendOptions?.load) options.blend = blendOptions = new Blend();
		blendOptions.load(source?.blend);
	}
	loadParticlesOptions(_container, options, source) {
		options.blend ??= new Blend();
		options.blend.load(source?.blend);
	}
	needsPlugin(options) {
		return !!options?.blend?.enable || !!options?.particles?.blend?.enable;
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-blend/esm/index.js
async function loadBlendPlugin(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addPlugin(new BlendPlugin());
	});
}
//#endregion
//#region node_modules/@tsparticles/shape-circle/esm/Utils.js
var minAngle$1 = 0;
function drawCircle(data) {
	const { context, particle, radius } = data;
	particle.circleRange ??= {
		min: minAngle$1,
		max: doublePI
	};
	const circleRange = particle.circleRange;
	context.arc(originPoint.x, originPoint.y, radius, circleRange.min, circleRange.max, false);
}
//#endregion
//#region node_modules/@tsparticles/shape-circle/esm/CircleDrawer.js
var sides = 12, maxAngle = 360, minAngle = 0;
var CircleDrawer = class {
	draw(data) {
		drawCircle(data);
	}
	getSidesCount() {
		return sides;
	}
	particleInit(_container, particle) {
		const angle = particle.shapeData?.angle ?? {
			max: maxAngle,
			min: minAngle
		};
		particle.circleRange = isObject(angle) ? {
			min: degToRad(angle.min),
			max: degToRad(angle.max)
		} : {
			min: minAngle,
			max: degToRad(angle)
		};
	}
};
//#endregion
//#region node_modules/@tsparticles/shape-circle/esm/index.js
async function loadCircleShape(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addShape(["circle"], () => {
			return Promise.resolve(new CircleDrawer());
		});
	});
}
//#endregion
//#region node_modules/@tsparticles/plugin-hex-color/esm/HexColorManager.js
var RgbIndexes$1;
(function(RgbIndexes) {
	RgbIndexes[RgbIndexes["r"] = 1] = "r";
	RgbIndexes[RgbIndexes["g"] = 2] = "g";
	RgbIndexes[RgbIndexes["b"] = 3] = "b";
	RgbIndexes[RgbIndexes["a"] = 4] = "a";
})(RgbIndexes$1 || (RgbIndexes$1 = {}));
var shorthandHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, hexRadix = 16, defaultAlpha = 1, alphaFactor = 255;
var HexColorManager = class {
	accepts(input) {
		return input.startsWith("#");
	}
	handleColor(color) {
		return this.#parseString(color.value);
	}
	handleRangeColor(color) {
		return this.#parseString(color.value);
	}
	parseString(input) {
		return this.#parseString(input);
	}
	#parseString(hexColor) {
		if (typeof hexColor !== "string" || !this.accepts(hexColor)) return;
		const hexFixed = hexColor.replace(shorthandHexRegex, (_, r, g, b, a) => {
			return r + r + g + g + b + b + (a === void 0 ? "" : a + a);
		}), result = hexRegex.exec(hexFixed);
		return result ? {
			a: result[RgbIndexes$1.a] ? Number.parseInt(result[RgbIndexes$1.a], hexRadix) / alphaFactor : defaultAlpha,
			b: Number.parseInt(result[RgbIndexes$1.b] ?? "0", hexRadix),
			g: Number.parseInt(result[RgbIndexes$1.g] ?? "0", hexRadix),
			r: Number.parseInt(result[RgbIndexes$1.r] ?? "0", hexRadix)
		} : void 0;
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-hex-color/esm/index.js
async function loadHexColorPlugin(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addColorManager("hex", new HexColorManager());
	});
}
//#endregion
//#region node_modules/@tsparticles/plugin-hsl-color/esm/HslColorManager.js
var HslIndexes;
(function(HslIndexes) {
	HslIndexes[HslIndexes["h"] = 1] = "h";
	HslIndexes[HslIndexes["s"] = 2] = "s";
	HslIndexes[HslIndexes["l"] = 3] = "l";
	HslIndexes[HslIndexes["a"] = 5] = "a";
})(HslIndexes || (HslIndexes = {}));
var hslRegex = /hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i;
var HslColorManager = class {
	accepts(input) {
		return input.startsWith("hsl");
	}
	handleColor(color) {
		const hslColor = color.value.hsl ?? color.value;
		if (!("h" in hslColor) || !("s" in hslColor) || !("l" in hslColor)) return;
		return hslToRgb(hslColor);
	}
	handleRangeColor(color) {
		const hslColor = color.value.hsl ?? color.value;
		if (!("h" in hslColor) || !("s" in hslColor) || !("l" in hslColor)) return;
		return hslToRgb({
			h: getRangeValue(hslColor.h),
			l: getRangeValue(hslColor.l),
			s: getRangeValue(hslColor.s)
		});
	}
	parseString(input) {
		if (!this.accepts(input)) return;
		const result = hslRegex.exec(input), minLength = 4, defaultAlpha = 1, radix = 10;
		return result ? hslaToRgba({
			a: result.length > minLength ? parseAlpha(result[HslIndexes.a]) : defaultAlpha,
			h: Number.parseInt(result[HslIndexes.h] ?? "0", radix),
			l: Number.parseInt(result[HslIndexes.l] ?? "0", radix),
			s: Number.parseInt(result[HslIndexes.s] ?? "0", radix)
		}) : void 0;
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-hsl-color/esm/index.js
async function loadHslColorPlugin(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addColorManager("hsl", new HslColorManager());
	});
}
//#endregion
//#region node_modules/@tsparticles/plugin-move/esm/MovePlugin.js
var MovePlugin = class {
	id = "move";
	#pluginManager;
	constructor(pluginManager) {
		this.#pluginManager = pluginManager;
	}
	async getPlugin(container) {
		const { MovePluginInstance } = await import("../tsparticles__plugin-move.mjs").then((n) => n.t);
		return new MovePluginInstance(this.#pluginManager, container);
	}
	loadOptions() {}
	needsPlugin() {
		return true;
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-move/esm/index.js
async function loadMovePlugin(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		const movePluginManager = e.pluginManager;
		movePluginManager.initializers.pathGenerators ??= /* @__PURE__ */ new Map();
		movePluginManager.pathGenerators ??= /* @__PURE__ */ new Map();
		movePluginManager.addPathGenerator = (name, generator) => {
			movePluginManager.initializers.pathGenerators ??= /* @__PURE__ */ new Map();
			movePluginManager.initializers.pathGenerators.set(name, generator);
		};
		movePluginManager.getPathGenerators = async (container, force = false) => {
			movePluginManager.initializers.pathGenerators ??= /* @__PURE__ */ new Map();
			movePluginManager.pathGenerators ??= /* @__PURE__ */ new Map();
			return getItemMapFromInitializer(container, movePluginManager.pathGenerators, movePluginManager.initializers.pathGenerators, force);
		};
		e.pluginManager.addPlugin(new MovePlugin(e.pluginManager));
	});
}
//#endregion
//#region node_modules/@tsparticles/updater-opacity/esm/Options/Classes/OpacityAnimation.js
var OpacityAnimation = class extends RangedAnimationOptions {
	destroy = DestroyType.none;
	load(data) {
		super.load(data);
		if (isNull(data)) return;
		loadProperty(this, "destroy", data.destroy);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-opacity/esm/Options/Classes/Opacity.js
var Opacity = class extends RangedAnimationValueWithRandom {
	animation = new OpacityAnimation();
	value = 1;
	load(data) {
		if (isNull(data)) return;
		super.load(data);
		const animation = data.animation;
		if (animation !== void 0) this.animation.load(animation);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-opacity/esm/OpacityUpdater.js
var OpacityUpdater = class {
	#container;
	constructor(container) {
		this.#container = container;
	}
	init(particle) {
		const opacityOptions = particle.options.opacity, pxRatio = 1;
		if (!opacityOptions) return;
		particle.opacity = initParticleNumericAnimationValue(opacityOptions, pxRatio);
		const opacityAnimation = opacityOptions.animation;
		if (opacityAnimation.enable) {
			particle.opacity.velocity = getRangeValue(opacityAnimation.speed) / 100 * this.#container.retina.reduceFactor;
			if (!opacityAnimation.sync) particle.opacity.velocity *= getRandom();
		}
	}
	isEnabled(particle) {
		const none = 0;
		return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? none) <= none || (particle.opacity.maxLoops ?? none) > none && (particle.opacity.loops ?? none) < (particle.opacity.maxLoops ?? none));
	}
	loadOptions(options, ...sources) {
		loadOptionProperty(options, "opacity", Opacity, ...sources);
	}
	reset(particle) {
		if (!particle.opacity) return;
		particle.opacity.time = 0;
		particle.opacity.loops = 0;
	}
	update(particle, delta) {
		if (!this.isEnabled(particle) || !particle.opacity || !particle.options.opacity) return;
		updateAnimation(particle, particle.opacity, true, particle.options.opacity.animation.destroy, delta);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-opacity/esm/index.js
async function loadOpacityUpdater(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addParticleUpdater("opacity", (container) => {
			return Promise.resolve(new OpacityUpdater(container));
		});
	});
}
//#endregion
//#region node_modules/@tsparticles/updater-out-modes/esm/Utils.js
var boundsMin = 0;
function bounceHorizontal(data) {
	if (data.outMode !== OutMode.bounce && data.outMode !== OutMode.split || data.direction !== OutModeDirection.left && data.direction !== OutModeDirection.right) return;
	if (data.bounds.right < boundsMin && data.direction === OutModeDirection.left) data.particle.position.x = data.size + data.offset.x;
	else if (data.bounds.left > data.canvasSize.width && data.direction === OutModeDirection.right) data.particle.position.x = data.canvasSize.width - data.size - data.offset.x;
	const velocity = data.particle.velocity.x;
	let bounced = false;
	if (data.outOfCanvas && (data.direction === OutModeDirection.right && velocity > 0 || data.direction === OutModeDirection.left && velocity < 0)) {
		const newVelocity = getRangeValue(data.particle.options.bounce.horizontal.value);
		data.particle.velocity.x *= -newVelocity;
		bounced = true;
	}
	if (!bounced) return;
	const minPos = data.offset.x + data.size;
	if (data.outOfCanvas && data.direction === OutModeDirection.right) data.particle.position.x = data.canvasSize.width - minPos;
	else if (data.outOfCanvas && data.direction === OutModeDirection.left) data.particle.position.x = minPos;
	if (data.outMode === OutMode.split) data.particle.destroy();
}
function bounceVertical(data) {
	if (data.outMode !== OutMode.bounce && data.outMode !== OutMode.split || data.direction !== OutModeDirection.bottom && data.direction !== OutModeDirection.top) return;
	if (data.bounds.bottom < boundsMin && data.direction === OutModeDirection.top) data.particle.position.y = data.size + data.offset.y;
	else if (data.bounds.top > data.canvasSize.height && data.direction === OutModeDirection.bottom) data.particle.position.y = data.canvasSize.height - data.size - data.offset.y;
	const velocity = data.particle.velocity.y;
	let bounced = false;
	if (data.outOfCanvas && (data.direction === OutModeDirection.bottom && velocity > 0 || data.direction === OutModeDirection.top && velocity < 0)) {
		const newVelocity = getRangeValue(data.particle.options.bounce.vertical.value);
		data.particle.velocity.y *= -newVelocity;
		bounced = true;
	}
	if (!bounced) return;
	const minPos = data.offset.y + data.size;
	if (data.outOfCanvas && data.direction === OutModeDirection.bottom) data.particle.position.y = data.canvasSize.height - minPos;
	else if (data.outOfCanvas && data.direction === OutModeDirection.top) data.particle.position.y = minPos;
	if (data.outMode === OutMode.split) data.particle.destroy();
}
//#endregion
//#region node_modules/@tsparticles/updater-out-modes/esm/BounceOutMode.js
var BounceOutMode = class {
	modes;
	#container;
	#particleBouncePlugins;
	constructor(container) {
		this.#container = container;
		this.modes = [OutMode.bounce, OutMode.split];
		this.#particleBouncePlugins = container.plugins.filter((p) => p.particleBounce !== void 0);
	}
	update(particle, direction, delta, outMode) {
		if (!this.modes.includes(outMode)) return;
		const container = this.#container;
		let handled = false;
		for (const plugin of this.#particleBouncePlugins) {
			handled = plugin.particleBounce?.(particle, delta, direction) ?? false;
			if (handled) break;
		}
		if (handled) return;
		const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = calculateBounds(pos, size), canvasSize = container.canvas.size, outOfCanvas = !particle.isInsideCanvasForOutMode(outMode, direction);
		bounceHorizontal({
			particle,
			outMode,
			direction,
			bounds,
			canvasSize,
			offset,
			outOfCanvas,
			size
		});
		bounceVertical({
			particle,
			outMode,
			direction,
			bounds,
			canvasSize,
			offset,
			outOfCanvas,
			size
		});
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-out-modes/esm/DestroyOutMode.js
var DestroyOutMode = class {
	modes;
	constructor(_container) {
		this.modes = [OutMode.destroy];
	}
	update(particle, direction, _delta, outMode) {
		if (!this.modes.includes(outMode)) return;
		switch (particle.outType) {
			case ParticleOutType.normal:
			case ParticleOutType.outside:
				if (particle.isInsideCanvasForOutMode(outMode, direction)) return;
				break;
			case ParticleOutType.inside: {
				const { dx, dy } = getDistances(particle.position, particle.moveCenter), { x: vx, y: vy } = particle.velocity;
				if (vx < 0 && dx > particle.moveCenter.radius || vy < 0 && dy > particle.moveCenter.radius || vx >= 0 && dx < -particle.moveCenter.radius || vy >= 0 && dy < -particle.moveCenter.radius) return;
				break;
			}
		}
		particle.destroy(true);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-out-modes/esm/NoneOutMode.js
var NoneOutMode = class {
	modes;
	#container;
	constructor(container) {
		this.#container = container;
		this.modes = [OutMode.none];
	}
	update(particle, direction, _delta, outMode) {
		if (!this.modes.includes(outMode)) return;
		if ((particle.options.move.distance.horizontal && (direction === OutModeDirection.left || direction === OutModeDirection.right)) ?? (particle.options.move.distance.vertical && (direction === OutModeDirection.top || direction === OutModeDirection.bottom))) return;
		const gravityOptions = particle.options.move.gravity, container = this.#container, canvasSize = container.canvas.size, pRadius = particle.getRadius();
		if (!gravityOptions.enable) {
			if (particle.velocity.y > 0 && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < 0 && particle.position.y >= -pRadius || particle.velocity.x > 0 && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < 0 && particle.position.x >= -pRadius) return;
			if (!isPointInside(particle.position, container.canvas.size, originPoint, pRadius, direction)) particle.destroy();
		} else {
			const position = particle.position;
			if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === OutModeDirection.bottom || gravityOptions.inverse && position.y < -pRadius && direction === OutModeDirection.top) particle.destroy();
		}
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-out-modes/esm/OutOutMode.js
var updateVector = Vector.origin;
var OutOutMode = class {
	modes;
	#container;
	constructor(container) {
		this.#container = container;
		this.modes = [OutMode.out];
	}
	update(particle, direction, _delta, outMode) {
		if (!this.modes.includes(outMode)) return;
		const container = this.#container;
		switch (particle.outType) {
			case ParticleOutType.inside: {
				const { x: vx, y: vy } = particle.velocity;
				updateVector.setTo(originPoint);
				updateVector.length = particle.moveCenter.radius;
				updateVector.angle = particle.velocity.angle + Math.PI;
				updateVector.addTo(particle.moveCenter);
				const { dx, dy } = getDistances(particle.position, updateVector);
				if (vx <= 0 && dx >= 0 || vy <= 0 && dy >= 0 || vx >= 0 && dx <= 0 || vy >= 0 && dy <= 0) return;
				particle.position.x = Math.floor(randomInRangeValue({
					min: 0,
					max: container.canvas.size.width
				}));
				particle.position.y = Math.floor(randomInRangeValue({
					min: 0,
					max: container.canvas.size.height
				}));
				const { dx: newDx, dy: newDy } = getDistances(particle.position, particle.moveCenter);
				particle.direction = Math.atan2(-newDy, -newDx);
				particle.velocity.angle = particle.direction;
				particle.justWarped = true;
				break;
			}
			default:
				if (particle.isInsideCanvasForOutMode(outMode, direction)) return;
				switch (particle.outType) {
					case ParticleOutType.outside: {
						particle.position.x = Math.floor(randomInRangeValue({
							min: -particle.moveCenter.radius,
							max: particle.moveCenter.radius
						})) + particle.moveCenter.x;
						particle.position.y = Math.floor(randomInRangeValue({
							min: -particle.moveCenter.radius,
							max: particle.moveCenter.radius
						})) + particle.moveCenter.y;
						const { dx, dy } = getDistances(particle.position, particle.moveCenter);
						if (particle.moveCenter.radius) {
							particle.direction = Math.atan2(dy, dx);
							particle.velocity.angle = particle.direction;
						}
						particle.justWarped = true;
						break;
					}
					case ParticleOutType.normal: {
						const warp = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
							bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
							left: -particle.getRadius() - particle.offset.x,
							right: canvasSize.width + particle.getRadius() + particle.offset.x,
							top: -particle.getRadius() - particle.offset.y
						}, sizeValue = particle.getRadius(), nextBounds = calculateBounds(particle.position, sizeValue);
						if (direction === OutModeDirection.right && nextBounds.left > canvasSize.width + particle.offset.x) {
							particle.position.x = newPos.left;
							particle.initialPosition.x = particle.position.x;
							if (!warp) {
								particle.position.y = getRandom() * canvasSize.height;
								particle.initialPosition.y = particle.position.y;
							}
							particle.justWarped = true;
						} else if (direction === OutModeDirection.left && nextBounds.right < -particle.offset.x) {
							particle.position.x = newPos.right;
							particle.initialPosition.x = particle.position.x;
							if (!warp) {
								particle.position.y = getRandom() * canvasSize.height;
								particle.initialPosition.y = particle.position.y;
							}
							particle.justWarped = true;
						}
						if (direction === OutModeDirection.bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
							if (!warp) {
								particle.position.x = getRandom() * canvasSize.width;
								particle.initialPosition.x = particle.position.x;
							}
							particle.position.y = newPos.top;
							particle.initialPosition.y = particle.position.y;
							particle.justWarped = true;
						} else if (direction === OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
							if (!warp) {
								particle.position.x = getRandom() * canvasSize.width;
								particle.initialPosition.x = particle.position.x;
							}
							particle.position.y = newPos.bottom;
							particle.initialPosition.y = particle.position.y;
							particle.justWarped = true;
						}
						break;
					}
				}
				break;
		}
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-out-modes/esm/OutOfCanvasUpdater.js
var checkOutMode = (outModes, outMode) => {
	return outModes.default === outMode || outModes.bottom === outMode || outModes.left === outMode || outModes.right === outMode || outModes.top === outMode;
};
var OutOfCanvasUpdater = class {
	updaters;
	#container;
	constructor(container) {
		this.#container = container;
		this.updaters = /* @__PURE__ */ new Map();
	}
	init(particle) {
		this.#addUpdaterIfMissing(particle, OutMode.bounce, (container) => new BounceOutMode(container));
		this.#addUpdaterIfMissing(particle, OutMode.out, (container) => new OutOutMode(container));
		this.#addUpdaterIfMissing(particle, OutMode.destroy, (container) => new DestroyOutMode(container));
		this.#addUpdaterIfMissing(particle, OutMode.none, (container) => new NoneOutMode(container));
	}
	isEnabled(particle) {
		return !particle.destroyed && !particle.spawning;
	}
	update(particle, delta) {
		const outModes = particle.options.move.outModes;
		particle.justWarped = false;
		this.#updateOutMode(particle, delta, outModes.bottom ?? outModes.default, OutModeDirection.bottom);
		this.#updateOutMode(particle, delta, outModes.left ?? outModes.default, OutModeDirection.left);
		this.#updateOutMode(particle, delta, outModes.right ?? outModes.default, OutModeDirection.right);
		this.#updateOutMode(particle, delta, outModes.top ?? outModes.default, OutModeDirection.top);
	}
	#addUpdaterIfMissing(particle, outMode, getUpdater) {
		const outModes = particle.options.move.outModes;
		if (!this.updaters.has(outMode) && checkOutMode(outModes, outMode)) this.updaters.set(outMode, getUpdater(this.#container));
	}
	#updateOutMode(particle, delta, outMode, direction) {
		for (const updater of this.updaters.values()) updater.update(particle, direction, delta, outMode);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-out-modes/esm/index.js
async function loadOutModesUpdater(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addParticleUpdater("outModes", (container) => {
			return Promise.resolve(new OutOfCanvasUpdater(container));
		});
	});
}
//#endregion
//#region node_modules/@tsparticles/updater-paint/esm/PaintUpdater.js
var defaultOpacity = 1;
var PaintUpdater = class {
	#container;
	#pluginManager;
	constructor(pluginManager, container) {
		this.#container = container;
		this.#pluginManager = pluginManager;
	}
	init(particle) {
		const container = this.#container, options = particle.options, paint = itemFromSingleOrMultiple(options.paint, particle.id, options.reduceDuplicates), paintColor = paint?.color ?? void 0, fill = paint?.fill, stroke = paint?.stroke;
		if (fill) {
			const fillColor = AnimatableColor.create(paintColor === void 0 ? void 0 : AnimatableColor.create(void 0, paintColor), fill.color);
			particle.fillEnabled = fill.enable;
			particle.fillOpacity = getRangeValue(fill.opacity);
			particle.fillAnimation = fillColor.animation;
			const fillHslColor = rangeColorToHsl(this.#pluginManager, fillColor);
			if (fillHslColor) particle.fillColor = getHslAnimationFromHsl(fillHslColor, particle.fillAnimation, container.retina.reduceFactor);
		} else {
			particle.fillEnabled = false;
			particle.fillAnimation = void 0;
			particle.fillColor = void 0;
			particle.fillOpacity = defaultOpacity;
		}
		if (stroke) {
			const strokeColor = AnimatableColor.create(paintColor === void 0 ? void 0 : AnimatableColor.create(void 0, paintColor), stroke.color);
			particle.strokeWidth = getRangeValue(stroke.width) * container.retina.pixelRatio;
			particle.strokeOpacity = getRangeValue(stroke.opacity ?? defaultOpacity);
			particle.strokeAnimation = strokeColor.animation;
			const strokeHslColor = rangeColorToHsl(this.#pluginManager, strokeColor) ?? particle.getFillColor();
			if (strokeHslColor) particle.strokeColor = getHslAnimationFromHsl(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);
		} else {
			particle.strokeAnimation = void 0;
			particle.strokeColor = void 0;
			particle.strokeOpacity = defaultOpacity;
			particle.strokeWidth = 0;
		}
	}
	isEnabled(particle) {
		const { fillAnimation, fillColor, strokeAnimation, strokeColor } = particle, fillEnabled = !!fillAnimation && (fillColor?.h.value !== void 0 && fillColor.h.enable || fillColor?.s.value !== void 0 && fillColor.s.enable || fillColor?.l.value !== void 0 && fillColor.l.enable), strokeEnabled = !!strokeAnimation && (strokeColor?.h.value !== void 0 && strokeColor.h.enable || strokeColor?.s.value !== void 0 && strokeColor.s.enable || strokeColor?.l.value !== void 0 && strokeColor.l.enable);
		return !particle.destroyed && !particle.spawning && (fillEnabled || strokeEnabled);
	}
	update(particle, delta) {
		if (!this.isEnabled(particle)) return;
		updateColor(particle.fillColor, delta, this.#container.hdr);
		updateColor(particle.strokeColor, delta, this.#container.hdr);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-paint/esm/index.js
async function loadPaintUpdater(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addParticleUpdater("paint", (container) => {
			return Promise.resolve(new PaintUpdater(e.pluginManager, container));
		});
	});
}
//#endregion
//#region node_modules/@tsparticles/plugin-rgb-color/esm/RgbColorManager.js
var RgbIndexes;
(function(RgbIndexes) {
	RgbIndexes[RgbIndexes["r"] = 1] = "r";
	RgbIndexes[RgbIndexes["g"] = 2] = "g";
	RgbIndexes[RgbIndexes["b"] = 3] = "b";
	RgbIndexes[RgbIndexes["a"] = 5] = "a";
})(RgbIndexes || (RgbIndexes = {}));
var rgbRegex = /rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i;
var RgbColorManager = class {
	accepts(input) {
		return input.startsWith("rgb");
	}
	handleColor(color) {
		const rgbColor = color.value.rgb ?? color.value;
		if (!("r" in rgbColor) || !("g" in rgbColor) || !("b" in rgbColor)) return;
		return rgbColor;
	}
	handleRangeColor(color) {
		const rgbColor = color.value.rgb ?? color.value;
		if (!("r" in rgbColor) || !("g" in rgbColor) || !("b" in rgbColor)) return;
		return {
			r: getRangeValue(rgbColor.r),
			g: getRangeValue(rgbColor.g),
			b: getRangeValue(rgbColor.b)
		};
	}
	parseString(input) {
		if (!this.accepts(input)) return;
		const result = rgbRegex.exec(input), radix = 10;
		return result ? {
			a: result.length > 4 ? parseAlpha(result[RgbIndexes.a]) : 1,
			b: parseInt(result[RgbIndexes.b] ?? "0", radix),
			g: parseInt(result[RgbIndexes.g] ?? "0", radix),
			r: parseInt(result[RgbIndexes.r] ?? "0", radix)
		} : void 0;
	}
};
//#endregion
//#region node_modules/@tsparticles/plugin-rgb-color/esm/index.js
async function loadRgbColorPlugin(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addColorManager("rgb", new RgbColorManager());
	});
}
//#endregion
//#region node_modules/@tsparticles/updater-size/esm/Options/Classes/SizeAnimation.js
var SizeAnimation = class extends RangedAnimationOptions {
	destroy = DestroyType.none;
	load(data) {
		super.load(data);
		if (isNull(data)) return;
		loadProperty(this, "destroy", data.destroy);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-size/esm/Options/Classes/Size.js
var Size = class extends RangedAnimationValueWithRandom {
	animation = new SizeAnimation();
	value = 3;
	load(data) {
		super.load(data);
		if (isNull(data)) return;
		const animation = data.animation;
		if (animation !== void 0) this.animation.load(animation);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-size/esm/SizeUpdater.js
var minLoops = 0;
var SizeUpdater = class {
	#container;
	constructor(container) {
		this.#container = container;
	}
	init(particle) {
		const container = this.#container, sizeOptions = particle.options.size;
		if (!sizeOptions) return;
		const sizeAnimation = sizeOptions.animation;
		if (!sizeAnimation.enable) return;
		particle.size.velocity = particle.retina.sizeAnimationSpeed / 100 * container.retina.reduceFactor;
		if (sizeAnimation.sync) return;
		particle.size.velocity *= getRandom();
	}
	isEnabled(particle) {
		return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? minLoops) <= minLoops || (particle.size.maxLoops ?? minLoops) > minLoops && (particle.size.loops ?? minLoops) < (particle.size.maxLoops ?? minLoops));
	}
	loadOptions(options, ...sources) {
		loadOptionProperty(options, "size", Size, ...sources);
	}
	preInit(particle) {
		const pxRatio = this.#container.retina.pixelRatio, sizeOptions = particle.options.size;
		if (!sizeOptions) return;
		particle.size = initParticleNumericAnimationValue(sizeOptions, pxRatio);
		particle.retina.sizeAnimationSpeed = getRangeValue(sizeOptions.animation.speed) * pxRatio;
	}
	reset(particle) {
		particle.size.time = 0;
		particle.size.loops = 0;
	}
	update(particle, delta) {
		if (!this.isEnabled(particle) || !particle.options.size) return;
		updateAnimation(particle, particle.size, true, particle.options.size.animation.destroy, delta);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-size/esm/index.js
async function loadSizeUpdater(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addParticleUpdater("size", (container) => {
			return Promise.resolve(new SizeUpdater(container));
		});
	});
}
//#endregion
//#region node_modules/@tsparticles/basic/esm/index.js
async function loadBasic(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register(async (e) => {
		await Promise.all([
			loadBlendPlugin(e),
			loadHexColorPlugin(e),
			loadHslColorPlugin(e),
			loadRgbColorPlugin(e),
			loadMovePlugin(e),
			loadCircleShape(e),
			loadPaintUpdater(e),
			loadOpacityUpdater(e),
			loadOutModesUpdater(e),
			loadSizeUpdater(e)
		]);
	});
}
//#endregion
export { OutMode as C, ParticleOutType as S, loadOptionProperty as _, getHslFromAnimation as a, OptionLoader as b, getStyleFromHsl as c, rangeColorToRgb as d, rgbToHsl as f, loadLazyProperty as g, OptionsColor as h, colorMix as i, getStyleFromRgb as l, AnimatableColor as m, loadPaintUpdater as n, getLinkColor as o, ValueWithRandom as p, alterHsl as r, getLinkRandomColor as s, loadBasic as t, rangeColorToHsl as u, loadProperty as v, loadOptions as x, loadRangeProperty as y };
