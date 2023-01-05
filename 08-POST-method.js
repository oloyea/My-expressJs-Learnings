// Methods

const express = require("express");
const app = express();
const port = 5000;
let { people } = require("./data");

//! Middlewares
// static assets(express middleware)
app.use(express.static("./methods-public"));
//parse form data - urlEncoded
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//! POST METHOD
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] }); // TODO: refresh on spread operators
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  //   console.log(req.body);
  res.status(401).send("Please provide Credentials");
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}...`);
});
