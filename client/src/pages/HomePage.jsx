import React, { useState, useEffect } from "react";
import MovieCard from "../components/modules/MovieCard";
import Pagination from "../components/Pagination";
import search from "../../utils/API";

import { Carousel, Typography, Button, Icon } from "@material-tailwind/react";

export default function CarouselWithContent() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState(null)
    const [open, setOpen] = React.useState("")
    const [totalPages, setTotalPages] = useState(0)
    const [active, setActive] = React.useState(1);

    const next = () => {
        if (active === totalPages) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };



    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    const getSearchResults = async () => {
        try {
            const finalSearchResults = []
            const response = await search.getMovieByTitle(searchTerm)
            setTotalPages(response.total_pages)
            for (let i = 0; i < response.results.length; i++) {
                if (response.results[i].media_type !== "person") {
                    finalSearchResults.push(response.results[i])
                }
            }
            for (let i = 0; i < finalSearchResults.length; i++) {
                if (finalSearchResults[i].media_type === "tv") {
                    finalSearchResults[i].media_type = "TV Show"
                }
                if (finalSearchResults[i].media_type === "movie") {
                    finalSearchResults[i].media_type = "Movie"
                }
            }
            for (let i = 0; i < finalSearchResults.length; i++) {
                if (finalSearchResults[i].release_date) {
                    finalSearchResults[i].release_date = new Date(finalSearchResults[i].release_date).getFullYear()
                }
                if (finalSearchResults[i].first_air_date) {
                    finalSearchResults[i].first_air_date = new Date(finalSearchResults[i].first_air_date).getFullYear()
                }
            }
            setSearchResults(finalSearchResults)
        } catch (error) {
            console.log(error)
        }
    }
    // const getTestingMovies = async () => {
    //     try {
    //         const response = await search.getMoviesTest()
    //         console.log(response)
    //         setSearchResults(response)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div
            className="flex flex-col items-center justify-center w-full h-full text-center"
        >
            {searchResults ? (
                <div className="pt-2 mx-full text-gray-600 dark:text-white fixed top-0 z-50 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        type="search"
                        name="search"
                        placeholder="Search"
                        onChange={(event) => {
                            console.log(event.target.value)
                            setSearchTerm(event.target.value)
                        }}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                setSearchTerm(searchTerm)
                                getSearchResults()
                                scrollToTop()
                                // getTestingMovies()
                            }
                        }}
                    />
                    <div className="flex flex-row justify-center gap-4">
                        
                        <Pagination
                            active={active}
                            totalPages={totalPages}
                            prev={prev}
                            next={next}
                        />
                        <Button
                            className="py-2 px-10 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-700 hover:text-white shadow-md hover:shadow-lg transition duration-500 ease-in-out my-4 "
                            onClick={() => {
                                console.log("Search button clicked")
                                setSearchTerm(searchTerm)
                                getSearchResults()
                                // getTestingMovies()
                                scrollToTop()

                            }}
                        >
                            Search
                        </Button>
                    </div>

                </div>
            ) : (

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
                                                getSearchResults()
                                                // getTestingMovies()
                                            }
                                        }}
                                    />
                                    <Button
                                        className="py-2 px-10 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-700 hover:text-white shadow-md hover:shadow-lg transition duration-500 ease-in-out my-6"
                                        onClick={() => {
                                            setSearchTerm(searchTerm)
                                            getSearchResults()
                                            // getTestingMovies()
                                        }}
                                    >
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>)}
            {searchResults && (
                <div className="flex flex-wrap justify-center gap-4 mt-20">

                    {searchResults.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            name={movie.title ? movie.title : movie.name}
                            year={movie.release_date ? movie.release_date : movie.first_air_date}
                            image_url={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750"}
                            overview={movie.overview}
                            media={movie.media_type}
                            open={open === movie.id}
                            openUseState={open}
                            onClick={() => handleOpen(movie.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}