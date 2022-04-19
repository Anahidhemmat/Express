const express = require("express");
const server = express();

server.get("/chocolate", (req, res) => {
  console.log(req.query);
  const { amount } = req.query;

  res.send(`you want ${amount} of chocolate${Number(amount) > 1 ? "s" : ""}`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
