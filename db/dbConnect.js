const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const dbConnect = async () => {
  await mongoose.connect(MONGO_URI)
  console.log("Connected to DB");
};

module.exports = dbConnect;
