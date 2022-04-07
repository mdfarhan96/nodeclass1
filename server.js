const express = require("express");
const server = express();
const middleware1 = (req, res, next) => {
  console.log("this is middleware");
  next();
};
server.use(middleware1);
server.get("/", (req, res) => {
  res.send("<h2>hello</h2>");
});
server.listen(3001, () => {
  console.log("server is running at port 3001");
});
