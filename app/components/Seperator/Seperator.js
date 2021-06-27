import React from "react";
import { View, StyleSheet } from "react-native";
import color from "../../assets/config/color";

function Seperator(props) {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: color.light,
  },
});

export default Seperator;
