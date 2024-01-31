import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";

import "./App.css";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState({});
  const [searchWord, setSearchWord] = useState("");

  const searchMovies = () => {
    fetch(`http://omdbapi.com/?apikey=${apiKey}&s=${searchWord}`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  };

  if (!movies) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <TextField id="outlined-basic" size="small" label="Search" variant="outlined" placeholder="Search" onChange={(e) => setSearchWord(e.target.value)} />
          <Button variant="contained" color="primary" onClick={searchMovies}>
            Search
          </Button>
          {movies.Search?.map((movie) => (
            <Card variant="outlined" key={movie.imdbID}>
              <CardHeader title={movie.Title} />
              <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
            </Card>
          ))}

          {/* <div>{JSON.stringify(movies)}</div> */}
        </Box>
      </Container>
    </>
  );
}

export default App;
