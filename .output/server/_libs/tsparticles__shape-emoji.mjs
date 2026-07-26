import { C as itemFromSingleOrMultiple, H as getRangeMax, b as isInArray, h as executeOnSingleOrMultiple, st as half } from "./@tsparticles/animation-utils+[...].mjs";
import { n as loadFont } from "./tsparticles__canvas-utils.mjs";
//#region node_modules/@tsparticles/shape-emoji/esm/Utils.js
var validTypes = ["emoji"];
function drawEmoji(data, image) {
	const { context, opacity } = data, previousAlpha = context.globalAlpha, diameter = image.width, radius = diameter * half;
	context.globalAlpha = opacity;
	context.drawImage(image, -radius, -radius, diameter, diameter);
	context.globalAlpha = previousAlpha;
}
//#endregion
//#region node_modules/@tsparticles/shape-emoji/esm/EmojiDrawer.js
var defaultFont = "\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Noto Color Emoji\", sans-serif", noPadding = 0, firstItem = 0;
var EmojiDrawer = class {
	#emojiShapeDict = /* @__PURE__ */ new Map();
	destroy() {
		for (const [key, data] of this.#emojiShapeDict) {
			if (data instanceof ImageBitmap) data.close();
			this.#emojiShapeDict.delete(key);
		}
	}
	draw(data) {
		const key = data.particle.emojiDataKey;
		if (!key) return;
		const image = this.#emojiShapeDict.get(key);
		if (!image) return;
		drawEmoji(data, image);
	}
	async init(container) {
		const shapeData = container.actualOptions.particles.shape;
		if (!validTypes.some((t) => isInArray(t, shapeData.type))) return;
		const promises = [loadFont(defaultFont)], shapeOptions = validTypes.map((t) => shapeData.options[t])[firstItem];
		executeOnSingleOrMultiple(shapeOptions, (shape) => {
			if (shape.font) promises.push(loadFont(shape.font));
		});
		await Promise.all(promises);
	}
	particleDestroy(particle) {
		particle.emojiDataKey = void 0;
	}
	particleInit(container, particle) {
		const shapeData = particle.shapeData;
		if (!shapeData.value) return;
		const emoji = itemFromSingleOrMultiple(shapeData.value, particle.randomIndexData);
		if (!emoji) return;
		const emojiOptions = typeof emoji === "string" ? {
			font: shapeData.font ?? defaultFont,
			padding: shapeData.padding ?? noPadding,
			value: emoji
		} : {
			font: defaultFont,
			padding: noPadding,
			...shapeData,
			...emoji
		}, font = emojiOptions.font, value = emojiOptions.value, cacheKey = `${value}_${font}`;
		if (this.#emojiShapeDict.has(cacheKey)) {
			particle.emojiDataKey = cacheKey;
			return;
		}
		const padding = emojiOptions.padding * 2, maxSize = getRangeMax(particle.size.value), fullSize = maxSize + padding, canvasSize = fullSize * 2, cacheCanvas = new OffscreenCanvas(canvasSize, canvasSize), context = cacheCanvas.getContext("2d", container.canvas.render.settings);
		if (!context) return;
		context.font = `400 ${(maxSize * 2).toString()}px ${font}`;
		context.textBaseline = "middle";
		context.textAlign = "center";
		context.fillText(value, fullSize, fullSize);
		const image = cacheCanvas instanceof HTMLCanvasElement ? cacheCanvas : cacheCanvas.transferToImageBitmap();
		this.#emojiShapeDict.set(cacheKey, image);
		particle.emojiDataKey = cacheKey;
	}
};
//#endregion
//#region node_modules/@tsparticles/shape-emoji/esm/index.js
async function loadEmojiShape(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addShape(validTypes, () => Promise.resolve(new EmojiDrawer()));
	});
}
//#endregion
export { loadEmojiShape as t };
