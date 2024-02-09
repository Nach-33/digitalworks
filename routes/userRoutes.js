const router = require("express").Router();
const { getUserData } = require("../controllers/userControllers");

router.get('/', getUserData);

module.exports = router;
