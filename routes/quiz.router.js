const express = require("express");
const router = express.Router();
const {
  getAllQuizzes,
  getQuizById,
} = require("../controllers/quiz.controller");

router.get("/", getAllQuizzes);
router.get("/:quizId", getQuizById);

module.exports = router;
