import { Hono } from "@hono/hono";

const port = Number(Deno.env.get("PORT") ?? "3000");
const app = new Hono()

app.get("/log", async (c) => {
  let text;
  try {
    const log = await Deno.readTextFile("/app/files/log.txt");
    const count = await Deno.readTextFile("/app/files/count.txt");
    text = `${log}Ping / Pongs: ${count}`;
  } catch (_error) {
    text = "";
  }
  return c.text(text);
});

Deno.serve({ port }, app.fetch);
