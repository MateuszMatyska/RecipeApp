import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../services";

export const useGetChickenRecipes = () =>
  useQuery({
    queryKey: ["recipes", "chicken"],
    queryFn: () => fetchRecipes("chicken"),
  });
