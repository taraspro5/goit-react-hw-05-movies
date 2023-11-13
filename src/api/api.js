import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTcwNmQwNzY2MjUxMDllY2U4ZTBhYjg1NDc3MWJlZCIsInN1YiI6IjY1NDc4ZTI0ZmQ0ZjgwMDBhZTJiMDRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I6QsMgvHA3pGHvgsaOP6LSm-tj7SjI-CrKCLa_sS7kQ',
  },
};

export const fetchAllMovies = async () => {
  const resp = await axios.get('/trending/all/day?language=en-US', options);
  return resp.data;
};

export const fetchMovieBySearch = async toSearch => {
  const resp = await axios.get(
    `/search/movie?query=${toSearch}&include_adult=false&language=en-US`,
    options
  );
  return resp.data;
};

export const fetchMovieDetails = async movieId => {
  const resp = await axios.get(`/movie/${movieId}?language=en-US`, options);
  return resp.data;
};

export const fetchMovieCredits = async movieId => {
  const resp = await axios.get(
    `movie/${movieId}/credits?language=en-US`,
    options
  );
  return resp.data;
};

export const fetchMovieReviews = async movieId => {
  const resp = await axios.get(
    `/movie/${movieId}/reviews?language=en-US`,
    options
  );
  return resp.data;
};
