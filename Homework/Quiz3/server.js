const express = require("express");

const app = express();

const PORT = "4000";

app.get("/multiply", (req, res) => {
  const value1 = req.query.value1;
  const value2 = req.query.value2;

  res.send(`<h1>Values multiply => ${value1 * value2}</h1>`);
});
app.listen(PORT, () => {
  console.log(`Server is runnig on port: ${PORT}`);
});
