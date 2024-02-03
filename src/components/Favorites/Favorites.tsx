import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";

import { Movie, State } from "../../types/types";

function Favorites() {
  let navigate = useNavigate();
  const favorites = useSelector((state: State) => state.favorites);

  return (
    <div>
      <Container maxWidth="sm">
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Box sx={{ my: 4, textAlign: "center" }}>
          <h1>Favorites</h1>
          {favorites.Search &&
            favorites.Search.map((movie: Movie) => (
              <Card variant="outlined" key={movie.imdbID}>
                <CardHeader title={movie.Title} />
                <Link to={`/movie/${movie.imdbID}`}>
                  <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
                </Link>
              </Card>
            ))}
        </Box>
      </Container>
    </div>
  );
}

export default Favorites;
