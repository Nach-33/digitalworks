const User = require("../models/userModel");
const Message = require("../models/messageModel");

const sendMessage = async (req, res) => {
  const { receiver, message_content } = req.body;
  try {
    const message = await Message.create({ receiver, message_content });
    await User.findOneAndUpdate(
      { _id: receiver },
      {
        $push: {
          messages: message._id,
        },
      }
    );
    return res.json({
      message: "message sent successfully",
      message_obj: message,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: error.message,
    });
  }
};

const getMessageData = async (req, res) => {
  const { message_id } = req.params;
  try {
    const message_obj = await Message.findById(message_id);
    if (!message_obj) {
      return res.json({
        message: "message not found",
      });
    }
    return res.json({
      message: "message found",
      message_obj,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: error.message,
    });
  }
};

module.exports = { sendMessage, getMessageData };
