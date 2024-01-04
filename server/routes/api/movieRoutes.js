

const express = require("express");
const router = express.Router()
const {
    searchTMDB,
    getMovieDetailsWatchMode,
    getMovieRatingsOMDB
} = require('../../controllers/movieControllers')

router.get('/:title/:page', searchTMDB)
router.get('/details/:id/:mediaType', getMovieDetailsWatchMode);


module.exports = router;