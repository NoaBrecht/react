import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, Linking } from "react-native";
import Map from "@/components/map";
import { Link } from "expo-router";
import { Brand } from "@/types";

const Index = () => {

  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  let getBrands = async () => {
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
    <View className="flex-1 flex-col">

      <View className="flex-1 flex-col">
        <FlatList
          data={brands}
          renderItem={({ item }) => (

            <View className="items-center p-5 border-b border-gray-200 bg-white shadow-sm rounded-lg">

              <View className="absolute top-2 right-2">
                <Text className="text-2xl">♡</Text>
              </View>
              <Link href={{
                pathname: "/brands/[id]",
                params: { id: item.id }
              }}>
                <Image source={{ uri: item.logo }} className="w-24 h-24 mb-4 rounded-full" style={{ resizeMode: "contain" }} />
              </Link>

              <Text className="text-2xl font-semibold mb-2 text-gray-900">{item.name}</Text>
              <Text className="text-lg text-gray-700 mb-1">{item.country}</Text>
              <Text className="text-base text-gray-600 mb-1">Founded: {item.founded}</Text>
              <Text className="text-base text-gray-600 mb-1">City: {item.city.name}</Text>
              <Text className="text-base text-blue-600 mb-1 underline" onPress={() => Linking.openURL(item.website)}>
                {item.website.replace(/^https?:\/\/(www\.)?/, '')}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          onRefresh={() => getBrands()}
          refreshing={loading}
        />
      </View>
      {!loading && (
        <View className="h-1/3">
          <Map brands={brands} />
        </View>
      )}
    </View>
  );
}

export default Index;
