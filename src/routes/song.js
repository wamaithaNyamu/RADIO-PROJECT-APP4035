const router = require("express").Router();
const { create, read, update, remove, stars,rateSong } = require("../controllers/song");

// Read all songs
router.route("/songs/list").get(read);
router.route("/songs/rating/list").get(stars);
router.route("/songs/create").post(create);
router.route("/songs/update/:id").put(update);
router.route("/songs/update/rating/:id").put(rateSong);
router.route("/songs/delete/:id").delete(remove);

module.exports = router;
