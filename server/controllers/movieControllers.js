

require('dotenv').config();
const axios = require('axios');
const tmdbToken = process.env.TMDB_TOKEN;
const watchmodeKey = process.env.WATCHMODE_KEY;
const omdbKey = process.env.OMDB_KEY;
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
              res.json(response.data);
            })
            .catch(function (error) {
              console.error(error);
            });
          
    },
    async getMovieDetailsWatchMode(req, res) {
      const url = `https://api.watchmode.com/v1/title/${req.params.mediaType}-${req.params.id}/details/?apiKey=${watchmodeKey}&append_to_response=sources`;
      await axios
        .get(url)
        .then(function (response) {
          res.json(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async getMovieRatingsOMDB(req, res) {
      const url = `http://www.omdbapi.com/?i=${req.params.id}&page=1&apikey=${omdbKey}`;
      await axios
        .get(url)
        .then(function (response) {
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