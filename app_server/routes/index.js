var express = require('express');
var router = express.Router();
const ctrlAbout = require("../controller/about");
const ctrlMovie = require("../controller/movie");

/* GET home page. */

router.get('/',ctrlMovie.movielist);

router.get('/about',ctrlAbout.about);
router.get('/movies/:movieid',ctrlMovie.movieDetail);
router.route('/new')
      .get(ctrlMovie.addNewMovie)
      .post(ctrlMovie.doAddNewMovie);



module.exports = router;
