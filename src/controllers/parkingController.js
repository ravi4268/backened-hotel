const Parking = require("../models/Parking");

const createParking = async (req, res) => {
  try {
    const parking = await Parking.create(req.body);

    res.status(201).json({
      success: true,
      data: parking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getParkings = async (req, res) => {
  try {
    const parkings = await Parking.find();

    res.status(200).json({
      success: true,
      data: parkings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getParkingById = async (req, res) => {
  try {
    const parking = await Parking.findById(req.params.id);

    if (!parking) {
      return res.status(404).json({
        success: false,
        message: "Parking not found",
      });
    }

    res.status(200).json({
      success: true,
      data: parking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateParking = async (req, res) => {
  try {
    const parking = await Parking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: parking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteParking = async (req, res) => {
  try {
    await Parking.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Parking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports ={
createParking,
getParkings,
getParkingById,
updateParking,
deleteParking
}