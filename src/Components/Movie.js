import React from 'react'

const Movie = ({img}) => {
    return (
        <li className="peliculas flex flex-nowrap">
         <img src={"https://image.tmdb.org/t/p/w500"+[img]}></img>
        </li>
    )
}

export default Movie;

