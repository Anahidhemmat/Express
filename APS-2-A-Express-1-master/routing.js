const express = require("express");
const app = express();

// we can make routes with the get method of the app object. we define a route and a callback function. then we send the response for that specific route ❤
app.get("/", (req, res) => {
  res.send("<h1>this is home page</h1>");
});

app.get("/cat", (req, res) => {
  res.send("<h1> MEOW ! 😳 </h1>");
});
// if there were two similar routes , the first match will render
// app.get("/cat", (req, res) => {
//   res.send("<h1>coming from here</h1>");
// });

app.post("/cat", (req, res) => {
  res.send("<h1>coming from POST : MEOW!</h1>");
});

app.get("/dog", (req, res) => {
  res.send("<h6>WOOF! 💖</h6>");
});

app.post("/dog", (req, res) => {
  res.send("<h1>coming from POST: WOOF!</h1>");
});

// this is when there is no such route in your routes (not found page)
app.get("*", (req, res) => {
  res.send("page not found");
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
