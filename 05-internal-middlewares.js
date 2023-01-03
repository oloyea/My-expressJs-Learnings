// Middlewares
const logger = require("./logger-middleware");
const authorize = require("./04-authorize");
const express = require("express");
const app = express();
const port = 5000;

//req => middleware => res
//! app.use("/api", logger); // use() helps stop repetition (Docs).
//as per above, logger will be applied to any path after /api

// to use multiple middleware, they need to be passed as an array or data.
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}...`);
});
