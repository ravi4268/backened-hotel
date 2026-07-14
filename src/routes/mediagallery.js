const express = require("express");

const router = express.Router();


const {

createMediaGallery,
getMediaGalleries,
getMediaGalleryById,
updateMediaGallery,
deleteMediaGallery

}=require("../controllers/mediaGalleryController");



// CREATE

router.post(
"/",
createMediaGallery
);



// GET ALL

router.get(
"/",
getMediaGalleries
);



// GET BY ID

router.get(
"/:id",
getMediaGalleryById
);



// UPDATE

router.put(
"/:id",
updateMediaGallery
);



// DELETE

router.delete(
"/:id",
deleteMediaGallery
);



module.exports = router;