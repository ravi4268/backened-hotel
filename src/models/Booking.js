const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
{
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    room_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room"
    },
    check_in:Date,
    check_out:Date,
    total_amount:Number
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Booking",bookingSchema);