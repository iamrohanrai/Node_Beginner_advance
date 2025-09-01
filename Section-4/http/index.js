const http = require("node:http");

const server = http.createServer(function (req, res) {
  console.log(`I got the incoming req [${Date.now()}]`);

  //   console.log(req.headers);
  console.log(req.method);

  //   console.log(req.url);
  switch (req.url) {
    case "/":
      res.writeHead(201);
      return res.end("Homepage");
    case "/contact":
      res.writeHead(201);
      return res.end("contact page");

    case "/about":
      res.writeHead(201);
      return res.end("about page");
    default:
      res.writeHead(404);
      res.end("you are lost");
  }

  //
});

server.listen(8000, () => {
  console.log(`Server is running on port: 8000`);
});
