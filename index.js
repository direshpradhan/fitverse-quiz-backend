const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { initializeDBConnection } = require("./db/db.connect");
const { addQuizzesToDatabase } = require("./models/quiz.model");
const quizRouter = require("./routes/quiz.router");
const userRouter = require("./routes/user.router");
const { authenticateToken } = require("./authenticateToken");

const app = express();
app.use(bodyParser.json());
app.use(cors());

initializeDBConnection();
//addQuizzesToDatabase();

app.get("/", (req, res) => {
  res.send("Hello Express app!");
});

app.use("/user", userRouter);
app.use(authenticateToken);
app.use("/quiz", quizRouter);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "The route you're looking for is not available.",
  });
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Server is having some issues. Try again after sometime",
  });
  next();
});

app.listen(3000, () => {
  console.log("server started");
});
