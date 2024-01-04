const express = require("express");
const router = express.Router()
const moviesRouter = require('./movieRoutes')
const { getMoviesTest,
    getMovieRatingsOMDB
} = require('../../controllers/movieControllers')

router.use('/movies', moviesRouter)
router.get('/test', getMoviesTest)
router.get('/ratings/:id', getMovieRatingsOMDB);

module.exports = router;