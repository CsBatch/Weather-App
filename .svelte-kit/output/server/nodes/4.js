import * as server from '../entries/pages/forcastDetails/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/forcastDetails/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/forcastDetails/+page.server.js";
export const imports = ["_app/immutable/nodes/4.EQjdxmkW.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DqvjY6gf.js"];
export const stylesheets = ["_app/immutable/assets/4.CilxRXEd.css"];
export const fonts = [];
