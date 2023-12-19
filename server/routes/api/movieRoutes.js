

const express = require("express");
const router = express.Router()
const {getMoviesByTitle} = require('../../controllers/movieControllers')

router.get('/:title', getMoviesByTitle)

module.exports = router;