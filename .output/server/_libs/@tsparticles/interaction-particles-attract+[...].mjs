import { L as getDistances, U as getRangeValue, X as isNull } from "./animation-utils+[...].mjs";
import { _ as loadOptionProperty, v as loadProperty, y as loadRangeProperty } from "./basic+[...].mjs";
import { g as ParticlesInteractorBase, n as ensureInteractivityPluginLoaded } from "./interaction-external-attract+[...].mjs";
//#region node_modules/@tsparticles/interaction-particles-attract/esm/Options/Classes/Attract.js
var Attract = class {
	distance = 200;
	enable = false;
	rotate;
	constructor() {
		this.rotate = {
			x: 3e3,
			y: 3e3
		};
	}
	load(data) {
		if (isNull(data)) return;
		loadRangeProperty(this, "distance", data.distance);
		loadProperty(this, "enable", data.enable);
		if (data.rotate) {
			const rotateX = data.rotate.x;
			if (rotateX !== void 0) this.rotate.x = rotateX;
			const rotateY = data.rotate.y;
			if (rotateY !== void 0) this.rotate.y = rotateY;
		}
	}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-attract/esm/Attractor.js
var attractFactor = 1e3, identity = 1;
var Attractor = class extends ParticlesInteractorBase {
	#maxDistance;
	constructor(container) {
		super(container);
		this.#maxDistance = 0;
	}
	get maxDistance() {
		return this.#maxDistance;
	}
	clear() {}
	init() {}
	interact(p1) {
		if (!p1.options.attract?.enable) return;
		const container = this.container;
		if (isNull(p1.attractDistance)) {
			const attractDistance = getRangeValue(p1.options.attract.distance);
			if (attractDistance > this.#maxDistance) this.#maxDistance = attractDistance;
			p1.attractDistance = attractDistance * container.retina.pixelRatio;
		}
		const distance = p1.attractDistance, pos1 = p1.getPosition(), query = container.particles.grid.queryCircle(pos1, distance);
		for (const p2 of query) {
			if (p1 === p2 || !p2.options.attract?.enable || p2.destroyed || p2.spawning) continue;
			const { dx, dy } = getDistances(pos1, p2.getPosition()), rotate = p1.options.attract.rotate, ax = dx / (rotate.x * attractFactor), ay = dy / (rotate.y * attractFactor), p1Factor = p2.size.value / p1.size.value, p2Factor = identity / p1Factor;
			p1.velocity.x -= ax * p1Factor;
			p1.velocity.y -= ay * p1Factor;
			p2.velocity.x += ax * p2Factor;
			p2.velocity.y += ay * p2Factor;
		}
	}
	isEnabled(particle) {
		return particle.options.attract?.enable ?? false;
	}
	loadParticlesOptions(options, ...sources) {
		loadOptionProperty(options, "attract", Attract, ...sources);
	}
	reset() {}
};
//#endregion
//#region node_modules/@tsparticles/interaction-particles-attract/esm/index.js
async function loadParticlesAttractInteraction(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		ensureInteractivityPluginLoaded(e);
		e.pluginManager.addInteractor?.("particlesAttract", (container) => {
			return Promise.resolve(new Attractor(container));
		});
	});
}
//#endregion
export { loadParticlesAttractInteraction as t };
