import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import color from "../../assets/config/color";

function Card({ image, title, subtitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagecontainer} source={image} />
      <View style={styles.texcontainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Price : {subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: color.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  imagecontainer: {
    width: "100%",
    height: 200,
  },
  texcontainer: {
    padding: 10,
  },
  title: {
    color: color.secondary,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    marginBottom: 7,
  },
});

export default Card;
