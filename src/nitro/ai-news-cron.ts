import { definePlugin } from "nitro";
import { refreshAiNews, type AiNewsKv } from "../lib/ai-news";

interface ScheduledHookPayload {
  env?: { AI_NEWS?: AiNewsKv };
  context?: { waitUntil(promise: Promise<unknown>): void };
}

// Cloudflare Cron Trigger (siehe nitro.config.ts): lädt einmal täglich die
// aktuellen KI-News und legt sie in KV ab, damit /api/ai-news sie ausliefert.
export default definePlugin((nitro) => {
  nitro.hooks.hook("cloudflare:scheduled" as never, ((payload: ScheduledHookPayload) => {
    const kv = payload.env?.AI_NEWS;
    if (!kv) {
      console.error("ai-news-cron: AI_NEWS KV binding missing");
      return;
    }
    const run = refreshAiNews(kv)
      .then((result) => console.log(`ai-news-cron: stored ${result.items.length} items`))
      .catch((error) => console.error("ai-news-cron: refresh failed", error));
    payload.context?.waitUntil(run);
  }) as never);
});
