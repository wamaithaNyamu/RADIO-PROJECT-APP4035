const router = require("express").Router();
const Song = require("../models/Song");
const { read } = require("../controllers/song");

// Read all songs
router.route("/songs").get(read);



module.exports = router;
