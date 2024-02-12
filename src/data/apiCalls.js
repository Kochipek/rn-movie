import { POPULAR_MOVIES, SEARCH_URL } from '../../constants';

export const fetchMovies = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMoviesByQuery = (query) => {
  const url = query.trim() === '' ? POPULAR_MOVIES : `${SEARCH_URL}&query=${query}`;
  return fetchMovies(url);
};
