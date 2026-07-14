const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const roomRoutes = require("./routes/rooms");
const guestRoutes = require("./routes/guest");
const parkingRoutes = require("./routes/parking");
const contactRoutes = require("./routes/contact");
const galleryRoutes = require("./routes/mediagallery");
const ratingRoutes = require("./routes/rating");
const locationRoutes = require("./routes/hotellocation");
const pickDropRoutes = require("./routes/pickdrop"); 
const gamePlaceRoutes = require("./routes/game");

// ✅ Rooftop Routes Import
const rooftopRoutes = require("./routes/rooftopclub");
const bathroomSuiteRoutes = require("./routes/bathroomsuite");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose
  .connect("mongodb://127.0.0.1:27017/hotel")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// API Routes
app.use("/api", roomRoutes);
app.use("/api/guests", guestRoutes);
app.use("/api/parking", parkingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/rating", ratingRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/pickdrop", pickDropRoutes);
app.use("/api/gameplace", gamePlaceRoutes);

// ✅ Rooftop API
app.use("/api/rooftop", rooftopRoutes);
app.use("/api/bathroom-suites",bathroomSuiteRoutes);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend running successfully"
  });
});

app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});