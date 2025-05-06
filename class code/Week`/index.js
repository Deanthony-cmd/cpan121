import http from "node:http";

const server = http.createServer((req, res) => {
    console.log(req)
    if (req.url == "/"){res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
      data: "Hello About",}));
  
    res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
      data: "Hello World!",
    })
  );
}});

server.listen(8000);