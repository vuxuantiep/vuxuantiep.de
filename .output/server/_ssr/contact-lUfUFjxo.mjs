import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as b } from "../_libs/worker-mailer.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-lUfUFjxo.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SMTP_HOST = "smtp.ionos.de";
var SMTP_PORT = 465;
var SMTP_USER = "kontakt@vuxuantiep.de";
var TO_ADDRESS = "tiep@vuxuantiep.de";
var CC_ADDRESS = "vuxuantiep@gmail.com";
function escapeHtml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
var sendContactMessage_createServerFn_handler = createServerRpc({
	id: "c674b0b7792d4633bcc5ea3647131a08a33d340c202834e6fdf7c9a0e6122f78",
	name: "sendContactMessage",
	filename: "src/lib/contact.ts"
}, (opts) => sendContactMessage.__executeServer(opts));
var sendContactMessage = createServerFn({ method: "POST" }).inputValidator((data) => {
	const name = String(data.name ?? "").trim().slice(0, 200);
	const email = String(data.email ?? "").trim().slice(0, 200);
	const projectType = String(data.projectType ?? "").trim().slice(0, 200);
	const message = String(data.message ?? "").trim().slice(0, 5e3);
	const lang = [
		"DE",
		"EN",
		"VI"
	].includes(String(data.lang)) ? String(data.lang) : "DE";
	if (!name) throw new Error("Bitte Namen angeben.");
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Bitte gültige E-Mail angeben.");
	if (!message) throw new Error("Bitte eine Nachricht schreiben.");
	return {
		name,
		email,
		projectType,
		message,
		lang
	};
}).handler(sendContactMessage_createServerFn_handler, async ({ data }) => {
	const { env } = await import("cloudflare:workers");
	if (!env?.SMTP_PASSWORD) {
		console.error("SMTP_PASSWORD secret is not configured.");
		throw new Error("Der Versand ist momentan nicht möglich. Bitte schreib direkt an tiep@vuxuantiep.de.");
	}
	const lines = [
		"Neue Anfrage über das Kontaktformular auf vuxuantiep.de",
		"",
		`Name: ${data.name}`,
		`E-Mail: ${data.email}`,
		`Projektart: ${data.projectType}`,
		"",
		"Nachricht:",
		data.message
	];
	try {
		await b.send({
			host: SMTP_HOST,
			port: SMTP_PORT,
			secure: true,
			credentials: {
				username: SMTP_USER,
				password: env.SMTP_PASSWORD
			},
			authType: ["login", "plain"]
		}, {
			from: {
				name: "vuxuantiep.de Kontaktformular",
				email: SMTP_USER
			},
			to: TO_ADDRESS,
			cc: CC_ADDRESS,
			reply: {
				name: data.name,
				email: data.email
			},
			subject: `Kontaktanfrage: ${data.projectType} — ${data.name}`,
			text: lines.join("\n"),
			html: `<h2>Neue Anfrage über das Kontaktformular</h2>
<p><strong>Name:</strong> ${escapeHtml(data.name)}<br/>
<strong>E-Mail:</strong> ${escapeHtml(data.email)}<br/>
<strong>Projektart:</strong> ${escapeHtml(data.projectType)}</p>
<p><strong>Nachricht:</strong></p>
<p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>`
		});
	} catch (err) {
		console.error("SMTP send failed:", err);
		throw new Error("Der Versand ist momentan nicht möglich. Bitte schreib direkt an tiep@vuxuantiep.de.");
	}
	try {
		const confirmation = buildConfirmation(data.lang ?? "DE", data.name, data.message);
		await b.send({
			host: SMTP_HOST,
			port: SMTP_PORT,
			secure: true,
			credentials: {
				username: SMTP_USER,
				password: env.SMTP_PASSWORD
			},
			authType: ["login", "plain"]
		}, {
			from: {
				name: "Vu Xuan Tiep — vuxuantiep.de",
				email: SMTP_USER
			},
			to: {
				name: data.name,
				email: data.email
			},
			reply: TO_ADDRESS,
			subject: confirmation.subject,
			text: confirmation.text,
			html: confirmation.html
		});
	} catch (err) {
		console.error("Confirmation send failed:", err);
	}
	return { ok: true };
});
function buildConfirmation(lang, name, message) {
	const quotedHtml = `<blockquote style="border-left:3px solid #4ADE80;margin:16px 0;padding:8px 16px;color:#555;">${escapeHtml(message).replace(/\n/g, "<br/>")}</blockquote>`;
	if (lang === "EN") return {
		subject: "Thank you for your message — vuxuantiep.de",
		text: `Hello ${name},\n\nthank you very much for your enquiry via vuxuantiep.de — it has arrived safely.\n\nI will get back to you personally as soon as possible, usually within 24 hours. Thank you for your patience!\n\nYour message:\n${message}\n\nBest regards\nVu Xuan Tiep\nhttps://vuxuantiep.de`,
		html: `<p>Hello ${escapeHtml(name)},</p><p>thank you very much for your enquiry via <a href="https://vuxuantiep.de">vuxuantiep.de</a> — it has arrived safely.</p><p>I will get back to you personally as soon as possible, usually within 24 hours. Thank you for your patience!</p><p><strong>Your message:</strong></p>${quotedHtml}<p>Best regards<br/>Vu Xuan Tiep</p>`
	};
	if (lang === "VI") return {
		subject: "Cảm ơn bạn đã liên hệ — vuxuantiep.de",
		text: `Xin chào ${name},\n\ncảm ơn bạn rất nhiều vì đã liên hệ qua vuxuantiep.de — tin nhắn của bạn đã được nhận.\n\nTôi sẽ phản hồi bạn sớm nhất có thể, thường trong vòng 24 giờ. Cảm ơn bạn đã kiên nhẫn chờ đợi!\n\nTin nhắn của bạn:\n${message}\n\nTrân trọng\nVu Xuan Tiep\nhttps://vuxuantiep.de`,
		html: `<p>Xin chào ${escapeHtml(name)},</p><p>cảm ơn bạn rất nhiều vì đã liên hệ qua <a href="https://vuxuantiep.de">vuxuantiep.de</a> — tin nhắn của bạn đã được nhận.</p><p>Tôi sẽ phản hồi bạn sớm nhất có thể, thường trong vòng 24 giờ. Cảm ơn bạn đã kiên nhẫn chờ đợi!</p><p><strong>Tin nhắn của bạn:</strong></p>${quotedHtml}<p>Trân trọng<br/>Vu Xuan Tiep</p>`
	};
	return {
		subject: "Danke für deine Nachricht — vuxuantiep.de",
		text: `Hallo ${name},\n\nherzlichen Dank für deine Anfrage über vuxuantiep.de — sie ist gut angekommen.\n\nIch melde mich so schnell wie möglich persönlich bei dir, in der Regel innerhalb von 24 Stunden. Bitte habe bis dahin etwas Geduld!\n\nDeine Nachricht:\n${message}\n\nHerzliche Grüße\nVu Xuan Tiep\nhttps://vuxuantiep.de`,
		html: `<p>Hallo ${escapeHtml(name)},</p><p>herzlichen Dank für deine Anfrage über <a href="https://vuxuantiep.de">vuxuantiep.de</a> — sie ist gut angekommen.</p><p>Ich melde mich so schnell wie möglich persönlich bei dir, in der Regel innerhalb von 24 Stunden. Bitte habe bis dahin etwas Geduld!</p><p><strong>Deine Nachricht:</strong></p>${quotedHtml}<p>Herzliche Grüße<br/>Vu Xuan Tiep</p>`
	};
}
//#endregion
export { sendContactMessage_createServerFn_handler };
