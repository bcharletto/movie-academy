import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Movie from './Movie';
import {getRecentlyAddedMovie} from '../Api/Movies';

const RecentlyAdded = () => {
  const [matches, setMatches] = useState([]); 
  useEffect(() => {
    getRecentlyAddedMovie()
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

export default RecentlyAdded;

