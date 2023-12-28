require("dotenv").config();
const Movie = require("../models/Movie");
const connection = require("../config/connection");


const movies = [
  {
    name: "Batman",
    relevance: 498,
    type: "movie",
    id: 144337,
    year: 1989,
    result_type: "title",
    imdb_id: "tt0096895",
    tmdb_id: 268,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/0144337_poster_w185.jpg"
  },
  {
    name: "The Batman",
    relevance: 414.18,
    type: "movie",
    id: 1532981,
    year: 2022,
    result_type: "title",
    imdb_id: "tt1877830",
    tmdb_id: 414906,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/01532981_poster_w185.jpg"
  },
  {
    name: "Batman v Superman: Dawn of Justice",
    relevance: 200,
    type: "movie",
    id: 144358,
    year: 2016,
    result_type: "title",
    imdb_id: "tt2975590",
    tmdb_id: 209112,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/0144358_poster_w185.jpg"
  },
  {
    name: "Batman Begins",
    relevance: 199.6,
    type: "movie",
    id: 144341,
    year: 2005,
    result_type: "title",
    imdb_id: "tt0372784",
    tmdb_id: 272,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/0144341_poster_w185.jpg"
  },
  {
    name: "Batman: The Dark Knight Returns, Part 2",
    relevance: 169.83,
    type: "movie",
    id: 1672292,
    year: 2013,
    result_type: "title",
    imdb_id: "tt2166834",
    tmdb_id: 142061,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/01672292_poster_w185.jpg"
  },
  {
    name: "Batman: The Dark Knight Returns, Part 1",
    relevance: 169.83,
    type: "movie",
    id: 1671816,
    year: 2012,
    result_type: "title",
    imdb_id: "tt2313197",
    tmdb_id: 123025,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/01671816_poster_w185.jpg"
  },
  {
    name: "Batman: Assault on Arkham",
    relevance: 169.49,
    type: "movie",
    id: 1672774,
    year: 2014,
    result_type: "title",
    imdb_id: "tt3139086",
    tmdb_id: 242643,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/01672774_poster_w185.jpg"
  },
  {
    name: "Batman: Year One",
    relevance: 169.32,
    type: "movie",
    id: 1671327,
    year: 2011,
    result_type: "title",
    imdb_id: "tt1672723",
    tmdb_id: 69735,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/01671327_poster_w185.jpg"
  },
  {
    name: "Batman Returns",
    relevance: 169.32,
    type: "movie",
    id: 144353,
    year: 1992,
    result_type: "title",
    imdb_id: "tt0103776",
    tmdb_id: 364,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/0144353_poster_w185.jpg"
  },
  {
    name: "Batman: Mask of the Phantasm",
    relevance: 169.32,
    type: "movie",
    id: 144362,
    year: 1993,
    result_type: "title",
    imdb_id: "tt0106364",
    tmdb_id: 14919,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/0144362_poster_w185.jpg"
  },
  {
    name: "Batman Beyond: Return of the Joker",
    relevance: 169.15,
    type: "movie",
    id: 1653979,
    year: 2000,
    result_type: "title",
    imdb_id: "tt0233298",
    tmdb_id: 16234,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/01653979_poster_w185.jpg"
  },
  {
    name: "Batman & Robin",
    relevance: 169.15,
    type: "movie",
    id: 144340,
    year: 1997,
    result_type: "title",
    imdb_id: "tt0118688",
    tmdb_id: 415,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/0144340_poster_w185.jpg"
  },
  {
    name: "Batman: Under the Red Hood",
    relevance: 169.15,
    type: "movie",
    id: 1670699,
    year: 2010,
    result_type: "title",
    imdb_id: "tt1569923",
    tmdb_id: 40662,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/01670699_poster_w185.jpg"
  },
  {
    name: "Batman Forever",
    relevance: 169.15,
    type: "movie",
    id: 144348,
    year: 1995,
    result_type: "title",
    imdb_id: "tt0112462",
    tmdb_id: 414,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/0144348_poster_w185.jpg"
  },
  {
    name: "Batman: The Long Halloween, Part One",
    relevance: 168.98,
    type: "movie",
    id: 1674648,
    year: 2021,
    result_type: "title",
    imdb_id: "tt14324650",
    tmdb_id: 736073,
    tmdb_type: "movie",
    image_url: "https://cdn.watchmode.com/posters/01674648_poster_w185.jpg"
  }
]


connection.once("open", async () => {
  console.log("connected");
  const currentMovies = await Movie.find({}).lean();
  if (currentMovies.length > 0) {
    await Movie.collection.drop();
  }

  // Inserts seed data into the collection
  await Movie.insertMany(movies);
  await Movie.find({}).then((data) => console.log(data));
  console.log("Seed data inserted successfully!");

  console.log

  // Exits the process
  process.exit(0);
});
