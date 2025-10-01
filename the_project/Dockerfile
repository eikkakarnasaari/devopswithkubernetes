FROM denoland/deno:alpine

WORKDIR /app

COPY deno.json .

RUN DENO_FUTURE=1 deno install

COPY . .

CMD ["run", "--allow-env", "--allow-net", "index.js"]