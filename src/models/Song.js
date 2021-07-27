const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add the song title"],
  },
  artist: {
    type: String,
    required: [true, "Please add the song artist"],
  },
  rating: {
    type: Number,
    max: 5,
    min: 1,
  },
  year: {
    type: Number,
    required: [true, "Please add the song year"],
  },
  art: {
    type: String,
  },
});

module.exports = mongoose.model("Song", SongSchema);
