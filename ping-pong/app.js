import { Hono } from "@hono/hono";

const app = new Hono()

let count = 0;

app.get("/pingpong", (c) => {
  return c.text(`pong ${count++}`);
});

export default app;
