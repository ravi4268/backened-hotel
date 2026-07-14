const Guest = require("../models/Guest");

const createGuest = async (req, res) => {
  try {
    const data = await Guest.create(req.body);

    res.status(200).json({
      success: true,
      message: "Guest created successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getGuests = async (req, res) => {
  try {
    const data = await Guest.find();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getGuestById = async (req, res) => {
  try {
    const data = await Guest.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Guest not found",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateGuest = async (req, res) => {
  try {
    const data = await Guest.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Guest updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteGuest = async (req, res) => {
  try {
    await Guest.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Guest deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createGuest,
  getGuests,
  getGuestById,
  updateGuest,
  deleteGuest,
};