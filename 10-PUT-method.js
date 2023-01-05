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

//! GET METHOD - To retrieve
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//! POST METHOD - To add
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

//! PUT Method -To Update/modify
// app.put("/api/people/:id", (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   console.log(id, name);
//   res.send("hello world");
// });

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}...`);
});
