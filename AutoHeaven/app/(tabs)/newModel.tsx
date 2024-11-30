import { useEffect, useState } from 'react';
import { Text, TextInput, ScrollView, View } from 'react-native';
import { Brand, Model } from '@/types';
import { Picker } from '@react-native-picker/picker';

const NewModel = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [models, setModels] = useState<Model[]>([]);
  const [name, setName] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<any>();
  const [type, setType] = useState<string>('Sedan');
  const [year, setYear] = useState<string>('2000');
  const [fuelType, setFuelType] = useState<string>('Petrol');
  const [topSpeed, setTopSpeed] = useState<string>('0');
  const [acceleration, setAcceleration] = useState<string>('0');
  const [horsepower, setHorsepower] = useState<string>('0');
  const [transmission, setTransmission] = useState<string>('Manual');
  const [seatingCapacity, setSeatingCapacity] = useState<string>('0');

  const getBrands = async () => {
    setLoading(true);
    const headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8',
    };
    const response = await fetch('https://sampleapis.assimilate.be/car/brands', { headers });
    const data: Brand[] = await response.json();
    setBrands(data);
    setLoading(false);
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <ScrollView className="px-6 py-4 bg-white">
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
          placeholder="Enter model name"
        />
      </View>

      <View className="mb-4">
        <Text className="text-xl font-semibold text-gray-800 mb-2">Type</Text>
        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
          className="bg-gray-100 p-3 rounded-md"
        >
          {['Sedan', 'Wagon', 'Hatchback', 'Coupe', 'Convertible', 'SUV', 'Van', 'Pickup', 'Truck', 'Other'].map(
            (type) => (
              <Picker.Item label={type} value={type} key={type} />
            )
          )}
        </Picker>
      </View>

      <View className="mb-4">
        <Text className="text-xl font-semibold text-gray-800 mb-2">Year</Text>
        <TextInput
          value={year}
          onChangeText={setYear}
          keyboardType="number-pad"
          className="border border-gray-300 rounded-lg p-3 text-lg"
          placeholder="Enter year"
        />
      </View>

      <View className="mb-4">
        <Text className="text-xl font-semibold text-gray-800 mb-2">Fuel Type</Text>
        <Picker
          selectedValue={fuelType}
          onValueChange={(itemValue) => setFuelType(itemValue)}
          className="bg-gray-100 p-3 rounded-md"
        >
          {['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Other'].map((fuel) => (
            <Picker.Item label={fuel} value={fuel} key={fuel} />
          ))}
        </Picker>
      </View>

      <View className="mb-4">
        <Text className="text-xl font-semibold text-gray-800 mb-2">Top Speed</Text>
        <TextInput
          value={topSpeed.toString()}
          onChangeText={(text) => setTopSpeed(text)}
          keyboardType="numeric"
          className="border border-gray-300 rounded-lg p-3 text-lg"
          placeholder="Enter top speed"
        />
      </View>

      <View className="mb-4">
        <Text className="text-xl font-semibold text-gray-800 mb-2">Acceleration</Text>
        <TextInput
          value={acceleration.toString()}
          onChangeText={(text) => setAcceleration(text)}
          keyboardType="numeric"
          className="border border-gray-300 rounded-lg p-3 text-lg"
          placeholder="Enter acceleration"
        />
      </View>

      <View className="mb-4">
        <Text className="text-xl font-semibold text-gray-800 mb-2">Horsepower</Text>
        <TextInput
          value={horsepower.toString()}
          onChangeText={(text) => setHorsepower(text)}
          keyboardType="numeric"
          className="border border-gray-300 rounded-lg p-3 text-lg"
          placeholder="Enter horsepower"
        />
      </View>

      <View className="mb-4">
        <Text className="text-xl font-semibold text-gray-800 mb-2">Transmission</Text>
        <Picker
          selectedValue={transmission}
          onValueChange={(itemValue) => setTransmission(itemValue)}
          className="bg-gray-100 p-3 rounded-md"
        >
          {['Manual', 'Automatic'].map((trans) => (
            <Picker.Item label={trans} value={trans} key={trans} />
          ))}
        </Picker>
      </View>

    <View className="mb-4">
      <Text className="text-xl font-semibold text-gray-800 mb-2">Seating Capacity</Text>
      <TextInput
        value={seatingCapacity}
        onChangeText={(text) => setSeatingCapacity(text.startsWith('0') ? text.slice(1) : text)}
        keyboardType="numeric"
        className="border border-gray-300 rounded-lg p-3 text-lg"
        placeholder="Enter seating capacity"
      />
    </View>
    </ScrollView>
  );
};

export default NewModel;
