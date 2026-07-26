import { T as safeDocument } from "./@tsparticles/animation-utils+[...].mjs";
function drawLine(context, begin, end) {
	context.beginPath();
	context.moveTo(begin.x, begin.y);
	context.lineTo(end.x, end.y);
	context.closePath();
}
async function loadFont(font, weight) {
	try {
		await safeDocument().fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
	} catch {}
}
//#endregion
export { loadFont as n, drawLine as t };
