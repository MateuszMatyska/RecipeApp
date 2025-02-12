import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const fetchRecipes = async (query: string) => {
  const { data } = await axios.get(`${API_URL}${query}`);
  return data.meals;
};
