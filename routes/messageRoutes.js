const router = require("express").Router();
const { sendMessage, getMessageData } = require("../controllers/messageControllers");

router.post('/', sendMessage);

router.get('/:message_id', getMessageData);

module.exports = router;
