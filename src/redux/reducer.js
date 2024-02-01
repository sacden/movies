// reducer.js

const defaultState = {
  movies: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MOVIES":
      return { ...state, movies: action.payload };
    case "MOVIE":
      const movie = state.movies.find((m) => m.imdbID === action.payload);
      return { ...state, movie };
    default:
      return state;
  }
};

export default reducer;
