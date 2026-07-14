const GamePlace = require("../models/GameZone");

const createGame = async (req, res) => {
  try {
    const data = await GamePlace.create(req.body);

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

const getGames = async (req, res) => {
  try {
    const data = await GamePlace.find();

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

const deleteGame = async (req, res) => {
  try {

    await GamePlace.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message:"Game Deleted"
    });

  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    });
  }
};

module.exports={
    createGame,
    getGames,
    deleteGame
};