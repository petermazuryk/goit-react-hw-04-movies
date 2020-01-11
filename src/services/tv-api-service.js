const apiKey = '050c43457034808d11eed6eed8cf2d51';

const getTrending = () =>
  fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
  ).then(res => res.json().then(data => data.results));

const searchMovies = query =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
  )
    .then(res => res.json())
    .then(data => data.results);

const getMovieDetails = movieId =>
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
  ).then(res => res.json());

const getMovieCredits = movieId =>
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
  )
    .then(res => res.json())
    .then(data => data.cast);

const getMovieReviews = movieId =>
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`,
  )
    .then(res => res.json())
    .then(data => data.results);

export default {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
