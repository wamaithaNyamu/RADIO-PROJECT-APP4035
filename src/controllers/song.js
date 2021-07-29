const ErrorResponse = require("../utils/errorResponse");
const Song = require("../models/Song");

// @desc   create song
// @route  POST /api/songs
// @access Public

// @desc   Read all songs
// @route  GET /api/songs
// @access Public
exports.read = async (req, res, next) => {
  try {
    const songs = await Song.find();

    res.status(200).json({
      success: true,
      data: songs,
    });
  } catch (err) {
    //log to console
    console.log(err);
    // bad request
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

// @desc   Update a song
// @route  PUT /api/songs/:id
// @access Public

// @desc   delete a song
// @route  DELETE /api/songs/:id
// @access Public
