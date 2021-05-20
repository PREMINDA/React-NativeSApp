import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { useFonts } from "expo-font";

function AppText({ children, style = null }) {
  const [loaded, error] = useFonts({
    pdk: require("../../assets/fonts/Padauk.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "pdk",
  },
});

export default AppText;
