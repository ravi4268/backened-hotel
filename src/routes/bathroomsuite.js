const express = require("express");
const router = express.Router();

const {
  createBathroomSuite,
  getBathroomSuites,
  getBathroomSuiteById,
  updateBathroomSuite,
  deleteBathroomSuite,
} = require("../controllers/bathroomSuiteController");

router.post("/", createBathroomSuite);
router.get("/", getBathroomSuites);
router.get("/:id", getBathroomSuiteById);
router.put("/:id", updateBathroomSuite);
router.delete("/:id", deleteBathroomSuite);

module.exports = router;
