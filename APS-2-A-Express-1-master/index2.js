const express = require("express");
const app = express();

// the use method takes a callback function. this function will be invoked whenever we hit to server port.
app.use(() => {
  console.log("GOT THE RESPONSE!!");
});

app.listen(9608, () => {
  console.log("server is running on port 9608");
});
