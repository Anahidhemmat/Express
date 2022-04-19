const express = require("express");

const app = express();

// console.log(app);

const PORT = 6500;

// we can listen for a specific port like this
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
