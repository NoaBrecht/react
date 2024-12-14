import { useEffect, useState } from "react";
import { Text, TextInput, ScrollView, View, Button } from "react-native";
import { Brand, FuelType, Model, Transmission } from "@/types/types";
import { Picker } from "@react-native-picker/picker";
import * as Notifications from "expo-notifications";
import Background from "@/components/background";
import React from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const NewModel = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [name, setName] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<any>();
  const [type, setType] = useState<string>("Sedan");
  const [year, setYear] = useState<string>("2000");
  const [fuelType, setFuelType] = useState<FuelType>(FuelType.Petrol);
  const [topSpeed, setTopSpeed] = useState<string>("0");
  const [acceleration, setAcceleration] = useState<string>("0");
  const [horsepower, setHorsepower] = useState<string>("0");
  const [transmission, setTransmission] = useState<Transmission>(
    Transmission.Manual
  );
  const [seatingCapacity, setSeatingCapacity] = useState<string>("0");

  const newModel: Model = {
    id: 0,
    name: name,
    brand_id: selectedBrand,
    type: type,
    year: parseInt(year),
    fuel_type: fuelType,
    top_speed_kmh: parseInt(topSpeed),
    acceleration_0_to_100_kmh: parseInt(acceleration),
    horsepower: parseInt(horsepower),
    transmission: transmission,
    seating_capacity: parseInt(seatingCapacity),
  };

  const pushModel = async () => {
    try {
      if (
        !name ||
        name.trim().length === 0 ||
        !selectedBrand ||
        !year ||
        !fuelType ||
        !topSpeed ||
        !acceleration ||
        !horsepower ||
        !seatingCapacity
      ) {
        alert("All fields are required!");
        return;
      }
      if (
        isNaN(parseInt(topSpeed)) ||
        isNaN(parseInt(acceleration)) ||
        isNaN(parseInt(horsepower)) ||
        isNaN(parseInt(seatingCapacity))
      ) {
        alert(
          "Top Speed, Acceleration, Horsepower, and Seating Capacity must be numbers."
        );
        return;
      }
      if (
        parseInt(topSpeed) < 0 ||
        parseInt(acceleration) < 0 ||
        parseInt(horsepower) < 0 ||
        parseInt(seatingCapacity) < 0
      ) {
        alert(
          "Top Speed, Acceleration, Horsepower, and Seating Capacity must be positive numbers."
        );
        return;
      }
      const currentYear = new Date().getFullYear() + 1;
      if (parseInt(year) < 1885 || parseInt(year) > currentYear) {
        alert("Please enter a valid year between 1885 and the upcoming year.");
        return;
      }
      const response = await fetch(
        "https://sampleapis.assimilate.be/car/models",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newModel),
        }
      );
      if (!response.ok) {
        throw new Error(
          `Failed to post data: ${response.status} ${response.statusText}`
        );
      }
      // Stuur een notificatie bij succes
      await Notifications.scheduleNotificationAsync({
        content: {
          color: "#6200ee",
          title: `🎉 AutoHeaven - New Model Added! 🎉`,
          body: `The ${name} has been added. Check it out. 🚗💨`,
          sound: "default",
          vibrate: [200, 100, 200],
          priority: Notifications.AndroidNotificationPriority.HIGH,
        },
        trigger: null,
      });
      alert("Model added successfully!");
      setName("");
      setSelectedBrand(undefined);
      setType("Sedan");
      setYear("2000");
      setFuelType(FuelType.Petrol);
      setTopSpeed("0");
      setAcceleration("0");
      setHorsepower("0");
      setTransmission(Transmission.Manual);
      setSeatingCapacity("0");
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again later.");
    }
  };

  const getBrands = async () => {
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8",
    };
    const response = await fetch(
      "https://sampleapis.assimilate.be/car/brands",
      { headers }
    );
    const data: Brand[] = await response.json();
    setBrands(data);
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <>
      <Background />
      <ScrollView className="px-6 flex bg-white">
        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-2">Brand</Text>
          <Picker
            selectedValue={selectedBrand}
            onValueChange={(itemValue) => setSelectedBrand(itemValue)}
            className="bg-gray-100 p-3 rounded-md"
          >
            {brands.map((brand) => (
              <Picker.Item label={brand.name} value={brand.id} key={brand.id} />
            ))}
          </Picker>
        </View>

        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-2">Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            className="border border-gray-300 rounded-lg p-3 text-lg"
            placeholder="Enter model name" />
        </View>

        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-2">Type</Text>
          <Picker
            selectedValue={type}
            onValueChange={(itemValue) => setType(itemValue)}
            className="bg-gray-100 p-3 rounded-md"
          >
            {[
              "Sedan",
              "Wagon",
              "Hatchback",
              "Coupe",
              "Convertible",
              "SUV",
              "Van",
              "Pickup",
              "Truck",
              "Other",
            ].map((type) => (
              <Picker.Item label={type} value={type} key={type} />
            ))}
          </Picker>
        </View>

        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-2">Year</Text>
          <TextInput
            value={year}
            onChangeText={setYear}
            keyboardType="number-pad"
            className="border border-gray-300 rounded-lg p-3 text-lg"
            placeholder="Enter year" />
        </View>

        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-2">
            Fuel Type
          </Text>
          <Picker
            selectedValue={fuelType}
            onValueChange={(itemValue) => setFuelType(itemValue)}
            className="bg-gray-100 p-3 rounded-md"
          >
            <Picker.Item label="Diesel" value={FuelType.Diesel} />
            <Picker.Item label="Petrol" value={FuelType.Petrol} />
            <Picker.Item label="Hybrid" value={FuelType.Hybrid} />
            <Picker.Item label="Electric" value={FuelType.Electric} />
            <Picker.Item label="Hydrogen" value={FuelType.Hydrogen} />
            <Picker.Item label="CNG" value={FuelType.CNG} />
            <Picker.Item label="LPG" value={FuelType.LPG} />
            <Picker.Item label="Other" value={FuelType.Other} />
          </Picker>
        </View>

        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-2">
            Top Speed (km/h)
          </Text>
          <TextInput
            value={topSpeed.toString()}
            onChangeText={(text) => setTopSpeed(text.startsWith("0") ? text.slice(1) : text)}
            keyboardType="numeric"
            className="border border-gray-300 rounded-lg p-3 text-lg"
            placeholder="Enter top speed" />
        </View>

        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-2">
            Acceleration (0 to 100 km/h)
          </Text>
          <TextInput
            value={acceleration.toString()}
            onChangeText={(text) => setAcceleration(text.startsWith("0") ? text.slice(1) : text)}
            keyboardType="numeric"
            className="border border-gray-300 rounded-lg p-3 text-lg"
            placeholder="Enter acceleration" />
        </View>

        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-2">
            Horsepower
          </Text>
          <TextInput
            value={horsepower.toString()}
            onChangeText={(text) => setHorsepower(text.startsWith("0") ? text.slice(1) : text)}
            keyboardType="numeric"
            className="border border-gray-300 rounded-lg p-3 text-lg"
            placeholder="Enter horsepower" />
        </View>

        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-2">
            Transmission
          </Text>
          <Picker
            selectedValue={transmission}
            onValueChange={(itemValue) => setTransmission(itemValue)}
            className="bg-gray-100 p-3 rounded-md"
          >
            <Picker.Item label="Manual" value={Transmission.Manual} />
            <Picker.Item label="Automatic" value={Transmission.Automatic} />
            <Picker.Item label="Continuously Variable" value={Transmission.CVT} />
            <Picker.Item label="Dual-Clutch" value={Transmission.DCT} />
            <Picker.Item label="Sequential" value={Transmission.Sequential} />
            <Picker.Item label="Semi Automatic" value={Transmission.SemiAutomatic} />
            <Picker.Item label="Single Speed" value={Transmission.ElectricDrive} />
          </Picker>
        </View>

        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-2">
            Seating Capacity
          </Text>
          <TextInput
            value={seatingCapacity.toString()}
            onChangeText={(text) => setSeatingCapacity(text.startsWith("0") ? text.slice(1) : text)}
            keyboardType="numeric"
            className="border border-gray-300 rounded-lg p-3 text-lg"
            placeholder="Enter seating capacity" />
        </View>

        <Button title="Add Model" onPress={pushModel} />
      </ScrollView>
    </>
  );
};

export default NewModel;
