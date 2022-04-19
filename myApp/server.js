const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  console.log("here");
  //   res.send("<h1>Hi Baby</h1>");
  //   res.sendStatus(500);
  //   res.status(500).send("Hi");
  //   res.json({ message: "Eroor" });
  //   res.download("server.js");
  res.render("index");
});
app.listen(3000);
