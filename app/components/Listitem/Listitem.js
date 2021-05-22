import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../AppText/AppText";
import color from "../../assets/config/color";

function Listitem({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />

      <View style={styles.textcontainer}>
        <AppText style={styles.name}>{title}</AppText>
        <AppText style={styles.time}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    padding: 5,
    borderRadius: 16,
  },

  image: {
    height: 60,
    width: 60,
    borderRadius: 200,
    marginRight: 10,
  },
  textcontainer: {
    marginTop: 5,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    color: color.mediumgray,
  },
});

export default Listitem;
