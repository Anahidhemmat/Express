const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>this is the home page</h1>");
});

app.get("/r/:something", (req, res) => {
  const { something } = req.params;
  res.send(`send from ${something}`);
});

app.get("/r/:something/:id", (req, res) => {
  console.log(req.params);
  const { something, id } = req.params;
  res.send(`send from ${something} with this id: ${id}`);
});

app.listen(8080, () => {
  console.log("listening to port 8080");
});
