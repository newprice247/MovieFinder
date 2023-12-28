const express = require("express");
const router = express.Router()
const moviesRouter = require('./movieRoutes')
const { getMoviesTest } = require('../../controllers/movieControllers')

router.use('/movies', moviesRouter)
router.get('/test', getMoviesTest)

module.exports = router;