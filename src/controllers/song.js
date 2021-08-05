const ErrorResponse = require("../utils/errorResponse");
const Song = require("../models/Song");

// @desc   create song
// @route  POST /api/songs
// @access Public
exports.create = async (req, res, next) => {
  try {
    const entry = req.body;
    const song = await Song.create(entry);

    res.status(200).json({
      success: true,
      data: song,
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
exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const song = await Song.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      data: song,
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

// @desc   Update a song rating
// @route  PUT /api/songs/rating/:id
// @access Public
exports.rateSong = async (req, res, next) => {
  try {
    console.log('rating co,ponent',req.body)
    const id = req.params.id;
    const song = await Song.findByIdAndUpdate(id, {rating:req.body.newRating}, {
      new: true,
      runValidators: true,
    });
    console.log('updated song',song)
    res.status(200).json({
      success: true,
      data: song,
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

// @desc   delete a song
// @route  DELETE /api/songs/:id
// @access Public
exports.remove = async (req, res, next) => {
  try {
    const id = req.params.id;
    const song = await Song.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: song,
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

// @desc   Read all songs with 5 stars
// @route  GET /api/songs/rating/list
// @access Public
exports.stars = async (req, res, next) => {
  try {
    const songs = await Song.find().where("rating").equals(5);

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
