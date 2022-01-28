const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


// movies route
router.get('/movies', (trq,res,next) => {
    Movie.find()
        .then(movies => {
            res.render('movies', {movies});
        })
        .catch((err) => console.log('Something went wrong',err));

}); 

module.exports = router;
