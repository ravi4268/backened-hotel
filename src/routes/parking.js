const express = require("express");
const router = express.Router();

const {
  createParking,
  getParkings,
  getParkingById,
  updateParking,
  deleteParking,
} = require("../controllers/parkingController");

router.post("/", createParking);
router.get("/", getParkings);
router.get("/:id", getParkingById);
router.put("/:id", updateParking);
router.delete("/:id", deleteParking);

module.exports = router;