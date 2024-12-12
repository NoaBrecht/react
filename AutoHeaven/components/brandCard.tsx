import { Brand } from "@/types/types";
import { Link } from "expo-router";
import { Text, View, Image, Linking, StyleSheet } from "react-native";
interface BrandCardProps {
    brand: Brand;
}
const BrandCard = ({ brand }: BrandCardProps) => {
    return (
        <View style={styles.card}>
            <Link
                href={{
                    pathname: "/brands/[id]",
                    params: { id: brand.id },
                }}
                style={{ width: "100%" }}
            >
                <View style={styles.cardContent}>
                    <Image
                        source={{ uri: brand.logo }}
                        style={styles.logo}
                    />
                    <Text style={styles.brandName}>{brand.name}</Text>
                    <Text style={styles.country}>{brand.country}</Text>
                    <Text style={styles.founded}>Founded: {brand.founded}</Text>
                    <Text style={styles.city}>City: {brand.city.name}</Text>
                    <Text
                        style={styles.website}
                        onPress={() => Linking.openURL(brand.website)}
                    >
                        {brand.website.replace(/^https?:\/\/(www\.)?/, "")}
                    </Text>
                </View>
            </Link>
        </View>
    )
}
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
        width: "100%",
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

export default BrandCard;