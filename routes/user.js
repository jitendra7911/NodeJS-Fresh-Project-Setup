// A "routes" folder in a Node.js project contains code for handling and routing
// web requests to specific parts of your application.

const express = require("express");
const router = express.Router();
const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.post("/user", createUser);

router.get("/user", readUser);

router.put("/user/:userId", updateUser);

router.delete("/user/:userId", deleteUser);

module.exports = router;
