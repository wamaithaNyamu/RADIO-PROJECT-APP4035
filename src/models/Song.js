const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    max: 5,
    min: 1,
    default: 1,
  },
  year: {
    type: String,
    required: [true, 'Please add the song year'],
  },
  art: {
    type: String,
    default: '',
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Song', SongSchema);
