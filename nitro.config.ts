import { defineNitroConfig } from "nitro/config";

// Ergänzt die von Nitro generierte wrangler.json um das E-Mail-Binding
// für das Kontaktformular (Cloudflare Email Sending).
export default defineNitroConfig({
  cloudflare: {
    wrangler: {
      // Fest gepinnt: Nitro stempelt sonst das lokale Datum, das der
      // Cloudflare-API zeitzonenbedingt "in der Zukunft" liegen kann.
      compatibility_date: "2026-07-05",
      send_email: [{ name: "EMAIL" }],
    },
  },
});
