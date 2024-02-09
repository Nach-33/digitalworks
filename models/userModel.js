const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trime: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  vehicles: [{ type: mongoose.Schema.ObjectId }, { default: [] }],
  messages: [{ type: mongoose.Schema.ObjectId }, { default: [] }],
  image: {
    type: String,
  },
  designation: {
    type: String,
  }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
