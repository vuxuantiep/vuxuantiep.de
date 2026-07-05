globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/animation/1.png": {
		"type": "image/png",
		"etag": "\"86e9-7P11xPhl/eAfvm0wJCGNR4irID4\"",
		"mtime": "2026-07-05T15:46:51.523Z",
		"size": 34537,
		"path": "../public/animation/1.png"
	},
	"/animation/0.png": {
		"type": "image/png",
		"etag": "\"4c208-ZuW1VlxUk1M3SZ/5VCnAvEm/uEo\"",
		"mtime": "2026-07-05T15:46:51.516Z",
		"size": 311816,
		"path": "../public/animation/0.png"
	},
	"/assets/arrow-right-DYp_9cF-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-xQwFskOZxQfOJXRwUgQNkkYRUgk\"",
		"mtime": "2026-07-05T16:08:17.371Z",
		"size": 155,
		"path": "../public/assets/arrow-right-DYp_9cF-.js"
	},
	"/assets/AnimatePresence-DZktoAqU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104a-lB1ZFYxAcdUNDYyEF5vEpdmzCiI\"",
		"mtime": "2026-07-05T16:08:17.236Z",
		"size": 4170,
		"path": "../public/assets/AnimatePresence-DZktoAqU.js"
	},
	"/assets/blog-B9owr6PL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"202c-m8yDGpXpo/3N+FwxNHBKQHwj5T4\"",
		"mtime": "2026-07-05T16:08:17.387Z",
		"size": 8236,
		"path": "../public/assets/blog-B9owr6PL.js"
	},
	"/assets/Footer-CzpLZvoS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31367-x1J/7PTHhJiRcDAur7k/uXPBQ38\"",
		"mtime": "2026-07-05T16:08:17.314Z",
		"size": 201575,
		"path": "../public/assets/Footer-CzpLZvoS.js"
	},
	"/assets/github-B1m9SBFH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d-6YfYR7czffnEuPi2iNXhoQuE/A4\"",
		"mtime": "2026-07-05T16:08:17.415Z",
		"size": 397,
		"path": "../public/assets/github-B1m9SBFH.js"
	},
	"/assets/kontakt-MyPIw2_t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f6-8a7OjSxVtivNMwizsucJzPSyXBE\"",
		"mtime": "2026-07-05T16:08:17.432Z",
		"size": 5366,
		"path": "../public/assets/kontakt-MyPIw2_t.js"
	},
	"/assets/portfolio-BYkpgGJ8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ff0-1KOK2R2gLSFIdFuQIefwJTABXNM\"",
		"mtime": "2026-07-05T16:08:17.469Z",
		"size": 24560,
		"path": "../public/assets/portfolio-BYkpgGJ8.js"
	},
	"/assets/routes-0LkLAb5T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b58e-nW7xXsn2SvspBJMDFU/UPirHqkY\"",
		"mtime": "2026-07-05T16:08:17.531Z",
		"size": 46478,
		"path": "../public/assets/routes-0LkLAb5T.js"
	},
	"/assets/styles-Cor-wWRy.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17b6f-uj1MAdJ5K/Kh/YcbkvLtWC/kgrM\"",
		"mtime": "2026-07-05T16:08:17.611Z",
		"size": 97135,
		"path": "../public/assets/styles-Cor-wWRy.css"
	},
	"/assets/index-Dd0Ao3jW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54977-mrwfemiyd1O6GVO1fS3QiG5P7BA\"",
		"mtime": "2026-07-05T16:08:16.851Z",
		"size": 346487,
		"path": "../public/assets/index-Dd0Ao3jW.js"
	},
	"/images/BDS-Navigator/temp_image_1783206188233.png": {
		"type": "image/png",
		"etag": "\"73d45-fWsBG6YAhKit+wvd1T7B8zhClFY\"",
		"mtime": "2026-07-04T23:03:08.238Z",
		"size": 474437,
		"path": "../public/images/BDS-Navigator/temp_image_1783206188233.png"
	},
	"/images/AI-OS/temp_image_1783206156456.png": {
		"type": "image/png",
		"etag": "\"4aa92-yXsAStfYhpX2ea69Gdczx8kYM+g\"",
		"mtime": "2026-07-04T23:02:36.458Z",
		"size": 305810,
		"path": "../public/images/AI-OS/temp_image_1783206156456.png"
	},
	"/images/BDS-Navigator/temp_image_1783206197407.png": {
		"type": "image/png",
		"etag": "\"c62c8-QsGggP2gn2HMKML442NRiAtpunM\"",
		"mtime": "2026-07-04T23:03:17.410Z",
		"size": 811720,
		"path": "../public/images/BDS-Navigator/temp_image_1783206197407.png"
	},
	"/images/AI-OS/7e49c3b6-58f2-431d-b058-714e122315a0.png": {
		"type": "image/png",
		"etag": "\"175859-qSIw4XsE+lpQolXPMbK6U/SoyEA\"",
		"mtime": "2026-07-05T00:41:49.199Z",
		"size": 1529945,
		"path": "../public/images/AI-OS/7e49c3b6-58f2-431d-b058-714e122315a0.png"
	},
	"/images/BDS-Navigator/temp_image_1783206179972.png": {
		"type": "image/png",
		"etag": "\"115a8d-Ls3UhikA5kwPIxkpLXnCRh+CHd4\"",
		"mtime": "2026-07-04T23:02:59.978Z",
		"size": 1137293,
		"path": "../public/images/BDS-Navigator/temp_image_1783206179972.png"
	},
	"/animation/5.png": {
		"type": "image/png",
		"etag": "\"1d21b5-793WLAUPqW2G/ySVfeau0IaqiuE\"",
		"mtime": "2026-07-05T15:46:51.549Z",
		"size": 1909173,
		"path": "../public/animation/5.png"
	},
	"/animation/3.png": {
		"type": "image/png",
		"etag": "\"24d2dd-unoHkaUKDf5k8gGV3R7x1oG7eRE\"",
		"mtime": "2026-07-05T15:46:51.532Z",
		"size": 2413277,
		"path": "../public/animation/3.png"
	},
	"/images/AI-OS/68a07710-9bd3-4285-af62-53efa9849800.png": {
		"type": "image/png",
		"etag": "\"1d21b5-793WLAUPqW2G/ySVfeau0IaqiuE\"",
		"mtime": "2026-07-05T00:37:45.403Z",
		"size": 1909173,
		"path": "../public/images/AI-OS/68a07710-9bd3-4285-af62-53efa9849800.png"
	},
	"/images/AI-OS/temp_image_1783206019551.png": {
		"type": "image/png",
		"etag": "\"78b8d-6i9Q1Kn5ts9JD7r+HOfqhxPiPyM\"",
		"mtime": "2026-07-04T23:00:19.552Z",
		"size": 494477,
		"path": "../public/images/AI-OS/temp_image_1783206019551.png"
	},
	"/animation/4.mp4": {
		"type": "video/mp4",
		"etag": "\"3070ca-Q3ksc7NsNkmGsRh3f7HkAC+MNb4\"",
		"mtime": "2026-07-05T15:46:51.581Z",
		"size": 3174602,
		"path": "../public/animation/4.mp4"
	},
	"/animation/2.mp4": {
		"type": "video/mp4",
		"etag": "\"31c802-+Mg3JCUeHdPinNjs1iIfHOX4SGM\"",
		"mtime": "2026-07-05T15:46:51.565Z",
		"size": 3262466,
		"path": "../public/animation/2.mp4"
	},
	"/images/AI-OS/temp_image_1783206113009.png": {
		"type": "image/png",
		"etag": "\"da5d4-wxN1Ey2JNeyYUH8POUJ9muULE/E\"",
		"mtime": "2026-07-04T23:01:53.018Z",
		"size": 894420,
		"path": "../public/images/AI-OS/temp_image_1783206113009.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_zf1Mh5 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_zf1Mh5
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
