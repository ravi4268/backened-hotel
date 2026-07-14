const PickDrop = require("../models/PickDrop");

const createPickDrop = async (req, res) => {
  try {
    const pickDrop = await PickDrop.create(req.body);

    res.status(201).json({
      success: true,
      data: pickDrop,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPickDrops = async (req, res) => {
  try {
    const pickDrops = await PickDrop.find();

    res.status(200).json({
      success: true,
      data: pickDrops,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPickDropById = async (req, res) => {
  try {
    const pickDrop = await PickDrop.findById(req.params.id);

    if (!pickDrop) {
      return res.status(404).json({
        success: false,
        message: "PickDrop record not found",
      });
    }

    res.status(200).json({
      success: true,
      data: pickDrop,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updatePickDrop = async (req, res) => {
  try {
    const pickDrop = await PickDrop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!pickDrop) {
      return res.status(404).json({
        success: false,
        message: "PickDrop record not found",
      });
    }

    res.status(200).json({
      success: true,
      data: pickDrop,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deletePickDrop = async (req, res) => {
  try {
    const pickDrop = await PickDrop.findByIdAndDelete(req.params.id);

    if (!pickDrop) {
      return res.status(404).json({
        success: false,
        message: "PickDrop record not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "PickDrop deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPickDrop,
  getPickDrops,
  getPickDropById,
  updatePickDrop,
  deletePickDrop,
};
