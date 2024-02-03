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

export const getPages = (page: number) => {
  return {
    type: "GET_PAGES",
    payload: page,
  };
};

export const getSearchWord = (word: string) => {
  return {
    type: "GET_SEARCH_WORD",
    payload: word,
  };
};

export const removeMovies = () => {
  return {
    type: "REMOVE_MOVIES",
    payload: {},
  };
};
