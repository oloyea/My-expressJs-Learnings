// Methods

const express = require("express");
const app = express();
const port = 5000;
let { people } = require("./data");

// Read:  Get - Browser default method

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}...`);
});
