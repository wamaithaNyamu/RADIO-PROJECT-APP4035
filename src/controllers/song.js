const ErrorResponse = require("../utils/errorResponse");
const Song = require("../models/Song");

// @desc   create song
// @route  POST /api/songs
// @access Public


exports.addNewMusic = async (req, res) => {
  try {
    const songs = new Song({
      title:req.body.title,
      artist:req.body.artist,
      songs:req.file
    });

    let songs = await songs.save();
    res.status(200).json({ data: songs });
  } catch (err) {
    res.status(400).json({ error: err });
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

// Setup pre-use handler for the update one function.
todoSchema.pre("updateOne", function (next) {
  // Set the updated field to the current datetime.
  this.update({},{ $set: { updatedAt: new Date() } });

  // Continue in the model.
  next();
});






// @desc   delete a song
// @route  DELETE /api/songs/:id
// @access Public
exports.deleteMusic = async (req, res) => {
  try {
    const id = req.params.musicId;
    let result = await Song.remove({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};