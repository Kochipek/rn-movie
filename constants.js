require('dotenv').config();

export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = 'process.env.API_KEY_MOVIE';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const POPULAR_MOVIES = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
export const SEARCH_URL = `${BASE_URL}/search/movie?${API_KEY}`;
