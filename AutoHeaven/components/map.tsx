import { Brand } from "@/types";
import { Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = ({ brands }: { brands: Brand[] }) => {

    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={brands.length > 0 ? {
                latitude: brands[0].city.latitude,
                longitude: brands[0].city.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            } : {
                latitude: 50.8503,
                longitude: 4.3517,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {brands.map((brand) => (
                <Marker
                    key={brand.id}
                    coordinate={{ latitude: brand.city.latitude, longitude: brand.city.longitude }}
                    title={brand.name}
                    description={`Founded: ${brand.founded} in ${brand.country}`}
                    pinColor="blue" >
                    <Image
                        source={{ uri: brand.logo }}
                        resizeMode="contain"
                        style={{ width: 40, height: 20, display: "flex" }} />
                </Marker>
            ))}
        </MapView>
    );
};
export default Map;