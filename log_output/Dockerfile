# https://docs.deno.com/runtime/reference/docker/
FROM denoland/deno:alpine

WORKDIR /app

# Copy manifests first so the dependency install layer caches across
# source-only edits
COPY deno.json deno.lock package.json* ./
RUN deno ci --prod --skip-types

# Then copy the rest of the source
COPY . .

CMD ["deno", "run", "--allow-net", "main.js"]
