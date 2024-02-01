export const getMovies = (movies) => {
  return {
    type: "GET_MOVIES",
    payload: movies,
  };
};

export const addToFavorites = (movie) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: movie,
  };
};

export const deleteFromFavorites = (movie) => {
  return {
    type: "DELETE_FROM_FAVORITES",
    payload: movie,
  };
};
