// Methods

const express = require("express");
const app = express();
const port = 5000;

const people = require("./routes/people");
const auth = require("./routes/auth");

//! Middlewares
// static assets(express middleware)
app.use(express.static("./methods-public"));

//parse form data - urlEncoded
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

app.use("/api/people", people);

app.use("/login", auth);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}...`);
});
