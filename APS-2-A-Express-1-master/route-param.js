const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>home page <a href="/api/products">products page</a></h1>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.send("product does not exits");
  }
  res.json(singleProduct);
});

// /////////////////////////
// /////////////////////////
// /////////////////////////

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  res.json(sortedProducts);
});

// /////////////////////
// /////////////////////
// /////////////////////
app.listen(8080, () => {
  console.log("server is running on port 8080");
});
