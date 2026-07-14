const RooftopClub = require("../models/RooftopClub");

const createRooftopClub = async (req, res) => {
  try {

    const data = await RooftopClub.create({
      club_name: req.body.club_name,
      image: req.body.image,
      opening_time: req.body.opening_time,
      closing_time: req.body.closing_time,
      entry_fee: req.body.entry_fee,
      description: req.body.description
    });

    res.status(201).json({
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

const getRooftopClubs = async (req, res) => {
  try {

    const data = await RooftopClub.find();

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

const getRooftopClubById = async (req, res) => {
  try {

    const data = await RooftopClub.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Rooftop Club Not Found"
      });
    }

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

const updateRooftopClub = async (req, res) => {
  try {

    const data = await RooftopClub.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

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

const deleteRooftopClub = async (req, res) => {
  try {

    await RooftopClub.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Deleted Successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createRooftopClub,
  getRooftopClubs,
  getRooftopClubById,
  updateRooftopClub,
  deleteRooftopClub
};