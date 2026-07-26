import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { AI_NEWS_KV_KEY, refreshAiNews, type AiNewsKv } from "./lib/ai-news";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

// Liefert die vom täglichen Cron (src/nitro/ai-news-cron.ts) in KV abgelegten
// KI-News. Ist der Store noch leer (z.B. direkt nach dem ersten Deploy), wird
// einmalig live gescrapt und das Ergebnis gespeichert.
async function handleAiNewsRequest(env: unknown): Promise<Response> {
  const headers = {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "public, max-age=300",
  };
  // Je nach Aufrufkette reicht Nitro die env nicht als Parameter durch,
  // stellt sie aber immer unter globalThis.__env__ bereit.
  const envSource = (env ?? (globalThis as { __env__?: unknown }).__env__) as
    | { AI_NEWS?: AiNewsKv }
    | undefined;
  const kv = envSource?.AI_NEWS;
  if (!kv) {
    return new Response(JSON.stringify({ updatedAt: null, items: [] }), { headers });
  }
  try {
    const cached = await kv.get(AI_NEWS_KV_KEY);
    if (cached) {
      return new Response(cached, { headers });
    }
    const payload = await refreshAiNews(kv);
    return new Response(JSON.stringify(payload), { headers });
  } catch (error) {
    console.error("ai-news: request failed", error);
    return new Response(JSON.stringify({ updatedAt: null, items: [] }), { headers });
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    if (new URL(request.url).pathname === "/api/ai-news") {
      return handleAiNewsRequest(env);
    }
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
