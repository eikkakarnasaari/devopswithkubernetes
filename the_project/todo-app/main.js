const options = {
  port: Number(Deno.env.get("PORT") ?? "8080"),
  onListen({ _hostname, port }) {
    console.log(`Server started in port ${port}`);
  },
};

Deno.serve(options, (_req) => {
  return new Response("Hello, World!");
});
