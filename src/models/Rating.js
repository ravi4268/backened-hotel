const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
{
    hotelName:{
        type:String,
        required:true
    },

    rating:{
        type:Number,
        required:true
    },

    review:{
        type:String,
        default:""
    }
},
{
    timestamps:true
}
);


module.exports = mongoose.model("Rating", ratingSchema);