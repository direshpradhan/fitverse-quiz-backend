const { Quiz } = require("../models/quiz.model");

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find({});
    res.json({ success: true, quizzes });
  } catch (error) {
    res.json({
      success: false,
      errorMessage: error.message,
      message: "error retrieving quiz data",
    });
  }
};

module.exports = { getAllQuizzes };
