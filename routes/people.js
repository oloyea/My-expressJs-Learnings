const express = require("express");
const router = express.Router();

let { people } = require("../data");
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

//! GET METHOD - To retrieve
router.get("/", getPeople);

//! POST METHOD - To add
router.post("/", createPerson);

router.post("/postman", createPersonPostman);

//! PUT Method -To Update/modify
router.put("/:id", updatePerson);

//! DELETE Method
router.delete("/:id", deletePerson);

module.exports = router;
