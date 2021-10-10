import React, {useState, useEffect} from 'react';
import Movie from './Movie';
import {getRecentlyAddedMovie} from '../Api/RecentlyAdded';

function RecentlyAdded () {
  const [movies, setMovies] = useState([]); 
  useEffect(() => {
    getRecentlyAddedMovie()
      .then((response)=> {
        setMovies(response);
        console.log(response)
      })
  }, []);

return (
    <div className="flex flex-nowrap">
      {movies?.map((movie) => (
        <Movie
          key={movie.id}
          img={movie.poster_path}
        />
      ))}
    </div>
  )
}

export default RecentlyAdded;

