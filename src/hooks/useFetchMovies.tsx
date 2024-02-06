import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../redux/actions";
import { API_URL } from "../constants/common";

interface UseFetchMoviesArgs {
  apiKey: string;
  searchWord: string;
  page: number;
}

const useFetchMovies = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchMovies = useCallback(
    async ({ apiKey, searchWord, page }: UseFetchMoviesArgs) => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}?apikey=${apiKey}&s=${searchWord}&page=${page}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(getMovies(data));
      } catch (error) {
        console.error("Failed to fetch items:", error);
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
  );

  return { fetchMovies, loading };
};

export default useFetchMovies;
