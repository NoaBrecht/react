import { Model } from "@/types";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
const Models = () => {
    const { id } = useLocalSearchParams();

    const [models, setModels] = useState<Model[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    let getBrands = async () => {
        setLoading(true);
        const baseURL = "https://sampleapis.assimilate.be/car/models";
        const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8' };
        let response = await fetch(`${baseURL}?brand_id=${id}`, { headers });
        let data: Model[] = await response.json();
        setModels(data);
        setLoading(false);
    };
    useEffect(() => {
        getBrands();
    }, []);
    return (
        <View>
            <Text>Models for brand {id}</Text>
            <FlatList
                data={models}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                onRefresh={() => getBrands()}
                refreshing={loading}
            />
        </View>
    )
}
export default Models;