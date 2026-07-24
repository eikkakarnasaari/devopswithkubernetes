import { Hono } from "@hono/hono";

const app = new Hono();

app.get("/", (c) => {
  return c.html(`
  <!DOCTYPE html>
    <html>
      <head>
        <title>DevOps with Kubernetes</title>
      </head>
       <body>
         <h1>Todo app</h1>
       </body>
      </html>
    `);
});

const options = {
  port: Number(Deno.env.get("PORT") ?? "8080"),
  onListen({ _hostname, port }) {
    console.log(`Server started in port ${port}`);
  },
};

Deno.serve(options, app.fetch);
