const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const SECRET = process.env.SECRET;

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  let { user } = jwt.verify(token, SECRET);

  try {
    user = await User.findById(user._id);

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
