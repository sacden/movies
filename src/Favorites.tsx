import { useParams, useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";

function Favorites() {
  let navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{movie.title}</h2>

      <Card variant="outlined" key={movie.imdbID}>
        <CardHeader title={movie.Title} />

        <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
      </Card>
    </div>
  );
}

export default Favorites;
