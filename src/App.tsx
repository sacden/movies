import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search";
import MovieDetail from "./MovieDetail";
import Favorites from "./Favorites";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
