const mongoose = require("mongoose");


const bathroomSuiteSchema = new mongoose.Schema({

    suite_name:{
        type:String,
        required:true
    },

    bathtub:{
        type:Boolean,
        default:false
    },

    shower:{
        type:Boolean,
        default:false
    },

    luxury_items:[
        String
    ],

    image:{
        type:String,
        required:true
    }

},
{
    timestamps:true
});


module.exports = mongoose.model("BathroomSuite",bathroomSuiteSchema);