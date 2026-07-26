import { r as __exportAll } from "../../_runtime.mjs";
import { I as getDistance, P as clamp, U as getRangeValue, X as isNull, d as circleBounce, f as circleBounceDataFromParticle } from "./animation-utils+[...].mjs";
import { n as ParticlesBounce } from "../tsparticles__engine.mjs";
import { _ as loadOptionProperty, v as loadProperty, y as loadRangeProperty } from "./basic+[...].mjs";
import { g as ParticlesInteractorBase, n as ensureInteractivityPluginLoaded } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/CollisionMode.js
var CollisionMode;
(function(CollisionMode) {
	CollisionMode["absorb"] = "absorb";
	CollisionMode["bounce"] = "bounce";
	CollisionMode["destroy"] = "destroy";
})(CollisionMode || (CollisionMode = {}));
//#endregion
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/Options/Classes/CollisionsAbsorb.js
var CollisionsAbsorb = class {
	speed = 2;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "speed", data.speed);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/Options/Classes/CollisionsOverlap.js
var CollisionsOverlap = class {
	enable = true;
	retries = 0;
	load(data) {
		if (isNull(data)) return;
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "retries", data.retries);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/Options/Classes/Collisions.js
var Collisions = class {
	absorb = new CollisionsAbsorb();
	bounce = new ParticlesBounce();
	enable = false;
	maxSpeed = 50;
	mode = CollisionMode.bounce;
	overlap = new CollisionsOverlap();
	load(data) {
		if (isNull(data)) return;
		this.absorb.load(data.absorb);
		this.bounce.load(data.bounce);
		loadProperty(this, "enable", data.enable);
		loadRangeProperty(this, "maxSpeed", data.maxSpeed);
		loadProperty(this, "mode", data.mode);
		this.overlap.load(data.overlap);
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/Absorb.js
var minAbsorbAmount = 0;
function updateAbsorb(p1, r1, p2, r2, delta, pixelRatio) {
	if (!p1.options.collisions || !p2.options.collisions) return;
	const absorbSpeed = p1.options.collisions.absorb.speed, shrinkAmount = clamp(absorbSpeed * delta.factor, minAbsorbAmount, r2);
	p1.size.value = Math.sqrt(r1 * r1 + shrinkAmount * shrinkAmount);
	p2.size.value -= shrinkAmount;
	if (p2.size.value <= pixelRatio) {
		p2.size.value = 0;
		p2.destroy();
	}
}
function absorb(p1, p2, delta, pixelRatio) {
	const r1 = p1.getRadius(), r2 = p2.getRadius();
	if (!r1 && r2) p1.destroy();
	else if (r1 && !r2) p2.destroy();
	else if (r1 && r2) if (r1 >= r2) updateAbsorb(p1, r1, p2, r2, delta, pixelRatio);
	else updateAbsorb(p2, r2, p1, r1, delta, pixelRatio);
}
//#endregion
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/Bounce.js
var energyCorrectionMinRatio = 1e-6, energyDriftThreshold = 1e-4, correctionFactorNeutral = 1, fixBounceSpeed = (p) => {
	if (!p.options.collisions) return;
	p.collisionMaxSpeed ??= getRangeValue(p.options.collisions.maxSpeed);
	if (p.velocity.length > p.collisionMaxSpeed) p.velocity.length = p.collisionMaxSpeed;
};
function bounce(p1, p2) {
	const m1 = p1.getMass(), m2 = p2.getMass(), speed1Before = p1.velocity.length, speed2Before = p2.velocity.length, keBefore = m1 * speed1Before * speed1Before + m2 * speed2Before * speed2Before;
	circleBounce(circleBounceDataFromParticle(p1), circleBounceDataFromParticle(p2));
	const speed1After = p1.velocity.length, speed2After = p2.velocity.length, keAfter = m1 * speed1After * speed1After + m2 * speed2After * speed2After;
	if (keAfter > keBefore * energyCorrectionMinRatio) {
		const correctionFactor = Math.sqrt(keBefore / keAfter);
		if (Math.abs(correctionFactor - correctionFactorNeutral) > energyDriftThreshold) {
			p1.velocity.length = speed1After * correctionFactor;
			p2.velocity.length = speed2After * correctionFactor;
		}
	}
	fixBounceSpeed(p1);
	fixBounceSpeed(p2);
}
//#endregion
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/Destroy.js
function destroy(p1, p2) {
	if (!p1.unbreakable && !p2.unbreakable) bounce(p1, p2);
	const p1Radius = p1.getRadius(), p2Radius = p2.getRadius();
	if (!p1Radius && p2Radius) p1.destroy();
	else if (p1Radius && !p2Radius) p2.destroy();
	else if (p1Radius && p2Radius) (p1.getRadius() >= p2.getRadius() ? p2 : p1).destroy();
}
//#endregion
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/ResolveCollision.js
function resolveCollision(p1, p2, delta, pixelRatio) {
	if (!p1.options.collisions || !p2.options.collisions) return;
	switch (p1.options.collisions.mode) {
		case CollisionMode.absorb:
			absorb(p1, p2, delta, pixelRatio);
			break;
		case CollisionMode.bounce:
			bounce(p1, p2);
			break;
		case CollisionMode.destroy:
			destroy(p1, p2);
			break;
		default: break;
	}
}
//#endregion
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/Collider.js
var Collider = class extends ParticlesInteractorBase {
	maxDistance;
	constructor(container) {
		super(container);
		this.maxDistance = 0;
	}
	clear() {}
	init() {}
	interact(p1, _interactivityData, delta) {
		if (p1.destroyed || p1.spawning) return;
		const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.grid.queryCircle(pos1, radius1 * 2);
		for (const p2 of query) {
			if (p1 === p2 || p1.id >= p2.id || !p1.options.collisions?.enable || !p2.options.collisions?.enable || p1.options.collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) continue;
			const pos2 = p2.getPosition(), radius2 = p2.getRadius();
			if (Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > radius1 + radius2) continue;
			if (getDistance(pos1, pos2) > radius1 + radius2) continue;
			resolveCollision(p1, p2, delta, container.retina.pixelRatio);
		}
	}
	isEnabled(particle) {
		return !!particle.options.collisions?.enable;
	}
	loadParticlesOptions(options, ...sources) {
		loadOptionProperty(options, "collisions", Collisions, ...sources);
	}
	reset() {}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/OverlapPlugin.js
var OverlapPlugin = class {
	id = "overlap";
	async getPlugin(container) {
		const { OverlapPluginInstance } = await Promise.resolve().then(() => OverlapPluginInstance_exports);
		return new OverlapPluginInstance(container);
	}
	loadOptions() {}
	needsPlugin() {
		return true;
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/index.js
async function loadParticlesCollisionsInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addPlugin(new OverlapPlugin());
		e.pluginManager.addInteractor?.("particlesCollisions", (container) => {
			return Promise.resolve(new Collider(container));
		});
	});
}
//#endregion
//#region node_modules/@tsparticles/interaction-particles-collisions/esm/OverlapPluginInstance.js
var OverlapPluginInstance_exports = /* @__PURE__ */ __exportAll({ OverlapPluginInstance: () => OverlapPluginInstance });
var minRetries = 0;
var OverlapPluginInstance = class {
	#container;
	constructor(container) {
		this.#container = container;
	}
	checkParticlePosition(particle, position, tryCount) {
		return !this.#hasOverlaps(particle, position, tryCount);
	}
	#hasOverlaps(particle, pos, tryCount) {
		const collisionsOptions = particle.options.collisions;
		if (!collisionsOptions?.enable) return false;
		const overlapOptions = collisionsOptions.overlap;
		if (overlapOptions.enable) return false;
		const retries = overlapOptions.retries;
		if (retries >= minRetries && tryCount > retries) throw new Error(`Particle is overlapping and can't be placed`);
		return !!this.#container.particles.find((p) => getDistance(pos, p.position) < particle.getRadius() + p.getRadius());
	}
};
//#endregion
export { loadParticlesCollisionsInteraction as t };
