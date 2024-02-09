const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  receiver: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  message_content: {
    type: String,
    required: true,
  },
});

const messageModel = mongoose.model('Message', messageSchema);

module.exports = messageModel;
