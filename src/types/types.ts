export interface Movie {
  imdbID: string;
  Title: string;
  Poster?: string;
  Year?: string;
  Type?: string;
}

export interface MoviesState {
  Search?: Movie[];
}

export interface State {
  movies: MoviesState;
  favorites: MoviesState;
}

export interface Action {
  type: string;
  payload: any;
}
