const outputHash = () => {
  const uuid = crypto.randomUUID();
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${uuid}`);
  setTimeout(outputHash, 5000);
};

setTimeout(outputHash, 5000);
