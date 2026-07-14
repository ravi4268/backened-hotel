const express = require("express");
const router = express.Router();

const {
createMediaGallery,
getMediaGalleries,
getMediaGalleryById,
updateMediaGallery,
deleteMediaGallery

} = require('../controllers/mediagalleryController')

router.post("/",createMediaGallery);
router.get("/",getMediaGalleries);
router.get("/:id",getMediaGalleryById);
router.put("/:id",updateMediaGallery);
router.delete("/:id",deleteMediaGallery);
module.exports = router;