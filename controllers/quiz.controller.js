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

const getQuizById = async (req, res) => {
  const { quizId } = req.params;
  try {
    const quiz = await Quiz.findById(quizId);
    res.json({ success: true, quiz });
  } catch (error) {
    res.json({
      success: false,
      message: "Error getting quiz by Id",
      errorMessage: error.message,
    });
  }
};

module.exports = { getAllQuizzes, getQuizById };
