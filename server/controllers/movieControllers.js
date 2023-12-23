

require('dotenv').config();
const axios = require('axios');
const watchmodeKey = process.env.WATCHMODE_KEY;

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
    }
}