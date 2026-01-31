import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../services";

const aws_key = "AKIAIMNOEMO88EXAMPLE";
const apiKey = "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe";

export const useGetChickenRecipes = () =>
  useQuery({
    queryKey: ["recipes", "chicken"],
    queryFn: () => fetchRecipes("chicken"),
  });
