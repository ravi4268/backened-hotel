const express = require("express");
const router = express.Router();
const controller = require("../controllers/cctvController");

router.post("/", controller.createCamera);
router.get("/", controller.getAllCamera);

module.exports = router;
