

const express = require("express");
const router = express.Router()
const {
    searchTMDB
} = require('../../controllers/movieControllers')

router.get('/:title', searchTMDB)

module.exports = router;