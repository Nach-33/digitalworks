const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const handleSignup = async (req, res) => {
  const { user_details } = req.body;
  try {
    const user_exists = await User.findOne({ email: user_details.email });
    if (!user_exists) {
      const user = await User.create(user_details);
      return res.json({
        message: "user successfully created",
        user,
      });
    } else {
      return res.json({
        message: "user already exists",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: error.message,
    });
  }
};

const handleLogin = async (req, res) => {
  const { user_details } = req.body;
  try {
    const user = await User.findOne(user_details);
    if (user) {
      const token = jwt.sign({ user }, SECRET);
      return res.json({
        message: "logged in successfully",
        token,
      });
    } else {
      return res.json({
        message: "user not found",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: error.message,
    });
  }
};

module.exports = { handleSignup, handleLogin };
