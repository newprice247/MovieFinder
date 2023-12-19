import React from "react";

import { Carousel, Typography, Button } from "@material-tailwind/react";

function CarouselItem(props) {
    return (
        <div className="relative h-[75vh] lg:h-[100vh] w-full mt-20 rounded-lg">
            <div className="absolute inset-0 bg-black/50 rounded-xl" />
            <div className="absolute inset-0 grid place-items-center">
                <div className="w-3/4 text-center">
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                    >
                        {props.description}
                    </Typography>
                    <div className="pt-2 relative mx-full text-gray-600">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                            type="search" name="search" placeholder="Search" />
                            <Button
                            className="py-2 px-10 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-700 hover:text-white shadow-md hover:shadow-lg transition duration-500 ease-in-out my-6"
                            >
                                Search
                            </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CarouselWithContent() {
    return (
        <Carousel className="rounded-xl">
            <CarouselItem
                title="Movie Finder"
                description="Find your favorite movies"
            />
            <CarouselItem
                title="TV Show Finder"
                description="Find your favorite television shows"
            />
        </Carousel>
    );
}