import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, Linking } from "react-native";
import { Link, Tabs } from "expo-router";
import { Brand } from "@/types";
import { AntDesign, FontAwesome, FontAwesome6 } from "@expo/vector-icons";

const Index = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getBrands = async () => {
    setLoading(true);
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8' };
    let response = await fetch('https://sampleapis.assimilate.be/car/brands', { headers });
    let data: Brand[] = await response.json();
    setBrands(data);
    setLoading(false);
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (

    <FlatList
      data={brands}
      renderItem={({ item }) => (
        <View className="items-center p-4 bg-white rounded-2xl shadow-sm mb-6">
          <Link href={{
            pathname: "/brands/[id]",
            params: { id: item.id }
          }}>
            {/* Afbeelding teruggezet naar exact 100x100px zoals in je oorspronkelijke code */}
            <Image
              source={{ uri: item.logo }}
              style={{ width: 100, height: 100, resizeMode: "contain", marginBottom: 10 }} />
          </Link>
          <Text className="text-2xl font-semibold text-gray-900 mb-2">{item.name}</Text>
          <Text className="text-lg text-gray-700 mb-2">{item.country}</Text>
          <Text className="text-sm text-gray-600 mb-2">Founded: {item.founded}</Text>
          <Text className="text-sm text-gray-600 mb-3">City: {item.city.name}</Text>
          <Text
            className="text-blue-500 underline"
            onPress={() => Linking.openURL(item.website)}
          >
            {item.website.replace(/^https?:\/\/(www\.)?/, '')}
          </Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
      onRefresh={() => getBrands()}
      refreshing={loading} />
  );
};

export default Index;
