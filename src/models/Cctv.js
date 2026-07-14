const mongoose = require("mongoose");

const cctvSchema = new mongoose.Schema(
{
    camera_name:String,
    location:String,
    status:String
},
{
    timestamps:true
}
);

module.exports = mongoose.model("CCTV",cctvSchema);