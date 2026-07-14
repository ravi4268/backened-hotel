const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    hotelName: String,
    address: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
    mapUrl: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Location", locationSchema);