export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["download.pdf","favicon.png","robots.txt"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.B2fdI9px.js","app":"_app/immutable/entry/app.CiI7skd9.js","imports":["_app/immutable/entry/start.B2fdI9px.js","_app/immutable/chunks/entry.BOWyK881.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CiI7skd9.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DqvjY6gf.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/forcastDetails",
				pattern: /^\/forcastDetails\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
