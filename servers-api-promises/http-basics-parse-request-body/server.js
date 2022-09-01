const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const http = require("http");

server = http.createServer((req, res) => {
  // log the request method and url
  console.log(`${req.method} ${req.url}`);

  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    parseBody(body);
    sendFormPage(req, res);
  });
});

server.listen(5000, () => {
  console.log("Successfully started the server on port 5000");
});

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
