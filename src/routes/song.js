const router = require("express").Router();
const { read ,stars} = require("../controllers/song");

// Read all songs
router.route("/songs").get(read);
router.route("/rating").get(stars);
router.route("/rate/:songID").get(stars);

module.exports = router;
