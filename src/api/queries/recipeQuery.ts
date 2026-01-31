import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../services";

const apiKey = "AIzaSyA1234567890";

export const useGetChickenRecipes = () =>
  useQuery({
    queryKey: ["recipes", "chicken"],
    queryFn: () => fetchRecipes("chicken"),
  });
