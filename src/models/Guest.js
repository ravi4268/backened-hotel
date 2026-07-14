const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema(
  {
    guest: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    checkIn: {
      type: String,
      required: true,
    },
    checkOut: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Booked",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Guest", guestSchema);