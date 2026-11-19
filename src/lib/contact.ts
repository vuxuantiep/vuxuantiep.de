import { createServerFn } from "@tanstack/react-start";
import { WorkerMailer } from "worker-mailer";

interface ContactInput {
  name: string;
  email: string;
  projectType: string;
  message: string;
  lang?: string;
}

const SMTP_HOST = "smtp.ionos.de";
const SMTP_PORT = 465;
// Versand-Postfach (IONOS Mail Basic), Empfang geht an das Haupt-Postfach.
const SMTP_USER = "kontakt@vuxuantiep.de";
const TO_ADDRESS = "tiep@vuxuantiep.de";
const CC_ADDRESS = "vuxuantiep@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: ContactInput) => {
    const name = String(data.name ?? "").trim().slice(0, 200);
    const email = String(data.email ?? "").trim().slice(0, 200);
    const projectType = String(data.projectType ?? "").trim().slice(0, 200);
    const message = String(data.message ?? "").trim().slice(0, 5000);
    const lang = ["DE", "EN", "VI"].includes(String(data.lang)) ? String(data.lang) : "DE";
    if (!name) throw new Error("Bitte Namen angeben.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Bitte gültige E-Mail angeben.");
    if (!message) throw new Error("Bitte eine Nachricht schreiben.");
    return { name, email, projectType, message, lang };
  })
  .handler(async ({ data }) => {
    // Cloudflare-Runtime: Secrets und TCP-Sockets gibt es nur im Worker.
    const { env } = (await import("cloudflare:workers")) as unknown as {
      env: { SMTP_PASSWORD?: string };
    };
    if (!env?.SMTP_PASSWORD) {
      console.error("SMTP_PASSWORD secret is not configured.");
      throw new Error(
        "Der Versand ist momentan nicht möglich. Bitte schreiben Sie direkt an tiep@vuxuantiep.de."
      );
    }

    const lines = [
      "Neue Anfrage über das Kontaktformular auf vuxuantiep.de",
      "",
      `Name: ${data.name}`,
      `E-Mail: ${data.email}`,
      `Projektart: ${data.projectType}`,
      "",
      "Nachricht:",
      data.message,
    ];

    try {
      await WorkerMailer.send(
        {
          host: SMTP_HOST,
          port: SMTP_PORT,
          secure: true,
          credentials: { username: SMTP_USER, password: env.SMTP_PASSWORD },
          authType: ["login", "plain"],
        },
        {
          from: { name: "vuxuantiep.de Kontaktformular", email: SMTP_USER },
          to: TO_ADDRESS,
          cc: CC_ADDRESS,
          reply: { name: data.name, email: data.email },
          subject: `Kontaktanfrage: ${data.projectType} — ${data.name}`,
          text: lines.join("\n"),
          html: `<h2>Neue Anfrage über das Kontaktformular</h2>
<p><strong>Name:</strong> ${escapeHtml(data.name)}<br/>
<strong>E-Mail:</strong> ${escapeHtml(data.email)}<br/>
<strong>Projektart:</strong> ${escapeHtml(data.projectType)}</p>
<p><strong>Nachricht:</strong></p>
<p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>`,
        }
      );
    } catch (err) {
      console.error("SMTP send failed:", err);
      throw new Error(
        "Der Versand ist momentan nicht möglich. Bitte schreiben Sie direkt an tiep@vuxuantiep.de."
      );
    }

    // Automatische Empfangsbestätigung an den Absender — ein Fehler hier
    // darf die bereits zugestellte Anfrage nicht als fehlgeschlagen melden.
    try {
      const confirmation = buildConfirmation(data.lang ?? "DE", data.name, data.message);
      await WorkerMailer.send(
        {
          host: SMTP_HOST,
          port: SMTP_PORT,
          secure: true,
          credentials: { username: SMTP_USER, password: env.SMTP_PASSWORD },
          authType: ["login", "plain"],
        },
        {
          from: { name: "Vu Xuan Tiep — vuxuantiep.de", email: SMTP_USER },
          to: { name: data.name, email: data.email },
          reply: TO_ADDRESS,
          subject: confirmation.subject,
          text: confirmation.text,
          html: confirmation.html,
        }
      );
    } catch (err) {
      console.error("Confirmation send failed:", err);
    }

    return { ok: true };
  });

function buildConfirmation(lang: string, name: string, message: string) {
  const quotedHtml = `<blockquote style="border-left:3px solid #044F3B;margin:16px 0;padding:8px 16px;color:#555;">${escapeHtml(message).replace(/\n/g, "<br/>")}</blockquote>`;

  if (lang === "EN") {
    return {
      subject: "Thank you for your message — vuxuantiep.de",
      text: `Hello ${name},\n\nthank you very much for your enquiry via vuxuantiep.de — it has arrived safely.\n\nI will get back to you personally as soon as possible. Thank you for your patience!\n\nYour message:\n${message}\n\nBest regards\nVu Xuan Tiep\nhttps://vuxuantiep.de`,
      html: `<p>Hello ${escapeHtml(name)},</p><p>thank you very much for your enquiry via <a href="https://vuxuantiep.de">vuxuantiep.de</a> — it has arrived safely.</p><p>I will get back to you personally as soon as possible. Thank you for your patience!</p><p><strong>Your message:</strong></p>${quotedHtml}<p>Best regards<br/>Vu Xuan Tiep</p>`,
    };
  }
  if (lang === "VI") {
    return {
      subject: "Cảm ơn bạn đã liên hệ — vuxuantiep.de",
      text: `Xin chào ${name},\n\ncảm ơn bạn rất nhiều vì đã liên hệ qua vuxuantiep.de — tin nhắn của bạn đã được nhận.\n\nTôi sẽ phản hồi bạn sớm nhất có thể. Cảm ơn bạn đã kiên nhẫn chờ đợi!\n\nTin nhắn của bạn:\n${message}\n\nTrân trọng\nVu Xuan Tiep\nhttps://vuxuantiep.de`,
      html: `<p>Xin chào ${escapeHtml(name)},</p><p>cảm ơn bạn rất nhiều vì đã liên hệ qua <a href="https://vuxuantiep.de">vuxuantiep.de</a> — tin nhắn của bạn đã được nhận.</p><p>Tôi sẽ phản hồi bạn sớm nhất có thể. Cảm ơn bạn đã kiên nhẫn chờ đợi!</p><p><strong>Tin nhắn của bạn:</strong></p>${quotedHtml}<p>Trân trọng<br/>Vu Xuan Tiep</p>`,
    };
  }
  return {
    subject: "Vielen Dank für Ihre Nachricht — vuxuantiep.de",
    text: `Guten Tag ${name},\n\nherzlichen Dank für Ihre Anfrage über vuxuantiep.de — sie ist gut angekommen.\n\nIch melde mich so schnell wie möglich persönlich bei Ihnen.\n\nIhre Nachricht:\n${message}\n\nHerzliche Grüße\nVu Xuan Tiep\nhttps://vuxuantiep.de`,
    html: `<p>Guten Tag ${escapeHtml(name)},</p><p>herzlichen Dank für Ihre Anfrage über <a href="https://vuxuantiep.de">vuxuantiep.de</a> — sie ist gut angekommen.</p><p>Ich melde mich so schnell wie möglich persönlich bei Ihnen.</p><p><strong>Ihre Nachricht:</strong></p>${quotedHtml}<p>Herzliche Grüße<br/>Vu Xuan Tiep</p>`,
  };
}
