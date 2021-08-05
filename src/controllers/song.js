const ErrorResponse = require('../utils/errorResponse');
const Song = require('../models/Song');

// @desc   create song
// @route  POST /api/songs
// @access Public
exports.create = async (req, res, next) => {
  try {
    const entry = req.body;

    const newSong = new Song({
      ...entry,
    });

    const savedSong = await newSong.save();

    res.status(200).json({
      success: true,
      song: savedSong,
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
    const songs = await Song.find({}).sort({ rating: 'desc' });

    res.status(200).json({
      success: true,
      songs,
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
exports.update = async (req, res) => {
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

// @desc   delete a song
// @route  DELETE /api/songs/:id
// @access Public
exports.remove = async (req, res) => {
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
    const songs = await Song.find().where('rating').equals(5);

    c;
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
exports.updateSong = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;

    const update = {
      ...data,
    };

    const updated = await Song.findByIdAndUpdate(
      id,
      { $set: update },
      { new: true }
    );

    res.status(200).json({
      success: true,
      song: updated,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error });
  }
};

// @desc   delete a song
// @route  DELETE /api/songs/:id
// @access Public
exports.deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    await Song.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error });
  }
};
