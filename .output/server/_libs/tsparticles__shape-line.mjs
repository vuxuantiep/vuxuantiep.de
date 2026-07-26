//#region node_modules/@tsparticles/shape-line/esm/Utils.js
function drawLine(data) {
	const { context, particle, radius } = data, shapeData = particle.shapeData, centerY = 0;
	context.moveTo(-radius, centerY);
	context.lineTo(radius, centerY);
	context.lineCap = shapeData?.cap ?? "butt";
}
//#endregion
//#region node_modules/@tsparticles/shape-line/esm/LineDrawer.js
var sides = 1;
var LineDrawer = class {
	draw(data) {
		drawLine(data);
	}
	getSidesCount() {
		return sides;
	}
};
//#endregion
//#region node_modules/@tsparticles/shape-line/esm/index.js
async function loadLineShape(engine) {
	engine.checkVersion("4.3.2");
	await engine.pluginManager.register((e) => {
		e.pluginManager.addShape(["line"], () => Promise.resolve(new LineDrawer()));
	});
}
//#endregion
export { loadLineShape as t };
