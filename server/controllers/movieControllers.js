

require('dotenv').config();
const axios = require('axios');
const watchmodeKey = process.env.WATCHMODE_KEY;
const { Movie } = require('../models');

function movieAPI(title) {
    return `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${watchmodeKey}&search_value=${title}&search_type=3`;
}

module.exports = {
    async getMoviesByTitle(req, res) {
        try {
            const response = await axios.get(movieAPI(req.params.title));
            console.log(response.data);
            res.json(response.data);
        } catch (error) {
            console.log(error);
        }
    },

    async getMoviesTest(req, res) {
        try {
            const movies = await Movie.find({});
            res.json(movies);
        }
        catch (error) {
            console.log(error);
        }
    }
};