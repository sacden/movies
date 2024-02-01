import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";

import { getMovies, addToFavorites, deleteFromFavorites } from "./redux/actions";
import Star from "@mui/icons-material/Star";
import StarOutline from "@mui/icons-material/StarOutline";

const Search = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  //const [movies, setMovies] = useState({});
  const [searchWord, setSearchWord] = useState("");
  const [favorite, setFavorite] = useState(true);

  const movies = useSelector((state) => state.movies);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const searchMovies = () => {
    fetch(`http://omdbapi.com/?apikey=${apiKey}&s=${searchWord}`)
      .then((response) => response.json())
      .then((data) => dispatch(getMovies(data)));
  };

  const handleAddToFavorites = (movie) => {
    const isFavorite = favorites?.Search?.some((favoriteMovie) => favoriteMovie.imdbID === movie.imdbID);
    if (isFavorite) {
      dispatch(deleteFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Link to="/favorites">
          <Button variant="contained" color="secondary">
            View Favorites
          </Button>
        </Link>
        <TextField id="outlined-basic" size="small" label="Search" variant="outlined" placeholder="Search" onChange={(e) => setSearchWord(e.target.value)} />
        <Button variant="contained" color="primary" onClick={searchMovies}>
          Search
        </Button>

        {movies.Search &&
          movies.Search.map((movie, id) => (
            <Card variant="outlined" key={movie.imdbID}>
              <CardHeader title={movie.Title} />

              <Button variant="contained" color="primary" onClick={() => handleAddToFavorites(movie)}>
                {favorite === false ? <Star /> : <StarOutline />} Add to favorites
              </Button>

              <Link to={`/movie/${movie.imdbID}`}>
                <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
              </Link>
            </Card>
          ))}

        <div>{JSON.stringify(favorites)}</div>
      </Box>
    </Container>
  );
};

export default Search;
