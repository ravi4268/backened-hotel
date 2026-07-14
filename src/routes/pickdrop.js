const express = require("express");
const router = express.Router();

const {
  createPickDrop,
  getPickDrops,
  getPickDropById,
  updatePickDrop,
  deletePickDrop,
} = require("../controllers/pickDropController");

router.post("/", createPickDrop);
router.get("/", getPickDrops);
router.get("/:id", getPickDropById);
router.put("/:id", updatePickDrop);
router.delete("/:id", deletePickDrop);

module.exports = router;
