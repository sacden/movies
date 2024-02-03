import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Search.module.scss";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CustomButton from "../Common/CustomButton/CustomButton";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import StarRounded from "@mui/icons-material/StarRounded";

import { getMovies, addToFavorites, deleteFromFavorites, getPages, getSearchWord, removeMovies } from "../../redux/actions";

import { Movie, State } from "../../types/types";

import { API_URL } from "../../constants/common";

const Search: React.FC = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  const movies = useSelector((state: State) => state.movies);
  const favorites = useSelector((state: State) => state.favorites);
  const page = useSelector((state: State) => state.page);
  const searchWord = useSelector((state: State) => state.searchWord);
  const dispatch = useDispatch();

  const changeSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getSearchWord(e.target.value));
    dispatch(removeMovies());
    dispatch(getPages(1));
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 100;
      const isBottom = window.innerHeight + document.documentElement.scrollTop + scrollOffset >= document.documentElement.offsetHeight;
      if (isBottom && !loading) {
        fetchMovies();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const fetchMovies = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}?apikey=${apiKey}&s=${searchWord}&page=${page}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      dispatch(getMovies(data));
      dispatch(getPages(page + 1));
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Link to="/favorites">
        <CustomButton>Favorite movies</CustomButton>
      </Link>
      <Box sx={{ my: 4 }}>
        <div className={styles.searchBox}>
          <TextField
            className={styles.textField}
            sx={{
              border: "none",
              marginRight: "20px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
                color: "#9baacf",
              },
            }}
            size="small"
            label="Search"
            onChange={changeSearchWord}
            value={searchWord}
          />
          <CustomButton onClick={fetchMovies}>Search</CustomButton>
        </div>

        <div className={styles.cardsContainer}>
          {movies.Search &&
            movies.Search.map((movie: Movie) => {
              const isFavorite = favorites?.Search?.some((favoriteMovie) => favoriteMovie.imdbID === movie.imdbID);

              return (
                <Card className={styles.movieCard} variant="outlined" key={movie.imdbID}>
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
