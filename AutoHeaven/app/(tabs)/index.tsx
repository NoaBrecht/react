import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, Linking, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Brand } from "@/types";

const Index = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getBrands = async () => {
    setLoading(true);
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8",
    };
    let response = await fetch("https://sampleapis.assimilate.be/car/brands", {
      headers,
    });
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
        <View style={styles.card}>
          <Link
            href={{
              pathname: "/brands/[id]",
              params: { id: item.id },
            }}
            style={{ width: "100%" }}
          >
            <View style={styles.cardContent}>
              <Image
                source={{ uri: item.logo }}
                style={styles.logo}
              />
              <Text style={styles.brandName}>{item.name}</Text>
              <Text style={styles.country}>{item.country}</Text>
              <Text style={styles.founded}>Founded: {item.founded}</Text>
              <Text style={styles.city}>City: {item.city.name}</Text>
              <Text
                style={styles.website}
                onPress={() => Linking.openURL(item.website)}
              >
                {item.website.replace(/^https?:\/\/(www\.)?/, "")}
              </Text>
            </View>
          </Link>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      onRefresh={() => getBrands()}
      refreshing={loading}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    padding: 16,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    alignItems: "center",
    textAlign: "center",
    width: "100%", // Ensure it takes the full width
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 12,
    borderRadius: 12,
  },
  brandName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  country: {
    fontSize: 14,
    color: "#666",
  },
  founded: {
    fontSize: 12,
    color: "#777",
  },
  city: {
    fontSize: 12,
    color: "#777",
  },
  website: {
    fontSize: 12,
    color: "#1E90FF",
    marginTop: 8,
    textDecorationLine: "underline",
  },
});

export default Index;
