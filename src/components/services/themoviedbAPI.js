import axios from 'axios';

const controller = new AbortController();

const abortSignal = {
  signal: controller.signal,
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '8473585e7b3f69428514e4fc6a23dc7e';

export const getTrends = async () => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}`,
    abortSignal
  );

  return response.data;
};

export const getFilmsByKeyword = async q => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${q}&page=1&include_adult=false`,
    abortSignal
  );

  return response.data;
};

export const getFilmsDetails = async filmId => {
  const response = await axios.get(
    `/movie/${filmId}?api_key=${API_KEY}&language=en-US`,
    abortSignal
  );

  return response.data;
};

export const getMovieCredits = async filmId => {
  const response = await axios.get(
    `/movie/${filmId}/credits?api_key=${API_KEY}&language=en-US`,
    abortSignal
  );

  return response.data;
};

export const getMovieRewiev = async filmId => {
  const response = await axios.get(
    `/movie/${filmId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    abortSignal
  );

  return response.data;
};

export const getFilmPostersById = async filmId => {
  const response = await axios.get(
    `/movie/${filmId}/images?api_key=${API_KEY}&include_image_language=null,en-US`,
    abortSignal
  );

  return response.data;
};
