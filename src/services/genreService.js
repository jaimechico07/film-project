import axios from 'axios';

const API_URL = 'http://localhost:4000/api'; // Cambia la URL según corresponda

export const fetchGenres = async () => {
  const response = await axios.get(`${API_URL}/genres/list`);
  return response.data;
};

export const fetchGenreById = async (id) => {
  const response = await axios.get(`${API_URL}/genres/${id}`);
  return response.data;
};