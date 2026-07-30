const uuid = crypto.randomUUID();

const outputString = async () => {
  const timestamp = new Date().toISOString();
  const content = `${timestamp}: ${uuid}\n`;
  console.log(content);
  await Deno.writeTextFile("/app/files/log.txt", content /* , { append: true } */);
  setTimeout(outputString, 5000);
};

setTimeout(outputString, 5000);
