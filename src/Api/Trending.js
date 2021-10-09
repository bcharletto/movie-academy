export const getTrendingMovie = () => (
    fetch(`http://localhost:5001/trending`)
      .then((response) => {
          return response.json();
      })
  );

  
