import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../assets/config/color";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button1}></View>
      <View style={styles.button2}></View>
      <Image
        style={styles.image}
        source={require("../assets/image/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.black,
    flex: 1,
  },
  button1: {
    width: 50,
    height: 50,
    backgroundColor: color.primary,
    position: "absolute",
    top: 30,
    left: 30,
  },
  button2: {
    width: 50,
    height: 50,
    backgroundColor: color.secondary,
    position: "absolute",
    top: 30,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
export default ViewImageScreen;
