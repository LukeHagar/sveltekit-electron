const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.972c3fc2.js","app":"_app/immutable/entry/app.db385fd8.js","imports":["_app/immutable/entry/start.972c3fc2.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/singletons.13d7fb5f.js","_app/immutable/chunks/index.14349a18.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.db385fd8.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.200976ee.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-a54bfeef.js')),
			__memo(() => import('./chunks/1-5db98e8e.js')),
			__memo(() => import('./chunks/4-45ccd4e8.js'))
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/","/about","/sverdle/how-to-play"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
