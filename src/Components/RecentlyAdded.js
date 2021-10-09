import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Movie from './Movie';
import {getRecentlyAddedMovie} from '../Api/Movies';

const RecentlyAdded = () => {
  const [movies, setMovies] = useState([]); 
  useEffect(() => {
    getRecentlyAddedMovie()
      .then((response)=> {
        setMovies(response.results);
        console.log(response)
      })
      .catch();
  }, []);

return (
    <div className="flex flex-nowrap">
      {movies?.map(movie => 
        <Movie
          key={movie.id}
          img={movie.poster_path}
        />
      )}
    </div>
  )
}

export default RecentlyAdded;

