const mongoose = require("mongoose");

const gamePlaceSchema = new mongoose.Schema(
{
    title: String,
    image: String,
    desc: String
},
{
    timestamps: true
}
);

module.exports = mongoose.model("GamePlace", gamePlaceSchema);