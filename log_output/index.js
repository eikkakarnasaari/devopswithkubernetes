import { Application, Router } from "@oak/oak";

const router = new Router();
const port = Number(Deno.env.get("PORT") || 3000);

const hash = crypto.randomUUID();
let currentStr = "";

const printHash = () => {
    const timestamp = new Date().toISOString();
    currentStr = `${timestamp}: ${hash}`;
    console.log(currentStr);
};

setInterval(printHash, 5000);

router.get("/", (ctx) => {
  ctx.response.body = "Hello world";
});

router.get("/status", (ctx) => {
    ctx.response.body = currentStr;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// console.log(`Server started in port ${port}`)

await app.listen({port});
