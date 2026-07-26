import { U as getRangeValue, at as doublePI, st as half } from "./@tsparticles/animation-utils+[...].mjs";
//#region node_modules/@tsparticles/shape-polygon/esm/Utils.js
var polygonCache = /* @__PURE__ */ new Map(), noOffset = 0;
function getUnitPolygon(sides) {
	const cached = polygonCache.get(sides);
	if (cached) return cached;
	const step = doublePI / sides, isOdd = !!(sides % 2), baseAngle = (-Math.PI + (isOdd ? noOffset : step)) * half, verts = [];
	for (let i = 0; i < sides; i++) {
		const angle = baseAngle + i * step;
		verts[i] = {
			x: Math.cos(angle),
			y: Math.sin(angle)
		};
	}
	polygonCache.set(sides, verts);
	return verts;
}
function drawPolygon(data, side) {
	const { context, radius } = data, verts = getUnitPolygon(side.count.numerator / side.count.denominator);
	context.beginPath();
	for (let i = 0; i < verts.length; i++) {
		const vert = verts[i];
		if (!vert) continue;
		const x = vert.x * radius, y = vert.y * radius;
		if (i) context.lineTo(x, y);
		else context.moveTo(x, y);
	}
	context.closePath();
}
//#endregion
//#region node_modules/@tsparticles/shape-polygon/esm/PolygonDrawerBase.js
var defaultSides = 5;
var PolygonDrawerBase = class {
	draw(data) {
		const { particle, radius } = data;
		drawPolygon(data, this.getSidesData(particle, radius));
	}
	getSidesCount(particle) {
		const polygon = particle.shapeData;
		return Math.round(getRangeValue(polygon?.sides ?? defaultSides));
	}
};
//#endregion
//#region node_modules/@tsparticles/shape-polygon/esm/PolygonDrawer.js
var yFactor$1 = 2.66, sidesFactor$1 = 3;
var PolygonDrawer = class extends PolygonDrawerBase {
	getSidesData(particle, radius) {
		const { sides } = particle;
		return {
			count: {
				denominator: 1,
				numerator: sides
			},
			length: radius * yFactor$1 / (sides / sidesFactor$1)
		};
	}
};
//#endregion
//#region node_modules/@tsparticles/shape-polygon/esm/TriangleDrawer.js
var sides = 3, yFactor = 2.66, sidesFactor = 3;
var TriangleDrawer = class extends PolygonDrawerBase {
	getSidesCount() {
		return sides;
	}
	getSidesData(_particle, radius) {
		return {
			count: {
				denominator: 1,
				numerator: sides
			},
			length: radius * yFactor / (sides / sidesFactor)
		};
	}
};
//#endregion
//#region node_modules/@tsparticles/shape-polygon/esm/index.js
async function loadGenericPolygonShape(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addShape(["polygon"], () => Promise.resolve(new PolygonDrawer()));
	});
}
async function loadTriangleShape(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addShape(["triangle"], () => Promise.resolve(new TriangleDrawer()));
	});
}
async function loadPolygonShape(engine) {
	engine.checkVersion("4.3.2");
	await Promise.all([loadGenericPolygonShape(engine), loadTriangleShape(engine)]);
}
//#endregion
export { loadPolygonShape as t };
