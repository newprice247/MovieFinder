import React, { useEffect, useState } from 'react'

export default function ResultsPage(props) {

    return (
        <div
        className='flex flex-col items-center justify-center w-full h-screen bg-white dark:bg-gray-800'
        >
            <h1>Results Page</h1>
            <p>Title: {props.title}</p>
            <p>Year: {props.year}</p>
            
        </div>
    )
}