import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  cloudflare: {
    wrangler: {
      // Fest gepinnt: Nitro stempelt sonst das lokale Datum, das der
      // Cloudflare-API zeitzonenbedingt "in der Zukunft" liegen kann.
      compatibility_date: "2026-07-05",
    },
  },
});
