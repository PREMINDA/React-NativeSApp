import React from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../assets/config/color";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button1}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.button2}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
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
    position: "absolute",
    top: 30,
    left: 30,
  },
  button2: {
    position: "absolute",
    top: 30,
    right: 30,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height,
    resizeMode: "center",
  },
});
export default ViewImageScreen;
