const express = require("express");
const router = express.Router();

const {
  createRoom,
  getRooms,
  updateRoom,
  deleteRoom
} = require("../controllers/roomController");


// POST API
router.post("/rooms", createRoom);


// GET API
router.get("/rooms", getRooms);


// UPDATE STATUS/CLEANLINESS
router.put("/rooms/:id", updateRoom);


// DELETE ROOM
router.delete("/rooms/:id", deleteRoom);


module.exports = router;