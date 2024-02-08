const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  vehicle_number: {
    type: String,
    required: true,
    unique: true
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  qr_code: {
    type: String,
    default: "",
  },
});

const vehicleModel = mongoose.model("Vehicle", vehicleSchema);

module.exports = vehicleModel;
