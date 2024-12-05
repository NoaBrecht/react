import { Brand } from "@/types";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  LocationObject,
  getCurrentPositionAsync,
} from "expo-location";

const Map = ({ brands }: { brands: Brand[] }) => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // Als de locatie nog niet is geladen, render dan een laadscherm of laat de kaart niet renderen
  if (!location) {
    return null; // Je kunt hier ook een laadscherm of een boodschap tonen
  }

  // Fallback regio als er geen merken zijn
  const fallbackRegion =
    brands.length > 0
      ? {
          latitude: brands[0].city.latitude,
          longitude: brands[0].city.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
      : {
          latitude: 50.8503,
          longitude: 4.3517,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };

  // Regio voor de kaart als de locatie beschikbaar is
  const region = location
    ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    : fallbackRegion;

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={region}
      showsUserLocation={true} // Laat de gebruikerslocatie zien
      followsUserLocation={true} // Volgt de locatie van de gebruiker
    >
      {brands.map((brand) => (
        <Marker
          key={brand.id}
          coordinate={{
            latitude: brand.city.latitude,
            longitude: brand.city.longitude,
          }}
          title={`${brand.name} (${brand.city.name})`}
          description={`Founded: ${brand.founded} in ${brand.country}`}
          pinColor="blue"
        >
          <Image
            source={{ uri: brand.logo }}
            resizeMode="contain"
            style={{ width: 40, height: 20 }}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default Map;
