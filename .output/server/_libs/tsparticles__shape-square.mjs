//#region node_modules/@tsparticles/shape-square/esm/Utils.js
function drawSquare(data) {
	const { context, radius } = data, fixedRadius = radius * Math.SQRT1_2, fixedDiameter = fixedRadius * 2;
	context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
}
//#endregion
//#region node_modules/@tsparticles/shape-square/esm/SquareDrawer.js
var sides = 4;
var SquareDrawer = class {
	draw(data) {
		drawSquare(data);
	}
	getSidesCount() {
		return sides;
	}
};
//#endregion
//#region node_modules/@tsparticles/shape-square/esm/index.js
async function loadSquareShape(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addShape(["edge", "square"], () => Promise.resolve(new SquareDrawer()));
	});
}
//#endregion
export { loadSquareShape as t };
