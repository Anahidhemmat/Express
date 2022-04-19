const express = require("express");
const app = express();

// app.use(() => {
//   console.log("HELLO WORLD!!!");
// });

// app.use((request, response) => {
//   // console.log(request);
//   console.log(response.send);
//   response.send("<i>this is your response</i>");
// });

app.get("/", (req, res) => {
  res.send("<h1>this is your homepage</h1>");
});

app.get("/cat", (req, res) => {
  res.send("<h1> MEOW ! 😳 </h1>");
});

app.get("/cat/grey", (req, res) => {
  res.send("<h1> GREY CAT: MEOW ! 😳 </h1>");
});

app.get("/dog", (req, res) => {
  res.send("<h6>WOOF! 💖</h6>");
});

app.post("/dog", (req, res) => {
  res.send("This is coming from POST: /dog");
});

app.post("/cat", (req, res) => {
  res.send("<h1> this is coming from POST:  MEOW ! 😳 </h1>");
});

app.get("/r/:par/:team/:player/:num", (req, res) => {
  const { par } = req.params;
  //   console.log(req.params);
  res.send(`you searched for: ${par}`);
});

app.get("/search", (req, res) => {
  //   const q = req.query.q;
  const { q } = req.query;
  console.log(req.query);
  res.send(`you searched for: ${q}`);
});

app.get("/newSearch", (req, res) => {
  const { q, query } = req.query;
  console.log(req.query);
  res.send(`you searched for: ${q} with query of: ${query}`);
});

app.get("*", (req, res) => {
  res.send("page not found");
});

const PORT = 6633;
app.listen(PORT, () => {
  //   console.dir(express);
  console.log(`your server is running on port: ${PORT}`);
});
