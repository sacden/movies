import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <TextField id="outlined-basic" size="small" label="Search" variant="outlined" placeholder="Search" />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
