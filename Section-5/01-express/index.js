const express = require("express");
const fs = require("node:fs");

const app = express();
const PORT = 8000;

// middleware- to log all the request
app.use((req, res, next) => {
  const method = req.method;
  const path = req.url;

  const log = `\n[${Date.now()}] : ${method} ${path}`;
  fs.appendFileSync("log.txt", log, "utf-8");

  next(); // zaroori hai, warna request atak jaayegi
});

app.get("/", function (req, res) {
  res.end("Homepage");
});
app.get("/contact-us", function (req, res) {
  res.end("You can contact me at rohanrai@gmail.com");
});
app.get("/tweets", function (req, res) {
  res.end("Here are your tweets");
});

app.post("/tweets", (req, res) => {
  res.status(201).end("Tweet created successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
