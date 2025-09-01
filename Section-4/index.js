const http = require("node:http");

const server = http.createServer(function (req, res) {
  console.log(`I got an incoming request`);
  // all the Db code here
  res.writeHead(200, { "content-Type": "application/json" });
  res.end("Thanks for visitng my server");
});

server.listen(8000, function () {
  console.log(`Server listening on port: 8000`);
});
