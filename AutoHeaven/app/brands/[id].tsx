import { Model } from "@/types";
import { Tabs, useFocusEffect, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
interface Brand {
  name: string;
}
const Models = () => {
  const { id } = useLocalSearchParams();
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [brand, setBrand] = useState<Brand>();

  let getBrand = async () => {
    const baseURL = "https://sampleapis.assimilate.be/car/brands";
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8",
    };
    let response = await fetch(`${baseURL}?id=${id}`, { headers });
    let data: Brand[] = await response.json();
    setBrand(data[0]);
  };

  let getModelsForBrand = async () => {
    setLoading(true);
    const baseURL = "https://sampleapis.assimilate.be/car/models";
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8",
    };
    let response = await fetch(`${baseURL}?brand_id=${id}`, { headers });
    let data: Model[] = await response.json();
    setModels(data);
    setLoading(false);
  };
  useFocusEffect(
    React.useCallback(() => {
      getBrand();
      getModelsForBrand();
    }, [id])
  );
  return (
    <View>
      <Tabs.Screen
        options={{
          title: `Models of ${brand?.name}`,
          href: null,
        }}
      />
      <FlatList
        data={models}
        renderItem={({ item }) => (
          <View>
            <View className="p-4 m-2 bg-white rounded-lg shadow-md">
              <Text className="text-lg font-bold">{item.name}</Text>
              <Text className="text-gray-600">Year: {item.year}</Text>
              <Text className="text-gray-600">Type: {item.type}</Text>
              <Text className="text-gray-600">Fuel type: {item.fuel_type}</Text>
              <Text className="text-gray-600">
                Transmission: {item.transmission}
              </Text>
              <Text className="text-gray-600">
                Top speed: {item.top_speed_kmh} km/h
              </Text>
              <Text className="text-gray-600">
                Acceleration (0 to 100 km/h): {item.acceleration_0_to_100_kmh}{" "}
                sec
              </Text>
              <Text className="text-gray-600">
                Horsepower: {item.horsepower} hp
              </Text>
              <Text className="text-gray-600">
                Seating capacity: {item.seating_capacity}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={() => getModelsForBrand()}
        refreshing={loading}
      />
    </View>
  );
};
export default Models;
