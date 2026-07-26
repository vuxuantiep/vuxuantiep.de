import { r as __exportAll } from "../_runtime.mjs";
import { X as isNull, c as getLogger } from "./@tsparticles/animation-utils+[...].mjs";
import { c as getStyleFromHsl, v as loadProperty } from "./@tsparticles/basic+[...].mjs";
//#region node_modules/@tsparticles/shape-image/esm/Utils.js
var shapeTypes = ["image", "images"];
var stringStart = 0, defaultOpacity = 1;
var currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function replaceColorSvg(imageShape, color, opacity, hdr = false) {
	const { svgData } = imageShape;
	if (!svgData) return "";
	const colorStyle = getStyleFromHsl(color, hdr, opacity);
	if (svgData.includes("fill")) return svgData.replaceAll(currentColorRegex, () => colorStyle);
	const preFillIndex = svgData.indexOf(">");
	return `${svgData.substring(stringStart, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
}
async function loadImage(image) {
	return new Promise((resolve) => {
		image.loading = true;
		const img = new Image();
		image.element = img;
		img.addEventListener("load", () => {
			image.loading = false;
			resolve();
		});
		img.addEventListener("error", () => {
			image.element = void 0;
			image.error = true;
			image.loading = false;
			getLogger().error(`Error loading image: ${image.source}`);
			resolve();
		});
		img.src = image.source;
	});
}
async function downloadSvgImage(image) {
	if (image.type !== "svg") {
		await loadImage(image);
		return;
	}
	image.loading = true;
	const response = await fetch(image.source);
	if (response.ok) image.svgData = await response.text();
	else {
		getLogger().error("Image not found");
		image.error = true;
	}
	image.loading = false;
}
function replaceImageColor(image, imageData, color, particle, hdr = false) {
	const svgColoredData = replaceColorSvg(image, color, particle.opacity?.value ?? defaultOpacity, hdr), imageRes = {
		color,
		data: {
			...image,
			svgData: svgColoredData
		},
		loaded: false,
		ratio: imageData.width / imageData.height,
		replaceColor: imageData.replaceColor,
		source: imageData.src
	};
	return new Promise((resolve) => {
		const svg = new Blob([svgColoredData], { type: "image/svg+xml" }), url = URL.createObjectURL(svg), img = new Image();
		img.addEventListener("load", () => {
			imageRes.loaded = true;
			imageRes.element = img;
			resolve(imageRes);
			URL.revokeObjectURL(url);
		});
		const errorHandler = async () => {
			URL.revokeObjectURL(url);
			const img2 = {
				...image,
				error: false,
				loading: true
			};
			await loadImage(img2);
			imageRes.loaded = true;
			imageRes.element = img2.element;
			resolve(imageRes);
		};
		img.addEventListener("error", () => void errorHandler());
		img.src = url;
	});
}
//#endregion
//#region node_modules/@tsparticles/shape-image/esm/ImageDrawer.js
var sides = 12;
var ImageDrawer = class {
	#container;
	#engine;
	constructor(engine, container) {
		this.#engine = engine;
		this.#container = container;
	}
	draw(data) {
		const { context, radius, particle, opacity } = data, image = particle.image, element = image?.element;
		if (!image) return;
		context.globalAlpha = opacity;
		if (element) {
			const ratio = image.ratio, pos = {
				x: -radius,
				y: -radius
			}, diameter = radius * 2;
			context.drawImage(element, pos.x, pos.y, diameter, diameter / ratio);
		}
		context.globalAlpha = 1;
	}
	getSidesCount() {
		return sides;
	}
	async init(container) {
		const options = container.actualOptions;
		if (!options.preload || !this.#engine.loadImage) return;
		const promises = [];
		for (const imageData of options.preload) promises.push(this.#engine.loadImage(container, imageData));
		await Promise.all(promises);
	}
	loadShape(particle) {
		const container = this.#container;
		if (!particle.shape || !shapeTypes.includes(particle.shape)) return;
		const imageData = particle.shapeData;
		if (!imageData) return;
		if ((this.#engine.getImages?.(container))?.find((t) => t.name === imageData.name || t.source === imageData.src)) return;
		this.#loadImageShape(container, imageData).then(() => {
			this.loadShape(particle);
		});
	}
	particleInit(container, particle) {
		if (particle.shape !== "image" && particle.shape !== "images") return;
		const images = this.#engine.getImages?.(container), imageData = particle.shapeData;
		if (!imageData) return;
		const color = particle.getFillColor(), image = images?.find((t) => t.name === imageData.name || t.source === imageData.src);
		if (!image) return;
		const replaceColor = imageData.replaceColor;
		if (image.loading) {
			setTimeout(() => {
				this.particleInit(container, particle);
			});
			return;
		}
		(async () => {
			let imageRes;
			if (image.svgData && color) imageRes = await replaceImageColor(image, imageData, color, particle, container.hdr);
			else imageRes = {
				color,
				data: image,
				element: image.element,
				loaded: true,
				ratio: imageData.width && imageData.height ? imageData.width / imageData.height : image.ratio ?? 1,
				replaceColor,
				source: imageData.src
			};
			if (!imageRes.ratio) imageRes.ratio = 1;
			const close = imageData.close ?? particle.shapeClose, imageShape = {
				image: imageRes,
				close
			};
			particle.image = imageShape.image;
			particle.shapeClose = imageShape.close;
		})();
	}
	#loadImageShape = async (container, imageShape) => {
		if (!this.#engine.loadImage) throw new Error(`Image shape not initialized`);
		await this.#engine.loadImage(container, {
			name: imageShape.name,
			replaceColor: imageShape.replaceColor,
			src: imageShape.src
		});
	};
};
//#endregion
//#region node_modules/@tsparticles/shape-image/esm/Options/Classes/Preload.js
var Preload = class {
	height;
	name;
	replaceColor;
	src = "";
	width;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "height", data.height);
		loadProperty(this, "name", data.name);
		loadProperty(this, "replaceColor", data.replaceColor);
		loadProperty(this, "src", data.src);
		loadProperty(this, "width", data.width);
	}
};
//#endregion
//#region node_modules/@tsparticles/shape-image/esm/ImagePreloader.js
var ImagePreloaderPlugin = class {
	id = "image-preloader";
	#engine;
	constructor(engine) {
		this.#engine = engine;
	}
	async getPlugin(container) {
		const { ImagePreloaderInstance } = await Promise.resolve().then(() => ImagePreloaderInstance_exports);
		return new ImagePreloaderInstance(this.#engine, container);
	}
	loadOptions(_container, options, source) {
		if (!source?.preload) return;
		options.preload ??= [];
		const preloadOptions = options.preload;
		for (const item of source.preload) {
			const existing = preloadOptions.find((t) => t.name === item.name || t.src === item.src);
			if (existing) existing.load(item);
			else {
				const preload = new Preload();
				preload.load(item);
				preloadOptions.push(preload);
			}
		}
	}
	needsPlugin() {
		return true;
	}
};
//#endregion
//#region node_modules/@tsparticles/shape-image/esm/index.js
var extLength = 3;
function addLoadImageToEngine(engine) {
	engine.getImages ??= (container) => {
		engine.images ??= /* @__PURE__ */ new Map();
		let images = engine.images.get(container);
		if (!images) {
			images = [];
			engine.images.set(container, images);
		}
		return images;
	};
	engine.loadImage ??= async (container, data) => {
		if (!engine.getImages) throw new Error("No images collection found");
		if (!data.name && !data.src) throw new Error("No image source provided");
		engine.images ??= /* @__PURE__ */ new Map();
		const containerImages = engine.getImages(container);
		if (containerImages.some((t) => t.name === data.name || t.source === data.src)) return;
		try {
			const image = {
				name: data.name ?? data.src,
				source: data.src,
				type: data.src.substring(data.src.length - extLength),
				error: false,
				loading: true,
				replaceColor: data.replaceColor,
				ratio: data.width && data.height ? data.width / data.height : void 0
			};
			containerImages.push(image);
			engine.images.set(container, containerImages);
			let imageFunc;
			if (data.replaceColor) imageFunc = downloadSvgImage;
			else imageFunc = loadImage;
			await imageFunc(image);
		} catch {
			throw new Error(`${data.name ?? data.src} not found`);
		}
	};
}
async function loadImageShape(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		addLoadImageToEngine(e);
		e.pluginManager.addPlugin(new ImagePreloaderPlugin(e));
		e.pluginManager.addShape(shapeTypes, (container) => Promise.resolve(new ImageDrawer(e, container)));
	});
}
//#endregion
//#region node_modules/@tsparticles/shape-image/esm/ImagePreloaderInstance.js
var ImagePreloaderInstance_exports = /* @__PURE__ */ __exportAll({ ImagePreloaderInstance: () => ImagePreloaderInstance });
var ImagePreloaderInstance = class {
	#container;
	#engine;
	constructor(engine, container) {
		this.#engine = engine;
		this.#container = container;
	}
	destroy() {
		this.#engine.images?.delete(this.#container);
	}
};
//#endregion
export { loadImageShape as t };
