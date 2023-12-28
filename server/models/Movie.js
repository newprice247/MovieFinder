
// {
// name: "Batman",
// relevance: 498,
// type: "movie",
// id: 144337,
// year: 1989,
// result_type: "title",
// imdb_id: "tt0096895",
// tmdb_id: 268,
// tmdb_type: "movie",
// image_url: "https://cdn.watchmode.com/posters/0144337_poster_w185.jpg"
// },

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
    name: { type: String, required: true },
    relevance: { type: Number, required: true },
    type: { type: String, required: true },
    id: { type: Number, required: true },
    year: { type: Number, required: true },
    result_type: { type: String, required: true },
    imdb_id: { type: String, required: true },
    tmdb_id: { type: Number, required: true },
    tmdb_type: { type: String, required: true },
    image_url: { type: String, required: true }
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

const Movie = model("movie", movieSchema);

module.exports = Movie;

