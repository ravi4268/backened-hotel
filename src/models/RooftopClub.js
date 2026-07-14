const mongoose = require("mongoose");

const rooftopClubSchema = new mongoose.Schema(
{
    club_name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    opening_time: {
        type: String,
        required: true
    },
    closing_time: {
        type: String,
        required: true
    },
    entry_fee: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("RooftopClub", rooftopClubSchema);