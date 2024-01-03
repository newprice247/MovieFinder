

require('dotenv').config();
const axios = require('axios');
const tmdbToken = process.env.TMDB_TOKEN;
const { Movie } = require('../models');




module.exports = {
    async searchTMDB(req, res) {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/multi',
            params: {query: req.params.title, include_adult: 'false', language: 'en-US', page: req.params.page},
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${tmdbToken}`
            }
          };
          
          await axios
            .request(options)
            .then(function (response) {
              console.log(response.data.page);
              res.json(response.data);
            })
            .catch(function (error) {
              console.error(error);
            });
          
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