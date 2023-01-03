const express = require("express");
const app = express();
const port = 5000;

//get retrieves resourcs
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/about", (req, res) => {
  console.log("this is the about page");
  res.status(200).send("This is is the about page");
});

// * handles all http vers
app.all("*", (req, res) => {
  res.status(404).send("<h2>Thanks but that is a wrong url </h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Methods
//************************************** */
//app.listen
//app.get
//app.POST
//app.PUT
//app.DELETE
