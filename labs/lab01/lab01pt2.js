import http from "http";
import fs from "fs"; // Read n Use files/folders

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello World!");
  } else if (req.url === "/about") {
    res.end("Hello from about!!");
  } else if (req.url === "/contact") {
    const data = fs.readFileSync("./html/contact.html");
    res.end(data);
  } else if (req.url === "/methods") {
    if (req.method == "GET") {
      res.end("Hello to the get method");
    } else if ((req.method = "POST")) {
      res.end("Hello to the post method");
    } else if ((req.method = "PUT")) {
      res.end("Hello to the Put method");
    }
  } else {
    res.end("404 page not found");
  }
});

server.listen(8000, () => {
  console.log(`http://localhost:8000`);
});
