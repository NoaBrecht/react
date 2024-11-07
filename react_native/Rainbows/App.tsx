import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import { View, StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default function App() {
  {
    const rainbowColors = rainbow(100);
    const rainbowStyle = {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignContent: "space-around",
    };
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
  }
});