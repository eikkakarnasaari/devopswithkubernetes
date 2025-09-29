const crypto = require("crypto");
const hash = crypto.randomUUID();

const printHash = () => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${hash}`);
};


setInterval(printHash, 5000);
