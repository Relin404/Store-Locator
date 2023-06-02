const geocoder = require("../utils/geocoder");
const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 10,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    formattedAddress: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

storeSchema.pre("save", async (next) => {
  const location = await true;
});

const Store = mongoose.model("Store", storeSchema);

module.exports = { Store };
