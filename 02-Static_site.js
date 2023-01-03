const express = require("express");
const path = require("path");
const app = express();
const port = 2000;

// setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

app.all("*", (req, res) => {
  res.status(404).send("This is is not a valid page");
});

app.listen(2000, () => {
  console.log(`Server is listening on port ${port}`);
});
