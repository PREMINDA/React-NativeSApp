import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import color from "../../assets/config/color";

function AppButton({ title, onPress, bgcolor = color.primary }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgcolor }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: "90%",

    marginBottom: 10,
  },
  text: {
    color: color.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
