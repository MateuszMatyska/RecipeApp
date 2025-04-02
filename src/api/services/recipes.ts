import { recipesApiAddress } from '@/src/consts/api';
import axios from 'axios';

export const fetchRecipes = async (query: string) => {
  const { data } = await axios.get(`${recipesApiAddress}${query}`);
  return data.meals;
};
