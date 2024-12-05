import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, Linking } from "react-native";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Model } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [favorite, setFavorite] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  let getBrands = async () => {
    setLoading(true);
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8",
    };
    let response = await fetch("https://sampleapis.assimilate.be/car/models", {
      headers,
    });
    let data: Model[] = await response.json();
    setModels(data);
    setLoading(false);
  };

  useEffect(() => {
    const getFavorite = async () => {
      const favoriteModel = await AsyncStorage.getItem("favoriteModel");
      if (favoriteModel !== null) {
        setFavorite(parseInt(favoriteModel));
      }
    };
    getFavorite();
    getBrands();
  }, []);

  useEffect(() => {
    const storeData = async () => {
      if (favorite !== null) {
        await AsyncStorage.setItem("favoriteModel", favorite.toString());
      }
    };
    storeData();
  }, [favorite]);

  return (
    <>
      <View className="flex items-center justify-center my-2">
        <Link href="/newModel" replace>
          <View className="bg-blue-500 p-2 rounded-md">
            <Text className="text-white text-sm">Add a new model</Text>
          </View>
        </Link>
      </View>

      <FlatList
        data={models}
        renderItem={({ item }) => (
          <View className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <AntDesign
              onPress={() => setFavorite(item.id)}
              name={favorite === item.id ? "heart" : "hearto"}
              size={24}
              color={favorite === item.id ? "red" : "grey"}
              style={{ position: "absolute", top: 10, right: 10 }}
            />
            <Text className="text-lg font-bold mb-2">{item.name}</Text>
            <Text className="text-gray-700 mb-1">Year: {item.year}</Text>
            <Text className="text-gray-700 mb-1">Type: {item.type}</Text>
            <Text className="text-gray-700 mb-1">
              Fuel Type: {item.fuel_type}
            </Text>
            <Text className="text-gray-700 mb-1">
              Transmission: {item.transmission}
            </Text>
            <Text className="text-gray-700 mb-1">
              Top Speed: {item.top_speed_kmh} km/h
            </Text>
            <Text className="text-gray-700 mb-1">
              0-100 km/h: {item.acceleration_0_to_100_kmh} sec
            </Text>
            <Text className="text-gray-700 mb-1">
              Horsepower: {item.horsepower} hp
            </Text>
            <Text className="text-gray-700 mb-1">
              Seating Capacity: {item.seating_capacity}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={() => getBrands()}
        refreshing={loading}
      />
    </>
  );
};

export default Index;
