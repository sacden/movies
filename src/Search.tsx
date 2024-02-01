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

import { getMovies } from "./redux/actions";

const Search = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  //const [movies, setMovies] = useState({});
  const [searchWord, setSearchWord] = useState("");

  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const searchMovies = () => {
    fetch(`http://omdbapi.com/?apikey=${apiKey}&s=${searchWord}`)
      .then((response) => response.json())
      .then((data) => dispatch(getMovies(data)));
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <TextField id="outlined-basic" size="small" label="Search" variant="outlined" placeholder="Search" onChange={(e) => setSearchWord(e.target.value)} />
        <Button variant="contained" color="primary" onClick={searchMovies}>
          Search
        </Button>
        {movies.Search &&
          movies.Search.map((movie, id) => (
            <Card variant="outlined" key={movie.imdbID}>
              <CardHeader title={movie.Title} />
              <Link to={`/movie/${movie.imdbID}`}>
                <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
              </Link>
            </Card>
          ))}

        <div>{JSON.stringify(movies)}</div>
      </Box>
    </Container>
  );
};

export default Search;
