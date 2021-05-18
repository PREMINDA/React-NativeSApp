import React from "react";
import { Image, StyleSheet, View } from "react-native";

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
    backgroundColor: "#000",
    flex: 1,
  },
  button1: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 30,
    left: 30,
  },
  button2: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
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
