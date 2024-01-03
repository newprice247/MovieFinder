import React from 'react'
import { Checkbox, Button } from "@material-tailwind/react";
import Pagination from './Pagination.jsx'


export default function SearchBar(props) {

    return (
        <div className="pt-2 mx-full text-gray-600 dark:text-white fixed top-0 z-50 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mt-10">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                type="search"
                name="search"
                placeholder="Search"
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
            />
            <div className="flex flex-row justify-center gap-4">
                <div
                    className="flex flex-row justify-center gap-4 text-white items-center"
                >
                    <Checkbox id="movie" ripple={true} defaultChecked
                        className="text-gray-100 hover:bg-gray-700 hover:text-white  text-white font-semibold hover:bg-blue-700 hover:text-white shadow-md hover:shadow-lg transition duration-500 ease-in-out my-4"
                        onClick={props.movieOnClick}
                    />
                    <p>Show Movies</p>
                    <Checkbox id="tv" ripple={true} defaultChecked
                        className="text-gray-100 hover:bg-gray-700 hover:text-white text-white font-semibold hover:bg-blue-700 hover:text-white shadow-md hover:shadow-lg transition duration-500 ease-in-out my-4"
                        onClick={props.tvOnClick}
                    />
                    <p>Show Tv Shows</p>
                </div>
                {/* <Pagination
                active={props.active}
                totalPages={props.totalPages}
                prev={props.prev}
                next={props.next}
            /> */}
            <Button
                className="py-2 px-10 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-700 hover:text-white shadow-md hover:shadow-lg transition duration-500 ease-in-out my-4 "
                onClick={props.buttonOnClick}
            >
                Search
            </Button>
            </div>
            
        </div>
    )
}