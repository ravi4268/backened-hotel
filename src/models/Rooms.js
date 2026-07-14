const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    floor: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    bedType: {
      type: String,
      required: true,
    },
    maxOccupancy: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Available",
    },
    cleanliness: {
      type: String,
      default: "Clean",
    },
    amenities: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Room", roomSchema);