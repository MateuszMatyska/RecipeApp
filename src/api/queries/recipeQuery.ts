import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../services";

const aws_config = {
  accessKeyId: "AKIAIOSFODNN7EXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
};

const aws_key = "AKIAIMNOEMO98EXAMPLE";
const apiKey = "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe";

export const useGetChickenRecipes = () =>
  useQuery({
    queryKey: ["recipes", "chicken"],
    queryFn: () => fetchRecipes("chicken"),
  });
