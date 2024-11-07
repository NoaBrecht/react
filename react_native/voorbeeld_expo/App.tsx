import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>testen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: { width: 100, height: 100 },
  Text: { color: 'white' }
});
