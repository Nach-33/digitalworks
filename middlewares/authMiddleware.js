const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const authMiddleware = (req, res, next) => {
  const { token } = req.body;
  const {user} = jwt.verify(token, SECRET);

  if (!user)
    return res.json({
      message: "authentication failed",
    });

  req.user = user;
  next();
};

module.exports = authMiddleware;
