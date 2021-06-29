import React from "react";

import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ size = 40, name, bgcolor = "#000", iconcolor = "#fff" }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: bgcolor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconcolor} size={size / 2} />
    </View>
  );
}

export default Icon;

const styles = StyleSheet.create({});
