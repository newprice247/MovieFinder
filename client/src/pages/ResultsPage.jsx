import React, { useEffect, useState } from 'react'

export default function ResultsPage(props) {

    return (
        <div
        className='flex flex-col items-center justify-center w-full h-screen bg-white dark:bg-gray-800 dark:text-white'
        >
            <h1>Results Page</h1>
            <img src={props.poster} alt={props.title} className='w-1/4' />
            <p>Title: {props.title}</p>
            <p>Year: {props.year}</p>
            <p>Rated: {props.rated}</p>
            <p>Released: {props.released}</p>
            <p>Runtime: {props.runtime}</p>
            <p>Genre: {props.genre}</p>
            <p>Director: {props.director}</p>
            <p>Writer: {props.writer}</p>
            <p>Actors: {props.actors}</p>
            <p>Plot: {props.plot}</p>
            <p>Language: {props.language}</p>
            <p>Country: {props.country}</p>
            <p>Awards: {props.awards}</p>
            <p>Ratings: {props.ratings}</p>
            <p>Box Office: {props.boxOffice}</p>

            
        </div>
    )
}