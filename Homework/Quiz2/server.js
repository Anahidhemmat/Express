const express = require("express");

const app = express();

const PORT = 5000;

app.get("/chocolate", (req, res) => {
  res.send(`<h1>Chocolate Page</h1>
  <p>Amount of chocolate that u want => ${req.query.amount}
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
