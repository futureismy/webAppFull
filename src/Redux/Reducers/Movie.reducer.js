import {
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST_SUCCESS,
  MOVIE_LIST_REQUEST,
} from "../Actions/type";

let initialState = {
  isLoading: false,
  movieList: null,
  movieDetail: null,
};

const MovieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_LIST_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_MOVIE_LIST_SUCCESS: {
      state.movieList = payload;
      state.isLoading = false;

      return { ...state };
    }
    case GET_MOVIE_DETAIL_SUCCESS: {
      state.movieDetail = payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default MovieReducer;
