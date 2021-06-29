import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

function Screen(props) {
  return <SafeAreaView style={styles.area}>{props.children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  area: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
