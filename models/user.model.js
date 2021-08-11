const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: { type: String, required: "First name cannot be empty." },
    lastName: { type: String, required: "Last name cannot be empty." },
    email: {
      type: String,
      required: "Enter e-mail id!",
      index: true,
      unique: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

module.exports = { User };
