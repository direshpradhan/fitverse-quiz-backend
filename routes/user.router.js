const express = require("express");
const {
  loginUser,
  signupUser,
  getUserData,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getUserData);
router.post("/login", loginUser);
router.post("/signup", signupUser);

module.exports = router;
