import {
    FETCH_MOVIE_DETAILS_REQUEST,
    FETCH_MOVIE_DETAILS_SUCCESS,
    FETCH_MOVIE_DETAILS_FAILURE,
  } from '../actions/movieActions';
  
  const initialState = {
    movieDetails: null,
    error: null,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIE_DETAILS_REQUEST:
        return { ...state, error: null };
      case FETCH_MOVIE_DETAILS_SUCCESS:
        return { ...state, movieDetails: action.payload,  error: null };
      case FETCH_MOVIE_DETAILS_FAILURE:
        return { ...state,  error: action.payload };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  