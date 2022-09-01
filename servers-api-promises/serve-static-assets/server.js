const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // set up assets as a static folder
  let subString = req.url.startsWith("/static");

  if (subString) {
    let fileType = req.url.substring(1).split(".")[1];
    let file = req.url.split("/")[3];
    if (fileType === "css") {
      res.setHeader("Content-Type", "text/css");
      console.log(`/assets/css/${file}`);
      return res.end(fs.readFileSync(`/assets/css/${file}`));
    } else if (fileType === "jpg") {
      res.setHeader("Content-Type", "image/jpeg");
      console.log(`./assets/images/${file}`);
      return res.end(fs.readFileSync(`/assets/images/${file}`));
    }

    res.statusCode = 200;
    return res.end(file.toString());
  }

  let index = fs.readFileSync("index.html");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(index);
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
