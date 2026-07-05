import { createServerFn } from "@tanstack/react-start";

interface ContactInput {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

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
    // Cloudflare-Bindings sind nur im Worker-Runtime verfügbar.
    const { env } = (await import("cloudflare:workers")) as unknown as {
      env: { EMAIL?: { send: (msg: Record<string, unknown>) => Promise<unknown> } };
    };
    if (!env?.EMAIL) {
      throw new Error("E-Mail-Versand ist derzeit nicht verfügbar.");
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
      await env.EMAIL.send({
        to: "tiep@vuxuantiep.de",
        cc: "vuxuantiep@gmail.com",
        from: { email: "kontakt@vuxuantiep.de", name: "vuxuantiep.de Kontaktformular" },
        replyTo: data.email,
        subject: `Kontaktanfrage: ${data.projectType} — ${data.name}`,
        text: lines.join("\n"),
        html: `<h2>Neue Anfrage über das Kontaktformular</h2>
<p><strong>Name:</strong> ${escapeHtml(data.name)}<br/>
<strong>E-Mail:</strong> ${escapeHtml(data.email)}<br/>
<strong>Projektart:</strong> ${escapeHtml(data.projectType)}</p>
<p><strong>Nachricht:</strong></p>
<p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>`,
      });
    } catch (err) {
      console.error("EMAIL send failed:", err);
      throw new Error(
        "Der Versand ist momentan nicht möglich. Bitte schreib direkt an tiep@vuxuantiep.de."
      );
    }

    return { ok: true };
  });
