const express = require("express");
const app = express();

// this has no response but we wanted to show the query in the req object. just request this url:  http://localhost:4567/search?name=benyamin&fname=nayudi
// app.get("/search", (req, res) => {
//   console.log(req.query);
// });

app.get("/search", (req, res) => {
  console.log(req.query);

  const { q } = req.query;

  console.log(q);
  res.send(`<h1>you searched for : ${q}</h1>`);
});

app.get("/newSearch", (req, res) => {
  const { q, friends } = req.query;

  res.send(
    `<h1>you searched for : ${q} and your next query is : ${friends}</h1>`
  );
});

app.get("/nextSearch", (req, res) => {
  const { q } = req.query;

  if (!q) {
    res.send("no query , no result");
  }

  res.send(`<h2>you searched for : ${q}</h2>`);
});

app.listen(4567, () => {
  console.log(`Listening PORT 4567`);
});
