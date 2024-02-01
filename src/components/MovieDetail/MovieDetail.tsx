import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

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
    <div>
      <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
        Back
      </Button>

      <Card className={styles.container} variant="outlined">
        <CardHeader title={movie.Title} />
        <CardContent>
          <div>Year: {movie?.Year}</div>
          <div>Type: {movie?.Type}</div>
        </CardContent>
        <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
      </Card>
    </div>
  );
}

export default MovieDetail;
