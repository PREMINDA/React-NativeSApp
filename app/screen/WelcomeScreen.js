import React from "react";
import { useFonts } from "expo-font";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import color from "../assets/config/color";
import AppButton from "../components/Button/Button.js";

function WelcomeScreen(props) {
  const [loaded, error] = useFonts({
    Lobster: require("../assets/fonts/Lobster.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/image/background.jpg")}
    >
      <View style={styles.imagecontainer}>
        <Image
          style={styles.logo}
          source={require("../assets/image/logo-red.png")}
        />
        <Text style={styles.titletext}>Sell What You Don't Need</Text>
      </View>
      <AppButton title="Login" onPress={() => console.log("Tapped")} />
      <AppButton
        title="Register"
        onPress={() => console.log("Tapped")}
        bgcolor={color.secondary}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  imagecontainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  titletext: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Lobster",
    color: color.titletext,
  },
});

export default WelcomeScreen;
