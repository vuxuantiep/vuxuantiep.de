import { r as __exportAll } from "../../_runtime.mjs";
import { B as getRandom, L as getDistances, U as getRangeValue, X as isNull, lt as originPoint } from "./animation-utils+[...].mjs";
import { a as Circle, o as Rectangle } from "../tsparticles__engine.mjs";
import { _ as loadOptionProperty, d as rangeColorToRgb, h as OptionsColor, l as getStyleFromRgb, o as getLinkColor, s as getLinkRandomColor, v as loadProperty } from "./basic+[...].mjs";
import { g as ParticlesInteractorBase, n as ensureInteractivityPluginLoaded } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-particles-links/esm/CircleWarp.js
var CircleWarp = class extends Circle {
	#canvasSize;
	constructor(x, y, radius, canvasSize) {
		super(x, y, radius);
		this.#canvasSize = canvasSize;
	}
	contains(point) {
		if (super.contains(point)) return true;
		const { width, height } = this.#canvasSize, { x, y } = point;
		return super.contains({
			x: x - width,
			y
		}) || super.contains({
			x: x + width,
			y
		}) || super.contains({
			x,
			y: y - height
		}) || super.contains({
			x,
			y: y + height
		}) || super.contains({
			x: x - width,
			y: y - height
		}) || super.contains({
			x: x + width,
			y: y + height
		}) || super.contains({
			x: x - width,
			y: y + height
		}) || super.contains({
			x: x + width,
			y: y - height
		});
	}
	intersects(range) {
		if (super.intersects(range)) return true;
		const { width, height } = this.#canvasSize, pos = range.position, shifts = [
			{
				x: -width,
				y: 0
			},
			{
				x: width,
				y: 0
			},
			{
				x: 0,
				y: -height
			},
			{
				x: 0,
				y: height
			},
			{
				x: -width,
				y: -height
			},
			{
				x: width,
				y: height
			},
			{
				x: -width,
				y: height
			},
			{
				x: width,
				y: -height
			}
		];
		for (const shift of shifts) {
			const shiftedPos = {
				x: pos.x + shift.x,
				y: pos.y + shift.y
			};
			let shiftedRange;
			if (range instanceof Circle) shiftedRange = new Circle(shiftedPos.x, shiftedPos.y, range.radius);
			else {
				const rect = range;
				shiftedRange = new Rectangle(shiftedPos.x, shiftedPos.y, rect.size.width, rect.size.height);
			}
			if (super.intersects(shiftedRange)) return true;
		}
		return false;
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-links/esm/Options/Classes/LinksShadow.js
var LinksShadow = class {
	blur = 5;
	color = new OptionsColor();
	enable = false;
	constructor() {
		this.color.value = "#000";
	}
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "blur", data.blur);
		this.color = OptionsColor.create(this.color, data.color);
		loadProperty(this, "enable", data.enable);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-links/esm/Options/Classes/LinksTriangle.js
var LinksTriangle = class {
	color;
	enable = false;
	frequency = 1;
	opacity;
	load(data) {
		if (isNull(data)) return;
		if (data.color !== void 0) this.color = OptionsColor.create(this.color, data.color);
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "frequency", data.frequency);
		loadProperty(this, "opacity", data.opacity);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-links/esm/Options/Classes/Links.js
var Links = class {
	blink = false;
	color = new OptionsColor();
	consent = false;
	distance = 100;
	enable = false;
	frequency = 1;
	id;
	opacity = 1;
	shadow = new LinksShadow();
	triangles = new LinksTriangle();
	warp = false;
	width = 1;
	constructor() {
		this.color.value = "#fff";
	}
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "id", data.id);
		loadProperty(this, "blink", data.blink);
		this.color = OptionsColor.create(this.color, data.color);
		loadProperty(this, "consent", data.consent);
		loadProperty(this, "distance", data.distance);
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "frequency", data.frequency);
		loadProperty(this, "opacity", data.opacity);
		this.shadow.load(data.shadow);
		this.triangles.load(data.triangles);
		loadProperty(this, "width", data.width);
		loadProperty(this, "warp", data.warp);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-links/esm/Linker.js
var opacityOffset = 1, minDistance$1 = 0;
function getWarpDistance(pos1, pos2, canvasSize) {
	const { dx, dy } = getDistances(pos1, pos2), absDiffs = {
		x: Math.abs(dx),
		y: Math.abs(dy)
	}, warpDistances = {
		x: Math.min(absDiffs.x, canvasSize.width - absDiffs.x),
		y: Math.min(absDiffs.y, canvasSize.height - absDiffs.y)
	};
	return Math.hypot(warpDistances.x, warpDistances.y);
}
var Linker = class extends ParticlesInteractorBase {
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
		this.container.particles.linksColor = void 0;
		this.container.particles.linksColors = /* @__PURE__ */ new Map();
	}
	interact(p1) {
		if (!p1.options.links) return;
		p1.links = [];
		if (p1.linksDistance && p1.linksDistance > this.#maxDistance) this.#maxDistance = p1.linksDistance;
		const pos1 = p1.getPosition(), container = this.container, canvasSize = container.canvas.size;
		if (pos1.x < originPoint.x || pos1.y < originPoint.y || pos1.x > canvasSize.width || pos1.y > canvasSize.height) return;
		const linkOpt1 = p1.options.links, optOpacity = linkOpt1.opacity, optDistance = p1.retina.linksDistance ?? minDistance$1, warp = linkOpt1.warp, range = warp ? new CircleWarp(pos1.x, pos1.y, optDistance, canvasSize) : new Circle(pos1.x, pos1.y, optDistance), query = container.particles.grid.query(range);
		for (const p2 of query) {
			const linkOpt2 = p2.options.links;
			if (p1 === p2 || !linkOpt2?.enable || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed || !p2.links || p1.links.some((t) => t.destination === p2) || p2.links.some((t) => t.destination === p1)) continue;
			const pos2 = p2.getPosition();
			if (pos2.x < originPoint.x || pos2.y < originPoint.y || pos2.x > canvasSize.width || pos2.y > canvasSize.height) continue;
			const distDirect = getDistances(pos1, pos2).distance, distWarp = warp && linkOpt2.warp ? getWarpDistance(pos1, pos2, canvasSize) : distDirect, distance = Math.min(distDirect, distWarp);
			if (distance > optDistance) continue;
			const opacityLine = (opacityOffset - distance / optDistance) * optOpacity;
			this.#setColor(p1);
			p1.links.push({
				destination: p2,
				opacity: opacityLine,
				color: this.#getLinkColor(p1, p2),
				isWarped: distWarp < distDirect
			});
		}
	}
	isEnabled(particle) {
		return !!particle.options.links?.enable;
	}
	loadParticlesOptions(options, ...sources) {
		loadOptionProperty(options, "links", Links, ...sources);
	}
	reset() {}
	#getLinkColor(p1, p2) {
		const container = this.container, linksOptions = p1.options.links;
		if (!linksOptions) return;
		return getLinkColor(p1, p2, linksOptions.id !== void 0 ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor);
	}
	#setColor(p1) {
		if (!p1.options.links) return;
		const container = this.container, linksOptions = p1.options.links;
		let linkColor = linksOptions.id === void 0 ? container.particles.linksColor : container.particles.linksColors.get(linksOptions.id);
		if (linkColor) return;
		linkColor = getLinkRandomColor(this.#pluginManager, linksOptions.color, linksOptions.blink, linksOptions.consent);
		if (linksOptions.id === void 0) container.particles.linksColor = linkColor;
		else container.particles.linksColors.set(linksOptions.id, linkColor);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-links/esm/LinksPlugin.js
var LinksPlugin = class {
	id = "links";
	#pluginManager;
	constructor(pluginManager) {
		this.#pluginManager = pluginManager;
	}
	async getPlugin(container) {
		const { LinkInstance } = await Promise.resolve().then(() => LinkInstance_exports);
		return new LinkInstance(this.#pluginManager, container);
	}
	loadOptions() {}
	needsPlugin() {
		return true;
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-links/esm/index.js
async function loadParticlesLinksInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		const pluginManager = e.pluginManager;
		ensureInteractivityPluginLoaded(e);
		pluginManager.addPlugin(new LinksPlugin(pluginManager));
		pluginManager.addInteractor?.("particlesLinks", (container) => {
			return Promise.resolve(new Linker(pluginManager, container));
		});
	});
}
//#endregion
//#region node_modules/@tsparticles/interaction-particles-links/esm/Utils.js
function getLinkKey(ids) {
	return [...ids].sort((a, b) => a - b).join("_");
}
function setLinkFrequency(particles, dictionary) {
	const key = getLinkKey(particles.map((t) => t.id));
	let res = dictionary.get(key);
	if (res === void 0) {
		res = getRandom();
		dictionary.set(key, res);
	}
	return res;
}
//#endregion
//#region node_modules/@tsparticles/interaction-particles-links/esm/LinkInstance.js
var LinkInstance_exports = /* @__PURE__ */ __exportAll({ LinkInstance: () => LinkInstance });
var minOpacity = 0, minWidth = 0, minDistance = 0, maxFrequency = 1, defaultFrequency = 0;
var LinkInstance = class {
	#colorCache = /* @__PURE__ */ new Map();
	#container;
	#freqs;
	#pluginManager;
	constructor(pluginManager, container) {
		this.#pluginManager = pluginManager;
		this.#container = container;
		this.#freqs = {
			links: /* @__PURE__ */ new Map(),
			triangles: /* @__PURE__ */ new Map()
		};
	}
	drawParticle(context, particle) {
		const { links, options } = particle;
		if (!links?.length || !options.links) return;
		const linkOpts = options.links, width = particle.retina.linksWidth ?? minWidth, pos1 = particle.getPosition(), twinkle = particle.options["twinkle"]?.links, trianglesEnabled = linkOpts.triangles.enable, p1Destinations = trianglesEnabled ? new Set(links.map((l) => l.destination.id)) : null, originalAlpha = context.globalAlpha;
		let currentColorStyle = "", currentWidth = -1, currentAlpha = -1, pathOpen = false;
		const flushLines = () => {
			if (pathOpen) {
				context.stroke();
				pathOpen = false;
			}
		};
		for (const link of links) {
			if (linkOpts.frequency < maxFrequency && this.#getLinkFrequency(particle, link.destination) > linkOpts.frequency) continue;
			const pos2 = link.destination.getPosition();
			if (trianglesEnabled && !link.isWarped && p1Destinations) {
				flushLines();
				this.#drawTriangles(options, particle, link, p1Destinations, pos1, pos2, context);
			}
			if (link.opacity <= minOpacity || width <= minWidth) continue;
			if (!linkOpts.enable) continue;
			let opacity = link.opacity, colorLine = link.color;
			const twinkleRgb = twinkle?.enable && getRandom() < twinkle.frequency ? rangeColorToRgb(this.#pluginManager, twinkle.color) : void 0;
			if (twinkle && twinkleRgb) {
				colorLine = twinkleRgb;
				opacity = getRangeValue(twinkle.opacity);
			}
			if (!colorLine) {
				const linkColor = linkOpts.id !== void 0 ? this.#container.particles.linksColors.get(linkOpts.id) : this.#container.particles.linksColor;
				colorLine = getLinkColor(particle, link.destination, linkColor);
			}
			if (!colorLine) continue;
			const colorStyle = this.#getCachedStyle(colorLine);
			if (colorStyle !== currentColorStyle || width !== currentWidth || opacity !== currentAlpha) {
				flushLines();
				context.strokeStyle = colorStyle;
				context.lineWidth = width;
				context.globalAlpha = opacity;
				currentColorStyle = colorStyle;
				currentWidth = width;
				currentAlpha = opacity;
				context.beginPath();
				pathOpen = true;
			}
			if (link.isWarped) {
				const canvasSize = this.#container.canvas.size, dx = pos2.x - pos1.x, dy = pos2.y - pos1.y;
				let sx = originPoint.x, sy = originPoint.y;
				if (Math.abs(dx) > canvasSize.width * .5) sx = dx > minDistance ? -canvasSize.width : canvasSize.width;
				if (Math.abs(dy) > canvasSize.height * .5) sy = dy > minDistance ? -canvasSize.height : canvasSize.height;
				context.moveTo(pos1.x, pos1.y);
				context.lineTo(pos2.x + sx, pos2.y + sy);
				context.moveTo(pos1.x - sx, pos1.y - sy);
				context.lineTo(pos2.x, pos2.y);
			} else {
				context.moveTo(pos1.x, pos1.y);
				context.lineTo(pos2.x, pos2.y);
			}
		}
		flushLines();
		context.globalAlpha = originalAlpha;
	}
	init() {
		this.#freqs.links.clear();
		this.#freqs.triangles.clear();
		this.#colorCache.clear();
		return Promise.resolve();
	}
	particleCreated(particle) {
		particle.links = [];
		if (!particle.options.links) return;
		particle.linksDistance = particle.options.links.distance;
		particle.linksWidth = particle.options.links.width;
		const ratio = this.#container.retina.pixelRatio;
		particle.retina.linksDistance = particle.linksDistance * ratio;
		particle.retina.linksWidth = particle.linksWidth * ratio;
	}
	particleDestroyed(particle) {
		particle.links = [];
	}
	#drawTriangles(options, p1, link, p1Destinations, pos1, pos2, context) {
		const p2 = link.destination, triangleOptions = options.links?.triangles;
		if (!triangleOptions?.enable || !p2.options.links?.triangles.enable) return;
		const p2Links = p2.links;
		if (!p2Links?.length) return;
		for (const vertex of p2Links) {
			if (vertex.isWarped || this.#getLinkFrequency(p2, vertex.destination) > p2.options.links.frequency || !p1Destinations.has(vertex.destination.id)) continue;
			const p3 = vertex.destination;
			if (this.#getTriangleFrequency(p1, p2, p3) > (options.links?.triangles.frequency ?? defaultFrequency)) continue;
			const opacityTriangle = triangleOptions.opacity ?? (link.opacity + vertex.opacity) * .5, colorTriangle = rangeColorToRgb(this.#pluginManager, triangleOptions.color) ?? link.color;
			if (!colorTriangle || opacityTriangle <= minOpacity) continue;
			const pos3 = p3.getPosition();
			context.save();
			context.fillStyle = this.#getCachedStyle(colorTriangle);
			context.globalAlpha = opacityTriangle;
			context.beginPath();
			context.moveTo(pos1.x, pos1.y);
			context.lineTo(pos2.x, pos2.y);
			context.lineTo(pos3.x, pos3.y);
			context.closePath();
			context.fill();
			context.restore();
		}
	}
	#getCachedStyle(rgb) {
		const key = `${rgb.r},${rgb.g},${rgb.b}`;
		let style = this.#colorCache.get(key);
		if (!style) {
			style = getStyleFromRgb(rgb, this.#container.hdr);
			this.#colorCache.set(key, style);
		}
		return style;
	}
	#getLinkFrequency(p1, p2) {
		return setLinkFrequency([p1, p2], this.#freqs.links);
	}
	#getTriangleFrequency(p1, p2, p3) {
		return setLinkFrequency([
			p1,
			p2,
			p3
		], this.#freqs.triangles);
	}
};
//#endregion
export { loadParticlesLinksInteraction as t };
