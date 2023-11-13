const express = require("express");
const router = express.Router();

// CRUD methods
const {
  getContact,
  addContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

router.get("/get", getContact);
router.post("/post", addContact);
router.put("/put/:id", updateContact);
router.delete("/delete/:id", deleteContact);

module.exports = router;
