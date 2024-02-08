const router = require("express").Router();
const { handleSignup, handleLogin } = require("../controllers/authControllers");

router.post("/signup", handleSignup);

router.post("/login", handleLogin);

module.exports = router;
