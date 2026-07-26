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
	"/og-image.png": {
		"type": "image/png",
		"etag": "\"e77c-ttUFv/NpaBgJZKe4rJMaZkZYUNQ\"",
		"mtime": "2026-07-14T15:37:39.524Z",
		"size": 59260,
		"path": "../public/og-image.png"
	},
	"/animation/0.png": {
		"type": "image/png",
		"etag": "\"4c208-ZuW1VlxUk1M3SZ/5VCnAvEm/uEo\"",
		"mtime": "2026-07-05T16:37:38.202Z",
		"size": 311816,
		"path": "../public/animation/0.png"
	},
	"/animation/1.png": {
		"type": "image/png",
		"etag": "\"86e9-7P11xPhl/eAfvm0wJCGNR4irID4\"",
		"mtime": "2026-07-05T16:37:38.213Z",
		"size": 34537,
		"path": "../public/animation/1.png"
	},
	"/animation/3.mp4": {
		"type": "video/mp4",
		"etag": "\"7b304-2wJaynj9kAyXs6ZgSwq7nsxayG4\"",
		"mtime": "2026-07-05T16:37:38.239Z",
		"size": 504580,
		"path": "../public/animation/3.mp4"
	},
	"/assets/arrow-right-DBI_RVt2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-KEx/QuKKqR2zYQOcJeWdPPFI+G0\"",
		"mtime": "2026-07-26T09:30:15.178Z",
		"size": 154,
		"path": "../public/assets/arrow-right-DBI_RVt2.js"
	},
	"/assets/AnimatePresence-C1UxA2Gv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1139-G+btW1vJnYrEIiooX9MEMcSufHU\"",
		"mtime": "2026-07-26T09:30:14.990Z",
		"size": 4409,
		"path": "../public/assets/AnimatePresence-C1UxA2Gv.js"
	},
	"/assets/blog-DfatDP1J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"219e-v841YfZosTJNPYYBRcwqGFYEnkc\"",
		"mtime": "2026-07-26T09:30:15.183Z",
		"size": 8606,
		"path": "../public/assets/blog-DfatDP1J.js"
	},
	"/assets/broki-Bh35tIns.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"339f-Ukio+/bY8yOBR4xAReYMcBMSVfI\"",
		"mtime": "2026-07-26T09:30:15.198Z",
		"size": 13215,
		"path": "../public/assets/broki-Bh35tIns.js"
	},
	"/assets/browser-DoUSpCkk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c4-T5Nb6PCVO4cgP4nUb0uEREd3vcg\"",
		"mtime": "2026-07-26T09:30:15.206Z",
		"size": 5316,
		"path": "../public/assets/browser-DoUSpCkk.js"
	},
	"/assets/ColorUtils-zhLDR-Tw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1337-9QA9Sqw1UT/H0Kfek9qChKOmQ8E\"",
		"mtime": "2026-07-26T09:30:15.043Z",
		"size": 4919,
		"path": "../public/assets/ColorUtils-zhLDR-Tw.js"
	},
	"/assets/cpu-lCKrgDF5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"277-El+QsekwcK0PhOdDxCH1chyqU8Y\"",
		"mtime": "2026-07-26T09:30:15.212Z",
		"size": 631,
		"path": "../public/assets/cpu-lCKrgDF5.js"
	},
	"/assets/Container-qCPDMrtc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9cac-cWHV9LGEpf2pYoj535JJXqZxHSY\"",
		"mtime": "2026-07-26T09:30:15.057Z",
		"size": 40108,
		"path": "../public/assets/Container-qCPDMrtc.js"
	},
	"/assets/datenschutz-Dd-p-IXw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a08-z0D4wld1a5ZQwWi3ykP8CfasIwU\"",
		"mtime": "2026-07-26T09:30:15.218Z",
		"size": 14856,
		"path": "../public/assets/datenschutz-Dd-p-IXw.js"
	},
	"/assets/EventType-DPiR0odK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f80-DIzgVBgWq7u77IfQ4Q0NxuFJvw0\"",
		"mtime": "2026-07-26T09:30:15.071Z",
		"size": 8064,
		"path": "../public/assets/EventType-DPiR0odK.js"
	},
	"/assets/blog.lokale-llm-gpu-server-B_Qe2QBM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a35-Nz5DdxUEm692h/DRFXMFTk40oRo\"",
		"mtime": "2026-07-26T09:30:15.190Z",
		"size": 14901,
		"path": "../public/assets/blog.lokale-llm-gpu-server-B_Qe2QBM.js"
	},
	"/assets/ImagePreloaderInstance-DWJFmF-D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87-shgLlqytPwpgawFnBnZeNBxGmqI\"",
		"mtime": "2026-07-26T09:30:15.090Z",
		"size": 135,
		"path": "../public/assets/ImagePreloaderInstance-DWJFmF-D.js"
	},
	"/assets/impressum-C9ap8NRm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fb7-ZAbfI8n6NBnZUKLSuBKqoOCPCRw\"",
		"mtime": "2026-07-26T09:30:15.226Z",
		"size": 4023,
		"path": "../public/assets/impressum-C9ap8NRm.js"
	},
	"/assets/BlendPluginInstance-aPsN3SZs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29d-4xSLxLYHdPz1TU0fvQTM5DzeJMg\"",
		"mtime": "2026-07-26T09:30:15.038Z",
		"size": 669,
		"path": "../public/assets/BlendPluginInstance-aPsN3SZs.js"
	},
	"/animation/4.mp4": {
		"type": "video/mp4",
		"etag": "\"105cf5-mynxWLkhNWJFDeJ2LmuNPJi0k7s\"",
		"mtime": "2026-07-05T16:37:38.258Z",
		"size": 1072373,
		"path": "../public/animation/4.mp4"
	},
	"/animation/5.png": {
		"type": "image/png",
		"etag": "\"1d21b5-793WLAUPqW2G/ySVfeau0IaqiuE\"",
		"mtime": "2026-07-05T16:37:38.275Z",
		"size": 1909173,
		"path": "../public/animation/5.png"
	},
	"/assets/index-BgNfe_Df.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"84db-sLNjkMnkWUcX5CMY4g567bEQasY\"",
		"mtime": "2026-07-26T09:30:15.307Z",
		"size": 34011,
		"path": "../public/assets/index-BgNfe_Df.css"
	},
	"/assets/inter-cyrillic-500-normal-BasfLYem.woff2": {
		"type": "font/woff2",
		"etag": "\"1edc-4p+L4DlZmQVqry+RH9lMmJQ+P0U\"",
		"mtime": "2026-07-26T09:30:15.336Z",
		"size": 7900,
		"path": "../public/assets/inter-cyrillic-500-normal-BasfLYem.woff2"
	},
	"/assets/inter-cyrillic-400-normal-HOLc17fK.woff": {
		"type": "font/woff",
		"etag": "\"2634-ivoNz55T3CYjsRGYVvI78V6Hg84\"",
		"mtime": "2026-07-26T09:30:15.330Z",
		"size": 9780,
		"path": "../public/assets/inter-cyrillic-400-normal-HOLc17fK.woff"
	},
	"/assets/inter-cyrillic-400-normal-obahsSVq.woff2": {
		"type": "font/woff2",
		"etag": "\"1e20-2UATdNvSyhAwBTFW7JWXRnJeZyk\"",
		"mtime": "2026-07-26T09:30:15.334Z",
		"size": 7712,
		"path": "../public/assets/inter-cyrillic-400-normal-obahsSVq.woff2"
	},
	"/assets/inter-cyrillic-600-normal-4D_pXhcN.woff": {
		"type": "font/woff",
		"etag": "\"26d0-I2CCKTFIJy7UNImTmVTFMc8WGWM\"",
		"mtime": "2026-07-26T09:30:15.343Z",
		"size": 9936,
		"path": "../public/assets/inter-cyrillic-600-normal-4D_pXhcN.woff"
	},
	"/assets/inter-cyrillic-500-normal-CxZf_p3X.woff": {
		"type": "font/woff",
		"etag": "\"26d4-lAKYDJFVYDMKcLY/oR+ZyfOsllA\"",
		"mtime": "2026-07-26T09:30:15.340Z",
		"size": 9940,
		"path": "../public/assets/inter-cyrillic-500-normal-CxZf_p3X.woff"
	},
	"/assets/inter-cyrillic-ext-400-normal-BQZuk6qB.woff2": {
		"type": "font/woff2",
		"etag": "\"27f8-vx2gCiZcZIS7BSyHWqEe1Lm5p8Y\"",
		"mtime": "2026-07-26T09:30:15.349Z",
		"size": 10232,
		"path": "../public/assets/inter-cyrillic-ext-400-normal-BQZuk6qB.woff2"
	},
	"/assets/inter-cyrillic-600-normal-CWCymEST.woff2": {
		"type": "font/woff2",
		"etag": "\"1f24-tca4CMW+seK3RqmUMU0o0VZmyqg\"",
		"mtime": "2026-07-26T09:30:15.345Z",
		"size": 7972,
		"path": "../public/assets/inter-cyrillic-600-normal-CWCymEST.woff2"
	},
	"/assets/inter-cyrillic-ext-400-normal-DQukG94-.woff": {
		"type": "font/woff",
		"etag": "\"3418-0efK3fiFhInlHHjq0SFm+GVey2Y\"",
		"mtime": "2026-07-26T09:30:15.352Z",
		"size": 13336,
		"path": "../public/assets/inter-cyrillic-ext-400-normal-DQukG94-.woff"
	},
	"/assets/inter-cyrillic-ext-500-normal-B0yAr1jD.woff2": {
		"type": "font/woff2",
		"etag": "\"28c0-a4jJ9g181ZteaPVR7IOs0hVwtQg\"",
		"mtime": "2026-07-26T09:30:15.356Z",
		"size": 10432,
		"path": "../public/assets/inter-cyrillic-ext-500-normal-B0yAr1jD.woff2"
	},
	"/assets/inter-cyrillic-ext-500-normal-BmqWE9Dz.woff": {
		"type": "font/woff",
		"etag": "\"348c-1TbeWRwD3bVotPqIc3c/7sVxfo0\"",
		"mtime": "2026-07-26T09:30:15.360Z",
		"size": 13452,
		"path": "../public/assets/inter-cyrillic-ext-500-normal-BmqWE9Dz.woff"
	},
	"/assets/inter-cyrillic-ext-600-normal-Bcila6Z-.woff": {
		"type": "font/woff",
		"etag": "\"3498-zNJjP5Amk16bEdqbbZNObDtX308\"",
		"mtime": "2026-07-26T09:30:15.362Z",
		"size": 13464,
		"path": "../public/assets/inter-cyrillic-ext-600-normal-Bcila6Z-.woff"
	},
	"/assets/inter-cyrillic-ext-600-normal-Dfes3d0z.woff2": {
		"type": "font/woff2",
		"etag": "\"28f4-KdWYNIoSwUf7MLulzakpM8nepFc\"",
		"mtime": "2026-07-26T09:30:15.365Z",
		"size": 10484,
		"path": "../public/assets/inter-cyrillic-ext-600-normal-Dfes3d0z.woff2"
	},
	"/assets/inter-greek-400-normal-B4URO6DV.woff2": {
		"type": "font/woff2",
		"etag": "\"1e60-ha06h5lB7nxuWvNKf61Dcnc1d1I\"",
		"mtime": "2026-07-26T09:30:15.368Z",
		"size": 7776,
		"path": "../public/assets/inter-greek-400-normal-B4URO6DV.woff2"
	},
	"/animation/6.png": {
		"type": "image/png",
		"etag": "\"24d2dd-unoHkaUKDf5k8gGV3R7x1oG7eRE\"",
		"mtime": "2026-07-05T16:37:38.295Z",
		"size": 2413277,
		"path": "../public/animation/6.png"
	},
	"/assets/inter-greek-400-normal-q2sYcFCs.woff": {
		"type": "font/woff",
		"etag": "\"26c4-bdX1N3nNMZxQdZJFiVUIvfgvPUk\"",
		"mtime": "2026-07-26T09:30:15.371Z",
		"size": 9924,
		"path": "../public/assets/inter-greek-400-normal-q2sYcFCs.woff"
	},
	"/assets/Footer-CQ954J7A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3102a-mi28lDAtdKORlDD5zAgfdnIDDA8\"",
		"mtime": "2026-07-26T09:30:15.079Z",
		"size": 200746,
		"path": "../public/assets/Footer-CQ954J7A.js"
	},
	"/assets/index-9xQ92yzN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54dc4-CFRERbcZ2qJSwHuyeUvM9WAcCbg\"",
		"mtime": "2026-07-26T09:30:14.919Z",
		"size": 347588,
		"path": "../public/assets/index-9xQ92yzN.js"
	},
	"/assets/inter-greek-500-normal-BIZE56-Y.woff2": {
		"type": "font/woff2",
		"etag": "\"1ef0-rzB1Hth7JnUPaEXqA8yr0SpwMxk\"",
		"mtime": "2026-07-26T09:30:15.374Z",
		"size": 7920,
		"path": "../public/assets/inter-greek-500-normal-BIZE56-Y.woff2"
	},
	"/assets/inter-greek-500-normal-Xzm54t5V.woff": {
		"type": "font/woff",
		"etag": "\"26fc-aBzOXUzctfu1t0AWou6edVMARPA\"",
		"mtime": "2026-07-26T09:30:15.377Z",
		"size": 9980,
		"path": "../public/assets/inter-greek-500-normal-Xzm54t5V.woff"
	},
	"/assets/inter-greek-600-normal-BZpKdvQh.woff": {
		"type": "font/woff",
		"etag": "\"2730-u0VEy1HjIfUMvAeVgiAlRXW3Gg0\"",
		"mtime": "2026-07-26T09:30:15.379Z",
		"size": 10032,
		"path": "../public/assets/inter-greek-600-normal-BZpKdvQh.woff"
	},
	"/assets/inter-greek-600-normal-plRanbMR.woff2": {
		"type": "font/woff2",
		"etag": "\"1f08-dL8q9T10oywr5Ie+w0fBRkD/K6s\"",
		"mtime": "2026-07-26T09:30:15.382Z",
		"size": 7944,
		"path": "../public/assets/inter-greek-600-normal-plRanbMR.woff2"
	},
	"/animation/2.mp4": {
		"type": "video/mp4",
		"etag": "\"31c802-+Mg3JCUeHdPinNjs1iIfHOX4SGM\"",
		"mtime": "2026-07-05T16:37:38.225Z",
		"size": 3262466,
		"path": "../public/animation/2.mp4"
	},
	"/assets/inter-greek-ext-400-normal-DGGRlc-M.woff2": {
		"type": "font/woff2",
		"etag": "\"1490-FueWPOzdNQpScjKjfRcVv5Yv1HM\"",
		"mtime": "2026-07-26T09:30:15.384Z",
		"size": 5264,
		"path": "../public/assets/inter-greek-ext-400-normal-DGGRlc-M.woff2"
	},
	"/assets/inter-greek-ext-400-normal-KugGGMne.woff": {
		"type": "font/woff",
		"etag": "\"1b98-M0BooO/fFnrQlgRJzUMnDMWQ/Qo\"",
		"mtime": "2026-07-26T09:30:15.387Z",
		"size": 7064,
		"path": "../public/assets/inter-greek-ext-400-normal-KugGGMne.woff"
	},
	"/assets/inter-greek-ext-500-normal-2j5mBUwD.woff": {
		"type": "font/woff",
		"etag": "\"1c18-qcQk7wkL8ZD2jgfjekhd8K3qWn0\"",
		"mtime": "2026-07-26T09:30:15.390Z",
		"size": 7192,
		"path": "../public/assets/inter-greek-ext-500-normal-2j5mBUwD.woff"
	},
	"/assets/inter-greek-ext-600-normal-DRtmH8MT.woff2": {
		"type": "font/woff2",
		"etag": "\"1538-GoE9+rMXdldLs0MUbnyI6GfidCU\"",
		"mtime": "2026-07-26T09:30:15.399Z",
		"size": 5432,
		"path": "../public/assets/inter-greek-ext-600-normal-DRtmH8MT.woff2"
	},
	"/assets/inter-greek-ext-500-normal-C4iEst2y.woff2": {
		"type": "font/woff2",
		"etag": "\"1534-eUg1Jo5WjHY2xgQTOkilC7LKn3I\"",
		"mtime": "2026-07-26T09:30:15.393Z",
		"size": 5428,
		"path": "../public/assets/inter-greek-ext-500-normal-C4iEst2y.woff2"
	},
	"/assets/inter-greek-ext-600-normal-B8X0CLgF.woff": {
		"type": "font/woff",
		"etag": "\"1c2c-ceWCifetUVyF5uPKYdA318gl/j8\"",
		"mtime": "2026-07-26T09:30:15.396Z",
		"size": 7212,
		"path": "../public/assets/inter-greek-ext-600-normal-B8X0CLgF.woff"
	},
	"/assets/inter-latin-400-normal-C38fXH4l.woff2": {
		"type": "font/woff2",
		"etag": "\"5c70-aPZFxrb/EuJcVLE9TtEZ5jHcuyY\"",
		"mtime": "2026-07-26T09:30:15.401Z",
		"size": 23664,
		"path": "../public/assets/inter-latin-400-normal-C38fXH4l.woff2"
	},
	"/assets/inter-latin-400-normal-CyCys3Eg.woff": {
		"type": "font/woff",
		"etag": "\"77e8-SbvLwKxssThdk7eEO6Aafq1EDIA\"",
		"mtime": "2026-07-26T09:30:15.405Z",
		"size": 30696,
		"path": "../public/assets/inter-latin-400-normal-CyCys3Eg.woff"
	},
	"/assets/inter-latin-500-normal-BL9OpVg8.woff": {
		"type": "font/woff",
		"etag": "\"7a34-RiJoWDij89wbmUrQ9vApTdR9iMs\"",
		"mtime": "2026-07-26T09:30:15.408Z",
		"size": 31284,
		"path": "../public/assets/inter-latin-500-normal-BL9OpVg8.woff"
	},
	"/assets/inter-latin-500-normal-Cerq10X2.woff2": {
		"type": "font/woff2",
		"etag": "\"5ed0-a2bHQb+Lw84kivBLIFGmSKODkdY\"",
		"mtime": "2026-07-26T09:30:15.409Z",
		"size": 24272,
		"path": "../public/assets/inter-latin-500-normal-Cerq10X2.woff2"
	},
	"/assets/inter-latin-600-normal-LgqL8muc.woff2": {
		"type": "font/woff2",
		"etag": "\"5f84-4NYfbcUR1koHKy9NyU4VXs8btvY\"",
		"mtime": "2026-07-26T09:30:15.415Z",
		"size": 24452,
		"path": "../public/assets/inter-latin-600-normal-LgqL8muc.woff2"
	},
	"/assets/inter-latin-600-normal-CiBQ2DWP.woff": {
		"type": "font/woff",
		"etag": "\"7a1c-7yTNkhBBRpiqSdmpUeo8hP6GAv8\"",
		"mtime": "2026-07-26T09:30:15.412Z",
		"size": 31260,
		"path": "../public/assets/inter-latin-600-normal-CiBQ2DWP.woff"
	},
	"/assets/inter-latin-ext-400-normal-77YHD8bZ.woff": {
		"type": "font/woff",
		"etag": "\"b9c8-Bhja6T6VCwLwb1wadgBSy3MfJBM\"",
		"mtime": "2026-07-26T09:30:15.417Z",
		"size": 47560,
		"path": "../public/assets/inter-latin-ext-400-normal-77YHD8bZ.woff"
	},
	"/assets/inter-latin-ext-400-normal-C1nco2VV.woff2": {
		"type": "font/woff2",
		"etag": "\"88b8-G/H4NxekwCldh2+r75P8W7SzF98\"",
		"mtime": "2026-07-26T09:30:15.420Z",
		"size": 35e3,
		"path": "../public/assets/inter-latin-ext-400-normal-C1nco2VV.woff2"
	},
	"/assets/inter-latin-ext-500-normal-BxGbmqWO.woff": {
		"type": "font/woff",
		"etag": "\"bd6c-QCyyMz9w4NbwgJiEMxZozI/r+Ds\"",
		"mtime": "2026-07-26T09:30:15.425Z",
		"size": 48492,
		"path": "../public/assets/inter-latin-ext-500-normal-BxGbmqWO.woff"
	},
	"/assets/inter-latin-ext-500-normal-CV4jyFjo.woff2": {
		"type": "font/woff2",
		"etag": "\"8cb8-ncqRX/i2leXjDT1PI3s6qVpmf6g\"",
		"mtime": "2026-07-26T09:30:15.428Z",
		"size": 36024,
		"path": "../public/assets/inter-latin-ext-500-normal-CV4jyFjo.woff2"
	},
	"/assets/inter-latin-ext-600-normal-CIVaiw4L.woff": {
		"type": "font/woff",
		"etag": "\"be1c-8cD1HFH6FU9hlLytWwPGGUY70n4\"",
		"mtime": "2026-07-26T09:30:15.431Z",
		"size": 48668,
		"path": "../public/assets/inter-latin-ext-600-normal-CIVaiw4L.woff"
	},
	"/assets/inter-latin-ext-600-normal-D2bJ5OIk.woff2": {
		"type": "font/woff2",
		"etag": "\"8da4-7QGAEIYrxx26VfuVX2p4gRkHOKo\"",
		"mtime": "2026-07-26T09:30:15.434Z",
		"size": 36260,
		"path": "../public/assets/inter-latin-ext-600-normal-D2bJ5OIk.woff2"
	},
	"/assets/inter-vietnamese-400-normal-Bbgyi5SW.woff": {
		"type": "font/woff",
		"etag": "\"1964-Uz2qf+4P37GRYrj2tnfiNdz3cwc\"",
		"mtime": "2026-07-26T09:30:15.436Z",
		"size": 6500,
		"path": "../public/assets/inter-vietnamese-400-normal-Bbgyi5SW.woff"
	},
	"/assets/inter-vietnamese-400-normal-DMkecbls.woff2": {
		"type": "font/woff2",
		"etag": "\"136c-x5LSIOvtcMpNpAaXtHsgRr9Y068\"",
		"mtime": "2026-07-26T09:30:15.440Z",
		"size": 4972,
		"path": "../public/assets/inter-vietnamese-400-normal-DMkecbls.woff2"
	},
	"/assets/inter-vietnamese-500-normal-DOriooB6.woff2": {
		"type": "font/woff2",
		"etag": "\"13f8-CUM23jWJKM6nB7lsyh1fHy5MoZ4\"",
		"mtime": "2026-07-26T09:30:15.444Z",
		"size": 5112,
		"path": "../public/assets/inter-vietnamese-500-normal-DOriooB6.woff2"
	},
	"/assets/inter-vietnamese-500-normal-mJboJaSs.woff": {
		"type": "font/woff",
		"etag": "\"19c4-GIi0pWixVrurGnEPzcWNPRmQHPA\"",
		"mtime": "2026-07-26T09:30:15.447Z",
		"size": 6596,
		"path": "../public/assets/inter-vietnamese-500-normal-mJboJaSs.woff"
	},
	"/assets/inter-vietnamese-600-normal-BuLX-rYi.woff": {
		"type": "font/woff",
		"etag": "\"19f0-dZ/EhN2gqjVMAOO8T5PiEnOw62w\"",
		"mtime": "2026-07-26T09:30:15.450Z",
		"size": 6640,
		"path": "../public/assets/inter-vietnamese-600-normal-BuLX-rYi.woff"
	},
	"/assets/inter-vietnamese-600-normal-Cc8MFFhd.woff2": {
		"type": "font/woff2",
		"etag": "\"13ec-+Z5aj32FhioUUaW+56MD6v89VjU\"",
		"mtime": "2026-07-26T09:30:15.455Z",
		"size": 5100,
		"path": "../public/assets/inter-vietnamese-600-normal-Cc8MFFhd.woff2"
	},
	"/assets/DrawLayer-CX1Y7r9Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e-O57X1xXumI9qS3l5lfqn8A+ef+I\"",
		"mtime": "2026-07-26T09:30:15.066Z",
		"size": 334,
		"path": "../public/assets/DrawLayer-CX1Y7r9Y.js"
	},
	"/assets/Interactivity-D0R3KQib.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5fb-2TMoEW5i+KeOOiE/1oSVVvMUY8Q\"",
		"mtime": "2026-07-26T09:30:15.094Z",
		"size": 1531,
		"path": "../public/assets/Interactivity-D0R3KQib.js"
	},
	"/assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2": {
		"type": "font/woff2",
		"etag": "\"14d0-wP6+M+HGdr9/ksFVSvTe+I0Y0rI\"",
		"mtime": "2026-07-26T09:30:15.458Z",
		"size": 5328,
		"path": "../public/assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2"
	},
	"/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2": {
		"type": "font/woff2",
		"etag": "\"14ec-QTcY+/vMX0UPkoTgSddbaoRkEuY\"",
		"mtime": "2026-07-26T09:30:15.467Z",
		"size": 5356,
		"path": "../public/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2"
	},
	"/assets/jetbrains-mono-cyrillic-400-normal-ugxPyKxw.woff": {
		"type": "font/woff",
		"etag": "\"1b40-oGh4jaPe06qJnXZqmnfGfJQP4Ag\"",
		"mtime": "2026-07-26T09:30:15.461Z",
		"size": 6976,
		"path": "../public/assets/jetbrains-mono-cyrillic-400-normal-ugxPyKxw.woff"
	},
	"/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff": {
		"type": "font/woff",
		"etag": "\"1b70-ULliHx6NDb6WoprjCD9cN6A3H2M\"",
		"mtime": "2026-07-26T09:30:15.464Z",
		"size": 7024,
		"path": "../public/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff"
	},
	"/assets/jetbrains-mono-greek-400-normal-C190GLew.woff2": {
		"type": "font/woff2",
		"etag": "\"1084-bKcqPuNhRWWCQbsWLqSOoRkxv70\"",
		"mtime": "2026-07-26T09:30:15.475Z",
		"size": 4228,
		"path": "../public/assets/jetbrains-mono-greek-400-normal-C190GLew.woff2"
	},
	"/assets/jetbrains-mono-greek-400-normal-B9oWc5Lo.woff": {
		"type": "font/woff",
		"etag": "\"1620-uF5DPKyxthnzZIfm2hBQUEmcCDI\"",
		"mtime": "2026-07-26T09:30:15.472Z",
		"size": 5664,
		"path": "../public/assets/jetbrains-mono-greek-400-normal-B9oWc5Lo.woff"
	},
	"/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff": {
		"type": "font/woff",
		"etag": "\"1658-H/mjwdfS4m1yKQXgRUK+RKkuFfo\"",
		"mtime": "2026-07-26T09:30:15.479Z",
		"size": 5720,
		"path": "../public/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff"
	},
	"/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2": {
		"type": "font/woff2",
		"etag": "\"10bc-KUCG+hIKwoSOUbV7fpNmCS3FLvM\"",
		"mtime": "2026-07-26T09:30:15.482Z",
		"size": 4284,
		"path": "../public/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2"
	},
	"/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff": {
		"type": "font/woff",
		"etag": "\"6b68-PjVYVbMXaGEDnHrQQmycVNcGrEA\"",
		"mtime": "2026-07-26T09:30:15.484Z",
		"size": 27496,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff"
	},
	"/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2": {
		"type": "font/woff2",
		"etag": "\"52b0-OuYhUYIQ5ljyzsko4MOu3m0M7+I\"",
		"mtime": "2026-07-26T09:30:15.489Z",
		"size": 21168,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2"
	},
	"/assets/InteractivityPluginInstance-Yb-ByeMi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d52-FyDOLDhdNx3jhEKgRq/JdiqKii0\"",
		"mtime": "2026-07-26T09:30:15.100Z",
		"size": 7506,
		"path": "../public/assets/InteractivityPluginInstance-Yb-ByeMi.js"
	},
	"/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2": {
		"type": "font/woff2",
		"etag": "\"5548-NcKnK3WfWhmDT/Dd1/lKnL5VeGA\"",
		"mtime": "2026-07-26T09:30:15.492Z",
		"size": 21832,
		"path": "../public/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2"
	},
	"/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff": {
		"type": "font/woff",
		"etag": "\"6e30-1zAcLD7/opfpWjVLFZBVG0EzKds\"",
		"mtime": "2026-07-26T09:30:15.494Z",
		"size": 28208,
		"path": "../public/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff"
	},
	"/assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2": {
		"type": "font/woff2",
		"etag": "\"1ca8-sBWBn421OuV4ZHOZxHJjafE1huU\"",
		"mtime": "2026-07-26T09:30:15.496Z",
		"size": 7336,
		"path": "../public/assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2"
	},
	"/assets/jetbrains-mono-latin-ext-400-normal-fXTG6kC5.woff": {
		"type": "font/woff",
		"etag": "\"2790-MZORDuKd3VMoaYVXmW8yROWL9sY\"",
		"mtime": "2026-07-26T09:30:15.498Z",
		"size": 10128,
		"path": "../public/assets/jetbrains-mono-latin-ext-400-normal-fXTG6kC5.woff"
	},
	"/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2": {
		"type": "font/woff2",
		"etag": "\"1d68-vgxZ8wbhZM0rlqgWMhUKb0zsbWM\"",
		"mtime": "2026-07-26T09:30:15.501Z",
		"size": 7528,
		"path": "../public/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2"
	},
	"/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff": {
		"type": "font/woff",
		"etag": "\"2860-o0XUF4uBh1xmGSf1BGPgnX+rm+M\"",
		"mtime": "2026-07-26T09:30:15.506Z",
		"size": 10336,
		"path": "../public/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff"
	},
	"/assets/jetbrains-mono-vietnamese-400-normal-CqNFfHCs.woff": {
		"type": "font/woff",
		"etag": "\"14fc-wa8Pi/SxAFg9ve8x5GbO/sMJWEo\"",
		"mtime": "2026-07-26T09:30:15.509Z",
		"size": 5372,
		"path": "../public/assets/jetbrains-mono-vietnamese-400-normal-CqNFfHCs.woff"
	},
	"/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff": {
		"type": "font/woff",
		"etag": "\"1564-06JmuoIOvhZDwhIY/WiPtAooaNw\"",
		"mtime": "2026-07-26T09:30:15.511Z",
		"size": 5476,
		"path": "../public/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff"
	},
	"/assets/kontakt-DfPDYfSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c6c-mobVFGpFSypOEOYiqFmvsueoFCs\"",
		"mtime": "2026-07-26T09:30:15.247Z",
		"size": 11372,
		"path": "../public/assets/kontakt-DfPDYfSj.js"
	},
	"/assets/jsx-runtime-D8nDyRPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2210-qrBAUPDOR8ROKpBVNEla8AGnGKU\"",
		"mtime": "2026-07-26T09:30:15.232Z",
		"size": 8720,
		"path": "../public/assets/jsx-runtime-D8nDyRPw.js"
	},
	"/assets/LinkInstance-CQv8wRQu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ac5-q8qPdtObht635IIdQETQy1CxFRY\"",
		"mtime": "2026-07-26T09:30:15.108Z",
		"size": 2757,
		"path": "../public/assets/LinkInstance-CQv8wRQu.js"
	},
	"/assets/map-pin-Dp_PBB3L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"198-cRMJnTaCWY2XAPBU5plI0xm8aL4\"",
		"mtime": "2026-07-26T09:30:15.265Z",
		"size": 408,
		"path": "../public/assets/map-pin-Dp_PBB3L.js"
	},
	"/assets/MovePluginInstance-Vra8y6C1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f23-47wjmP1M3U7FkYypKRToS6xjwBU\"",
		"mtime": "2026-07-26T09:30:15.120Z",
		"size": 3875,
		"path": "../public/assets/MovePluginInstance-Vra8y6C1.js"
	},
	"/assets/OptionsUtils-DHe2W8AW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ce-FIAnaNb3ptKb2lgp3pKAXQlg+MY\"",
		"mtime": "2026-07-26T09:30:15.126Z",
		"size": 462,
		"path": "../public/assets/OptionsUtils-DHe2W8AW.js"
	},
	"/assets/OverlapPluginInstance-t9WEPF6L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b8-rjHmGuuzB7R3b/btdoKsL7BCFsA\"",
		"mtime": "2026-07-26T09:30:15.139Z",
		"size": 440,
		"path": "../public/assets/OverlapPluginInstance-t9WEPF6L.js"
	},
	"/assets/ParticleBackground-JW7vqOxT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6fd-1X4nraqeFpLeikJk0dALVtti2Hg\"",
		"mtime": "2026-07-26T09:30:15.149Z",
		"size": 1789,
		"path": "../public/assets/ParticleBackground-JW7vqOxT.js"
	},
	"/assets/Ranges-Cj44txce.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d08-ov2IUPv3WH78iKFda2j5I7JzuuQ\"",
		"mtime": "2026-07-26T09:30:15.166Z",
		"size": 3336,
		"path": "../public/assets/Ranges-Cj44txce.js"
	},
	"/assets/ParticlesCanvas-DG-33Egc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10adf-sFBMBArlc4tvosLLOGO2m3PCaIw\"",
		"mtime": "2026-07-26T09:30:15.155Z",
		"size": 68319,
		"path": "../public/assets/ParticlesCanvas-DG-33Egc.js"
	},
	"/assets/space-grotesk-latin-400-normal-BnQMeOim.woff": {
		"type": "font/woff",
		"etag": "\"426c-ghmNOmJRvnMHZL5v05+7tCgOuLs\"",
		"mtime": "2026-07-26T09:30:15.513Z",
		"size": 17004,
		"path": "../public/assets/space-grotesk-latin-400-normal-BnQMeOim.woff"
	},
	"/assets/space-grotesk-latin-500-normal-CNSSEhBt.woff": {
		"type": "font/woff",
		"etag": "\"425c-1Gf7i6aAUt1Fd7tGn4+HkNYVOw0\"",
		"mtime": "2026-07-26T09:30:15.520Z",
		"size": 16988,
		"path": "../public/assets/space-grotesk-latin-500-normal-CNSSEhBt.woff"
	},
	"/assets/space-grotesk-latin-400-normal-CJ-V5oYT.woff2": {
		"type": "font/woff2",
		"etag": "\"344c-4RfT7aFk3EnbF6Hh/aQS0Dwt6dI\"",
		"mtime": "2026-07-26T09:30:15.516Z",
		"size": 13388,
		"path": "../public/assets/space-grotesk-latin-400-normal-CJ-V5oYT.woff2"
	},
	"/assets/space-grotesk-latin-500-normal-lFbtlQH6.woff2": {
		"type": "font/woff2",
		"etag": "\"3400-3SdZBxxMFqhCiNds2b7VWFQknAo\"",
		"mtime": "2026-07-26T09:30:15.523Z",
		"size": 13312,
		"path": "../public/assets/space-grotesk-latin-500-normal-lFbtlQH6.woff2"
	},
	"/assets/space-grotesk-latin-600-normal-BflQw4A9.woff": {
		"type": "font/woff",
		"etag": "\"41f4-A1LHI2d4uZUcNIX0toiV/mWCn98\"",
		"mtime": "2026-07-26T09:30:15.526Z",
		"size": 16884,
		"path": "../public/assets/space-grotesk-latin-600-normal-BflQw4A9.woff"
	},
	"/assets/space-grotesk-latin-600-normal-DjKNqYRj.woff2": {
		"type": "font/woff2",
		"etag": "\"33e4-2jIlH+AsPyFgIaKwqDO5WYXfeQY\"",
		"mtime": "2026-07-26T09:30:15.532Z",
		"size": 13284,
		"path": "../public/assets/space-grotesk-latin-600-normal-DjKNqYRj.woff2"
	},
	"/assets/space-grotesk-latin-700-normal-CwsQ-cCU.woff": {
		"type": "font/woff",
		"etag": "\"4020-6+Lv6SyfClI9gHZHIfMCmlje8BE\"",
		"mtime": "2026-07-26T09:30:15.547Z",
		"size": 16416,
		"path": "../public/assets/space-grotesk-latin-700-normal-CwsQ-cCU.woff"
	},
	"/assets/space-grotesk-latin-ext-400-normal-CfP_5XZW.woff2": {
		"type": "font/woff2",
		"etag": "\"2fe0-c3xYOMmU2wqZgHAe410CnfS5OGE\"",
		"mtime": "2026-07-26T09:30:15.561Z",
		"size": 12256,
		"path": "../public/assets/space-grotesk-latin-ext-400-normal-CfP_5XZW.woff2"
	},
	"/assets/RotateDirection-D98JyAXx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7d-YNk4FZ1tzgTjwgl0J7rQ+SnxsIs\"",
		"mtime": "2026-07-26T09:30:15.173Z",
		"size": 125,
		"path": "../public/assets/RotateDirection-D98JyAXx.js"
	},
	"/assets/space-grotesk-latin-700-normal-RjhwGPKo.woff2": {
		"type": "font/woff2",
		"etag": "\"3228-CUaBya012LbSd7QFPXYy34srV9k\"",
		"mtime": "2026-07-26T09:30:15.555Z",
		"size": 12840,
		"path": "../public/assets/space-grotesk-latin-700-normal-RjhwGPKo.woff2"
	},
	"/assets/space-grotesk-latin-ext-400-normal-DRPE3kg4.woff": {
		"type": "font/woff",
		"etag": "\"4194-65sd2rUQ1RXSRzlf/UdsfnxLy8Q\"",
		"mtime": "2026-07-26T09:30:15.567Z",
		"size": 16788,
		"path": "../public/assets/space-grotesk-latin-ext-400-normal-DRPE3kg4.woff"
	},
	"/assets/space-grotesk-latin-ext-500-normal-3dgZTiw9.woff": {
		"type": "font/woff",
		"etag": "\"4194-lEc2+CK+OmFY8daY+Wm75LFagxg\"",
		"mtime": "2026-07-26T09:30:15.578Z",
		"size": 16788,
		"path": "../public/assets/space-grotesk-latin-ext-500-normal-3dgZTiw9.woff"
	},
	"/assets/routes-DRZGnlxv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"db61-f9Vf08f16x4lmIYzGMsomFlXQ4I\"",
		"mtime": "2026-07-26T09:30:15.283Z",
		"size": 56161,
		"path": "../public/assets/routes-DRZGnlxv.js"
	},
	"/assets/portfolio-DtPNXF0v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f6e-aLwoOewpol9asOAztD3066WTcGU\"",
		"mtime": "2026-07-26T09:30:15.271Z",
		"size": 24430,
		"path": "../public/assets/portfolio-DtPNXF0v.js"
	},
	"/assets/space-grotesk-latin-ext-500-normal-DUe3BAxM.woff2": {
		"type": "font/woff2",
		"etag": "\"2ff0-mtGWYEDYMf3fdjHjQ1RuTjmuuKI\"",
		"mtime": "2026-07-26T09:30:15.582Z",
		"size": 12272,
		"path": "../public/assets/space-grotesk-latin-ext-500-normal-DUe3BAxM.woff2"
	},
	"/assets/space-grotesk-latin-ext-600-normal-DxxdqCpr.woff2": {
		"type": "font/woff2",
		"etag": "\"3000-6K2CsKJNrxHeh6w0a0WeKzYg/RY\"",
		"mtime": "2026-07-26T09:30:15.587Z",
		"size": 12288,
		"path": "../public/assets/space-grotesk-latin-ext-600-normal-DxxdqCpr.woff2"
	},
	"/assets/space-grotesk-latin-ext-600-normal-VcznFIpX.woff": {
		"type": "font/woff",
		"etag": "\"4158-hXJ05iafhGTLOF1Sjuwds70aYJk\"",
		"mtime": "2026-07-26T09:30:15.592Z",
		"size": 16728,
		"path": "../public/assets/space-grotesk-latin-ext-600-normal-VcznFIpX.woff"
	},
	"/assets/space-grotesk-latin-ext-700-normal-BQnZhY3m.woff2": {
		"type": "font/woff2",
		"etag": "\"2ed8-TBMRoktioCogW6/NM520zKySXcU\"",
		"mtime": "2026-07-26T09:30:15.598Z",
		"size": 11992,
		"path": "../public/assets/space-grotesk-latin-ext-700-normal-BQnZhY3m.woff2"
	},
	"/assets/space-grotesk-latin-ext-700-normal-HVCqSBdx.woff": {
		"type": "font/woff",
		"etag": "\"404c-FfjgS7J3XUuOSTAwuPCMJSSAvt0\"",
		"mtime": "2026-07-26T09:30:15.605Z",
		"size": 16460,
		"path": "../public/assets/space-grotesk-latin-ext-700-normal-HVCqSBdx.woff"
	},
	"/assets/space-grotesk-vietnamese-400-normal-B7xT_GF5.woff2": {
		"type": "font/woff2",
		"etag": "\"10c8-1JGRw5hFjWC+pPUJ6csycnKgHxA\"",
		"mtime": "2026-07-26T09:30:15.609Z",
		"size": 4296,
		"path": "../public/assets/space-grotesk-vietnamese-400-normal-B7xT_GF5.woff2"
	},
	"/assets/space-grotesk-vietnamese-500-normal-BmEvtly_.woff2": {
		"type": "font/woff2",
		"etag": "\"10e4-UNTFOrnCmfOI7UspLiuWXm466zw\"",
		"mtime": "2026-07-26T09:30:15.620Z",
		"size": 4324,
		"path": "../public/assets/space-grotesk-vietnamese-500-normal-BmEvtly_.woff2"
	},
	"/assets/space-grotesk-vietnamese-400-normal-BIWiOVfw.woff": {
		"type": "font/woff",
		"etag": "\"1660-Gmat2y5b870gScU9KClIjJn3GqI\"",
		"mtime": "2026-07-26T09:30:15.612Z",
		"size": 5728,
		"path": "../public/assets/space-grotesk-vietnamese-400-normal-BIWiOVfw.woff"
	},
	"/assets/space-grotesk-vietnamese-500-normal-BTqKIpxg.woff": {
		"type": "font/woff",
		"etag": "\"1654-JlaMSeciVxCokGS+Dt+IN52KVoc\"",
		"mtime": "2026-07-26T09:30:15.615Z",
		"size": 5716,
		"path": "../public/assets/space-grotesk-vietnamese-500-normal-BTqKIpxg.woff"
	},
	"/assets/space-grotesk-vietnamese-600-normal-DUi7WF5p.woff2": {
		"type": "font/woff2",
		"etag": "\"10d8-zLY8xT+eAaR0b+FEszj/7T+CXbA\"",
		"mtime": "2026-07-26T09:30:15.628Z",
		"size": 4312,
		"path": "../public/assets/space-grotesk-vietnamese-600-normal-DUi7WF5p.woff2"
	},
	"/assets/space-grotesk-vietnamese-600-normal-D6zpsUhD.woff": {
		"type": "font/woff",
		"etag": "\"1648-U831D1UvvnP2XK3oeBMahBZ6uAA\"",
		"mtime": "2026-07-26T09:30:15.624Z",
		"size": 5704,
		"path": "../public/assets/space-grotesk-vietnamese-600-normal-D6zpsUhD.woff"
	},
	"/assets/space-grotesk-vietnamese-700-normal-DMty7AZE.woff2": {
		"type": "font/woff2",
		"etag": "\"106c-OvrbrxRBqhaoWMfcV7ZXQfDd/bQ\"",
		"mtime": "2026-07-26T09:30:15.632Z",
		"size": 4204,
		"path": "../public/assets/space-grotesk-vietnamese-700-normal-DMty7AZE.woff2"
	},
	"/assets/space-grotesk-vietnamese-700-normal-Duxec5Rn.woff": {
		"type": "font/woff",
		"etag": "\"15d4-G/yewNcLknFzx6or6nPJYti8zRg\"",
		"mtime": "2026-07-26T09:30:15.636Z",
		"size": 5588,
		"path": "../public/assets/space-grotesk-vietnamese-700-normal-Duxec5Rn.woff"
	},
	"/assets/styles-CcpWLyNc.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19fc5-at6S3F6UnYWqUQcjwUTjmJVkYFE\"",
		"mtime": "2026-07-26T09:30:15.641Z",
		"size": 106437,
		"path": "../public/assets/styles-CcpWLyNc.css"
	},
	"/assets/triangle-alert-CUk9CGiQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"260-9I4nRwjSg9Z9hv9EipxOJx41cAg\"",
		"mtime": "2026-07-26T09:30:15.297Z",
		"size": 608,
		"path": "../public/assets/triangle-alert-CUk9CGiQ.js"
	},
	"/images/AI-OS/temp_image_1783206019551.png": {
		"type": "image/png",
		"etag": "\"78b8d-6i9Q1Kn5ts9JD7r+HOfqhxPiPyM\"",
		"mtime": "2026-07-04T23:00:19.552Z",
		"size": 494477,
		"path": "../public/images/AI-OS/temp_image_1783206019551.png"
	},
	"/images/AI-OS/temp_image_1783206156456.png": {
		"type": "image/png",
		"etag": "\"4aa92-yXsAStfYhpX2ea69Gdczx8kYM+g\"",
		"mtime": "2026-07-04T23:02:36.458Z",
		"size": 305810,
		"path": "../public/images/AI-OS/temp_image_1783206156456.png"
	},
	"/images/BDS-Navigator/temp_image_1783206188233.png": {
		"type": "image/png",
		"etag": "\"73d45-fWsBG6YAhKit+wvd1T7B8zhClFY\"",
		"mtime": "2026-07-04T23:03:08.238Z",
		"size": 474437,
		"path": "../public/images/BDS-Navigator/temp_image_1783206188233.png"
	},
	"/images/AI-OS/temp_image_1783206113009.png": {
		"type": "image/png",
		"etag": "\"da5d4-wxN1Ey2JNeyYUH8POUJ9muULE/E\"",
		"mtime": "2026-07-04T23:01:53.018Z",
		"size": 894420,
		"path": "../public/images/AI-OS/temp_image_1783206113009.png"
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
	"/images/AI-OS/68a07710-9bd3-4285-af62-53efa9849800.png": {
		"type": "image/png",
		"etag": "\"1d21b5-793WLAUPqW2G/ySVfeau0IaqiuE\"",
		"mtime": "2026-07-05T00:37:45.403Z",
		"size": 1909173,
		"path": "../public/images/AI-OS/68a07710-9bd3-4285-af62-53efa9849800.png"
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
//#region node_modules/nitro/dist/runtime/internal/plugin.mjs
function defineNitroPlugin(def) {
	return def;
}
//#endregion
//#region src/lib/ai-news.ts
var AI_NEWS_KV_KEY = "latest";
var MAX_ITEMS_PER_CATEGORY = 10;
var CATEGORY_MATCHERS = [
	["security", /securit|vulnerab|exploit|breach|malware|phishing|jailbreak|prompt.?injection|cyber|zero.?day|hacked|attack/i],
	["agentic", /agent|autonom|\bmcp\b|tool.?call|langgraph|langchain|crewai|orchestr|copilot|claude code|codex|multi.?step/i],
	["gpu", /\bgpu(s)?\b|\bh100\b|\bh200\b|\ba100\b|\bb200\b|nvidia|compute.?rental|gpu.?cloud|gpu.?cluster|gpu.?marketplace|rent.*gpu|gpu.*rent|vast\.ai|runpod|lambda labs|coreweave|datacenter.?compute|data.?center gpu/i],
	["webllm", /webllm|web.?assembly|\bwasm\b|webgpu|webnn|transformers\.js|onnx.?(web|runtime)|in.?browser (llm|inference|model)|browser.?based (llm|inference)|client.?side (llm|inference)/i],
	["llm", /\bllm\b|\bgpt|claude|gemini|llama|mistral|deepseek|qwen|open.?ai|anthropic|model|transformer|inference|chatbot|benchmark|fine.?tun|reasoning/i]
];
function categorize(title) {
	for (const [category, pattern] of CATEGORY_MATCHERS) if (pattern.test(title)) return category;
	return "business";
}
function decodeXmlEntities(value) {
	return value.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#0?39;/g, "'").replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code))).replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCodePoint(parseInt(code, 16))).replace(/&amp;/g, "&");
}
function extractTag(block, tag) {
	const match = block.match(new RegExp(`<${tag}[^>]*>(?:\\s*<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>\\s*)?</${tag}>`));
	return match ? decodeXmlEntities(match[1].trim()) : null;
}
function toIsoDate(value) {
	if (value) {
		const date = new Date(value);
		if (!Number.isNaN(date.getTime())) return date.toISOString();
	}
	return (/* @__PURE__ */ new Date()).toISOString();
}
async function fetchHackerNews() {
	const since = Math.floor(Date.now() / 1e3) - 72 * 3600;
	const queries = [
		"AI",
		"LLM",
		"AI agent",
		"AI security",
		"prompt injection",
		"GPU rental",
		"GPU cloud",
		"rent GPU",
		"WebLLM",
		"WebAssembly AI",
		"WebGPU"
	];
	const items = [];
	const seen = /* @__PURE__ */ new Set();
	for (const query of queries) {
		const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=25&numericFilters=${encodeURIComponent(`created_at_i>${since}`)}`;
		const response = await fetch(url);
		if (!response.ok) continue;
		const data = await response.json();
		for (const hit of data.hits ?? []) {
			if (!hit.title || (hit.points ?? 0) < 10) continue;
			const link = hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`;
			if (seen.has(link)) continue;
			seen.add(link);
			items.push({
				title: hit.title,
				url: link,
				source: "Hacker News",
				publishedAt: toIsoDate(hit.created_at),
				category: categorize(hit.title)
			});
		}
	}
	return items;
}
async function fetchFeed(feedUrl, source) {
	const response = await fetch(feedUrl, { headers: { "user-agent": "vuxuantiep.de ai-news bot" } });
	if (!response.ok) return [];
	const blocks = (await response.text()).match(/<(?:item|entry)[\s>][\s\S]*?<\/(?:item|entry)>/g) ?? [];
	const items = [];
	for (const block of blocks.slice(0, 20)) {
		const title = extractTag(block, "title");
		if (!title) continue;
		let link = extractTag(block, "link");
		if (!link) {
			const href = block.match(/<link[^>]*href="([^"]+)"/);
			link = href ? decodeXmlEntities(href[1]) : null;
		}
		if (!link || !/^https?:\/\//.test(link)) continue;
		const published = extractTag(block, "pubDate") ?? extractTag(block, "published") ?? extractTag(block, "updated");
		items.push({
			title,
			url: link,
			source,
			publishedAt: toIsoDate(published),
			category: categorize(title)
		});
	}
	return items;
}
async function scrapeAiNews() {
	const all = (await Promise.allSettled([
		fetchHackerNews(),
		fetchFeed("https://techcrunch.com/category/artificial-intelligence/feed/", "TechCrunch"),
		fetchFeed("https://www.theverge.com/rss/ai-artificial-intelligence/index.xml", "The Verge")
	])).flatMap((result) => result.status === "fulfilled" ? result.value : []);
	const seenTitles = /* @__PURE__ */ new Set();
	const deduped = all.filter((item) => {
		const key = item.title.toLowerCase().replace(/\W+/g, " ").trim();
		if (seenTitles.has(key)) return false;
		seenTitles.add(key);
		return true;
	});
	deduped.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
	const perCategory = /* @__PURE__ */ new Map();
	const items = deduped.filter((item) => {
		const count = perCategory.get(item.category) ?? 0;
		if (count >= MAX_ITEMS_PER_CATEGORY) return false;
		perCategory.set(item.category, count + 1);
		return true;
	});
	return {
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		items
	};
}
async function refreshAiNews(kv) {
	const payload = await scrapeAiNews();
	if (payload.items.length > 0) await kv.put(AI_NEWS_KV_KEY, JSON.stringify(payload));
	return payload;
}
//#endregion
//#region #nitro/virtual/plugins
var plugins = [defineNitroPlugin((nitro) => {
	nitro.hooks.hook("cloudflare:scheduled", ((payload) => {
		const kv = payload.env?.AI_NEWS;
		if (!kv) {
			console.error("ai-news-cron: AI_NEWS KV binding missing");
			return;
		}
		const run = refreshAiNews(kv).then((result) => console.log(`ai-news-cron: stored ${result.items.length} items`)).catch((error) => console.error("ai-news-cron: refresh failed", error));
		payload.context?.waitUntil(run);
	}));
})];
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const hooks = new HookableCore();
	const captureError = (error, errorCtx) => {
		const promise = hooks.callHook("error", error, errorCtx)?.catch?.((hookError) => {
			console.error("Error while capturing another error", hookError);
		});
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
			if (promise && typeof errorCtx.event.req.waitUntil === "function") errorCtx.event.req.waitUntil(promise);
		}
	};
	const h3App = createH3App({ onError(error, event) {
		captureError(error, { event });
		return error_handler_default(error, event);
	} });
	h3App.config.onRequest = (event) => {
		return hooks.callHook("request", event)?.catch?.((error) => {
			captureError(error, {
				event,
				tags: ["request"]
			});
		});
	};
	h3App.config.onResponse = (res, event) => {
		return hooks.callHook("response", res, event)?.catch?.((error) => {
			captureError(error, {
				event,
				tags: ["response"]
			});
		});
	};
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks,
		captureError
	};
}
function initNitroPlugins(app) {
	for (const plugin of plugins) try {
		plugin(app);
	} catch (error) {
		app.captureError?.(error, { tags: ["plugin"] });
		throw error;
	}
	return app;
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
	initNitroPlugins(instance);
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
