const express = require("express");
const router = express.Router()
const moviesRouter = require('./movieRoutes')

router.use('/movies', moviesRouter)

module.exports = router;