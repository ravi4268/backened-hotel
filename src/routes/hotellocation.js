const express = require("express");
const router = express.Router();

const {
  createLocation,
  getLocations
} = require("../controllers/hotelLocationController");

router.post("/", createLocation);
router.get("/", getLocations);

module.exports = router;