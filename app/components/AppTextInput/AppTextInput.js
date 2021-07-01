import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../../assets/config/color";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={25} style={styles.icon} />
      )}
      <TextInput style={styles.input} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    color: color.mediumgray,
    paddingRight: 10,
  },
  input: {
    width: "100%",
    fontSize: 18,
    color: color.mediumgray,
  },
});

export default AppTextInput;
