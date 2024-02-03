import { Movie, State, Action } from "../types/types";

const defaultState: State = {
  movies: {},
  favorites: {},
};

const reducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return state.movies.Search
        ? {
            ...state,
            movies: {
              ...state.movies,
              Search: [...state.movies.Search, ...action.payload.Search],
            },
          }
        : { ...state, movies: action.payload };

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
      const updatedFavoritesMovies = state.favorites.Search ? state.favorites.Search.filter((movie: Movie) => movie.imdbID !== action.payload.imdbID) : [];
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
