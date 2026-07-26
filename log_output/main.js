import { Hono } from "@hono/hono";

const uuid = crypto.randomUUID();
const port = Number(Deno.env.get("PORT") ?? "3000");
const app = new Hono()

app.get("/log", (c) => {
  const timestamp = new Date().toISOString();
  return c.text(`${timestamp}: ${uuid}`);
});

const outputString = () => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${uuid}`);
  setTimeout(outputString, 5000);
};

setTimeout(outputString, 5000);

Deno.serve({ port }, app.fetch);
