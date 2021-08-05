const router = require('express').Router();
const {
  create,
  read,
  updateSong,
  deleteSong,
  stars,
} = require('../controllers/song');

// Read all songs
router.route('/songs').get(read);
router.route('/songs/rating').get(stars);
router.route('/songs/').post(create);
router.route('/songs/:id').put(updateSong);
router.route('/songs/:id').delete(deleteSong);

module.exports = router;
