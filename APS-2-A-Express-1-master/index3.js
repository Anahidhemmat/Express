const express = require("express");
const app = express();

app.use((req, res) => {
  //   console.dir(req);
  //   console.dir(res.send);

  res.send("<h1>HEY , I got your req , this is your res</h1>");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
