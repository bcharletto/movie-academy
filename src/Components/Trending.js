import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Movie from '../Components/Movie';
import {getTrendingMovie} from '../Api/Movies';

const Trending = () => {
  const [movies, setMovies] = useState([]); 
  useEffect(() => {
    getTrendingMovie()
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

export default Trending;

