require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

const getUserData = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json({ success: true, users: allUsers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        messgae: "No user found with entered email !! Signup to continue.",
      });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      const token = jwt.sign(
        { user: { userId: user._id } },
        process.env.SECRET_ACCESS_KEY,
        { expiresIn: "1d" }
      );
      return res.status(201).json({
        success: true,
        message: "Logged In successfully",
        token,
        user,
      });
    }
    return res
      .status(403)
      .json({ success: false, message: "Wrong Password!! Try again" });
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
      message: "Login failed!!",
    });
  }
};

const signupUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        success: false,
        message: "User already exists with the entered email",
      });
    }
    const newUser = new User({ firstName, lastName, email, password });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    const savedUser = await newUser.save();
    const token = jwt.sign(
      { user: { userId: newUser._id } },
      process.env.SECRET_ACCESS_KEY,
      { expiresIn: "1d" }
    );
    console.log(token);
    res.status(201).json({
      success: true,
      message: "New user created",
      user: savedUser,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
      message: "Signup failed!!",
    });
  }
};

module.exports = { getUserData, loginUser, signupUser };
