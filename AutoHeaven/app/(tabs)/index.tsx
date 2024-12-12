import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Brand } from "@/types/types";
import BrandCard from "@/components/brandCard";
import Background from "@/components/background";

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
    <>
      <Background />
      <FlatList
        data={brands}
        renderItem={({ item }) => (
          <BrandCard brand={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={() => getBrands()}
        refreshing={loading}
        contentContainerStyle={styles.flatListContent} />
    </>
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
  },
});

export default Index;
