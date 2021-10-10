import React, {useState, useEffect} from 'react';
import Movie from '../Components/Movie';
import {getMyListMovie} from '../Api/MyList';

function MyList () {
  const [movies, setMovies] = useState([]); 
  useEffect(() => {
    getMyListMovie()
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

export default MyList;
