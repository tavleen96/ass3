const express = require('express');
const router = express.Router();
const ctrlMovie = require('../controllers/movies');

router
.route('/movies')
.get(ctrlMovie.getMovie)
.post(ctrlMovie.createMovie);

router    
.route('/movies/:movieid')   
.get(ctrlMovie.getSingleMovie)   
.put(ctrlMovie.updateMovie)  
.delete(ctrlMovie.deleteMovie);

module.exports = router;