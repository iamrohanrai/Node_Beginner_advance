const fs = require("node:fs");

function loggerMiddleware(req, res, next) {
  const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
  fs.appendFileSync("log.txt", log, "utf-8");
  next();
}

function customMiddleware(req, res, next) {
  console.log(`I am a custom middleware`);
  next();
}

module.exports = { loggerMiddleware, customMiddleware };
