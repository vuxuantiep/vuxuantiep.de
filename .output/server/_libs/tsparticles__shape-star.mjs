import { U as getRangeValue } from "./@tsparticles/animation-utils+[...].mjs";
//#region node_modules/@tsparticles/shape-star/esm/Utils.js
var defaultInset$1 = 2, origin = {
	x: 0,
	y: 0
};
function drawStar(data) {
	const { context, particle, radius } = data, sides = particle.sides, inset = particle.starInset ?? defaultInset$1;
	context.moveTo(origin.x, origin.y - radius);
	for (let i = 0; i < sides; i++) {
		context.rotate(Math.PI / sides);
		context.lineTo(origin.x, origin.y - radius * inset);
		context.rotate(Math.PI / sides);
		context.lineTo(origin.x, origin.y - radius);
	}
}
//#endregion
//#region node_modules/@tsparticles/shape-star/esm/StarDrawer.js
var defaultInset = 2, defaultSides = 5;
var StarDrawer = class {
	draw(data) {
		drawStar(data);
	}
	getSidesCount(particle) {
		const star = particle.shapeData;
		return Math.round(getRangeValue(star?.sides ?? defaultSides));
	}
	particleInit(_container, particle) {
		const star = particle.shapeData;
		particle.starInset = getRangeValue(star?.inset ?? defaultInset);
	}
};
//#endregion
//#region node_modules/@tsparticles/shape-star/esm/index.js
async function loadStarShape(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addShape(["star"], () => Promise.resolve(new StarDrawer()));
	});
}
//#endregion
export { loadStarShape as t };
