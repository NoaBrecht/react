import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, Linking } from "react-native";
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

    <FlatList
      data={brands}
      renderItem={({ item }) => (
        <View style={{ alignItems: 'center', padding: 20, backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
          <Link href={{
            pathname: "/brands/[id]",
            params: { id: item.id }
          }}>
            <Image source={{ uri: item.logo }} style={{ width: 100, height: 100, resizeMode: "contain", marginBottom: 10 }} />
          </Link>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 5, color: '#333' }}>{item.name}</Text>
          <Text style={{ fontSize: 18, color: '#555', marginBottom: 5 }}>{item.country}</Text>
          <Text style={{ fontSize: 16, color: '#777', marginBottom: 5 }}>Founded: {item.founded}</Text>
          <Text style={{ fontSize: 16, color: '#777', marginBottom: 5 }}>City: {item.city.name}</Text>
          <Text style={{ fontSize: 16, color: '#1e90ff', textDecorationLine: 'underline' }} onPress={() => Linking.openURL(item.website)}>
            {item.website.replace(/^https?:\/\/(www\.)?/, '')}
          </Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
      onRefresh={() => getBrands()}
      refreshing={loading}
    />
  );
}

export default Index;
