

const express = require("express");
const router = express.Router()
const {
    searchTMDB
} = require('../../controllers/movieControllers')

router.get('/:title/:page', searchTMDB)

module.exports = router;