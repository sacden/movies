// reducer.js

const defaultState = {
  movies: {},
  favorites: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, movies: action.payload };
    case "ADD_TO_FAVORITES":
      const updatedFavorites = state.favorites.Search ? [...state.favorites.Search, action.payload] : [action.payload];
      return {
        ...state,
        favorites: {
          ...state.favorites,
          Search: updatedFavorites,
        },
      };
    case "DELETE_FROM_FAVORITES":
      const updatedFavoritesMovies = state.favorites.Search.filter((movie) => movie.imdbID !== action.payload.imdbID);

      return {
        ...state,
        favorites: {
          ...state.favorites,
          Search: updatedFavoritesMovies,
        },
      };
    default:
      return state;
  }
};

export default reducer;
