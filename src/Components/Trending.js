import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Movie from '../Components/Movie';
import {getTrendingMovie} from '../Api/Movies';

const Trending = () => {
  const [matches, setMatches] = useState([]); 
  useEffect(() => {
    getTrendingMovie()
      .then((response)=> {
        setMatches(response.results);
        console.log(response)
      })
      .catch();
  }, []);

return (
    <div className="flex flex-nowrap">
      {matches.map(item => 
        <Movie
          key={item.id}
          img={item.poster_path}
        />
      )}
    </div>
  )
}

export default Trending;

