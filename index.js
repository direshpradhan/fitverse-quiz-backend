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

app.listen(3000, () => {
  console.log("server started");
});
