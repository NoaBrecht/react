import { Model } from "@/types/types";
import { AntDesign } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";

interface ModelCardProps {
    model: Model;
    showFavorite: boolean;
    favorite?: number | null;
    setFavorite?: (id: number) => void;
}


const ModelCard = ({ model, showFavorite, favorite, setFavorite }: ModelCardProps) => {
    return (
        <View className="flex bg-white p-4 mb-4 rounded-lg shadow-md" style={styles.card && !showFavorite && styles.centeredCard}>
            <View className={`items-center justify-between w-full ${showFavorite ? 'flex-row' : ''}`}>
                <Text className="font-bold mb-2 flex-1 text-xl">{model.name}</Text>
                {showFavorite && (
                    <AntDesign
                        className="p-2"
                        onPress={() => setFavorite && setFavorite(model.id)}
                        name={favorite === model.id ? "heart" : "hearto"}
                        size={24}
                        color={favorite === model.id ? "red" : "grey"} />
                )}
            </View>
            <Text className="text-gray-700 mb-1">Year: {model.year}</Text>
            <Text className="text-gray-700 mb-1">Type: {model.type}</Text>
            <Text className="text-gray-700 mb-1">
                Fuel Type: {model.fuel_type}
            </Text>
            <Text className="text-gray-700 mb-1">
                Transmission: {model.transmission}
            </Text>
            <Text className="text-gray-700 mb-1">
                Top Speed: {model.top_speed_kmh} km/h
            </Text>
            <Text className="text-gray-700 mb-1">
                0-100 km/h: {model.acceleration_0_to_100_kmh} sec
            </Text>
            <Text className="text-gray-700 mb-1">
                Horsepower: {model.horsepower} hp
            </Text>
            <Text className="text-gray-700 mb-1">
                Seating Capacity: {model.seating_capacity}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        padding: 16,
        marginBottom: 16,
    },
    centeredCard: {
        justifyContent: "center",
        alignItems: "center",
    },
    brandName: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
    }
});
export default ModelCard;
