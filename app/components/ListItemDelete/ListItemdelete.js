import React, { useState } from "react";
import { View, StyleSheet, ColorPropType } from "react-native";
import color from "../../assets/config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemdelete({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={25}
          color={color.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.danger,
    width: 70,
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  touchbar: {},
});
export default ListItemdelete;
