import axios from 'axios';

const API_URL = 'http://localhost:4000/api'; // Cambia la URL según corresponda

export const fetchMovies = async () => {
  const response = await axios.get(`${API_URL}/movies/list`);
  return response.data;
};

export const fetchMovieById = async (id) => {
  const response = await axios.get(`${API_URL}/movies/movies/${id}`);
  return response.data;
};

export const fetchPopularMovies = async () => {
  const response = await axios.get(`${API_URL}/popular`);
  return response.data;
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${API_URL}/trending`);
  return response.data;
};