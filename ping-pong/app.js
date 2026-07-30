import { Hono } from "@hono/hono";

const app = new Hono()

let count = 0;

app.get("/pingpong", async (c) => {
  count++;
  await Deno.writeTextFile("/app/files/count.txt", count + "\n");
  return c.text(`pong ${count}`);
});

export default app;
