const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User List");
});

router.get("/new", (req, res) => {
  //   res.send("User New Form");
  res.render("users/new");
});

router.post("/", (req, res) => {
  //   res.send("Create User");
  //   console.log(req.body.firstName);
  //   res.send("Hi");

  const isValid = false;
  if (isValid) {
    users.push({ name: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

// chaining routers
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    req.params.id;
    res.send(`Get the user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    req.params.id;
    res.send(`Get the user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    req.params.id;
    res.send(`Get the user with ID ${req.params.id}`);
  });
router.get("/:id", (req, res) => {
  req.params.id;
  res.send(`Get the user with ID ${req.params.id}`);
});

const users = [{ name: "Nana" }, { name: "Bacho" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
