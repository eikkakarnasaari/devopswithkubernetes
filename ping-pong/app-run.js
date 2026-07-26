import app from "./app.js";

const port = Number(Deno.env.get("PORT") ?? "3001");

Deno.serve({ port }, app.fetch);
