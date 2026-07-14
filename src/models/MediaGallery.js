const mongoose = require("mongoose");


const mediaGallerySchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    imgUrl: {
        type: String,
        required: true
    },

    video: {
        type: String,
        default: ""
    }

},
{
    timestamps:true
}
);


module.exports = mongoose.model("MediaGallery",mediaGallerySchema);