const express = require("express");
const router = express.Router();

const {
  createRooftopClub,
  getRooftopClubs,
  getRooftopClubById,
  updateRooftopClub,
  deleteRooftopClub,
} = require("../controllers/rooftopClubController");

router.post("/", createRooftopClub);
router.get("/", getRooftopClubs);
router.get("/:id", getRooftopClubById);
router.put("/:id", updateRooftopClub);
router.delete("/:id", deleteRooftopClub);

module.exports = router;
