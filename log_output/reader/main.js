import { Hono } from "@hono/hono";

const port = Number(Deno.env.get("PORT") ?? "3000");
const app = new Hono()

app.get("/log", async (c) => {
  let text;
  try {
    text = await Deno.readTextFile("/app/files/log.txt");
  } catch (_error) {
    text = "";
  }
  return c.text(text);
});

Deno.serve({ port }, app.fetch);
