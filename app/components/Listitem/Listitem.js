import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../AppText/AppText";

function Listitem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={require("../../assets/image/asd.jpg")}
        />
      </View>
      <View style={styles.textcontainer}>
        <AppText>Preminda Bandara</AppText>
        <AppText>5% time</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    padding: 5,
    borderRadius: 16,
  },
  imagecontainer: {
    height: 60,
    width: 60,
    borderRadius: 200,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textcontainer: {
    marginTop: 5,
    marginLeft: 10,
  },
});

export default Listitem;
