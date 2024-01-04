import React, { useState, useEffect } from "react";
import MovieCard from "../components/modules/MovieCard";
import { Spinner } from "@material-tailwind/react";
import Pagination from "../components/modules/Pagination";
import search from "../../utils/API";
import { Checkbox } from "@material-tailwind/react";
import SearchBar from "../components/modules/SearchBar";
import ResultsPage from "./ResultsPage";

import { Carousel, Typography, Button, Icon } from "@material-tailwind/react";


export default function CarouselWithContent() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState(null)
    let [filteredResults, setFilteredResults] = useState([])
    let [currentWatchMode, setCurrentWatchMode] = useState(null)
    let [currentOMDB, setCurrentOMDB] = useState(null)
    const [open, setOpen] = React.useState("")
    // const [totalPages, setTotalPages] = useState(0)
    // const [active, setActive] = React.useState(1);
    const [movieFilter, setMovieFilter] = useState(true)
    const [tvFilter, setTvFilter] = useState(true)
    const [loading, setLoading] = useState(false);


    // const next = async () => {
    //     if (active === totalPages) return;

    //     setActive(active + 1);
    //     await getSearchResults(active + 1);
    //     scrollToTop();
    // };

    // const prev = async () => {
    //     if (active === 1) return;

    //     setActive(active - 1);
    //     await getSearchResults(active - 1);
    //     scrollToTop();
    // };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const handleSearchOnClick = () => {
        setSearchTerm(searchTerm)
        setSearchResults(null)
        setLoading(true)
        // setActive(1)
        getSearchResults(1)
        scrollToTop()
    }



    const getSearchResults = async (number) => {
        setLoading(true)
        setFilteredResults(null)
        let finalSearchResults = []
        try {
            const response = await search.getMovieByTitle(searchTerm, number)
            // setTotalPages(response.total_pages)
            for (let i = 0; i < response.length; i++) {
                if (response[i].media_type !== "person") {
                    finalSearchResults.push(response[i])
                }
            }
            finalSearchResults.map((movie) => {
                if (movie.release_date) {
                    movie.release_date = movie.release_date.substring(0, 4)
                }
                if (movie.first_air_date) {
                    movie.first_air_date = movie.first_air_date.substring(0, 4)
                }
            })
            finalSearchResults.sort((a, b) => (a.vote_count < b.vote_count) ? 1 : -1)
            setSearchResults(finalSearchResults)
            finalSearchResults.filter((movie) => {
                if (movieFilter === true && tvFilter === true) {
                    setFilteredResults(finalSearchResults)
                } else if (movieFilter === true && tvFilter === false) {
                    setFilteredResults(finalSearchResults.filter((movie) => movie.media_type !== "TV Show"))
                } else if (movieFilter === false && tvFilter === true) {
                    setFilteredResults(finalSearchResults.filter((movie) => movie.media_type !== "Movie"))
                } else {
                    setFilteredResults(null)
                }
            })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const showResultsPage = async (mediaType, id) => {
        let finalSearchResults = []
        let imdb_id = ""
        console.log(id)
        try {
            const response = await search.getMovieDetails(mediaType, id)
            imdb_id = response.imdb_id
            const ratings = await search.getMovieRatings(imdb_id)

            console.log(ratings)
            console
            setSearchResults(null)
            setFilteredResults([])
        } catch (error) {
            console.log(error)
        }
    }





    useEffect(() => {
        if (searchResults) {
            if (movieFilter === true && tvFilter === true) {
                setFilteredResults(searchResults)
            } else if (movieFilter === true && tvFilter === false) {
                setFilteredResults(searchResults.filter((movie) => movie.media_type !== "TV Show"))
            } else if (movieFilter === false && tvFilter === true) {
                setFilteredResults(searchResults.filter((movie) => movie.media_type !== "Movie"))
            } else {
                setFilteredResults(null)
            }
        }
    }
        , [movieFilter, tvFilter])


    return (
        <div
            className="flex flex-col items-center justify-center w-full h-full text-center"
        >
            {!loading && !searchResults && currentMovieDetails === null && (
                <Carousel className="rounded-xl">
                    <div className="relative h-[75vh] lg:h-[100vh] w-full rounded-lg">
                        <div className="absolute inset-0 bg-black/50 rounded-xl" />
                        <div className="absolute inset-0 grid place-items-center">
                            <div className="w-3/4 text-center">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    Movie Finder
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    Find your favorite movies and TV shows
                                </Typography>
                                <div className="pt-2 relative mx-full text-gray-600">
                                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        type="search" name="search" placeholder="Search"
                                        onChange={(event) => {
                                            setSearchTerm(event.target.value)
                                        }}
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter") {
                                                setSearchTerm(searchTerm)
                                                // setActive(1)
                                                getSearchResults(1)
                                                // getTestingMovies()
                                            }
                                        }}
                                    />
                                    <Button
                                        className="py-2 px-10 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-700 hover:text-white shadow-md hover:shadow-lg transition duration-500 ease-in-out my-6"
                                        onClick={() => {
                                            setSearchTerm(searchTerm)
                                            // setActive(1)
                                            getSearchResults(1)
                                            // getTestingMovies()
                                        }}
                                    >
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>)
            }
            {!loading && filteredResults.length !== 0 && searchResults && (
                <>
                    <SearchBar
                        onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleSearchOnClick()
                            }
                        }}
                        movieOnClick={() => {
                            if (movieFilter === true) {
                                setMovieFilter(false)
                            } else {
                                setMovieFilter(true)
                            }
                        }}
                        tvOnClick={() => {
                            if (tvFilter === true) {
                                setTvFilter(false)
                            } else {
                                setTvFilter(true)
                            }
                        }}
                        // active={active}
                        // totalPages={totalPages}
                        // prev={prev}
                        // next={next}
                        buttonOnClick={() => {
                            handleSearchOnClick()
                        }}
                    />
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-40">
                        
                        {filteredResults.map((movie) => (

                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                name={movie.title ? movie.title : movie.name}
                                year={movie.release_date ? movie.release_date : movie.first_air_date}
                                image_url={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750"}
                                overview={movie.overview}
                                media={movie.media_type}
                                popularity={movie.popularity}
                                open={open === movie.id}
                                openUseState={open}
                                onClick={(e) => {
                                    e.preventDefault()
                                    showResultsPage(movie.media_type, movie.id)
                                }}
                            />
                        ))}
                    </div>
                </>
            )}
            {!loading && movieFilter === false && tvFilter === false && (
                <div className="flex flex-col items-center justify-center w-full h-full text-center">
                    <Typography
                        variant="h1"
                        color="gray"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                        No Results Found
                    </Typography>
                    <Typography
                        variant="lead"
                        color="gray"
                        className="mb-12 opacity-80"
                    >
                        Please try again
                    </Typography>
                </div>
            )}
            {loading && (
                <div className="flex flex-col items-center justify-center w-full h-full text-center">
                    <Spinner
                        color="blue"
                        size="xl"
                        className="mt-10 mb-10"
                    />
                </div>
            )}
            {currentMovieDetails && (
                <ResultsPage
                    movieDetails={currentMovieDetails}
                    onClick={() => {
                        setCurrentMovieDetails(null)
                    }}
                />
            )}

        </div>
    );
}

