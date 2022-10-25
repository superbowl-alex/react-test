import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '76ca17943e227c67de15be6c6d3599fa';

export async function fetchTrendingMovies() {
  const response = await axios(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
