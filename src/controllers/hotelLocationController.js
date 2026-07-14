const Location = require("../models/HotelLocation");

const createLocation = async (req, res) => {
  try {
    console.log(req.body); // 👈 ye add karo

    const data = await Location.create(req.body);

    res.status(201).json({
      success: true,
      data
    });
  } catch (error) {
    console.log(error); 

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getLocations = async (req, res) => {
  try {
    const data = await Location.find();

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createLocation,
  getLocations
};