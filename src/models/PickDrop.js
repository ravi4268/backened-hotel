const mongoose = require("mongoose");

const pickDropSchema = new mongoose.Schema(
{
    guest_name:String,
    pickup_location:String,
    drop_location:String,
    driver_name:String
},
{
    timestamps:true
}
);

module.exports = mongoose.model("PickDrop",pickDropSchema);