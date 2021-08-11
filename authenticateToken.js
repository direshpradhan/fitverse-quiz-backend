require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.SECRET_ACCESS_KEY);
      req.user = decoded.user;
      next();
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      errorMessage: error.message,
      message: "Error authenticating user!!",
    });
  }
};

module.exports = { authenticateToken };
