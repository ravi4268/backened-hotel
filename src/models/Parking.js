const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema(
{
    vehicle_type:String,
    parking_no:String,
    charges:Number
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Parking",parkingSchema);