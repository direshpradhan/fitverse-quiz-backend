const express = require("express");
const router = express.Router();
const { getAllQuizzes } = require("../controllers/quiz.controller");

router.get("/", getAllQuizzes);

module.exports = router;
