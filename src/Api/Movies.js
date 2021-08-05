export const getTrendingMovie = () => 
  // https://api.themoviedb.org/3/trending/all/week?api_key=35ae0ab849a7893db02cf33f003e017f
  fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=35ae0ab849a7893db02cf33f003e017f`)
    .then(response => response.json());

export const getTopRatedMovie = () =>
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=35ae0ab849a7893db02cf33f003e017f&language=en-US&page=1`)
    .then(response => response.json());


