import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../services";

const aws_config = {
  accessKeyId: "AKIAIOSFODNN7EXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
};

export const useGetChickenRecipes = () =>
  useQuery({
    queryKey: ["recipes", "chicken"],
    queryFn: () => fetchRecipes("chicken"),
  });
