import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style = null }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

export default AppText;
