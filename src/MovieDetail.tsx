import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function MovieDetail() {
  let { imdbID } = useParams();
  let navigate = useNavigate();
  const movies = useSelector((state) => state.movies);

  const movie = movies.Search.find((movie) => movie.imdbID === imdbID);

  if (!movie) {
    <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{movie.title}</h2>

      <Card variant="outlined" key={movie.imdbID}>
        <CardHeader title={movie.Title} />
        <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
        <CardContent>
          <div>Year: {movie?.Year}</div>
          <div>Type: {movie?.Type}</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MovieDetail;
