import { t as loadExternalBubbleInteraction } from "./interaction-external-bubble+[...].mjs";
import { B as getRandom, F as degToRad, K as randomInRangeValue, U as getRangeValue, X as isNull, at as doublePI, ct as millisecondsToSeconds, i as AnimationStatus, n as updateAnimation, o as DestroyType, q as setRangeValue } from "./animation-utils+[...].mjs";
import { i as RotateDirection } from "../tsparticles__engine.mjs";
import { _ as loadOptionProperty, n as loadPaintUpdater, p as ValueWithRandom, t as loadBasic, v as loadProperty, y as loadRangeProperty } from "./basic+[...].mjs";
import { t as loadEasingQuadPlugin } from "./plugin-easing-quad+[...].mjs";
import { t as loadEmojiShape } from "../tsparticles__shape-emoji.mjs";
import { r as loadInteractivityPlugin, t as loadExternalAttractInteraction } from "./interaction-external-attract+[...].mjs";
import { t as loadExternalBounceInteraction } from "./interaction-external-bounce+[...].mjs";
import { t as loadExternalConnectInteraction } from "./interaction-external-connect+[...].mjs";
import { t as loadExternalDestroyInteraction } from "./interaction-external-destroy+[...].mjs";
import { t as loadExternalGrabInteraction } from "./interaction-external-grab+[...].mjs";
import { t as loadExternalParallaxInteraction } from "./interaction-external-parallax+[...].mjs";
import { t as loadExternalPauseInteraction } from "./interaction-external-pause+[...].mjs";
import { t as loadExternalPushInteraction } from "./interaction-external-push+[...].mjs";
import { t as loadExternalRemoveInteraction } from "./interaction-external-remove+[...].mjs";
import { t as loadExternalRepulseInteraction } from "./interaction-external-repulse+[...].mjs";
import { t as loadExternalSlowInteraction } from "./interaction-external-slow+[...].mjs";
import { t as loadImageShape } from "../tsparticles__shape-image.mjs";
import { t as loadLineShape } from "../tsparticles__shape-line.mjs";
import { t as loadParticlesAttractInteraction } from "./interaction-particles-attract+[...].mjs";
import { t as loadParticlesCollisionsInteraction } from "./interaction-particles-collisions+[...].mjs";
import { t as loadParticlesLinksInteraction } from "./interaction-particles-links+[...].mjs";
import { t as loadPolygonShape } from "../tsparticles__shape-polygon.mjs";
import { t as loadSquareShape } from "../tsparticles__shape-square.mjs";
import { t as loadStarShape } from "../tsparticles__shape-star.mjs";
//#region node_modules/@tsparticles/updater-life/esm/Options/Classes/LifeDelay.js
var LifeDelay = class extends ValueWithRandom {
	sync = false;
	load(data) {
		if (isNull(data)) return;
		super.load(data);
		loadProperty(this, "sync", data.sync);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-life/esm/Options/Classes/LifeDuration.js
var LifeDuration = class extends ValueWithRandom {
	sync = false;
	load(data) {
		if (isNull(data)) return;
		super.load(data);
		loadProperty(this, "sync", data.sync);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-life/esm/Options/Classes/Life.js
var Life = class {
	count = 0;
	delay = new LifeDelay();
	duration = new LifeDuration();
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "count", data.count);
		this.delay.load(data.delay);
		this.duration.load(data.duration);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-life/esm/Utils.js
var noTime$1 = 0, infiniteValue$1 = -1, noLife = 0, minCanvasSize = 0;
function updateLife(particle, delta, canvasSize) {
	if (!particle.life) return;
	const life = particle.life;
	let justSpawned = false;
	if (particle.spawning) {
		life.delayTime += delta.value;
		if (life.delayTime >= particle.life.delay) {
			justSpawned = true;
			particle.spawning = false;
			life.delayTime = noTime$1;
			life.time = noTime$1;
		} else return;
	}
	if (life.duration === infiniteValue$1) return;
	if (justSpawned) life.time = noTime$1;
	else life.time += delta.value;
	if (life.time < life.duration) return;
	life.time = noTime$1;
	if (particle.life.count > noLife) particle.life.count--;
	if (particle.life.count === noLife) {
		particle.destroy();
		return;
	}
	const widthRange = setRangeValue(minCanvasSize, canvasSize.width), heightRange = setRangeValue(minCanvasSize, canvasSize.width);
	particle.position.x = randomInRangeValue(widthRange);
	particle.position.y = randomInRangeValue(heightRange);
	particle.spawning = true;
	life.delayTime = noTime$1;
	life.time = noTime$1;
	particle.reset();
	const lifeOptions = particle.options.life;
	if (lifeOptions) {
		life.delay = getRangeValue(lifeOptions.delay.value) * millisecondsToSeconds;
		life.duration = getRangeValue(lifeOptions.duration.value) * millisecondsToSeconds;
	}
}
//#endregion
//#region node_modules/@tsparticles/updater-life/esm/LifeUpdater.js
var noTime = 0, identity = 1, infiniteValue = -1;
var LifeUpdater = class {
	#container;
	constructor(container) {
		this.#container = container;
	}
	init(particle) {
		const container = this.#container, lifeOptions = particle.options.life;
		if (!lifeOptions) return;
		const delayFactor = lifeOptions.delay.sync ? identity : getRandom(), durationFactor = lifeOptions.duration.sync ? identity : getRandom();
		particle.life = {
			delay: container.retina.reduceFactor ? getRangeValue(lifeOptions.delay.value) * delayFactor / container.retina.reduceFactor * millisecondsToSeconds : noTime,
			delayTime: noTime,
			duration: container.retina.reduceFactor ? getRangeValue(lifeOptions.duration.value) * durationFactor / container.retina.reduceFactor * millisecondsToSeconds : noTime,
			time: noTime,
			count: lifeOptions.count
		};
		if (particle.life.duration <= noTime) particle.life.duration = infiniteValue;
		if (particle.life.count <= noTime) particle.life.count = infiniteValue;
		particle.spawning = particle.life.delay > noTime;
	}
	isEnabled(particle) {
		return !particle.destroyed;
	}
	loadOptions(options, ...sources) {
		loadOptionProperty(options, "life", Life, ...sources);
	}
	update(particle, delta) {
		if (!this.isEnabled(particle) || !particle.life) return;
		updateLife(particle, delta, this.#container.canvas.size);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-life/esm/index.js
async function loadLifeUpdater(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addParticleUpdater("life", (container) => {
			return Promise.resolve(new LifeUpdater(container));
		});
	});
}
//#endregion
//#region node_modules/@tsparticles/updater-rotate/esm/Options/Classes/RotateAnimation.js
var RotateAnimation = class {
	decay = 0;
	enable = false;
	speed = 0;
	sync = false;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "enable", data.enable);
		loadRangeProperty(this, "speed", data.speed);
		loadRangeProperty(this, "decay", data.decay);
		loadProperty(this, "sync", data.sync);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-rotate/esm/Options/Classes/Rotate.js
var Rotate = class extends ValueWithRandom {
	animation = new RotateAnimation();
	direction = RotateDirection.clockwise;
	path = false;
	load(data) {
		if (isNull(data)) return;
		super.load(data);
		loadProperty(this, "direction", data.direction);
		this.animation.load(data.animation);
		loadProperty(this, "path", data.path);
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-rotate/esm/RotateUpdater.js
var doublePIDeg = 360;
var RotateUpdater = class {
	#container;
	constructor(container) {
		this.#container = container;
	}
	init(particle) {
		const rotateOptions = particle.options.rotate;
		if (!rotateOptions) return;
		particle.rotate = {
			enable: rotateOptions.animation.enable,
			value: degToRad(getRangeValue(rotateOptions.value)),
			min: 0,
			max: doublePI
		};
		particle.pathRotation = rotateOptions.path;
		let rotateDirection = rotateOptions.direction;
		if (rotateDirection === RotateDirection.random) rotateDirection = Math.floor(getRandom() * 2) > 0 ? RotateDirection.counterClockwise : RotateDirection.clockwise;
		switch (rotateDirection) {
			case RotateDirection.counterClockwise:
			case "counterClockwise":
				particle.rotate.status = AnimationStatus.decreasing;
				break;
			case RotateDirection.clockwise:
				particle.rotate.status = AnimationStatus.increasing;
				break;
			default: break;
		}
		const rotateAnimation = rotateOptions.animation;
		if (rotateAnimation.enable) {
			particle.rotate.decay = 1 - getRangeValue(rotateAnimation.decay);
			particle.rotate.velocity = getRangeValue(rotateAnimation.speed) / doublePIDeg * this.#container.retina.reduceFactor;
			if (!rotateAnimation.sync) particle.rotate.velocity *= getRandom();
		}
		particle.rotation = particle.rotate.value;
	}
	isEnabled(particle) {
		const rotate = particle.options.rotate;
		if (!rotate) return false;
		return !particle.destroyed && !particle.spawning && (!!rotate.value || rotate.animation.enable || rotate.path);
	}
	loadOptions(options, ...sources) {
		loadOptionProperty(options, "rotate", Rotate, ...sources);
	}
	update(particle, delta) {
		if (!this.isEnabled(particle)) return;
		particle.isRotating = !!particle.rotate;
		if (!particle.rotate) return;
		updateAnimation(particle, particle.rotate, false, DestroyType.none, delta);
		particle.rotation = particle.rotate.value;
	}
};
//#endregion
//#region node_modules/@tsparticles/updater-rotate/esm/index.js
async function loadRotateUpdater(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addParticleUpdater("rotate", (container) => {
			return Promise.resolve(new RotateUpdater(container));
		});
	});
}
//#endregion
//#region node_modules/@tsparticles/slim/esm/index.js
async function loadSlim(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register(async (e) => {
		const loadInteractivityForSlim = async (e) => {
			await loadInteractivityPlugin(e);
			await Promise.all([
				loadExternalParallaxInteraction(e),
				loadExternalAttractInteraction(e),
				loadExternalBounceInteraction(e),
				loadExternalBubbleInteraction(e),
				loadExternalConnectInteraction(e),
				loadExternalDestroyInteraction(e),
				loadExternalGrabInteraction(e),
				loadExternalPauseInteraction(e),
				loadExternalPushInteraction(e),
				loadExternalRemoveInteraction(e),
				loadExternalRepulseInteraction(e),
				loadExternalSlowInteraction(e),
				loadParticlesAttractInteraction(e),
				loadParticlesCollisionsInteraction(e),
				loadParticlesLinksInteraction(e)
			]);
		};
		await Promise.all([
			loadBasic(e),
			loadInteractivityForSlim(e),
			loadEasingQuadPlugin(e),
			loadEmojiShape(e),
			loadImageShape(e),
			loadLineShape(e),
			loadPolygonShape(e),
			loadSquareShape(e),
			loadStarShape(e),
			loadLifeUpdater(e),
			loadPaintUpdater(e),
			loadRotateUpdater(e)
		]);
	});
}
//#endregion
export { loadSlim as t };
