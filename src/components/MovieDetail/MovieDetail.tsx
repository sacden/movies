import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CustomButton from "../Common/CustomButton/CustomButton";

import { Movie, State } from "../../types/types";
import styles from "./MovieDetail.module.scss";

function MovieDetail() {
  const { imdbID } = useParams<{ imdbID?: string }>();
  const navigate = useNavigate();
  const movies = useSelector((state: State) => state.movies);

  const movie = movies.Search ? movies.Search.find((movie: Movie) => movie.imdbID === imdbID) : null;

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 2, textAlign: "center" }}>
        <CustomButton onClick={() => navigate(-1)}>Back</CustomButton>

        <Card className={styles.container} variant="outlined">
          <CardHeader title={movie.Title} />
          <CardContent>
            <div>Year: {movie?.Year}</div>
            <div>Type: {movie?.Type}</div>
          </CardContent>
          <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
        </Card>
      </Box>
    </Container>
  );
}

export default MovieDetail;
