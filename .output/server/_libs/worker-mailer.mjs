import { connect } from "cloudflare:sockets";
//#region node_modules/worker-mailer/dist/index.mjs
var u = class {
	values = [];
	resolvers = [];
	enqueue(e) {
		this.resolvers.length || this.addWrapper(), this.resolvers.shift()(e);
	}
	async dequeue() {
		return this.values.length || this.addWrapper(), this.values.shift();
	}
	get length() {
		return this.values.length;
	}
	clear() {
		this.values = [], this.resolvers = [];
	}
	addWrapper() {
		this.values.push(new Promise((e) => {
			this.resolvers.push(e);
		}));
	}
};
async function T(a, e, t) {
	return Promise.race([a, new Promise((r, n) => setTimeout(() => n(t), e))]);
}
var E = new TextEncoder();
function d(a) {
	return E.encode(a);
}
var A = new TextDecoder("utf-8");
function v(a) {
	return A.decode(a);
}
function w(a, e = 76) {
	let t = d(a), r = "", n = 0, i = 0;
	for (; i < t.length;) {
		let o = t[i], s;
		if (o === 10) {
			r += `\r
`, n = 0, i++;
			continue;
		} else if (o === 13) if (i + 1 < t.length && t[i + 1] === 10) {
			r += `\r
`, n = 0, i += 2;
			continue;
		} else s = "=0D";
		if (s === void 0) {
			let l = o === 32 || o === 9, h = i + 1 >= t.length || t[i + 1] === 10 || t[i + 1] === 13;
			o < 32 && !l || o > 126 || o === 61 || l && h ? s = `=${o.toString(16).toUpperCase().padStart(2, "0")}` : s = String.fromCharCode(o);
		}
		n + s.length > e - 3 && (r += `=\r
`, n = 0), r += s, n += s.length, i++;
	}
	return r;
}
function c(a) {
	if (!/[^\x00-\x7F]/.test(a)) return a;
	let e = d(a), t = "";
	for (let r of e) r >= 33 && r <= 126 && r !== 63 && r !== 61 && r !== 95 ? t += String.fromCharCode(r) : r === 32 ? t += "_" : t += `=${r.toString(16).toUpperCase().padStart(2, "0")}`;
	return `=?UTF-8?Q?${t}?=`;
}
var f = class a {
	from;
	to;
	reply;
	cc;
	bcc;
	subject;
	text;
	html;
	dsnOverride;
	attachments;
	headers;
	setSent;
	setSentError;
	sent = new Promise((e, t) => {
		this.setSent = e, this.setSentError = t;
	});
	constructor(e) {
		if (!e.text && !e.html) throw new Error("At least one of text or html must be provided");
		typeof e.from == "string" ? this.from = { email: e.from } : this.from = e.from, typeof e.reply == "string" ? this.reply = { email: e.reply } : this.reply = e.reply, this.to = a.toUsers(e.to), this.cc = a.toUsers(e.cc), this.bcc = a.toUsers(e.bcc), this.subject = e.subject, this.text = e.text, this.html = e.html, this.attachments = e.attachments, this.dsnOverride = e.dsnOverride, this.headers = e.headers || {};
	}
	static toUsers(e) {
		if (e) return typeof e == "string" ? [{ email: e }] : Array.isArray(e) ? e.map((t) => typeof t == "string" ? { email: t } : t) : [e];
	}
	getEmailData() {
		this.resolveHeader();
		let e = ["MIME-Version: 1.0"];
		for (let [s, l] of Object.entries(this.headers)) e.push(`${s}: ${l}`);
		let t = this.generateSafeBoundary("mixed_"), r = this.generateSafeBoundary("alternative_");
		e.push(`Content-Type: multipart/mixed; boundary="${t}"`);
		let i = `${e.join(`\r
`)}\r
\r
`;
		if (i += `--${t}\r
`, i += `Content-Type: multipart/alternative; boundary="${r}"\r
\r
`, this.text) {
			i += `--${r}\r
`, i += `Content-Type: text/plain; charset="UTF-8"\r
`, i += `Content-Transfer-Encoding: quoted-printable\r
\r
`;
			let s = w(this.text);
			i += `${s}\r
\r
`;
		}
		if (this.html) {
			i += `--${r}\r
`, i += `Content-Type: text/html; charset="UTF-8"\r
`, i += `Content-Transfer-Encoding: quoted-printable\r
\r
`;
			let s = w(this.html);
			i += `${s}\r
\r
`;
		}
		if (i += `--${r}--\r
`, this.attachments) for (let s of this.attachments) {
			let l = s.mimeType || this.getMimeType(s.filename);
			i += `--${t}\r
`, i += `Content-Type: ${l}; name="${s.filename}"\r
`, i += `Content-Description: ${s.filename}\r
`, i += `Content-Disposition: attachment; filename="${s.filename}";\r
`, i += `    creation-date="${(/* @__PURE__ */ new Date()).toUTCString()}";\r
`, i += `Content-Transfer-Encoding: base64\r
\r
`;
			let h = s.content.match(/.{1,72}/g);
			h ? i += `${h.join(`\r
`)}` : i += `${s.content}`, i += `\r
\r
`;
		}
		return i += `--${t}--\r
`, `${this.applyDotStuffing(i)}\r
.\r
`;
	}
	applyDotStuffing(e) {
		let t = e.replace(/\r\n\./g, `\r
..`);
		return t.startsWith(".") && (t = `.${t}`), t;
	}
	generateSafeBoundary(e) {
		let t = /* @__PURE__ */ new Uint8Array(28);
		crypto.getRandomValues(t);
		let n = e + Array.from(t).map((i) => i.toString(16).padStart(2, "0")).join("");
		return n = n.replace(/[<>@,;:\\/[\]?=" ]/g, "_"), n;
	}
	getMimeType(e) {
		return {
			txt: "text/plain",
			html: "text/html",
			csv: "text/csv",
			pdf: "application/pdf",
			png: "image/png",
			jpg: "image/jpeg",
			jpeg: "image/jpeg",
			gif: "image/gif",
			zip: "application/zip"
		}[e.split(".").pop()?.toLowerCase() || "txt"] || "application/octet-stream";
	}
	resolveHeader() {
		this.resolveFrom(), this.resolveTo(), this.resolveReply(), this.resolveCC(), this.resolveBCC(), this.resolveSubject(), this.headers.Date = this.headers.Date ?? (/* @__PURE__ */ new Date()).toUTCString(), this.headers["Message-ID"] = this.headers["Message-ID"] ?? `<${crypto.randomUUID()}@${this.from.email.split("@").pop()}>`;
	}
	resolveFrom() {
		if (this.headers.From) return;
		let e = this.from.email;
		this.from.name && (e = `"${c(this.from.name)}" <${e}>`), this.headers.From = e;
	}
	resolveTo() {
		if (this.headers.To) return;
		let e = this.to.map((t) => t.name ? `"${c(t.name)}" <${t.email}>` : t.email);
		this.headers.To = e.join(", ");
	}
	resolveSubject() {
		this.headers.Subject || this.subject && (this.headers.Subject = c(this.subject));
	}
	resolveReply() {
		if (!this.headers["Reply-To"] && this.reply) {
			let e = this.reply.email;
			this.reply.name && (e = `"${c(this.reply.name)}" <${e}>`), this.headers["Reply-To"] = e;
		}
	}
	resolveCC() {
		if (!this.headers.CC && this.cc) {
			let e = this.cc.map((t) => t.name ? `"${c(t.name)}" <${t.email}>` : t.email);
			this.headers.CC = e.join(", ");
		}
	}
	resolveBCC() {
		if (!this.headers.BCC && this.bcc) {
			let e = this.bcc.map((t) => t.name ? `"${c(t.name)}" <${t.email}>` : t.email);
			this.headers.BCC = e.join(", ");
		}
	}
};
var S = ((i) => (i[i.DEBUG = 0] = "DEBUG", i[i.INFO = 1] = "INFO", i[i.WARN = 2] = "WARN", i[i.ERROR = 3] = "ERROR", i[i.NONE = 4] = "NONE", i))(S || {}), p = class {
	constructor(e = 1, t) {
		this.level = e;
		this.prefix = t;
	}
	prefix;
	debug(e, ...t) {
		this.level <= 0 && console.debug(this.prefix + e, ...t);
	}
	info(e, ...t) {
		this.level <= 1 && console.info(this.prefix + e, ...t);
	}
	warn(e, ...t) {
		this.level <= 2 && console.warn(this.prefix + e, ...t);
	}
	error(e, ...t) {
		this.level <= 3 && console.error(this.prefix + e, ...t);
	}
};
var b = class a {
	socket;
	host;
	port;
	secure;
	startTls;
	authType;
	credentials;
	socketTimeoutMs;
	responseTimeoutMs;
	reader;
	writer;
	logger;
	dsn;
	sendNotificationsTo;
	active = !1;
	emailSending = null;
	emailToBeSent = new u();
	supportsDSN = !1;
	allowAuth = !1;
	authTypeSupported = [];
	supportsStartTls = !1;
	constructor(e) {
		this.port = e.port, this.host = e.host, this.secure = !!e.secure, Array.isArray(e.authType) ? this.authType = e.authType : typeof e.authType == "string" ? this.authType = [e.authType] : this.authType = [], this.startTls = e.startTls === void 0 ? !0 : e.startTls, this.credentials = e.credentials, this.dsn = e.dsn || {}, this.socketTimeoutMs = e.socketTimeoutMs || 6e4, this.responseTimeoutMs = e.socketTimeoutMs || 3e4, this.socket = connect({
			hostname: this.host,
			port: this.port
		}, {
			secureTransport: this.secure ? "on" : this.startTls ? "starttls" : "off",
			allowHalfOpen: !1
		}), this.reader = this.socket.readable.getReader(), this.writer = this.socket.writable.getWriter(), this.logger = new p(e.logLevel, `[WorkerMailer:${this.host}:${this.port}]`);
	}
	static async connect(e) {
		let t = new a(e);
		return await t.initializeSmtpSession(), t.start().catch(console.error), t;
	}
	send(e) {
		let t = new f(e);
		return this.emailToBeSent.enqueue(t), t.sent;
	}
	static async send(e, t) {
		let r = await a.connect(e);
		await r.send(t), await r.close();
	}
	async readTimeout() {
		return T(this.read(), this.responseTimeoutMs, /* @__PURE__ */ new Error("Timeout while waiting for smtp server response"));
	}
	async read() {
		let e = "";
		for (;;) {
			let { value: t } = await this.reader.read();
			if (!t) continue;
			let r = v(t).toString();
			if (this.logger.debug(`SMTP server response:
` + r), e = e + r, !e.endsWith(`
`)) continue;
			let n = e.split(/\r?\n/), i = n[n.length - 2];
			if (!/^\d+-/.test(i)) return e;
		}
	}
	async writeLine(e) {
		await this.write(`${e}\r
`);
	}
	async write(e) {
		this.logger.debug(`Write to socket:
` + e), await this.writer.write(d(e));
	}
	async initializeSmtpSession() {
		await this.waitForSocketConnected(), await this.greet(), await this.ehlo(), this.startTls && !this.secure && this.supportsStartTls && (await this.tls(), await this.ehlo()), await this.auth(), this.active = !0;
	}
	async start() {
		for (; this.active;) {
			this.emailSending = await this.emailToBeSent.dequeue();
			try {
				await this.mail(), await this.rcpt(), await this.data(), await this.body(), this.emailSending.setSent();
			} catch (e) {
				if (this.logger.error("Failed to send email: " + e.message), !this.active) return;
				this.emailSending.setSentError(e);
				try {
					await this.rset();
				} catch (t) {
					await this.close(t);
				}
			}
			this.emailSending = null;
		}
	}
	async close(e) {
		for (this.active = !1, this.logger.info("WorkerMailer is closed", e?.message || ""), this.emailSending?.setSentError?.(e || /* @__PURE__ */ new Error("WorkerMailer is shutting down")); this.emailToBeSent.length;) (await this.emailToBeSent.dequeue()).setSentError(e || /* @__PURE__ */ new Error("WorkerMailer is shutting down"));
		try {
			await this.writeLine("QUIT"), await this.readTimeout(), this.socket.close().catch(() => this.logger.error("Failed to close socket"));
		} catch {}
	}
	async waitForSocketConnected() {
		this.logger.info("Connecting to SMTP server"), await T(this.socket.opened, this.socketTimeoutMs, /* @__PURE__ */ new Error("Socket timeout!")), this.logger.info("SMTP server connected");
	}
	async greet() {
		let e = await this.readTimeout();
		if (!e.startsWith("220")) throw new Error("Failed to connect to SMTP server: " + e);
	}
	async ehlo() {
		await this.writeLine("EHLO 127.0.0.1");
		let e = await this.readTimeout();
		if (e.startsWith("421")) throw new Error(`Failed to EHLO. ${e}`);
		if (!e.startsWith("2")) {
			await this.helo();
			return;
		}
		this.parseCapabilities(e);
	}
	async helo() {
		await this.writeLine("HELO 127.0.0.1");
		let e = await this.readTimeout();
		if (!e.startsWith("2")) throw new Error(`Failed to HELO. ${e}`);
	}
	async tls() {
		await this.writeLine("STARTTLS");
		let e = await this.readTimeout();
		if (!e.startsWith("220")) throw new Error("Failed to start TLS: " + e);
		this.reader.releaseLock(), this.writer.releaseLock(), this.socket = this.socket.startTls(), this.reader = this.socket.readable.getReader(), this.writer = this.socket.writable.getWriter();
	}
	parseCapabilities(e) {
		/[ -]AUTH\b/i.test(e) && (this.allowAuth = !0), /[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)PLAIN/i.test(e) && this.authTypeSupported.push("plain"), /[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)LOGIN/i.test(e) && this.authTypeSupported.push("login"), /[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)CRAM-MD5/i.test(e) && this.authTypeSupported.push("cram-md5"), /[ -]STARTTLS\b/i.test(e) && (this.supportsStartTls = !0), /[ -]DSN\b/i.test(e) && (this.supportsDSN = !0);
	}
	async auth() {
		if (this.allowAuth) {
			if (!this.credentials) throw new Error("smtp server requires authentication, but no credentials found");
			if (this.authTypeSupported.includes("plain") && this.authType.includes("plain")) await this.authWithPlain();
			else if (this.authTypeSupported.includes("login") && this.authType.includes("login")) await this.authWithLogin();
			else if (this.authTypeSupported.includes("cram-md5") && this.authType.includes("cram-md5")) await this.authWithCramMD5();
			else throw new Error("No supported auth method found.");
		}
	}
	async authWithPlain() {
		let e = btoa(`\0${this.credentials.username}\0${this.credentials.password}`);
		await this.writeLine(`AUTH PLAIN ${e}`);
		let t = await this.readTimeout();
		if (!t.startsWith("2")) throw new Error(`Failed to plain authentication: ${t}`);
	}
	async authWithLogin() {
		await this.writeLine("AUTH LOGIN");
		let e = await this.readTimeout();
		if (!e.startsWith("3")) throw new Error("Invalid login: " + e);
		let t = btoa(this.credentials.username);
		await this.writeLine(t);
		let r = await this.readTimeout();
		if (!r.startsWith("3")) throw new Error("Failed to login authentication: " + r);
		let n = btoa(this.credentials.password);
		await this.writeLine(n);
		let i = await this.readTimeout();
		if (!i.startsWith("2")) throw new Error("Failed to login authentication: " + i);
	}
	async authWithCramMD5() {
		await this.writeLine("AUTH CRAM-MD5");
		let e = await this.readTimeout(), t = e.match(/^334\s+(.+)$/)?.pop();
		if (!t) throw new Error("Invalid CRAM-MD5 challenge: " + e);
		let r = atob(t), n = d(this.credentials.password), i = await crypto.subtle.importKey("raw", n, {
			name: "HMAC",
			hash: "MD5"
		}, !1, ["sign"]), o = d(r), s = await crypto.subtle.sign("HMAC", i, o), l = Array.from(new Uint8Array(s)).map((y) => y.toString(16).padStart(2, "0")).join("");
		await this.writeLine(btoa(`${this.credentials.username} ${l}`));
		let h = await this.readTimeout();
		if (!h.startsWith("2")) throw new Error("Failed to cram-md5 authentication: " + h);
	}
	async mail() {
		let e = `MAIL FROM: <${this.emailSending.from.email}>`;
		this.supportsDSN && (e += ` ${this.retBuilder()}`, this.emailSending?.dsnOverride?.envelopeId && (e += ` ENVID=${this.emailSending?.dsnOverride?.envelopeId}`)), await this.writeLine(e);
		let t = await this.readTimeout();
		if (!t.startsWith("2")) throw new Error(`Invalid ${e} ${t}`);
	}
	async rcpt() {
		let e = [
			...this.emailSending.to,
			...this.emailSending.cc || [],
			...this.emailSending.bcc || []
		];
		for (let t of e) {
			let r = `RCPT TO: <${t.email}>`;
			this.supportsDSN && (r += this.notificationBuilder()), await this.writeLine(r);
			let n = await this.readTimeout();
			if (!n.startsWith("2")) throw new Error(`Invalid ${r} ${n}`);
		}
	}
	async data() {
		await this.writeLine("DATA");
		let e = await this.readTimeout();
		if (!e.startsWith("3")) throw new Error(`Failed to send DATA: ${e}`);
	}
	async body() {
		await this.write(this.emailSending.getEmailData());
		let e = await this.readTimeout();
		if (!e.startsWith("2")) throw new Error("Failed send email body: " + e);
	}
	async rset() {
		await this.writeLine("RSET");
		let e = await this.readTimeout();
		if (!e.startsWith("2")) throw new Error(`Failed to reset: ${e}`);
	}
	notificationBuilder() {
		let e = [];
		return (this.emailSending?.dsnOverride?.NOTIFY && this.emailSending?.dsnOverride?.NOTIFY?.SUCCESS || !this.emailSending?.dsnOverride?.NOTIFY && this.dsn?.NOTIFY?.SUCCESS) && e.push("SUCCESS"), (this.emailSending?.dsnOverride?.NOTIFY && this.emailSending?.dsnOverride?.NOTIFY?.FAILURE || !this.emailSending?.dsnOverride?.NOTIFY && this.dsn?.NOTIFY?.FAILURE) && e.push("FAILURE"), (this.emailSending?.dsnOverride?.NOTIFY && this.emailSending?.dsnOverride?.NOTIFY?.DELAY || !this.emailSending?.dsnOverride?.NOTIFY && this.dsn?.NOTIFY?.DELAY) && e.push("DELAY"), e.length > 0 ? ` NOTIFY=${e.join(",")}` : " NOTIFY=NEVER";
	}
	retBuilder() {
		let e = [];
		return (this.emailSending?.dsnOverride?.RET && this.emailSending?.dsnOverride?.RET?.HEADERS || !this.emailSending?.dsnOverride?.RET && this.dsn?.RET?.HEADERS) && e.push("HDRS"), (this.emailSending?.dsnOverride?.RET && this.emailSending?.dsnOverride?.RET?.FULL || !this.emailSending?.dsnOverride?.RET && this.dsn?.RET?.FULL) && e.push("FULL"), e.length > 0 ? `RET=${e.join(",")}` : "";
	}
};
//#endregion
export { b as t };
