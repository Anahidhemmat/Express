const express = require("express");

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// app.use(logger);

// app.get("/", (req, res) => {
//   console.log("here");
//   //   res.send("<h1>Hi Baby</h1>");
//   //   res.sendStatus(500);
//   //   res.status(500).send("Hi");
//   //   res.json({ message: "Eroor" });
//   //   res.download("server.js");
//   res.render("index", { text: "Worldd" });
// });

const userRouters = require("./routes/users.js");

app.use("/users", userRouters);

// function logger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }

app.listen(3005);
