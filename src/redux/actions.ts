import { Movie } from "../types/types";

export const getMovies = (movies: Movie[]) => {
  return {
    type: "GET_MOVIES",
    payload: movies,
  };
};

export const addToFavorites = (movie: Movie) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: movie,
  };
};

export const deleteFromFavorites = (movie: Movie) => {
  return {
    type: "DELETE_FROM_FAVORITES",
    payload: movie,
  };
};
