import { create } from "zustand";
import { fetchMovies } from "../services/movieService";
import { fetchGenres } from "../services/genreService";

const useMovieStore = create((set) => ({
  
  movies: [],
  genres: [],

  loading: false,
  error: null,

  // Acción para obtener las películas y géneros
  getMoviesAndGenres: async () => {
    set({ loading: true, error: null });
    try {
      const [moviesData, genresData] = await Promise.all([
        fetchMovies(),
        fetchGenres(),
      ]);
      set({ movies: moviesData, genres: genresData, loading: false });
    } catch (error) {
      set({ error: "Error al obtener los datos", loading: false });
    }
  },



  
}));

export default useMovieStore;
