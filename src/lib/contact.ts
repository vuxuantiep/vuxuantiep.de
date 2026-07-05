import { createServerFn } from "@tanstack/react-start";
import { WorkerMailer } from "worker-mailer";

interface ContactInput {
  name: string;
  email: string;
  projectType: string;
  message: string;
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
    if (!name) throw new Error("Bitte Namen angeben.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Bitte gültige E-Mail angeben.");
    if (!message) throw new Error("Bitte eine Nachricht schreiben.");
    return { name, email, projectType, message };
  })
  .handler(async ({ data }) => {
    // Cloudflare-Runtime: Secrets und TCP-Sockets gibt es nur im Worker.
    const { env } = (await import("cloudflare:workers")) as unknown as {
      env: { SMTP_PASSWORD?: string };
    };
    if (!env?.SMTP_PASSWORD) {
      console.error("SMTP_PASSWORD secret is not configured.");
      throw new Error(
        "Der Versand ist momentan nicht möglich. Bitte schreib direkt an tiep@vuxuantiep.de."
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
        "Der Versand ist momentan nicht möglich. Bitte schreib direkt an tiep@vuxuantiep.de."
      );
    }

    return { ok: true };
  });
