export const getMovies = (movies) => {
  return {
    type: "MOVIES",
    payload: movies,
  };
};

export const getMovie = (movie) => {
  return {
    type: "MOVIE",
    payload: movie,
  };
};
