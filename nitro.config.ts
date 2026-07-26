import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  plugins: ["./src/nitro/ai-news-cron"],
  cloudflare: {
    wrangler: {
      // Fest gepinnt: Nitro stempelt sonst das lokale Datum, das der
      // Cloudflare-API zeitzonenbedingt "in der Zukunft" liegen kann.
      compatibility_date: "2026-07-05",
      kv_namespaces: [{ binding: "AI_NEWS", id: "54655a8d9d4a40e3b4808aa262573a1c" }],
      // 05:00 UTC = 07:00 MESZ (im Winter 06:00 MEZ).
      triggers: { crons: ["0 5 * * *"] },
    },
  },
});
