import React from "react";
import { View, StyleSheet, ColorPropType } from "react-native";
import color from "../../assets/config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemdelete(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="trash-can" size={25} color={color.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListItemdelete;
