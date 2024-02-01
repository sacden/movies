import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import StarRounded from "@mui/icons-material/StarRounded";

import styles from "./Search.module.scss";

import { getMovies, addToFavorites, deleteFromFavorites } from "../../redux/actions";

import { Movie, State } from "../../types/types";

const Search: React.FC = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [searchWord, setSearchWord] = useState("");
  const [favorite, setFavorite] = useState(false);

  const movies = useSelector((state: State) => state.movies);
  const favorites = useSelector((state: State) => state.favorites);
  const dispatch = useDispatch();

  const searchMovies = () => {
    fetch(`http://omdbapi.com/?apikey=${apiKey}&s=${searchWord}`)
      .then((response) => response.json())
      .then((data) => dispatch(getMovies(data)));
  };

  const handleAddToFavorites = (movie: Movie) => {
    const isFavorite = favorites?.Search?.some((favoriteMovie: Movie) => favoriteMovie.imdbID === movie.imdbID);
    if (isFavorite) {
      dispatch(deleteFromFavorites(movie));
      setFavorite(!favorite);
    } else {
      dispatch(addToFavorites(movie));
      setFavorite(!favorite);
    }
  };

  return (
    <Container maxWidth="md">
      <Link to="/favorites">
        <Button variant="contained" color="primary">
          Favorites movies
        </Button>
      </Link>
      <Box sx={{ my: 4 }}>
        <div className={styles.searchBox}>
          <TextField className={styles.textField} style={{ border: "none" }} size="small" label="Search" placeholder="Search" onChange={(e) => setSearchWord(e.target.value)} />
          <Button className={styles.searchButton} color="primary" variant="outlined" onClick={searchMovies}>
            Search
          </Button>
        </div>

        <div className={styles.cardsContainer}>
          {movies.Search &&
            movies.Search.map((movie: Movie) => {
              const isFavorite = favorites?.Search?.some((favoriteMovie) => favoriteMovie.imdbID === movie.imdbID);

              return (
                <Card className={styles.movieCard} variant="outlined" key={movie.imdbID}>
                  {/* style={{ border: "none", backgroundColor: "#eff0f4 " }}  */}
                  {/* <CardHeader className={styles.header} title={movie.Title} /> */}

                  <div className={styles.cardMediaWrapper}>
                    {isFavorite === true ? (
                      <IconButton className={styles.favoriteButton} sx={{ color: "#ffc231" }} size="large" onClick={() => handleAddToFavorites(movie)}>
                        <StarRounded fontSize="large" />{" "}
                      </IconButton>
                    ) : (
                      <IconButton className={styles.favoriteButton} sx={{ color: "#ccc" }} size="large" onClick={() => handleAddToFavorites(movie)}>
                        <StarRounded fontSize="large" />{" "}
                      </IconButton>
                    )}

                    <Link to={`/movie/${movie.imdbID}`}>
                      <CardMedia className={styles.MuiCardMedia} component="img" image={movie.Poster} alt={movie.Title} />
                    </Link>
                  </div>
                </Card>
              );
            })}
        </div>
      </Box>
    </Container>
  );
};

export default Search;
