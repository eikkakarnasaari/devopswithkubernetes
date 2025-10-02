import { Application, Router } from "@oak/oak";

const router = new Router();
const port = Number(Deno.env.get("PORT") || 3000);

router.get("/", (ctx) => {
  ctx.response.headers.set("Content-Type", "text/html");
  ctx.response.body = "Hello world";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server started in port ${port}`)
app.listen({port});