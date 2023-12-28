import React, { useState, useEffect } from "react";
import MovieCard from "../components/modules/MovieCard";
import search from "../../utils/API";

import { Carousel, Typography, Button } from "@material-tailwind/react";
import { stringify } from "uuid";

// function CarouselItem(props) {
//     return (
//         <div className="relative h-[75vh] lg:h-[100vh] w-full mt-20 rounded-lg">
//             <div className="absolute inset-0 bg-black/50 rounded-xl" />
//             <div className="absolute inset-0 grid place-items-center">
//                 <div className="w-3/4 text-center">
//                     <Typography
//                         variant="h1"
//                         color="white"
//                         className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//                     >
//                         {props.title}
//                     </Typography>
//                     <Typography
//                         variant="lead"
//                         color="white"
//                         className="mb-12 opacity-80"
//                     >
//                         {props.description}
//                     </Typography>
//                     <div className="pt-2 relative mx-full text-gray-600">
//                         <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
//                             type="search" name="search" placeholder="Search" />
//                         <Button
//                             className="py-2 px-10 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-700 hover:text-white shadow-md hover:shadow-lg transition duration-500 ease-in-out my-6"
//                             onClick={() => {
//                                 console.log("Search button clicked")
//                             }}
//                         >
//                             Search
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function CarouselWithContent() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState(null)

    // const getSearchResults = async () => {
    //     try {
    //         const response = await search.getMovieByTitle(searchTerm)
    //         console.log(response.results)
    //         setSearchResults(response.results)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const getTestingMovies = async () => {
        try {
            const response = await search.getMoviesTest()
            console.log(response)
            setSearchResults(response)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Carousel className="rounded-xl">
                <div className="relative h-[75vh] lg:h-[100vh] w-full mt-20 rounded-lg">
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
                                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                                    type="search" name="search" placeholder="Search"
                                    onChange={(event) => {
                                        console.log(event.target.value)
                                        setSearchTerm(event.target.value)
                                    }}
                                    />
                                <Button
                                    className="py-2 px-10 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-700 hover:text-white shadow-md hover:shadow-lg transition duration-500 ease-in-out my-6"
                                    onClick={() => {
                                        console.log("Search button clicked")
                                        
                                        setSearchTerm(searchTerm)
                                        // getSearchResults()
                                        getTestingMovies()
                                        
                                    }}
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
            {searchResults && (
                <div className="flex flex-wrap justify-center gap-4">
                    {searchResults.map((movie) => (
                        <MovieCard
                            key={movie.results}
                            title={movie.name}
                            releaseDate={movie.year}
                            image={movie.image_url}
                        />
                    ))}
                </div>
            )}
        </>
    );
}