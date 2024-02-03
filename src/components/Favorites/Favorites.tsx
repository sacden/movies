import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Favorites.module.scss";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CustomButton from "../Common/CustomButton/CustomButton";

import { Movie, State } from "../../types/types";

function Favorites() {
  let navigate = useNavigate();
  const favorites = useSelector((state: State) => state.favorites);

  return (
    <div>
      <Container maxWidth="md">
        <CustomButton onClick={() => navigate(-1)}>Back</CustomButton>
        <Box sx={{ my: 2, textAlign: "center" }}>
          <h1>Favorites</h1>
          <div className={styles.cardsContainer}>
            {favorites.Search &&
              favorites.Search.map((movie: Movie) => (
                <Card className={styles.movieCard} variant="outlined" key={movie.imdbID}>
                  <div className={styles.cardMediaWrapper}>
                    <Link to={`/movie/${movie.imdbID}`}>
                      <CardMedia className={styles.MuiCardMedia} component="img" image={movie.Poster} alt={movie.Title} />
                    </Link>
                  </div>
                </Card>
              ))}
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default Favorites;
