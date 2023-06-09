const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to ${process.env.MONGO_URL}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
