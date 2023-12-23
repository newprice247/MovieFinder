// import React, { useState, useEffect } from 'react'
// import MovieCard from '../components/modules/MovieCard'
// import search from '../../utils/API'

// export default function ResultsPage() {
//     const [searchTerm, setSearchTerm] = useState('')
//     const [searchResults, setSearchResults] = useState([])

//     useEffect(() => {
//         const results = search(searchTerm)
//         setSearchResults(results)
//     }, [searchTerm])


//     return (
//         <div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//                 {searchResults.map((movie) => (
//                     <MovieCard
//                         key={movie.id}
//                         title={movie.name}
//                         releaseDate={movie.year}
//                         image={movie.image_url}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }