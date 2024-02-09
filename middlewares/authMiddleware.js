const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const SECRET = process.env.SECRET;

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token)
    return res.json({
      message: "unauthorized",
    });
  let { user_id } = jwt.verify(token, SECRET);
    console.log(token);
  try {
    user = await User.findById(user_id);

    if (!user) {
      return res.json({
        message: "authentication failed",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: error.message,
    });
  }
};

module.exports = authMiddleware;
