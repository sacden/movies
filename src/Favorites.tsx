import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";

function Favorites() {
  let navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          {favorites.Search &&
            favorites.Search.map((movie, id) => (
              <Card variant="outlined" key={movie.imdbID}>
                <CardHeader title={movie.Title} />
                {/* {favorite === false ? <Star /> : <StarOutline />} */}
                <Link to={`/movie/${movie.imdbID}`}>
                  <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
                </Link>
              </Card>
            ))}

          <div>{JSON.stringify(favorites)}</div>
        </Box>
      </Container>
    </div>
  );
}

export default Favorites;
