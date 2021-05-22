import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText/AppText.js";
import color from "../assets/config/color";
import Listitem from "./../components/Listitem/Listitem";

function Moredetail(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/image/jacket.jpg")}
      />
      <View style={styles.detailcontainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View styles={styles.userContainer}>
          <Listitem title="Preminda Bandara" subtitle="5 time" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailcontainer: {
    margin: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 0,
    marginLeft: 6,
  },
  price: {
    fontSize: 18,
    color: color.secondary,
    fontWeight: "bold",
    marginLeft: 6,
  },
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: color.secondary,
    marginBottom: 2,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default Moredetail;
