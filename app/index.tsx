import { useGetChickenRecipes } from "@/src/api";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

export default function HomeScreen() {
  const { data, isLoading, error } = useGetChickenRecipes();

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error loading recipes</Text>;

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => <Text>{item.strMeal}</Text>}
      />
    </View>
  );
}
