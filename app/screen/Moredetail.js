import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText/AppText.js";
import color from "../assets/config/color";

function Moredetail(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/image/jacket.jpg")}
      />
      <View style={styles.textcontainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>

        <AppText style={styles.price}>$100</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  textcontainer: {
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 0,
  },
  price: {
    fontSize: 18,
    color: color.secondary,
  },
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: color.secondary,
    marginBottom: 2,
  },
});

export default Moredetail;
